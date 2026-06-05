import type { SuffixStrategy, SuffixResult } from './suffixStrategy';
import { getVowelHarmony2, getLastVowel, isFrontException } from '../vowelHarmony';

const VOICELESS_CONSONANTS = new Set(['f', 's', 't', 'k', 'ç', 'ş', 'h', 'p', 'F', 'S', 'T', 'K', 'Ç', 'Ş', 'H', 'P']);

/**
 * Ablative Strategy class applying "-dan" / "-den" / "-tan" / "-ten" suffixes
 * based on two-way vowel harmony, proper noun apostrophes, and consonant harmony.
 */
export class AblativeStrategy implements SuffixStrategy {
  apply(root: string): SuffixResult {
    const trimmed = root.trim();
    if (!trimmed) {
      return { result: '', suffixApplied: '', changes: [] };
    }

    // Strip out any trailing apostrophe if it was supplied in the root to avoid double apostrophe
    const cleanRoot = trimmed.endsWith("'") ? trimmed.slice(0, -1) : trimmed;
    const lastChar = cleanRoot[cleanRoot.length - 1];
    const isVoiceless = VOICELESS_CONSONANTS.has(lastChar);
    const vowel = getVowelHarmony2(cleanRoot);
    const isProper = /^[A-ZÇĞİÖŞÜ]/.test(cleanRoot);

    const consonant = isVoiceless ? 't' : 'd';
    const suffixApplied = consonant + vowel + 'n';
    const suffixWithApostrophe = (isProper ? "'" : "") + suffixApplied;
    
    const lastVowel = getLastVowel(cleanRoot);
    const changes: string[] = [];

    // Explanation details in Albanian
    changes.push(
      `Rasa Rrjedhore (Ayrılma Durumu): Prapashtesa tregon origjinën, pikënisjen ose krahasimin, dhe i përgjigjet pyetjeve 'Nereden?' (Nga ku?) ose 'Kimden?' (Nga kush?).`
    );

    if (isProper) {
      changes.push(
        `Emër i përveçëm (si qytet ose person): Rrënja fillon me shkronjë të madhe, prandaj shtohet apostrofi (') para prapashtesës.`
      );
    }

    if (isVoiceless) {
      changes.push(
        `Bashkëtingëllore e shurdhët (Fıstıkçı Şahap): Rrënja përfundon me shkronjën '${lastChar}' (e shurdhët), prandaj prapashtesa fillon me 't' në vend të 'd'.`
      );
    } else {
      changes.push(
        `Bashkëtingëllore e zëshme: Rrënja përfundon me shkronjën '${lastChar}' (e zëshme), prandaj prapashtesa fillon me 'd'.`
      );
    }

    if (isFrontException(cleanRoot)) {
      changes.push(
        `Përjashtim: Fjala me origjinë të huaj '${cleanRoot}' merr prapashtesën e harmonisë së përparme '-den' ose '-ten'.`
      );
    } else {
      const vowelType = vowel === 'a' ? 'e prapme' : 'e përparme';
      changes.push(
        `Harmonia vokalore 2-she: Zanorja e fundit e rrënjës është '${lastVowel}' (${vowelType}), prandaj marrim zanoren e prapashtesës '${vowel}'.`
      );
    }

    const finalResult = cleanRoot + suffixWithApostrophe;
    changes.push(
      `Përfundimi: Shtohet prapashtesa rrjedhore dhe fitohet forma '${finalResult}'.`
    );

    return {
      result: finalResult,
      suffixApplied: suffixWithApostrophe,
      changes
    };
  }
}
