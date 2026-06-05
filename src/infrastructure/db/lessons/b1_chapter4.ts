import type { UnifiedLesson } from './a1_chapter1';

export const b1Chapter4: UnifiedLesson = {
  id: 24,
  level: 'B1',
  orderIndex: 4,
  title: {
    turkish: 'Gelin Tanış Olalım',
    albanian: 'Ejani të njihemi'
  },
  reading: {
    layoutStyle: 'dialogue',
    audioAssetStub: null,
    content: [
      {
        speaker: 'Ahmet',
        text: 'Valbona Hanım, merhaba. Yeni kiraladığınız eve taşındınız mı? Nasıl, yerleşebildiniz mi? Beyaz eşyalarınızı satın alıp garanti belgelerini imzaladınız mı?',
        translation: 'Valbona Hanım, përshëndetje. A u shpërngulët në shtëpinë e re që morët me qira? Si është, a u vendosët dot? A i bletë pajisjet elektroshtëpiake dhe i nënshkruat dokumentet e garancisë?'
      },
      {
        speaker: 'Valbona',
        text: 'Merhaba Ahmet Bey. Evet, geçen hafta taşındım ve yavaş yavaş yerleşiyorum. Çamaşır makinesini kurdurttum, fakat buzdolabının teslim edilmesini bekliyorum. Türkçe çalışmaya başladığımdan beri ev işlerine daha az vakit ayırabiliyorum.',
        translation: 'Përshëndetje zoti Ahmet. Po, u shpërngula javën e kaluar dhe po vendosem pak nga pak. E bëra të instalohet lavatriçen, por po pres dorëzimin e frigoriferit. Që kur kam filluar të studioj turqisht, mund t\'i kushtoj më pak kohë punëve të shtëpisë.'
      },
      {
        speaker: 'Ahmet',
        text: 'Kolay gelsin. Yeni bir eve alışmak zordur ama kurallara dikkat etmelisiniz. Apartmanda komşuları rahatsız etmemek için gürültü yapmamalıyız. Ayrıca çöp toplama saatlerine uymamız gerekir.',
        translation: 'Ju ndihmoftë zoti. Të mësohesh me një shtëpi të re është e vështirë, por duhet t\'u kushtoni vëmendje rregullave. Në pallat nuk duhet të bëjmë zhurmë për të mos shqetësuar fqinjtë. Gjithashtu, duhet të respektojmë oraret e grumbullimit të plehrave.'
      },
      {
        speaker: 'Valbona',
        text: 'Haklısınız, kurallara uymak çok önemli. Ben de komşularımla tanışıp apartman kurallarını öğrendim. Türkçe öğrenmeye başladığımdan beri komşularımla Türkçe konuşarak pratik yapıyorum.',
        translation: 'Keni të drejtë, respektimi i rregullave është shumë i rëndësishëm. Edhe unë u njoha me fqinjtë e mi dhe i mësova rregullat e pallatit. Që kur kam filluar të mësoj turqisht, ushtrohem duke folur turqisht med fqinjtë e mi.'
      },
      {
        speaker: 'Ahmet',
        text: 'Harika bir yöntem! Dil öğrenmek için pratik yapmak şarttır. Eğer herhangi bir şeye ihtiyacınız olursa, lütfen bana söyleyin. Yeni evinizde huzurla yaşamanızı dilerim.',
        translation: 'Metodë e shkëlqyer! Për të mësuar një gjuhë është e domosdoshme të ushtrohesh. Nëse keni nevojë për ndonjë gjë, ju lutem më thoni. Ju uroj të jetoni me qetësi në shtëpinë tuaj të re.'
      }
    ],
    questions: [
      {
        questionTurkish: 'Valbona yeni eviyle ilgili ne yapmıştır?',
        questionAlbanian: 'Çfarë ka bërë Valbona lidhur me shtëpinë e saj të re?',
        options: [
          'Evi hemen satmıştır.',
          'Geçen hafta taşınmış ve yavaş yavaş yerleşmektedir.',
          'Evi beğenmeyip başka yere gitmiştir.',
          'Komşularıyla tartışmıştır.'
        ],
        correctIndex: 1
      },
      {
        questionTurkish: 'Valbona hangi beyaz eşyanın teslim edilmesini beklemektedir?',
        questionAlbanian: 'Cilën pajisje elektroshtëpiake po pret Valbona të dorëzohet?',
        options: [
          'Buzdolabı.',
          'Televizyon.',
          'Ütü.',
          'Fırın.'
        ],
        correctIndex: 0
      },
      {
        questionTurkish: 'Valbona neden ev işlerine daha az vakit ayırabiliyor?',
        questionAlbanian: 'Përse Valbona mund t\'i kushtojë më pak kohë punëve të shtëpisë?',
        options: [
          'Çok fazla uyuduğu için.',
          'Sadece televizyon izlediği için.',
          'Türkçe çalışmaya başladığından beri.',
          'Sürekli seyahat ettiği için.'
        ],
        correctIndex: 2
      },
      {
        questionTurkish: 'Ahmet Bey\'e göre apartmanda nelere dikkat edilmelidir?',
        questionAlbanian: 'Sipas zotit Ahmet, për çfarë duhet pasur kujdes në pallat?',
        options: [
          'Asansörü hiç kullanmamaya.',
          'Komşuları rahatsız etmemek için gürültü yapmamaya ve çöp saatlerine uymaya.',
          'Her gün temizlik yapmaya.',
          'Bütün komşulara yemek yapmaya.'
        ],
        correctIndex: 1
      },
      {
        questionTurkish: 'Valbona komşularıyla nasıl pratik yapıyor?',
        questionAlbanian: 'Si ushtrohet Valbona me fqinjtë e saj?',
        options: [
          'Sadece el işaretleriyle anlaşarak.',
          'Onlara mektup yazarak.',
          'Hiç konuşmayarak.',
          'Onlarla Türkçe konuşarak.'
        ],
        correctIndex: 3
      },
      {
        questionTurkish: 'Diyalogda geçen "kolay gelsin" ifadesi ne amaçla kullanılır?',
        questionAlbanian: 'Për çfarë qëllimi përdoret shprehja "kolay gelsin" në dialog?',
        options: [
          'Bir iş yapana kolaylık ve başarı dilemek için.',
          'Birinden bir şey isterken rica etmek için.',
          'Biriyle vedalaşırken.',
          'Özür dilerken.'
        ],
        correctIndex: 0
      }
    ]
  },
  vocabulary: [
    {
      turkishWord: 'kiralık',
      albanianWord: 'me qira',
      category: 'mbiemër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Nga emri "kira" (qira) me prapashtesën "-lık".',
      audioAssetStub: null
    },
    {
      turkishWord: 'taşınmak',
      albanianWord: 'shpërngulem / lëviz',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Forma reflexive/pasive e foljes "taşımak" (mbart/transportoj).',
      audioAssetStub: null
    },
    {
      turkishWord: 'yerleşmek',
      albanianWord: 'vendosem',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Kuptimi: të zësh vend ose të vendosësh sendet në një shtëpi të re.',
      audioAssetStub: null
    },
    {
      turkishWord: 'beyaz eşya',
      albanianWord: 'pajisje elektroshtëpiake',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Fjalë për fjalë "pajisje të bardha" (lavatriçe, frigorifer, etj.).',
      audioAssetStub: null
    },
    {
      turkishWord: 'garanti belgesi',
      albanianWord: 'dokument garancie',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Lidhje emërore nga "garanti" (garanci) dhe "belge" (dokument).',
      audioAssetStub: null
    },
    {
      turkishWord: 'çamaşır makinesi',
      albanianWord: 'lavatriçe',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: '"Çamaşır" do të thotë rroba të pista, "makine" do të thotë makinë/makineri.',
      audioAssetStub: null
    },
    {
      turkishWord: 'buzdolabı',
      albanianWord: 'frigorifer',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Lidhje emërore: "buz" (akull) + "dolap" (dollap) = dollap akulli.',
      audioAssetStub: null
    },
    {
      turkishWord: 'kurmak',
      albanianWord: 'instaloj / montoj',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Përdoret për montimin e pajisjeve ose ngritjen e një strukture.',
      audioAssetStub: null
    },
    {
      turkishWord: 'apartman',
      albanianWord: 'pallat / ndërtesë banimi',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Huazim nga frëngjishtja, i përdorur në të dyja gjuhët.',
      audioAssetStub: null
    },
    {
      turkishWord: 'komşu',
      albanianWord: 'fqinj',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Huazim i njohur ballkanik (komsi/komshe) në të dyja anët.',
      audioAssetStub: null
    },
    {
      turkishWord: 'gürültü',
      albanianWord: 'zhurmë',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Tregon zhurmën e madhe dhe shqetësuese.',
      audioAssetStub: null
    },
    {
      turkishWord: 'çöp',
      albanianWord: 'plehra',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'I referohet mbeturinave shtëpiake.',
      audioAssetStub: null
    },
    {
      turkishWord: 'uymak',
      albanianWord: 'respektoj / ndjek',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Kuptimi: të ndjekësh ose zbatosh rregullat, ligjet ose këshillat.',
      audioAssetStub: null
    },
    {
      turkishWord: 'pratik yapmak',
      albanianWord: 'ushtrohem / bëj praktikë',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Folje e përbërë me foljen ndihmëse "yapmak".',
      audioAssetStub: null
    },
    {
      turkishWord: 'yöntem',
      albanianWord: 'metodë / mënyrë',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Mënyra e strukturuar e bërjes së një pune.',
      audioAssetStub: null
    },
    {
      turkishWord: 'huzur',
      albanianWord: 'qetësi / paqe',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Huazim me origjinë arabe që përshkruan gjendjen shpirtërore të qetë.',
      audioAssetStub: null
    },
    {
      turkishWord: 'ev sahibi',
      albanianWord: 'pronar i shtëpisë',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Lidhje emërore: "ev" (shtëpi) + "sahip" (pronar).',
      audioAssetStub: null
    },
    {
      turkishWord: 'depozito',
      albanianWord: 'depozitë',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Shuma e parave që lihet si garanci gjatë marrjes me qira.',
      audioAssetStub: null
    },
    {
      turkishWord: 'fatura',
      albanianWord: 'faturë',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Huazim ndërkombëtar, e njohur në të dyja gjuhët.',
      audioAssetStub: null
    },
    {
      turkishWord: 'imzalamak',
      albanianWord: 'nënshkruaj / firmos',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Nga emri "imza" (nënshkrim / firmë).',
      audioAssetStub: null
    }
  ],
  grammar: [
    {
      titleAlbanian: 'Detyrimi dhe Nevoja (-mAlI)',
      ruleConceptTurkish: 'Gereklilik Kipi (-meli / -malı)',
      explanationAlbanian: 'Prapashtesa **-meli / -malı** përdoret për të shprehur një detyrim, nevojë ose këshillë të fortë (duhet të...). Ajo ndjek harmoninë vokalore 2-she dhe pasohet nga prapashtesat vetanake.\n\n• **Yap-malı-yım** ➔ Unë duhet të bëj (shtohet "y" ndërmjetësuese)\n• **Git-meli-sin** ➔ Ti duhet të shkosh\n• **Oku-malı** ➔ Ai/Ajo duhet të lexojë\n• **Konuş-malı-yız** ➔ Ne duhet të flasim\n\n*Forma negative:* Formohet duke shtuar pjesëzën mohuese **-me / -ma** para prapashtesës së detyrimit.\n• **Yap-ma-malı-yız** ➔ Ne nuk duhet të bëjmë',
      interactiveExample: null
    },
    {
      titleAlbanian: 'Që kur... / Prej kohës (-dIğIndAn beri)',
      ruleConceptTurkish: 'Ayrılma Durumlu Sıfat-Fiil (-diğinden beri / -alı)',
      explanationAlbanian: 'Për të treguar fillimin e një veprimi që vazhdon ende deri në momentin e fjalës, përdoret prapashtesa **-diğinden beri / -dığından beri / -duğundan beri / -düğünden beri**. Ajo shoqërohet gjithmonë me fjalën **beri** (prej/që nga).\n\n• **Gel-diğinden beri** ➔ Që kur erdhi / Prej kohës që erdhi\n• **Başla-dığımdan beri** ➔ Që kur unë fillova\n• **Çalış-tığından beri** ➔ Që kur ai studioi (d ➔ t zbutje/mutacion)\n\n*Rregulli i bashkëtingëlloreve:* Nëse rrënja përfundon me bashkëtingëllore të shurdhët (ç, f, h, k, p, s, ş, t), prapashtesa fillon me **t** në vend të **d**.',
      interactiveExample: {
        root: 'gel',
        strategy: 'since',
        sampleWords: [
          { turkish: 'gel', albanian: 'geldiğinden beri (që kur erdhi)' },
          { turkish: 'yap', albanian: 'yaptığından beri (që kur bëri)' },
          { turkish: 'oku', albanian: 'okuduğundan beri (që kur lexoi)' },
          { turkish: 'gör', albanian: 'gördüğünden beri (që kur pa)' },
          { turkish: 'git', albanian: 'gittiğinden beri (që kur shkoi)' }
        ]
      }
    },
    {
      titleAlbanian: 'Mënyra Shkaktore (Causative Voice)',
      ruleConceptTurkish: 'Ettirgen ve Oldurgan Fiiller',
      explanationAlbanian: 'Në turqisht, ju mund të ktheni një folje në shkaktore (p.sh. bëj dikë të shkruajë, bëj të instalohet) duke shtuar prapashtesa si **-dir / -t / -ir / -ar**.\n\n• **Yazmak** (shkruaj) ➔ **Yazdırmak** (bëj të shkruhet / bëj që të shkruajë dikush)\n• **Okumak** (lexoj) ➔ **Okutmak** (bëj të lexohet / e vë të lexojë)\n• **Kurmak** (instaloj) ➔ **Kurdurmak** (bëj të instalohet)\n\nKjo mënyrë është shumë e përdorur kur i referohemi shërbimeve që na kryejnë të tjerët ose kur urdhërojmë një veprim.',
      interactiveExample: null
    }
  ],
  exercises: [
    {
      type: 'MULTIPLE_CHOICE',
      promptAlbanian: 'Zgjidhni foljen e saktë të detyrimit për fjalinë: "Apartmanda çok gürültü..." (Nuk duhet të bëjmë shumë zhurmë në pallat...)',
      payload: {
        word: 'yap',
        options: ['yapmamalıyız', 'yapıyoruz', 'yaptık', 'yapabiliriz']
      },
      validation: {
        correct_answer: 'yapmamalıyız',
        msg_success: 'E saktë! "yapmamalıyız" do të thotë "ne nuk duhet të bëjmë" (detyrimi negativ për vetën e parë shumës).',
        msg_failure: 'E pasaktë. Kërkohet forma negative e detyrimit (nuk duhet të...).'
      }
    },
    {
      type: 'WORD_SORT',
      promptAlbanian: 'Renditni fjalët për të formuar fjalinë: "Që kur erdha në këtë shtëpi, jam shumë i lumtur"',
      payload: {
        words: ['Bu', 'eve', 'geldiğimden', 'beri', 'çok', 'mutluyum']
      },
      validation: {
        correct_sequence: ['Bu', 'eve', 'geldiğimden', 'beri', 'çok', 'mutluyum'],
        msg_success: 'E saktë! Renditja është: Vendi (Bu eve) + që kur erdha (geldiğimden beri) + gjendja (çok mutluyum).',
        msg_failure: 'E pasaktë. Kujdes të vendosni "geldiğimden beri" pas drejtimit "Bu eve".'
      }
    },
    {
      type: 'SUFFIX_BUILDER',
      promptAlbanian: 'Bashkoni prapashtesën e duhur të kohëzgjatjes "prej kohës që..." për rrënjën "gel" (vjen):',
      payload: {
        root: 'gel',
        suffixes: ['diğinden beri', 'dığından beri', 'tiğinden beri', 'tığından beri']
      },
      validation: {
        correct_suffix: 'diğinden beri',
        result: 'geldiğinden beri',
        msg_success: 'E saktë! Rrënja "gel" ka zanore të parë "e" dhe bashkëtingëllore të zëshme "l", prandaj merr "-diğinden beri".',
        msg_failure: 'E pasaktë. Kontrolloni harmoninë vokalore 4-she për zanoren "e" dhe nëse rrënja kërkon "d" apo "t".'
      }
    },
    {
      type: 'MULTIPLE_CHOICE',
      promptAlbanian: 'Zgjidhni foljen e saktë shkaktore (causative) për fjalinë: "Ben yeni çamaşır makinesini..." (Unë bëra të montohet lavatriçen e re...)',
      payload: {
        word: 'kur',
        options: ['kurdurttum', 'kuruyorum', 'kurdum', 'kurmalıyım']
      },
      validation: {
        correct_answer: 'kurdurttum',
        msg_success: 'E saktë! "kurdurttum" është forma shkaktore e së shkuarës (bëra që dikush tjetër ta montojë).',
        msg_failure: 'E pasaktë. "kurdum" do të thotë "unë e montova vetë", kurse këtu nënkuptohet shërbimi i kryer nga tekniku (shkaktore).'
      }
    },
    {
      type: 'WORD_SORT',
      promptAlbanian: 'Renditni fjalët për të formuar fjalinë: "Duhet t\'i hedhim plehrat në kohë"',
      payload: {
        words: ['Çöpleri', 'zamanında', 'atmalıyız']
      },
      validation: {
        correct_sequence: ['Çöpleri', 'zamanında', 'atmalıyız'],
        msg_success: 'E saktë! Renditja është: Objekti (Çöpleri) + koha (zamanında) + detyrimi (atmalıyız).',
        msg_failure: 'E pasaktë. Vendosni objektin "Çöpleri" të parin dhe foljen e detyrimit në fund.'
      }
    },
    {
      type: 'SUFFIX_BUILDER',
      promptAlbanian: 'Bashkoni prapashtesën e duhur të kohëzgjatjes "prej kohës që..." për rrënjën "yap" (bën):',
      payload: {
        root: 'yap',
        suffixes: ['tığından beri', 'dığından beri', 'tiğinden beri', 'diğinden beri']
      },
      validation: {
        correct_suffix: 'tığından beri',
        result: 'yaptığından beri',
        msg_success: 'E saktë! Rrënja "yap" përfundon me bashkëtingëlloren e shurdhët "p", prandaj merr prapashtesën që fillon me "t" dhe ndjek harmoninë e prapme ("a" ➔ "-tığından beri").',
        msg_failure: 'E pasaktë. Për shkak të bashkëtingëllores së shurdhët "p", prapashtesa duhet të fillojë me "t" dhe të respektojë harmoninë e zanores "a".'
      }
    }
  ]
};
