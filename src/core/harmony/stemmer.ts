import { a1VocabularyData } from '../../infrastructure/db/a1Vocabulary';
import { a2VocabularyData } from '../../infrastructure/db/a2Vocabulary';
import type { DictionaryEntry } from '../../presentation/components/common/WordDetailDrawer';

// Build unified lookup database
export const unifiedDictionary: DictionaryEntry[] = [
  ...a1VocabularyData.map((item): DictionaryEntry => ({
    id: item.id,
    source: 'tr',
    word: item.word,
    translation: item.translation,
    pos: item.pos,
    notes: item.notes,
    examples: item.examples,
    derivatives: item.derivatives,
    is_balkan: item.is_balkan,
    is_a1_vocab: true
  })),
  ...a2VocabularyData.map((item): DictionaryEntry => ({
    id: item.id,
    source: 'tr',
    word: item.word,
    translation: item.translation,
    pos: item.pos,
    notes: item.notes,
    examples: item.examples,
    derivatives: item.derivatives,
    is_balkan: item.is_balkan,
    is_a2_vocab: true
  }))
];

// Normalize Turkish letters for comparisons
export function cleanTurkishWord(word: string): string {
  return word
    .toLowerCase()
    .trim()
    .replace(/[^a-zçğışöüÇĞİŞÖÜ]/gi, '');
}

// Check dictionary with consonant softening mapping
export function findMatchInDictionary(stem: string): DictionaryEntry | null {
  if (!stem) return null;
  const match = unifiedDictionary.find(entry => entry.word.toLowerCase() === stem);
  if (match) return match;

  // Try softening reversals
  if (stem.endsWith('b')) {
    const rev = stem.slice(0, -1) + 'p';
    const m = unifiedDictionary.find(entry => entry.word.toLowerCase() === rev);
    if (m) return m;
  }
  if (stem.endsWith('c')) {
    const rev = stem.slice(0, -1) + 'ç';
    const m = unifiedDictionary.find(entry => entry.word.toLowerCase() === rev);
    if (m) return m;
  }
  if (stem.endsWith('d')) {
    const rev = stem.slice(0, -1) + 't';
    const m = unifiedDictionary.find(entry => entry.word.toLowerCase() === rev);
    if (m) return m;
  }
  if (stem.endsWith('ğ')) {
    const rev = stem.slice(0, -1) + 'k';
    const m = unifiedDictionary.find(entry => entry.word.toLowerCase() === rev);
    if (m) return m;
  }

  return null;
}

// Ordered suffixes list (from outer suffixes to inner suffixes)
const SUFFIX_PATTERNS = [
  // 1. Verb person/plural markers
  /(?:sınız|siniz|sunuz|sünüz)$/i,
  /(?:lar|ler)$/i,
  /(?:y?ım|y?im|y?um|y?üm)$/i,
  /(?:y?ız|y?iz|y?uz|y?üz)$/i,
  /(?:sın|sin|sun|sün)$/i,
  
  // 2. Verb tenses/aspects
  /(?:iyor|uyor|üyor|ıyor)$/i,
  /(?:ecek|acak)$/i,
  /(?:[dt][ıiuü])$/i,
  /(?:[ti][ıiuü])$/i,
  /(?:mek|mak)$/i,

  // 3. Case endings & postpositions
  /(?:dan|den|tan|ten)$/i, // Ablative
  /(?:da|de|ta|te)$/i,   // Locative
  /(?:y?la|y?le)$/i,     // Instrumental
  /(?:n?ın|n?in|n?un|n?ün)$/i, // Genitive
  /(?:y?[ea])$/i,        // Dative
  /(?:y?[ıiuü])$/i,      // Accusative

  // 4. Possessives
  /(?:mız|miz|muz|müz)$/i,
  /(?:nız|niz|nuz|nüz)$/i,
  /(?:ları|leri)$/i,
  /(?:s?[ıiuü])$/i,
  /(?:[ıiuü]?m)$/i,
  /(?:[ıiuü]?n)$/i,
];

export function lookupWord(rawWord: string): DictionaryEntry | null {
  const clean = cleanTurkishWord(rawWord);
  if (!clean) return null;

  // 1. Exact or softened base match
  const directMatch = findMatchInDictionary(clean);
  if (directMatch) return directMatch;

  // 2. Suffix stripping loop
  let currentStem = clean;

  // Try stripping suffixes one-by-one from patterns
  for (const pattern of SUFFIX_PATTERNS) {
    if (pattern.test(currentStem)) {
      const nextStem = currentStem.replace(pattern, '');
      if (nextStem.length >= 2) { // Keep reasonable stem size
        currentStem = nextStem;
        const match = findMatchInDictionary(currentStem);
        if (match) {
          return match;
        }
      }
    }
  }

  return null;
}
