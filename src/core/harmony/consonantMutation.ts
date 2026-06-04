/**
 * Consonant Mutation utility for Turkish grammar.
 * Handles the "Ketçap" voicing mutation: p, ç, t, k -> b, c, d, ğ.
 */

const MUTATION_MAP: Record<string, string> = {
  'p': 'b',
  'ç': 'c',
  't': 'd',
  'k': 'ğ'
};

// Words that do NOT mutate despite ending in p, ç, t, k (mostly single syllable or specific loans)
const NO_MUTATION_EXCEPTIONS = new Set([
  'saç', 'süt', 'üç', 'iç', 'koç', 'kart', 'park', 'bilet', 'sepet', 'paket', 'at', 'ot', 'saat'
]);

// Special cases that mutate despite being single syllable (e.g., git -> gid-)
const SPECIAL_MUTATIONS: Record<string, string> = {
  'git': 'gid',
  'tat': 'tad',
  'et': 'ed'
};

/**
 * Checks if a word ends in a Ketçap consonant.
 */
export function endsWithKetcap(word: string): boolean {
  const normalized = word.trim().toLowerCase();
  if (normalized.length === 0) return false;
  const lastChar = normalized[normalized.length - 1];
  return lastChar in MUTATION_MAP;
}

/**
 * Applies consonant voicing (mutation) to a word if a vowel-starting suffix is attached.
 * E.g., kitap -> kitab, git -> gid, köpek -> köpeğ.
 */
export function applyConsonantMutation(word: string): string {
  const trimmed = word.trim();
  if (trimmed.length === 0) return trimmed;

  const lower = trimmed.toLowerCase();

  // Check special static mappings (e.g. git -> gid)
  if (SPECIAL_MUTATIONS[lower]) {
    const replacement = SPECIAL_MUTATIONS[lower];
    // Preserve original capitalization if needed
    if (trimmed[0] === trimmed[0].toUpperCase()) {
      return replacement[0].toUpperCase() + replacement.slice(1);
    }
    return replacement;
  }

  // Check if it's in the exception list
  if (NO_MUTATION_EXCEPTIONS.has(lower)) {
    return trimmed;
  }

  const lastChar = trimmed[trimmed.length - 1];
  const lastCharLower = lastChar.toLowerCase();

  if (lastCharLower in MUTATION_MAP) {
    const mutatedCharLower = MUTATION_MAP[lastCharLower];
    const isUpper = lastChar === lastChar.toUpperCase() && lastChar !== lastCharLower;
    const mutatedChar = isUpper ? mutatedCharLower.toUpperCase() : mutatedCharLower;
    
    // Special case for ending in 'nk' -> 'ng' (e.g., renk -> rengi)
    if (lastCharLower === 'k' && trimmed.length > 1 && trimmed[trimmed.length - 2].toLowerCase() === 'n') {
      const preceding = trimmed.slice(0, -1);
      const mutatedCharG = isUpper ? 'G' : 'g';
      return preceding + mutatedCharG;
    }

    return trimmed.slice(0, -1) + mutatedChar;
  }

  return trimmed;
}
