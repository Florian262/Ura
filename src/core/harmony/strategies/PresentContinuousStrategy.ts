import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony4, getLastVowel } from '../vowelHarmony';

const TURKISH_VOWELS = new Set(['a', 'ı', 'o', 'u', 'e', 'i', 'ö', 'ü', 'A', 'I', 'O', 'U', 'E', 'İ', 'Ö', 'Ü']);

/**
 * Present Continuous Strategy class applying the first person singular present continuous suffix:
 * "-iyorum / -ıyorum / -uyorum / -üyorum" ("Unë po...").
 * Handles vowel narrowing (e.g. dinle -> dinliyorum) and consonant mutation (e.g. git -> gidiyorum).
 */
export class PresentContinuousStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    let workingRoot = trimmed;
    let mutated = false;
    const changes: string[] = [];

    // 1. Pronoun and Tense mapping explanation
    changes.push(
      `Koha e Tashme (Şimdiki Zaman): Zgjedhimi për përemrin 'Ben' (Unë) në kohën e tashme formohet duke bashkuar prapashtesën '-iyor' dhe '-um' (për të formuar '-iyorum').`
    );

    // 2. Consonant Mutation Check (KETÇAP rule for verbs gitmek/etmek)
    if (trimmed.endsWith('git')) {
      workingRoot = trimmed.slice(0, -3) + 'gid';
      mutated = true;
    } else if (trimmed.endsWith('et')) {
      workingRoot = trimmed.slice(0, -2) + 'ed';
      mutated = true;
    }

    if (mutated) {
      changes.push(
        `Zbutja e bashkëtingëlloreve: Rrënja përfundon me 't', e cila kthehet në 'd' sepse pasohet nga një zanore (rregulli KETÇAP: git -> gid, et -> ed).`
      );
    }

    // 3. Vowel Ending vs Consonant Ending Check
    const lastCharOfWorking = workingRoot[workingRoot.length - 1];
    const endsWithVowel = TURKISH_VOWELS.has(lastCharOfWorking);
    let suffixApplied = '';

    if (endsWithVowel) {
      const lowerLastChar = lastCharOfWorking.toLowerCase();
      if (lowerLastChar === 'a' || lowerLastChar === 'e') {
        // Vowel Narrowing (Ünlü Daralması)
        const droppedRoot = workingRoot.slice(0, -1);
        const harmonyVowel = getVowelHarmony4(droppedRoot);
        suffixApplied = harmonyVowel + 'yorum';
        workingRoot = droppedRoot; // Rrënja pa zanoren e rënë

        changes.push(
          `Ngushtimi i zanores: Rrënja përfundon me zanoren e hapur '${lastCharOfWorking}', e cila bie para prapashtesës dhe ngushtohet në '${harmonyVowel}' sipas harmonisë 4-she.`
        );
      } else {
        // High vowel endings (i, ı, u, ü) - no narrowing needed, just add "yorum"
        suffixApplied = 'yorum';
        changes.push(
          `Zanore e ngushtë në fund: Rrënja përfundon me zanoren e ngushtë '${lastCharOfWorking}', kështu që shtohet direkt prapashtesa 'yorum' pa asnjë ndryshim tjetër.`
        );
      }
    } else {
      // Consonant ending - insert connecting narrow vowel based on 4-way vowel harmony
      const harmonyVowel = getVowelHarmony4(workingRoot);
      const lastVowel = getLastVowel(workingRoot);
      suffixApplied = harmonyVowel + 'yorum';

      changes.push(
        `Bashkëtingëllore në fund: Rrënja përfundon me bashkëtingëlloren '${lastCharOfWorking}', prandaj shtohet zanorja ndërmjetësuese '${harmonyVowel}' sipas harmonisë 4-she (bazuar në zanoren e fundit '${lastVowel}').`
      );
    }

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
