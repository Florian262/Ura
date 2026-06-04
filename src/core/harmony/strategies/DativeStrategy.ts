import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony2, getLastVowel, isFrontException } from '../vowelHarmony';

const TURKISH_VOWELS = new Set(['a', 'ı', 'o', 'u', 'e', 'i', 'ö', 'ü', 'A', 'I', 'O', 'U', 'E', 'İ', 'Ö', 'Ü']);

/**
 * Dative Strategy class applying the Dative Case suffix "-a / -e"
 * (or "-ya / -ye" if the root ends in a vowel), representing "drejt një vendi".
 */
export class DativeStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    const lastChar = trimmed[trimmed.length - 1];
    const endsWithVowel = TURKISH_VOWELS.has(lastChar);
    const vowel = getVowelHarmony2(trimmed);
    const isProper = /^[A-ZÇĞİÖŞÜ]/.test(trimmed);
    
    const buffer = endsWithVowel ? 'y' : '';
    const suffixApplied = buffer + vowel;
    const suffixWithApostrophe = (isProper ? "'" : "") + suffixApplied;
    
    const lastVowel = getLastVowel(trimmed);
    const changes: string[] = [];

    // Explanation details in Albanian
    changes.push(
      `Rasa Dhanore (Yönelme Durumu): Prapashtesa tregon lëvizje ose drejtim drejt një lokacioni dhe i përgjigjet pyetjes 'Nereye?' (Drejt ku?).`
    );

    if (isProper) {
      changes.push(
        `Emër i përveçëm (si qytet ose person): Rrënja fillon me shkronjë të madhe, prandaj shtohet apostrofi (') para prapashtesës.`
      );
    }

    if (endsWithVowel) {
      changes.push(
        `Bashkëtingëllore ndërmjetësuese: Rrënja përfundon me zanoren '${lastChar}', prandaj shtohet 'y' ndërmjetësuese për të shmangur takimin e dy zanoreve.`
      );
    }

    if (isFrontException(trimmed)) {
      changes.push(
        `Përjashtim: Fjala me origjinë të huaj '${trimmed}' merr prapashtesën e harmonisë së përparme '-e' ose '-ye'.`
      );
    } else {
      const vowelType = vowel === 'a' ? 'e prapme' : 'e përparme';
      changes.push(
        `Harmonia vokalore 2-she: Zanorja e fundit e rrënjës është '${lastVowel}' (${vowelType}), prandaj marrim zanoren e prapashtesës '${vowel}'.`
      );
    }

    const finalResult = trimmed + suffixWithApostrophe;
    changes.push(
      `Përfundimi: Bashkohet prapashtesa dhe fitohet forma dhanore '${finalResult}'.`
    );

    return {
      result: finalResult,
      suffixApplied: suffixWithApostrophe,
      changes
    };
  }
}
