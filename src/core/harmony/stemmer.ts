import { a1VocabularyData } from '../../infrastructure/db/a1Vocabulary';
import { a2VocabularyData } from '../../infrastructure/db/a2Vocabulary';
import { b1VocabularyData } from '../../infrastructure/db/b1Vocabulary';
import { basicGrammarVocabularyData } from '../../infrastructure/db/basicGrammarVocabulary';
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
  })),
  ...b1VocabularyData.map((item): DictionaryEntry => ({
    id: item.id,
    source: 'tr',
    word: item.word,
    translation: item.translation,
    pos: item.pos,
    notes: item.notes,
    examples: item.examples,
    derivatives: item.derivatives,
    is_balkan: item.is_balkan,
    is_b1_vocab: true
  })),
  ...basicGrammarVocabularyData.map((item): DictionaryEntry => ({
    id: item.id,
    source: 'tr',
    word: item.word,
    translation: item.translation,
    pos: item.pos,
    notes: item.notes,
    examples: item.examples,
    derivatives: item.derivatives,
    is_balkan: item.is_balkan
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
  const match = unifiedDictionary.find(entry => cleanTurkishWord(entry.word) === stem);
  if (match) return match;

  // Try softening reversals
  if (stem.endsWith('b')) {
    const rev = stem.slice(0, -1) + 'p';
    const m = unifiedDictionary.find(entry => cleanTurkishWord(entry.word) === rev);
    if (m) return m;
  }
  if (stem.endsWith('c')) {
    const rev = stem.slice(0, -1) + 'ç';
    const m = unifiedDictionary.find(entry => cleanTurkishWord(entry.word) === rev);
    if (m) return m;
  }
  if (stem.endsWith('d')) {
    const rev = stem.slice(0, -1) + 't';
    const m = unifiedDictionary.find(entry => cleanTurkishWord(entry.word) === rev);
    if (m) return m;
  }
  if (stem.endsWith('ğ')) {
    const rev = stem.slice(0, -1) + 'k';
    const m = unifiedDictionary.find(entry => cleanTurkishWord(entry.word) === rev);
    if (m) return m;
  }

  // Verb infinitive fallback: if stem corresponds to a verb ending in -mak / -mek
  const verbMatch = unifiedDictionary.find(entry => {
    const entryWord = cleanTurkishWord(entry.word);
    return entryWord === stem + 'mak' || entryWord === stem + 'mek';
  });
  if (verbMatch) return verbMatch;

  return null;
}

// Ordered suffixes list (from outer suffixes to inner suffixes)
const SUFFIX_PATTERNS = [
  // 1. Verb person/plural markers / Copula
  /(?:sınız|siniz|sunuz|sünüz)$/i,
  /(?:lar|ler)$/i,
  /(?:y?ım|y?im|y?um|y?üm)$/i,
  /(?:y?ız|y?iz|y?uz|y?üz)$/i,
  /(?:sın|sin|sun|sün)$/i,
  /(?:dır|dir|dur|dür|tır|tir|tur|tür)$/i, // Copula

  // 2. Case endings & postpositions
  /(?:dan|den|tan|ten)$/i, // Ablative
  /(?:da|de|ta|te)$/i,   // Locative
  /(?:y?la|y?le)$/i,     // Instrumental
  /(?:n?ın|n?in|n?un|n?ün)$/i, // Genitive
  /(?:y?[ea])$/i,        // Dative
  /(?:y?[ıiuü])$/i,      // Accusative

  // 3. Possessives
  /(?:mız|miz|muz|müz)$/i,
  /(?:nız|niz|nuz|nüz)$/i,
  /(?:ları|leri)$/i,
  /(?:s?[ıiuü])$/i,
  /(?:[ıiuü]?m)$/i,
  /(?:[ıiuü]?n)$/i,

  // 4. Verb tenses/aspects/gerunds/participles/conditionals
  /(?:y?ken)$/i, // Gerund
  /(?:iyor|uyor|üyor|ıyor)$/i,
  /(?:ecek|acak)$/i,
  /(?:miş|mış|muş|müş)$/i, // Reported past
  /(?:[dt][ıiuü])$/i,
  /(?:[ti][ıiuü])$/i,
  /(?:arak|erek)$/i, // Gerund
  /(?:ıp|ip|up|üp)$/i, // Gerund
  /(?:y?an|y?en)$/i, // Present Participle
  /(?:dik|dık|duk|dük|tik|tık|tuk|tük|diğ|dığ|duğ|düğ|tiğ|tığ|tuğ|tüğ)$/i, // Past Participle / Softened
  /(?:ar|er|ır|ir|ur|ür|r)$/i, // Aorist / Simple Present
  /(?:malı|meli)$/i, // Necessitative
  /(?:salar|seler)$/i, // Conditional plural
  /(?:sak|sek)$/i, // Conditional plural
  /(?:sa|se)$/i, // Conditional
  /(?:mek|mak)$/i,

  // 5. Passive / Potential / Negation (Derivational)
  /(?:abil|ebil)$/i, // Potential
  /(?:ma|me)$/i, // Negation / Verbal noun
  /(?:ıl|il|ul|ül|ın|in|un|ün|n)$/i, // Passive voice
];

export function lookupWord(rawWord: string): DictionaryEntry | null {
  const clean = cleanTurkishWord(rawWord);
  if (!clean) return null;
  return recursiveLookup(clean);
}

function recursiveLookup(stem: string): DictionaryEntry | null {
  // 1. Direct match check (including consonant softening)
  const match = findMatchInDictionary(stem);
  if (match) return match;

  if (stem.length < 2) return null;

  // 2. Try stripping suffixes and recursing
  for (const pattern of SUFFIX_PATTERNS) {
    if (pattern.test(stem)) {
      const stripped = stem.replace(pattern, '');
      // Ensure we have a reasonable stem size and that the replacement actually changed the string
      if (stripped.length >= 2 && stripped !== stem) {
        const result = recursiveLookup(stripped);
        if (result) {
          return result;
        }
      }
    }
  }

  return null;
}
