import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony4, getLastVowel } from '../vowelHarmony';


/**
 * Habitore Strategy class applying the Indirect Past Tense suffix "-miş / -mış / -muş / -müş"
 * and mapping it directly to the unique Albanian "Mënyra Habitore".
 */
export class HabitoreStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    const harmonyVowel = getVowelHarmony4(trimmed);
    const suffixApplied = `m${harmonyVowel}ş`;
    const lastVowel = getLastVowel(trimmed);
    const changes: string[] = [];

    changes.push(
      `Harmonia vokalore 4-she: Zanorja e fundit e rrënjës është '${lastVowel}', prandaj shtohet prapashtesa '-miş' e harmonizuar si '-${suffixApplied}'.`
    );
    
    // Albanian linguistic mapping explanation
    changes.push(
      `Lidhja Shqip-Turqisht: Kjo prapashtesë korrespondon drejtpërdrejt me Mënyrën Habitore në gjuhën shqipe (p.sh., 'gelmiş' -> 'paska ardhur', 'okumuş' -> 'paska lexuar', 'yazmış' -> 'paska shkruar').`
    );

    return {
      result: trimmed + suffixApplied,
      suffixApplied,
      changes
    };
  }
}
