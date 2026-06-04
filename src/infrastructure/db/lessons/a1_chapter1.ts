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
    isSharedBalkanWord: boolean;
    notesAlbanian: string | null;
    audioAssetStub: string | null;
  }>;
  grammar: Array<{
    titleAlbanian: string;
    ruleConceptTurkish: string;
    explanationAlbanian: string;
    interactiveExample: {
      root: string;
      strategy: 'plural' | 'habitore' | string;
    } | null;
  }>;
  exercises: Array<{
    type: 'MULTIPLE_CHOICE' | 'WORD_SORT' | 'SUFFIX_BUILDER';
    promptAlbanian: string;
    payload: any;
    validation: any;
  }>;
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
    audioAssetStub: 'audio/chapter1_reading.mp3',
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
      isSharedBalkanWord: false,
      notesAlbanian: 'Përshëndetja më e përdorur në turqisht.',
      audioAssetStub: 'audio/vocab_merhaba.mp3'
    },
    {
      turkishWord: 'Nasılsın?',
      albanianWord: 'Si je?',
      isSharedBalkanWord: false,
      notesAlbanian: 'Formë bisedore e pyetjes për gjendjen.',
      audioAssetStub: 'audio/vocab_nasilsin.mp3'
    },
    {
      turkishWord: 'Dollap',
      albanianWord: 'Dollap',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë e përbashkët Ballkanike. Huazim i drejtpërdrejtë nga turqishtja osmane dolap.',
      audioAssetStub: 'audio/vocab_dollap.mp3'
    },
    {
      turkishWord: 'Xham',
      albanianWord: 'Xham',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë e përbashkët Ballkanike. Nga turqishtja cam.',
      audioAssetStub: 'audio/vocab_xham.mp3'
    },
    {
      turkishWord: 'Çorap',
      albanianWord: 'Çorape',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë e përbashkët Ballkanike. Nga turqishtja çorap.',
      audioAssetStub: 'audio/vocab_corap.mp3'
    },
    {
      turkishWord: 'Kuti',
      albanianWord: 'Kuti',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë e përbashkët Ballkanike. Nga turqishtja kutu.',
      audioAssetStub: 'audio/vocab_kuti.mp3'
    },
    {
      turkishWord: 'Bela',
      albanianWord: 'Bela (telash)',
      isSharedBalkanWord: true,
      notesAlbanian: 'Shpesh e përdorur në gjuhën shqipe popullore për telash ose fatkeqësi.',
      audioAssetStub: 'audio/vocab_bela.mp3'
    },
    {
      turkishWord: 'Teşekkür ederim',
      albanianWord: 'Faleminderit (shumë)',
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
      interactiveExample: { root: 'okul', strategy: 'plural' }
    },
    {
      titleAlbanian: 'Harmonia Vokalore 2-she',
      ruleConceptTurkish: 'Zanore e Prapme vs. Zanore e Përparme',
      explanationAlbanian: '1. **Zanoret e Prapme (a, ı, o, u):** Nëse zanorja e fundit e rrënjës është një nga këto, shtohet **-lar**.\n   *Shembull:* Kit**a**p $\\rightarrow$ Kitap**lar** (Libër -> Libra)\n\n2. **Zanoret e Përparme (e, i, ö, ü):** Nëse zanorja e fundit e rrënjës është një nga këto, shtohet **-ler**.\n   *Shembull:* Ev $\\rightarrow$ Ev**ler** (Shtëpi -> Shtëpi / Shtëpitë)\n\n*Vini Re:* Ndryshe nga shqipja, nuk ka ndryshim gjinie apo lakime të ndërlikuara!',
      interactiveExample: { root: 'ev', strategy: 'plural' }
    },
    {
      titleAlbanian: 'Lidhja Shqip-Turqisht: Prapashtesat',
      ruleConceptTurkish: 'Krahasim Strukturor',
      explanationAlbanian: 'Meqenëse si shqipja, ashtu edhe turqishtja janë gjuhë që përdorin prapashtesat për të ndryshme kuptime, struktura është shumë e ngjashme:\n\n*   **Shkollë** (rrënja) $\\rightarrow$ **Shkollat** (shumësi i shquar)\n*   **Okul** (rrënja) $\\rightarrow$ **Okullar** (shumësi turk)\n\nKjo e bën procesin e mësimit të prapashtesave të natyrshëm për shqipfolësit!',
      interactiveExample: { root: 'saat', strategy: 'plural' }
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
        correct_answer: 'odalar'
      }
    },
    {
      type: 'WORD_SORT',
      promptAlbanian: "Renditni fjalët e mëposhtme në turqisht për të formuar fjalinë 'Emri im është Valbona':",
      payload: {
        words: ['adım', 'Valbona', 'Benim']
      },
      validation: {
        correct_sequence: ['Benim', 'adım', 'Valbona']
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
        result: 'gözler'
      }
    }
  ]
};
