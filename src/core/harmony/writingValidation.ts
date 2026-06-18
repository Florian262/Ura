import { getVowelHarmony2, getVowelHarmony4, getLastVowel } from './vowelHarmony';
import { analyzeWord, cleanTurkishWord } from './stemmer';
import type { WordAnalysis } from './stemmer';
import { WRITING_PROMPTS } from '../../infrastructure/db/writingPrompts';

export { WRITING_PROMPTS };

export interface EvaluationResult {
  status: 'success' | 'typo' | 'error';
  feedback: string;
  suggestions?: string[];
  matchedModelAnswer?: string;
}

export interface ValidationRule {
  type: 'required_keywords' | 'forbidden_pattern' | 'required_pattern' | 'origin_harmony' | 'reported_past_harmony' | 'conditional_harmony' | 'participle_harmony' | 'idiom_presence' | 'gittim_check' | 'okudum_check' | 'adverbial_ip_harmony' | 'since_harmony';
  keywords?: string[];
  regex?: string;
  feedback: string;
  idioms?: Array<{ name: string; keywords: string[] }>;
}

export interface WritingPrompt {
  chapterId: number;
  type: 'translation' | 'guided';
  promptAlbanian: string;
  grammarTipAlbanian: string;
  sampleAnswers?: string[];
  grammarLabel?: string;
  validationRules?: ValidationRule[];
}

function getStemBeforeSuffix(analysis: WordAnalysis, suffixIndex: number): string {
  let stem = cleanTurkishWord(analysis.entry.word);
  if (analysis.entry.pos === 'folje') {
    stem = stem.replace(/m[ae]k$/, '');
  }
  for (let j = 0; j < suffixIndex; j++) {
    stem += analysis.suffixes[j].suffix;
  }
  return stem;
}

// Computes the Levenshtein Distance between two strings
export function getLevenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= a.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= b.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1) // substitution
      );
    }
  }

  return matrix[a.length][b.length];
}

// Normalizes text for comparison (lowercasing, cleaning punctuation, removing double spaces)
export function normalizeText(text: string): string {
  return text
    .replace(/İ/g, 'i')
    .replace(/I/g, 'ı')
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, '') // remove punctuation
    .replace(/\s+/g, ' ') // collapse multiple spaces
    .trim();
}

// Checks if a verb base has vowel harmony violations.
// Verbs with progressive -iyor are allowed to mix, others are not.
export function isValidVerbBase(base: string): boolean {
  const clean = base.trim().toLowerCase();
  if (clean.includes('iyor') || clean.includes('uyor') || clean.includes('üyor') || clean.includes('ıyor')) {
    return true; // progressive tenses mix vowels (e.g. geliyor)
  }

  // Count front and back vowels
  const backCount = (clean.match(/[aıou]/g) || []).length;
  const frontCount = (clean.match(/[eiöü]/g) || []).length;

  // If it mixes both, it's invalid (unless it's a known loanword exception, but verb bases in these exercises aren't loanwords)
  if (backCount > 0 && frontCount > 0) {
    return false;
  }
  return true;
}

// Find if there is a word-level typo and return helpful correction feedback in Albanian
export function findTypoDetails(userInput: string, modelAnswer: string): string {
  const userWords = userInput.split(' ');
  const modelWords = modelAnswer.split(' ');
  
  const typoFeedbacks: string[] = [];

  for (let i = 0; i < modelWords.length; i++) {
    const targetWord = modelWords[i];
    // Check if the exact word exists in user's input
    if (!userWords.includes(targetWord)) {
      // Find the closest user word that isn't already a perfect match for something else
      let closestWord = '';
      let minDistance = 999;
      
      for (const userWord of userWords) {
        // If it's a close distance (1 or 2 edits)
        const dist = getLevenshteinDistance(userWord, targetWord);
        if (dist > 0 && dist <= 2 && dist < minDistance) {
          minDistance = dist;
          closestWord = userWord;
        }
      }

      if (closestWord) {
        typoFeedbacks.push(`Keni shkruar "${closestWord}", por fjala e saktë është "${targetWord}".`);
      }
    }
  }

  if (typoFeedbacks.length > 0) {
    return typoFeedbacks.join(' ');
  }

  return `Keni një gabim të vogël në gërmëzim krahasuar me fjalinë model: "${modelAnswer}".`;
}

