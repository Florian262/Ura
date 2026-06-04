import { getVowelHarmony2, getVowelHarmony4, getLastVowel } from './vowelHarmony';

export interface EvaluationResult {
  status: 'success' | 'typo' | 'error';
  feedback: string;
  suggestions?: string[];
  matchedModelAnswer?: string;
}

export interface WritingPrompt {
  chapterId: number;
  type: 'translation' | 'guided';
  promptAlbanian: string;
  grammarTipAlbanian: string;
  sampleAnswers?: string[];
  grammarLabel?: string;
}

// Prompt Configurations for all 7 chapters
export const WRITING_PROMPTS: Record<number, WritingPrompt> = {
  1: {
    chapterId: 1,
    type: 'guided', // Chapter 1 uses guided to allow names and various cities
    promptAlbanian: "Shkruani një përshëndetje dhe prezantim të thjeshtë në turqisht (p.sh. përshëndetni, tregoni emrin tuaj dhe nga cili qytet jeni, ashtu si Ahmeti dhe Valbona në dialog).",
    grammarTipAlbanian: "Rrjeti i fjalive duhet të përmbajë: një përshëndetje ('Merhaba' ose 'Selam'), strukturën e emrit ('Benim adım...' ose 'İsmim...'), dhe prapashtesën e prejardhjes/kombësisë '-lı/-li/-lu/-lü' + '-yım/-yim/-yum/-yüm' të bashkangjitur me emrin e qytetit tuaj (p.sh., Tiran + lı + yım = Tiranlıyım).",
    sampleAnswers: [
      "Merhaba! Benim adım Valbona. Tiranlıyım.",
      "Merhaba! Benim adım Ahmet. İstanbulluyum.",
      "Merhaba, benim adım Leyla. Kosovalıyım."
    ],
    grammarLabel: "Prezantimi & Origjina (-lı/yim)"
  },
  2: {
    chapterId: 2,
    type: 'translation',
    promptAlbanian: "Përktheni fjalinë në turqisht: 'Libri është në tavolinë, fletorja është në çantë.'",
    grammarTipAlbanian: "Përdorni emrat 'kitap' (libër) dhe 'defter' (fletore). Për vendndodhjen 'në tavolinë' dhe 'në çantë', shtoni prapashtesën e rasës vendore '-da/-de' pas fjalëve 'masa' (tavolinë) dhe 'çanta' (çantë). Kujdes: masa + da = masada, çanta + da = çantada.",
    sampleAnswers: [
      "Kitap masada, defter çantada.",
      "Kitap masada ve defter çantada.",
      "Kitap masada, defter ise çantada.",
      "Kitap masadadır, defter çantadadır."
    ],
    grammarLabel: "Rasa Vendore (-da/-de)"
  },
  3: {
    chapterId: 3,
    type: 'translation',
    promptAlbanian: "Përktheni fjalinë në turqisht: 'Dje shkova në shkollë dhe lexova një libër.'",
    grammarTipAlbanian: "Përdorni treguesin e kohës 'dün' (dje). Folja 'shkova' përkthehet si 'gittim' (nga gitmek, me prapashtesën e kohës së shkuar -di dhe vetës së parë -m) dhe kërkon drejtimin '-e/-a' te vendi (okula gittim). Folja 'lexova' përkthehet si 'okudum' (okumak + du + m).",
    sampleAnswers: [
      "Dün okula gittim ve bir kitap okudum.",
      "Dün okula gittim ve kitap okudum.",
      "Dün okula gidip bir kitap okudum.",
      "Dün okuluma gittim ve bir kitap okudum."
    ],
    grammarLabel: "Koha e Shkuar (-dı) & Drejtimi (-a)"
  },
  4: {
    chapterId: 4,
    type: 'guided',
    promptAlbanian: "Shkruani një fjali në turqisht duke përdorur kohën e shkuar të pacaktuar (Mënyra Habitore '-miş / -mış / -muş / -müş') për të treguar një ngjarje që e keni dëgjuar nga të tjerët ose e keni kuptuar më vonë.",
    grammarTipAlbanian: "Prapashtesa e habitores është '-miş/-mış/-muş/-müş' dhe vendoset pas rrënjës së foljes sipas harmonisë vokalore 4-she (p.sh., gel -> gelmiş, yaz -> yazmış, oku -> okumuş, gör -> görmüş). Ju mund të shtoni edhe prapashtesa të vetës (p.sh., gelmişim, gitmişsin).",
    sampleAnswers: [
      "Dün Ankara'ya kar yağmış.",
      "Ahmet dün sinemaya gitmiş.",
      "O kitabı çok beğenmişsin."
    ],
    grammarLabel: "Mënyra Habitore (-miş)"
  },
  5: {
    chapterId: 5,
    type: 'guided',
    promptAlbanian: "Shkruani një fjali kushtore në turqisht duke përdorur prapashtesën e kushtit '-se / -sa' (p.sh., 'nëse shkon...', 'nëse bie shi...', 'nëse ka...').",
    grammarTipAlbanian: "Prapashtesa e kushtit është '-se/-sa' dhe ndjek harmoninë vokalore 2-she. Ajo mund të ngjitet pas një rrënje foljore (p.sh., gelse, yazsa) ose pas një kohe tjetër (p.sh., yağ-ar-sa -> nëse bie shi, git-er-se-m -> nëse unë shkoj). Mund ta përdorni edhe me 'var/yok' (p.sh., varsa -> nëse ka).",
    sampleAnswers: [
      "Eğer vaktim olursa geleceğim.",
      "Yağmur yağarsa evde kalacağız.",
      "Paran varsa bunu alabilirsin."
    ],
    grammarLabel: "Mënyra Kushtore (-se/-sa)"
  },
  6: {
    chapterId: 6,
    type: 'guided',
    promptAlbanian: "Shkruani një fjali në turqisht duke përdorur një pjesore (sıfat-fiil) aktive me '-an / -en' (p.sh., 'njeriu që vjen') ose pasive me '-dık / -dik' + përemër pronor (p.sh., 'libri që kam lexuar').",
    grammarTipAlbanian: "Pjesorja aktive formohet me rrënjën e foljes + '-an/-en' (p.sh., gelen adam -> njeriu që vjen/erdhi). Pjesorja pasive/përcaktuese formohet me rrënjën + '-dık/-dik/-duk/-dük' + prapashtesën pronore (p.sh., okuduğum kitap -> libri që lexoj/kam lexuar, dëgjoni ndryshimin e k/ğ te 'okuduğum').",
    sampleAnswers: [
      "Dün gelen misafirleri gördün mü?",
      "En sevdiğim yemek köftedir.",
      "Yazdığın mektubu okudum."
    ],
    grammarLabel: "Pjesoret (Sıfat-Fiiller)"
  },
  7: {
    chapterId: 7,
    type: 'guided',
    promptAlbanian: "Shkruani një fjali në turqisht që përdor një idiomë turke (deyim) të cilën e ndajmë në kuptim ose strukturë edhe me gjuhën shqipe (p.sh., 'gözden düşmek', 'can atmak', 'kulak asmak', ose 'kafayı takmak').",
    grammarTipAlbanian: "Përdorimi i një idiome të përbashkët Ballkanike. Shembuj: 'Gözden düşmek' (të biesh nga sytë), 'Can atmak' (të dëshirosh me shpirt), 'Kulak asmak' (të vësh veshin/të dëgjosh), ose 'Kafayı takmak' (të fiksohesh pas diçkaje). Sigurohuni që idiomën ta integroni në një fjali të plotë.",
    sampleAnswers: [
      "O yaptığı hata yüzünden gözden düştü.",
      "Tatile gitmek için can atıyorum.",
      "Bu küçük soruna kafayı takma."
    ],
    grammarLabel: "Idiomat e Përbashkëta (Deyimler)"
  }
};

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

