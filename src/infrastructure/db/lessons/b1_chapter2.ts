import type { UnifiedLesson } from './a1_chapter1';

export const b1Chapter2: UnifiedLesson = {
  id: 22,
  level: 'B1',
  orderIndex: 2,
  title: {
    turkish: 'Yorumlar ve Görüşler',
    albanian: 'Komente dhe opinione'
  },
  reading: {
    layoutStyle: 'dialogue',
    audioAssetStub: null,
    content: [
      {
        speaker: 'Hakan Bey',
        text: 'Merhaba Valbona Hanım, hoş geldiniz. Bugün sizinle pozisyon detaylarını görüşmek ve şirketimizin hedeflerini paylaşmak için toplandık. CV\'nizde harika bir tecrübe geçmişi gördüm.',
        translation: 'Tungjatjeta zonja Valbona, mirë se erdhët. Sot u mblodhëm për të diskutuar (takuar për) detajet e pozicionit me ju dhe për të ndarë synimet e kompanisë sonë. Pashë një përvojë të shkëlqyer në CV-në tuaj.'
      },
      {
        speaker: 'Valbona',
        text: 'Hoş bulduk Hakan Bey. Sizinle tanışmak benim için büyük bir zevk. Şirketinizin projelerini uzun zamandır takip ediyorum ve buradaki çalışma ortamı hakkında olumlu görüşler duydum.',
        translation: 'Mirë se ju gjeta zoti Hakan. Është një kënaqësi e madhe të njihem me ju. Kam kohë që ndjek projektet e kompanisë suaj dhe kam dëgjuar opinione pozitive për mjedisin e punës këtu.'
      },
      {
        speaker: 'Hakan Bey',
        text: 'Bunu duymak çok güzel. Biz ekip çalışmasına büyük önem veriyoruz. Sizce bir ekipte başarılı olmak için çalışanların birbirleriyle nasıl bir iletişim kurması gerekir?',
        translation: 'Më vjen shumë mirë ta dëgjoj këtë. Ne i kushtojmë rëndësi të madhe punës në grup. Si mendoni ju, çfarë lloj komunikimi duhet të krijojnë punonjësit me njëri-tjetrin për të qenë të suksesshëm në një ekip?'
      },
      {
        speaker: 'Valbona',
        text: 'Bence en önemlisi karşılıklı saygı ve paylaşımdır. Ekip üyeleri projeler sırasında açıkça yazışmalı ve her hafta buluşup fikir alışverişinde bulunmalıdır. Sorun çıktığında ise hemen tartışarak ortak bir çözüm aramalıyız.',
        translation: 'Mendoj se më e rëndësishmja është respekti i ndërsjellë dhe shpërndarja (e ideve). Anëtarët e ekipit duhet të shkruhen (korrespondojnë) hapur gjatë projekteve dhe të takohen çdo javë për të shkëmbyer ide. Dhe kur lind një problem, duhet ta diskutojmë menjëherë duke kërkuar një zgjidhje të përbashkët.'
      },
      {
        speaker: 'Hakan Bey',
        text: 'Çok doğru bir noktaya değindiniz. Biz de burada tam olarak bunu yapıyoruz; çalışanlarımız fikirlerini serbestçe söyler ve her zaman saygı çerçevesinde anlaşırlar. Tercihiniz bizimle çalışmak yönünde olursa çok mutlu oluruz.',
        translation: 'Prekët një pikë shumë të drejtë. Edhe ne këtu bëjmë pikërisht këtë; punonjësit tanë i shprehin lirisht idetë e tyre dhe gjithmonë bien dakord (merren vesh) në kuadër të respektit. Nëse preferenca juaj do të jetë të punoni me ne, do të ishim shumë të lumtur.'
      }
    ],
    questions: [
      {
        questionTurkish: 'Hakan Bey ile Valbona ne amaçla bir araya gelmiştir?',
        questionAlbanian: 'Për çfarë qëllimi janë takuar zoti Hakan dhe Valbona?',
        options: [
          'Bir seyahat planı yapmak için.',
          'Pozisyon detaylarını görüşmek ve hedefleri paylaşmak için.',
          'Yeni bir telefon satın almak için.',
          'Sadece çay içip sohbet etmek için.'
        ],
        correctIndex: 1
      },
      {
        questionTurkish: 'Valbona şirket hakkında daha önce ne duymuştur?',
        questionAlbanian: 'Çfarë ka dëgjuar Valbona më parë për kompaninë?',
        options: [
          'Şirketin çok uzak bir yerde olduğunu.',
          'Çalışma ortamı hakkında olumlu görüşler.',
          'Şirketin kapandığını.',
          'Hiç kimsenin orada çalışmak istemediğini.'
        ],
        correctIndex: 1
      },
      {
        questionTurkish: 'Valbona\'ya göre bir ekipte başarılı olmanın en önemli anahtarı nedir?',
        questionAlbanian: 'Sipas Valbonës, cili është çelësi më i rëndësishëm për të qenë i suksesshëm në një ekip?',
        options: [
          'Çok hızlı çalışmak.',
          'Karşılıklı saygı, iletişim ve paylaşım.',
          'Tek başına kararlar almak.',
          'Sadece yöneticinin fikirlerini dinlemek.'
        ],
        correctIndex: 1
      },
      {
        questionTurkish: 'Valbona ekip üyelerinin sorun çıktığında ne yapmalarını öneriyor?',
        questionAlbanian: 'Çfarë sugjeron Valbona të bëjnë anëtarët e ekipit kur lind një problem?',
        options: [
          'Hiç kimseyle konuşmamayı.',
          'Sorunu hemen tartışarak ortak bir çözüm aramayı.',
          'Projeyi tamamen iptal etmeyi.',
          'İşten hemen istifa etmeyi.'
        ],
        correctIndex: 1
      },
      {
        questionTurkish: 'Hakan Bey, şirket çalışanlarının nasıl anlaştığını belirtiyor?',
        questionAlbanian: 'Si tregon zoti Hakan se merren vesh punonjësit e kompanisë?',
        options: [
          'Sadece e-posta yoluyla konuşarak.',
          'Karşılıklı saygı çerçevesinde fikirlerini serbestçe söyleyerek.',
          'Hiç anlaşamayarak sürekli tartışarak.',
          'Yalnızca talimatları yerine getirerek.'
        ],
        correctIndex: 1
      },
      {
        questionTurkish: 'Metinde geçen "hoş bulduk" ifadesi ne zaman kullanılır?',
        questionAlbanian: 'Kur përdoret shprehja "hoş bulduk" e përmendur në tekst?',
        options: [
          'Birisi bizi uğurlarken.',
          'Bir yere hoş geldiniz denildiğinde cevap olarak.',
          'Yeni bir eşya satın alındığında.',
          'Sabah ilk kez uyanıldığında.'
        ],
        correctIndex: 1
      }
    ]
  },
  vocabulary: [
    {
      turkishWord: 'mülakat',
      albanianWord: 'intervistë pune',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Fjalë me origjinë arabe, e përdorur për takime formale vlerësimi.',
      audioAssetStub: null
    },
    {
      turkishWord: 'görüşmek',
      albanianWord: 'takohem / bisedoj',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Folje reciproke nga rrënja "görmek" (shoh). Do të thotë të shihesh reciprokisht.',
      audioAssetStub: null
    },
    {
      turkishWord: 'tanışmak',
      albanianWord: 'njihem',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Folje reciproke nga rrënja "tanımak" (njoh). Kuptimi: të njihni njëri-tjetrin.',
      audioAssetStub: null
    },
    {
      turkishWord: 'anlaşmak',
      albanianWord: 'merrem vesh / bie dakord',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Nga folja "anlamak" (kuptoj). Kuptimi: të kuptoheni reciprokisht.',
      audioAssetStub: null
    },
    {
      turkishWord: 'buluşmak',
      albanianWord: 'takohem / mblidhem',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Nga folja "bulmak" (gjej). Kuptimi: të gjeni njëri-tjetrin në një vend.',
      audioAssetStub: null
    },
    {
      turkishWord: 'tartışmak',
      albanianWord: 'diskutoj / debatoj',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Nga folja "tartmak" (peshoj). Kuptimi: të peshoni idetë me njëri-tjetrin.',
      audioAssetStub: null
    },
    {
      turkishWord: 'yazışmak',
      albanianWord: 'shkruhem / korrespondoj',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Nga folja "yazmak" (shkruaj). Kuptimi: të shkruani letra ose mesazhe reciprokisht.',
      audioAssetStub: null
    },
    {
      turkishWord: 'fikir',
      albanianWord: 'ide / mendim',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Huazim i përbashkët ballkanik (Fikir) i përdorur shpesh në të dyja gjuhët.',
      audioAssetStub: null
    },
    {
      turkishWord: 'karşılıklı',
      albanianWord: 'i/e ndërsjellë / reciproke',
      category: 'mbiemër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Nga "karşı" (përballë) me prapashtesën e ndërtimit të mbiemrave.',
      audioAssetStub: null
    },
    {
      turkishWord: 'tercih etmek',
      albanianWord: 'preferoj',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Folje e përbërë me foljen ndihmëse "etmek" dhe emrin "tercih" (zgjedhje).',
      audioAssetStub: null
    },
    {
      turkishWord: 'saygı',
      albanianWord: 'respekt',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Nga folja "saymak" (respektoj / numëroj).',
      audioAssetStub: null
    },
    {
      turkishWord: 'paylaşmak',
      albanianWord: 'ndaj / shpërndaj',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Nga emri "pay" (pjesë/porcion). Kuptimi: ndajmë pjesë së bashku.',
      audioAssetStub: null
    },
    {
      turkishWord: 'tecrübe',
      albanianWord: 'përvojë / eksperiencë',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Huazim nga arabishtja, i njohur edhe në shqip në gjuhën e vjetër (teçribe).',
      audioAssetStub: null
    },
    {
      turkishWord: 'aday',
      albanianWord: 'kandidat',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'I referohet dikujt që kandidon për një pozicion pune ose zgjedhje.',
      audioAssetStub: null
    },
    {
      turkishWord: 'şirket',
      albanianWord: 'kompani / shoqëri',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Huazim nga arabishtja (Şerket/Şirket), e njohur në treva të ndryshme shqiptare.',
      audioAssetStub: null
    },
    {
      turkishWord: 'seçenek',
      albanianWord: 'zgjedhje / opsion',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Nga folja "seçmek" (zgjedh).',
      audioAssetStub: null
    },
    {
      turkishWord: 'katılmak',
      albanianWord: 'marr pjesë / bashkohem',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Forma pasive e foljes "katmak" (shtoj / përziej).',
      audioAssetStub: null
    },
    {
      turkishWord: 'görüş',
      albanianWord: 'mendim / opinion',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Nga folja "germek" (shoh), kuptimi i parë është "pamje" ose "vizion".',
      audioAssetStub: null
    },
    {
      turkishWord: 'iletişim',
      albanianWord: 'komunikim',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Nga folja "iletmek" (përcjell/transmetoj).',
      audioAssetStub: null
    },
    {
      turkishWord: 'ortak',
      albanianWord: 'i përbashkët',
      category: 'mbiemër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë e përbashkët ballkanike (Ortak), e përdorur edhe si emër për "partner".',
      audioAssetStub: null
    }
  ],
  grammar: [
    {
      titleAlbanian: 'Foljet Reciproke (Mutual Voice - -(I)ş)',
      ruleConceptTurkish: 'İşteş Fiiller - Karşılıklı Eylemler',
      explanationAlbanian: 'Në turqisht, foljet reciproke (İşteş Fiil) tregojnë veprime që kryhen midis dy ose më shumë personave në mënyrë të ndërsjellë ("njëri-tjetrit"). Kjo formohet duke shtuar prapashtesën **-(ı)ş / -(i)ş / -(u)ş / -(ü)ş** në rrënjën e foljes që përfundon me bashkëtingëllore, ose thjesht **-ş** nëse rrënja përfundon me zanore.\n\n*Formimi me rrënjë bashkëtingëllore:*\n• **Gör-** (shoh) ➔ **Görüşmek** (takohem/bisedoj - shohim njëri-tjetrin)\n• **Bak-** (shikoj) ➔ **Bakışmak** (shikohemi me njëri-tjetrin)\n• **Yaz-** (shkruaj) ➔ **Yazışmak** (shkruhemi / korrespondojmë me mesazhe)\n\n*Formimi me rrënjë zanore:*\n• **Tanı-** (njoh) ➔ **Tanışmak** (njihemi me njëri-tjetrin)\n• **Anla-** (kuptoj) ➔ **Anlaşmak** (merremi vesh / biem dakord)',
      interactiveExample: null
    },
    {
      titleAlbanian: 'Foljet Reciproke - Veprime të Përbashkëta / Kolektive',
      ruleConceptTurkish: 'İşteş Fiiller - Birlikte Yapılan Eylemler',
      explanationAlbanian: 'Përveç veprimeve të ndërsjella (karşılıklı), prapashtesa reciproke **-(I)ş** përdoret gjithashtu për të treguar veprime që kryhen nga shumë persona së bashku në të njëjtën kohë (birlikte yapılan eylemler):\n\n• **Buluşmak** (takohem/mblidhem) ➔ Nga rrënja "bulmak" (gjej). Kuptimi është që njerëzit gjejnë njëri-tjetrin së bashku në një vend.\n• **Gülüşmek** (qeshin së bashku) ➔ Nga rrënja "gülmek" (qesh).\n• **Kaçışmak** (ika në drejtime të ndryshme) ➔ Nga rrënja "kaçmak" (iki).\n• **Uçuşmak** (fluturojnë së bashku) ➔ Nga rrënja "uçmak" (fluturoj).',
      interactiveExample: {
        root: 'gör',
        strategy: 'is',
        sampleWords: [
          { turkish: 'gör', albanian: 'görüşmek (takohem)' },
          { turkish: 'yaz', albanian: 'yazışmak (shkruhem)' },
          { turkish: 'bak', albanian: 'bakışmak (shikohemi)' },
          { turkish: 'tanı', albanian: 'tanışmak (njihem)' },
          { turkish: 'anla', albanian: 'anlaşmak (merrem vesh)' }
        ]
      }
    },
    {
      titleAlbanian: 'Krahasimi me Shqipen (Foljet Vetvetore dhe Reciproke)',
      ruleConceptTurkish: 'Türkçe ve Arnavutça Karşılaştırmalı Dilbilgisi',
      explanationAlbanian: 'Në gjuhën shqipe, kuptimi reciprok shprehet zakonisht përmes trajtave vetvetore me pjesëzën **u** (p.sh. *u takuam*, *u njohëm*) ose duke përdorur shprehje si *me njëri-tjetrin*.\n\nKur përkthejmë në shqip, është e rëndësishme të kuptojmë se:\n1. Shumë folje që në shqip kërkojnë pjesëzën "u" (p.sh. *merrem vesh*), në turqisht marrin thjesht prapashtesën reciproke (p.sh. *anlaşmak*).\n2. Prapashtesa **-(I)ş** nuk duhet ngatërruar me prapashtesën pasive **-(I)l / -n**. Reciprokja kërkon gjithmonë pjesëmarrjen aktive të të paktën dy palëve që bashkëveprojnë.',
      interactiveExample: null
    }
  ],
  exercises: [
    {
      type: 'MULTIPLE_CHOICE',
      promptAlbanian: 'Zgjidhni foljen e saktë reciproke për fjalinë: "Biz her gün e-posta ile..." (Ne shkruhemi çdo ditë me e-mail...)',
      payload: {
        word: 'yazış',
        options: ['yazışıyoruz', 'yazıyoruz', 'yazıştık', 'yazdırdık']
      },
      validation: {
        correct_answer: 'yazışıyoruz',
        msg_success: 'E saktë! Folja "yazışıyoruz" (shkruhemi) tregon veprim reciprok në kohën e tashme për vetën e parë shumës.',
        msg_failure: 'E pasaktë. "yazıyoruz" do të thotë "shkruajmë" (jo reciproke). Zgjidhni formën reciproke me "-iş-".'
      }
    },
    {
      type: 'WORD_SORT',
      promptAlbanian: 'Renditni fjalët për të formuar fjalinë: "Ata u takuan në kafene për të biseduar për punë"',
      payload: {
        words: ['buluştular', 'görüşmek', 'kafede', 'için', 'İş']
      },
      validation: {
        correct_sequence: ['İş', 'görüşmek', 'için', 'kafede', 'buluştular'],
        msg_success: 'E saktë! Renditja është: Qëllimi (İş görüşmek için) + vendi (kafede) + folja reciproke në fund (buluştular).',
        msg_failure: 'E pasaktë. Kujdes që qëllimi "İş görüşmek için" të jetë në fillim dhe folja reciproke në fund.'
      }
    },
    {
      type: 'SUFFIX_BUILDER',
      promptAlbanian: 'Bashkoni prapashtesën e duhur reciproke për rrënjën "gör" (shoh) për të formuar foljen "görüş" (takohem / shihem):',
      payload: {
        root: 'gör',
        suffixes: ['üş', 'iş', 'ş', 'uş']
      },
      validation: {
        correct_suffix: 'üş',
        result: 'görüş',
        msg_success: 'E saktë! Rrënja "gör" ka zanoren e rrumbullakosur "ö", prandaj sipas harmonisë vokalore 4-she merr prapashtesën "-üş".',
        msg_failure: 'E pasaktë. Kontrolloni harmoninë 4-she për zanoren "ö".'
      }
    },
    {
      type: 'MULTIPLE_CHOICE',
      promptAlbanian: 'Zgjidhni foljen e saktë reciproke për fjalinë: "Biz onunla geçen yıl..." (Ne u njohëm me të vitin e kaluar...)',
      payload: {
        word: 'tanış',
        options: ['tanıştık', 'tanıdık', 'anlaştık', 'görüştük']
      },
      validation: {
        correct_answer: 'tanıştık',
        msg_success: 'E saktë! Folja "tanışmak" do të thotë "njihem". Prapashtesa e së shkuarës për "biz" është "-tık". Rezultati: "tanıştık" (u njohëm).',
        msg_failure: 'E pasaktë. "tanıdık" do të thotë "ne njohëm" (jo reciproke) dhe "anlaştık" do të thotë "ne ramë dakord".'
      }
    },
    {
      type: 'WORD_SORT',
      promptAlbanian: 'Renditni fjalët për të formuar fjalinë: "Nëse ndajmë idetë tona, punojmë më lehtë"',
      payload: {
        words: ['çalışırız', 'kolay', 'paylaşırsak', 'daha', 'Fikirlerimizi']
      },
      validation: {
        correct_sequence: ['Fikirlerimizi', 'paylaşırsak', 'daha', 'kolay', 'çalışırız'],
        msg_success: 'E saktë! Renditja është: Objekti (Fikirlerimizi) + kushtorja reciproke (paylaşırsak) + rrethanori (daha kolay) + folja në fund (çalışırız).',
        msg_failure: 'E pasaktë. Vendosni objektin dhe kushtoren në fillim, dhe folja "çalışırız" në fund.'
      }
    },
    {
      type: 'SUFFIX_BUILDER',
      promptAlbanian: 'Bashkoni prapashtesën e duhur reciproke për rrënjën "anla" (kuptoj) për të formuar foljen "anlaş" (bie dakord / merrem vesh):',
      payload: {
        root: 'anla',
        suffixes: ['ş', 'ış', 'uş', 'iş']
      },
      validation: {
        correct_suffix: 'ş',
        result: 'anlaş',
        msg_success: 'E saktë! Rrënja "anla" përfundon me zanoren "a", prandaj sipas rregullit shtohet vetëm "-ş" pa zanorinë ndërmjetësuese.',
        msg_failure: 'E pasaktë. Meqenëse rrënja përfundon me zanore, nuk ka nevojë për zanorinë ndërmjetësuese në prapashtesë.'
      }
    }
  ]
};