// Helper to evaluate a single declarative validation rule
function runRule(rule: ValidationRule, normalizedInput: string): string | null {
  switch (rule.type) {
    case 'required_keywords': {
      if (!rule.keywords) return null;
      for (const kw of rule.keywords) {
        if (!normalizedInput.includes(kw)) {
          return rule.feedback;
        }
      }
      return null;
    }
    case 'required_pattern': {
      if (!rule.regex) return null;
      const re = new RegExp(rule.regex, 'i');
      if (!re.test(normalizedInput)) {
        return rule.feedback;
      }
      return null;
    }
    case 'forbidden_pattern': {
      if (!rule.regex) return null;
      const re = new RegExp(rule.regex, 'i');
      if (re.test(normalizedInput)) {
        return rule.feedback;
      }
      return null;
    }
    case 'origin_harmony': {
      const words = normalizedInput.split(' ');
      let originMatch = null;
      let cityRoot = '';
      let liSuffix = '';
      let yimSuffix = '';

      for (const w of words) {
        const match = w.match(/^([a-zçğışöü]+)(l[ıilu])(y[ıiu]m)$/);
        if (match) {
          originMatch = match;
          cityRoot = match[1];
          liSuffix = match[2];
          yimSuffix = match[3];
          break;
        }
      }

      if (!originMatch) {
        return rule.feedback;
      }

      // Check vowel harmony of the origin suffix
      const correctVowel = getVowelHarmony4(cityRoot);
      const expectedLi = `l${correctVowel}`;
      const expectedYim = `y${correctVowel}m`;

      if (liSuffix !== expectedLi || yimSuffix !== expectedYim) {
        return `Gabim Harmonie te origjina: Qyteti '${cityRoot}' ka zanoren e fundit '${getLastVowel(cityRoot)}', prandaj prapashtesat duhet të jenë '-${expectedLi}' dhe '-${expectedYim}' → '${cityRoot}${expectedLi}${expectedYim}' (ju keni shkruar '${cityRoot}${liSuffix}${yimSuffix}').`;
      }
      return null;
    }
    case 'reported_past_harmony': {
      const words = normalizedInput.split(' ');
      let foundAnalysis: WordAnalysis | null = null;
      let suffixIndex = -1;

      for (const w of words) {
        const analysis = analyzeWord(w);
        if (analysis) {
          const idx = analysis.suffixes.findIndex(s => s.type === 'tense' && /m[ıiuü]ş/i.test(s.suffix));
          if (idx !== -1) {
            foundAnalysis = analysis;
            suffixIndex = idx;
            break;
          }
        }
      }

      if (!foundAnalysis || suffixIndex === -1) {
        return rule.feedback;
      }

      const suffix = foundAnalysis.suffixes[suffixIndex];
      const stem = getStemBeforeSuffix(foundAnalysis, suffixIndex);

      if (!isValidVerbBase(stem)) {
        return `Gabim: Baza ose rrënja e foljes '${stem}' ka gabim të harmonisë vokalike (kombinim i pasaktë i zanoreve para prapashtesës).`;
      }

      const expectedVowel = getVowelHarmony4(stem);
      const expectedSuffix = `m${expectedVowel}ş`;

      if (suffix.suffix.toLowerCase() !== expectedSuffix) {
        return `Gabim Harmonie Vokalore: Rrënja e foljes '${stem}' ka zanoren e fundit '${getLastVowel(stem)}', prandaj prapashtesa e habitores duhet të jetë '-${expectedSuffix}' → '${stem}${expectedSuffix}' (ju keni shkruar '${stem}${suffix.suffix}').`;
      }
      return null;
    }
    case 'conditional_harmony': {
      const words = normalizedInput.split(' ');
      let foundAnalysis: WordAnalysis | null = null;
      let suffixIndex = -1;
      const hasVarYokCond = /\b(varsa|yoksa)\b/.test(normalizedInput);

      for (const w of words) {
        const analysis = analyzeWord(w);
        if (analysis) {
          const idx = analysis.suffixes.findIndex(s => s.type === 'conditional');
          if (idx !== -1) {
            foundAnalysis = analysis;
            suffixIndex = idx;
            break;
          }
        }
      }

      if (!foundAnalysis && !hasVarYokCond) {
        return rule.feedback;
      }

      if (foundAnalysis && !hasVarYokCond) {
        const suffix = foundAnalysis.suffixes[suffixIndex];
        const stem = getStemBeforeSuffix(foundAnalysis, suffixIndex);

        if (!isValidVerbBase(stem)) {
          return `Gabim: Baza e foljes '${stem}' ka gabim të harmonisë vokalike (kombinim i pasaktë i zanoreve para prapashtesës).`;
        }

        const expectedHarmony = getVowelHarmony2(stem);
        const expectedSuffixStart = `s${expectedHarmony}`;

        if (!suffix.suffix.toLowerCase().startsWith(expectedSuffixStart)) {
          return `Gabim Harmonie Vokalore: Rrënja/baza '${stem}' kërkon prapashtesën e kushtit që fillon me '-${expectedSuffixStart}' (2-she), por keni shkruar '-${suffix.suffix}' → '${stem}${expectedSuffixStart}...'.`;
        }
      }
      return null;
    }
    case 'participle_harmony': {
      const words = normalizedInput.split(' ');
      let foundAnalysis: WordAnalysis | null = null;
      let suffixIndex = -1;

      for (const w of words) {
        const analysis = analyzeWord(w);
        if (analysis) {
          const idx = analysis.suffixes.findIndex(s => s.type === 'participle');
          if (idx !== -1) {
            foundAnalysis = analysis;
            suffixIndex = idx;
            break;
          }
        }
      }

      if (!foundAnalysis || suffixIndex === -1) {
        return rule.feedback;
      }

      const suffix = foundAnalysis.suffixes[suffixIndex];
      const stem = getStemBeforeSuffix(foundAnalysis, suffixIndex);

      if (!isValidVerbBase(stem)) {
        return `Gabim: Rrënja e foljes '${stem}' ka gabim të harmonisë vokalike.`;
      }

      const isPassiveParticiple = /(?:dik|dık|duk|dük|tik|tık|tuk|tük|diğ|dığ|duğ|düğ|tiğ|tığ|tuğ|tüğ)$/i.test(suffix.suffix);

      if (isPassiveParticiple) {
        const expectedVowel = getVowelHarmony4(stem);
        const lastChar = stem.slice(-1);
        const isVoiceless = 'çfhkpsştÇFHKPSŞT'.includes(lastChar);
        const expectedD = isVoiceless ? 't' : 'd';
        const expectedSuffixStart = `${expectedD}${expectedVowel}`;
        
        if (!suffix.suffix.toLowerCase().startsWith(expectedSuffixStart)) {
          return `Gabim Harmonie/Mutacioni: Pjesorja pasive për '${stem}' kërkon prapashtesën që fillon me '${expectedSuffixStart}' (p.sh., '${stem}${expectedSuffixStart}ğ...'), por ju shkruat '${stem}${suffix.suffix}'.`;
        }
      } else {
        const expected = getVowelHarmony2(stem);
        const lastChar = stem.slice(-1);
        const endsWithVowel = new Set(['a', 'ı', 'o', 'u', 'e', 'i', 'ö', 'ü']).has(lastChar);
        const finalExpectedSuffix = endsWithVowel ? `y${expected}n` : `${expected}n`;

        if (suffix.suffix.toLowerCase() !== finalExpectedSuffix) {
          return `Gabim Harmonie te pjesorja: Rrënja '${stem}' duhet të ketë prapashtesën '-${finalExpectedSuffix}' → '${stem}${finalExpectedSuffix}' (ju shkruat '${stem}${suffix.suffix}').`;
        }
      }
      return null;
    }
    case 'idiom_presence': {
      if (!rule.idioms) return null;
      let foundIdiom = '';
      for (const idm of rule.idioms) {
        const matchAll = idm.keywords.every(kw => normalizedInput.includes(kw));
        if (matchAll) {
          foundIdiom = idm.name;
          break;
        }
      }
      if (!foundIdiom) {
        return rule.feedback;
      }
      return null;
    }
    case 'gittim_check': {
      const hasGittim = /git(ti|tı|tü|tu)[mndk]?/.test(normalizedInput);
      if (hasGittim) {
        const match = normalizedInput.match(/git(ti|tı|tü|tu)([mndk]?)/);
        if (match && match[2] !== 'm') {
          return `Keni shkruar foljen 'gitmek' në vetën e gabuar. Për 'shkova' duhet veta e parë njëjës: 'gittim' (jo 'gitti' apo 'gittin').`;
        } else if (match && match[1] !== 'ti') {
          return "Gabim Harmonie: Zgjedhimi i shkuar i 'gitmek' duhet të jetë 'gittim' (jo 'gittım' ose 'gittum').";
        }
      } else if (normalizedInput.includes('gitmek') || normalizedInput.includes('git')) {
        return "Folja 'gitmek' duhet të zgjedhohet në kohën e shkuar vetanake: 'gittim'.";
      } else {
        return "Mungon folja 'shkova' (gittim) në fjali.";
      }
      return null;
    }
    case 'okudum_check': {
      const hasOkudum = /oku(du|dı|di|dü)[mndk]?/.test(normalizedInput);
      if (hasOkudum) {
        const match = normalizedInput.match(/oku(du|dı|di|dü)([mndk]?)/);
        if (match && match[2] !== 'm') {
          return `Keni shkruar foljen 'okumak' në vetën e gabuar. Për 'lexova' duhet 'okudum'.`;
        } else if (match && match[1] !== 'du') {
          return "Gabim Harmonie: Zgjedhimi i shkuar i 'okumak' është 'okudum' (pas zanores 'u' vjen 'u', jo 'okudim' apo 'okudım').";
        }
      } else if (normalizedInput.includes('okumak') || normalizedInput.includes('oku')) {
        return "Folja 'okumak' duhet të zgjedhohet në kohën e shkuar: 'okudum'.";
      } else {
        return "Mungon folja 'lexova' (okudum) në fjali.";
      }
      return null;
    }
    case 'adverbial_ip_harmony': {
      const words = normalizedInput.split(' ');
      let ipMatch = null;
      let verbRoot = '';
      let ipSuffix = '';

      for (const w of words) {
        const match = w.match(/^([a-zçğışöü]+)(yıp|yip|yup|yüp|ıp|ip|up|üp)$/);
        if (match) {
          ipMatch = match;
          verbRoot = match[1];
          ipSuffix = match[2];
          break;
        }
      }

      if (!ipMatch) {
        return rule.feedback;
      }

      if (verbRoot === 'git' || verbRoot === 'et') {
        const voicedRoot = verbRoot === 'git' ? 'gid' : 'ed';
        return `Gabim Zbutjeje: Bashkëtingëllorja 't' e foljes '${verbRoot}' duhet të zbutet në 'd' sepse pasohet nga një zanore → '${voicedRoot}${ipSuffix}' (jo '${verbRoot}${ipSuffix}').`;
      }

      if (!isValidVerbBase(verbRoot)) {
        return `Gabim: Rrënja e foljes '${verbRoot}' ka gabim të harmonisë vokalike.`;
      }

      const lastChar = verbRoot.slice(-1);
      const endsWithVowel = new Set(['a', 'ı', 'o', 'u', 'e', 'i', 'ö', 'ü']).has(lastChar);
      const expectedVowel = getVowelHarmony4(verbRoot);
      const expectedSuffix = endsWithVowel ? `y${expectedVowel}p` : `${expectedVowel}p`;

      if (ipSuffix !== expectedSuffix) {
        return `Gabim Harmonie: Rrënja '${verbRoot}' kërkon prapashtesën '-${expectedSuffix}', por ju keni shkruar '-${ipSuffix}' → '${verbRoot}${expectedSuffix}' (jo '${verbRoot}${ipSuffix}').`;
      }
      return null;
    }
    case 'since_harmony': {
      const words = normalizedInput.split(' ');
      const beriIndex = words.indexOf('beri');
      if (beriIndex <= 0) {
        return null;
      }

      const precedingWord = words[beriIndex - 1];
      const analysis = analyzeWord(precedingWord);
      if (!analysis) {
        return null;
      }

      const participleSuffix = analysis.suffixes.find(s => s.type === 'participle' && /(?:dik|dık|duk|dük|tiğ|tığ|tuğ|tüğ|diğ|dığ|duğ|düğ)$/i.test(s.suffix));
      const caseSuffix = analysis.suffixes.find(s => s.type === 'case' && /dan|den/i.test(s.suffix));

      if (!participleSuffix || !caseSuffix) {
        return null;
      }

      const participleSuffixIndex = analysis.suffixes.indexOf(participleSuffix);
      const stem = getStemBeforeSuffix(analysis, participleSuffixIndex);

      if (!isValidVerbBase(stem)) {
        return `Gabim: Rrënja e foljes '${stem}' ka gabim të harmonisë vokalike.`;
      }

      const lastChar = stem.slice(-1);
      const isVoiceless = 'çfhkpsştÇFHKPSŞT'.includes(lastChar);
      const expectedDt = isVoiceless ? 't' : 'd';
      const actualDt = participleSuffix.suffix.charAt(0).toLowerCase();
      if (actualDt !== expectedDt) {
        return `Gabim Mutacioni: Rrënja '${stem}' përfundon me bashkëtingëllore ${isVoiceless ? 'të shurdhët' : 'të zëshme'}, prandaj prapashtesa duhet të fillojë me '${expectedDt}' (jo '${actualDt}').`;
      }

      const expectedVowel = getVowelHarmony4(stem);
      if (!participleSuffix.suffix.toLowerCase().includes(expectedVowel)) {
        return `Gabim Harmonie Vokalore: Rrënja '${stem}' kërkon zanoren e harmonizuar 4-she '${expectedVowel}' te prapashtesa.`;
      }

      const possessiveSuffix = analysis.suffixes.find(s => s.type === 'possessive');
      if (possessiveSuffix && /[aıoueiöü]/i.test(possessiveSuffix.suffix) && !possessiveSuffix.suffix.toLowerCase().includes(expectedVowel)) {
        return `Gabim Harmonie Vokalore: Rrënja '${stem}' kërkon zanoren e harmonizuar 4-she '${expectedVowel}' te prapashtesa.`;
      }

      const expectedV2 = getVowelHarmony2(stem);
      const expectedDanden = expectedV2 === 'a' ? 'dan' : 'den';
      if (caseSuffix.suffix.toLowerCase() !== expectedDanden) {
        return `Gabim Harmonie Vokalore: Rasa rrjedhore pas '${precedingWord.slice(0, -caseSuffix.suffix.length)}' duhet të jetë '-${expectedDanden}' (jo '-${caseSuffix.suffix}').`;
      }

      return null;
    }
    default:
      return null;
  }
}

