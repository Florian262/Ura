import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony4, getLastVowel } from '../vowelHarmony';

/**
 * Question Strategy class applying the question particle
 * "mı / mi / mu / mü" based on 4-way vowel harmony.
 */
export class QuestionStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    const harmonyVowel = getVowelHarmony4(trimmed);
    const particle = `m${harmonyVowel}`;
    const suffixApplied = ` ${particle}?`;
    
    const lastVowel = getLastVowel(trimmed);
    const changes: string[] = [];

    changes.push(
      `Prapashtesa pyetëse: Në turqisht, pyetjet po/jo formohen me pjesëzën pyetëse '${particle}', e cila shkruhet e ndarë me hapësirë pas fjalës.`
    );

    changes.push(
      `Harmonia vokalore 4-she: Zanorja e fundit e rrënjës është '${lastVowel}', prandaj përzgjidhet pjesëza pyetëse '${particle}'.`
    );

    changes.push(
      `Përfundimi: Shtohet pjesëza pyetëse e ndarë me hapësirë dhe pikëpyetja në fund, duke formuar '${trimmed}${suffixApplied}'.`
    );

    return {
      result: trimmed + suffixApplied,
      suffixApplied,
      changes
    };
  }
}
