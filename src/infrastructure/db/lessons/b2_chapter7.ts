import type { UnifiedLesson } from './a1_chapter1';

export const b2Chapter7: UnifiedLesson = {
  id: 31,
  level: 'B2',
  orderIndex: 7,
  title: {
    turkish: 'İş Dünyası ve Ekonomi',
    albanian: 'Bota e Biznesit dhe Ekonomia'
  },
  reading: {
    layoutStyle: 'narrative', // dialogue formatted as narrative paragraphs for InteractiveText compatibility
    audioAssetStub: null,
    topic: "Balkanlar ve Türkiye Ekonomik İlişkileri",
    content: [
      {
        text: "Valbona, son zamanlarda Balkanlar ve Türkiye arasındaki ekonomik ilişkilerin oldukça geliştiğini belirtti. Birçok genç, Türk şirketlerinde çalışmanın büyük kariyer fırsatları sunduğunu söylüyor. Ahmet ise bu görüşe katıldığını ifade etti. Şirketinin de buradaki gençlerin dil öğrenmeye ve kendilerini geliştirmeye çok önem verdiğini belirtti. Şirket, yerel uzmanları işe almak yerine, onları kendi eğitim programlarıyla eğitmeyi tercih ediyor.",
        translation: "Valbona vuri në dukje se kohët e fundit marrëdhëniet ekonomike midis Ballkanit dhe Turqisë janë zhvilluar mjaft. Shumë të rinj thonë se të punuarit në kompanitë turke ofron mundësi të mëdha karriere. Ahmeti nga ana tjetër u shpreh se ishte dakord me këtë mendim. Ai deklaroi se edhe kompania e tij u kushton rëndësi të madhe mësimit të gjuhës dhe vetëzhvillimit të të rinjve këtu. Kompania, në vend që të punësojë ekspertë lokalë, preferon t'i trajnojë ata me programet e veta të trajnimit."
      },
      {
        text: "Bu çok güzel bir yaklaşım olarak görülmektedir. Ancak bazı mezunlar, büyük şehirlere taşınmaktansa kendi ülkelerinde uzaktan çalışmayı tercih ediyorlar. Aksine, bazıları da uluslararası deneyim kazanmanın şart olduğunu savunuyor. Ahmet, şirket merkezinin çalışanların esnek çalışma saatlerine sahip olmasını istediğini belirtti. Ayrıca, yöneticilerin de gençlerin fikirlerini kendileriyle doğrudan paylaşmasını istediğini söyledi.",
        translation: "Kjo shihet si një qasje shumë e mirë. Megjithatë, disa të diplomuar preferojnë të punojnë në distancë në vendet e tyre sesa të shpërngulen në qytete të mëdha. Përkundrazi, disa të tjerë mbrojnë mendimin se fitimi i përvojës ndërkombëtare është thelbësor. Ahmeti deklaroi se zyra qendrore e kompanisë dëshiron që punonjësit të kenë orar fleksibël të punës. Gjithashtu, ai tha se drejtuesit duan që të rinjtë t'i ndajnë idetë e tyre drejtpërdrejt me ta."
      },
      {
        text: "Geçen hafta düzenlenen bir seminerde, uzmanlar yabancı dil bilmenin ticaret hacmini artıracağını söylediler. İş dünyasında başarılı olmak için sadece teknik bilgi yetmiyor, iletişim becerileri de önem taşıyor. Sadece beklemek yerine, aktif bir şekilde iş ağları kurmak gerekmektedir. Yeni yatırımlarla birlikte Balkan pazarında daha fazla istihdam yaratılacağı belirtilmektedir.",
        translation: "Në një seminar të organizuar javën e kaluar, ekspertët thanë se njohja e një gjuhe të huaj do të rrisë vëllimin e tregtisë. Për të qenë të suksesshëm në botën e biznesit nuk mjafton vetëm njohuria teknike, por rëndësi kanë edhe aftësitë e komunikimit. Në vend që thjesht të presim, duhet të ndërtojmë rrjete biznesi në mënyrë aktive. Thuhet se me investimet e reja do të krijohet më shumë punësim në tregun e Ballkanit."
      }
    ],
    questions: [
      {
        questionTurkish: "Valbona'ya göre son zamanlarda ne gelişmiştir?",
        questionAlbanian: "Sipas Valbonës, çfarë është zhvilluar kohët e fundit?",
        options: [
          "Balkanlar ve Türkiye arasındaki ekonomik ilişkiler.",
          "Yeni ulaşım yolları.",
          "Turizm sektöründeki oteller.",
          "Üniversite kütüphaneleri."
        ],
        correctIndex: 0
      },
      {
        questionTurkish: "Ahmet'in şirketi yerel uzmanlar konusunda ne yapmayı tercih ediyor?",
        questionAlbanian: "Çfarë preferon të bëjë kompania e Ahmetit lidhur me ekspertët lokalë?",
        options: [
          "Onları işten çıkarmayı.",
          "Doğrudan işe almak yerine kendi eğitim programlarıyla eğitmeyi.",
          "Başka ülkelere göndermeyi.",
          "Hiçbir eğitim vermemeyi."
        ],
        correctIndex: 1
      },
      {
        questionTurkish: "Bazı mezunlar neyi tercih ediyor?",
        questionAlbanian: "Çfarë preferojnë disa të diplomuar?",
        options: [
          "Çok erken emekli olmayı.",
          "Büyük şehirlere taşınmaktansa kendi ülkelerinde uzaktan çalışmayı.",
          "Sadece ticaret yapmayı.",
          "Hiç çalışmamayı."
        ],
        correctIndex: 1
      },
      {
        questionTurkish: "Ahmet'in belirttiğine göre şirket merkezi ne istiyor?",
        questionAlbanian: "Sipas asaj që deklaroi Ahmeti, çfarë dëshiron zyra qendrore e kompanisë?",
        options: [
          "Çalışanların esnek çalışma saatlerine sahip olmasını.",
          "Çalışma saatlerinin uzatılmasını.",
          "Ücretlerin düşürülmesini.",
          "Yatırımların durdurulmasını."
        ],
        correctIndex: 0
      },
      {
        questionTurkish: "Seminerdeki uzmanlar yabancı dil bilmenin hangi etkisinden bahsetti?",
        questionAlbanian: "Për cilin efekt të njohjes së gjuhës së huaj folën ekspertët në seminar?",
        options: [
          "Ulaşımı kolaylaştıracağından.",
          "Ticaret hacmini artıracağından.",
          "İnternet hızını artıracağından.",
          "Yeni ofisler açılmasını sağlayacağından."
        ],
        correctIndex: 1
      },
      {
        questionTurkish: "İş dünyasında başarılı olmak için teknik bilginin yanında ne gereklidir?",
        questionAlbanian: "Çfarë nevojitet përveç njohurive teknike për të qenë të suksesshëm në botën e biznesit?",
        options: [
          "Sadece beklemek.",
          "İletişim becerileri ve aktif iş ağları kurmak.",
          "Daha fazla bilgisayar satın almak.",
          "Şehir merkezinde yaşamak."
        ],
        correctIndex: 1
      }
    ]
  },
  vocabulary: [
    {
      turkishWord: 'kariyer',
      albanianWord: 'karriera',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Huazim nga frëngjishtja, përdoret njësoj.',
      notesTurkish: 'Fransızca kökenli isim. İş hayatındaki ilerleme.',
      audioAssetStub: null,
      stemBreakdown: 'kariyer'
    },
    {
      turkishWord: 'fırsat',
      albanianWord: 'mundësia / shansi / afati',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë e përbashkët ballkanike me origjinë arabe.',
      notesTurkish: 'Arapça kökenli ortak kelime. Uygun durum veya şans.',
      audioAssetStub: null,
      stemBreakdown: 'fırsat'
    },
    {
      turkishWord: 'şirket',
      albanianWord: 'kompania / shoqëria tregtare',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Arapça kökenli.',
      notesTurkish: 'Ticari ortaklık veya kuruluş.',
      audioAssetStub: null,
      stemBreakdown: 'şirket'
    },
    {
      turkishWord: 'uzman',
      albanianWord: 'eksperti / specialisti',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Rrjedh nga "uz" (i zoti/shkathtë) + "-man".',
      notesTurkish: 'Bir konuda geniş bilgisi olan yetkin kişi.',
      audioAssetStub: null,
      stemBreakdown: 'uz-man'
    },
    {
      turkishWord: 'mezun',
      albanianWord: 'i diplomuari',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Huazim nga arabishtja.',
      notesTurkish: 'Arapça kökenli. Bir okulu bitirip diploma alan kişi.',
      audioAssetStub: null,
      stemBreakdown: 'mezun'
    },
    {
      turkishWord: 'deneyim',
      albanianWord: 'përvoja / eksperienca',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Dene- (provoj) -> deney (eksperiment) -> deneyim (përvojë).',
      notesTurkish: 'Denemek fiilinden türetilmiş isim. Tecrübe.',
      audioAssetStub: null,
      stemBreakdown: 'dene-y-im'
    },
    {
      turkishWord: 'esnek',
      albanianWord: 'i lakueshëm / fleksibël',
      category: 'mbiemër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Esnemek (lakohet/hapet goja) -> esnek.',
      notesTurkish: 'Esnemek fiilinden türetilmiş sıfat.',
      audioAssetStub: null,
      stemBreakdown: 'esn-ek'
    },
    {
      turkishWord: 'hacim',
      albanianWord: 'vëllimi',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Arapça kökenli. Pëson rënie zanafore: hacim + i -> hacmi.',
      notesTurkish: 'Ünlü düşmesine uğrar: hacim -> hacmi.',
      audioAssetStub: null,
      stemBreakdown: 'hacim'
    },
    {
      turkishWord: 'istihdam',
      albanianWord: 'punësimi',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Huazim nga arabishtja me kuptimin e krijimit të vendeve të punës.',
      notesTurkish: 'Arapça kökenli. Bir işte çalıştırma/hizmet ettirme.',
      audioAssetStub: null,
      stemBreakdown: 'istihdam'
    },
    {
      turkishWord: 'ticaret',
      albanianWord: 'tregtia',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë e përbashkët ballkanike me origjinë arabe.',
      notesTurkish: 'Mal ve hizmet alım satımı.',
      audioAssetStub: null,
      stemBreakdown: 'ticaret'
    },
    {
      turkishWord: 'yaklaşım',
      albanianWord: 'qasja / trajtimi',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Yaklaşmak (afrohem) + "-ım".',
      notesTurkish: 'Yaklaşmak fiilinden türetilmiş isim.',
      audioAssetStub: null,
      stemBreakdown: 'yak-laş-ım'
    },
    {
      turkishWord: 'beceri',
      albanianWord: 'aftësia / shkathtësia',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Becermek (ia dal mbanë) fiilinden türetilmiştir.',
      notesTurkish: 'Becermek fiilinden türetilmiş isim. Yetenek.',
      audioAssetStub: null,
      stemBreakdown: 'becer-i'
    }
  ],
  grammar: [
    {
      titleAlbanian: 'Ligjërata e Zhdrejtë me Folje (Indirect Reported Speech)',
      titleTurkish: 'Fiil Cümlelerinde Dolaylı Anlatım (-DIğını / -Acacağını)',
      ruleConceptTurkish: 'Fiil Cümlelerinde Dolaylı Anlatım',
      explanationAlbanian: 'Kur raportojmë fjalët e dikujt tjetër (Ligjërata e Zhdrejtë), në turqisht fjalia e brendshme kthehet në një klauzolë emërore me prapashtesat **-DIk** (për të tashmen/të shkuarën) ose **-AcAk** (për të ardhmen), e ndjekur nga përemri pronor dhe rasa kallëzore, e shoqëruar nga foljet *söylemek* (them) ose *belirtmek* (deklaroj/vë në dukje):\n\n1. **Koha e Tashme/e Shkuar (-DIğını söylemek)**:\n   - *\"Çalışıyorum.\"* (Po punoj) → *Çalıştığını söyledi.* (Tha se po punon.)\n   - *\"Biliyoruz.\"* (E dimë) → *Bildiğimizi belirtti.* (Deklaroi se e dimë.)\n2. **Koha e Ardhme (-Acacağını söylemek)**:\n   - *\"Geleceğim.\"* (Do të vij) → *Geleceğini söyledi.* (Tha se do të vijë.)\n   - *\"Yaratacağız.\"* (Do të krijojmë) → *Yaratacağımızı belirtti.* (Deklaroi se do të krijojmë.)',
      explanationTurkish: 'Başkasının söylediği bir fiil cümlesini dolaylı olarak aktarırken eylemsi ekleri (-DIK ve -AcAk) iyelik ve belirtme durumu alarak aktarılır:\n\n1. **Şimdiki/Geçmiş Zaman (-DIğını söylemek)**:\n   - *\"Çalışıyorum.\"* -> *Çalıştığını söyledi.*\n2. **Gelecek Zaman (-Acacağını söylemek)**:\n   - *\"Geleceğim.\"* -> *Geleceğini söyledi.*',
      interactiveExample: null
    },
    {
      titleAlbanian: 'Urdhërat dhe Kërkesat e Zhdrejta (-mAsını istemek)',
      titleTurkish: 'İstek ve Emir Cümlelerinde Dolaylı Anlatım (-mAsını istemek)',
      ruleConceptTurkish: 'Emir Cümlelerinde Dolaylı Anlatım',
      explanationAlbanian: 'Kur raportojmë një urdhër, kërkesë ose sugjerim (\"më tha të bëj\", \"dëshiron që ai të shkojë\"), përdorim nominalizimin me **-mE** (emër-fiil) me prapashtesën pronore dhe rasën kallëzore, të shoqëruar nga folja **istemek** (dua) ose **söylemek** (them):\n\n- *\"Git.\"* (Shko!) → *Gitmesini istedi.* (Dëshiroi që ai të shkojë / i kërkoi të shkojë.)\n- *\"Fikirlerinizi paylaşın.\"* (Ndani idetë tuaja) → *Fikirlerini paylaşmasını istedi.* (Kërkoi që të ndajnë idetë e tyre.)\n- *\"Erken gel.\"* (Eja herët) → *Erken gelmemi söyledi.* (Më tha të vija herët.)',
      explanationTurkish: 'Bir emir, istek veya ricayı dolaylı aktarırken isim-fiil eki (-ma/-me) iyelik ve belirtme durumu ekiyle kullanılır, ardından genellikle \'istemek\' veya \'söylemek\' fiili getirilir:\n\n- *\"Git.\"* -> *Gitmesini istedi.*\n- *\"Erken gel.\"* -> *Erken gelmemi söyledi.*',
      interactiveExample: null
    },
    {
      titleAlbanian: 'Lidhëzat Krahasuese dhe Kundërshtuese (-mak yerine, -maktansa)',
      titleTurkish: 'Karşılaştırma ve Tercih Bağlaçları (-mak yerine, -maktansa, aksine)',
      ruleConceptTurkish: 'Karşılaştırma Bağlaçları',
      explanationAlbanian: 'Këto struktura përdoren për të shprehur preferencë ose kontrast midis dy veprimeve:\n\n1. **-mak yerine** (në vend që të...): Tregon zëvendësimin e një veprimi me një tjetër.\n   - *Çalışmak yerine televizyon izliyor.* (Në vend që të punojë, po shikon televizor.)\n2. **-maktansa / -maktansa** (më mirë se sa të... / sesa të...): Shpreh një preferencë të fortë, shpesh duke refuzuar opsionin e parë.\n   - *Taşınmaktansa burada kalırım.* (Më mirë se sa të shpërngulem, qëndroj këtu.)\n3. **Aksine** (përkundrazi / ndryshe nga sa pritej):\n   - *İşler kötü gitmedi, aksine çok iyi gelişti.* (Punët nuk shkuan keq, përkundrazi u zhvilluan shumë mirë.)',
      explanationTurkish: 'Eylemler arasında tercih ve karşılaştırma yapmak için kullanılan yapılardır:\n\n1. **-mak yerine**: Bir eylemin yerine diğerinin tercih edildiğini belirtir.\n2. **-maktansa**: Bir eylemi diğerine güçlü bir şekilde tercih ederken kullanılır.\n3. **Aksine**: Beklenenin tersi bir durumu vurgular.',
      interactiveExample: null
    }
  ],
  exercises: [
    {
      type: 'CLOZE',
      promptTurkish: "'söylemek' (sunduğunu) reported speech yapısını tamamlayınız: 'Birçok genç, Türk şirketlerinde çalışmanın büyük fırsatlar sun___unu söylüyor.'",
      promptAlbanian: "Zgjidhni prapashtesën nominalizuese të raportimit (se ofron): 'Birçok genç, Türk şirketlerinde çalışmanın büyük fırsatlar sun___unu söylüyor.'",
      payload: {
        sentence: "Birçok genç, Türk şirketlerinde çalışmanın büyük fırsatlar sun___unu söylüyor.",
        options: ["duğ", "acağ", "up", "mak"]
      },
      validation: {
        correct_answer: "duğ",
        msg_success: "Doğru! Gençlerin sunduğu güncel durum bildirildiği için '-duğunu' (sun-duğ-u-n-u) şekli kurulur.",
        msg_failure: "Yanlış. Şu anki durumu bildirmek için '-duğ' eki kullanılmalıdır.",
        msg_success_albanian: "E saktë! Formohet sun- + -duğ + -u (pronore) + -n- (buffer) + -u (kallëzore) -> 'sunduğunu' (se ofron).",
        msg_failure_albanian: "E pasaktë. Pasi raporton një fakt aktual, duhet prapashtesa '-duğ'."
      }
    },
    {
      type: 'CLOZE',
      promptTurkish: "'göstermek' (verdiğini) reported speech yapısını tamamlayınız: 'Şirketimiz, gençlerin dil öğrenmeye çok önem ver___ine belirtti.'",
      promptAlbanian: "Zgjidhni prapashtesën e saktë të raportimit me rasten dative (se i kushton): 'Şirketimiz, gençlerin dil öğrenmeye çok önem ver___ine belirtti.'",
      payload: {
        sentence: "Şirketimiz, gençlerin dil öğrenmeye çok önem ver___ine belirtti.",
        options: ["diğ", "eceği", "ip", "mek"]
      },
      validation: {
        correct_answer: "diğ",
        msg_success: "Doğru! Geçmişte/şu anda önem verildiğini belirtmek için '-diğine' (ver-diğ-i-n-e) yapısı kullanılır.",
        msg_failure: "Yanlış. Verilen durumun aktarılması için doğru ek '-diğ' (verdiğine) olmalıdır.",
        msg_success_albanian: "E saktë! Formohet ver- + -diğ + -i (pronore) + -n- + -e (dative) -> 'verdiğine' (se i kushton / që i kushton rëndësi).",
        msg_failure_albanian: "E pasaktë. Kërkohet pjesorja e raportimit për kohën e tashme/shkuar: '-diğ'."
      }
    },
    {
      type: 'CLOZE',
      promptTurkish: "'olmak' fiilini dolaylı istek yapısıyla çekimleyiniz: 'Şirket merkezimiz, çalışanların esnek saatlere sahip ol___ını istediğini belirtti.'",
      promptAlbanian: "Zgjidhni prapashtesën nominalizuese të kërkesës së zhdrejtë (të kenë / të jenë): 'Şirket merkezimiz, çalışanların esnek saatlere sahip ol___ını istediğini belirtti.'",
      payload: {
        sentence: "Şirket merkezimiz, çalışanların esnek saatlere sahip ol___ını istediğini belirtti.",
        options: ["mas", "mak", "duğ", "acağını"]
      },
      validation: {
        correct_answer: "mas",
        msg_success: "Doğru! 'istemek' eylemi istek/emir cümlesi dolaylı anlatımı gerektirdiği için isim-fiil iyelik eki '-masını' (ol-ma-sı-n-ı) kullanılır.",
        msg_failure: "Yanlış. İstemek fiiliyle birlikte dolaylı istek bildiren '-mas' (olmasını) yapısı gelmelidir.",
        msg_success_albanian: "E saktë! Pasi përdoret folja 'istemek' (dëshiron), kërkohet nominalizimi me '-mE' + pronore + kallëzore: ol- + -ma + -sı (veta III) + -n- + -ı -> 'olmasını' (që të ketë / të jetë).",
        msg_failure_albanian: "E pasaktë. Duhet prapashtesa e kërkesës së zhdrejtë: '-mas'."
      }
    },
    {
      type: 'CLOZE',
      promptTurkish: "'paylaşmak' fiilini üçüncü çoğul şahıstan dolaylı istek yapısıyla çekimleyiniz: 'Yöneticilerimiz de gençlerin fikirlerini kendileriyle paylaş___ını istiyor.'",
      promptAlbanian: "Zgjidhni prapashtesën e duhur të kërkesës për foljen 'paylaşmak' (të ndajnë): 'Yöneticilerimiz de gençlerin fikirlerini kendileriyle paylaş___ını istiyor.'",
      payload: {
        sentence: "Yöneticilerimiz de gençlerin fikirlerini kendileriyle paylaş___ını istiyor.",
        options: ["mas", "mak", "acağını", "dığını"]
      },
      validation: {
        correct_answer: "mas",
        msg_success: "Doğru! Gençlerin (üçüncü şahıs) fikir paylaşımı istendiği için 'paylaşmasını' (paylaş-ma-sı-n-ı) şeklinde kurulur.",
        msg_failure: "Yanlış. İstek bildirildiği için isim-fiil kökenli '-mas' (paylaşmasını) yapısı getirilmelidir.",
        msg_success_albanian: "E saktë! Formohet paylaş- + -ma + -sı + -n- + -ı -> 'paylaşmasını' (të ndajnë / ndarjen e tyre).",
        msg_failure_albanian: "E pasaktë. Duhet prapashtesa e kërkesës së zhdrejtë: '-mas'."
      }
    },
    {
      type: 'CLOZE',
      promptTurkish: "'artırmak' fiilini gelecek zamanlı dolaylı anlatımla çekimleyiniz: 'Uzmanlar yabancı dil bilmenin ticaret hacmini artır___ını söylediler.'",
      promptAlbanian: "Zgjidhni nominalizimin e së ardhmes për raportimin e foljes 'artırmak' (se do të rrisë): 'Uzmanlar yabancı dil bilmenin ticaret hacmini artır___ını söylediler.'",
      payload: {
        sentence: "Uzmanlar yabancı dil bilmenin ticaret hacmini artır___ını söylediler.",
        options: ["acağ", "dığ", "mak", "ma"]
      },
      validation: {
        correct_answer: "acağ",
        msg_success: "Doğru! Gelecek zamanlı bir tahmin bildirildiği için '-acağını' (artır-acak-ı-n-ı) kullanılır.",
        msg_failure: "Yanlış. Gelecek zamanlı dolaylı anlatım eki '-acağ' (artıracağını) olmalıdır.",
        msg_success_albanian: "E saktë! Formohet artır- + -acak + -ı (pronore) + -n- + -ı -> 'artıracağını' (se do të rrisë).",
        msg_failure_albanian: "E pasaktë. Duhet prapashtesa e së ardhmes së raportuar: '-acağ'."
      }
    },
    {
      type: 'CLOZE',
      promptTurkish: "'yaratmak' fiilini birinci çoğul şahıs gelecek zamanlı dolaylı anlatımla çekimleyiniz: 'Balkan pazarında daha fazla istihdam yarat___ımızı söylemekten memnuniyet duyuyorum.'",
      promptAlbanian: "Zgjidhni nominalizimin e së ardhmes për vetën e parë shumës (se do të krijojmë) për foljen 'yaratmak': 'Balkan pazarında daha fazla istihdam yarat___ımızı söylemekten memnuniyet duyuyorum.'",
      payload: {
        sentence: "Balkan pazarında daha fazla istihdam yarat___ımızı söylemekten memnuniyet duyuyorum.",
        options: ["acağ", "dığ", "mak", "ma"]
      },
      validation: {
        correct_answer: "acağ",
        msg_success: "Doğru! Bizim ('yaratacağımız') yapacağımız eylem gelecek zaman dolaylı anlatım eki olan '-acağ' ile kurulur.",
        msg_failure: "Yanlış. Gelecek zaman birinci çoğul şahıs dolaylı anlatım eki '-acağ' (yaratacağımızı) olmalıdır.",
        msg_success_albanian: "E saktë! Formohet yarat- + -acak + -ımız (pronore, ne) + -ı (kallëzore) -> 'yaratacağımızı' (se do të krijojmë).",
        msg_failure_albanian: "E pasaktë. Duhet prapashtesa e së ardhmes shumës: '-acağ'."
      }
    },
    {
      type: 'ERROR_CORRECTION',
      promptTurkish: "Zaman uyumsuzluğuna bağlı dolaylı anlatım hatasını bulup düzeltiniz: 'Onun yarın buraya geldiğini söyledi.'",
      promptAlbanian: "Gjeni gabimin e kohës te raportimi i së nesërmes ('yarın'): 'Onun yarın buraya geldiğini söyledi.'",
      payload: {
        sentence: "Onun yarın buraya geldiğini söyledi.",
        options: ["geldiğini", "geleceğini", "gelmesini"]
      },
      validation: {
        correct_word: "geldiğini",
        correction: "geleceğini",
        msg_success: "Doğru! Zaman zarfı 'yarın' olduğu için geçmiş/şimdiki zaman yerine gelecek zaman dolaylı anlatımı 'geleceğini' olmalıdır.",
        msg_failure: "Yanlış. 'yarın' (neser) kelimesi gelecek zaman bildirdiği için doğru kelime 'geleceğini' olmalıdır.",
        msg_success_albanian: "E saktë! Pasi treguesi i kohës është 'yarın' (nesër), duhet përdorur nominalizimi i së ardhmes 'geleceğini', jo i së shkuarës 'geldiğini'.",
        msg_failure_albanian: "E pasaktë. Gabimi është te 'geldiğini', korrigjimi i saktë është 'geleceğini'."
      }
    },
    {
      type: 'ERROR_CORRECTION',
      promptTurkish: "Dolaylı istek yapısındaki şahıs eki hatasını bulup düzeltiniz: 'Müdür benim gitmesini söyledi.'",
      promptAlbanian: "Gjeni gabimin e vetës te kërkesa e zhdrejtë për vetën e parë (benim): 'Müdür benim gitmesini söyledi.'",
      payload: {
        sentence: "Müdür benim gitmesini söyledi.",
        options: ["gitmesini", "gitmemi", "gitmeki"]
      },
      validation: {
        correct_word: "gitmesini",
        correction: "gitmemi",
        msg_success: "Doğru! 'benim' iyelik zamiri kullanıldığı için birinci tekil şahıs çekimiyle 'gitmemi' (git-me-m-i) olmalıdır.",
        msg_failure: "Yanlış. Birinci tekil şahıs iyelik eki nedeniyle 'gitmesini' kelimesi 'gitmemi' şeklinde düzeltilmelidir.",
        msg_success_albanian: "E saktë! Përemri pronor është 'benim' (i imi), prandaj kërkohet veta e parë: git- + -me + -m (unë) + -i -> 'gitmemi' (të shkoja unë).",
        msg_failure_albanian: "E pasaktë. Gabimi është te 'gitmesini', korrigjimi i saktë shkruhet 'gitmemi'."
      }
    },
    {
      type: 'ERROR_CORRECTION',
      promptTurkish: "Ünlü düşmesi kuralına uymayan kelimenin yazım hatasını bulunuz ve düzeltiniz: 'Ticaret hacımını artırmak istiyorlar.'",
      promptAlbanian: "Gjeni gabimin e rënies zanafore te emri 'hacim' (vëllimi): 'Ticaret hacımını artırmak istiyorlar.'",
      payload: {
        sentence: "Ticaret hacımını artırmak istiyorlar.",
        options: ["hacımını", "hacmini", "hacimini"]
      },
      validation: {
        correct_word: "hacımını",
        correction: "hacmini",
        msg_success: "Doğru! 'hacim' kelimesi ünlüyle başlayan ek aldığında ikinci hecedeki 'i' düşer ve 'hacmini' olur.",
        msg_failure: "Yanlış. Ünlü düşmesi kuralına göre 'hacımını' değil 'hacmini' şeklinde yazılmalıdır.",
        msg_success_albanian: "E saktë! Rregulli i rënies zanafore kërkon që 'hacim' të humbasë zanoren 'i' kur merr prapashtesë: 'hacmini'.",
        msg_failure_albanian: "E pasaktë. Gabimi është te 'hacımını', korrigjimi i saktë është 'hacmini'."
      }
    },
    {
      type: 'ERROR_CORRECTION',
      promptTurkish: "Ünsüz benzeşmesi (sertleşme) kuralı hatasını bulunuz ve düzeltiniz: 'Büyük şehirlere taşınmakdansa uzaktan çalışırım.'",
      promptAlbanian: "Gjeni gabimin e asimilimit (fortësimit) të bashkëtingëllores te prapashtesa '-maktansa': 'Büyük şehirlere taşınmakdansa uzaktan çalışırım.'",
      payload: {
        sentence: "Büyük şehirlere taşınmakdansa uzaktan çalışırım.",
        options: ["taşınmakdansa", "taşınmaktansa", "taşınmaktan"]
      },
      validation: {
        correct_word: "taşınmakdansa",
        correction: "taşınmaktansa",
        msg_success: "Doğru! Sert ünsüz 'k' harfinden sonra gelen ek sertleşerek 't' olur: 'taşınmaktansa'.",
        msg_failure: "Yanlış. Ünsüz sertleşmesi kuralına göre 'taşınmakdansa' değil 'taşınmaktansa' yazılmalıdır.",
        msg_success_albanian: "E saktë! Shkronja 'k' është bashkëtingëllore e fortë, ndaj prapashtesa ndryshon nga 'd' në 't': 'taşınmaktansa' (sesa të shpërngulem).",
        msg_failure_albanian: "E pasaktë. Gabimi është te 'taşınmakdansa', e sakta shkruhet 'taşınmaktansa'."
      }
    },
    {
      type: 'ERROR_CORRECTION',
      promptTurkish: "Cümledeki eksik harf yazım hatasını bulup düzeltiniz: 'Yeni yatırımlarla istidam yaratacağız.'",
      promptAlbanian: "Gjeni gabimin e shkrimit te fjala 'istihdam' (punësim): 'Yeni yatırımlarla istidam yaratacağız.'",
      payload: {
        sentence: "Yeni yatırımlarla istidam yaratacağız.",
        options: ["istidam", "istihdam", "istihdamı"]
      },
      validation: {
        correct_word: "istidam",
        correction: "istihdam",
        msg_success: "Doğru! Kelimenin doğru yazımı 'h' harfini içeren 'istihdam' şeklindedir.",
        msg_failure: "Yanlış. Arapça kökenli 'istihdam' kelimesinde 'h' harfi unutulmuştur, doğrusu 'istihdam' olmalıdır.",
        msg_success_albanian: "E saktë! Fjala shkruhet me 'h' ndërmjetësuese: 'istihdam' (punësim).",
        msg_failure_albanian: "E pasaktë. Gabimi është te 'istidam', e sakta është 'istihdam'."
      }
    },
    {
      type: 'ERROR_CORRECTION',
      promptTurkish: "Bağlacın yazımındaki gereksiz ünlü türemesi hatasını bulup düzeltiniz: 'Akisine, bazıları da çalışmak istiyor.'",
      promptAlbanian: "Gjeni gabimin e shkrimit (shkronjë shtesë) te lidhëza: 'Akisine, bazıları da çalışmak istiyor.'",
      payload: {
        sentence: "Akisine, bazıları da çalışmak istiyor.",
        options: ["Akisine", "Aksine", "Aksineyi"]
      },
      validation: {
        correct_word: "Akisine",
        correction: "Aksine",
        msg_success: "Doğru! Karşıtlık bağlacının doğru yazımı 'Aksine' şeklindedir, aradaki 'i' harfi gereksizdir.",
        msg_failure: "Yanlış. Kelimenin doğru şekli 'Aksine' olmalıdır, 'Akisine' yanlış bir kullanımdır.",
        msg_success_albanian: "E saktë! Lidhëza shkruhet pa 'i' në mes: 'Aksine' (përkundrazi).",
        msg_failure_albanian: "E pasaktë. Gabimi është 'Akisine', e sakta shkruhet 'Aksine'."
      }
    },
    {
      type: 'CONNECTOR_MATCHING',
      promptTurkish: "Arnavutça 'në vend që të...' ifadesinin Türkçe karşılığını seçiniz.",
      promptAlbanian: "Zgjidhni përkthimin e saktë në turqisht për lidhëzën: 'në vend që të...'",
      payload: {
        options: ["-mak yerine", "-maktansa", "aksine"]
      },
      validation: {
        correct_answer: "-mak yerine",
        msg_success: "Doğru! '-mak yerine' yapısı 'në vend që të' anlamına gelir.",
        msg_failure: "Yanlış. Doğru karşılık '-mak yerine' olmalıdır.",
        msg_success_albanian: "E saktë! '-mak yerine' do të thotë 'në vend që të...'.",
        msg_failure_albanian: "E pasaktë. Lidhëza e saktë është '-mak yerine'."
      }
    },
    {
      type: 'CONNECTOR_MATCHING',
      promptTurkish: "Arnavutça 'më mirë se sa të... / sesa të...' ifadesinin Türkçe karşılığını seçiniz.",
      promptAlbanian: "Zgjidhni përkthimin e saktë në turqisht për lidhëzën shqip: 'më mirë se sa të... / sesa të...'",
      payload: {
        options: ["-maktansa", "-mak yerine", "aksine"]
      },
      validation: {
        correct_answer: "-maktansa",
        msg_success: "Doğru! '-maktansa' ifadesi 'më mirë se sa të / sesa të' anlamına gelir.",
        msg_failure: "Yanlış. Doğru karşılık '-maktansa' olmalıdır.",
        msg_success_albanian: "E saktë! '-maktansa' përkthehet 'më mirë se sa të / sesa të'.",
        msg_failure_albanian: "E pasaktë. Zgjedhja e saktë është '-maktansa'."
      }
    },
    {
      type: 'CONNECTOR_MATCHING',
      promptTurkish: "Arnavutça 'përkundrazi' ifadesinin Türkçe karşılığını seçiniz.",
      promptAlbanian: "Zgjidhni përkthimin e saktë në turqisht për lidhëzën shqip: 'përkundrazi'",
      payload: {
        options: ["aksine", "-mak yerine", "-maktansa"]
      },
      validation: {
        correct_answer: "aksine",
        msg_success: "Doğru! 'aksine' bağlacı 'përkundrazi' anlamına gelir.",
        msg_failure: "Yanlış. Doğru karşılık 'aksine' olmalıdır.",
        msg_success_albanian: "E saktë! 'aksine' përkthehet si 'përkundrazi'.",
        msg_failure_albanian: "E pasaktë. Opsioni i saktë është 'aksine'."
      }
    },
    {
      type: 'CONNECTOR_MATCHING',
      promptTurkish: "Arnavutça 'eksperti / specialisti' teriminin Türkçe karşılığını seçiniz.",
      promptAlbanian: "Përzgjidhni përkthimin e saktë në turqisht për emrin: 'eksperti / specialisti'",
      payload: {
        options: ["uzman", "şirket", "deneyim"]
      },
      validation: {
        correct_answer: "uzman",
        msg_success: "Doğru! 'uzman' kelimesi 'eksperti' anlamına gelir.",
        msg_failure: "Yanlış. Doğru karşılık 'uzman' olmalıdır.",
        msg_success_albanian: "E saktë! 'uzman' do të thotë 'eksperti / specialisti'.",
        msg_failure_albanian: "E pasaktë. Fjala e saktë është 'uzman'."
      }
    },
    {
      type: 'CONNECTOR_MATCHING',
      promptTurkish: "Arnavutça 'punësimi' teriminin Türkçe karşılığını seçiniz.",
      promptAlbanian: "Përzgjidhni përkthimin e saktë në turqisht për emrin: 'punësimi'",
      payload: {
        options: ["istihdam", "ticaret", "fırsat"]
      },
      validation: {
        correct_answer: "istihdam",
        msg_success: "Doğru! 'istihdam' kelimesi 'punësimi' anlamına gelir.",
        msg_failure: "Yanlış. Doğru karşılık 'istihdam' olmalıdır.",
        msg_success_albanian: "E saktë! 'istihdam' do të thotë 'punësimi'.",
        msg_failure_albanian: "E pasaktë. Zgjedhja e saktë është 'istihdam'."
      }
    },
    {
      type: 'CONNECTOR_MATCHING',
      promptTurkish: "Arnavutça 'përvoja / eksperienca' teriminin Türkçe karşılığını seçiniz.",
      promptAlbanian: "Përzgjidhni përkthimin e saktë në turqisht për emrin: 'përvoja / eksperienca'",
      payload: {
        options: ["deneyim", "kariyer", "yaklaşım"]
      },
      validation: {
        correct_answer: "deneyim",
        msg_success: "Doğru! 'deneyim' kelimesi 'përvoja' anlamına gelir.",
        msg_failure: "Yanlış. Doğru karşılık 'deneyim' olmalıdır.",
        msg_success_albanian: "E saktë! 'deneyim' do të thotë 'përvoja / eksperienca'.",
        msg_failure_albanian: "E pasaktë. Fjala e saktë është 'deneyim'."
      }
    }
  ]
};