// Evaluates a Turkish writing input offline using Method 2 and Method 3
export function evaluateWriting(chapterId: number, input: string): EvaluationResult {
  const prompt = WRITING_PROMPTS[chapterId];
  if (!prompt) {
    return { status: 'error', feedback: 'Gabim: Ky kapitull nuk ka një detyrë shkrimi të konfiguruar.' };
  }

  const cleanInput = input.trim();
  if (cleanInput.length < 10) {
    return { 
      status: 'error', 
      feedback: 'Teksti juaj është shumë i shkurtër. Ju lutemi shkruani të paktën 10 karaktere për të lejuar kontrollin.' 
    };
  }

  const normalizedInput = normalizeText(cleanInput);

  // ==========================================
  // TYPE A: TRANSLATION CHECKS (Method 2)
  // ==========================================
  if (prompt.type === 'translation' && prompt.sampleAnswers) {
    // 1. Run specific grammatical checks FIRST so that conjugation/vowel harmony errors are marked as 'error' instead of 'typo'
    if (chapterId === 2) {
      const hasKitap = /kitap/.test(normalizedInput);
      const hasDefter = /defter/.test(normalizedInput);
      const hasMasada = /masad[ae]/.test(normalizedInput);
      const hasCantada = /[çc]antad[ae]/.test(normalizedInput);

      const errors: string[] = [];
      if (!hasKitap) errors.push("Mungon fjala 'kitap' (libër).");
      if (!hasDefter) errors.push("Mungon fjala 'defter' (fletore).");
      
      if (/masade/.test(normalizedInput)) {
        errors.push("Gabim Harmonie Vokalore: Fjala 'masa' ka zanore të prapme (a), prandaj prapashtesa duhet të jetë '-da' (masada, jo 'masade').");
      } else if (!hasMasada) {
        errors.push("Mungon rasa vendore për tavolinën ('masada').");
      }

      if (/çantade/.test(normalizedInput)) {
        errors.push("Gabim Harmonie Vokalore: Fjala 'çanta' ka zanore të prapme (a), prandaj prapashtesa duhet të jetë '-da' (çantada, jo 'çantade').");
      } else if (!hasCantada) {
        errors.push("Mungon rasa vendore për çantën ('çantada').");
      }

      if (errors.length > 0) {
        return {
          status: 'error',
          feedback: `Përkthimi nuk është i saktë. Korrigjoni pikat e mëposhtme:\n${errors.map(e => `• ${e}`).join('\n')}`,
          suggestions: prompt.sampleAnswers
        };
      }
    }

    if (chapterId === 3) {
      const hasDun = /dün/.test(normalizedInput);
      const hasOkula = /okul[ae]/.test(normalizedInput);
      const hasGittim = /git(ti|tı|tü|tu)[mndk]?/.test(normalizedInput);
      const hasOkudum = /oku(du|dı|di|dü)[mndk]?/.test(normalizedInput);

      const errors: string[] = [];
      if (!hasDun) errors.push("Mungon treguesi i kohës së shkuar 'dün' (dje).");
      
      if (normalizedInput.includes('okule')) {
        errors.push("Gabim Harmonie: Fjala 'okul' ka zanoren e prapme 'u', prandaj drejtimi duhet të jetë '-a' (okula, jo 'okule').");
      } else if (!hasOkula) {
        errors.push("Mungon rasa e drejtimit për shkollën. Folja 'gitmek' kërkon prapashtesën '-a' (okula gittim).");
      }

      if (hasGittim) {
        const match = normalizedInput.match(/git(ti|tı|tü|tu)([mndk]?)/);
        if (match && match[2] !== 'm') {
          errors.push(`Keni shkruar foljen 'gitmek' në vetën e gabuar. Për 'shkova' duhet veta e parë njëjës: 'gittim' (jo 'gitti' apo 'gittin').`);
        } else if (match && match[1] !== 'ti') {
          errors.push("Gabim Harmonie: Zgjedhimi i shkuar i 'gitmek' duhet të jetë 'gittim' (jo 'gittım' ose 'gittum').");
        }
      } else if (normalizedInput.includes('gitmek') || normalizedInput.includes('git')) {
        errors.push("Folja 'gitmek' duhet të zgjedhohet në kohën e shkuar vetanake: 'gittim'.");
      } else {
        errors.push("Mungon folja 'shkova' (gittim) në fjali.");
      }

      if (hasOkudum) {
        const match = normalizedInput.match(/oku(du|dı|di|dü)([mndk]?)/);
        if (match && match[2] !== 'm') {
          errors.push(`Keni shkruar foljen 'okumak' në vetën e gabuar. Për 'lexova' duhet 'okudum'.`);
        } else if (match && match[1] !== 'du') {
          errors.push("Gabim Harmonie: Zgjedhimi i shkuar i 'okumak' është 'okudum' (pas zanores 'u' vjen 'u', jo 'okudim' apo 'okudım').");
        }
      } else if (normalizedInput.includes('okumak') || normalizedInput.includes('oku')) {
        errors.push("Folja 'okumak' duhet të zgjedhohet në kohën e shkuar: 'okudum'.");
      } else {
        errors.push("Mungon folja 'lexova' (okudum) në fjali.");
      }

      if (errors.length > 0) {
        return {
          status: 'error',
          feedback: `Përkthimi ka probleme gramatikore. Ju lutemi rregulloni:\n${errors.map(e => `• ${e}`).join('\n')}`,
          suggestions: prompt.sampleAnswers
        };
      }
    }

    // 2. Perform fuzzy string matching using Levenshtein distance
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

  // ==========================================
  // TYPE B: GUIDED FREE WRITING (Method 3)
  // ==========================================
  
  // Chapter 1: Introduction Check (Greeting, name, origin)
  if (chapterId === 1) {
    const hasGreeting = /merhaba|selam|iyi günler|iyi akşamlar|günaydın/.test(normalizedInput);
    const hasNameStructure = /adım|ismim|adımın|ben\s+[a-zA-ZçğışöüÇĞİŞÖÜ]+(y[ıi])?m/.test(normalizedInput);
    
    // Origin suffix check e.g. Tiranlıyım, Kosovalıyım, İstanbulluyum
    // Suffix: -lı/-li/-lu/-lü + -yım/-yim/-yum/-yüm
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

    const errors: string[] = [];
    if (!hasGreeting) {
      errors.push("Mungon përshëndetja në fillim të fjalisë (p.sh., 'Merhaba' ose 'Selam').");
    }
    if (!hasNameStructure) {
      errors.push("Mungon struktura e prezantimit të emrit tuaj (p.sh., 'Benim adım ...' ose 'İsmim ...').");
    }

    if (!originMatch) {
      errors.push("Mungon prapashtesa e origjinës ose kombësisë (p.sh., 'Tiranlıyım' ose 'Kosovalıyım'). Sigurohuni që keni shkruar emrin e vendit, të ndjekur nga '-lı/-li/-lu/-lü' dhe prapashtesa vetanake '-yım/-yim/-yum/-yüm'.");
    } else {
      // Check vowel harmony of the origin suffix
      const correctVowel = getVowelHarmony4(cityRoot);
      const expectedLi = `l${correctVowel}`;
      const expectedYim = `y${correctVowel}m`;

      if (liSuffix !== expectedLi || yimSuffix !== expectedYim) {
        errors.push(`Gabim Harmonie te origjina: Qyteti '${cityRoot}' ka zanoren e fundit '${getLastVowel(cityRoot)}', prandaj prapashtesat duhet të jenë '-${expectedLi}' dhe '-${expectedYim}' $\\rightarrow$ '${cityRoot}${expectedLi}${expectedYim}' (ju keni shkruar '${cityRoot}${liSuffix}${yimSuffix}').`);
      }
    }

    if (errors.length > 0) {
      return {
        status: 'error',
        feedback: `Prezantimi ka disa gabime gramatikore:\n${errors.map(e => `• ${e}`).join('\n')}`
      };
    }

    return {
      status: 'success',
      feedback: 'Shkëlqyeshëm! Keni shkruar një përshëndetje të saktë, keni prezantuar emrin tuaj dhe keni vendosur prapashtesat e duhura të harmonizuara për origjinën.'
    };
  }

  // Chapter 4: Reported Past Tense (-miş)
  if (chapterId === 4) {
    const words = normalizedInput.split(' ');
    let habitoreMatch = null;
    let verbRoot = '';
    let misSuffix = '';

    for (const w of words) {
      const match = w.match(/^([a-zçğışöü]+)(miş|mış|muş|müş)(im|sin|miş|ik|iniz|ler)?$/);
      if (match) {
        habitoreMatch = match;
        verbRoot = match[1];
        misSuffix = match[2];
        break;
      }
    }

    if (!habitoreMatch) {
      return {
        status: 'error',
        feedback: "Gabim: Nuk u gjet asnjë folje e zgjedhuar në Mënyrën Habitore. Duhet të përdorni prapashtesën '-miş/-mış/-muş/-müş' pas rrënjës së foljes (p.sh., 'gitmiş', 'gelmiş', 'yağmış')."
      };
    }

    // Check base harmony
    if (!isValidVerbBase(verbRoot)) {
      return {
        status: 'error',
        feedback: `Gabim: Baza ose rrënja e foljes '${verbRoot}' ka gabim të harmonisë vokalike (kombinim i pasaktë i zanoreve para prapashtesës).`
      };
    }

    const expectedVowel = getVowelHarmony4(verbRoot);
    const expectedSuffix = `m${expectedVowel}ş`;

    if (misSuffix !== expectedSuffix) {
      return {
        status: 'error',
        feedback: `Gabim Harmonie Vokalore: Rrënja e foljes '${verbRoot}' ka zanoren e fundit '${getLastVowel(verbRoot)}', prandaj prapashtesa e habitores duhet të jetë '-${expectedSuffix}' $\\rightarrow$ '${verbRoot}${expectedSuffix}' (ju keni shkruar '${verbRoot}${misSuffix}').`
      };
    }

    return {
      status: 'success',
      feedback: `Shkëlqyeshëm! Keni përdorur saktë Mënyrën Habitore me foljen '${verbRoot}${misSuffix}' duke respektuar rregullat e harmonisë vokalike 4-she.`
    };
  }

  // Chapter 5: Conditional Suffix (-se / -sa)
  if (chapterId === 5) {
    const words = normalizedInput.split(' ');
    let condMatch = null;
    let base = '';
    let suffix = '';
    const hasVarYokCond = /\b(varsa|yoksa)\b/.test(normalizedInput);

    for (const w of words) {
      const match = w.match(/^([a-zçğışöü]+)(se|sa)(m|n|k|niz|ler)?$/);
      if (match) {
        condMatch = match;
        base = match[1];
        suffix = match[2];
        break;
      }
    }

    if (!condMatch && !hasVarYokCond) {
      return {
        status: 'error',
        feedback: "Gabim: Nuk u gjet asnjë strukturë kushtore në fjali. Duhet të përdorni prapashtesën e kushtit '-se/-sa' (p.sh., 'gidersen', 'yağarsa', 'varsa')."
      };
    }

    if (condMatch && !hasVarYokCond) {
      // Check base harmony
      if (!isValidVerbBase(base)) {
        return {
          status: 'error',
          feedback: `Gabim: Baza e foljes '${base}' ka gabim të harmonisë vokalike (kombinim i pasaktë i zanoreve para prapashtesës).`
        };
      }

      const expectedHarmony = getVowelHarmony2(base);
      const expectedSuffix = `s${expectedHarmony}`;

      if (suffix !== expectedSuffix) {
        return {
          status: 'error',
          feedback: `Gabim Harmonie Vokalore: Rrënja/baza '${base}' kërkon prapashtesën e kushtit '-${expectedSuffix}' (2-she), por keni shkruar '-${suffix}' $\\rightarrow$ '${base}${expectedSuffix}' (jo '${base}${suffix}').`
        };
      }
    }

    return {
      status: 'success',
      feedback: 'Shkëlqyeshëm! Fjali kushtore e saktë me përdorim të rregullt të prapashtesës së kushtit (-se/-sa).'
    };
  }

  // Chapter 6: Participles (Sıfat-Fiiller)
  if (chapterId === 6) {
    const words = normalizedInput.split(' ');
    let activeMatch = null;
    let passiveMatch = null;

    for (const w of words) {
      const matchA = w.match(/^([a-zçğışöü]+)(en|an)$/);
      if (matchA) {
        const root = matchA[1];
        if (root.length >= 2 && !['b', 's', 'o'].includes(root)) {
          activeMatch = matchA;
          break;
        }
      }
      const matchP = w.match(/^([a-zçğışöü]+)(diğ|dığ|duğ|düğ|dik|dık|duk|dük)(i|im|in|imiz|iniz|i|leri)?$/);
      if (matchP) {
        passiveMatch = matchP;
        break;
      }
    }

    if (!activeMatch && !passiveMatch) {
      return {
        status: 'error',
        feedback: "Gabim: Nuk u gjet asnjë pjesore (sıfat-fiil) në fjali. Përdorni një folje me prapashtesën '-an/-en' (p.sh., 'gelen adam') ose '-dık/-dik' me prapashtesë pronore (p.sh., 'sevdiğim yemek')."
      };
    }

    if (activeMatch) {
      const root = activeMatch[1];
      const suffix = activeMatch[2];
      
      if (!isValidVerbBase(root)) {
        return {
          status: 'error',
          feedback: `Gabim: Rrënja e foljes '${root}' ka gabim të harmonisë vokalike.`
        };
      }

      const expected = getVowelHarmony2(root);
      const expectedSuffix = `${expected}n`;

      if (suffix !== expectedSuffix) {
        return {
          status: 'error',
          feedback: `Gabim Harmonie te pjesorja: Rrënja '${root}' duhet të ketë prapashtesën '-${expectedSuffix}' $\\rightarrow$ '${root}${expectedSuffix}' (ju shkruat '${root}${suffix}').`
        };
      }
    }

    if (passiveMatch) {
      const root = passiveMatch[1];
      const suffix = passiveMatch[2];

      if (!isValidVerbBase(root)) {
        return {
          status: 'error',
          feedback: `Gabim: Rrënja e foljes '${root}' ka gabim të harmonisë vokalike.`
        };
      }

      const expectedVowel = getVowelHarmony4(root);
      const lastChar = root.slice(-1);
      const isVoiceless = 'çfhkpsştÇFHKPSŞT'.includes(lastChar);
      const expectedD = isVoiceless ? 't' : 'd';
      const expectedSuffixStart = `${expectedD}${expectedVowel}`;
      
      if (!suffix.startsWith(expectedSuffixStart)) {
        return {
          status: 'error',
          feedback: `Gabim Harmonie/Mutacioni: Pjesorja pasive për '${root}' kërkon prapashtesën që fillon me '${expectedSuffixStart}' (p.sh., '${root}${expectedSuffixStart}ğ...'), por ju shkruat '${root}${suffix}'.`
        };
      }
    }

    return {
      status: 'success',
      feedback: 'Shkëlqyeshëm! Keni krijuar një fjali të saktë duke përdorur strukturën e pjesoreve (sıfat-fiil).'
    };
  }

  // Chapter 7: Balkan Idioms
  if (chapterId === 7) {
    const idioms = [
      { name: "gözden düşmek", keywords: ["göz", "düş"] },
      { name: "can atmak", keywords: ["can", "at"] },
      { name: "kulak asmak", keywords: ["kulak", "as"] },
      { name: "kafayı takmak", keywords: ["kafa", "tak"] }
    ];

    let foundIdiom = '';
    for (const idm of idioms) {
      const matchAll = idm.keywords.every(kw => normalizedInput.includes(kw));
      if (matchAll) {
        foundIdiom = idm.name;
        break;
      }
    }

    if (!foundIdiom) {
      return {
        status: 'error',
        feedback: "Gabim: Nuk u gjet asnjë nga idiomat e kërkuara të përbashkëta (si 'gözden düşmek', 'can atmak', 'kulak asmak', ose 'kafayı takmak'). Sigurohuni që t'i shkruani saktë fjalët e idiomës."
      };
    }

    return {
      status: 'success',
      feedback: `Shkëlqyeshëm! Keni përdorur me sukses idiomën '${foundIdiom}' në fjalinë tuaj.`
    };
  }

  return { status: 'success', feedback: 'Vlerësimi u krye me sukses!' };
}
