import React from 'react';
import { lookupWord, cleanTurkishWord, compoundFirstWords } from '../../../core/harmony/stemmer';
import { readingGlossary } from '../../../infrastructure/db/readingGlossary';
import type { DictionaryEntry } from './WordDetailDrawer';

interface InteractiveTextProps {
  text: string;
  chapterId?: number;
  className?: string;
  activeWordKey: string | null;
  onWordClick: (
    entry: DictionaryEntry,
    pos: { top: number; left: number },
    renderAbove: boolean,
    key: string
  ) => void;
  lineId: string;
}

export const InteractiveText: React.FC<InteractiveTextProps> = ({
  text,
  chapterId,
  className = "",
  activeWordKey,
  onWordClick,
  lineId
}) => {
  const handleWordClick = (e: React.MouseEvent<HTMLSpanElement>, token: string, index: number) => {
    e.stopPropagation();
    
    const cleanToken = cleanTurkishWord(token);

    // 1. Try local contextual glossary mapping for the current chapter
    const localGlossary = chapterId ? readingGlossary[chapterId] : null;
    const contextualEntry = localGlossary ? localGlossary[cleanToken] : null;

    const rect = e.currentTarget.getBoundingClientRect();
    const popupWidth = 256; // w-64 is 16rem = 256px
    const leftPos = rect.left + (rect.width / 2) - (popupWidth / 2);
    const spaceBelow = window.innerHeight - rect.bottom;
    const shouldRenderAbove = spaceBelow < 180;

    const popupTop = shouldRenderAbove ? rect.top - 8 : rect.bottom + 8;
    const popupLeft = Math.max(12, Math.min(window.innerWidth - popupWidth - 12, leftPos));
    const wordKey = `${lineId}-${index}`;

    if (contextualEntry) {
      // Find full entry of root in dictionary (if it exists) to get notes/examples/etc.
      const rootEntry = lookupWord(contextualEntry.root);
      
      const mergedEntry: DictionaryEntry = {
        id: rootEntry?.id || `glossary-${cleanToken}`,
        source: 'tr',
        word: token, // show clicked word with suffixes
        translation: contextualEntry.translation, // show contextual meaning
        pos: rootEntry?.pos || 'shprehje',
        notes: contextualEntry.explanation || rootEntry?.notes,
        examples: rootEntry?.examples,
        derivatives: rootEntry?.derivatives,
        chapterTitle: rootEntry?.chapterTitle,
        is_balkan: rootEntry?.is_balkan,
        // Carry over the root word so we can link to it in "More details"
        inflection: contextualEntry.root,
        rootTranslation: rootEntry?.translation
      };

      onWordClick(mergedEntry, { top: popupTop, left: popupLeft }, shouldRenderAbove, wordKey);
      return;
    }

    // 2. Fallback to general stemmer lookup
    const entry = lookupWord(token);
    if (entry) {
      const mergedEntry: DictionaryEntry = {
        ...entry,
        word: token // show clicked word (e.g. "kitaplar")
      };
      onWordClick(mergedEntry, { top: popupTop, left: popupLeft }, shouldRenderAbove, wordKey);
    }
  };

  // Split text by whitespace and common punctuation, keeping punctuation as distinct tokens (preserving apostrophes within words)
  const tokens = text.split(/(\s+|[.,!;/?:()"]+)/);

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

    const cleanToken = cleanTurkishWord(token);
    const localGlossary = chapterId ? readingGlossary[chapterId] : null;
    const hasGlossaryCompoundStart = !!(localGlossary && Object.keys(localGlossary).some(key => key.startsWith(cleanToken) && key !== cleanToken));

    if (!compoundFirstWords.has(cleanToken) && !hasGlossaryCompoundStart) {
      groupedTokens.push({ text: token, isWord: true });
      i++;
      continue;
    }

    // Helper to check if a combination of words forms a compound match in glossary or dictionary
    const isCompoundMatch = (cleanStr: string) => {
      if (localGlossary && localGlossary[cleanStr]) {
        return true;
      }
      const entry = lookupWord(cleanStr);
      return !!(entry && entry.word.includes(' '));
    };

    // Look ahead for subsequent word tokens
    let nextWords: { token: string; idx: number; intermediate: string[] }[] = [];
    let currentIdx = i;
    for (let count = 0; count < 2; count++) {
      let nextWordIdx = -1;
      let intermediate: string[] = [];
      for (let j = currentIdx + 1; j < tokens.length; j++) {
        const t = tokens[j];
        const isNextWord = /^[a-zçğışöüÇĞİŞÖÜâîûÂÎÛ]+$/i.test(t.replace(/['’]/g, ''));
        if (isNextWord) {
          nextWordIdx = j;
          break;
        }
        intermediate.push(t);
      }
      if (nextWordIdx !== -1) {
        nextWords.push({
          token: tokens[nextWordIdx],
          idx: nextWordIdx,
          intermediate
        });
        currentIdx = nextWordIdx;
      } else {
        break;
      }
    }

    // Try 3-word compound match first
    if (nextWords.length === 2) {
      const cleanCombined3 = cleanTurkishWord(token + nextWords[0].token + nextWords[1].token);
      if (isCompoundMatch(cleanCombined3)) {
        const mergedText = [
          token,
          ...nextWords[0].intermediate,
          nextWords[0].token,
          ...nextWords[1].intermediate,
          nextWords[1].token
        ].join('');
        groupedTokens.push({ text: mergedText, isWord: true });
        i = nextWords[1].idx + 1;
        continue;
      }
    }

    // Try 2-word compound match second
    if (nextWords.length >= 1) {
      const cleanCombined2 = cleanTurkishWord(token + nextWords[0].token);
      if (isCompoundMatch(cleanCombined2)) {
        const mergedText = [
          token,
          ...nextWords[0].intermediate,
          nextWords[0].token
        ].join('');
        groupedTokens.push({ text: mergedText, isWord: true });
        i = nextWords[0].idx + 1;
        continue;
      }
    }

    groupedTokens.push({ text: token, isWord: true });
    i++;
  }

  return (
    <span className={`inline-wrap leading-relaxed ${className}`}>
      {groupedTokens.map((item, idx) => {
        if (!item.isWord) {
          return <span key={idx}>{item.text}</span>;
        }

        const cleanToken = cleanTurkishWord(item.text);
        const localGlossary = chapterId ? readingGlossary[chapterId] : null;
        const contextualEntry = localGlossary ? localGlossary[cleanToken] : null;
        const isHighlight = contextualEntry?.isGrammarHighlight === true;

        const isCurrentWordActive = activeWordKey === `${lineId}-${idx}`;

        return (
          <span
            key={idx}
            id={`word-span-${lineId}-${idx}`}
            onClick={(e) => handleWordClick(e, item.text, idx)}
            className={`cursor-pointer inline-block rounded px-0.5 transition duration-150 select-none ${
              isCurrentWordActive
                ? 'bg-teal-500/20 text-[#3A5A40] dark:text-[#14B8A6] font-bold shadow-xs underline decoration-teal-500'
                : isHighlight
                  ? 'bg-amber-100/50 dark:bg-amber-950/20 border-b-2 border-amber-500/80 dark:border-amber-400/80 text-[#B45309] dark:text-amber-400 font-medium'
                  : 'hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 hover:text-[#3A5A40] dark:hover:text-[#14B8A6]'
            }`}
          >
            {item.text}
          </span>
        );
      })}
    </span>
  );
};
