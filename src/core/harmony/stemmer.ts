import { a1VocabularyData } from '../../infrastructure/db/a1Vocabulary';
import { a2VocabularyData } from '../../infrastructure/db/a2Vocabulary';
import { b1VocabularyData } from '../../infrastructure/db/b1Vocabulary';
import { basicGrammarVocabularyData } from '../../infrastructure/db/basicGrammarVocabulary';
import { ALL_UNIFIED_LESSONS } from '../../infrastructure/db/lessons';
import type { DictionaryEntry } from '../../presentation/components/common/WordDetailDrawer';

// Map and compile all lesson-specific vocabulary into standard dictionary entries
const chapterVocabularyEntries: DictionaryEntry[] = ALL_UNIFIED_LESSONS.flatMap(lesson =>
  lesson.vocabulary.map((item, index): DictionaryEntry => ({
    id: `chapter-vocab-${lesson.id}-${index}`,
    source: 'tr',
    word: item.turkishWord,
    translation: item.albanianWord,
    pos: item.category,
    notes: item.notesAlbanian || undefined,
    is_balkan: item.isSharedBalkanWord,
    is_a1_vocab: lesson.level === 'A1',
    is_a2_vocab: lesson.level === 'A2',
    is_b1_vocab: lesson.level === 'B1'
  }))
);

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
  })),
  ...chapterVocabularyEntries
];

// Pre-clean all dictionary entries at startup to avoid expensive cleanTurkishWord calls during lookup loops
export const cleanedDictionary = unifiedDictionary.map(entry => ({
  ...entry,
  cleanWord: cleanTurkishWord(entry.word)
}));

// Normalize Turkish letters for comparisons
export function cleanTurkishWord(word: string): string {
  return word
    .toLocaleLowerCase('tr-TR')
    .trim()
    .replace(/[^a-zçğışöüâîû]/gi, '');
}

const checkVerbFallback = (s: string) => {
  const target1 = s + 'mak';
  const target2 = s + 'mek';
  return cleanedDictionary.find(entry => entry.cleanWord === target1 || entry.cleanWord === target2) || null;
};

// Check dictionary with consonant softening mapping
export function findMatchInDictionary(stem: string, allowConjunctions = true): DictionaryEntry | null {
  if (!stem) return null;

  const isMatch = (entry: any, targetStem: string) => {
    if (!allowConjunctions && (entry.pos === 'lidhëz' || entry.pos === 'pasthirrmë')) {
      return false;
    }
    return entry.cleanWord === targetStem;
  };

  const match = cleanedDictionary.find(entry => isMatch(entry, stem));
  if (match) return match as DictionaryEntry;

  // Try softening reversals
  if (stem.endsWith('b')) {
    const rev = stem.slice(0, -1) + 'p';
    const m = cleanedDictionary.find(entry => isMatch(entry, rev));
    if (m) return m as DictionaryEntry;
    const vm = checkVerbFallback(rev);
    if (vm) return vm as DictionaryEntry;
  }
  if (stem.endsWith('c')) {
    const rev = stem.slice(0, -1) + 'ç';
    const m = cleanedDictionary.find(entry => isMatch(entry, rev));
    if (m) return m as DictionaryEntry;
    const vm = checkVerbFallback(rev);
    if (vm) return vm as DictionaryEntry;
  }
  if (stem.endsWith('d')) {
    const rev = stem.slice(0, -1) + 't';
    const m = cleanedDictionary.find(entry => isMatch(entry, rev));
    if (m) return m as DictionaryEntry;
    const vm = checkVerbFallback(rev);
    if (vm) return vm as DictionaryEntry;
  }
  if (stem.endsWith('ğ')) {
    const rev = stem.slice(0, -1) + 'k';
    const m = cleanedDictionary.find(entry => isMatch(entry, rev));
    if (m) return m as DictionaryEntry;
    const vm = checkVerbFallback(rev);
    if (vm) return vm as DictionaryEntry;
  }

  // Try restoring dropped vowel for stems ending in a consonant cluster (e.g. vakt -> vakit, şehr -> şehir, omz -> omuz)
  if (stem.length >= 3) {
    const lastChar = stem.slice(-1);
    const secondToLastChar = stem.slice(-2, -1);
    const isConsonant = (char: string) => /^[bcçdfgğhjklmnprsştvyz]$/i.test(char);
    
    if (isConsonant(lastChar) && isConsonant(secondToLastChar)) {
      const base = stem.slice(0, -1);
      const highVowels = ['i', 'ı', 'u', 'ü'];
      for (const vowel of highVowels) {
        const candidate = base + vowel + lastChar;
        const m = cleanedDictionary.find(entry => isMatch(entry, candidate));
        if (m) return m as DictionaryEntry;
        const vm = checkVerbFallback(candidate);
        if (vm) return vm as DictionaryEntry;
      }
    }
  }

  // Try restoring narrowed/dropped vowels for verbs (vowel narrowing, e.g., yaş -> yaşa -> yaşamak, bekl -> bekle -> beklemek)
  const verbVowels = ['a', 'e', 'ı', 'i', 'u', 'ü'];
  for (const v of verbVowels) {
    const vm = checkVerbFallback(stem + v);
    if (vm) return vm as DictionaryEntry;
  }

  // Verb infinitive fallback on original stem
  const verbMatch = checkVerbFallback(stem);
  if (verbMatch) return verbMatch as DictionaryEntry;

  return null;
}

