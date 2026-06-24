import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony2, getLastVowel, isFrontException } from '../vowelHarmony';


/**
 * Plural Strategy class applying "-lar" / "-ler" suffixes based on two-way vowel harmony.
 */
export class PluralStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    const suffix = getVowelHarmony2(trimmed);
    const suffixApplied = suffix === 'a' ? 'lar' : 'ler';
    const lastVowel = getLastVowel(trimmed);
    const changes: string[] = [];

    if (isFrontException(trimmed)) {
      changes.push(
        `Përjashtim: Fjala me origjinë të huaj '${trimmed}' merr prapashtesën e harmonisë së përparme '-ler' (nuk ndjek rregullin e zakonshëm).`
      );
    } else {
      const vowelType = suffix === 'a' ? 'e prapme' : 'e përparme';
      changes.push(
        `Harmonia vokalore 2-she: Zanorja e fundit e rrënjës është '${lastVowel}' (${vowelType}), prandaj shtohet prapashtesa '-${suffixApplied}'.`
      );
    }

    return {
      result: trimmed + suffixApplied,
      suffixApplied,
      changes
    };
  }
}
