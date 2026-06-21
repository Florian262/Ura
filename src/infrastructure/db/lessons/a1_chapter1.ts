export interface UnifiedLesson {
  id: number;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  orderIndex: number;
  title: {
    turkish: string;
    albanian: string;
  };
  reading: {
    layoutStyle: 'dialogue' | 'narrative' | 'blog_post';
    audioAssetStub: string | null;
    topic?: string;
    content: Array<{
      speaker?: string;
      text: string;
      translation: string;
    }>;
    questions: Array<{
      questionTurkish: string;
      questionAlbanian: string;
      options: string[];
      correctIndex: number;
    }>;
  };
  vocabulary: Array<{
    turkishWord: string;
    albanianWord: string;
    category: 'emër' | 'folje' | 'mbiemër' | 'ndajfolje' | 'përemër' | 'lidhëz' | 'pasthirrmë' | 'shprehje';
    isSharedBalkanWord: boolean;
    notesAlbanian: string | null;
    notesTurkish?: string | null;
    audioAssetStub: string | null;
    stemBreakdown?: string;
  }>;
  grammar: Array<{
    titleAlbanian: string;
    titleTurkish?: string;
    ruleConceptTurkish: string;
    explanationAlbanian: string;
    explanationTurkish?: string;
    interactiveExample: {
      root: string;
      strategy: 'plural' | 'habitore' | string;
      sampleWords?: Array<{ turkish: string; albanian: string; isException?: boolean }>;
    } | null;
  }>;
  exercises: Array<{
    type: 'MULTIPLE_CHOICE' | 'WORD_SORT' | 'SUFFIX_BUILDER' | 'CLOZE' | 'ERROR_CORRECTION' | 'CONNECTOR_MATCHING';
    promptAlbanian: string;
    promptTurkish?: string;
    payload: any;
    validation: any;
  }>;
  listening?: {
    audioAssetStub: string | null;
    text: string;
    translation: string;
    questions: Array<{
      questionTurkish: string;
      questionAlbanian: string;
      options: string[];
      correctIndex: number;
    }>;
  };
}

