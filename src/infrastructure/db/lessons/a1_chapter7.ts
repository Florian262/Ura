import type { UnifiedLesson } from './a1_chapter1';

export const a1Chapter7: UnifiedLesson = {
  id: 12,
  level: 'A1',
  orderIndex: 7,
  title: {
    turkish: 'Pazar ve Alışveriş',
    albanian: 'Pazari dhe Blerjet'
  },
  reading: {
    layoutStyle: 'dialogue',
    audioAssetStub: 'audio/chapter7_reading.mp3',
    content: [
      { speaker: 'Leyla', text: 'Ahmet, pazardan ne alıyorsun?', translation: 'Ahmet, çfarë po blen nga pazari?' },
      { speaker: 'Ahmet', text: 'Bir kilo çilek ve iki kilo elma alıyorum. Sen ne alıyorsun?', translation: 'Po blej një kilogram luleshtrydhe dhe dy kilogramë mollë. Po ti çfarë po blen?' },
      { speaker: 'Leyla', text: 'Ben sebze alıyorum. Domatesi ve biberi çok seviyorum.', translation: 'Unë po blej perime. Domatet dhe specat i dua shumë.' },
      { speaker: 'Ahmet', text: 'Harika! Meyveyi ve sebzeyi taze yemek çok sağlıklı.', translation: 'E mrekullueshme! Të hash fruta dhe perime të freskëta është shumë e shëndetshme.' },
      { speaker: 'Leyla', text: 'Evet, haklısın. İyi alışverişler!', translation: 'Po, ke të drejtë. Blerje të mbara!' }
    ],
    questions: [
      {
        questionTurkish: 'Ahmet pazardan ne alıyor?',
        questionAlbanian: 'Çfarë po blen Ahmeti nga pazari?',
        options: [
          'Domates ve biber',
          'Çilek ve elma',
          'Müzik dinliyor',
          'Kitap okuyor'
        ],
        correctIndex: 1
      },
      {
        questionTurkish: 'Leyla neyi çok seviyor?',
        questionAlbanian: 'Çfarë i pëlqen shumë Leylas?',
        options: [
          'Meyveyi',
          'Domatesi ve biberi',
          'Sütü',
          'Kitabı'
        ],
        correctIndex: 1
      }
    ]
  },
  vocabulary: [
    {
      turkishWord: 'Alışveriş',
      albanianWord: 'Blerje / Pazari',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Fjalë për fjalë: marrje-dhënie (al-ış-ver-iş).',
      audioAssetStub: 'audio/vocab_alisveris.mp3'
    },
    {
      turkishWord: 'Meyve',
      albanianWord: 'Frutë',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë e përbashkët ballkanike e huazuar (pemë/frutë).',
      audioAssetStub: 'audio/vocab_meyve.mp3'
    },
    {
      turkishWord: 'Sebze',
      albanianWord: 'Perime',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë e përbashkët ballkanike (zarzavate/perime).',
      audioAssetStub: 'audio/vocab_sebze.mp3'
    },
    {
      turkishWord: 'Çilek',
      albanianWord: 'Luleshtrydhe',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Mbaron me bashkëtingëlloren \'k\', e cila zbutet në rasën kallëzore (çileği).',
      audioAssetStub: 'audio/vocab_cilek.mp3'
    },
    {
      turkishWord: 'Elma',
      albanianWord: 'Mollë',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Mbaron me zanoren \'a\', kështu që merr buffer \'y\' (elmayı).',
      audioAssetStub: 'audio/vocab_elma.mp3'
    },
    {
      turkishWord: 'Taze',
      albanianWord: 'I freskët',
      category: 'mbiemër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Huazim i përbashkët ballkanik (taze).',
      audioAssetStub: 'audio/vocab_taze.mp3'
    },
    {
      turkishWord: 'Kilo',
      albanianWord: 'Kilogram',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Njësi matëse për peshën.',
      audioAssetStub: 'audio/vocab_kilo.mp3'
    },
    {
      turkishWord: 'Fiyat',
      albanianWord: 'Çmim / Fiyat',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Huazim popullor ballkanik nga arabishtja (fijat).',
      audioAssetStub: 'audio/vocab_fiyat.mp3'
    }
  ],
  grammar: [
    {
      titleAlbanian: 'Rasa Kallëzore (Belirtme Durumu)',
      ruleConceptTurkish: '-ı / -i / -u / -ü (-yı / -yi ...)',
      explanationAlbanian: 'Rasa kallëzore tregon një kundrinë të drejtë të shquar (objekt specifik) dhe u përgjigjet pyetjeve **Neyi? (Çfarë?)** ose **Kimi? (Kë?)**. Prapashtesat formohen sipas harmonisë vokalore 4-she:\n\n1. **a, ı** -> marrin **-ı** (p.sh., *Elma* -> *Elmayı*)\n2. **e, i** -> marrin **-i** (p.sh., *Defter* -> *Defteri*)\n3. **o, u** -> marrin **-u** (p.sh., *Doktor* -> *Doktoru*)\n4. **ö, ü** -> marrin **-ü** (p.sh., *Süt* -> *Sütü*)\n\n*Vini Re:* Nëse emri mbaron me zanore, shtohet **y** ndërmjetësuese (p.sh. *Meyve* -> *Meyveyi*).',
      interactiveExample: null
    },
    {
      titleAlbanian: 'Rregulli i Zbutjes KETÇAP në Rasën Kallëzore',
      ruleConceptTurkish: 'kitap -> kitabı (Ahmet -> Ahmet\'i)',
      explanationAlbanian: 'Në rasën kallëzore zbatohen dy rregulla të rëndësishme për bashkëtingëlloret e fortë:\n\n*   **Emrat e përgjithshëm:** Zbuten në shkrim (p.sh. *Kitap* -> *Kitabı*, *Çilek* -> *Çileği*).\n*   **Emrat e përveçëm (Emra, Qytete, Shtete):** Nuk pësojnë zbutje në shkrim, por ndahen me apostrof (p.sh. *Ahmet* -> *Ahmet\'i* / e shqiptojmë Ahmedi, por e shkruajmë Ahmet\'i).',
      interactiveExample: {
        root: 'çilek',
        strategy: 'accusative',
        sampleWords: [
          { turkish: 'çilek', albanian: 'luleshtrydhe' },
          { turkish: 'elma', albanian: 'mollë' },
          { turkish: 'kitap', albanian: 'libër' },
          { turkish: 'süt', albanian: 'qumësht' },
          { turkish: 'Ahmet', albanian: 'Ahmet' },
          { turkish: 'renk', albanian: 'ngjyrë' }
        ]
      }
    }
  ],
  exercises: [
    {
      type: 'MULTIPLE_CHOICE',
      promptAlbanian: "Zgjidhni formën e saktë të prapashtesës kallëzore (accusative) për fjalën 'çilek' (Unë po blej luleshtrydhen):",
      payload: {
        word: 'çilek',
        options: ['çileki', 'çileği', 'çilekyi', 'çilekda']
      },
      validation: {
        correct_answer: 'çileği',
        msg_success: 'E saktë! Rrënja "çilek" përfundon me "k" (e fortë), e cila zbutet në "ğ" sepse pasohet nga një zanore, duke dhënë formën "çileği".',
        msg_failure: 'E pasaktë. Rishikoni zbutjen e bashkëtingëlloreve "k" -> "ğ" te emrat e përgjithshëm.'
      }
    },
    {
      type: 'WORD_SORT',
      promptAlbanian: "Renditni fjalët për të formuar fjalinë 'Unë i dua shumë frutat e freskëta':",
      payload: {
        words: ['seviyorum', 'taze meyveyi', 'Ben', 'çok']
      },
      validation: {
        correct_sequence: ['Ben', 'taze meyveyi', 'çok', 'seviyorum'],
        msg_success: 'E saktë! Rendi i fjalëve: Subjekti + Objekti i përcaktuar + Ndajfolja + Folja në fund.',
        msg_failure: 'E pasaktë. Rendi: Subjekti + Objekti (kallëzore) + Sasia/Mënyra + Folja.'
      }
    },
    {
      type: 'SUFFIX_BUILDER',
      promptAlbanian: "Tërhiqni dhe bashkoni prapashtesën e duhur kallëzore (accusative) për fjalën 'Ahmet' (Ahmet):",
      payload: {
        root: 'Ahmet',
        suffixes: ["'i", "i", "'ı", "yi"]
      },
      validation: {
        correct_suffix: "'i",
        result: "Ahmet'i",
        msg_success: 'E saktë! "Ahmet" është emër i përveçëm, prandaj merr apostrofin pa ndryshuar shkronjën "t" në shkrim, duke u plotësuar me prapashtesën e harmonisë 4-she "-i".',
        msg_failure: 'E pasaktë. Mos harroni apostrofin... shkronja "t" nuk ndryshon.'
      }
    }
  ],
  listening: {
    audioAssetStub: null,
    text: "Pazarcı: Merhaba, hoş geldiniz! Taze elma ve çilek var. Müşteri: Merhaba, hoş bulduk. Elmanın kilosu ne kadar? Pazarcı: Elmanın kilosu yirmi lira, çileğin kilosu otuz lira. Müşteri: İki kilo elma ve bir kilo çilek istiyorum. Toplam ne kadar? Pazarcı: Toplam yetmiş lira efendim. Buyurun. Müşteri: Teşekkürler, iyi çalışmalar.",
    translation: "Shitësi: Tungjatjeta, mirë se vini! Ka mollë dhe luleshtrydhe të freskëta. Klienti: Tungjatjeta, mirë se ju gjetëm. Sa kushton një kilogram mollë? Shitësi: Një kilogram mollë kushton njëzet lira, një kilogram luleshtrydhe tridhjetë lira. Klienti: Dua dy kilogramë mollë dhe një kilogram luleshtrydhe. Sa bëjnë gjithsej? Shitësi: Gjithsej shtatëdhjetë lira zotëri. Urdhëroni. Klienti: Faleminderit, punë të mbarë.",
    questions: [
      {
        questionTurkish: "Elmanın kilosu ne kadardır?",
        questionAlbanian: "Sa kushton një kilogram mollë?",
        options: ["On lira", "Yirmi lira", "Otuz lira", "Yetmiş lira"],
        correctIndex: 1
      },
      {
        questionTurkish: "Müşteri ne kadar çilek istiyor?",
        questionAlbanian: "Sa luleshtrydhe dëshiron klienti?",
        options: ["İki kilo", "Üç kilo", "Bir kilo", "Yarım kilo"],
        correctIndex: 2
      }
    ]
  }
};
