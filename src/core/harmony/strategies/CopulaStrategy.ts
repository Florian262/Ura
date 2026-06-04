import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony4, getLastVowel } from '../vowelHarmony';

const TURKISH_VOWELS = new Set(['a', 'ı', 'o', 'u', 'e', 'i', 'ö', 'ü', 'A', 'I', 'O', 'U', 'E', 'İ', 'Ö', 'Ü']);

/**
 * Copula Strategy class applying the first person singular present tense suffix
 * "-(y)ım / -(y)im / -(y)um / -(y)üm" representing the verb "Jam" ("to be").
 */
export class CopulaStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    const lastChar = trimmed[trimmed.length - 1];
    const endsWithVowel = TURKISH_VOWELS.has(lastChar);
    const harmonyVowel = getVowelHarmony4(trimmed);
    
    // Check if the root is a proper noun (nationalities, names, etc.) by checking capitalization
    const isProper = /^[A-ZÇĞİÖŞÜ]/.test(trimmed);
    
    const buffer = endsWithVowel ? 'y' : '';
    const suffixApplied = buffer + harmonyVowel + 'm';
    
    const lastVowel = getLastVowel(trimmed);
    const changes: string[] = [];

    // Explanation details in Albanian
    changes.push(
      `Konjugimi për përemrin 'Ben' (Unë): Kjo prapashtesë tregon vetën e parë njëjës ('Unë jam...').`
    );

    if (isProper) {
      changes.push(
        `Emër i përveçëm (p.sh. kombësi): Rrënja fillon me shkronjë të madhe, prandaj shtohet apostrofi (') para prapashtesës.`
      );
    }

    if (endsWithVowel) {
      changes.push(
        `Bashkëtingëllore ndërmjetësuese: Rrënja përfundon me zanoren '${lastChar}', prandaj shtohet 'y' ndërmjetësuese për të shmangur takimin e dy zanoreve.`
      );
    }

    changes.push(
      `Harmonia vokalore 4-she: Zanorja e fundit e rrënjës është '${lastVowel}', prandaj merr prapashtesën e vetës së parë '-${harmonyVowel}m'.`
    );

    const suffixWithApostrophe = (isProper ? "'" : "") + suffixApplied;
    changes.push(
      `Përfundimi: Bashkohet prapashtesa dhe fitohet forma '${trimmed}${suffixWithApostrophe}'.`
    );

    return {
      result: trimmed + suffixWithApostrophe,
      suffixApplied: suffixWithApostrophe,
      changes
    };
  }
}
