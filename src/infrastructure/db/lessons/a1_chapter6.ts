import type { UnifiedLesson } from './a1_chapter1';

export const a1Chapter6: UnifiedLesson = {
  id: 6,
  level: 'A1',
  orderIndex: 6,
  title: {
    turkish: 'Ailem ve Aitlik',
    albanian: 'Familja Ime dhe Pronësia'
  },
  reading: {
    layoutStyle: 'narrative',
    audioAssetStub: 'audio/chapter6_reading.wav',
    content: [
      { text: 'Benim adım Valbona. Bu benim ailem. Benim babamın adı Ilir. Babam bir doktor.', translation: 'Emri im është Valbona. Kjo është familja ime. Emri i babait tim është Ilir. Babai im është mjek.' },
      { text: 'Benim annemin adı Leyla. Annem bir öğretmen. Benim bir erkek kardeşim var. Onun adı Besnik.', translation: 'Emri i nënës sime është Leyla. Nëna ime është mësuese. Unë kam një vëlla. Emri i tij është Besnik.' },
      { text: 'Besnik çok çalışkan bir öğrenci. Bizim evimiz Tiran\'da.', translation: 'Besniku është një nxënës shumë i zellshëm. Shtëpia jonë është në Tiranë.' }
    ],
    questions: [
      {
        questionTurkish: 'Valbona\'nın babasının mesleği nedir?',
        questionAlbanian: 'Cili është profesioni i babait të Valbonës?',
        options: [
          'Öğretmen',
          'Doktor',
          'Polis',
          'Mühendis'
        ],
        correctIndex: 1
      },
      {
        questionTurkish: 'Valbona\'nın erkek kardeşinin adı nedir?',
        questionAlbanian: 'Si quhet vëllai i Valbonës?',
        options: [
          'Ahmet',
          'Ilir',
          'Besnik',
          'Valbona'
        ],
        correctIndex: 2
      }
    ]
  },
  vocabulary: [
    {
      turkishWord: 'Aile',
      albanianWord: 'Familje',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Origjina e fjalës është nga arabishtja, përdoret gjerësisht në turqisht.',
      audioAssetStub: 'audio/vocab_aile.mp3'
    },
    {
      turkishWord: 'Baba',
      albanianWord: 'Baba',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë e përbashkët ballkanike e huazuar dhe e integruar.',
      audioAssetStub: 'audio/vocab_baba.mp3'
    },
    {
      turkishWord: 'Anne',
      albanianWord: 'Nënë',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Në turqishten e vjetër quhej "ana".',
      audioAssetStub: 'audio/vocab_anne.mp3'
    },
    {
      turkishWord: 'Kardeş',
      albanianWord: 'Vëlla ose motër',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Vjen nga "karındaş" (fjalë për fjalë: nga barku i njëjtë).',
      audioAssetStub: 'audio/vocab_kardes.mp3'
    },
    {
      turkishWord: 'Evlat',
      albanianWord: 'Fëmijë / Evlad',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Huazim popullor ballkanik nga gjuha arabe (evlad - fëmijët).',
      audioAssetStub: 'audio/vocab_evlat.mp3'
    },
    {
      turkishWord: 'Benim',
      albanianWord: 'I imi / Imja',
      category: 'përemër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Përemri pronor i vetës së parë njëjës.',
      audioAssetStub: 'audio/vocab_benim.mp3'
    },
    {
      turkishWord: 'Senin',
      albanianWord: 'I yti / Jotja',
      category: 'përemër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Përemri pronor i vetës së dytë njëjës.',
      audioAssetStub: 'audio/vocab_senin.mp3'
    },
    {
      turkishWord: 'Onun',
      albanianWord: 'I/e tij, i/e saj',
      category: 'përemër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Përemri pronor i vetës së tretë njëjës.',
      audioAssetStub: 'audio/vocab_onun.mp3'
    }
  ],
  grammar: [
    {
      titleAlbanian: 'Përemrat Pronorë (İyelik Zamirleri)',
      ruleConceptTurkish: 'Benim, Senin, Onun ...',
      explanationAlbanian: 'Përemrat pronorë në turqisht tregojnë se kujt i përket një objekt apo person:\n\n*   **Benim:** im / ime (p.sh. Benim defterim - fletorja ime)\n*   **Senin:** yt / jote (p.sh. Senin defterin - fletorja jote)\n*   **Onun:** e tij / e saj (p.sh. Onun defteri - fletorja e tij/saj)\n*   **Bizim:** ynë / jonë (p.sh. Bizim evimiz - shtëpia jonë)\n*   **Sizin:** juaj\n*   **Onların:** e tyre',
      interactiveExample: null
    },
    {
      titleAlbanian: 'Prapashtesat Pronore (İyelik Ekleri)',
      ruleConceptTurkish: 'Benim ... -im / -m',
      explanationAlbanian: 'Për të shprehur pronësinë në turqisht, prapashtesa shtohet në fund të emrit për të pasqyruar përemrin pronor. Për vetën e parë njëjës (**Benim - im/ime**):\n\n*   **Nëse emri mbaron me bashkëtingëllore:** Shtohet prapashtesa sipas harmonisë vokalore 4-she: **-im / -ım / -um / -üm** (p.sh. *Ev* -> *Evim*, *Doktor* -> *Doktorum*).\n*   **Nëse emri mbaron me zanore:** Shtohet thjesht prapashtesa **-m** (p.sh. *Baba* -> *Babam*, *Anne* -> *Annem*).',
      interactiveExample: {
        root: 'ev',
        strategy: 'possessive',
        sampleWords: [
          { turkish: 'ev', albanian: 'shtëpi' },
          { turkish: 'defter', albanian: 'fletore' },
          { turkish: 'baba', albanian: 'baba' },
          { turkish: 'anne', albanian: 'nënë' },
          { turkish: 'çanta', albanian: 'çantë' },
          { turkish: 'kalem', albanian: 'laps' }
        ]
      }
    }
  ],
  exercises: [
    {
      type: 'MULTIPLE_CHOICE',
      promptAlbanian: "Zgjidhni formën e saktë të prapashtesës pronore për fjalën 'ev' (Shtëpia ime / Benim ev...):",
      payload: {
        word: 'ev',
        options: ['evm', 'evim', 'evum', 'evde']
      },
      validation: {
        correct_answer: 'evim',
        msg_success: 'E saktë! Rrënja "ev" mbaron me bashkëtingëllore dhe ka zanoren e përparme "e", prandaj merr "-im": "evim".',
        msg_failure: 'E pasaktë. Rishikoni harmoninë 4-she për zanoren "e".'
      }
    },
    {
      type: 'WORD_SORT',
      promptAlbanian: "Renditni fjalët për të formuar fjalinë 'Kjo është fletorja ime e kaltër':",
      payload: {
        words: ['mavi defterim', 'Bu', 'benim']
      },
      validation: {
        correct_sequence: ['Bu', 'benim', 'mavi defterim'],
        msg_success: 'E saktë! Rendi i fjalëve: Përemri dëftor "Bu" + përemri pronor "benim" + emri me prapashtesë pronore dhe mbiemër.',
        msg_failure: 'E pasaktë. Rendi: Përemër Dëftor + Përemër Pronor + Emri i përcaktuar.'
      }
    },
    {
      type: 'SUFFIX_BUILDER',
      promptAlbanian: "Tërhiqni dhe bashkoni prapashtesën e duhur pronore (Benim) për fjalën 'baba' (baba):",
      payload: {
        root: 'baba',
        suffixes: ['m', 'im', 'yım', 'n']
      },
      validation: {
        correct_suffix: 'm',
        result: 'babam',
        msg_success: 'E saktë! Fjala "baba" përfundon me zanore, kështu që shtohet thjesht "-m": "babam".',
        msg_failure: 'E pasaktë. Kur rrënja mbaron me zanore, nuk ka nevojë për zanore lidhëse, vetëm shtohet "-m".'
      }
    }
  ],
  listening: {
    audioAssetStub: 'audio/chapter6_listening.wav',
    text: "Can: Valbona, bu fotoğraftaki insanlar kim? Valbona: Bu benim ailem. Bu adam benim babam. Onun adı Ilir. Babam bir doktor. Can: Çok güzel. Peki, yanındaki kadın senin annen mi? Valbona: Evet, o benim annem Leyla. Annem bir öğretmen. Can: Peki, bu küçük çocuk kim? Valbona: O benim erkek kardeşim Besnik. Besnik çok çalışkan bir öğrencidir.",
    translation: "Can: Valbona, kush janë këta njerëz në këtë foto? Valbona: Kjo është familja ime. Ky burrë është babai im. Emri i tij është Ilir. Babai im është mjek. Can: Shumë bukur. Po gruaja pranë tij, a është nëna jote? Valbona: Po, ajo është nëna ime Leyla. Nëna ime është mësuese. Can: Po ky djalë i vogël kush është? Valbona: Ai është vëllai im Besniku. Besniku është një nxënës shumë i zellshëm.",
    questions: [
      {
        questionTurkish: "Valbona'nın babasının adı nedir?",
        questionAlbanian: "Si quhet babai i Valbonës?",
        options: ["Ahmet", "Ilir", "Besnik", "Mehmet"],
        correctIndex: 1
      },
      {
        questionTurkish: "Valbona'nın annesinin mesleği nedir?",
        questionAlbanian: "Cili është profesioni i nënës së Valbonës?",
        options: ["Doktor", "Hemşire", "Öğretmen", "Mühendis"],
        correctIndex: 2
      }
    ]
  }
};