export interface StrippedSuffix {
  suffix: string;
  label: string;
  meaning: string;
  type: string;
}

const SUFFIX_DETAILS: Array<{ pattern: RegExp; type: string; label: string; meaning: string }> = [
  // Since suffix (spaces removed in clean word)
  { pattern: /(?:d|t)[ıiuü]ğ[ıiuü](?:m|n|miz|niz)?(?:dan|den)beri$/i, type: 'since', label: 'diğinden beri (që kur)', meaning: 'që kur' },
  // Relative / Pronoun suffix -ki
  { pattern: /(?:ki)$/i, type: 'derivational', label: 'ki (relativizues)', meaning: 'që është në / i/e' },
  // Plural
  { pattern: /(?:lar|ler)$/i, type: 'plural', label: 'ler/lar (shumës)', meaning: 'shumës' },
  // Person Copula / Verb person - Split optional 'y' to prevent greedy root collision
  { pattern: /(?:sınız|siniz|sunuz|sünüz)$/i, type: 'person', label: 'siniz (ju)', meaning: 'ju jeni' },
  { pattern: /(?:yım|yim|yum|yüm)$/i, type: 'person', label: 'im (unë)', meaning: 'unë / jam' },
  { pattern: /(?:ım|im|um|üm)$/i, type: 'person', label: 'im (unë)', meaning: 'unë / jam' },
  { pattern: /(?:yız|yiz|yuz|yüz)$/i, type: 'person', label: 'iz (ne)', meaning: 'ne / jemi' },
  { pattern: /(?:ız|iz|uz|üz)$/i, type: 'person', label: 'iz (ne)', meaning: 'ne / jemi' },
  { pattern: /(?:sın|sin|sun|sün)$/i, type: 'person', label: 'sin (ti)', meaning: 'ti je / je' },
  // Imperative 2nd plural
  { pattern: /(?:yin|yın|yun|yün)$/i, type: 'person', label: 'yin (ju - urdhërore)', meaning: 'ju (urdhërore)' },
  { pattern: /(?:in|ın|un|ün)$/i, type: 'person', label: 'in (ju - urdhërore)', meaning: 'ju (urdhërore)' },
  { pattern: /(?:dır|dir|dur|dür|tır|tir|tur|tür)$/i, type: 'copula', label: 'dir (është)', meaning: 'është' },
  // Case endings
  { pattern: /(?:dan|den|tan|ten)$/i, type: 'case', label: 'dan (prej/nga)', meaning: 'prej / nga' },
  { pattern: /(?:da|de|ta|te)$/i, type: 'case', label: 'da (në/tek)', meaning: 'në / tek' },
  { pattern: /(?:yla|yle)$/i, type: 'case', label: 'la (me)', meaning: 'me' },
  { pattern: /(?:la|le)$/i, type: 'case', label: 'la (me)', meaning: 'me' },
  { pattern: /(?:ca|ce|ça|çe)$/i, type: 'case', label: 'ca (sipas/për/si)', meaning: 'sipas / për / si' },
  { pattern: /(?:nın|nin|nun|nün)$/i, type: 'case', label: 'in (e/i)', meaning: 'i/e (gjini)' },
  { pattern: /(?:ın|in|un|ün)$/i, type: 'case', label: 'in (e/i)', meaning: 'i/e (gjini)' },
  { pattern: /(?:ye|ya)$/i, type: 'case', label: 'e (drejt/te)', meaning: 'drejt / te' },
  // Active participle (placed here so it is checked before e/a and n, but after dan/den/ta/te/etc. to avoid masking them)
  { pattern: /(?:yan|yen)$/i, type: 'participle', label: 'en (që)', meaning: 'që' },
  { pattern: /(?:an|en)$/i, type: 'participle', label: 'en (që)', meaning: 'që' },
  { pattern: /(?:e|a)$/i, type: 'case', label: 'e (drejt/te)', meaning: 'drejt / te' },
  { pattern: /(?:yı|yi|yu|yü)$/i, type: 'case', label: 'i (kallëzore)', meaning: '(kallëzore)' },
  { pattern: /(?:ı|i|u|ü)$/i, type: 'case', label: 'i (kallëzore)', meaning: '(kallëzore)' },
  // Possessives
  { pattern: /(?:mız|miz|muz|müz)$/i, type: 'possessive', label: 'imiz (ynë/jona)', meaning: 'ynë / jona' },
  { pattern: /(?:nız|niz|nuz|nüz)$/i, type: 'possessive', label: 'iniz (juaj)', meaning: 'juaj' },
  { pattern: /(?:ları|leri)$/i, type: 'possessive', label: 'leri (e tyre)', meaning: 'e tyre' },
  { pattern: /(?:si|sı|su|sü)$/i, type: 'possessive', label: 'i (tij/saj)', meaning: 'i/e tij/saj' },
  { pattern: /(?:ı|i|u|ü)$/i, type: 'possessive', label: 'i (tij/saj)', meaning: 'i/e tij/saj' },
  { pattern: /(?:ım|im|um|üm)$/i, type: 'possessive', label: 'im (imi)', meaning: 'imi / ime' },
  { pattern: /(?:m)$/i, type: 'possessive', label: 'im (imi)', meaning: 'imi / ime' },
  { pattern: /(?:ın|in|un|ün)$/i, type: 'possessive', label: 'in (yti)', meaning: 'yti / jote' },
  { pattern: /(?:n)$/i, type: 'possessive', label: 'in (yti)', meaning: 'yti / jote' },
  // Verb tenses
  { pattern: /(?:yken)$/i, type: 'tense', label: 'ken (kur/ndërsa)', meaning: 'kur / ndërsa' },
  { pattern: /(?:ken)$/i, type: 'tense', label: 'ken (kur/ndërsa)', meaning: 'kur / ndërsa' },
  { pattern: /(?:iyor|uyor|üyor|ıyor)$/i, type: 'tense', label: 'iyor (koha e tashme)', meaning: 'po' },
  { pattern: /(?:yecek|yacak|yeceğ|yacağ)$/i, type: 'tense', label: 'ecek (koha e ardhme)', meaning: 'do të' },
  { pattern: /(?:ecek|acak|eceğ|acağ)$/i, type: 'tense', label: 'ecek (koha e ardhme)', meaning: 'do të' },
  { pattern: /(?:miş|mış|muş|müş)$/i, type: 'tense', label: 'miş (e shkuar e pacaktuar)', meaning: 'paska' },
  { pattern: /(?:y?[dt][ıiuü])$/i, type: 'tense', label: 'di (e kryer e thjeshtë)', meaning: 'të shkuar' },
  { pattern: /(?:[ti][ıiuü])$/i, type: 'tense', label: 'ti (e kryer e thjeshtë)', meaning: 'të shkuar' },
  { pattern: /(?:[dt])$/i, type: 'tense', label: 'di (e kryer e thjeshtë)', meaning: 'të shkuar' },
  { pattern: /(?:yarak|yerek)$/i, type: 'gerund', label: 'erek (duke)', meaning: 'duke' },
  { pattern: /(?:arak|erek)$/i, type: 'gerund', label: 'erek (duke)', meaning: 'duke' },
  { pattern: /(?:yıp|yip|yup|yüp)$/i, type: 'gerund', label: 'ip (duke)', meaning: 'duke' },
  { pattern: /(?:ıp|ip|up|üp)$/i, type: 'gerund', label: 'ip (duke)', meaning: 'duke' },
  { pattern: /(?:yınca|yince|yunca|yünce)$/i, type: 'gerund', label: 'ince (kur)', meaning: 'kur' },
  { pattern: /(?:ınca|ince|unca|ünce)$/i, type: 'gerund', label: 'ince (kur)', meaning: 'kur' },
  { pattern: /(?:dik|dık|duk|dük|tik|tık|tuk|tük|diğ|dığ|duğ|düğ|tiğ|tığ|tuğ|tüğ)$/i, type: 'participle', label: 'dik (pjesore)', meaning: 'që ka' },
  { pattern: /(?<=[aeıioöuüâîû])r$/i, type: 'tense', label: 'ar (kohë e gjerë)', meaning: 'zakonisht' },
  { pattern: /(?<=[bcçdfgğhjklmnprsştvyz])(?:ar|er|ır|ir|ur|ür)$/i, type: 'tense', label: 'ar (kohë e gjerë)', meaning: 'zakonisht' },
  { pattern: /(?:malı|meli)$/i, type: 'tense', label: 'meli (detyrim)', meaning: 'duhet të' },
  { pattern: /(?:saydılar|seydiler)$/i, type: 'conditional', label: 'seydi (sikur ata të)', meaning: 'sikur të' },
  { pattern: /(?:saydık|seydik)$/i, type: 'conditional', label: 'seydi (sikur ne të)', meaning: 'sikur të' },
  { pattern: /(?:saydınız|seydiniz)$/i, type: 'conditional', label: 'seydi (sikur ju të)', meaning: 'sikur të' },
  { pattern: /(?:saydım|seydim)$/i, type: 'conditional', label: 'seydi (sikur unë të)', meaning: 'sikur të' },
  { pattern: /(?:saydın|seydin)$/i, type: 'conditional', label: 'seydi (sikur ti të)', meaning: 'sikur të' },
  { pattern: /(?:saydı|seydi)$/i, type: 'conditional', label: 'seydi (sikur të)', meaning: 'sikur të' },
  { pattern: /(?:salar|seler)$/i, type: 'conditional', label: 'seler (nëse ata)', meaning: 'nëse ata' },
  { pattern: /(?:sak|sek)$/i, type: 'conditional', label: 'sek (nëse ne)', meaning: 'nëse ne' },
  { pattern: /(?:y?sa|y?se)$/i, type: 'conditional', label: 'se (nëse)', meaning: 'nëse' },
  { pattern: /(?:mek|mak)$/i, type: 'infinitive', label: 'mak (paskajore)', meaning: 'të' },
  { pattern: /(?:yabil|yebil)$/i, type: 'potential', label: 'abil (mundësi)', meaning: 'mund të' },
  { pattern: /(?:abil|ebil)$/i, type: 'potential', label: 'abil (mundësi)', meaning: 'mund të' },
  { pattern: /(?:ma|me)$/i, type: 'negation', label: 'me (mohim)', meaning: 'nuk' },
  { pattern: /(?:ıl|il|ul|ül|ın|in|un|ün|n)$/i, type: 'passive', label: 'il (pësore)', meaning: 'pësore' },
  // Derivational suffixes
  { pattern: /(?:lı|li|lu|lü)$/i, type: 'derivational', label: 'li (me)', meaning: 'me' },
  { pattern: /(?:siz|sız|suz|süz)$/i, type: 'derivational', label: 'siz (pa)', meaning: 'pa' },
  { pattern: /(?:lan|len)$/i, type: 'derivational', label: 'len (bëhem)', meaning: 'bëhem' },
  { pattern: /(?:lık|lik|luk|lük)$/i, type: 'derivational', label: 'lik (abstrakt)', meaning: 'krijon emra/mbiemra' },
  { pattern: /(?:cı|ci|cu|cü|çı|çi|çu|çü)$/i, type: 'derivational', label: 'ci (profesion)', meaning: 'bërës i/e' }
];

