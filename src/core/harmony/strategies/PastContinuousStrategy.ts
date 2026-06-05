import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony4, getLastVowel } from '../vowelHarmony';

const TURKISH_VOWELS = new Set(['a', 'ı', 'o', 'u', 'e', 'i', 'ö', 'ü', 'A', 'I', 'O', 'U', 'E', 'İ', 'Ö', 'Ü']);

/**
 * Past Continuous Strategy class applying the third person singular past continuous suffix:
 * "-iyordu / -ıyordu / -uyordu / -üyordu" ("Ai/Ajo po... / po bënte...").
 * Handles vowel narrowing (e.g. dinle -> dinliyordu) and consonant mutation (e.g. git -> gidiyordu).
 */
export class PastContinuousStrategy implements SuffixStrategy {
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
      `E Shkuara e Vazhdueshme (Geçmişte Süreklilik): Formohet duke shtuar prapashtesën e së shkuarës së vazhdueshme '-iyordu' (kombinim i kohës së tashme vazhduese '-iyor' dhe prapashtesës së të shkuarës '-du') për vetën e tretë njëjës (O - ai/ajo po...).`
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
        suffixApplied = harmonyVowel + 'yordu';
        workingRoot = droppedRoot; // Root without dropped vowel

        changes.push(
          `Ngushtimi i zanores: Rrënja përfundon me zanoren e hapur '${lastCharOfWorking}', e cila bie para prapashtesës dhe ngushtohet në '${harmonyVowel}' sipas harmonisë 4-she.`
        );
      } else {
        // High vowel endings (i, ı, u, ü) - no narrowing needed, just add "yordu"
        suffixApplied = 'yordu';
        changes.push(
          `Zanore e ngushtë në fund: Rrënja përfundon me zanoren e ngushtë '${lastCharOfWorking}', kështu që shtohet direkt prapashtesa 'yordu' pa asnjë ndryshim tjetër.`
        );
      }
    } else {
      // Consonant ending - insert connecting narrow vowel based on 4-way vowel harmony
      const harmonyVowel = getVowelHarmony4(workingRoot);
      const lastVowel = getLastVowel(workingRoot);
      suffixApplied = harmonyVowel + 'yordu';

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
