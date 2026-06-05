import type { UnifiedLesson } from './a1_chapter1';

export const b1Chapter1: UnifiedLesson = {
  id: 4,
  level: 'B1',
  orderIndex: 1,
  title: {
    turkish: 'Haberin Var Mı?',
    albanian: 'A ke ndonjë lajm?'
  },
  reading: {
    layoutStyle: 'blog_post',
    audioAssetStub: null,
    content: [
      {
        text: 'Sosyal medya, günümüzde bilgiye ulaşma ve haberleşme şeklimizi tamamen değiştirdi. Eskiden insanlar haberleri televizyondan veya gazetelerden takip ediyordu, fakat şimdi her şey saniyeler içinde sosyal medyada paylaşılıyor.',
        translation: 'Media sociale ka ndryshuar plotësisht mënyrën se si ne marrim informacion dhe komunikojmë sot. Në të kaluarën, njerëzit i ndiqnin lajmet nga televizioni ose gazetat, por tani çdo gjë shpërndahet në mediat sociale brenda sekondave.'
      },
      {
        text: 'Ben öğrenciyken haberleri öğrenmek için akşam bültenlerini beklerdik. Oysa şimdi, otobüsteyken veya kahve içerken telefonumuza gelen bir bildirimle dünyadaki son gelişmeleri anında öğrenebiliyoruz.',
        translation: 'Kur isha student, pritnim buletinet e mbrëmjes për të mësuar lajmet. Ndërsa tani, me një njoftim që vjen në telefonin tonë ndërsa jemi në autobus ose duke pirë kafe, mund të mësojmë menjëherë zhvillimet e fundit në botë.'
      },
      {
        text: 'Ancak bu hızın bazı olumsuz yönleri de var. Sosyal medyada yayılan her haber doğru olmuyor; bazen yalan haberler çok hızlı yayılarak insanları yanıltabiliyor. Bu yüzden okuduğumuz haberleri farklı kaynaklardan doğrulamak artık bir zorunluluk haline geldi.',
        translation: 'Megjithatë, kjo shpejtësi ka edhe disa anë negative. Jo çdo lajm që shpërndahet në mediat sociale është i saktë; ndonjëherë lajmet e rreme shpërndahen shumë shpejt dhe mund t\'i gënjejnë njerëzit. Prandaj, verifikimi i lajmeve që lexojmë nga burime të ndryshme është bërë tashmë një domosdoshmëri.'
      },
      {
        text: 'Bununla birlikte, kullanıcıların haberlerin altına yazdığı yorumlar da kamuoyunu hem olumlu hem de olumsuz yönde etkiliyor. Eskiden sadece profesyonel gazeteciler fikirlerini paylaşırken, bugün herkes birer içerik üreticisi gibi davranıyor.',
        translation: 'Përveç kësaj (megjithatë), komentet që përdoruesit shkruajnë nën lajmet gjithashtu ndikojnë opinionin publik si pozitivisht ashtu edhe negativisht. Në të kaluarën vetëm gazetarët profesionistë ndanin mendimet e tyre, ndërsa sot gjithsecili sillet si një krijues përmbajtjeje.'
      },
      {
        text: 'Sonuç olarak, internet çağında güvenilir haber kaynaklarını bulmak ve sosyal ağları bilinçli kullanmak hayati önem taşıyor. Ne her gördüğümüze inanmalı ne de bilgi paylaşırken acele etmeliyiz.',
        translation: 'Si përfundim, në epokën e internetit, gjetja e burimeve të besueshme të lajmeve dhe përdorimi i vetëdijshëm i rrjeteve sociale ka një rëndësi jetike. As nuk duhet të besojmë gjithçka që shohim, as nuk duhet të nxitohemi kur ndajmë informacion.'
      }
    ],
    questions: [
      {
        questionTurkish: 'Sosyal medyanın hayatımızdaki temel etkisi nedir?',
        questionAlbanian: 'Cili është ndikimi themelor i mediave sociale në jetën tonë?',
        options: [
          'İnsanların daha az okumasını sağlamak.',
          'Bilgiye ulaşma ve haberleşme şeklimizi değiştirmek.',
          'Televizyon satışlarını arttırmak.',
          'İnternet faturalarını düşürmek.'
        ],
        correctIndex: 1
      },
      {
        questionTurkish: 'Metne göre yazar öğrenciyken haberleri nasıl öğreniyordu?',
        questionAlbanian: 'Sipas tekstit, si i mësonte lajmet autori kur ishte student?',
        options: [
          'Sosyal medya hesaplarından takip ediyordu.',
          'Telefon bildirimlerini kontrol ediyordu.',
          'Akşam bültenlerini bekliyordu.',
          'Arkadaşlarından duyuyordu.'
        ],
        correctIndex: 2
      },
      {
        questionTurkish: 'Metinde geçen hızlı haber yayılmasının hangi olumsuz yönünden bahsedilmiştir?',
        questionAlbanian: 'Cila anë negative e përhapjes së shpejtë të lajmit përmendet në tekst?',
        options: [
          'Telefonların şarjının çabuk bitmesi.',
          'Yalan haberlerin hızla yayılarak insanları yanıltabilmesi.',
          'Gazetelerin basımının durması.',
          'Sosyal medyanın ücretli olması.'
        ],
        correctIndex: 1
      },
      {
        questionTurkish: 'Yazar yalan haberlerden korunmak için ne yapılmasını öneriyor?',
        questionAlbanian: 'Çfarë sugjeron autori të bëhet për t\'u mbrojtur nga lajmet e rreme?',
        options: [
          'Sosyal medyayı tamamen kapatmayı.',
          'Haberleri sadece arkadaşlardan öğrenmeyi.',
          'Okunan haberleri farklı kaynaklardan doğrulamayı.',
          'Sadece televizyon izlemeyi.'
        ],
        correctIndex: 2
      },
      {
        questionTurkish: 'Metne göre kullanıcı yorumlarının nasıl bir etkisi vardır?',
        questionAlbanian: 'Sipas tekstit, çfarë ndikimi kanë komentet e përdoruesve?',
        options: [
          'Sadece olumlu yönde etkiler.',
          'Hem olumlu hem de olumsuz yönde etkiler.',
          'Hiçbir etkisi yoktur.',
          'Sadece gazetecileri etkiler.'
        ],
        correctIndex: 1
      },
      {
        questionTurkish: 'Yazar internet çağında güvenli bilgi için ne tavsiye ediyor?',
        questionAlbanian: 'Çfarë rekomandon autori për informacion të sigurt në epokën e internetit?',
        options: [
          'Her gördüğümüze anında inanmayı.',
          'Haberleri hiç kimseyle paylaşmamayı.',
          'Güvenilir haber kaynaklarını bulup sosyal ağları bilinçli kullanmayı.',
          'Sosyal medyayı sadece geceleri kullanmayı.'
        ],
        correctIndex: 2
      }
    ]
  },
  vocabulary: [
    {
      turkishWord: 'sosyal medya',
      albanianWord: 'media sociale',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'I referohet platformave dixhitale si Facebook, Instagram, Twitter.',
      audioAssetStub: null
    },
    {
      turkishWord: 'haber',
      albanianWord: 'lajm',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Huazim i përbashkët ballkanik (Haber) i përdorur në gjuhën e përditshme.',
      audioAssetStub: null
    },
    {
      turkishWord: 'bildirim',
      albanianWord: 'njoftim / notifikim',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Nga folja "bildirmek" (njoftoj).',
      audioAssetStub: null
    },
    {
      turkishWord: 'paylaşmak',
      albanianWord: 'ndaj / shpërndaj',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Rrënja: paylaş. Në rrjetet sociale përdoret për "share".',
      audioAssetStub: null
    },
    {
      turkishWord: 'takip etmek',
      albanianWord: 'ndjek',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Në rrjetet sociale përdoret për "follow". Rrënja: takip et.',
      audioAssetStub: null
    },
    {
      turkishWord: 'yayınlamak',
      albanianWord: 'publikoj / botoj',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Rrënja: yayınla.',
      audioAssetStub: null
    },
    {
      turkishWord: 'doğrulamak',
      albanianWord: 'verifikoj / vërtetoj',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Nga mbiemri "doğru" (e saktë / e vërtetë). Rrënja: doğrula.',
      audioAssetStub: null
    },
    {
      turkishWord: 'gelişme',
      albanianWord: 'zhvillim',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Nga folja "gelişmek" (zhvillohem).',
      audioAssetStub: null
    },
    {
      turkishWord: 'bülten',
      albanianWord: 'buletin / lajme blic',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Huazuar nga frëngjishtja (bulletin).',
      audioAssetStub: null
    },
    {
      turkishWord: 'kaynak',
      albanianWord: 'burim',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Përdoret si për burim lajmi ashtu edhe për burim uji.',
      audioAssetStub: null
    },
    {
      turkishWord: 'günümüzde',
      albanianWord: 'në ditët tona / sot',
      category: 'ndajfolje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Nga "gün" (ditë) + prapashtesa e shumësit dhe lokativit.',
      audioAssetStub: null
    },
    {
      turkishWord: 'olumsuz',
      albanianWord: 'negativ / i dëmshëm',
      category: 'mbiemër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Antonimi i "olumlu" (pozitiv).',
      audioAssetStub: null
    },
    {
      turkishWord: 'yalan haber',
      albanianWord: 'lajm i rremë',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Përdoret për dezinformatat dhe fake news në internet.',
      audioAssetStub: null
    },
    {
      turkishWord: 'araştırmak',
      albanianWord: 'hulumtoj / kërkoj',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Folje e rregullt me rrënjë "araştır".',
      audioAssetStub: null
    },
    {
      turkishWord: 'gazeteci',
      albanianWord: 'gazetar',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Huazim nga frëngjishtja "gazette" me prapashtesën turke "-ci".',
      audioAssetStub: null
    },
    {
      turkishWord: 'güvenilir',
      albanianWord: 'i besueshëm',
      category: 'mbiemër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Nga folja "güvenmek" (besoj/mbështetem).',
      audioAssetStub: null
    },
    {
      turkishWord: 'sosyal ağ',
      albanianWord: 'rrjet social',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Ağ do të thotë rrjetë, kurse sosyal do të thotë social.',
      audioAssetStub: null
    },
    {
      turkishWord: 'kullanıcı',
      albanianWord: 'përdorues',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Nga folja "kullanmak" (përdor). Rrënja: kullan.',
      audioAssetStub: null
    },
    {
      turkishWord: 'paylaşım',
      albanianWord: 'postim / shpërndarje',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Emri përkatës i veprimit "paylaşmak".',
      audioAssetStub: null
    },
    {
      turkishWord: 'yorum yazmak',
      albanianWord: 'shkruaj koment',
      category: 'shprehje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Përbëhet nga yorum (koment) + yazmak (shkruaj).',
      audioAssetStub: null
    }
  ],
  grammar: [
    {
      titleAlbanian: 'Koha e Shkuar e Vazhdueshme',
      ruleConceptTurkish: 'Şimdiki Zamanın Hikâyesi (-iyordu)',
      explanationAlbanian: 'Koha e shkuar e vazhdueshme në turqisht formohet duke bashkuar prapashtesën e kohës së tashme (-iyor) me prapashtesën e së shkuarës (-du). Ajo tregon një veprim që ishte në vazhdim e sipër në të shkuarën, ose një zakon të hershëm. Kjo i përgjigjet kohës së pakryer në gjuhën shqipe (p.sh. "isha duke bërë" ose "bëja").\n\n*Struktura:* Rrënja + (ı/i/u/ü)yor + du + prapashtesa vetore.\n\n*Zgjedhimi (vetore):*\n• **Ben**: yapıyordum (bëja / isha duke bërë)\n• **Sen**: yapıyordun (bëje / ishe duke bërë)\n• **O**: yapıyordu (bënte / ishte duke bërë)\n• **Biz**: yapıyorduk (bënim / ishim duke bërë)\n• **Siz**: yapıyordunuz (bënit / ishit duke bërë)\n• **Onlar**: yapıyorlardı (bënin / ishin duke bërë)',
      interactiveExample: null
    },
    {
      titleAlbanian: 'Mjeti Gerund: -ken (Ndërsa / Kur)',
      ruleConceptTurkish: 'Zarf-Fiil -(y)ken',
      explanationAlbanian: 'Prapashtesa -(y)ken shërben për të treguar se dy veprime ndodhin në të njëjtën kohë, ose për të shprehur një gjendje në të shkuarën ("kur isha..."). Në shqip përkthehet me "ndërsa", "kur", ose "duke".\n\n*Rregulli i Artë:* Kjo prapashtesë nuk ndjek harmoninë vokalore! Ajo është gjithmonë **-ken** (ose **-yken** nëse fjala përfundon me zanore).\n\n1. **Me Emra/Mbiemra:** Tregon një gjendje të shkuar (p.sh. *çocukken* = kur isha fëmijë; *öğrenciyken* = kur isha student; *hastayken* = kur isha i sëmurë).\n2. **Me Folje:** Pas prapashtesave të kohës (zakonisht me kohën e tashme ose të ardhshme) tregon veprime të njëkohshme (p.sh. *okurken* = ndërsa lexoja; *yoldayken* = ndërsa isha në rrugë; *yemek yerken* = duke ngrënë).',
      interactiveExample: {
        root: 'oku',
        strategy: 'yken',
        sampleWords: [
          { turkish: 'çocuk', albanian: 'kur isha fëmijë' },
          { turkish: 'öğrenci', albanian: 'kur isha student' },
          { turkish: 'hasta', albanian: 'kur isha i sëmurë' },
          { turkish: 'oku', albanian: 'ndërsa lexonte' },
          { turkish: 'gel', albanian: 'ndërsa vinte' }
        ]
      }
    },
    {
      titleAlbanian: 'Lidhëzat e Përbëra në Nivelin B1',
      ruleConceptTurkish: 'B1 Seviyesi Bağlaçları (Oysa, Bununla Birlikte, Hem... Hem..., Ne... Ne...)',
      explanationAlbanian: 'Në nivelin B1, përdorimi i lidhëzave është thelbësor për të lidhur fjalitë e thjeshta në fjali të përbëra e komplekse:\n\n1. **Oysa / Oysa ki (Ndërsa / Kurse / Pasi që)**: Tregon një kontrast të fortë midis dy situatave (p.sh. *Çalıştığını söyledi, oysa tüm gün uyudu* = Tha që po punonte, ndërsa fjeti gjithë ditën).\n2. **Bununla birlikte (Megjithatë / Së bashku me këtë)**: Përdoret për të shtuar një ide të re që disi kontraston ose plotëson të parën.\n3. **Hem... Hem... (Edhe... Edhe... / Si... Ashtu edhe...)**: Lidh dy elemente që plotësojnë njëri-tjetrin (p.sh. *Hem Türkçe hem Arnavutça konuşuyor* = Flet edhe turqisht edhe shqip).\n4. **Ne... Ne... (As... As...)**: Përdoret për fjali mohuese të dyfishta pa pasur nevojë për folje në formë mohuese (p.sh. *Ne çay ne kahve içti* = Nuk piu as çaj as kafe).',
      interactiveExample: null
    }
  ],
  exercises: [
    {
      type: 'MULTIPLE_CHOICE',
      promptAlbanian: 'Zgjidhni formën e saktë të foljes për vetën e parë shumës (biz) në kohën e shkuar të vazhdueshme: "Eskiden biz haberleri gazeteden..." (Në të kaluarën ne i ndiqnim lajmet nga gazeta...)',
      payload: {
        word: 'oku',
        options: ['okuyorduk', 'okuyordun', 'okuyordu', 'okuyordunuz']
      },
      validation: {
        correct_answer: 'okuyorduk',
        msg_success: 'E saktë! Zgjedhimi i foljes "oku" për "biz" (ne) në kohën e shkuar të vazhdueshme është "okuyorduk" (ne lexonim).',
        msg_failure: 'E pasaktë. Kontrolloni prapashtesën vetore të së shkuarës së vazhdueshme për vetën e parë shumës.'
      }
    },
    {
      type: 'WORD_SORT',
      promptAlbanian: 'Renditni fjalët në turqisht për të formuar fjalinë: "Kur isha fëmijë luaja shumë në park"',
      payload: {
        words: ['oynuyordum', 'parkta', 'Ben', 'çocukken', 'çok']
      },
      validation: {
        correct_sequence: ['Ben', 'çocukken', 'parkta', 'çok', 'oynuyordum'],
        msg_success: 'E saktë! Renditja është: Subjekti (Ben) + koha gerund (çocukken) + vendi (parkta) + sasia (çok) + folja në fund (oynuyordum).',
        msg_failure: 'E pasaktë. Mbani mend: Folja e kohës së shkuar të vazhdueshme "oynuyordum" duhet të shkojë në fund.'
      }
    },
    {
      type: 'SUFFIX_BUILDER',
      promptAlbanian: 'Bashkoni prapashtesën e duhur -(y)ken për fjalën "öğrenci" (student) për të thënë "kur isha student":',
      payload: {
        root: 'öğrenci',
        suffixes: ['ken', 'yken', 'kan', 'ykan']
      },
      validation: {
        correct_suffix: 'yken',
        result: 'öğrenciyken',
        msg_success: 'E saktë! Fjala "öğrenci" mbaron me zanore, prandaj shtohet shkronja ndërmjetësuese "y" përpara prapashtesës "ken". Rezultati: "öğrenciyken" (kur isha student).',
        msg_failure: 'E pasaktë. Rrënja mbaron me zanoren "i", prandaj duhet bashkuesja "y". Prapashtesa nuk ndjek harmoninë zanore dhe është gjithmonë "ken".'
      }
    },
    {
      type: 'MULTIPLE_CHOICE',
      promptAlbanian: 'Zgjidhni formën e saktë të kohës së shkuar të vazhdueshme për vetën e tretë shumës (onlar): "Eskiden insanlar haberleri televizyondan..." (Në të kaluarën njerëzit i ndiqnin lajmet nga televizioni...)',
      payload: {
        word: 'takip etmek',
        options: ['takip ediyorlardı', 'takip ediyordun', 'takip ediyordu', 'takip ediyorduk']
      },
      validation: {
        correct_answer: 'takip ediyorlardı',
        msg_success: 'E saktë! Prapashtesa vetore për vetën e tretë shumës (onlar) në kohën e shkuar të vazhdueshme është "-yorlardı".',
        msg_failure: 'E pasaktë. Kontrolloni prapashtesën vetore të së shkuarës së vazhdueshme për "onlar" (ata/ato).'
      }
    },
    {
      type: 'WORD_SORT',
      promptAlbanian: 'Renditni fjalët për të formuar fjalinë: "Ndërsa ecja në rrugë, u takova me një mik"',
      payload: {
        words: ['yürürken', 'arkadaşımla', 'Yolda', 'karşılaştım', 'bir']
      },
      validation: {
        correct_sequence: ['Yolda', 'yürürken', 'bir', 'arkadaşımla', 'karşılaştım'],
        msg_success: 'E saktë! Fjalia ndërtohet: Vendi (Yolda) + gerundi (yürürken) + objekti (bir arkadaşımla) + folja (karşılaştım).',
        msg_failure: 'E pasaktë. Sigurohuni që treguesi i vendit dhe gerundi të jenë në fillim dhe folja kryesore në fund.'
      }
    },
    {
      type: 'SUFFIX_BUILDER',
      promptAlbanian: 'Bashkoni prapashtesën e duhur -(y)ken për fjalën "çocuk" (fëmijë) për të thënë "kur isha fëmijë":',
      payload: {
        root: 'çocuk',
        suffixes: ['ken', 'yken', 'kan', 'ykan']
      },
      validation: {
        correct_suffix: 'ken',
        result: 'çocukken',
        msg_success: 'E saktë! Rrënja "çocuk" mbaron me bashkëtingëllore, prandaj lidhet drejtpërdrejt me "-ken" pa pasur nevojë për zanoren ndërmjetësuese "y".',
        msg_failure: 'E pasaktë. Fjala nuk mbaron me zanore, kështu që nuk shtohet "y". Prapashtesa është gjithmonë "ken".'
      }
    }
  ]
};
