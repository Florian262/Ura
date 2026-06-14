import { describe, it } from 'vitest';
import { ALL_UNIFIED_LESSONS } from '../src/infrastructure/db/lessons';
import { lookupWord, cleanTurkishWord, unifiedDictionary } from '../src/core/harmony/stemmer';
import { readingGlossary } from '../src/infrastructure/db/readingGlossary';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

describe('Automated Glossary Generator and Verification Pipeline', () => {
  it('should scan all reading texts, pre-compute inflected translations, and update readingGlossary.ts', { timeout: 300000 }, () => {
    const glossaryPath = path.join(__dirname, '../src/infrastructure/db/readingGlossary.ts');
    
    // 1. Initialize our working glossary copy with the existing manual glossary entries
    const updatedGlossary: Record<number, Record<string, { root: string; translation: string; explanation?: string }>> = {};
    
    // Copy existing glossary entries
    for (const chapterIdStr of Object.keys(readingGlossary)) {
      const chapterId = parseInt(chapterIdStr, 10);
      updatedGlossary[chapterId] = { ...readingGlossary[chapterId] };
    }

    const unresolvableWordsReport: Array<{ lessonId: number; level: string; word: string; sentence: string }> = [];
    let newEntriesCount = 0;

    // 2. Scan each lesson's reading content
    for (const lesson of ALL_UNIFIED_LESSONS) {
      console.log(`Scanning Lesson ${lesson.id}: ${lesson.title.turkish} (${lesson.level})`);
      const chapterId = lesson.id;
      if (!updatedGlossary[chapterId]) {
        updatedGlossary[chapterId] = {};
      }

      for (const block of lesson.reading.content) {
        // Tokenize words using the exact same logic as InteractiveText.tsx
        const tokens = block.text.split(/(\s+|[.,!;/?:()"]+)/);
        
        // Group adjacent word tokens if they form a compound word in our dictionary
        interface GroupedToken {
          text: string;
          isWord: boolean;
        }
        const groupedTokens: GroupedToken[] = [];
        let i = 0;
        while (i < tokens.length) {
          const token = tokens[i];
          const isWord = /^[a-zçğışöüÇĞİŞÖÜâîûÂÎÛ]+$/i.test(token.replace(/['’]/g, ''));

          if (!isWord) {
            groupedTokens.push({ text: token, isWord: false });
            i++;
            continue;
          }

          let nextWordIdx = -1;
          let intermediateTokens: string[] = [];
          for (let j = i + 1; j < tokens.length; j++) {
            const t = tokens[j];
            const isNextWord = /^[a-zçğışöüÇĞİŞÖÜâîûÂÎÛ]+$/i.test(t.replace(/['’]/g, ''));
            if (isNextWord) {
              nextWordIdx = j;
              break;
            }
            intermediateTokens.push(t);
          }

          if (nextWordIdx !== -1) {
            const nextWordToken = tokens[nextWordIdx];
            const cleanCombined = cleanTurkishWord(token + nextWordToken);
            const compoundMatch = lookupWord(cleanCombined);

            if (compoundMatch) {
              const mergedText = [token, ...intermediateTokens, nextWordToken].join('');
              groupedTokens.push({ text: mergedText, isWord: true });
              i = nextWordIdx + 1;
              continue;
            }
          }

          groupedTokens.push({ text: token, isWord: true });
          i++;
        }

        for (const item of groupedTokens) {
          if (!item.isWord) continue;
          const token = item.text;
          const cleanToken = cleanTurkishWord(token);
          
          // If the word is already in the glossary (manual override or previously generated), skip
          if (updatedGlossary[chapterId][cleanToken]) {
            continue;
          }

          // Check if it's a direct match as a root word in the dictionary (no suffixes)
          const directMatch = unifiedDictionary.find(entry => cleanTurkishWord(entry.word) === cleanToken);
          if (directMatch) {
            // Direct matches (root words) don't need a glossary entry unless they're irregular/idiomatic,
            // which can be added manually. The frontend fallback handles them perfectly.
            continue;
          }

          // Run morphological analyzer
          const resolved = lookupWord(token);
          if (resolved) {
            // If the resolved word has suffix modifications (contextual differs from base, or suffix notes exist)
            const hasSuffixes = resolved.rootTranslation && resolved.rootTranslation !== resolved.translation;
            const hasNotes = !!resolved.notes;

            if (hasSuffixes || hasNotes) {
              updatedGlossary[chapterId][cleanToken] = {
                root: resolved.inflection || resolved.word,
                translation: resolved.translation,
                explanation: resolved.notes || undefined
              };
              newEntriesCount++;
            }
          } else {
            // Unresolvable word - flag it!
            unresolvableWordsReport.push({
              lessonId: lesson.id,
              level: lesson.level,
              word: cleanToken,
              sentence: block.text
            });
          }
        }
      }
    }

    // 3. Construct the updated TypeScript file content
    let fileContent = `export interface GlossaryEntry {
  root: string;
  translation: string;
  explanation?: string;
}

export type ReadingGlossary = Record<number, Record<string, GlossaryEntry>>;

export const readingGlossary: ReadingGlossary = {
`;

    // Sort chapters for clean output
    const sortedChapterIds = Object.keys(updatedGlossary)
      .map(id => parseInt(id, 10))
      .sort((a, b) => a - b);

    for (const chapterId of sortedChapterIds) {
      const chapterEntries = updatedGlossary[chapterId];
      const keys = Object.keys(chapterEntries).sort();
      
      if (keys.length === 0) continue;

      const lessonInfo = ALL_UNIFIED_LESSONS.find(l => l.id === chapterId);
      const chapterLabel = lessonInfo 
        ? `// Chapter ${lessonInfo.id}: ${lessonInfo.title.turkish} (${lessonInfo.level})` 
        : `// Chapter ${chapterId}`;

      fileContent += `  // ${chapterLabel}\n`;
      fileContent += `  ${chapterId}: {\n`;
      
      for (const key of keys) {
        const entry = chapterEntries[key];
        const rootEscaped = entry.root.replace(/"/g, '\\"');
        const translationEscaped = entry.translation.replace(/"/g, '\\"');
        const explanationStr = entry.explanation 
          ? `, explanation: "${entry.explanation.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`
          : '';
        
        fileContent += `    "${key}": { root: "${rootEscaped}", translation: "${translationEscaped}"${explanationStr} },\n`;
      }
      
      // Remove trailing comma from the last entry block
      fileContent = fileContent.slice(0, -2) + '\n  },\n';
    }

    // Remove trailing comma from the last chapter block
    if (sortedChapterIds.length > 0) {
      fileContent = fileContent.slice(0, -2) + '\n';
    }

    fileContent += `};\n`;

    // 4. Write back to readingGlossary.ts
    fs.writeFileSync(glossaryPath, fileContent);
    console.log(`\n🎉 SUCCESS: Automated glossary generation complete!`);
    console.log(`- Updated: ${glossaryPath}`);
    console.log(`- Added ${newEntriesCount} new pre-computed inflected entries.`);

    // 5. Output warning report for unresolvable words
    if (unresolvableWordsReport.length > 0) {
      console.warn(`\n⚠️ WARNING: Found ${unresolvableWordsReport.length} unresolvable words in reading texts:`);
      // Group by lesson
      const grouped: Record<string, string[]> = {};
      unresolvableWordsReport.forEach(item => {
        const key = `${item.level} Lesson ${item.lessonId}`;
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(item.word);
      });

      for (const [lesson, words] of Object.entries(grouped)) {
        const uniqueWords = Array.from(new Set(words));
        console.warn(`  📍 ${lesson}: [${uniqueWords.join(', ')}]`);
      }
      console.warn(`\nTip: To resolve these, add their base form to basicGrammarVocabulary.ts, or the chapter's vocabulary card, or manually edit readingGlossary.ts.`);
    }
  });
});