export const a1Chapter1: UnifiedLesson = {
  id: 1,
  level: 'A1',
  orderIndex: 1,
  title: {
    turkish: 'Tanışma ve Çoğul Eki',
    albanian: 'Përshëndetjet & Shumësi'
  },
  reading: {
    layoutStyle: 'dialogue',
    audioAssetStub: 'audio/chapter1_reading.wav',
    content: [
      { speaker: 'Ahmet', text: 'Merhaba! Benim adım Ahmet. Senin adın ne?', translation: 'Tungjatjeta! Emri im është Ahmet. Si është emri yt?' },
      { speaker: 'Valbona', text: 'Merhaba Ahmet! Benim adım Valbona.', translation: 'Tungjatjeta Ahmet! Emri im është Valbona.' },
      { speaker: 'Ahmet', text: 'Memnun oldum Valbona. Nasılsın?', translation: 'Kënaqem që u njohëm Valbona. Si je?' },
      { speaker: 'Valbona', text: 'Ben de memnun oldum. İyiyim, teşekkür ederim. Sen nasılsın?', translation: 'Edhe unë kënaqem që u njohëm. Jam mirë, faleminderit. Po ti si je?' },
      { speaker: 'Ahmet', text: 'Teşekkürler, ben de iyiyim. Nerelisin?', translation: 'Faleminderit, edhe unë jam mirë. Nga je?' },
      { speaker: 'Valbona', text: 'Arnavutum, Tiranlıyım. Sen nerelisin?', translation: 'Jam shqiptare, jam nga Tirana. Po ti nga je?' },
      { speaker: 'Ahmet', text: 'Ben Türküm, İstanbulluyum. Görüşmek üzere!', translation: 'Jam turk, jam nga Stambolli. Shihemi së shpejti!' },
      { speaker: 'Valbona', text: 'Görüşürüz! Kendine iyi bak.', translation: 'Mirupafshim! Kujdesu për veten.' }
    ],
    questions: [
      {
        questionTurkish: 'Valbona nerelidir ve aslen kimdir?',
        questionAlbanian: 'Nga është Valbona dhe kush është ajo nga kombësia?',
        options: [
          'Valbona İstanbulludur ve Türktür.',
          'Valbona Tiranlıdır ve Arnavuttur.',
          'Valbona Kosovalıdır ve Almandır.',
          'Valbona İzmirli ve Yunanlıdır.'
        ],
        correctIndex: 1
      },
      {
        questionTurkish: 'Ahmet nereden gelmektedir?',
        questionAlbanian: 'Nga vjen Ahmeti?',
        options: [
          'Ahmet Ankaralıdır.',
          'Ahmet Tiranlıdır.',
          'Ahmet İstanbulludur.',
          'Ahmet Üsküplüdür.'
        ],
        correctIndex: 2
      }
    ]
  },
  vocabulary: [
    {
      turkishWord: 'Merhaba',
      albanianWord: 'Tungjatjeta / Përshëndetje',
      category: 'shprehje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Përshëndetja më e përdorur në turqisht.',
      audioAssetStub: 'audio/vocab_merhaba.mp3'
    },
    {
      turkishWord: 'Nasılsın?',
      albanianWord: 'Si je?',
      category: 'shprehje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Formë bisedore e pyetjes për gjendjen.',
      audioAssetStub: 'audio/vocab_nasilsin.mp3'
    },
    {
      turkishWord: 'Dolap',
      albanianWord: 'Dollap',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë e përbashkët Ballkanike. Huazim i drejtpërdrejtë nga turqishtja osmane dolap.',
      audioAssetStub: 'audio/vocab_dollap.mp3'
    },
    {
      turkishWord: 'Cam',
      albanianWord: 'Xham',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë e përbashkët Ballkanike. Nga turqishtja cam.',
      audioAssetStub: 'audio/vocab_xham.mp3'
    },
    {
      turkishWord: 'Çorap',
      albanianWord: 'Çorape',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë e përbashkët Ballkanike. Nga turqishtja çorap.',
      audioAssetStub: 'audio/vocab_corap.mp3'
    },
    {
      turkishWord: 'Kutu',
      albanianWord: 'Kuti',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë e përbashkët Ballkanike. Nga turqishtja kutu.',
      audioAssetStub: 'audio/vocab_kuti.mp3'
    },
    {
      turkishWord: 'Bela',
      albanianWord: 'Bela (telash)',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Shpesh e përdorur në gjuhën shqipe popullore për telash ose fatkeqësi.',
      audioAssetStub: 'audio/vocab_bela.mp3'
    },
    {
      turkishWord: 'Teşekkür ederim',
      albanianWord: 'Faleminderit (shumë)',
      category: 'shprehje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Shprehje formale e mirënjohjes.',
      audioAssetStub: 'audio/vocab_tesekkur.mp3'
    }
  ],
  grammar: [
    {
      titleAlbanian: 'Koncepti: Gjuhë Aglutinative',
      ruleConceptTurkish: 'Prapashtesat (Ekler)',
      explanationAlbanian: 'Turqishtja është një gjuhë aglutinative (ngjitëse). Kjo do të thotë se kuptimet ndërtohen duke ngjitur prapashtesat (si vagonat e trenit) pas rrënjës së fjalës. \n\n*Udhëzues Prononcimi:* Turqishtja lexohet ashtu siç shkruhet! \n• **Ç / ç** lexohet si **Ç** në shqip (p.sh. *çiçek* = çiçek).\n• **Ş / ş** lexohet si **SH** në shqip (p.sh. *şeker* = sheker).\n• **Ğ / ğ** (g e butë) është pothuajse e heshtur dhe zgjat zanoren para saj.',
      interactiveExample: null
    },
    {
      titleAlbanian: 'Hyrje: Shumësi në Turqisht',
      ruleConceptTurkish: '-lar / -ler',
      explanationAlbanian: 'Në shqip shumësi formohet me shumë prapashtesa të ndryshme (-t, -at, -ë, -et). Në turqisht, shumësi është jashtëzakonisht i thjeshtë dhe ka vetëm dy trajta: **-lar** dhe **-ler**. Përzgjedhja mes tyre varet plotësisht nga zanorja e fundit e fjalës (Harmonia Vokalore).',
      interactiveExample: {
        root: 'okul',
        strategy: 'plural',
        sampleWords: [
          { turkish: 'kitap', albanian: 'libër', isException: false },
          { turkish: 'ev', albanian: 'shtëpi', isException: false },
          { turkish: 'oda', albanian: 'dhomë', isException: false },
          { turkish: 'göz', albanian: 'sy', isException: false },
          { turkish: 'saat', albanian: 'orë', isException: true },
          { turkish: 'renk', albanian: 'ngjyrë', isException: false }
        ]
      }
    },
    {
      titleAlbanian: 'Harmonia Vokalore 2-she',
      ruleConceptTurkish: 'Zanore e Prapme vs. Zanore e Përparme',
      explanationAlbanian: '1. **Zanoret e Prapme (a, ı, o, u):** Nëse zanorja e fundit e rrënjës është një nga këto, shtohet **-lar**.\n   *Shembull:* Kit**a**p → Kitap**lar** (Libër -> Libra)\n\n2. **Zanoret e Përparme (e, i, ö, ü):** Nëse zanorja e fundit e rrënjës është një nga këto, shtohet **-ler**.\n   *Shembull:* Ev → Ev**ler** (Shtëpi -> Shtëpi / Shtëpitë)\n\n*Vini Re:* Ndryshe nga shqipja, nuk ka ndryshim gjinie apo lakime të ndërlikuara!',
      interactiveExample: {
        root: 'ev',
        strategy: 'plural',
        sampleWords: [
          { turkish: 'kitap', albanian: 'libër', isException: false },
          { turkish: 'ev', albanian: 'shtëpi', isException: false },
          { turkish: 'oda', albanian: 'dhomë', isException: false },
          { turkish: 'göz', albanian: 'sy', isException: false },
          { turkish: 'saat', albanian: 'orë', isException: true },
          { turkish: 'renk', albanian: 'ngjyrë', isException: false }
        ]
      }
    },
    {
      titleAlbanian: 'Lidhja Shqip-Turqisht: Prapashtesat',
      ruleConceptTurkish: 'Krahasim Strukturor',
      explanationAlbanian: 'Meqenëse si shqipja, ashtu edhe turqishtja janë gjuhë që përdorin prapashtesat për të ndryshme kuptime, struktura është shumë e ngjashme:\n\n*   **Shkollë** (rrënja) → **Shkollat** (shumësi i shquar)\n*   **Okul** (rrënja) → **Okullar** (shumësi turk)\n\nKjo e bën procesin e mësimit të prapashtesave të natyrshëm për shqipfolësit!',
      interactiveExample: {
        root: 'saat',
        strategy: 'plural',
        sampleWords: [
          { turkish: 'kitap', albanian: 'libër', isException: false },
          { turkish: 'ev', albanian: 'shtëpi', isException: false },
          { turkish: 'oda', albanian: 'dhomë', isException: false },
          { turkish: 'göz', albanian: 'sy', isException: false },
          { turkish: 'saat', albanian: 'orë', isException: true },
          { turkish: 'renk', albanian: 'ngjyrë', isException: false }
        ]
      }
    }
  ],
  exercises: [
    {
      type: 'MULTIPLE_CHOICE',
      promptAlbanian: "Zgjidhni formën e saktë të shumësit për fjalën 'oda' (dhomë) bazuar në harmoninë vokalore:",
      payload: {
        word: 'oda',
        options: ['odaler', 'odalar', 'odas', 'odaları']
      },
      validation: {
        correct_answer: 'odalar',
        msg_success: 'E saktë! Zanorja e fundit e rrënjës është "a" (e prapme), prandaj shumësi është "oda" + "lar" = "odalar".',
        msg_failure: 'E pasaktë. Kontrolloni harmoninë vokalore 2-she për fjalën "oda".'
      }
    },
    {
      type: 'WORD_SORT',
      promptAlbanian: "Renditni fjalët e mëposhtme në turqisht për të formuar fjalinë 'Emri im është Valbona':",
      payload: {
        words: ['adım', 'Valbona', 'Benim']
      },
      validation: {
        correct_sequence: ['Benim', 'adım', 'Valbona'],
        msg_success: "E saktë! Në turqisht, emri pronor 'Benim' pasohet nga emri me prapashtesën pronore 'adım' dhe emri i përveçëm në fund.",
        msg_failure: "E pasaktë. Mbani mend: Pronori 'Benim' (i imi) + 'adım' (emri im) + emri i përveçëm 'Valbona'."
      }
    },
    {
      type: 'SUFFIX_BUILDER',
      promptAlbanian: "Tërhiqni dhe bashkoni prapashtesën e duhur të shumësit për rrënjën 'göz' (sy):",
      payload: {
        root: 'göz',
        suffixes: ['lar', 'ler', 'dir', 'in']
      },
      validation: {
        correct_suffix: 'ler',
        result: 'gözler',
        msg_success: "E saktë! Fjala 'göz' përmban zanorën e përparme 'ö', prandaj merr prapashtesën '-ler' për shumësin: 'gözler' (sy - sytë).",
        msg_failure: "E pasaktë. Kontrolloni zanorën 'ö' (të përparme) të rrënjës 'göz' veçanërisht rregullin e harmonisë 2-she."
      }
    }
  ],
  listening: {
    audioAssetStub: 'audio/chapter1_listening.wav',
    text: "Selin: Merhaba! Benim adım Selin. Senin adın ne? Ardit: Merhaba Selin! Benim adım Ardit. Tanıştığımıza memnun oldum. Selin: Ben de memnun oldum. Nerelisin Ardit? Ardit: Arnavut’um, Tiranlıyım. Sen nerelisin? Selin: Ben de Türk’üm, Ankaralıyım. Bu sınıfta yeni misin? Ardit: Evet, bugün benim ilk günüm. Kitaplar nerede? Selin: Kitaplar masada. Görüşürüz!",
    translation: "Selin: Tungjatjeta! Emri im është Selin. Si është emri yt? Ardit: Tungjatjeta Selin! Emri im është Ardit. Kënaqem që u njohëm. Selin: Edhe unë kënaqem që u njohëm. Nga je Ardit? Ardit: Jam shqiptar, jam nga Tirana. Po ti nga je? Selin: Edhe unë jam turke, jam nga Ankara. A je i ri në këtë klasë? Ardit: Po, sot është dita ime e parë. Ku janë librat? Selin: Librat janë mbi tavolinë. Shihemi!",
    questions: [
      {
        questionTurkish: "Ardit nerelidir?",
        questionAlbanian: "Nga është Arditi?",
        options: ["Tiranlıdır", "Ankaralıdır", "İstanbulludur", "İzmirlidir"],
        correctIndex: 0
      },
      {
        questionTurkish: "Kitaplar nerededir?",
        questionAlbanian: "Ku janë librat?",
        options: ["Sınıfta yok", "Çantada", "Masada", "Kutuda"],
        correctIndex: 2
      }
    ]
  }
};

