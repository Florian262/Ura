import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony4, getLastVowel } from '../vowelHarmony';

/**
 * Reflexive Strategy class applying "-n" or "-ın/-in/-un/-ün" suffix
 * based on vowel harmony for Turkish reflexive voice verbs.
 */
export class ReflexiveStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    const workingRoot = trimmed;
    const changes: string[] = [];

    // 1. Explanation details in Albanian
    changes.push(
      `Prapashtesa e Mënyrës Vetvetore: Përdoret për të treguar veprime që një kryefjalë kryen mbi veten e saj (si "vishem", "përgatitem").`
    );

    // Check if root ends in a vowel
    const lastChar = workingRoot.slice(-1).toLowerCase();
    const vowels = new Set(['a', 'ı', 'o', 'u', 'e', 'i', 'ö', 'ü']);
    const endsWithVowel = vowels.has(lastChar);

    let suffixApplied = '';
    if (endsWithVowel) {
      suffixApplied = 'n';
      changes.push(
        `Rrënja '${workingRoot}' përfundon me zanore '${lastChar}', prandaj shtohet thjesht prapashtesa vetvetore '-n'.`
      );
    } else {
      const harmony4 = getVowelHarmony4(workingRoot);
      suffixApplied = `${harmony4}n`;
      changes.push(
        `Rrënja '${workingRoot}' përfundon me bashkëtingëllore. Sipas harmonisë vokalore 4-she për zanoren e fundit '${getLastVowel(workingRoot)}', shtohet prapashtesa '-${suffixApplied}'.`
      );
    }

    const resultWord = workingRoot + suffixApplied;
    changes.push(`Përfundimi: Fitohet forma e foljes vetvetore '${resultWord}'.`);

    return {
      result: resultWord,
      suffixApplied,
      changes
    };
  }
}
