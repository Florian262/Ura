import type { UnifiedLesson } from './a1_chapter1';

export const a1Chapter2: UnifiedLesson = {
  id: 2,
  level: 'A1',
  orderIndex: 2,
  title: {
    turkish: 'Sınıfta ve Evde',
    albanian: 'Në Klasë dhe Në Shtëpi'
  },
  reading: {
    layoutStyle: 'dialogue',
    audioAssetStub: 'audio/chapter2_reading.wav',
    content: [
      { speaker: 'Valbona', text: 'Ahmet, merhaba! Benim küçük kalemim nerede?', translation: 'Ahmet, tungjatjeta! Ku është lapsi im i vogël?' },
      { speaker: 'Ahmet', text: 'Merhaba Valbona! Kalem masada.', translation: 'Tungjatjeta Valbona! Lapsi është mbi tavolinë.' },
      { speaker: 'Valbona', text: 'Teşekkürler. Peki, mavi defterim çantada mı?', translation: 'Faleminderit. Po fletorja ime e kaltër, a është në çantë?' },
      { speaker: 'Ahmet', text: 'Hayır, çantada değil. Defter de masada, kitabın altında.', translation: 'Jo, nuk është në çantë. Edhe fletorja është mbi tavolinë, nën libër.' },
      { speaker: 'Valbona', text: 'A, evet, gördüm! Peki, öğretmen nerede? Sınıfta mı?', translation: 'A, po, e pashë! Po mësuesi ku është? A është në klasë?' },
      { speaker: 'Ahmet', text: 'Hayır, öğretmen sınıfta değil. Şu an ofiste.', translation: 'Jo, mësuesi nuk është në klasë. Tani për tani është në zyrë.' },
      { speaker: 'Valbona', text: 'Harika, o zaman vaktimiz var. Çok teşekkür ederim!', translation: 'E mrekullueshme, atëherë kemi kohë. Faleminderit shumë!' }
    ],
    questions: [
      {
        questionTurkish: 'Valbona\'nın kalemi nerededir?',
        questionAlbanian: 'Ku është lapsi i Valbonës?',
        options: [
          'Sınıfta değil',
          'Çantada',
          'Masada',
          'Ofiste'
        ],
        correctIndex: 2
      },
      {
        questionTurkish: 'Öğretmen şu an nerededir?',
        questionAlbanian: 'Ku është mësuesi tani?',
        options: [
          'Sınıfta',
          'Ofiste',
          'Evde',
          'Kütüphanede'
        ],
        correctIndex: 1
      }
    ]
  },
  vocabulary: [
    {
      turkishWord: 'Masa',
      albanianWord: 'Tavolinë',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë e përbashkët ballkanike e huazuar (nga masa e turqishtes ose anasjelltas).',
      audioAssetStub: 'audio/vocab_masa.mp3'
    },
    {
      turkishWord: 'Çanta',
      albanianWord: 'Çantë',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Huazim i drejtpërdrejtë në gjuhën shqipe (çantë).',
      audioAssetStub: 'audio/vocab_canta.mp3'
    },
    {
      turkishWord: 'Sınıf',
      albanianWord: 'Klasë',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Vini re se mbaron me bashkëtingëllore të shurdhët f.',
      audioAssetStub: 'audio/vocab_sinif.mp3'
    },
    {
      turkishWord: 'Defter',
      albanianWord: 'Fletore',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Shpesh e përdorur në shqipen e vjetër si "defter" (libër llogarie/shënimesh).',
      audioAssetStub: 'audio/vocab_defter.mp3'
    },
    {
      turkishWord: 'Kitap',
      albanianWord: 'Libër',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Mbaron me p. Merr prapashtesën -ta për shkak të konsonantizmit.',
      audioAssetStub: 'audio/vocab_kitap.mp3'
    },
    {
      turkishWord: 'Ofis',
      albanianWord: 'Zyrë',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Fjalë ndërkombëtare (zyrë/ofis). Mbaron me s të shurdhët (ofiste).',
      audioAssetStub: 'audio/vocab_ofis.mp3'
    },
    {
      turkishWord: 'Sokak',
      albanianWord: 'Rrugë / Sokak',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Përdoret gjerësisht në gjuhën shqipe popullore as "sokak".',
      audioAssetStub: 'audio/vocab_sokak.mp3'
    },
    {
      turkishWord: 'Ev',
      albanianWord: 'Shtëpi',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Mbaron me zanore të përparme (evde).',
      audioAssetStub: 'audio/vocab_ev.mp3'
    }
  ],
  grammar: [
    {
      titleAlbanian: 'Rasa Vendore (Bulunma Durumu)',
      ruleConceptTurkish: '-da / -de',
      explanationAlbanian: 'Rasa vendore tregon lokacionin ("në", "mbi", "tek") dhe i përgjigjet pyetjes **Nerede? (Ku?)**. Ajo formohet duke shtuar prapashtesat `-da` ose `-de` pas rrënjës së fjalës sipas harmonisë vokalore 2-she:\n\n1. **Zanoret e Prapme (a, ı, o, u):** merr **-da** (p.sh., *Oda* -> *Odada* / Në dhomë).\n2. **Zanoret e Përparme (e, i, ö, ü):** merr **-de** (p.sh., *Ev* -> *Evde* / Në shtëpi).\n\n*Vini Re:* Ndryshe nga shqipja, nuk ka ndryshim gjinie apo lakime të ndërlikuara!',
      interactiveExample: {
        root: 'okul',
        strategy: 'locative',
        sampleWords: [
          { turkish: 'oda', albanian: 'dhomë', isException: false },
          { turkish: 'okul', albanian: 'shkollë', isException: false },
          { turkish: 'ev', albanian: 'shtëpi', isException: false },
          { turkish: 'bahçe', albanian: 'kopsht', isException: false }
        ]
      }
    },
    {
      titleAlbanian: 'Rregulli i Bashkëtingëlloreve të Shurdhëta',
      ruleConceptTurkish: 'Fıstıkçı Şahap (-ta / -te)',
      explanationAlbanian: 'Nëse rrënja e fjalës përfundon me një nga bashkëtingëlloret e shurdhëta (**f, s, t, k, ç, ş, h, p**), shkronja fillestare **d** e prapashtesës zbutet dhe kthehet në **t**:\n\n*   Në vend të `-da`, shtohet **-ta** (p.sh., *Sınıf* -> *Sınıfta* / Në klasë).\n*   Në vend të `-de`, shtohet **-te** (p.sh., *Ofis* -> *Ofiste* / Në zyrë).\n\n*Mnemoteknikë Ballkanike:* Mbani mend togfjalëshin **Fıstıkçı Şahap** (shitësi i fistikëve) që përmban të gjitha këto bashkëtingëllore.',
      interactiveExample: {
        root: 'sınıf',
        strategy: 'locative',
        sampleWords: [
          { turkish: 'sınıf', albanian: 'klasë', isException: false },
          { turkish: 'ofis', albanian: 'zyrë', isException: false },
          { turkish: 'kitap', albanian: 'libër', isException: false },
          { turkish: 'park', albanian: 'park', isException: false },
          { turkish: 'market', albanian: 'market', isException: false }
        ]
      }
    }
  ],
  exercises: [
    {
      type: 'MULTIPLE_CHOICE',
      promptAlbanian: "Zgjidhni formën e saktë të prapashtesës vendore për fjalën 'ofis' (zyrë):",
      payload: {
        word: 'ofis',
        options: ['ofisde', 'ofiste', 'ofisda', 'ofista']
      },
      validation: {
        correct_answer: 'ofiste',
        msg_success: 'E saktë! Fjala "ofis" mbaron me "s" (e shurdhët) dhe ka zanoren "i" (përparme), prandaj merr "-te": "ofiste".',
        msg_failure: 'E pasaktë. Rishikoni rregullin "Fıstıkçı Şahap" për bashkëtingëlloret e shurdhëta.'
      }
    },
    {
      type: 'WORD_SORT',
      promptAlbanian: "Renditni fjalët e mëposhtme në turqisht për të formuar fjalinë 'Mësuesi nuk është në klasë':",
      payload: {
        words: ['sınıfta', 'değil', 'Öğretmen']
      },
      validation: {
        correct_sequence: ['Öğretmen', 'sınıfta', 'değil'],
        msg_success: "E saktë! Në turqisht, mohimi 'değil' (nuk është) vendoset gjithmonë në fund të fjalisë.",
        msg_failure: "E pasaktë. Mbani mend: Subjekti + Lokacioni + Mohimi 'değil' në fund."
      }
    },
    {
      type: 'SUFFIX_BUILDER',
      promptAlbanian: "Tërhiqni dhe bashkoni prapashtesën e duhur të lokacionit për fjalën 'okul' (shkollë):",
      payload: {
        root: 'okul',
        suffixes: ['da', 'de', 'ta', 'te']
      },
      validation: {
        correct_suffix: 'da',
        result: 'okulda',
        msg_success: "E saktë! Zanorja e fundit e rrënjës 'okul' është 'u' (e prapme), dhe 'l' është e zëshme, prandaj shtohet '-da': 'okulda' (në shkollë).",
        msg_failure: "E pasaktë. Zanorja 'u' është e prapme, prandaj prapashtesa duhet të ketë zanoren 'a'."
      }
    }
  ],
  listening: {
    audioAssetStub: 'audio/chapter2_listening.wav',
    text: "Öğretmen: Günaydın öğrenciler! Bugün sınıfta kimler var? Öğrenciler: Günaydın öğretmenim! Sınıfta on öğrenci var. Öğretmen: Güzel. Sınıfta bilgisayar var mı? Öğrenci: Hayır, bilgisayar yok ama televizyon var. Öğretmen: Harika. Kitaplar ve defterler nerede? Öğrenci: Kitaplar masada, defterler ise çantalarda.",
    translation: "Mësuesi: Mirëmëngjes nxënës! Kush është në klasë sot? Nxënësit: Mirëmëngjes mësues! Në klasë janë dhjetë nxënës. Mësuesi: Bukur. A ka kompjuter në klasë? Nxënësi: Jo, kompjuter nuk ka por ka televizor. Mësuesi: Shkëlqyeshëm. Ku janë librat dhe fletoret? Nxënësi: Librat janë mbi tavolinë, kurse fletoret janë në çanta.",
    questions: [
      {
        questionTurkish: "Sınıfta kaç öğrenci var?",
        questionAlbanian: "Sa nxënës ka në klasë?",
        options: ["Beş öğrenci", "On öğrenci", "İki öğrenci", "Hiç öğrenci yok"],
        correctIndex: 1
      },
      {
        questionTurkish: "Sınıfta ne yok?",
        questionAlbanian: "Çfarë nuk ka në klasë?",
        options: ["Televizyon", "Kitap", "Bilgisayar", "Defter"],
        correctIndex: 2
      }
    ]
  }
};
