/**
 * Vowel Harmony utility for Turkish agglutination.
 * Handles 2-way and 4-way vowel harmony.
 */

const BACK_VOWELS = new Set(['a', 'ı', 'o', 'u', 'A', 'I', 'O', 'U']);
const FRONT_VOWELS = new Set(['e', 'i', 'ö', 'ü', 'E', 'İ', 'Ö', 'Ü']);
const ALL_VOWELS = new Set([...BACK_VOWELS, ...FRONT_VOWELS]);

// Exceptions for front vowel harmony (e.g., loanwords like "saat", "rol", "alkol", "hayal")
const FRONT_HARMONY_EXCEPTIONS = new Set([
  'saat', 'hayal', 'alkol', 'rol', 'metal', 'ideal', 'meşgul', 'kabul', 'petrol', 'kalp'
]);

/**
 * Extracts the last vowel from a Turkish word root.
 */
export function getLastVowel(word: string): string {
  const normalized = word.trim();
  for (let i = normalized.length - 1; i >= 0; i--) {
    const char = normalized[i];
    if (ALL_VOWELS.has(char)) {
      return char.toLowerCase();
    }
  }
  return 'e'; // Default fallback
}

/**
 * Checks if the last vowel is a back vowel.
 */
export function isBackVowel(vowel: string): boolean {
  return BACK_VOWELS.has(vowel);
}

/**
 * Checks if a word is a front-harmony exception.
 */
export function isFrontException(word: string): boolean {
  const normalized = word.trim().toLowerCase();
  // Check if the word ends with any of the exceptions
  for (const exc of FRONT_HARMONY_EXCEPTIONS) {
    if (normalized.endsWith(exc)) {
      return true;
    }
  }
  return false;
}

/**
 * Resolves 2-way vowel harmony.
 * - Back vowels (a, ı, o, u) -> 'a'
 * - Front vowels (e, i, ö, ü) -> 'e'
 * - Exceptions (e.g. saat) -> 'e'
 */
export function getVowelHarmony2(word: string): 'a' | 'e' {
  const lastVowel = getLastVowel(word);
  if (isFrontException(word)) {
    return 'e';
  }
  return isBackVowel(lastVowel) ? 'a' : 'e';
}

/**
 * Resolves 4-way vowel harmony.
 * - a, ı -> 'ı'
 * - e, i -> 'i'
 * - o, u -> 'u'
 * - ö, ü -> 'ü'
 * - Exceptions -> 'i' / 'ü' (handled via basic map)
 */
export function getVowelHarmony4(word: string): 'ı' | 'i' | 'u' | 'ü' {
  if (isFrontException(word)) {
    const last = getLastVowel(word);
    if (last === 'o' || last === 'u') return 'ü';
    return 'i';
  }

  const lastVowel = getLastVowel(word);
  switch (lastVowel) {
    case 'a':
    case 'ı':
      return 'ı';
    case 'e':
    case 'i':
      return 'i';
    case 'o':
    case 'u':
      return 'u';
    case 'ö':
    case 'ü':
      return 'ü';
    default:
      return 'i';
  }
}
