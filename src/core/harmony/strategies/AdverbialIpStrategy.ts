import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony4, getLastVowel } from '../vowelHarmony';

const TURKISH_VOWELS = new Set(['a', 'ı', 'o', 'u', 'e', 'i', 'ö', 'ü', 'A', 'I', 'O', 'U', 'E', 'İ', 'Ö', 'Ü']);

/**
 * Adverbial -ip Strategy class applying the linking suffix:
 * "-ip / -ıp / -up / -üp" after consonants, and "-yip / -yıp / -yup / -yüp" after vowels.
 * Handles consonant voicing (e.g. git -> gidip).
 */
export class AdverbialIpStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    let workingRoot = trimmed;
    let mutated = false;
    const changes: string[] = [];

    // 1. Explanation of the strategy
    changes.push(
      `Zarf-folja '-ip' (lidhëse): Përdoret për të lidhur dy folje në një fjali ku folja e parë merr prapashtesën '-ip / -ıp / -up / -üp' (duke bërë...) dhe shmang përsëritjen e kohës dhe vetës.`
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

    const harmonyVowel = getVowelHarmony4(workingRoot);
    const lastVowel = getLastVowel(workingRoot);

    if (endsWithVowel) {
      suffixApplied = 'y' + harmonyVowel + 'p';
      changes.push(
        `Zanore në fund: Rrënja përfundon me zanoren '${lastCharOfWorking}', prandaj shtohet shkronja ndërmjetëse 'y' dhe prapashtesa e harmonizuar '-${harmonyVowel}p' (sipas harmonisë 4-she bazuar në '${lastVowel}').`
      );
    } else {
      suffixApplied = harmonyVowel + 'p';
      changes.push(
        `Bashkëtingëllore në fund: Rrënja përfundon me bashkëtingëlloren '${lastCharOfWorking}', prandaj shtohet prapashtesa e harmonizuar '-${harmonyVowel}p' (sipas harmonisë 4-she bazuar në zanoren e fundit '${lastVowel}').`
      );
    }

    const finalResult = workingRoot + suffixApplied;
    changes.push(
      `Përfundimi: Fitohet forma '${finalResult}'.`
    );

    return {
      result: finalResult,
      suffixApplied,
      changes
    };
  }
}
