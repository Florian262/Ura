import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony4, getLastVowel } from '../vowelHarmony';

/**
 * Passive Strategy class applying "-ıl/-il/-ul/-ül", "-ın/-in/-un/-ün", or "-n" suffix
 * based on vowel harmony and root ending for Turkish passive voice verbs.
 */
export class PassiveStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    const workingRoot = trimmed;
    const changes: string[] = [];

    // 1. Explanation details in Albanian
    changes.push(
      `Prapashtesa e Trajtës Pasive: Përdoret për të treguar një veprim që kryhet nga dikush ose diçka tjetër (si "shkruhet", "bëhet", "xhirohet").`
    );

    const lastChar = workingRoot.slice(-1).toLowerCase();
    const vowels = new Set(['a', 'ı', 'o', 'u', 'e', 'i', 'ö', 'ü']);
    const endsWithVowel = vowels.has(lastChar);

    let suffixApplied = '';
    if (endsWithVowel) {
      suffixApplied = 'n';
      changes.push(
        `Rrënja '${workingRoot}' përfundon me zanore '${lastChar}', prandaj shtohet prapashtesa pasive '-n'.`
      );
    } else if (lastChar === 'l') {
      const harmony4 = getVowelHarmony4(workingRoot);
      suffixApplied = `${harmony4}n`;
      changes.push(
        `Rrënja '${workingRoot}' përfundon me shkronjën 'l'. Për të shmangur dyfishimin e 'l'-së, shtohet prapashtesa '-ın/-in/-un/-ün' → '-${suffixApplied}' bazuar në harmoninë 4-she të zanores '${getLastVowel(workingRoot)}'.`
      );
    } else {
      const harmony4 = getVowelHarmony4(workingRoot);
      suffixApplied = `${harmony4}l`;
      changes.push(
        `Rrënja '${workingRoot}' përfundon me bashkëtingëllore (përveç 'l'). Sipas harmonisë vokalore 4-she për zanoren e fundit '${getLastVowel(workingRoot)}', shtohet prapashtesa pasive '-ıl/-il/-ul/-ül' → '-${suffixApplied}'.`
      );
    }

    const resultWord = workingRoot + suffixApplied;
    changes.push(`Përfundimi: Fitohet forma e foljes pasive '${resultWord}'.`);

    return {
      result: resultWord,
      suffixApplied,
      changes
    };
  }
}
