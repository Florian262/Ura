import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony2, getVowelHarmony4 } from '../vowelHarmony';

const TURKISH_VOWELS = new Set(['a', 'ı', 'o', 'u', 'e', 'i', 'ö', 'ü', 'A', 'I', 'O', 'U', 'E', 'İ', 'Ö', 'Ü']);

// The 13 standard monosyllabic verbs that take -ır/-ir/-ur/-ür instead of -ar/-er
const AORIST_EXCEPTIONS = new Set([
  'al', 'bil', 'bul', 'dur', 'gel', 'gör', 'kal', 'ol', 'öl', 'san', 'ver', 'vur', 'var'
]);

/**
 * Geniş Zaman (Aorist) Suffix Strategy applying the third person singular suffix:
 * - Vowel endings: "-r" (e.g., okur)
 * - Monosyllabic consonant endings: "-ar / -er" (exceptions take "-ır / -ir / -ur / -ür")
 * - Polysyllabic consonant endings: "-ır / -ir / -ur / -ür"
 */
export class AoristStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim().toLowerCase();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    let workingRoot = root.trim(); // Keep original casing
    let mutated = false;
    const changes: string[] = [];

    // 1. Tense explanation
    changes.push(
      `Koha e Gjerë (Geniş Zaman): Formohet duke shtuar prapashtesën e kohës së gjerë për vetën e tretë njëjës (o - ai/ajo).`
    );

    // 2. Consonant Mutation Check (KETÇAP rule for git/et)
    if (trimmed.endsWith('git')) {
      workingRoot = workingRoot.slice(0, -3) + 'gid';
      mutated = true;
    } else if (trimmed.endsWith('et')) {
      workingRoot = workingRoot.slice(0, -2) + 'ed';
      mutated = true;
    }

    if (mutated) {
      changes.push(
        `Zbutja e bashkëtingëlloreve te rrënja: Rrënja e foljes përfundon me 't', e cila kthehet në 'd' sepse pasohet nga zanorja e prapashtesës (git -> gid, et -> ed).`
      );
    }

    // 3. Syllable count & vowel check
    const lastCharOfWorking = workingRoot[workingRoot.length - 1];
    const endsWithVowel = TURKISH_VOWELS.has(lastCharOfWorking);

    // Count syllables = count vowels in root
    const syllableCount = (workingRoot.match(/[aıoueiöüAIOUEİÖÜ]/g) || []).length;
    let suffixApplied = '';

    if (endsWithVowel) {
      // Vowel endings: just add "r"
      suffixApplied = 'r';
      changes.push(
        `Rrënjë që përfundon me zanore: Rrënja përfundon me zanoren '${lastCharOfWorking}', kështu që thjesht shtohet prapashtesa '-r'.`
      );
    } else if (syllableCount === 1) {
      // Monosyllabic consonant endings
      const isException = AORIST_EXCEPTIONS.has(trimmed);
      if (isException) {
        // Exceptions take 4-way harmony -ır/-ir/-ur/-ür
        const vowel = getVowelHarmony4(workingRoot);
        suffixApplied = vowel + 'r';
        changes.push(
          `Rrënjë një-rrokëshe (Përjashtim): Rrënja '${trimmed}' është një nga 13 foljet e veçanta një-rrokëshe, prandaj merr prapashtesën e harmonisë 4-she '-${suffixApplied}'.`
        );
      } else {
        // Standard monosyllabic take 2-way harmony -ar/-er
        const vowel = getVowelHarmony2(workingRoot);
        suffixApplied = vowel + 'r';
        changes.push(
          `Rrënjë një-rrokëshe (Rregullt): Rrënja '${trimmed}' është një-rrokëshe e rregullt, prandaj merr prapashtesën e harmonisë 2-she '-${suffixApplied}'.`
        );
      }
    } else {
      // Polysyllabic consonant endings take 4-way harmony -ır/-ir/-ur/-ür
      const vowel = getVowelHarmony4(workingRoot);
      suffixApplied = vowel + 'r';
      changes.push(
        `Rrënjë shumë-rrokëshe: Rrënja ka ${syllableCount} rrokje dhe përfundon me bashkëtingëllore, prandaj merr prapashtesën e harmonisë 4-she '-${suffixApplied}'.`
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
