import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony2 } from '../vowelHarmony';

/**
 * Conditional Strategy class applying "-se" / "-sa" suffix
 * based on two-way vowel harmony.
 */
export class ConditionalStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    const workingRoot = trimmed;
    const changes: string[] = [];

    // 1. Explanation of the strategy
    changes.push(
      `Mënyra Kushtore / Dëshirore (-se / -sa): Përdoret për të shprehur një kusht (nëse...) ose një dëshirë (sikur...).`
    );

    // 2. Resolve 2-way harmony
    const harmonyVowel = getVowelHarmony2(workingRoot);
    const suffixApplied = harmonyVowel === 'a' ? 'sa' : 'se';

    changes.push(
      `Harmonia vokalore 2-she: Bazuar në zanoren e fundit të rrënjës, zgjidhet prapashtesa e harmonizuar '-${suffixApplied}'.`
    );

    const finalResult = workingRoot + suffixApplied;
    changes.push(
      `Përfundimi: Fitohet forma e zgjedhuar '${finalResult}'.`
    );

    return {
      result: finalResult,
      suffixApplied,
      changes
    };
  }
}