function recursiveLookupWithSuffixes(
  stem: string,
  collected: StrippedSuffix[] = [],
  failedStems: Set<string> = new Set()
): { entry: DictionaryEntry; suffixes: StrippedSuffix[] } | null {
  if (failedStems.has(stem)) return null;

  // 1. Direct match check (including consonant softening & vowel restoration)
  const match = findMatchInDictionary(stem, collected.length === 0);
  if (match) {
    return { entry: match, suffixes: collected };
  }

  if (stem.length < 2) {
    failedStems.add(stem);
    return null;
  }

  // 2. Try stripping suffixes and recursing
  for (const detail of SUFFIX_DETAILS) {
    const matchArr = stem.match(detail.pattern);
    if (matchArr) {
      const suffixText = matchArr[0];
      const stripped = stem.slice(0, -suffixText.length);
      
      if (stripped.length >= 2 && stripped !== stem) {
        const result = recursiveLookupWithSuffixes(stripped, [
          { suffix: suffixText, label: detail.label, meaning: detail.meaning, type: detail.type },
          ...collected
        ], failedStems);
        if (result) {
          return result;
        }
      }
    }
  }

  failedStems.add(stem);
  return null;
}

export const compoundFirstWords: Set<string> = new Set(
  unifiedDictionary
    .filter(entry => entry.word.includes(' '))
    .map(entry => cleanTurkishWord(entry.word.split(' ')[0]))
    .filter(Boolean)
);

