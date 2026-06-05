import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony2, getVowelHarmony4 } from '../vowelHarmony';

/**
 * Since Strategy class applying "-diğinden beri" / "-dığından beri" suffix
 * based on vowel harmony and consonant mutation.
 */
export class SinceStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    const workingRoot = trimmed;
    const changes: string[] = [];

    // 1. Explanation details in Albanian
    changes.push(
      `Prapashtesa '-diğinden beri' (Që kur / Prej kohës): Përdoret për të treguar pikën e fillimit të një veprimi që vazhdon ende. Shoqërohet gjithmonë me fjalën 'beri' (prej/që nga).`
    );

    // 2. Consonant Mutation (check if root ends with voiceless consonant)
    const lastChar = workingRoot.slice(-1);
    const isVoiceless = 'çfhkpsştÇFHKPSŞT'.includes(lastChar);
    const startChar = isVoiceless ? 't' : 'd';

    if (isVoiceless) {
      changes.push(
        `Ndryshimi i bashkëtingëllores: Rrënja përfundon me bashkëtingëlloren e shurdhët '${lastChar}', prandaj 'd' kthehet në 't' (rregulli Fıstıkçı Şahap).`
      );
    } else {
      changes.push(
        `Bashkëtingëllore e zëshme ose zanore në fund: Shtohet prapashtesa që fillon me 'd'.`
      );
    }

    // 3. Resolve Harmonies
    const harmony4 = getVowelHarmony4(workingRoot);
    const harmony2 = getVowelHarmony2(workingRoot);

    const suffixApplied = `${startChar}${harmony4}ğ${harmony4}nd${harmony2}n beri`;

    changes.push(
      `Harmonia vokalore: Sipas harmonisë 4-she për zanoren e brendshme dhe 2-she për rasën rrjedhore, fitohet prapashtesa e harmonizuar '-${suffixApplied}'.`
    );

    const resultWord = workingRoot + suffixApplied;

    changes.push(
      `Përfundimi: Fitohet forma '${resultWord}'.`
    );

    return {
      result: resultWord,
      suffixApplied,
      changes
    };
  }
}
