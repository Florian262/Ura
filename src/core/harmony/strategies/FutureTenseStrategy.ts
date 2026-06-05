import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony2, getLastVowel } from '../vowelHarmony';

const TURKISH_VOWELS = new Set(['a', 'ı', 'o', 'u', 'e', 'i', 'ö', 'ü', 'A', 'I', 'O', 'U', 'E', 'İ', 'Ö', 'Ü']);

/**
 * Future Tense Strategy class applying the first person singular future tense suffix:
 * "-acağım / -eceğim" or buffer "-yacağım / -yeceğim" ("Unë do të...").
 * Handles consonant voicing (git -> gideceğim) and buffer insertion for vowel roots.
 */
export class FutureTenseStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    let workingRoot = trimmed;
    let mutated = false;
    const changes: string[] = [];

    // 1. Tense explanation
    changes.push(
      `Koha e Ardhshme (Gelecek Zaman): Zgjedhimi për përemrin 'Ben' (Unë) formohet duke bashkuar prapashtesën e së ardhshmes '-acak/-ecek' dhe prapashtesën vetanake '-ım/-im'.`
    );

    // 2. Consonant Mutation Check (KETÇAP rule for verbs git/et)
    if (trimmed.endsWith('git')) {
      workingRoot = trimmed.slice(0, -3) + 'gid';
      mutated = true;
    } else if (trimmed.endsWith('et')) {
      workingRoot = trimmed.slice(0, -2) + 'ed';
      mutated = true;
    }

    if (mutated) {
      changes.push(
        `Zbutja e bashkëtingëlloreve te rrënja: Rrënja e foljes përfundon me 't', e cila kthehet në 'd' sepse pasohet nga një zanore (git -> gid, et -> ed).`
      );
    }

    // 2b. Vowel Narrowing for 'ye' and 'de'
    if (trimmed === 'ye') {
      workingRoot = 'yi';
      changes.push(
        `Ngushtimi i zanores: Rrënja e foljes 'ye' ngushtohet nga 'e' në 'i' para prapashtesës së së ardhshmes (ye -> yiyeceğim).`
      );
    } else if (trimmed === 'de') {
      workingRoot = 'di';
      changes.push(
        `Ngushtimi i zanores: Rrënja e foljes 'de' ngushtohet nga 'e' në 'i' para prapashtesës së së ardhshmes (de -> diyeceğim).`
      );
    }

    // 3. Vowel Ending vs Consonant Ending Check
    const lastCharOfWorking = workingRoot[workingRoot.length - 1];
    const endsWithVowel = TURKISH_VOWELS.has(lastCharOfWorking);
    const lastVowel = getLastVowel(workingRoot);
    const harmony2 = getVowelHarmony2(workingRoot); // 'a' or 'e'

    let buffer = '';
    if (endsWithVowel) {
      buffer = 'y';
      changes.push(
        `Bashkim zanor: Rrënja përfundon me zanoren '${lastCharOfWorking}', prandaj shtohet shkronja ndërmjetësuese 'y' për të parandaluar përplasjen e dy zanoreve.`
      );
    }

    // Future tense suffix is -acak or -ecek.
    // When followed by first person singular -ım/-im, the 'k' voices to 'ğ'.
    // So: -acak + ım -> -acağim (harmonized) -> -acağım
    // -ecek + im -> -eceğim
    const suffixBase = harmony2 === 'a' ? 'acağım' : 'eceğim';
    const suffixApplied = buffer + suffixBase;

    changes.push(
      `Harmonia vokalore 2-she: Zanorja e fundit e rrënjës është '${lastVowel}', prandaj përdoret prapashtesa e harmonisë përkatëse '-${suffixBase}'.`
    );

    changes.push(
      `Zbutja e bashkëtingëlloreve te prapashtesa: Shkronja 'k' e prapashtesës origjinale '-acak/-ecek' kthehet në 'ğ' sepse ndiqet nga prapashtesa vetanake që fillon me zanore.`
    );

    const finalResult = workingRoot + suffixApplied;
    changes.push(
      `Përfundimi: Fitohet forma e zgjedhuar '${finalResult}' ("Unë do të...").`
    );

    return {
      result: finalResult,
      suffixApplied,
      changes
    };
  }
}
