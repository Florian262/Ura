import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony2 } from '../vowelHarmony';

const TURKISH_VOWELS = new Set(['a', 'ı', 'o', 'u', 'e', 'i', 'ö', 'ü', 'A', 'I', 'O', 'U', 'E', 'İ', 'Ö', 'Ü']);

/**
 * Potential Tense Strategy class applying "-abilir" / "-ebilir" / "-yabilir" / "-yebilir" suffixes
 * based on two-way vowel harmony, buffer letter 'y', consonant voicing, and vowel narrowing exceptions.
 */
export class PotentialStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim().toLowerCase();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    let workingRoot = root.trim(); // Keep original casing
    let mutated = false;
    let narrowed = false;
    const changes: string[] = [];

    // 1. Tense explanation
    changes.push(
      `Folja e Mundësisë (Yeterlilik Fiili): Formohet duke shtuar prapashtesën e mundësisë '-abil / -ebil' e ndjekur nga koha e gjerë për vetën e tretë njëjës (o - mund të...).`
    );

    // 2. Vowel narrowing check (ye -> yi, de -> di)
    if (trimmed === 'ye') {
      workingRoot = workingRoot.replace(/ye/i, 'yi');
      narrowed = true;
    } else if (trimmed === 'de') {
      workingRoot = workingRoot.replace(/de/i, 'di');
      narrowed = true;
    }

    if (narrowed) {
      changes.push(
        `Ngushtimi i zanores te rrënja: Rrënja '${root.trim()}' pëson ngushtim të zanores 'e' -> 'i' përpara shkronjës ndërmjetësuese 'y' (ye -> yi, de -> di).`
      );
    }

    // 3. Consonant Mutation Check (KETÇAP rule for git/et)
    // Only apply if not narrowed (which ye/de aren't anyway, but just in case)
    if (!narrowed) {
      if (trimmed.endsWith('git')) {
        workingRoot = workingRoot.slice(0, -3) + 'gid';
        mutated = true;
      } else if (trimmed.endsWith('et')) {
        workingRoot = workingRoot.slice(0, -2) + 'ed';
        mutated = true;
      }
    }

    if (mutated) {
      changes.push(
        `Zbutja e bashkëtingëlloreve te rrënja: Rrënja e foljes përfundon me 't', e cila kthehet në 'd' sepse pasohet nga zanorja e prapashtesës (git -> gid, et -> ed).`
      );
    }

    // 4. Resolve buffer and vowel harmony
    const lastCharOfWorking = workingRoot[workingRoot.length - 1];
    const endsWithVowel = TURKISH_VOWELS.has(lastCharOfWorking);
    
    // Determine harmony vowel for -abil / -ebil
    const harmonyVowel = getVowelHarmony2(workingRoot);
    const suffixBase = harmonyVowel === 'a' ? 'abilir' : 'ebilir';
    const suffixApplied = endsWithVowel ? 'y' + suffixBase : suffixBase;

    if (endsWithVowel) {
      changes.push(
        `Shkronja ndërmjetësuese 'y': Rrënja e foljes përfundon me zanore, prandaj shtohet 'y' për të shmangur përplasjen e dy zanoreve.`
      );
    }

    changes.push(
      `Harmonia vokalore 2-she: Sipas zanores së fundit të rrënjës, zgjidhet prapashtesa e harmonizuar '-${suffixBase}'.`
    );

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
