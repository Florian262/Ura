import type { UnifiedLesson } from './a1_chapter1';

export const a1Chapter3: UnifiedLesson = {
  id: 3,
  level: 'A1',
  orderIndex: 3,
  title: {
    turkish: 'Meslekler ve Ülkeler',
    albanian: 'Profesionet dhe Shtetet'
  },
  reading: {
    layoutStyle: 'narrative',
    audioAssetStub: 'audio/chapter3_reading.wav',
    content: [
      { text: 'Benim adım Valbona. Ben Arnavut\'um ve Tiran\'da yaşıyorum. Ben bir hemşireyim.', translation: 'Emri im është Valbona. Unë jam shqiptare dhe jetoj në Tiranë. Unë jam infermiere.' },
      { text: 'Bu benim arkadaşım Ahmet. Ahmet Türk\'tür ve İstanbul\'da yaşıyor. Ahmet bir mühendis.', translation: 'Ky është shoku im Ahmeti. Ahmeti është turk dhe jeton në Stamboll. Ahmeti është inxhinier.' },
      { text: 'Biz şimdi sınıftayız ve Türkçe öğreniyoruz. Türkçe çok güzel bir dil!', translation: 'Ne tani jemi në klasë dhe po mësojmë turqisht. Turqishtja është një gjuhë shumë e bukur!' }
    ],
    questions: [
      {
        questionTurkish: 'Valbona\'nın mesleği nedir?',
        questionAlbanian: 'Cili është profesioni i Valbonës?',
        options: [
          'Doktor',
          'Hemşire',
          'Mühendis',
          'Öğretmen'
        ],
        correctIndex: 1
      },
      {
        questionTurkish: 'Ahmet neredelidir?',
        questionAlbanian: 'Nga është Ahmeti?',
        options: [
          'Arnavutluk',
          'Almanya',
          'Türkiye',
          'Kosova'
        ],
        correctIndex: 2
      }
    ]
  },
  vocabulary: [
    {
      turkishWord: 'Öğretmen',
      albanianWord: 'Mësues',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Formohet nga folja öğretmek - mësoj/udhëzoj.',
      audioAssetStub: 'audio/vocab_ogretmen.mp3'
    },
    {
      turkishWord: 'Öğrenci',
      albanianWord: 'Nxënës / Student',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Formohet nga folja öğrenmek - mësoj/nxjerr.',
      audioAssetStub: 'audio/vocab_ogrenci.mp3'
    },
    {
      turkishWord: 'Mühendis',
      albanianWord: 'Inxhinier',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Huazim nga arabishtja, shpesh i përdorur në sferën teknike.',
      audioAssetStub: 'audio/vocab_muhendis.mp3'
    },
    {
      turkishWord: 'Doktor',
      albanianWord: 'Mjek / Doktor',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë ndërkombëtare e përbashkët në të dyja gjuhët.',
      audioAssetStub: 'audio/vocab_doktor.mp3'
    },
    {
      turkishWord: 'Hemşire',
      albanianWord: 'Infermiere',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Fjalë për fjalë do të thotë \'motër e qumështit\' (hemişre) në persishten e vjetër.',
      audioAssetStub: 'audio/vocab_hemsire.mp3'
    },
    {
      turkishWord: 'Avukat',
      albanianWord: 'Avokat',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Huazim i përbashkët nga gjuha italiane/latine.',
      audioAssetStub: 'audio/vocab_avukat.mp3'
    },
    {
      turkishWord: 'Polis',
      albanianWord: 'Polic',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë ndërkombëtare e përbashkët.',
      audioAssetStub: 'audio/vocab_polis.mp3'
    },
    {
      turkishWord: 'Ülke',
      albanianWord: 'Shtet / Vend',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Përdoret për të treguar shtetin apo vendin e origjinës.',
      audioAssetStub: 'audio/vocab_ulke.mp3'
    }
  ],
  grammar: [
    {
      titleAlbanian: 'Harmonia Vokalore 4-she',
      ruleConceptTurkish: 'Dörtlü Ses Uyumu (ı / i / u / ü)',
      explanationAlbanian: 'Harmonia vokalore 4-she ndan zanoret në katër grupe:\n\n1. **a, ı** -> marrin **ı**\n2. **e, i** -> marrin **i**\n3. **o, u** -> marrin **u**\n4. **ö, ü** -> marrin **ü**\n\nKjo harmoni përdoret për shumicën e prapashtesava vetore dhe kohore.',
      interactiveExample: null
    },
    {
      titleAlbanian: 'Folja \'Jam\' (Prapashtesat Vetore)',
      ruleConceptTurkish: 'Ben ... -(y)ı/i/u/üm',
      explanationAlbanian: 'Në turqisht, folja \'jam\' shprehet përmes prapashtesave vetore të shtuara pas emrit apo mbiemrit. Për vetën e parë njëjës (Ben - Unë):\n\n*   **Nëse rrënja mbaron me bashkëtingëllore:** Shtohet prapashtesa sipas harmonisë 4-she (p.sh., *öğretmen* -> *öğretmenim* / unë jam mësues).\n*   **Nëse rrënja mbaron me zanore:** Shtohet shkronja ndërmjetësuese **y** (p.sh., *öğrenci* -> *öğrenciyim* / unë jam student).\n*   **Për emrat e përveçëm (si kombësitë):** Përdoret apostrofi para prapashtesës (p.sh., *Türk* -> *Türk\'üm* / unë jam turk).',
      interactiveExample: {
        root: 'doktor',
        strategy: 'copula',
        sampleWords: [
          { turkish: 'öğretmen', albanian: 'mësues' },
          { turkish: 'öğrenci', albanian: 'nxënës' },
          { turkish: 'doktor', albanian: 'mjek' },
          { turkish: 'Arnavut', albanian: 'shqiptar' },
          { turkish: 'Türk', albanian: 'turk' }
        ]
      }
    }
  ],
  exercises: [
    {
      type: 'MULTIPLE_CHOICE',
      promptAlbanian: "Zgjidhni formën e saktë të foljes 'jam' për fjalën 'doktor' (Unë jam doktor):",
      payload: {
        word: 'doktor',
        options: ['doktorum', 'doktorim', 'doktoryum', 'doktorsun']
      },
      validation: {
        correct_answer: 'doktorum',
        msg_success: 'E saktë! Zanorja e fundit e fjalës "doktor" është "o" (e prapme e rrumbullakosur), prandaj merr prapashtesën "-um".',
        msg_failure: 'E pasaktë. Rishikoni harmoninë 4-she për zanoren "o".'
      }
    },
    {
      type: 'WORD_SORT',
      promptAlbanian: "Renditni fjalët për të formuar fjalinë 'Unë jam inxhinier në Stamboll':",
      payload: {
        words: ['mühendisim', 'İstanbul\'da', 'Ben']
      },
      validation: {
        correct_sequence: ['Ben', 'İstanbul\'da', 'mühendisim'],
        msg_success: 'E saktë! Në turqisht, subjekti shkon në fillim, lokacioni në mes dhe folja/predikati në fund.',
        msg_failure: 'E pasaktë. Mbani mend: Subjekti + Vendndodhja + Profesioni (me foljen në fund).'
      }
    },
    {
      type: 'SUFFIX_BUILDER',
      promptAlbanian: "Bashkoni prapashtesën e duhur të vetës së parë (Ben) për fjalën 'öğrenci' (nxënës):",
      payload: {
        root: 'öğrenci',
        suffixes: ['yim', 'im', 'yım', 'sin']
      },
      validation: {
        correct_suffix: 'yim',
        result: 'öğrenciyim',
        msg_success: 'E saktë! Fjala "öğrenci" mbaron me zanore ("i"), prandaj shtohet "y" ndërmjetësuese dhe prapashtesa "-im": "öğrenciyim".',
        msg_failure: 'E pasaktë. Kujdes: Rrënja mbaron me zanore, prandaj ju nevojitet shkronja ndërmjetësuese "y".'
      }
    }
  ],
  listening: {
    audioAssetStub: 'audio/chapter3_listening.wav',
    text: "Benim adım Elif. Ben Arnavut'um ve Tiran'da yaşıyorum. Ben bir hemşireyim. Bu benim arkadaşım Mehmet. Mehmet Türk'tür ve İstanbul'da yaşıyor. Mehmet bir mühendis. Biz şimdi sınıftayız ve Türkçe öğreniyoruz. Türkçe çok güzel bir dil!",
    translation: "Emri im është Elif. Unë jam shqiptare dhe jetoj në Tiranë. Unë jam infermiere. Ky është shoku im Mehmeti. Mehmeti është turk dhe jeton në Stamboll. Mehmeti është inxhinier. Ne tani jemi në klasë dhe po mësojmë turqisht. Turqishtja është një gjuhë shumë e bukur!",
    questions: [
      {
        questionTurkish: "Elif'in mesleği nedir?",
        questionAlbanian: "Cili është profesioni i Elifit?",
        options: ["Doktor", "Hemşire", "Mühendis", "Öğretmen"],
        correctIndex: 1
      },
      {
        questionTurkish: "Mehmet nerede yaşıyor?",
        questionAlbanian: "Ku jeton Mehmeti?",
        options: ["Tiran'da", "Ankara'da", "İstanbul'da", "Kosova'da"],
        correctIndex: 2
      }
    ]
  }
};