export interface WordAnalysis {
  entry: DictionaryEntry;
  suffixes: StrippedSuffix[];
  rootWord: string;
  cleanWord: string;
}

const stemmerCache = new Map<string, WordAnalysis | null>();

export function analyzeWord(rawWord: string): WordAnalysis | null {
  const clean = cleanTurkishWord(rawWord);
  if (!clean) return null;

  if (stemmerCache.has(clean)) {
    return stemmerCache.get(clean) || null;
  }

  const result = recursiveLookupWithSuffixes(clean);
  if (!result) {
    stemmerCache.set(clean, null);
    return null;
  }

  const { entry, suffixes } = result;
  const analysis: WordAnalysis = {
    entry,
    suffixes,
    rootWord: entry.word,
    cleanWord: clean
  };

  stemmerCache.set(clean, analysis);
  return analysis;
}

export function lookupWord(rawWord: string): DictionaryEntry | null {
  const analysis = analyzeWord(rawWord);
  if (!analysis) return null;

  const { entry, suffixes } = analysis;

  // If no suffixes were stripped, return the entry as is
  if (suffixes.length === 0) {
    return entry;
  }

  const rootWord = entry.word;
  const rootTranslation = entry.translation;

  // Construct suffix explanation formula
  const suffixFormula = [
    `${rootWord} (${rootTranslation})`,
    ...suffixes.map(s => `${s.suffix} (${s.meaning})`)
  ].join(' + ');

  // Compute dynamic contextual translation hint
  let contextualTranslation = '';
  const isVerb = entry.pos === 'folje';

  if (isVerb) {
    const hasProgressive = suffixes.some(s => s.suffix.match(/iyor|uyor|üyor|ıyor/i));
    const hasFuture = suffixes.some(s => s.suffix.match(/ecek|acak|eceğ|acağ/i));
    const hasPast = suffixes.some(s => /^[dt][ıiuü]/i.test(s.suffix));
    const hasNecessitative = suffixes.some(s => s.suffix.match(/meli|malı/i));
    const hasPotential = suffixes.some(s => s.suffix.match(/abil|ebil/i));
    const hasNegation = suffixes.some(s => s.suffix === 'me' || s.suffix === 'ma');

    let verbMeaning = rootTranslation.replace(/^të\s+/i, '').trim();
    let prefix = '';
    if (hasNegation) prefix += 'nuk ';
    if (hasPotential) prefix += 'mund të ';
    if (hasNecessitative) prefix = 'duhet të '; // overrides

    if (hasProgressive) {
      contextualTranslation = `${prefix}po ${verbMeaning}`;
    } else if (hasFuture) {
      contextualTranslation = `${prefix}do të ${verbMeaning}`;
    } else if (hasPast) {
      contextualTranslation = `${prefix}${verbMeaning} (në të shkuarën)`;
    } else {
      contextualTranslation = `${prefix}${verbMeaning}`;
    }
  } else {
    const hasPlural = suffixes.some(s => s.type === 'plural');
    const caseSuffix = suffixes.find(s => s.type === 'case');
    
    let nounMeaning = rootTranslation;
    if (hasPlural) {
      // Simple pluralizer for Albanian
      nounMeaning = nounMeaning.endsWith('ë') ? nounMeaning.slice(0, -1) + 'a' : nounMeaning + ' (shumës)';
    }

    if (caseSuffix) {
      if (caseSuffix.suffix.match(/da|de|ta|te/i)) {
        contextualTranslation = `në / tek ${nounMeaning}`;
      } else if (caseSuffix.suffix.match(/dan|den|tan|ten/i)) {
        contextualTranslation = `nga / prej ${nounMeaning}`;
      } else if (caseSuffix.suffix.match(/ya|ye|a|e/i)) {
        contextualTranslation = `drejt / te ${nounMeaning}`;
      } else if (caseSuffix.suffix.match(/la|le|yla|yle/i)) {
        contextualTranslation = `me ${nounMeaning}`;
      } else {
        contextualTranslation = nounMeaning;
      }
    } else {
      contextualTranslation = nounMeaning;
    }
  }

  return {
    ...entry,
    translation: contextualTranslation || rootTranslation,
    rootTranslation: rootTranslation,
    inflection: rootWord,
    notes: suffixFormula + (entry.notes ? `\n\nShënim: ${entry.notes}` : '')
  };
}
