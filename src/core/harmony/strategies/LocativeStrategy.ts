import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony2, getLastVowel, isFrontException } from '../vowelHarmony';

const VOICELESS_CONSONANTS = new Set(['f', 's', 't', 'k', 'ç', 'ş', 'h', 'p', 'F', 'S', 'T', 'K', 'Ç', 'Ş', 'H', 'P']);

/**
 * Locative Strategy class applying "-da" / "-de" / "-ta" / "-te" suffixes
 * based on two-way vowel harmony and consonant mutation (Fıstıkçı Şahap).
 */
export class LocativeStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    const lastChar = trimmed[trimmed.length - 1];
    const isVoiceless = VOICELESS_CONSONANTS.has(lastChar);
    const vowel = getVowelHarmony2(trimmed);
    
    const consonant = isVoiceless ? 't' : 'd';
    const suffixApplied = consonant + vowel;
    const lastVowel = getLastVowel(trimmed);
    const changes: string[] = [];

    // Explanation details
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
        `Përjashtim: Fjala me origjinë të huaj '${trimmed}' merr prapashtesën e harmonisë së përparme '-te' ose '-de'.`
      );
    } else {
      const vowelType = vowel === 'a' ? 'e prapme' : 'e përparme';
      changes.push(
        `Harmonia vokalore 2-she: Zanorja e fundit e rrënjës është '${lastVowel}' (${vowelType}), prandaj zanorja e prapashtesës është '${vowel}'.`
      );
    }

    changes.push(
      `Përfundimi: Shtohet prapashtesa vendore '-${suffixApplied}'.`
    );

    return {
      result: trimmed + suffixApplied,
      suffixApplied,
      changes
    };
  }
}
