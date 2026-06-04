import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony4, getLastVowel } from '../vowelHarmony';

const TURKISH_VOWELS = new Set(['a', 'ı', 'o', 'u', 'e', 'i', 'ö', 'ü', 'A', 'I', 'O', 'U', 'E', 'İ', 'Ö', 'Ü']);

/**
 * Possessive Strategy class applying the first person singular possessive suffix
 * "-im / -ım / -um / -üm" (or just "-m" if the root ends in a vowel).
 * Corresponds to "im / ime" in Albanian (e.g. Benim kalemim -> Lapsi im).
 */
export class PossessiveStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    const lastChar = trimmed[trimmed.length - 1];
    const endsWithVowel = TURKISH_VOWELS.has(lastChar);
    let suffixApplied = '';
    const lastVowel = getLastVowel(trimmed);
    const changes: string[] = [];

    // Explanation details in Albanian
    changes.push(
      `Prapashtesat Pronore (İyelik Ekleri): Zgjedhimi për përemrin 'Benim' (i imi / imja) shtohet pas emrit për të treguar pronësinë.`
    );

    if (endsWithVowel) {
      suffixApplied = 'm';
      changes.push(
        `Rrënja përfundon me zanoren '${lastChar}': Në këtë rast shtohet thjesht shkronja '-m' (p.sh. baba -> babam).`
      );
    } else {
      const harmonyVowel = getVowelHarmony4(trimmed);
      suffixApplied = harmonyVowel + 'm';
      changes.push(
        `Rrënja përfundon me bashkëtingëllore: Shtohet zanorja lidhëse '${harmonyVowel}' sipas harmonisë 4-she (e bazuar te zanorja e fundit '${lastVowel}') dhe prapashtesa '-m' (p.sh. ev -> evim).`
      );
    }

    const finalResult = trimmed + suffixApplied;
    changes.push(
      `Përfundimi: Fitohet forma pronore '${finalResult}'.`
    );

    return {
      result: finalResult,
      suffixApplied,
      changes
    };
  }
}
