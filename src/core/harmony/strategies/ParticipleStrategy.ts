import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony4, getLastVowel } from '../vowelHarmony';

/**
 * Participle Strategy class applying "-dığım/-diğim/-duğum/-düğüm" (or "-tığım" etc.)
 * relative participle based on vowel harmony, consonant mutation, and voiceless consonant zbutje.
 */
export class ParticipleStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    const workingRoot = trimmed;
    const changes: string[] = [];

    // 1. Explanation details in Albanian
    changes.push(
      `Prapashtesa e Pjesores së Shkuar/Tashme (-dIk + prapashtesa pronore): Përdoret për të formuar struktura relative të tipit "libri që lexoj/lexova" ose "vendi ku shkoj/shkova".`
    );

    const lastChar = workingRoot.slice(-1);
    const isVoiceless = 'çfhkpsştÇFHKPSŞT'.includes(lastChar);
    const startChar = isVoiceless ? 't' : 'd';

    if (isVoiceless) {
      changes.push(
        `Ndryshimi i bashkëtingëllores: Rrënja përfundon me bashkëtingëlloren e shurdhët '${lastChar}', prandaj 'd' kthehet në 't' (rregulli Fıstıkçı Şahap).`
      );
    } else {
      changes.push(
        `Bashkëtingellore e zëshme ose zanore në fund: Prapashtesa fillon me 'd'.`
      );
    }

    // Resolve 4-way vowel harmony
    const harmony4 = getVowelHarmony4(workingRoot);
    const suffixApplied = `${startChar}${harmony4}ğ${harmony4}m`;

    changes.push(
      `Mutacioni i 'k' në 'ğ': Pjesorja '-dik' ndiqet nga prapashtesa pronore e vetës së parë njëjës '-im', prandaj 'k' zbutet në 'ğ'.`
    );
    changes.push(
      `Harmonia vokalore: Sipas harmonisë 4-she për zanoren e fundit '${getLastVowel(workingRoot)}', fitohet prapashtesa '-${suffixApplied}'.`
    );

    const resultWord = workingRoot + suffixApplied;
    changes.push(`Përfundimi: Fitohet forma relative '${resultWord}' (që unë lexoj/kam lexuar/kam bërë).`);

    return {
      result: resultWord,
      suffixApplied,
      changes
    };
  }
}
