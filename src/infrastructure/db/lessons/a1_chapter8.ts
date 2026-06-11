import type { UnifiedLesson } from './a1_chapter1';

export const a1Chapter8: UnifiedLesson = {
  id: 13,
  level: 'A1',
  orderIndex: 8,
  title: {
    turkish: 'Sayılar, Var-Yok ve Soru Eki',
    albanian: 'Numrat, Ka-Nuk ka & Pyetjet'
  },
  reading: {
    layoutStyle: 'dialogue',
    audioAssetStub: 'audio/chapter8_reading.mp3',
    content: [
      { speaker: 'Valbona', text: 'Ahmet, bu sınıfta kaç öğrenci var?', translation: 'Ahmet, sa nxënës ka në këtë klasë?' },
      { speaker: 'Ahmet', text: 'Bu sınıfta on öğrenci var. Masa da var mı?', translation: 'Në këtë klasë ka dhjetë nxënës. A ka edhe tavolinë?' },
      { speaker: 'Valbona', text: 'Evet, sınıfta iki masa var. Ama televizyon yok. Sınıfta bilgisayar var mı?', translation: 'Po, në klasë ka dy tavolina. Por televizor nuk ka. A ka kompjuter në klasë?' },
      { speaker: 'Ahmet', text: 'Hayır, bilgisayar yok. Valbona, şu kitap senin mi?', translation: 'Jo, kompjuter nuk ka. Valbona, ai libri a është i yti?' },
      { speaker: 'Valbona', text: 'Evet, benim. Kitap çok güzel ama biraz pahalı. Fiyatı ne kadar?', translation: 'Po, është i imi. Libri është shumë i bukur por pak i shtrenjtë. Sa është çmimi i tij?' },
      { speaker: 'Ahmet', text: 'Bu kitap elli lira. Çok pahalı değil.', translation: 'Ky libër është pesëdhjetë lira. Nuk është shumë i shtrenjtë.' }
    ],
    questions: [
      {
        questionTurkish: 'Sınıfta kaç öğrenci var?',
        questionAlbanian: 'Sa nxënës ka në klasë?',
        options: [
          'İki öğrenci',
          'Beş öğrenci',
          'On öğrenci',
          'Elli öğrenci'
        ],
        correctIndex: 2
      },
      {
        questionTurkish: 'Sınıfta ne yok?',
        questionAlbanian: 'Çfarë nuk ka në klasë?',
        options: [
          'Masa',
          'Öğrenci',
          'Kitap',
          'Televizyon ve bilgisayar'
        ],
        correctIndex: 3
      }
    ]
  },
  vocabulary: [
    {
      turkishWord: 'Var',
      albanianWord: 'Ka / Ekziston',
      category: 'shprehje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Tregon ekzistencën ose praninë e diçkaje në një vend.',
      audioAssetStub: 'audio/vocab_var.mp3'
    },
    {
      turkishWord: 'Yok',
      albanianWord: 'Nuk ka / Mungon',
      category: 'shprehje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Antonimi i fjalës var. Tregon mungesën e diçkaje.',
      audioAssetStub: 'audio/vocab_yok.mp3'
    },
    {
      turkishWord: 'Sayı',
      albanianWord: 'Numër',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Përdoret për konceptin e numrave ose shifrave.',
      audioAssetStub: 'audio/vocab_sayi.mp3'
    },
    {
      turkishWord: 'Kaç?',
      albanianWord: 'Sa?',
      category: 'përemër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Përemër pyetës që përdoret për të pyetur për sasi ose çmime.',
      audioAssetStub: 'audio/vocab_kac.mp3'
    },
    {
      turkishWord: 'Tane',
      albanianWord: 'Copë',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Huazim i përbashkët (tane). Përdoret gjithmonë si njësi numërimi pas numrave.',
      audioAssetStub: 'audio/vocab_tane.mp3'
    },
    {
      turkishWord: 'Lira',
      albanianWord: 'Lirë (valuta)',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Monedha zyrtare e Republikës së Turqisë.',
      audioAssetStub: 'audio/vocab_lira.mp3'
    },
    {
      turkishWord: 'Soru',
      albanianWord: 'Pyetje',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Vjen nga rrënja e foljes sormak - pyes.',
      audioAssetStub: 'audio/vocab_soru.mp3'
    },
    {
      turkishWord: 'Pahalı',
      albanianWord: 'I shtrenjtë',
      category: 'mbiemër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Tregon një vlerë të lartë monetare. Antonimi është ucuz (i lirë).',
      audioAssetStub: 'audio/vocab_pahali.mp3'
    }
  ],
  grammar: [
    {
      titleAlbanian: 'Ekzistencialet: Var / Yok (Ka / Nuk ka)',
      ruleConceptTurkish: '...da/de ... var/yok',
      explanationAlbanian: 'Në turqisht, për të treguar ekzistencën ose mungesën e diçkaje në një vend (struktura *ka / nuk ka*), përdorim fjalët **var** (ka) dhe **yok** (nuk ka) në fund të fjalisë. Vendndodhja shkon në fillim të fjalisë në rasën vendore:\n\n*   **Formula:** [Lokacioni + da/de/ta/te] + [Objekti] + **var / yok**\n*   *Shembull:* Sınıfta kitap **var** (Në klasë ka libër).\n*   *Shembull:* Evde ekmek **yok** (Në shtëpi nuk ka bukë).',
      interactiveExample: null
    },
    {
      titleAlbanian: 'Numrat dhe Pyetja Kaç (Sa?)',
      ruleConceptTurkish: 'Sayılar (bir, iki, üç...) & Kaç?',
      explanationAlbanian: '1. **Numrat Bazë:**\n   • **1:** bir | **2:** iki | **3:** üç | **4:** dört | **5:** beş | **6:** altı | **7:** yedi | **8:** sekiz | **9:** dokuz | **10:** on\n\n2. **Rregulli i Shumësit:** Kur përdorim numra ose sasi, emri që vjen pas tyre **mbetet gjithmonë në njëjës** (nuk merr prapashtesën e shumësit *-lar/-ler*):\n   *Shembull:* Üç kitap (Tre libra - JO: üç kitaplar).\n\n3. **Pyetja Kaç:** Përdoret për të pyetur për sasi. P.sh., *Kaç kitap?* (Sa libra?).',
      interactiveExample: null
    },
    {
      titleAlbanian: 'Pjesëza Pyetëse: mı / mi / mu / mü',
      ruleConceptTurkish: 'Soru Eki (mı / mi / mu / mü)',
      explanationAlbanian: 'Në turqisht, pyetjet që kërkojnë përgjigje *po ose jo* formohen duke shtuar pjesëzën pyetëse **mı, mi, mu, mü**. Kjo pjesëz shkruhet **gjithmonë e ndarë me hapësirë** nga fjala para saj, por i nënshtrohet harmonisë vokalore 4-she:\n\n1. **a, ı** $\\rightarrow$ **mı?** (p.sh. *Bu kitap mı?* - A është ky libër?)\n2. **e, i** $\\rightarrow$ **mi?** (p.sh. *Ev temiz mi?* - A është shtëpia e pastër?)\n3. **o, u** $\\rightarrow$ **mu?** (p.sh. *Bu okul mu?* - A është kjo shkollë?)\n4. **ö, ü** $\\rightarrow$ **mü?** (p.sh. *Gözlük mü?* - A janë syze?)',
      interactiveExample: {
        root: 'kitap',
        strategy: 'question',
        sampleWords: [
          { turkish: 'kitap', albanian: 'libër' },
          { turkish: 'defter', albanian: 'fletore' },
          { turkish: 'okul', albanian: 'shkollë' },
          { turkish: 'süt', albanian: 'qumësht' },
          { turkish: 'Türk', albanian: 'turk' }
        ]
      }
    }
  ],
  exercises: [
    {
      type: 'MULTIPLE_CHOICE',
      promptAlbanian: "Zgjidhni pjesëzën e saktë pyetëse për fjalën 'defter' (A është fletore?):",
      payload: {
        word: 'defter',
        options: ['defter mi?', 'defter mı?', 'defter mu?', 'defter mü?']
      },
      validation: {
        correct_answer: 'defter mi?',
        msg_success: 'E saktë! Zanorja e fundit e fjalës "defter" është "e" (përparme jo-rrumbullakët), prandaj merr "mi?": "defter mi?".',
        msg_failure: 'E pasaktë. Kontrolloni harmoninë 4-she për zanoren "e".'
      }
    },
    {
      type: 'WORD_SORT',
      promptAlbanian: "Renditni fjalët në turqisht për të formuar fjalinë 'Në klasë ka tre nxënës':",
      payload: {
        words: ['üç', 'sınıfta', 'var', 'öğrenci']
      },
      validation: {
        correct_sequence: ['sınıfta', 'üç', 'öğrenci', 'var'],
        msg_success: 'E saktë! Rendi: Lokacioni me lokativ ("sınıfta") + numri ("üç") + nxënës ("öğrenci" në njëjës) + "var" në fund.',
        msg_failure: 'E pasaktë. Mbani mend: Lokacioni + Sasia + Emri (njëjës) + existentiali "var" në fund.'
      }
    },
    {
      type: 'SUFFIX_BUILDER',
      promptAlbanian: "Bashkoni pjesëzën pyetëse të duhur për fjalën 'okul' (shkollë):",
      payload: {
        root: 'okul',
        suffixes: [' mı?', ' mi?', ' mu?', ' mü?']
      },
      validation: {
        correct_suffix: ' mu?',
        result: 'okul mu?',
        msg_success: 'E saktë! Zanorja e fundit e fjalës "okul" është "u" (e prapme e rrumbullakosur), prandaj kërkon pjesëzën pyetëse "mu?": "okul mu?".',
        msg_failure: 'E pasaktë. Rishikoni harmoninë 4-she për zanoren "u".'
      }
    }
  ],
  listening: {
    audioAssetStub: null,
    text: "Mert: Leyla, masada ne var? Leyla: Masada üç kitap ve iki defter var. Mert: Çantada kalem var mı? Leyla: Evet, çantada beş kalem ve bir silgi var. Mert: Sınıfta cetvel var mı? Leyla: Hayır, sınıfta cetvel yok. Mert: Teşekkürler Leyla.",
    translation: "Mert: Leyla, çfarë ka mbi tavolinë? Leyla: Mbi tavolinë ka tre libra dhe dy fletore. Mert: A ka lapsa në çantë? Leyla: Po, në çantë ka pesë lapsa dhe një gomë. Mert: A ka vizore në klasë? Leyla: Jo, në klasë nuk ka vizore. Mert: Faleminderit Leyla.",
    questions: [
      {
        questionTurkish: "Masada kaç kitap var?",
        questionAlbanian: "Sa libra ka mbi tavolinë?",
        options: ["İki kitap", "Üç kitap", "Beş kitap", "On kitap"],
        correctIndex: 1
      },
      {
        questionTurkish: "Sınıfta ne yok?",
        questionAlbanian: "Çfarë nuk ka në klasë?",
        options: ["Kitap", "Defter", "Kalem", "Cetvel"],
        correctIndex: 3
      }
    ]
  }
};
