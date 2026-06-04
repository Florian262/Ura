import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony4, getLastVowel, isFrontException } from '../vowelHarmony';
import { applyConsonantMutation } from '../consonantMutation';

const TURKISH_VOWELS = new Set(['a', 'ı', 'o', 'u', 'e', 'i', 'ö', 'ü', 'A', 'I', 'O', 'U', 'E', 'İ', 'Ö', 'Ü']);

/**
 * Accusative Strategy class applying the Accusative Case suffix "-ı / -i / -u / -ü"
 * (or "-yı / -yi / -yu / -yü" if the root ends in a vowel), representing a definite direct object.
 * Handles spelling-level consonant voicing (KETÇAP) for common nouns, and spelling preservation
 * with apostrophe for proper nouns (e.g., Ahmet -> Ahmet'i, kitap -> kitabı).
 */
export class AccusativeStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    const isProper = /^[A-ZÇĞİÖŞÜ]/.test(trimmed);
    let workingRoot = trimmed;
    let mutated = false;
    const changes: string[] = [];

    // Explanation details in Albanian
    changes.push(
      `Rasa Kallëzore (Belirtme Durumu): Prapashtesa tregon një kundrinë të drejtë të shquar dhe u përgjigjet pyetjeve 'Neyi?' (Çfarë?) ose 'Kimi?' (Kë?).`
    );

    if (isProper) {
      changes.push(
        `Emër i përveçëm (si emër ose shtet): Rrënja fillon me shkronjë të madhe. Sipas rregullave të drejtshkrimit turk, zbutja e bashkëtingëlloreve nuk shkruhet (edhe pse shqiptohet) dhe shtohet apostrofi (') para prapashtesës.`
      );
    } else {
      // Apply Ketçap mutation on common nouns
      workingRoot = applyConsonantMutation(trimmed);
      mutated = (workingRoot !== trimmed);
      if (mutated) {
        changes.push(
          `Zbutja e bashkëtingëlloreve (rregulli KETÇAP): Rrënja mbaron me bashkëtingëllore të fortë, e cila zbutet në shkrim sepse ndiqet nga një zanore (p.sh. kitap -> kitab, çilek -> çileğ).`
        );
      }
    }

    const lastChar = workingRoot[workingRoot.length - 1];
    const endsWithVowel = TURKISH_VOWELS.has(lastChar);
    const harmonyVowel = getVowelHarmony4(workingRoot);
    const lastVowel = getLastVowel(workingRoot);
    
    const buffer = endsWithVowel ? 'y' : '';
    const suffixApplied = buffer + harmonyVowel;
    const suffixWithApostrophe = (isProper ? "'" : "") + suffixApplied;

    if (endsWithVowel) {
      changes.push(
        `Bashkëtingëllore ndërmjetësuese: Rrënja përfundon me zanoren '${lastChar}', prandaj shtohet 'y' ndërmjetësuese për të shmangur takimin e dy zanoreve.`
      );
    }

    if (isFrontException(workingRoot)) {
      changes.push(
        `Përjashtim: Fjala me origjinë të huaj '${workingRoot}' merr prapashtesën e harmonisë së përparme '-i' ose '-yi'.`
      );
    } else {
      const vowelType = 
        (harmonyVowel === 'ı' || harmonyVowel === 'u') ? 'e prapme' : 'e përparme';
      changes.push(
        `Harmonia vokalore 4-she: Zanorja e fundit e rrënjës është '${lastVowel}' (${vowelType}), prandaj merr prapashtesën përkatëse '-${harmonyVowel}'.`
      );
    }

    const finalResult = workingRoot + suffixWithApostrophe;
    changes.push(
      `Përfundimi: Bashkohet prapashtesa dhe fitohet forma kallëzore '${finalResult}'.`
    );

    return {
      result: finalResult,
      suffixApplied: suffixWithApostrophe,
      changes
    };
  }
}