// Evaluates a Turkish writing input offline using a generic validation rule engine
export function evaluateWriting(chapterId: number, input: string): EvaluationResult {
  const prompt = WRITING_PROMPTS[chapterId];
  if (!prompt) {
    return { status: 'error', feedback: 'Gabim: Ky kapitull nuk ka një detyrë shkrimi të konfiguruar.' };
  }

  const cleanInput = input.trim();
  const b2Chapters = [25, 26];
  const b1Chapters = [17, 18, 19, 20, 21, 22, 23, 24];
  const minLength = b2Chapters.includes(chapterId)
    ? 120
    : b1Chapters.includes(chapterId)
      ? 60
      : 10;
  if (cleanInput.length < minLength) {
    return { 
      status: 'error', 
      feedback: `Teksti juaj është shumë i shkurtër. Ju lutemi shkruani të paktën ${minLength} karaktere për të lejuar kontrollin.` 
    };
  }

  const normalizedInput = normalizeText(cleanInput);

  // 1. Run the declarative validation rules if they exist
  if (prompt.validationRules && prompt.validationRules.length > 0) {
    const errors: string[] = [];
    for (const rule of prompt.validationRules) {
      const error = runRule(rule, normalizedInput);
      if (error) {
        errors.push(error);
      }
    }
    if (errors.length > 0) {
      return {
        status: 'error',
        feedback: `${prompt.type === 'translation' ? 'Përkthimi ka probleme gramatikore. Ju lutemi rregulloni:' : 'Prezantimi ka disa gabime gramatikore:'}\n${errors.map(e => `• ${e}`).join('\n')}`,
        suggestions: prompt.sampleAnswers
      };
    }
  }

  // 2. Perform fuzzy string matching for translation types
  if (prompt.type === 'translation' && prompt.sampleAnswers) {
    let bestMatchAnswer = '';
    let minDistance = 999;

    for (const sample of prompt.sampleAnswers) {
      const normalizedSample = normalizeText(sample);
      const dist = getLevenshteinDistance(normalizedInput, normalizedSample);
      if (dist < minDistance) {
        minDistance = dist;
        bestMatchAnswer = sample;
      }
    }

    // Perfect Match
    if (minDistance === 0) {
      return {
        status: 'success',
        feedback: 'Urime! Përkthimi juaj është krejtësisht i saktë dhe i përputhur me modelin.',
        matchedModelAnswer: bestMatchAnswer
      };
    }

    // Small Typo Match (Allow up to 3 edits depending on length)
    const allowedEdits = Math.min(3, Math.floor(bestMatchAnswer.length * 0.15) + 1);
    if (minDistance <= allowedEdits) {
      const typoExplanation = findTypoDetails(normalizedInput, normalizeText(bestMatchAnswer));
      return {
        status: 'typo',
        feedback: `Përkthimi është i kuptueshëm, por përmban gabime të vogla gërmëzimi (typos). ${typoExplanation}`,
        suggestions: [bestMatchAnswer],
        matchedModelAnswer: bestMatchAnswer
      };
    }

    // General Fallback for Translation failures
    return {
      status: 'error',
      feedback: 'Përkthimi juaj ndryshon dukshëm nga fjalitë model. Sigurohuni që keni përdorur fjalët dhe gramatikën e saktë sipas udhëzimeve.',
      suggestions: prompt.sampleAnswers
    };
  }

  // 3. For guided types (which passed validationRules), return success feedback depending on chapter or generic
  let successFeedback = 'Shkëlqyeshëm! Detyra e shkrimit u përfundua me sukses.';
  if (chapterId === 1) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar një përshëndetje të saktë, keni prezantuar emrin tuaj dhe keni vendosur prapashtesat e duhura të harmonizuara për origjinën.';
  } else if (chapterId === 9) {
    successFeedback = 'Shkëlqyeshëm! Keni përshkruar fundjavën tuaj duke përdorur saktë kohën e shkuar të drejtpërdrejtë dhe treguesit kohorë.';
  } else if (chapterId === 10) {
    successFeedback = 'Shkëlqyeshëm! Keni përshkruar saktë planet tuaja të së ardhshmes duke përdorur kohën e ardhshme dhe harmonizuar prapashtesat.';
  } else if (chapterId === 11) {
    successFeedback = 'Shkëlqyeshëm! Keni përshkruar saktë rutinën tuaj të përditshme duke përdorur kohën e gjerë dhe treguesit e frekuencës.';
  } else if (chapterId === 12) {
    successFeedback = 'Shkëlqyeshëm! Keni përshkruar saktë aftësitë tuaja duke përdorur foljen e mundësisë (Yeterlilik Fiili) në trajtën e duhur.';
  } else if (chapterId === 13) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar saktë për detyrimet ose nevojat tuaja duke përdorur mënyrën detyrore (Gereklilik Kipi) ose strukturat e nevojës.';
  } else if (chapterId === 14) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar saktë krahasimin duke përdorur fjalën \'daha\' dhe rasën rrjedhore (-dan/-den).';
  } else if (chapterId === 15) {
    successFeedback = 'Shkëlqyeshëm! Keni përshkruar saktë fëmijërinë dhe zakonet tuaja të kaluara duke përdorur kohën e shkuar të vazhdueshme.';
  } else if (chapterId === 16) {
    successFeedback = 'Shkëlqyeshëm! Keni përshkruar saktë veprimet dhe arsyet e ditës suaj duke përdorur saktë lidhëzat dhe zarf-foljet.';
  } else if (chapterId === 0) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar saktë përshëndetjen tuaj të parë në turqisht duke përdorur shkronjat dhe shqiptimin e duhur.';
  } else if (chapterId === 17) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar një paragraf duke përdorur saktë kohën e shkuar të vazhdueshme ose zarf-foljen \'-ken\' dhe lidhëzat përkatëse.';
  } else if (chapterId === 18) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar një përshkrim të saktë duke përdorur foljet reciproke në formën e duhur.';
  } else if (chapterId === 19) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar një paragraf të saktë duke përdorur strukturën kushtore ose dëshirore për të përshkruar rëndësinë e edukimit.';
  } else if (chapterId === 20) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar një paragraf të saktë duke përdorur prapashtesat e detyrimit dhe kohëzgjatjes për të përshkruar shtëpinë ose mësimin e gjuhës.';
  } else if (chapterId === 21) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar një paragraf të saktë duke përdorur përemrin ose foljen vetvetore dhe strukturat e detyrimit për të përshkruar qëllimet tuaja.';
  } else if (chapterId === 22) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar një paragraf të saktë duke përdorur foljet pasive në kohën e duhur.';
  } else if (chapterId === 23) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar një paragraf të saktë duke përdorur pjesoret relative (sıfat-fiil) në formën duhur.';
  } else if (chapterId === 24) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar një autobiografi ose përmbledhje të saktë duke kombinuar pjesoret relative dhe strukturat e tjera të nivelit B1.';
  } else if (chapterId === 25) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar një përshkrim të saktë të udhëtimit duke përdorur foljet vetvetore ose reciproke dhe lidhëzat shtuese.';
  } else if (chapterId === 26) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar një tekst të saktë rreth mjedisit duke përdorur nominalizimin me \'-DIK\' dhe fjalët kyçe përkatëse.';
  } else if (chapterId === 27) {
    successFeedback = 'Shkëlqyeshëm! Keni përdorur me sukses idiomën e kërkuar në fjalinë tuaj.';
  }

  return {
    status: 'success',
    feedback: successFeedback
  };
}
