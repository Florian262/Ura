import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony4, getLastVowel, isFrontException } from '../vowelHarmony';

const VOICELESS_CONSONANTS = new Set(['f', 's', 't', 'k', 'ç', 'ş', 'h', 'p', 'F', 'S', 'T', 'K', 'Ç', 'Ş', 'H', 'P']);

/**
 * Past Tense Strategy class applying "-di" / "-dı" / "-du" / "-dü" / "-ti" / "-tı" / "-tu" / "-tü" suffixes
 * based on four-way vowel harmony and consonant mutation (Fıstıkçı Şahap).
 */
export class PastTenseStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    const lastChar = trimmed[trimmed.length - 1];
    const isVoiceless = VOICELESS_CONSONANTS.has(lastChar);
    const vowel = getVowelHarmony4(trimmed);
    
    const consonant = isVoiceless ? 't' : 'd';
    const suffixApplied = consonant + vowel;
    const lastVowel = getLastVowel(trimmed);
    const changes: string[] = [];

    // Explanation details in Albanian for students
    if (isVoiceless) {
      changes.push(
        `Bashkëtingëllore e shurdhët (Fıstıkçı Şahap): Rrënja përfundon me shkronjën '${lastChar}' (e shurdhët), prandaj prapashtesa fillon me 't' në vend të 'd'.`
      );
    } else {
      changes.push(
        `Bashkëtingëllore e zëshme: Rrënja përfundon me shkronjën '${lastChar}' (e zëshme), prandaj prapashtesa fillon me 'd'.`
      );
    }

    if (isFrontException(trimmed)) {
      changes.push(
        `Përjashtim: Fjala me origjinë të huaj '${trimmed}' merr prapashtesën e harmonisë së përparme '-ti' ose '-di'.`
      );
    } else {
      changes.push(
        `Harmonia vokalore 4-she: Zanorja e fundit e rrënjës është '${lastVowel}', prandaj zanorja e prapashtesës është '${vowel}'.`
      );
    }

    changes.push(
      `Përfundimi: Shtohet prapashtesa e kohës së shkuar '-${suffixApplied}'.`
    );

    return {
      result: trimmed + suffixApplied,
      suffixApplied,
      changes
    };
  }
}
