import type { UnifiedLesson } from './a1_chapter1';

export const a1Chapter4: UnifiedLesson = {
  id: 9,
  level: 'A1',
  orderIndex: 4,
  title: {
    turkish: 'Günlük Hayat ve Şimdiki Zaman',
    albanian: 'Jeta e Përditshme dhe Koha e Tashme'
  },
  reading: {
    layoutStyle: 'narrative',
    audioAssetStub: 'audio/chapter4_reading.mp3',
    content: [
      { text: 'Her sabah erken uyanıyorum. Kahvaltı yapıyorum ve okula gidiyorum. Okulda arkadaşlarımla Türkçe konuşuyorum.', translation: 'Çdo mëngjes zgjohem herët. Ha mëngjes dhe shkoj në shkollë. Në shkollë flas turqisht me miqtë e mi.' },
      { text: 'Öğleden sonra eve dönüyorum ve kitap okuyorum. Akşamları müzik dinliyorum. Günüm çok güzel geçiyor!', translation: 'Pasdite kthehem në shtëpi dhe lexoj një libër. Mbrëmjeve dëgjoj muzikë. Dita ime kalon shumë bukur!' }
    ],
    questions: [
      {
        questionTurkish: 'Anlatıcı sabahları ne yapıyor?',
        questionAlbanian: 'Çfarë bën tregimtari në mëngjes?',
        options: [
          'Kitap okuyor',
          'Müzik dinliyor',
          'Kahvaltı yapıyor',
          'Eve dönüyor'
        ],
        correctIndex: 2
      },
      {
        questionTurkish: 'Anlatıcı okulda ne yapıyor?',
        questionAlbanian: 'Çfarë bën tregimtari në shkollë?',
        options: [
          'Türkçe konuşuyor',
          'Müzik dinliyor',
          'Uyumak',
          'Yemek yemek'
        ],
        correctIndex: 0
      }
    ]
  },
  vocabulary: [
    {
      turkishWord: 'Uyanmak',
      albanianWord: 'Zgjohem',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Folje bazë për fillimin e ditës.',
      audioAssetStub: 'audio/vocab_uyanmak.mp3'
    },
    {
      turkishWord: 'Kahvaltı',
      albanianWord: 'Mëngjesi (ushqimi)',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Fjalë për fjalë do të thotë \'nën kafe\' (kahve altı).',
      audioAssetStub: 'audio/vocab_kahvalti.mp3'
    },
    {
      turkishWord: 'Gitmek',
      albanianWord: 'Shkoj',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Folje e rregullt që pëson ndryshim bashkëtingëlloreje: git -> gidiyorum.',
      audioAssetStub: 'audio/vocab_gitmek.mp3'
    },
    {
      turkishWord: 'Konuşmak',
      albanianWord: 'Flas',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Tregon veprimin e të folurit.',
      audioAssetStub: 'audio/vocab_konusmak.mp3'
    },
    {
      turkishWord: 'Okumak',
      albanianWord: 'Lexoj',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Rrënja mbaron me zanore \'u\', prandaj nuk ka nevojë për zanore ndërmjetësuese.',
      audioAssetStub: 'audio/vocab_okumak.mp3'
    },
    {
      turkishWord: 'Dinlemek',
      albanianWord: 'Dëgjoj',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Zanorja \'e\' në fund pëson ngushtim kur shtohet -iyor: dinliyorum.',
      audioAssetStub: 'audio/vocab_dinlemek.mp3'
    },
    {
      turkishWord: 'Dönmek',
      albanianWord: 'Kthehem',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Marr prapashtesën sipas harmonisë 4-she (dönüyorum).',
      audioAssetStub: 'audio/vocab_donmek.mp3'
    },
    {
      turkishWord: 'Her gün',
      albanianWord: 'Çdo ditë',
      category: 'ndajfolje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Shprehje kohore e përdorur shpesh me kohën e tashme.',
      audioAssetStub: 'audio/vocab_hergun.mp3'
    }
  ],
  grammar: [
    {
      titleAlbanian: 'Koha e Tashme (-iyor)',
      ruleConceptTurkish: 'Şimdiki Zaman (-iyorum)',
      explanationAlbanian: 'Koha e tashme (Şimdiki Zaman) tregon veprime që po ndodhin tani. Ajo formohet me prapashtesën vetore përkatëse pas treguesit të kohës \'-iyor\':\n\n*   **Ben (Unë):** -iyorum / -ıyorum / -uyorum / -üyorum\n*   **Sen (Ti):** -iyorsun / -ıyorsun...\n*   **O (Ai/Ajo):** -iyor / -ıyor...\n\nZgjedhja e zanores fillestare të prapashtesës përcaktohet nga harmonia vokalore 4-she.',
      interactiveExample: null
    },
    {
      titleAlbanian: 'Ngushtimi dhe Ndryshimet',
      ruleConceptTurkish: 'Ünlü Daralması & KETÇAP',
      explanationAlbanian: 'Koha e tashme përfshin dy rregulla të rëndësishme fonetike:\n\n1.  **Ngushtimi Vokal:** Nëse rrënja e foljes përfundon me \'a\' ose \'e\' (p.sh. *dinle*), kjo zanore bie dhe zëvendësohet me zanoren e ngushtë përkatëse (\'ı\', \'i\', \'u\', \'ü\') para prapashtesës \'-yorum\' (p.sh. *dinle* -> *dinliyorum*).\n2.  **Zbutja e Bashkëtingëlloreve:** Verbi *gitmek* (shkoj) dhe *etmek* (bëj) pësojnë zbutje të \'t\' në \'d\' kur marrin prapashtesën fillestare vokalike (p.sh. *git* -> *gidiyorum*).',
      interactiveExample: {
        root: 'gel',
        strategy: 'present_continuous',
        sampleWords: [
          { turkish: 'gel', albanian: 'vjen' },
          { turkish: 'yaz', albanian: 'shkruan' },
          { turkish: 'oku', albanian: 'lexon' },
          { turkish: 'git', albanian: 'shkon' },
          { turkish: 'dinle', albanian: 'dëgjon' }
        ]
      }
    }
  ],
  exercises: [
    {
      type: 'MULTIPLE_CHOICE',
      promptAlbanian: "Zgjidhni formën e saktë të kohës së tashme (Ben) për foljen 'git' (shkoj):",
      payload: {
        word: 'git',
        options: ['gitihorum', 'gidiyorum', 'gityorum', 'gitiorum']
      },
      validation: {
        correct_answer: 'gidiyorum',
        msg_success: 'E saktë! Rrënja "git" pëson zbutje të bashkëtingëlloreve ("t" -> "d") dhe merr zanoren ndërmjetësuese "i", duke dhënë "gidiyorum".',
        msg_failure: 'E pasaktë. Kontrolloni zbutjen e "t" -> "d" dhe harmoninë 4-she.'
      }
    },
    {
      type: 'WORD_SORT',
      promptAlbanian: "Renditni fjalët për të formuar fjalinë 'Çdo ditë lexoj libër në shtëpi':",
      payload: {
        words: ['kitap', 'Her gün', 'okuyorum', 'evde']
      },
      validation: {
        correct_sequence: ['Her gün', 'evde', 'kitap', 'okuyorum'],
        msg_success: 'E saktë! Shprehja kohore shkon në fillim, ndjekur nga vendndodhja, objekti dhe folja e zgjedhuar në fund.',
        msg_failure: 'E pasaktë. Rendi i fjalëve: Koha + Vendi + Objekti + Folja.'
      }
    },
    {
      type: 'SUFFIX_BUILDER',
      promptAlbanian: "Bashkoni prapashtesën e duhur të kohës së tashme për vetën e parë (Ben) për foljen 'gel' (vjen):",
      payload: {
        root: 'gel',
        suffixes: ['iyorum', 'ıyorum', 'yorum', 'üyorum']
      },
      validation: {
        correct_suffix: 'iyorum',
        result: 'geliyorum',
        msg_success: 'E saktë! Rrënja "gel" mbaron me bashkëtingëllore dhe ka zanoren e përparme "e", prandaj merr "-iyiorm" / "-iyorum": "geliyorum".',
        msg_failure: 'E pasaktë. Rishikoni harmoninë vokalore 4-she për zanoren "e".'
      }
    }
  ],
  listening: {
    audioAssetStub: null,
    text: "Can: Merhaba Murat! Hafta sonu ne yapıyorsun? Murat: Genellikle sabahları erken kalkıyorum. Parkta koşuyorum ve kahvaltı yapıyorum. Can: Harika! Öğleden sonra ne yapıyorsun? Murat: Türkçe çalışıyorum ve kitap okuyorum. Akşamları ise arkadaşlarımla buluşuyorum veya sinemaya gidiyorum. Sen ne yapıyorsun? Can: Ben de evde dinleniyorum ve müzik dinliyorum.",
    translation: "Can: Përshëndetje Murat! Çfarë bën gjatë fundjavës? Murat: Zakonisht zgjohem herët në mëngjes. Vrapoj në park dhe ha mëngjes. Can: Shkëlqyeshëm! Çfarë bën pasdite? Murat: Studioj turqisht dhe lexoj libra. Kurse mbrëmjeve takohem me miqtë ose shkoj në kinema. Po ti çfarë bën? Can: Edhe unë po çlodhem në shtëpi dhe po dëgjoj muzikë.",
    questions: [
      {
        questionTurkish: "Murat hafta sonu sabahları ne yapıyor?",
        questionAlbanian: "Çfarë bën Murati në mëngjeset e fundjavës?",
        options: ["Müzik dinliyor", "Parkta koşuyor ve kahvaltı yapıyor", "Türkçe çalışıyor", "Uyumaya devam ediyor"],
        correctIndex: 1
      },
      {
        questionTurkish: "Can hafta sonu ne yapıyor?",
        questionAlbanian: "Çfarë bën Xhani gjatë fundjavës?",
        options: ["Sinemaya gidiyor", "Evde dinleniyor ve müzik dinliyor", "Koşuyor", "İşe gidiyor"],
        correctIndex: 1
      }
    ]
  }
};
