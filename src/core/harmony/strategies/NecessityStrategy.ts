import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony2 } from '../vowelHarmony';

/**
 * Necessity Strategy class applying "-malı" / "-meli" suffixes
 * based on two-way vowel harmony.
 */
export class NecessityStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim().toLowerCase();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    const workingRoot = root.trim(); // Keep original casing
    const changes: string[] = [];

    // 1. Explanation details in Albanian
    changes.push(
      `Mënyra Detyrore (Gereklilik Kipi): Formohet duke shtuar prapashtesën e detyrimit '-malı / -meli' për vetën e tretë njëjës (o - duhet të...).`
    );

    // 2. Resolve 2-way harmony
    const harmonyVowel = getVowelHarmony2(workingRoot);
    const suffixApplied = harmonyVowel === 'a' ? 'malı' : 'meli';

    changes.push(
      `Harmonia vokalore 2-she: Për rrënjën foljore, zgjidhet prapashtesa e harmonizuar '-${suffixApplied}'.`
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
