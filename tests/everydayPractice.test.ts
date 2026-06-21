import { describe, it, expect } from 'vitest';
import { EVERYDAY_PRACTICE_ITEMS } from '../src/infrastructure/db/everydayPracticeData';
import { analyzeWord, cleanTurkishWord } from '../src/core/harmony/stemmer';

describe('Everyday Practice Vocabulary Alignment', () => {
  it('should resolve every Turkish word in dialogues and stories to a dictionary entry', () => {
    const missingWords = new Set<string>();
    
    // Ignored names, numbers, or specific non-dictionary tokens
    const ignoredWords = new Set([
      'ahmet', 'elif', 'selim', 'merve', 'cem', 'can', 'yılmaz', 'kadıköy', 'antalya', 'antalyaya', 'muğlaya', 'muğla',
      'otel2026', '2026', 'otuz', 'iki', 'yüz', 'yedi', 'sekiz', 'on', 'bir', 'dokuz', 'üç', 'beş', 'kırk', 'lira', 'havalimanına',
      'haziran', 'muğlayı', 'türkçe', 'rentacar', 'ankara', 'a', 'yi', 'ni',
      'murat', 'selin', 'kerem', 'sarah', 'leyla', 'edevlet', 'react', 'nodejs', 'tefetüfe', 'sms', 'na', 'js'
    ]);

    for (const item of EVERYDAY_PRACTICE_ITEMS) {
      const texts: string[] = [];
      if (item.content) {
        texts.push(...item.content.map(c => c.turkish));
      }
      if (item.perspectives) {
        if (item.perspectives.firstPerson) {
          texts.push(...item.perspectives.firstPerson.map(c => c.turkish));
        }
        if (item.perspectives.thirdPerson) {
          texts.push(...item.perspectives.thirdPerson.map(c => c.turkish));
        }
      }

      for (const text of texts) {
        // Tokenize words
        const words = text
          .replace(/[,.!?;:"'()]/g, ' ')
          .split(/\s+/)
          .map(w => cleanTurkishWord(w))
          .filter(Boolean);

        for (const word of words) {
          if (/^\d+$/.test(word)) continue;
          if (ignoredWords.has(word)) continue;

          const analysis = analyzeWord(word);
          if (!analysis) {
            missingWords.add(word);
          }
        }
      }
    }

    if (missingWords.size > 0) {
      console.error('FAIL: The following Turkish words from practice items are missing from the dictionary databases:', JSON.stringify(Array.from(missingWords)));
    }
    
    expect(missingWords.size).toBe(0);
  }, 30000);
});
