export interface A2VocabularyItem {
  id: string;
  word: string;
  translation: string;
  pos: 'emër' | 'folje' | 'mbiemër' | 'ndajfolje' | 'përemër' | 'lidhëz' | 'pasthirrmë' | 'shprehje';
  category: 'work' | 'leisure' | 'travel' | 'education' | 'environment' | 'emotions' | 'technology' | 'society' | 'verbs' | 'adverbs';
  is_balkan?: boolean;
  notes?: string;
  examples?: Array<{ source: string; target: string }>;
  derivatives?: Array<{ word: string; translation: string; pos: string }>;
}

export const a2VocabularyData: A2VocabularyItem[] = [
  {
    "id": "a2-wor-1",
    "word": "Meslek",
    "translation": "Profesion",
    "pos": "emër",
    "category": "work",
    "is_balkan": true,
    "notes": "Huazim balkanik.",
    "examples": [
      {
        "source": "Senin mesleğin ne?",
        "target": "Cili është profesioni yt?"
      }
    ]
  },
  {
    "id": "a2-wor-2",
    "word": "Şef",
    "translation": "Shef / Drejtues",
    "pos": "emër",
    "category": "work",
    "is_balkan": true,
    "examples": [
      {
        "source": "Şef yeni kararlar aldı.",
        "target": "Shefi mori vendime të reja."
      }
    ]
  },
  {
    "id": "a2-wor-3",
    "word": "İşçi",
    "translation": "Punëtor",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "İşçiler fabrikada çalışıyor.",
        "target": "Punëtorët po punojnë në fabrikë."
      }
    ]
  },
  {
    "id": "a2-wor-4",
    "word": "Memur",
    "translation": "Zyrtar / Punonjës civil",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Babam devlet memurudur.",
        "target": "Babai im është zyrtar shtetëror."
      }
    ]
  },
  {
    "id": "a2-wor-5",
    "word": "Mimar",
    "translation": "Arkitekt",
    "pos": "emër",
    "category": "work",
    "is_balkan": true,
    "examples": [
      {
        "source": "Mimar yeni bir ev çizdi.",
        "target": "Arkitekti vizatoi një shtëpi të re."
      }
    ]
  },
  {
    "id": "a2-wor-6",
    "word": "Muhasebeci",
    "translation": "Kontabilist",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Muhasebeci hesapları kontrol etti.",
        "target": "Kontabilisti kontrolloi llogaritë."
      }
    ]
  },
  {
    "id": "a2-wor-7",
    "word": "Danışman",
    "translation": "Konsulent / Këshilltar",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Finansal danışmandan bilgi aldık.",
        "target": "Morëm informacion nga konsulenti financiar."
      }
    ]
  },
  {
    "id": "a2-wor-8",
    "word": "Gazeteci",
    "translation": "Gazetar",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Gazeteci sorular sordu.",
        "target": "Gazetari bëri pyetje."
      }
    ]
  },
  {
    "id": "a2-wor-9",
    "word": "Çevirmen",
    "translation": "Përkthyes",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Çevirmen kitabı Arnavutçaya çevirdi.",
        "target": "Përkthyesi e përktheu librin në shqip."
      }
    ]
  },
  {
    "id": "a2-wor-10",
    "word": "Oyuncu",
    "translation": "Aktor / Lojtar",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Tiyatro oyuncuları sahneye çıktı.",
        "target": "Aktorët e teatrit dolën në skenë."
      }
    ]
  },
  {
    "id": "a2-wor-11",
    "word": "Uzman",
    "translation": "Specialist / Ekspert",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "O, pazarlama alanında uzmandır.",
        "target": "Ai është specialist në fushën e marketingut."
      }
    ]
  },
  {
    "id": "a2-wor-12",
    "word": "Yönetici",
    "translation": "Menaxher / Drejtues",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Yönetici projeyi onayladı.",
        "target": "Menaxheri e miratoi projektin."
      }
    ]
  },
  {
    "id": "a2-wor-13",
    "word": "Maaş",
    "translation": "Rrogë / Pagë",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Maaşımı her ayın başında alıyorum.",
        "target": "E marr rrogën në fillim të çdo muaji."
      }
    ]
  },
  {
    "id": "a2-wor-14",
    "word": "Gelir",
    "translation": "Të ardhura",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Aylık gelirimiz arttı.",
        "target": "Të ardhurat tona mujore u rritën."
      }
    ]
  },
  {
    "id": "a2-wor-15",
    "word": "Gider",
    "translation": "Shpenzime / Dalje",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Bu ay giderlerimiz çok yüksek.",
        "target": "Këtë muaj shpenzimet tona janë shumë të larta."
      }
    ]
  },
  {
    "id": "a2-wor-16",
    "word": "Vergi",
    "translation": "Taksë / Tatim",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Her vatandaş vergi ödemelidir.",
        "target": "Çdo qytetar duhet të paguajë taksa."
      }
    ]
  },
  {
    "id": "a2-wor-17",
    "word": "Sözleşme",
    "translation": "Kontratë / Marrëveshje",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "İş sözleşmesini imzaladık.",
        "target": "Nënshkruam kontratën e punës."
      }
    ]
  },
  {
    "id": "a2-wor-18",
    "word": "Toplantı",
    "translation": "Mbledhje / Takim",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Toplantı saat ikide başlayacak.",
        "target": "Mbledhja do të fillojë në orën dy."
      }
    ]
  },
  {
    "id": "a2-wor-19",
    "word": "Proje",
    "translation": "Projekt",
    "pos": "emër",
    "category": "work",
    "is_balkan": true,
    "examples": [
      {
        "source": "Yeni proje üzerinde çalışıyoruz.",
        "target": "Po punojmë mbi projektin e ri."
      }
    ]
  },
  {
    "id": "a2-wor-20",
    "word": "Tecrübe",
    "translation": "Përvojë / Eksperiencë",
    "pos": "emër",
    "category": "work",
    "is_balkan": true,
    "examples": [
      {
        "source": "İş için tecrübe gerekiyor.",
        "target": "Për punë kërkohet përvojë."
      }
    ]
  },
  {
    "id": "a2-wor-21",
    "word": "Başvuru",
    "translation": "Aplikim / Kërkesë",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "İş başvurusu kabul edildi.",
        "target": "Aplikimi për punë u pranua."
      }
    ]
  },
  {
    "id": "a2-wor-22",
    "word": "Mülakat",
    "translation": "Intervistë pune",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Mülakat çok iyi geçti.",
        "target": "Intervista e punës shkoi shumë mirë."
      }
    ]
  },
  {
    "id": "a2-wor-23",
    "word": "Emekli",
    "translation": "I pensionuar",
    "pos": "mbiemër",
    "category": "work",
    "examples": [
      {
        "source": "Dedem geçen yıl emekli oldu.",
        "target": "Gjyshi im u pensionua vitin e kaluar."
      }
    ]
  },
  {
    "id": "a2-wor-24",
    "word": "Stajyer",
    "translation": "Praktikant",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Stajyer ofiste yardım ediyor.",
        "target": "Praktikanti po ndihmon në zyrë."
      }
    ]
  },
  {
    "id": "a2-wor-25",
    "word": "Mesai",
    "translation": "Orar pune / Jashtë orarit",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Bugün mesaiye kalacağım.",
        "target": "Sot do të qëndroj jashtë orarit."
      }
    ]
  },
  {
    "id": "a2-wor-26",
    "word": "İzin",
    "translation": "Leje",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Yıllık izin kullanmak istiyorum.",
        "target": "Dua të përdor lejen vjetore."
      }
    ]
  },
  {
    "id": "a2-wor-27",
    "word": "Vardiya",
    "translation": "Ndërresë / Turn",
    "pos": "emër",
    "category": "work",
    "is_balkan": true,
    "examples": [
      {
        "source": "Gece vardiyasında çalışıyorum.",
        "target": "Punoj në turnin e natës."
      }
    ]
  },
  {
    "id": "a2-wor-28",
    "word": "Sendika",
    "translation": "Sindikatë",
    "pos": "emër",
    "category": "work",
    "is_balkan": true,
    "examples": [
      {
        "source": "Sendika haklarımızı savunuyor.",
        "target": "Sindikata mbron të drejtat tona."
      }
    ]
  },
  {
    "id": "a2-wor-29",
    "word": "Fabrika",
    "translation": "Fabrikë",
    "pos": "emër",
    "category": "work",
    "is_balkan": true,
    "examples": [
      {
        "source": "Bu fabrika araba üretiyor.",
        "target": "Kjo fabrikë prodhon makina."
      }
    ]
  },
  {
    "id": "a2-wor-30",
    "word": "Büro",
    "translation": "Zyrë",
    "pos": "emër",
    "category": "work",
    "is_balkan": true,
    "examples": [
      {
        "source": "Yeni büromuz çok geniş.",
        "target": "Zyra jonë e re është shumë e gjerë."
      }
    ]
  },
  {
    "id": "a2-wor-31",
    "word": "Ticaret",
    "translation": "Tregti",
    "pos": "emër",
    "category": "work",
    "is_balkan": true,
    "examples": [
      {
        "source": "Dış ticaret gelişiyor.",
        "target": "Tregtia e jashtme po zhvillohet."
      }
    ]
  },
  {
    "id": "a2-wor-32",
    "word": "Yatırım",
    "translation": "Investim",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Gayrimenkul yatırımı yaptık.",
        "target": "Bëmë investim në patundshmëri."
      }
    ]
  },
  {
    "id": "a2-wor-33",
    "word": "Bütçe",
    "translation": "Buxhet",
    "pos": "emër",
    "category": "work",
    "is_balkan": true,
    "examples": [
      {
        "source": "Bütçemizi dikkatli yönetmeliyiz.",
        "target": "Duhet ta menaxhojmë buxhetin me kujdes."
      }
    ]
  },
  {
    "id": "a2-wor-34",
    "word": "Rekabet",
    "translation": "Konkurrencë",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Piyasada büyük rekabet var.",
        "target": "Ka konkurrencë të madhe në treg."
      }
    ]
  },
  {
    "id": "a2-wor-35",
    "word": "Başarı",
    "translation": "Sukses",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Bu başarı hepimizin.",
        "target": "Ky sukses është i të gjithë neve."
      }
    ]
  },
  {
    "id": "a2-wor-36",
    "word": "Görev",
    "translation": "Detyrë / Mision",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Görevimi tamamladım.",
        "target": "E përfundova detyrën time."
      }
    ]
  },
  {
    "id": "a2-wor-37",
    "word": "Yetenek",
    "translation": "Aftësi / Talent",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Onun müzik yeteneği var.",
        "target": "Ai ka talent për muzikë."
      }
    ]
  },
  {
    "id": "a2-wor-38",
    "word": "İşbirliği",
    "translation": "Bashkëpunim",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "İki şirket işbirliği yaptı.",
        "target": "Dy kompanitë bashkëpunuan."
      }
    ]
  },
  {
    "id": "a2-wor-39",
    "word": "İşsiz",
    "translation": "I papunë",
    "pos": "mbiemër",
    "category": "work",
    "examples": [
      {
        "source": "Kardeşim şu an işsiz.",
        "target": "Vëllai im është i papunë tani."
      }
    ]
  },
  {
    "id": "a2-wor-40",
    "word": "Şirket",
    "translation": "Kompani / Shoqëri",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Bu şirket uluslararasıdır.",
        "target": "Kjo kompani është ndërkombëtare."
      }
    ]
  },
  {
    "id": "a2-wor-41",
    "word": "Patron",
    "translation": "Patron / Pronar",
    "pos": "emër",
    "category": "work",
    "is_balkan": true,
    "examples": [
      {
        "source": "Patron işçilerle görüştü.",
        "target": "Patroni u takua me punëtorët."
      }
    ]
  },
  {
    "id": "a2-wor-42",
    "word": "Hizmet",
    "translation": "Shërbim",
    "pos": "emër",
    "category": "work",
    "is_balkan": true,
    "examples": [
      {
        "source": "Müşteri hizmetleri yardımcı oldu.",
        "target": "Shërbimi i klientit na ndihmoi."
      }
    ]
  },
  {
    "id": "a2-wor-43",
    "word": "İş ilanı",
    "translation": "Shpallje pune",
    "pos": "shprehje",
    "category": "work",
    "examples": [
      {
        "source": "Yeni bir iş ilanı gördüm.",
        "target": "Pashë një shpallje të re pune."
      }
    ]
  },
  {
    "id": "a2-wor-44",
    "word": "Kariyer",
    "translation": "Karrierë",
    "pos": "emër",
    "category": "work",
    "is_balkan": true,
    "examples": [
      {
        "source": "Kariyer yapmak kolay değil.",
        "target": "Të bësh karrierë nuk është e lehtë."
      }
    ]
  },
  {
    "id": "a2-wor-45",
    "word": "Tazminat",
    "translation": "Dëmshpërblim / Shpërblim largimi",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "İşten ayrılınca tazminat aldı.",
        "target": "Mori dëmshpërblim kur u largua nga puna."
      }
    ]
  },
  {
    "id": "a2-wor-46",
    "word": "Esnaf",
    "translation": "Tregtar i vogël / Zanatçi",
    "pos": "emër",
    "category": "work",
    "is_balkan": true,
    "examples": [
      {
        "source": "Esnaf komşularımızı ziyaret ettik.",
        "target": "Vizituam fqinjët tanë tregtarë."
      }
    ]
  },
  {
    "id": "a2-wor-47",
    "word": "Sanayi",
    "translation": "Industri",
    "pos": "emër",
    "category": "work",
    "is_balkan": true,
    "examples": [
      {
        "source": "Sanayi bölgesi çok büyük.",
        "target": "Zona industriale është shumë e madhe."
      }
    ]
  },
  {
    "id": "a2-wor-48",
    "word": "Üretim",
    "translation": "Prodhim",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Fabrikada üretim arttı.",
        "target": "Prodhimi në fabrikë u rrit."
      }
    ]
  },
  {
    "id": "a2-wor-49",
    "word": "Pazarlama",
    "translation": "Marketing / Tregtim",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Pazarlama müdürü sunum yaptı.",
        "target": "Drejtoresha e marketingut bëri prezantim."
      }
    ]
  },
  {
    "id": "a2-wor-50",
    "word": "Satış",
    "translation": "Shitje",
    "pos": "emër",
    "category": "work",
    "examples": [
      {
        "source": "Satışlar bu ay düştü.",
        "target": "Shitjet ranë këtë muaj."
      }
    ]
  },
  {
    "id": "a2-lei-1",
    "word": "Yelken",
    "translation": "Lundrim me vela",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Yazın yelken sporuna başlıyorum.",
        "target": "Në verë po filloj sportin e lundrimit me vela."
      }
    ]
  },
  {
    "id": "a2-lei-2",
    "word": "Tiyatro",
    "translation": "Teatër",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Tiyatro bileti aldım.",
        "target": "Bleva biletë teatri."
      }
    ]
  },
  {
    "id": "a2-lei-3",
    "word": "Konser",
    "translation": "Koncert",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Yarın harika bir konser var.",
        "target": "Nesër ka një koncert të mrekullueshëm."
      }
    ]
  },
  {
    "id": "a2-lei-4",
    "word": "Sergi",
    "translation": "Ekspozitë",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Resim sergisini gezdik.",
        "target": "Vizituam ekspozitën e pikturës."
      }
    ]
  },
  {
    "id": "a2-lei-5",
    "word": "Müze",
    "translation": "Muze",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Tarih müzesi ücretsizdir.",
        "target": "Muzeu i historisë është falas."
      }
    ]
  },
  {
    "id": "a2-lei-6",
    "word": "Fotoğrafçılık",
    "translation": "Fotografi (hobi)",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Fotoğrafçılık kursuna başlıyorum.",
        "target": "Po filloj një kurs fotografie."
      }
    ]
  },
  {
    "id": "a2-lei-7",
    "word": "Resim",
    "translation": "Vizatim / Pikturë",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Boş zamanlarımda resim yapıyorum.",
        "target": "Në kohën e lirë bëj pikturë."
      }
    ]
  },
  {
    "id": "a2-lei-8",
    "word": "Heykel",
    "translation": "Skulpturë",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Müzede eski heykeller var.",
        "target": "Në muze ka skulptura të vjetra."
      }
    ]
  },
  {
    "id": "a2-lei-9",
    "word": "Dans",
    "translation": "Kërcim / Valëzim",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Halk dansları gösterisini izledik.",
        "target": "Pamë shfaqjen e valleve popullore."
      }
    ]
  },
  {
    "id": "a2-lei-10",
    "word": "Müzik",
    "translation": "Muzikë",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Klasik müzik dinlemeyi severim.",
        "target": "Më pëlqen to dëgjoj muzikë klasike."
      }
    ]
  },
  {
    "id": "a2-lei-11",
    "word": "Enstrüman",
    "translation": "Instrument",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Herhangi bir enstrüman çalıyor musun?",
        "target": "A i bie ndonjë instrumenti?"
      }
    ]
  },
  {
    "id": "a2-lei-12",
    "word": "Gitar",
    "translation": "Gitarë",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Kardeşim gitar çalıyor.",
        "target": "Vëllai im i bie gitarës."
      }
    ]
  },
  {
    "id": "a2-lei-13",
    "word": "Piyano",
    "translation": "Piano",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Piyano çalmayı öğrenmek zor.",
        "target": "Është vështirë të mësosh t'i biesh pianos."
      }
    ]
  },
  {
    "id": "a2-lei-14",
    "word": "Şarkı",
    "translation": "Këngë",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "En sevdiğin şarkı hangisi?",
        "target": "Cila është kënga jote e preferuar?"
      }
    ]
  },
  {
    "id": "a2-lei-15",
    "word": "Roman",
    "translation": "Roman",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Bu yeni romanı okudun mu?",
        "target": "A e lexove këtë roman të ri?"
      }
    ]
  },
  {
    "id": "a2-lei-16",
    "word": "Şiir",
    "translation": "Poezi / Vjershë",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Şair güzel bir şiir okudu.",
        "target": "Poeti lexoi një poezi të bukur."
      }
    ]
  },
  {
    "id": "a2-lei-17",
    "word": "Futbol",
    "translation": "Futboll",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Arkadaşlarımla futbol oynuyorum.",
        "target": "Luaj futboll me shokët e mi."
      }
    ]
  },
  {
    "id": "a2-lei-18",
    "word": "Basketbol",
    "translation": "Basketboll",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Okul takımında basketbol oynuyor.",
        "target": "Luan basketbol në skuadrën e shkollës."
      }
    ]
  },
  {
    "id": "a2-lei-19",
    "word": "Tenis",
    "translation": "Tenis",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Hafta sonu tenis oynayacağız.",
        "target": "Të fundjavë do të luajmë tenis."
      }
    ]
  },
  {
    "id": "a2-lei-20",
    "word": "Yüzme",
    "translation": "Not",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Yüzme en sağlıklı spordur.",
        "target": "Noti është sporti më i shëndetshëm."
      }
    ]
  },
  {
    "id": "a2-lei-21",
    "word": "Koşu",
    "translation": "Vrapim / Vrap",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Her sabah koşu yaparım.",
        "target": "Çdo mëngjes bëj vrap."
      }
    ]
  },
  {
    "id": "a2-lei-22",
    "word": "Satranç",
    "translation": "Shkak / Shah",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Satranç oynamayı sever misin?",
        "target": "A të pëlqen të luash shah?"
      }
    ]
  },
  {
    "id": "a2-lei-23",
    "word": "Bulmaca",
    "translation": "Fjalëkryq / Gjëegjëzë",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Gazetede bulmaca çözüyorum.",
        "target": "Zgjidhi fjalëkryq në gazetë."
      }
    ]
  },
  {
    "id": "a2-lei-24",
    "word": "Seyahat",
    "translation": "Udhëtim",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Seyahat etmek bana energy veriyor.",
        "target": "Të udhëtosh më jep energji."
      }
    ]
  },
  {
    "id": "a2-lei-25",
    "word": "Kamp",
    "translation": "Kampim",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Dağda kamp kuracağız.",
        "target": "Do të ngremë kamp në mal."
      }
    ]
  },
  {
    "id": "a2-lei-26",
    "word": "Doğa",
    "translation": "Natyrë",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Doğada yürüyüş yapmayı severim.",
        "target": "Më pëlqen të bëj shëtitje në natyrë."
      }
    ]
  },
  {
    "id": "a2-lei-27",
    "word": "Bahçecilik",
    "translation": "Kopshtari",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Annem bahçecilikle uğraşıyor.",
        "target": "Nëna ime merret me kopshtari."
      }
    ]
  },
  {
    "id": "a2-lei-28",
    "word": "Koleksiyon",
    "translation": "Koleksion",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Pul koleksiyonum var.",
        "target": "Kam një koleksion pullash."
      }
    ]
  },
  {
    "id": "a2-lei-29",
    "word": "Örgü",
    "translation": "Thurje / Triko",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Ninem örgü örüyor.",
        "target": "Gjyshja ime po thur."
      }
    ]
  },
  {
    "id": "a2-lei-30",
    "word": "Evcil hayvan",
    "translation": "Kafshë shtëpiake",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Evcil hayvan beslemek güzeldir.",
        "target": "Të mbash kafshë shtëpiake është bukur."
      }
    ]
  },
  {
    "id": "a2-lei-31",
    "word": "Eğlence",
    "translation": "Argëtim / Dëfrim",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Bu partide çok eğlence var.",
        "target": "Ka shumë argëtim në këtë festë."
      }
    ]
  },
  {
    "id": "a2-lei-32",
    "word": "Dinlenme",
    "translation": "Pushim / Qetësim",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Biraz dinlenmeye ihtiyacım var.",
        "target": "Kam nevojë për pak pushim."
      }
    ]
  },
  {
    "id": "a2-lei-33",
    "word": "Boş zaman",
    "translation": "Kohë e lirë",
    "pos": "shprehje",
    "category": "leisure",
    "examples": [
      {
        "source": "Boş zamanlarında ne yaparsın?",
        "target": "Çfarë bën në kohën tënde të lirë?"
      }
    ]
  },
  {
    "id": "a2-lei-34",
    "word": "Alışkanlık",
    "translation": "Zakon / Shprehi",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Erken kalkmak iyi bir alışkanlıktır.",
        "target": "Zgjimi herët është zakon i mirë."
      }
    ]
  },
  {
    "id": "a2-lei-35",
    "word": "Kulüp",
    "translation": "Klub",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Fotoğrafçılık kulübüne katıldım.",
        "target": "U bashkova me klubin e fotografisë."
      }
    ]
  },
  {
    "id": "a2-lei-36",
    "word": "Dernek",
    "translation": "Shoqatë",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Bu dernek çocuklara yardım ediyor.",
        "target": "Kjo shoqatë ndihmon fëmijët."
      }
    ]
  },
  {
    "id": "a2-lei-37",
    "word": "Festival",
    "translation": "Festival",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Film festivali haftaya başlıyor.",
        "target": "Festivali i filmit fillon javën tjetër."
      }
    ]
  },
  {
    "id": "a2-lei-38",
    "word": "Şenlik",
    "translation": "Festë / Gëzim",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Köyde şenlik yapıldı.",
        "target": "U bë festë në fshat."
      }
    ]
  },
  {
    "id": "a2-lei-39",
    "word": "Eğlenceli",
    "translation": "Argëtues / I këndshëm",
    "pos": "mbiemër",
    "category": "leisure",
    "examples": [
      {
        "source": "Bu film çok eğlenceli.",
        "target": "Ky film është shumë argëtues."
      }
    ]
  },
  {
    "id": "a2-lei-40",
    "word": "Heyecanlı",
    "translation": "Emocionues / I ngazëllyer",
    "pos": "mbiemër",
    "category": "leisure",
    "examples": [
      {
        "source": "Çok heyecanlı bir maç izledik.",
        "target": "Pamë një ndeshje shumë emocionuese."
      }
    ]
  },
  {
    "id": "a2-lei-41",
    "word": "Sıkıcı",
    "translation": "I mërzitshëm",
    "pos": "mbiemër",
    "category": "leisure",
    "examples": [
      {
        "source": "Bu ders çok sıkıcıydı.",
        "target": "Ky mësim ishte shumë i mërzitshëm."
      }
    ]
  },
  {
    "id": "a2-lei-42",
    "word": "İlginç",
    "translation": "Interesant",
    "pos": "mbiemër",
    "category": "leisure",
    "examples": [
      {
        "source": "Bu kitapta ilginç bilgiler var.",
        "target": "Në këtë libër ka informacione interesante."
      }
    ]
  },
  {
    "id": "a2-lei-43",
    "word": "Yaratıcı",
    "translation": "Krijues",
    "pos": "mbiemër",
    "category": "leisure",
    "examples": [
      {
        "source": "Yaratıcı fikirler sundu.",
        "target": "Prezantoi ide krijuese."
      }
    ]
  },
  {
    "id": "a2-lei-44",
    "word": "Keyif",
    "translation": "Kënaqësi / Qejf",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Bahçede kahve içmek büyük keyif.",
        "target": "Pirja e kafesë në kopsht është kënaqësi e madhe."
      }
    ]
  },
  {
    "id": "a2-lei-45",
    "word": "Hobi",
    "translation": "Hobi / Pasion",
    "pos": "emër",
    "category": "leisure",
    "is_balkan": true,
    "examples": [
      {
        "source": "Senin hobilerin neler?",
        "target": "Cilat janë hobitë e tu?"
      }
    ]
  },
  {
    "id": "a2-lei-46",
    "word": "Tırmanış",
    "translation": "Ngjitje (në male)",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Hafta sonu dağ tırmanışı yaptık.",
        "target": "Të fundjavë bëmë ngjitje në mal."
      }
    ]
  },
  {
    "id": "a2-lei-47",
    "word": "Kamp Ateşi",
    "translation": "Zjarri i kampit",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Kamp ateşinin etrafında oturduk.",
        "target": "Ndenjëm rreth zjarrit të kampit."
      }
    ]
  },
  {
    "id": "a2-lei-48",
    "word": "Egzersiz",
    "translation": "Ushtrim (fizik)",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Günlük egzersiz yapmak önemlidir.",
        "target": "Kryerja e ushtrimeve ditore është e rëndësishme."
      }
    ]
  },
  {
    "id": "a2-lei-49",
    "word": "Buluşma",
    "translation": "Takim / Rrethanë takimi",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Buluşma yerimiz saat sekizde.",
        "target": "Vendi i takimit tonë është në orën tetë."
      }
    ]
  },
  {
    "id": "a2-lei-50",
    "word": "Kutlama",
    "translation": "Festim / Kremtim",
    "pos": "emër",
    "category": "leisure",
    "examples": [
      {
        "source": "Doğum günü kutlaması harikaydı.",
        "target": "Festimi i ditëlindjes ishte i mrekullueshëm."
      }
    ]
  },
  {
    "id": "a2-tra-1",
    "word": "Yurt dışı",
    "translation": "Jashtë shtetit / Jashtë vendit",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Yaz tatilinde yurt dışına gideceğiz.",
        "target": "Në pushimet e verës do të shkojmë jashtë shtetit."
      }
    ]
  },
  {
    "id": "a2-tra-2",
    "word": "Vize",
    "translation": "Vizë",
    "pos": "emër",
    "category": "travel",
    "is_balkan": true,
    "examples": [
      {
        "source": "Vize başvurusu yaptım.",
        "target": "Kam bërë aplikim për vizë."
      }
    ]
  },
  {
    "id": "a2-tra-3",
    "word": "Seyahatname",
    "translation": "Libër udhëtimesh",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Evliya Çelebi'nin seyahatnamesini okudum.",
        "target": "Lexova librin e udhëtimeve të Evliya Çelebiut."
      }
    ]
  },
  {
    "id": "a2-tra-4",
    "word": "Turist",
    "translation": "Turist",
    "pos": "emër",
    "category": "travel",
    "is_balkan": true,
    "examples": [
      {
        "source": "Yazın buraya çok turist geliyor.",
        "target": "Në verë këtu vijnë shumë turistë."
      }
    ]
  },
  {
    "id": "a2-tra-5",
    "word": "Rehber",
    "translation": "Udhërrëfyes / Guida",
    "pos": "emër",
    "category": "travel",
    "is_balkan": true,
    "examples": [
      {
        "source": "Tur rehberi bize müzeyi tanıttı.",
        "target": "Guida turistike na prezantoi muzeun."
      }
    ]
  },
  {
    "id": "a2-tra-6",
    "word": "Valiz",
    "translation": "Valixhe",
    "pos": "emër",
    "category": "travel",
    "is_balkan": true,
    "examples": [
      {
        "source": "Valizimi dün gece hazırladım.",
        "target": "E përgatita valixhen tim mbrëmë."
      }
    ]
  },
  {
    "id": "a2-tra-7",
    "word": "Rezervasyon",
    "translation": "Rezervim",
    "pos": "emër",
    "category": "travel",
    "is_balkan": true,
    "examples": [
      {
        "source": "Otelde rezervasyonumuz var.",
        "target": "Kemi rezervim në hotel."
      }
    ]
  },
  {
    "id": "a2-tra-8",
    "word": "Uçuş",
    "translation": "Fluturim",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Uçuşumuz iki saat ertelendi.",
        "target": "Fluturimi ynë u shty për dy orë."
      }
    ]
  },
  {
    "id": "a2-tra-9",
    "word": "Gümrük",
    "translation": "Doganë",
    "pos": "emër",
    "category": "travel",
    "is_balkan": true,
    "examples": [
      {
        "source": "Gümrükten kolayca geçtik.",
        "target": "Kaluam lehtësisht nga dogana."
      }
    ]
  },
  {
    "id": "a2-tra-10",
    "word": "Aktarma",
    "translation": "Transit / Tranzit / Ndërrim mjeti",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "İstanbul aktarmalı uçacağız.",
        "target": "Do të fluturojmë me transit në Stamboll."
      }
    ]
  },
  {
    "id": "a2-tra-11",
    "word": "Bavul",
    "translation": "Bavul / Valixhe e madhe",
    "pos": "emër",
    "category": "travel",
    "is_balkan": true,
    "examples": [
      {
        "source": "Ağır bavulları arabaya koyduk.",
        "target": "I vendosëm valixhet e rënda në makinë."
      }
    ]
  },
  {
    "id": "a2-tra-12",
    "word": "Keşif",
    "translation": "Zbulim / Eksplorim",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Şehirde keşif yürüyüşü yaptık.",
        "target": "Bëmë një shëtitje eksploruese në qytet."
      }
    ]
  },
  {
    "id": "a2-tra-13",
    "word": "Manzara",
    "translation": "Pamje / Peizazh",
    "pos": "emër",
    "category": "travel",
    "is_balkan": true,
    "examples": [
      {
        "source": "Odanın manzarası harika.",
        "target": "Pamja e dhomës është e mrekullueshme."
      }
    ]
  },
  {
    "id": "a2-tra-14",
    "word": "Tatil beldesi",
    "translation": "Vendpushim / Resort tatimesh",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Bu tatil beldesi çok sakin.",
        "target": "Ky vendpushim është shumë i qetë."
      }
    ]
  },
  {
    "id": "a2-tra-15",
    "word": "Seyahat acentesi",
    "translation": "Agjenci udhëtimi",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Biletleri seyahat acentesinden aldık.",
        "target": "Biletat i blemë nga agjencia e udhëtimit."
      }
    ]
  },
  {
    "id": "a2-tra-16",
    "word": "Gezi",
    "translation": "Ekskursion / Shëtitje",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Okul gezisine katıldım.",
        "target": "Mora pjesë në ekskursionin e shkollës."
      }
    ]
  },
  {
    "id": "a2-tra-17",
    "word": "Konaklama",
    "translation": "Akomodim / Qëndrim",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Konaklama ücreti fiyata dahil.",
        "target": "Tarifa e akomodimit është e përfshirë në çmim."
      }
    ]
  },
  {
    "id": "a2-tra-18",
    "word": "Pansiyon",
    "translation": "Pansion / Hotel i vogël",
    "pos": "emër",
    "category": "travel",
    "is_balkan": true,
    "examples": [
      {
        "source": "Küçük bir pansiyonda kaldık.",
        "target": "Qëndruam në një pansion të vogël."
      }
    ]
  },
  {
    "id": "a2-tra-19",
    "word": "Kalkış",
    "translation": "Nisje (e avionit/trenit)",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Trenin kalkış saati yaklaşıyor.",
        "target": "Po afrohet ora e nisjes së trenit."
      }
    ]
  },
  {
    "id": "a2-tra-20",
    "word": "Varış",
    "translation": "Arritje / Mbërritje",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Varış süresi yarım saattir.",
        "target": "Koha e arritjes është gjysmë ore."
      }
    ]
  },
  {
    "id": "a2-tra-21",
    "word": "Güzergah",
    "translation": "Itinerar / Rrugëkalim",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Güzergahımız çok güzeldi.",
        "target": "Itinerari ynë ishte shumë i bukur."
      }
    ]
  },
  {
    "id": "a2-tra-22",
    "word": "Kılavuz",
    "translation": "Udhëzues / Guidë",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Şehir kılavuzunu okuduk.",
        "target": "Lexuam udhëzuesin e qytetit."
      }
    ]
  },
  {
    "id": "a2-tra-23",
    "word": "Dış hatlar",
    "translation": "Linjat ndërkombëtare",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Dış hatlar terminaline gittik.",
        "target": "Shkuam në terminalin e linjave ndërkombëtare."
      }
    ]
  },
  {
    "id": "a2-tra-24",
    "word": "İç hatlar",
    "translation": "Linjat e brendshme",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "İç hatlar uçuşları daha ucuz.",
        "target": "Fluturimet e linjave e brendshme janë më të lira."
      }
    ]
  },
  {
    "id": "a2-tra-25",
    "word": "Gezgin",
    "translation": "Udhëtar / Eksplorues",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Ünlü gezgin dünyayı dolaşıyor.",
        "target": "Udhëtari i famshëm po sillet rreth botës."
      }
    ]
  },
  {
    "id": "a2-tra-26",
    "word": "Danışma",
    "translation": "Informacion / Recepsion",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Danışma masasından broşür aldım.",
        "target": "Mora broshurë nga zyra e informacionit."
      }
    ]
  },
  {
    "id": "a2-tra-27",
    "word": "Kaybolmak",
    "translation": "Humbje (rrugë)",
    "pos": "folje",
    "category": "travel",
    "examples": [
      {
        "source": "Şehirde kayboldum.",
        "target": "Humba në qytet."
      }
    ]
  },
  {
    "id": "a2-tra-28",
    "word": "Yön",
    "translation": "Drejtim / Anë",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Tabelalar yönü gösteriyor.",
        "target": "Tabelat tregojnë drejtimin."
      }
    ]
  },
  {
    "id": "a2-tra-29",
    "word": "Kuzey",
    "translation": "Veri",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Kuzey yönüne doğru ilerleyin.",
        "target": "Përparoni drejt veriut."
      }
    ]
  },
  {
    "id": "a2-tra-30",
    "word": "Güney",
    "translation": "Jug",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Antalya Türkiye'nin güneyindedir.",
        "target": "Antalia është në jug të Turqisë."
      }
    ]
  },
  {
    "id": "a2-tra-31",
    "word": "Doğu",
    "translation": "Lindje",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Güneş doğudan yükselir.",
        "target": "Gonne lind nga lindja."
      }
    ]
  },
  {
    "id": "a2-tra-32",
    "word": "Batı",
    "translation": "Perëndim",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Avrupa batıdadır.",
        "target": "Evropa është në perëndim."
      }
    ]
  },
  {
    "id": "a2-tra-33",
    "word": "Rota",
    "translation": "Rutë / Rrugëkalim",
    "pos": "emër",
    "category": "travel",
    "is_balkan": true,
    "examples": [
      {
        "source": "Uçuş rotamız değişti.",
        "target": "Ruta e fluturimit tonë ndryshoi."
      }
    ]
  },
  {
    "id": "a2-tra-34",
    "word": "Gezilecek yerler",
    "translation": "Vende për t'u vizituar",
    "pos": "shprehje",
    "category": "travel",
    "examples": [
      {
        "source": "Gezilecek yerler listesi hazırladım.",
        "target": "Përgatita listën e vendeve për t'u vizituar."
      }
    ]
  },
  {
    "id": "a2-tra-35",
    "word": "Hediyelik eşya",
    "translation": "Dhuratë / Suvenire",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Hediyelik eşya dükkanından magnet aldım.",
        "target": "Bleva magnet nga dyqani i suvenireve."
      }
    ]
  },
  {
    "id": "a2-tra-36",
    "word": "Broşür",
    "translation": "Broshurë",
    "pos": "emër",
    "category": "travel",
    "is_balkan": true,
    "examples": [
      {
        "source": "Şehir broşürünü okudum.",
        "target": "Lexova broshurën e qytetit."
      }
    ]
  },
  {
    "id": "a2-tra-37",
    "word": "Gezip görmek",
    "translation": "Vizitë dhe eksplorim",
    "pos": "shprehje",
    "category": "travel",
    "examples": [
      {
        "source": "Yeni ülkeler gezip görmek harika.",
        "target": "Të vizitosh dhe eksplorosh vende të reja është e mrekullueshme."
      }
    ]
  },
  {
    "id": "a2-tra-38",
    "word": "Kamp alanı",
    "translation": "Zonë kampimi",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Kamp alanında çadır kurduk.",
        "target": "Ngritëm çadrën në zonën e kampimit."
      }
    ]
  },
  {
    "id": "a2-tra-39",
    "word": "Çadır",
    "translation": "Çadër / Tendë",
    "pos": "emër",
    "category": "travel",
    "is_balkan": true,
    "examples": [
      {
        "source": "Çadırı rüzgardan koruduk.",
        "target": "Mbrojtëm çadrën nga era."
      }
    ]
  },
  {
    "id": "a2-tra-40",
    "word": "Sırt çantası",
    "translation": "Çantë shpine",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Sırt çantamı hazırladım.",
        "target": "Përgatita çantën time të shpinës."
      }
    ]
  },
  {
    "id": "a2-tra-41",
    "word": "Seyahat sigortası",
    "translation": "Sigurim udhëtimi",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Seyahat sigortası yaptırmak zorunludur.",
        "target": "Bërja e sigurimit të udhëtimit është e detyrueshme."
      }
    ]
  },
  {
    "id": "a2-tra-42",
    "word": "Grup indirimi",
    "translation": "Zbritje grupore",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Müzede grup indirimi uyguladılar.",
        "target": "Aplikuan zbritje grupore në muze."
      }
    ]
  },
  {
    "id": "a2-tra-43",
    "word": "Ulaşım kartı",
    "translation": "Kartë transporti",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Ulaşım kartıma para yükledim.",
        "target": "Ngarkova para në kartën time të transportit."
      }
    ]
  },
  {
    "id": "a2-tra-44",
    "word": "Kiralık araba",
    "translation": "Makinë me qira",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Havalimanından kiralık araba aldık.",
        "target": "Morëm makinë me qira nga aeroporti."
      }
    ]
  },
  {
    "id": "a2-tra-45",
    "word": "Tarihi kent",
    "translation": "Qytet historik",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Tarihi kent kalıntılarını gezdik.",
        "target": "Vizituam gërmadhat e qytetit historik."
      }
    ]
  },
  {
    "id": "a2-tra-46",
    "word": "Şelale",
    "translation": "Ujëvarë",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Şelale sesi çok huzurlu.",
        "target": "Tingulli i ujëvarës është shumë paqësor."
      }
    ]
  },
  {
    "id": "a2-tra-47",
    "word": "Kanyon",
    "translation": "Kanjon",
    "pos": "emër",
    "category": "travel",
    "is_balkan": true,
    "examples": [
      {
        "source": "Kanyonda yürüyüş yaptık.",
        "target": "Bëmë shëtitje në kanjon."
      }
    ]
  },
  {
    "id": "a2-tra-48",
    "word": "Mağara",
    "translation": "Shpellë",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Mağara çok karanlıktı.",
        "target": "Shpella ishte shumë e errët."
      }
    ]
  },
  {
    "id": "a2-tra-49",
    "word": "Ada",
    "translation": "Ishull",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Yaz tatilinde bir adaya gideceğiz.",
        "target": "Në pushimet e verës do të shkojmë në një ishull."
      }
    ]
  },
  {
    "id": "a2-tra-50",
    "word": "Kıyı",
    "translation": "Breg / Bregdet",
    "pos": "emër",
    "category": "travel",
    "examples": [
      {
        "source": "Deniz kıyısında yürüdük.",
        "target": "Eci në breg të detit."
      }
    ]
  },
  {
    "id": "a2-edu-1",
    "word": "Akademisyen",
    "translation": "Akademik / Profesor",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Akademisyenler panelde sunum yaptı.",
        "target": "Akademikët prezantuan në panel."
      }
    ]
  },
  {
    "id": "a2-edu-2",
    "word": "Ders",
    "translation": "Mësim / Lëndë",
    "pos": "emër",
    "category": "education",
    "is_balkan": true,
    "examples": [
      {
        "source": "Matematik dersi çok ilginç.",
        "target": "Mësimi i matematikës është shumë interesant."
      }
    ]
  },
  {
    "id": "a2-edu-3",
    "word": "Öğretim üyesi",
    "translation": "Profesor / Anëtar i fakultetit",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Öğretim üyesi sınavı erteledi.",
        "target": "Profesori e shtyu provimin."
      }
    ]
  },
  {
    "id": "a2-edu-4",
    "word": "Öğrenci işleri",
    "translation": "Sekretaria e studentëve",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Öğrenci işlerine başvurdum.",
        "target": "Aplikova në sekretarinë e studentëve."
      }
    ]
  },
  {
    "id": "a2-edu-5",
    "word": "Akademi",
    "translation": "Akademi",
    "pos": "emër",
    "category": "education",
    "is_balkan": true,
    "examples": [
      {
        "source": "Güzel Sanatlar Akademisi ünlü.",
        "target": "Akademia e Arteve të Bukura është e famshme."
      }
    ]
  },
  {
    "id": "a2-edu-6",
    "word": "Burs",
    "translation": "Bursë",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Yurt dışı eğitimi için burs kazandı.",
        "target": "Fitoi bursë për studime jashtë vendit."
      }
    ]
  },
  {
    "id": "a2-edu-7",
    "word": "Diploma",
    "translation": "Diplomë",
    "pos": "emër",
    "category": "education",
    "is_balkan": true,
    "examples": [
      {
        "source": "Üniversite diplomasını aldı.",
        "target": "Mori diplomën e universitetit."
      }
    ]
  },
  {
    "id": "a2-edu-8",
    "word": "Karne",
    "translation": "Dëftesë / Librezë notash",
    "pos": "emër",
    "category": "education",
    "is_balkan": true,
    "examples": [
      {
        "source": "Dönem sonunda karnemi aldım.",
        "target": "Në fund të semestrit mora dëftesën time."
      }
    ]
  },
  {
    "id": "a2-edu-9",
    "word": "Sınav",
    "translation": "Provim",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Türkçe sınavı yarın yapılacak.",
        "target": "Provimi i turqishtes do të bëhet nesër."
      }
    ]
  },
  {
    "id": "a2-edu-10",
    "word": "Arşiv",
    "translation": "Arkiv",
    "pos": "emër",
    "category": "education",
    "is_balkan": true,
    "examples": [
      {
        "source": "Tarihi belgeleri arşivde bulduk.",
        "target": "I gjetëm dokumentet historike në arkiv."
      }
    ]
  },
  {
    "id": "a2-edu-11",
    "word": "Fakülte",
    "translation": "Fakultet",
    "pos": "emër",
    "category": "education",
    "is_balkan": true,
    "examples": [
      {
        "source": "Tıp fakültesi öğrencisidir.",
        "target": "Është student i fakultetit të mjekësisë."
      }
    ]
  },
  {
    "id": "a2-edu-12",
    "word": "Enstitü",
    "translation": "Institut",
    "pos": "emër",
    "category": "education",
    "is_balkan": true,
    "examples": [
      {
        "source": "Dil enstitüsünde kurs alıyorum.",
        "target": "Po marr kurs në institutin e gjuhëve."
      }
    ]
  },
  {
    "id": "a2-edu-13",
    "word": "Kampüs",
    "translation": "Kampus",
    "pos": "emër",
    "category": "education",
    "is_balkan": true,
    "examples": [
      {
        "source": "Üniversite kampüsü çok yeşil.",
        "target": "Kampusi i universitetit është shumë i gjelbër."
      }
    ]
  },
  {
    "id": "a2-edu-14",
    "word": "Rektör",
    "translation": "Rektor",
    "pos": "emër",
    "category": "education",
    "is_balkan": true,
    "examples": [
      {
        "source": "Rektör törende konuştu.",
        "target": "Rektori foli në ceremoni."
      }
    ]
  },
  {
    "id": "a2-edu-15",
    "word": "Dekan",
    "translation": "Dekan",
    "pos": "emër",
    "category": "education",
    "is_balkan": true,
    "examples": [
      {
        "source": "Dekan beyle görüştüm.",
        "target": "U takova me zotin dekan."
      }
    ]
  },
  {
    "id": "a2-edu-16",
    "word": "Bölüm",
    "translation": "Departament / Degë studimi",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Tarih bölümünü seçti.",
        "target": "Zgjodhi degën e historisë."
      }
    ]
  },
  {
    "id": "a2-edu-17",
    "word": "Dönem",
    "translation": "Semestër / Periudhë",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Bu dönem beş ders alıyorum.",
        "target": "Këtë semestër po marr pesë lëndë."
      }
    ]
  },
  {
    "id": "a2-edu-18",
    "word": "Tez",
    "translation": "Tezë (diplome)",
    "pos": "emër",
    "category": "education",
    "is_balkan": true,
    "examples": [
      {
        "source": "Yüksek lisans tezini yazıyor.",
        "target": "Po shkruan tezën e masterit."
      }
    ]
  },
  {
    "id": "a2-edu-19",
    "word": "Ödev",
    "translation": "Detyrë (shtëpie)",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Ödevlerimi vaktinde teslim ettim.",
        "target": "I dorëzova detyrat e mia me kohë."
      }
    ]
  },
  {
    "id": "a2-edu-20",
    "word": "Not",
    "translation": "Notë / Shënim",
    "pos": "emër",
    "category": "education",
    "is_balkan": true,
    "examples": [
      {
        "source": "Sınavdan yüksek not aldım.",
        "target": "Mora notë të lartë në provim."
      }
    ]
  },
  {
    "id": "a2-edu-21",
    "word": "Sözlü",
    "translation": "Provim me gojë / I gojës",
    "pos": "mbiemër",
    "category": "education",
    "examples": [
      {
        "source": "Yarın sözlü sınavımız var.",
        "target": "Nesër kemi provim me gojë."
      }
    ]
  },
  {
    "id": "a2-edu-22",
    "word": "Yazılı",
    "translation": "Provim me shkrim",
    "pos": "mbiemër",
    "category": "education",
    "examples": [
      {
        "source": "Yazılı sonuçları açıklandı.",
        "target": "U shpallën rezultatet me shkrim."
      }
    ]
  },
  {
    "id": "a2-edu-23",
    "word": "Kayıt",
    "translation": "Regjistrim",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Üniversite kayıtları başladı.",
        "target": "Filluan regjistrimet në universitet."
      }
    ]
  },
  {
    "id": "a2-edu-24",
    "word": "Mezuniyet",
    "translation": "Diplomim / Përfundim mësimesh",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Mezuniyet töreni çok heyecanlıydı.",
        "target": "Ceremonia e diplomimit ishte shumë emocionuese."
      }
    ]
  },
  {
    "id": "a2-edu-25",
    "word": "Öğretmenler odası",
    "translation": "Dhoma e mësuesve",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Öğretmenler odasında bekleyin.",
        "target": "Pritni në dhomën e mësuesve."
      }
    ]
  },
  {
    "id": "a2-edu-26",
    "word": "Müfredat",
    "translation": "Kurrikulë / Program mësimor",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Yeni müfredat açıklandı.",
        "target": "U shpall programi i ri mësimor."
      }
    ]
  },
  {
    "id": "a2-edu-27",
    "word": "Ders kitabı",
    "translation": "Tekst shkollor / Libër mësimi",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Ders kitaplarını kütüphaneden aldım.",
        "target": "I mora librat e mësimit nga biblioteka."
      }
    ]
  },
  {
    "id": "a2-edu-28",
    "word": "Kalemlik",
    "translation": "Kuti lapsash / Futrale",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Kalemlikte üç kurşun kalem var.",
        "target": "Në kutinë e lapsave ka tre lapsa plumbi."
      }
    ]
  },
  {
    "id": "a2-edu-29",
    "word": "Silgi",
    "translation": "Fshirëse / Radirke",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Silgimi arkadaşıma ödünç verdim.",
        "target": "Ia dhashë fshirësen tim hua shokut."
      }
    ]
  },
  {
    "id": "a2-edu-30",
    "word": "Cetvel",
    "translation": "Vizore",
    "pos": "emër",
    "category": "education",
    "is_balkan": true,
    "examples": [
      {
        "source": "Çizim için cetvel kullanmalısın.",
        "target": "Duhet të përdorësh vizore për vizatim."
      }
    ]
  },
  {
    "id": "a2-edu-31",
    "word": "Yazı tahtası",
    "translation": "Tabela e shkrimit / dërrasa",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Öğretmen yazı tahtasına formülü yazdı.",
        "target": "Mësuesi shkroi formulën në tabelë."
      }
    ]
  },
  {
    "id": "a2-edu-32",
    "word": "Tebeşir",
    "translation": "Kriitë / Kopsë",
    "pos": "emër",
    "category": "education",
    "is_balkan": true,
    "examples": [
      {
        "source": "Yazı tahtası için tebeşir lazım.",
        "target": "Duhet shkumës për tabelën e shkrimit."
      }
    ]
  },
  {
    "id": "a2-edu-33",
    "word": "Kurs",
    "translation": "Kurs",
    "pos": "emër",
    "category": "education",
    "is_balkan": true,
    "examples": [
      {
        "source": "Türkçe kursuna kayıt oldum.",
        "target": "U regjistrova në kursin e turqishtes."
      }
    ]
  },
  {
    "id": "a2-edu-34",
    "word": "Eğitim",
    "translation": "Edukimi / Arsimi",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Eğitim her çocuğun hakkıdır.",
        "target": "Arsimi është e drejtë e çdo fëmije."
      }
    ]
  },
  {
    "id": "a2-edu-35",
    "word": "Öğretim",
    "translation": "Mësimdhënie / Instruksion",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Yeni öğretim yöntemleri uygulanıyor.",
        "target": "Po aplikohen metoda të reja të mësimdhënies."
      }
    ]
  },
  {
    "id": "a2-edu-36",
    "word": "Okul müdürü",
    "translation": "Drejtor shkolle",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Okul müdürü törende konuştu.",
        "target": "Drejtori i shkollës foli në ceremoni."
      }
    ]
  },
  {
    "id": "a2-edu-37",
    "word": "Zil",
    "translation": "Zile / Këmbonë",
    "pos": "emër",
    "category": "education",
    "is_balkan": true,
    "examples": [
      {
        "source": "Ders zili çaldı.",
        "target": "Ra zilja e mësimit."
      }
    ]
  },
  {
    "id": "a2-edu-38",
    "word": "Teneffüs",
    "translation": "Pushim i vogël / Ndërmjetmësim",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Teneffüste bahçeye çıktık.",
        "target": "Dolëm në kopsht gjatë pushimit të vogël."
      }
    ]
  },
  {
    "id": "a2-edu-39",
    "word": "Başarılı olmak",
    "translation": "Të jesh i suksesshëm",
    "pos": "folje",
    "category": "education",
    "examples": [
      {
        "source": "Sınavda başarılı olmak için çok çalıştı.",
        "target": "Punoi shumë për të qenë i suksesshëm në provim."
      }
    ]
  },
  {
    "id": "a2-edu-40",
    "word": "Kalmak",
    "translation": "Të ngelësh (në provim)",
    "pos": "folje",
    "category": "education",
    "examples": [
      {
        "source": "Matematik sınavından kaldım.",
        "target": "Ngela në provimin e matematikës."
      }
    ]
  },
  {
    "id": "a2-edu-41",
    "word": "Geçmek",
    "translation": "Të kalosh (në provim)",
    "pos": "folje",
    "category": "education",
    "examples": [
      {
        "source": "Türkçe sınavından geçtim.",
        "target": "Kalova në provimin e turqishtes."
      }
    ]
  },
  {
    "id": "a2-edu-42",
    "word": "Ezberlemek",
    "translation": "Mësoj përmendsh / ezber",
    "pos": "folje",
    "category": "education",
    "is_balkan": true,
    "examples": [
      {
        "source": "Şiiri ezberledim.",
        "target": "E mësova poezinë përmendsh."
      }
    ]
  },
  {
    "id": "a2-edu-43",
    "word": "Araştırma",
    "translation": "Hulumtim / Kërkim",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Bilimsel araştırma yapıyorlar.",
        "target": "Po bëjnë hulumtime shkencore."
      }
    ]
  },
  {
    "id": "a2-edu-44",
    "word": "Deney",
    "translation": "Eksperiment",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Kimya dersinde deney yaptık.",
        "target": "Bëmë eksperiment në lëndën e kimisë."
      }
    ]
  },
  {
    "id": "a2-edu-45",
    "word": "Laboratuvar",
    "translation": "Laborator",
    "pos": "emër",
    "category": "education",
    "is_balkan": true,
    "examples": [
      {
        "source": "Laboratuvar kurallarına uymalıyız.",
        "target": "Duhet t'u përmbahemi rregullave të laboratorit."
      }
    ]
  },
  {
    "id": "a2-edu-46",
    "word": "Konu",
    "translation": "Temë / Çështje",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Bugünkü dersin konusu çok ilginç.",
        "target": "Tema e mësimit të sotëm është shumë interesante."
      }
    ]
  },
  {
    "id": "a2-edu-47",
    "word": "Sunum",
    "translation": "Prezantim",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Proje hakkında sunum hazırladım.",
        "target": "Përgatita një prezantim mbi projektin."
      }
    ]
  },
  {
    "id": "a2-edu-48",
    "word": "Seminer",
    "translation": "Seminar",
    "pos": "emër",
    "category": "education",
    "is_balkan": true,
    "examples": [
      {
        "source": "Üniversitede seminer düzenlendi.",
        "target": "U organizua një seminar në universitet."
      }
    ]
  },
  {
    "id": "a2-edu-49",
    "word": "Sözlük",
    "translation": "Fjalor",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Yeni kelimeler için sözlüğe bakarım.",
        "target": "Shikoj në fjalor për fjalët e reja."
      }
    ]
  },
  {
    "id": "a2-edu-50",
    "word": "Kural",
    "translation": "Rregull",
    "pos": "emër",
    "category": "education",
    "examples": [
      {
        "source": "Dilbilgisi kurallarını öğreniyoruz.",
        "target": "Po mësojmë rregullat e gramatikës."
      }
    ]
  },
  {
    "id": "a2-env-1",
    "word": "Çevre",
    "translation": "Mjedis / Ambient",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Çevreyi temiz tutmalıyız.",
        "target": "Duhet ta mbajmë mjedisin pastër."
      }
    ]
  },
  {
    "id": "a2-env-2",
    "word": "Orman",
    "translation": "Pyll",
    "pos": "emër",
    "category": "environment",
    "is_balkan": true,
    "examples": [
      {
        "source": "Ormanda çam ağaçları var.",
        "target": "Në pyll ka pemë pishe."
      }
    ]
  },
  {
    "id": "a2-env-3",
    "word": "Nehir",
    "translation": "Lumë",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Nehir hızla akıyor.",
        "target": "Lumi po rrjedh shpejt."
      }
    ]
  },
  {
    "id": "a2-env-4",
    "word": "Göl",
    "translation": "Liqen",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Gölün suyu çok temizdi.",
        "target": "Uji i liqenit ishte shumë i pastër."
      }
    ]
  },
  {
    "id": "a2-env-5",
    "word": "Dağ",
    "translation": "Mal",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Dağın zirvesinde kar var.",
        "target": "Në majën e malit ka borë."
      }
    ]
  },
  {
    "id": "a2-env-6",
    "word": "Körfez",
    "translation": "Gjiri",
    "pos": "emër",
    "category": "environment",
    "is_balkan": true,
    "examples": [
      {
        "source": "Körfez manzarası çok güzel.",
        "target": "Pamja e gjirit është shumë e bukur."
      }
    ]
  },
  {
    "id": "a2-env-7",
    "word": "Okyanus",
    "translation": "Oqean",
    "pos": "emër",
    "category": "environment",
    "is_balkan": true,
    "examples": [
      {
        "source": "Atlas Okyanusu çok derindir.",
        "target": "Oqeani Atlantik është shumë i thellë."
      }
    ]
  },
  {
    "id": "a2-env-8",
    "word": "Toprak",
    "translation": "Tokë / Dhe",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Verimli toprakta bitkiler çabuk büyür.",
        "target": "Në tokë pjellore bimët rriten shpejt."
      }
    ]
  },
  {
    "id": "a2-env-9",
    "word": "İklim",
    "translation": "Klimë",
    "pos": "emër",
    "category": "environment",
    "is_balkan": true,
    "examples": [
      {
        "source": "Akdeniz iklimi sıcaktır.",
        "target": "Klima mesdhetare është e ngrohtë."
      }
    ]
  },
  {
    "id": "a2-env-10",
    "word": "Küresel ısınma",
    "translation": "Ngrohja globale",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Küresel ısınma büyük bir sorundur.",
        "target": "Ngrohja globale është një problem i madh."
      }
    ]
  },
  {
    "id": "a2-env-11",
    "word": "Kirlilik",
    "translation": "Ndotje",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Hava kirliliği sağlığa zararlıdır.",
        "target": "Ndotja e ajrit është e dëmshme për shëndetin."
      }
    ]
  },
  {
    "id": "a2-env-12",
    "word": "Geri dönüşüm",
    "translation": "Reciklim",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Plastik şişeler geri dönüşüme gönderilmeli.",
        "target": "Shishet plastike duhet të dërgohen për reciklim."
      }
    ]
  },
  {
    "id": "a2-env-13",
    "word": "Enerji",
    "translation": "Energji",
    "pos": "emër",
    "category": "environment",
    "is_balkan": true,
    "examples": [
      {
        "source": "Güneş enerjisi temiz bir kaynaktır.",
        "target": "Energjia diellore është një burim i pastër."
      }
    ]
  },
  {
    "id": "a2-env-14",
    "word": "Rüzgar gülü",
    "translation": "Turbinë ere / Mulli ere",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Rüzgar güllerinden elektrik üretiliyor.",
        "target": "Po prodhohet elektricitet nga turbinat e erës."
      }
    ]
  },
  {
    "id": "a2-env-15",
    "word": "Doğal kaynaklar",
    "translation": "Burime natyrore",
    "pos": "shprehje",
    "category": "environment",
    "examples": [
      {
        "source": "Doğal kaynakları korumalıyız.",
        "target": "Duhet t'i mbrojmë burimet natyrore."
      }
    ]
  },
  {
    "id": "a2-env-16",
    "word": "Korumak",
    "translation": "Mbroj / Ruaj",
    "pos": "folje",
    "category": "environment",
    "examples": [
      {
        "source": "Doğayı korumak görevimizdir.",
        "target": "Mbrojtja e natyrës është detyra jonë."
      }
    ]
  },
  {
    "id": "a2-env-17",
    "word": "Zarar vermek",
    "translation": "Dëmtoj / Shkaktoj dëm",
    "pos": "folje",
    "category": "environment",
    "examples": [
      {
        "source": "Plastikler çevreye zarar veriyor.",
        "target": "Plastikat po dëmtojnë mjedisin."
      }
    ]
  },
  {
    "id": "a2-env-18",
    "word": "Hayvanlar",
    "translation": "Kafshët",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Ormanda vahşi hayvanlar yaşar.",
        "target": "Në pyll jetojnë kafshë të egra."
      }
    ]
  },
  {
    "id": "a2-env-19",
    "word": "Bitkiler",
    "translation": "Bimët",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Bitkiler güneş ışığına ihtiyaç duyar.",
        "target": "Bimët kanë nevojë për dritën e diellit."
      }
    ]
  },
  {
    "id": "a2-env-20",
    "word": "Ağaç dikmek",
    "translation": "Mbjell pemë",
    "pos": "folje",
    "category": "environment",
    "examples": [
      {
        "source": "Bugün okul bahçesine ağaç diktik.",
        "target": "Sot mbollëm pemë në kopshtin e shkollës."
      }
    ]
  },
  {
    "id": "a2-env-21",
    "word": "Deprem",
    "translation": "Tërmet",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Deprem anında sakin kalmalıyız.",
        "target": "Duhet të qëndrojmë të qetë gjatë një tërmeti."
      }
    ]
  },
  {
    "id": "a2-env-22",
    "word": "Sel",
    "translation": "Përmbytje / Vërshim uji",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Şiddetli yağmur sele neden oldu.",
        "target": "Chiu i rrëmbyeshëm shkaktoi përmbytje."
      }
    ]
  },
  {
    "id": "a2-env-23",
    "word": "Kuraklık",
    "translation": "Seci / Thatësirë",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Kuraklık nedeniyle tarım olumsuz etkilendi.",
        "target": "Bujqësia u ndikua negativisht për shkak të thatësirës."
      }
    ]
  },
  {
    "id": "a2-env-24",
    "word": "Fırtına",
    "translation": "Furtunë / Stuhi",
    "pos": "emër",
    "category": "environment",
    "is_balkan": true,
    "examples": [
      {
        "source": "Denizde büyük bir fırtına koptu.",
        "target": "Shpërtheu një stuhi e madhe në det."
      }
    ]
  },
  {
    "id": "a2-env-25",
    "word": "Çöp",
    "translation": "Bërllok / Mbeturina",
    "pos": "emër",
    "category": "environment",
    "is_balkan": true,
    "examples": [
      {
        "source": "Çöpleri çöp kutusuna atmalıyız.",
        "target": "Mbeturinat duhet t'i hedhim në koshin e bërllokut."
      }
    ]
  },
  {
    "id": "a2-env-26",
    "word": "Atık",
    "translation": "Mbeturina industriale / Mbetje",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Kimyasal atıklar suyu kirletiyor.",
        "target": "Mbetjet kimike po ndotin ujin."
      }
    ]
  },
  {
    "id": "a2-env-27",
    "word": "Ozon tabakası",
    "translation": "Shtresa e ozonit",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Kloroflorokarbonlar ozon tabakasına zarar verir.",
        "target": "Klorofluorokarbonet dëmtojnë shtresën e ozonit."
      }
    ]
  },
  {
    "id": "a2-env-28",
    "word": "Ekosistem",
    "translation": "Ekosistem",
    "pos": "emër",
    "category": "environment",
    "is_balkan": true,
    "examples": [
      {
        "source": "Her canlı ekosistemin parçasıdır.",
        "target": "Çdo qenie e gjallë është pjesë e ekosistemit."
      }
    ]
  },
  {
    "id": "a2-env-29",
    "word": "Biyoçeşitlilik",
    "translation": "Biodiversitet",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Biyoçeşitlilik korunmalıdır.",
        "target": "Biodiversiteti duhet të mbrohet."
      }
    ]
  },
  {
    "id": "a2-env-30",
    "word": "Vahşi yaşam",
    "translation": "Jeta e egër",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Vahşi yaşam alanları daralıyor.",
        "target": "Zonat e jetës së egër po ngushtohen."
      }
    ]
  },
  {
    "id": "a2-env-31",
    "word": "Nesli tükenmek",
    "translation": "Zhdukje (e llojit)",
    "pos": "folje",
    "category": "environment",
    "examples": [
      {
        "source": "Bazı hayvanların nesli tükeniyor.",
        "target": "Disa kafshë po shkojnë drejt zhdukjes."
      }
    ]
  },
  {
    "id": "a2-env-32",
    "word": "Milli park",
    "translation": "Park kombëtar",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Milli parkı ziyaret ettik.",
        "target": "Vizituam parkun kombëtar."
      }
    ]
  },
  {
    "id": "a2-env-33",
    "word": "Yenilenebilir enerji",
    "translation": "Energji e rinovueshme",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Yenilenebilir enerji yatırımları arttı.",
        "target": "Investimet në energji të rinovueshme u rritën."
      }
    ]
  },
  {
    "id": "a2-env-34",
    "word": "Çöl",
    "translation": "Shkretëtirë",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Sahra Çölü çok büyüktür.",
        "target": "Shkretëtira e Saharasë është shumë e madhe."
      }
    ]
  },
  {
    "id": "a2-env-35",
    "word": "Vadi",
    "translation": "Luginë",
    "pos": "emër",
    "category": "environment",
    "is_balkan": true,
    "examples": [
      {
        "source": "Vadi boyunca yürüdük.",
        "target": "Eci përgjatë luginës."
      }
    ]
  },
  {
    "id": "a2-env-36",
    "word": "Tepe",
    "translation": "Kodër / Kodrinë",
    "pos": "emër",
    "category": "environment",
    "is_balkan": true,
    "examples": [
      {
        "source": "Tepeden şehri izledik.",
        "target": "Pamë qytetin nga kodra."
      }
    ]
  },
  {
    "id": "a2-env-37",
    "word": "Mağara",
    "translation": "Shpellë",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Mağaranın içinde sarkıtlar var.",
        "target": "Brenda shpellës ka stalaktite."
      }
    ]
  },
  {
    "id": "a2-env-38",
    "word": "Yanardağ",
    "translation": "Vullkan",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Yanardağ lav püskürttü.",
        "target": "Vullkani nxori llavë."
      }
    ]
  },
  {
    "id": "a2-env-39",
    "word": "Gezegen",
    "translation": "Planeti / Planet",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Dünya bizim gezegenimizdir.",
        "target": "Toka është planeti ynë."
      }
    ]
  },
  {
    "id": "a2-env-40",
    "word": "Atmosfer",
    "translation": "Atmosferë",
    "pos": "emër",
    "category": "environment",
    "is_balkan": true,
    "examples": [
      {
        "source": "Atmosfer dünyayı koruyor.",
        "target": "Atmosfera mbron tokën."
      }
    ]
  },
  {
    "id": "a2-env-41",
    "word": "Çayır",
    "translation": "Livadhi / Çajir",
    "pos": "emër",
    "category": "environment",
    "is_balkan": true,
    "examples": [
      {
        "source": "Çayırda inekler otluyor.",
        "target": "Lopët po kullosin në livadh."
      }
    ]
  },
  {
    "id": "a2-env-42",
    "word": "Yayla",
    "translation": "Kullotë malore / Rrafshnaltë",
    "pos": "emër",
    "category": "environment",
    "is_balkan": true,
    "examples": [
      {
        "source": "Yazın yaylaya çıkıyoruz.",
        "target": "Në verë po ngjitemi në kullotën malore."
      }
    ]
  },
  {
    "id": "a2-env-43",
    "word": "Bataklık",
    "translation": "Kënnetë / Kënetë",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Bataklıkta sivrisinekler çok olur.",
        "target": "Në kënetë ka shumë mushkonja."
      }
    ]
  },
  {
    "id": "a2-env-44",
    "word": "Kutup",
    "translation": "Pol / Kutub",
    "pos": "emër",
    "category": "environment",
    "is_balkan": true,
    "examples": [
      {
        "source": "Kutuplarda buzullar eriyor.",
        "target": "Akullnajat po shkrihen në pole."
      }
    ]
  },
  {
    "id": "a2-env-45",
    "word": "Buzul",
    "translation": "Akullnajë",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Buzullar küresel ısınmadan etkileniyor.",
        "target": "Akullnajat po ndikohen nga ngrohja globale."
      }
    ]
  },
  {
    "id": "a2-env-46",
    "word": "Okyanus akıntısı",
    "translation": "Rrymë oqanike",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Okyanus akıntıları iklimi etkiler.",
        "target": "Rrymat oqanike ndikojnë në klimë."
      }
    ]
  },
  {
    "id": "a2-env-47",
    "word": "Doğal afet",
    "translation": "Fatkeqësi natyrore",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Deprem en yaygın doğal afettir.",
        "target": "Tërmeti është fatkeqësia natyrore më e zakonshme."
      }
    ]
  },
  {
    "id": "a2-env-48",
    "word": "Erozyon",
    "translation": "Erozion / Gërryerje",
    "pos": "emër",
    "category": "environment",
    "is_balkan": true,
    "examples": [
      {
        "source": "Ağaçlandırma erozyonu önler.",
        "target": "Mbjellja e pemëve parandalon erozionin."
      }
    ]
  },
  {
    "id": "a2-env-49",
    "word": "Hava tahmini",
    "translation": "Parashikim i motit",
    "pos": "emër",
    "category": "environment",
    "examples": [
      {
        "source": "Hava tahminine göre yarın yağmur var.",
        "target": "Sipas parashikimit të motit nesër ka shi."
      }
    ]
  },
  {
    "id": "a2-env-50",
    "word": "Nem",
    "translation": "Lagështi",
    "pos": "emër",
    "category": "environment",
    "is_balkan": true,
    "examples": [
      {
        "source": "Yazın havadaki nem oranı artar.",
        "target": "Në verë shkalla e lagështisë në ajër rritet."
      }
    ]
  },
  {
    "id": "a2-emo-1",
    "word": "Sevgi",
    "translation": "Dashuri",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Sevgi her şeyi iyileştirir.",
        "target": "Dashuria shëron çdo gjë."
      }
    ]
  },
  {
    "id": "a2-emo-2",
    "word": "Mutluluk",
    "translation": "Lumturi",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Mutluluk küçük detaylarda gizlidir.",
        "target": "Lumturia fshihet në detaje të vogla."
      }
    ]
  },
  {
    "id": "a2-emo-3",
    "word": "Öfke",
    "translation": "Zemërim / Haki",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Öfke anında nefes al.",
        "target": "Merr frymë në çastin e zemërimit."
      }
    ]
  },
  {
    "id": "a2-emo-4",
    "word": "Korku",
    "translation": "Frikë",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Korku insanı durdurur.",
        "target": "Frika e ndalon njeriun."
      }
    ]
  },
  {
    "id": "a2-emo-5",
    "word": "Şaşkınlık",
    "translation": "Çudi / Habitje",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Şaşkınlıktan ne yapacağını bilemedi.",
        "target": "Nga habitja nuk dinte çfarë të bënte."
      }
    ]
  },
  {
    "id": "a2-emo-6",
    "word": "Hüzün",
    "translation": "Trishtim / Mërzitje",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Gözlerinde hüzün var.",
        "target": "Në sytë e tij ka trishtim."
      }
    ]
  },
  {
    "id": "a2-emo-7",
    "word": "Özlem",
    "translation": "Mall / Ndjenjë mungese",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Vatan özlemi çekiyor.",
        "target": "Ndjen mall për atdheun."
      }
    ]
  },
  {
    "id": "a2-emo-8",
    "word": "Nefret",
    "translation": "Urejtje / Urrejtje",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Nefret kötü bir duygudur.",
        "target": "Urrejtja është ndjenjë e keqe."
      }
    ]
  },
  {
    "id": "a2-emo-9",
    "word": "Kıskançlık",
    "translation": "Xhelozi",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Kıskançlık ilişkileri bozar.",
        "target": "Xhelozia prish marrëdhëniet."
      }
    ]
  },
  {
    "id": "a2-emo-10",
    "word": "Heyecan",
    "translation": "Emocion / Ngazëllim",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Yarınki gezi için büyük heyecan duyuyorum.",
        "target": "Ndjej emocion të madh për udhëtimin e nesërm."
      }
    ]
  },
  {
    "id": "a2-emo-11",
    "word": "Endişe",
    "translation": "Shqetësim / Brengë",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Endişelerinizi anlıyorum.",
        "target": "I kuptoj shqetësimet tuaja."
      }
    ]
  },
  {
    "id": "a2-emo-12",
    "word": "Güven",
    "translation": "Besim",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Güven kazanmak zordur.",
        "target": "Besimi fitohet me vështirësi."
      }
    ]
  },
  {
    "id": "a2-emo-13",
    "word": "Şüphe",
    "translation": "Dyshimi / Dyshim",
    "pos": "emër",
    "category": "emotions",
    "is_balkan": true,
    "examples": [
      {
        "source": "Bu konuda şüphem var.",
        "target": "Kam dyshim për këtë çështje."
      }
    ]
  },
  {
    "id": "a2-emo-14",
    "word": "Merhamet",
    "translation": "Mëshirë / Dhembshuri",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Merhamet insanlığın temelidir.",
        "target": "Mëshira është themeli i njerëzimit."
      }
    ]
  },
  {
    "id": "a2-emo-15",
    "word": "Vicdan",
    "translation": "Ndërgjegje / Ndërgjegjësim",
    "pos": "emër",
    "category": "emotions",
    "is_balkan": true,
    "examples": [
      {
        "source": "Vicdanım çok rahat.",
        "target": "Ndërgjegjja ime është shumë e qetë."
      }
    ]
  },
  {
    "id": "a2-emo-16",
    "word": "Utanç",
    "translation": "Turp / Turpërim",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Utanç verici bir durumdu.",
        "target": "Ishte një situatë e turpshme."
      }
    ]
  },
  {
    "id": "a2-emo-17",
    "word": "Gurur",
    "translation": "Krenari / Gurur",
    "pos": "emër",
    "category": "emotions",
    "is_balkan": true,
    "examples": [
      {
        "source": "Başarınla gurur duyuyorum.",
        "target": "Jam krenar me suksesin tënd."
      }
    ]
  },
  {
    "id": "a2-emo-18",
    "word": "Saygı",
    "translation": "Respekt / Nderim",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Yaşlılara saygı göstermeliyiz.",
        "target": "Duhet t'u tregojmë respekt të moshuarve."
      }
    ]
  },
  {
    "id": "a2-emo-19",
    "word": "Sabır",
    "translation": "Duresë / Sabri",
    "pos": "emër",
    "category": "emotions",
    "is_balkan": true,
    "examples": [
      {
        "source": "Sabırla bekledik.",
        "target": "Pritëm me durim."
      }
    ]
  },
  {
    "id": "a2-emo-20",
    "word": "Huzur",
    "translation": "Paqe / Qetësi shpirtërore",
    "pos": "emër",
    "category": "emotions",
    "is_balkan": true,
    "examples": [
      {
        "source": "Evde huzur var.",
        "target": "Ka paqe në shtëpi."
      }
    ]
  },
  {
    "id": "a2-emo-21",
    "word": "Umut",
    "translation": "Shpresë",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Umut her zaman vardır.",
        "target": "Shpresa ekziston gjithmonë."
      }
    ]
  },
  {
    "id": "a2-emo-22",
    "word": "Pişmanlık",
    "translation": "Pishmon / Pendim",
    "pos": "emër",
    "category": "emotions",
    "is_balkan": true,
    "examples": [
      {
        "source": "Yaptıkları için pişmanlık duyuyor.",
        "target": "Ndjen pendim për ato që bëri."
      }
    ]
  },
  {
    "id": "a2-emo-23",
    "word": "Cesaret",
    "translation": "Trimëri / Guxim / Xhesaret",
    "pos": "emër",
    "category": "emotions",
    "is_balkan": true,
    "examples": [
      {
        "source": "Cesaretini topladı ve konuştu.",
        "target": "Mblodhi guximin e tij dhe foli."
      }
    ]
  },
  {
    "id": "a2-emo-24",
    "word": "Kırgınlık",
    "translation": "Fyerje / Hatërmbetje",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Aramızda kırgınlık olmasın.",
        "target": "Të mos ketë hatërmbetje mes nesh."
      }
    ]
  },
  {
    "id": "a2-emo-25",
    "word": "Bıkkınlık",
    "translation": "Mërzitje (nga përsëritja) / Lodhje",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "İşten bıkkınlık geldi.",
        "target": "Mö erdhi lodhje nga puna."
      }
    ]
  },
  {
    "id": "a2-emo-26",
    "word": "Ümit etmek",
    "translation": "Shpresoj",
    "pos": "folje",
    "category": "emotions",
    "examples": [
      {
        "source": "Yarın güzel olmasını ümit ediyorum.",
        "target": "Shpresoj që nesër të jetë bukur."
      }
    ]
  },
  {
    "id": "a2-emo-27",
    "word": "Acımak",
    "translation": "Ndjej dhembshuri / mëshirë",
    "pos": "folje",
    "category": "emotions",
    "examples": [
      {
        "source": "Yavru köpeğe acıdım.",
        "target": "Ndjeva mëshirë për qenushin."
      }
    ]
  },
  {
    "id": "a2-emo-28",
    "word": "Sıkılmak",
    "translation": "Mërzitem / Ndihem ngushtë",
    "pos": "folje",
    "category": "emotions",
    "examples": [
      {
        "source": "Evde oturmaktan sıkıldım.",
        "target": "U mërzita duke ndenjur në shtëpi."
      }
    ]
  },
  {
    "id": "a2-emo-29",
    "word": "Sevinmek",
    "translation": "Gëzohem",
    "pos": "folje",
    "category": "emotions",
    "examples": [
      {
        "source": "Haberleri duyunca çok sevindim.",
        "target": "U gëzova shumë kur dëgjova lajmet."
      }
    ]
  },
  {
    "id": "a2-emo-30",
    "word": "Üzülmek",
    "translation": "Trishtohem / Mërzitem",
    "pos": "folje",
    "category": "emotions",
    "examples": [
      {
        "source": "Onun adına çok üzüldüm.",
        "target": "U trishtova shumë për të."
      }
    ]
  },
  {
    "id": "a2-emo-31",
    "word": "Şaşırmak",
    "translation": "Habitem / Çuditem",
    "pos": "folje",
    "category": "emotions",
    "examples": [
      {
        "source": "Hediyeyi görünce şaşırdım.",
        "target": "U habita kur e pashë dhuratën."
      }
    ]
  },
  {
    "id": "a2-emo-32",
    "word": "Korkutmak",
    "translation": "Frikësoj / Tremb",
    "pos": "folje",
    "category": "emotions",
    "examples": [
      {
        "source": "Beni korkuttun!",
        "target": "Më trembe!"
      }
    ]
  },
  {
    "id": "a2-emo-33",
    "word": "Güvenmek",
    "translation": "Besoy / Kam besim",
    "pos": "folje",
    "category": "emotions",
    "examples": [
      {
        "source": "Sana güveniyorum.",
        "target": "Të besoj ty."
      }
    ]
  },
  {
    "id": "a2-emo-34",
    "word": "Kıskanmak",
    "translation": "Xhelozoj / Kam zili",
    "pos": "folje",
    "category": "emotions",
    "examples": [
      {
        "source": "Arkadaşımı kıskanmıyorum.",
        "target": "Nuk e xhelozoj shokun tim."
      }
    ]
  },
  {
    "id": "a2-emo-35",
    "word": "Nefret etmek",
    "translation": "Urrej / Kam urrejtje",
    "pos": "folje",
    "category": "emotions",
    "examples": [
      {
        "source": "Yalandan nefret ederim.",
        "target": "E urrej gënjeshtrën."
      }
    ]
  },
  {
    "id": "a2-emo-36",
    "word": "Sakinlik",
    "translation": "Qetësi / Sakinllëk",
    "pos": "emër",
    "category": "emotions",
    "is_balkan": true,
    "examples": [
      {
        "source": "Köyün sakinliği beni dinlendiriyor.",
        "target": "Qetësia e fshatit më çlodh."
      }
    ]
  },
  {
    "id": "a2-emo-37",
    "word": "Sempati",
    "translation": "Simpati",
    "pos": "emër",
    "category": "emotions",
    "is_balkan": true,
    "examples": [
      {
        "source": "Ona karşı sempati duyuyorum.",
        "target": "Ndjej simpati ndaj tij."
      }
    ]
  },
  {
    "id": "a2-emo-38",
    "word": "Empati",
    "translation": "Empati",
    "pos": "emër",
    "category": "emotions",
    "is_balkan": true,
    "examples": [
      {
        "source": "Empati kurmak ilişkileri güçlendirir.",
        "target": "Të bësh empati forcon marrëdhëniet."
      }
    ]
  },
  {
    "id": "a2-emo-39",
    "word": "Duygusuz",
    "translation": "I pandjeshëm / Pa ndjenja",
    "pos": "mbiemër",
    "category": "emotions",
    "examples": [
      {
        "source": "Duygusuz insanlardan hoşlanmam.",
        "target": "Nuk më pëlqejnë njerëzit pa ndjenja."
      }
    ]
  },
  {
    "id": "a2-emo-40",
    "word": "Duygusal",
    "translation": "Sensitiv / Emocional / Ndjeshem",
    "pos": "mbiemër",
    "category": "emotions",
    "examples": [
      {
        "source": "Çok duygusal bir film izledik.",
        "target": "Pamë një film shumë emocional."
      }
    ]
  },
  {
    "id": "a2-emo-41",
    "word": "Samimiyet",
    "translation": "Sinqeritet / Përzemërsi",
    "pos": "emër",
    "category": "emotions",
    "is_balkan": true,
    "examples": [
      {
        "source": "Onun samimiyetine inanıyorum.",
        "target": "Besoj në sinqeritetin e tij."
      }
    ]
  },
  {
    "id": "a2-emo-42",
    "word": "İhlas",
    "translation": "Sinqeritet i pastër / Përkushtim",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "İşini ihlasla yapıyor.",
        "target": "E bën punën e tij me përkushtim."
      }
    ]
  },
  {
    "id": "a2-emo-43",
    "word": "Minnettarlık",
    "translation": "Mirënjohje",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Sana minnettarlık borçluyum.",
        "target": "Të kam borxh mirënjohjeje."
      }
    ]
  },
  {
    "id": "a2-emo-44",
    "word": "Vefasızlık",
    "translation": "Mosmirënjohje / Vefasizllëk",
    "pos": "emër",
    "category": "emotions",
    "is_balkan": true,
    "examples": [
      {
        "source": "Bu yapılan vefasızlıktır.",
        "target": "Kjo që u bë është mosmirënjohje."
      }
    ]
  },
  {
    "id": "a2-emo-45",
    "word": "Esef",
    "translation": "Keqardhje / Pendim",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Esefle belirtmek isterim ki gelemiyorum.",
        "target": "Me keqardhje dua të deklaroj se nuk mund të vij."
      }
    ]
  },
  {
    "id": "a2-emo-46",
    "word": "Şefkat",
    "translation": "Dhembshuri / Dashuri prindërore / Shefkat",
    "pos": "emër",
    "category": "emotions",
    "is_balkan": true,
    "examples": [
      {
        "source": "Annemin şefkatini özledim.",
        "target": "Më ka marrë malli për dhembshurinë e nënës sime."
      }
    ]
  },
  {
    "id": "a2-emo-47",
    "word": "Hasret",
    "translation": "Hasret / Mall i madh",
    "pos": "emër",
    "category": "emotions",
    "is_balkan": true,
    "examples": [
      {
        "source": "Hasret sona erdi.",
        "target": "Malli i madh mori fund."
      }
    ]
  },
  {
    "id": "a2-emo-48",
    "word": "İhanet",
    "translation": "Tradhëti / Ihanet",
    "pos": "emër",
    "category": "emotions",
    "is_balkan": true,
    "examples": [
      {
        "source": "İhanet affedilemez.",
        "target": "Tradhëtia nuk mund të falet."
      }
    ]
  },
  {
    "id": "a2-emo-49",
    "word": "Mutsuzluk",
    "translation": "Trishtim / Moslumturi",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "Mutsuzluk geçicidir.",
        "target": "Trishtimi është i përkohshëm."
      }
    ]
  },
  {
    "id": "a2-emo-50",
    "word": "Huzursuzluk",
    "translation": "Ankth / Paqetësi",
    "pos": "emër",
    "category": "emotions",
    "examples": [
      {
        "source": "İçimde bir huzursuzluk var.",
        "target": "Kam një ankth brenda vetes."
      }
    ]
  },
  {
    "id": "a2-tec-1",
    "word": "Bilgisayar",
    "translation": "Kompjuter",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Yeni bir bilgisayar aldım.",
        "target": "Bleva një kompjuter të ri."
      }
    ]
  },
  {
    "id": "a2-tec-2",
    "word": "Telefon",
    "translation": "Telefon",
    "pos": "emër",
    "category": "technology",
    "is_balkan": true,
    "examples": [
      {
        "source": "Telefonun şarjı bitti.",
        "target": "U shkarkua bateria e telefonit."
      }
    ]
  },
  {
    "id": "a2-tec-3",
    "word": "İnternet",
    "translation": "Internet",
    "pos": "emër",
    "category": "technology",
    "is_balkan": true,
    "examples": [
      {
        "source": "İnternet bağlantısı yavaş.",
        "target": "Lidhja e internetit është e ngadaltë."
      }
    ]
  },
  {
    "id": "a2-tec-4",
    "word": "Yazılım",
    "translation": "Softuer / Program kompjuterik",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Yazılım güncellemesi yapıldı.",
        "target": "U bë përditësimi i softuerit."
      }
    ]
  },
  {
    "id": "a2-tec-5",
    "word": "Donanım",
    "translation": "Harduer / Pajisje fizike",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Bilgisayarın donanımı çok güçlü.",
        "target": "Hardueri i kompjuterit është shumë i fuqishëm."
      }
    ]
  },
  {
    "id": "a2-tec-6",
    "word": "Ekran",
    "translation": "Ekran",
    "pos": "emër",
    "category": "technology",
    "is_balkan": true,
    "examples": [
      {
        "source": "Telefonun ekranı kırıldı.",
        "target": "U thye ekrani i telefonit."
      }
    ]
  },
  {
    "id": "a2-tec-7",
    "word": "Klavye",
    "translation": "Tastierë",
    "pos": "emër",
    "category": "technology",
    "is_balkan": true,
    "examples": [
      {
        "source": "Klavyede bazı tuşlar çalışmıyor.",
        "target": "Disa taste në tastierë nuk punojnë."
      }
    ]
  },
  {
    "id": "a2-tec-8",
    "word": "Fare",
    "translation": "Maus / Mi (kompjuteri)",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Kablosuz fare kullanıyorum.",
        "target": "Përdor maus pa kabllo."
      }
    ]
  },
  {
    "id": "a2-tec-9",
    "word": "Ağ",
    "translation": "Rrjet (kompjuterik)",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Yerel ağ bağlantısı kesildi.",
        "target": "U ndërpre lidhja e rrjetit lokal."
      }
    ]
  },
  {
    "id": "a2-tec-10",
    "word": "Veri",
    "translation": "Të dhëna / Data",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Veri kaybını önlemek için yedekleme yapın.",
        "target": "Bëni kopje rezervë për të parandaluar humbjen e të dhënave."
      }
    ]
  },
  {
    "id": "a2-tec-11",
    "word": "Güvenlik duvarı",
    "translation": "Mur mbrojtës / Firewall",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Güvenlik duvarı virüsü engelledi.",
        "target": "Muri mbrojtës e bllokoi virusin."
      }
    ]
  },
  {
    "id": "a2-tec-12",
    "word": "Şifre",
    "translation": "Fjalëkalim / Shifër",
    "pos": "emër",
    "category": "technology",
    "is_balkan": true,
    "examples": [
      {
        "source": "Şifrenizi kimseyle paylaşmayın.",
        "target": "Mos e ndani fjalëkalimin tuaj me askënd."
      }
    ]
  },
  {
    "id": "a2-tec-13",
    "word": "E-posta",
    "translation": "E-mail / Postë elektronike",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "E-posta kutumu kontrol ettim.",
        "target": "Kontrollova kutinë time të e-mailit."
      }
    ]
  },
  {
    "id": "a2-tec-14",
    "word": "Sosyal medya",
    "translation": "Media sociale",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Sosyal medyada çok vakit geçiriyor.",
        "target": "Kalon shumë kohë në mediat sociale."
      }
    ]
  },
  {
    "id": "a2-tec-15",
    "word": "Web sitesi",
    "translation": "Faqe interneti / Uebsajt",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Yeni bir web sitesi tasarladık.",
        "target": "Projektuam një uebsajt të ri."
      }
    ]
  },
  {
    "id": "a2-tec-16",
    "word": "Uygulama",
    "translation": "Aplikacion",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Bu mobil uygulama çok kullanışlı.",
        "target": "Ky aplikacion celular është shumë i përdorshëm."
      }
    ]
  },
  {
    "id": "a2-tec-17",
    "word": "Yüklemek",
    "translation": "Ngarkoj / Instaloj",
    "pos": "folje",
    "category": "technology",
    "examples": [
      {
        "source": "Dosyayı sisteme yükledim.",
        "target": "E ngarkova skedarin në sistem."
      }
    ]
  },
  {
    "id": "a2-tec-18",
    "word": "İndirmek",
    "translation": "Shkarkoj (nga interneti)",
    "pos": "folje",
    "category": "technology",
    "examples": [
      {
        "source": "Yeni bir oyun indirdim.",
        "target": "Shkarkova një lojë të re."
      }
    ]
  },
  {
    "id": "a2-tec-19",
    "word": "Güncellemek",
    "translation": "Përditësoj / Ndryshoj për mirë",
    "pos": "folje",
    "category": "technology",
    "examples": [
      {
        "source": "Uygulamayı güncellemeniz gerekiyor.",
        "target": "Duhet ta përditësoni aplikacioninin."
      }
    ]
  },
  {
    "id": "a2-tec-20",
    "word": "Silmek",
    "translation": "Fshij",
    "pos": "folje",
    "category": "technology",
    "examples": [
      {
        "source": "Gereksiz dosyaları sildim.",
        "target": "Fshiva skedarët e panevojshëm."
      }
    ]
  },
  {
    "id": "a2-tec-21",
    "word": "Yedeklemek",
    "translation": "Bëj kopje rezervë / Beakap",
    "pos": "folje",
    "category": "technology",
    "examples": [
      {
        "source": "Verileri harici belleğe yedekledim.",
        "target": "I kopjova të dhënat në memorien e jashtme."
      }
    ]
  },
  {
    "id": "a2-tec-22",
    "word": "Arama motoru",
    "translation": "Motor kërkimi",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Arama motorunda bilgi aradım.",
        "target": "Kërkova informacion në motorin e kërkimit."
      }
    ]
  },
  {
    "id": "a2-tec-23",
    "word": "Tarayıcı",
    "translation": "Skaner / Shfletues uebi",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "İnternet tarayıcısını açtım.",
        "target": "Hapa shfletuesin e internetit."
      }
    ]
  },
  {
    "id": "a2-tec-24",
    "word": "Sunucu",
    "translation": "Server",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Sunucu bağlantısı koptu.",
        "target": "U ndërpre lidhja me serverin."
      }
    ]
  },
  {
    "id": "a2-tec-25",
    "word": "Yapay zeka",
    "translation": "Inteligjencë artificiale",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Yapay zeka teknolojisi hızla ilerliyor.",
        "target": "Teknologjia e inteligjencës artificiale po përparon shpejt."
      }
    ]
  },
  {
    "id": "a2-tec-26",
    "word": "Robot",
    "translation": "Robot",
    "pos": "emër",
    "category": "technology",
    "is_balkan": true,
    "examples": [
      {
        "source": "Fabrikada robotlar çalışıyor.",
        "target": "Në fabrikë po punojnë robotë."
      }
    ]
  },
  {
    "id": "a2-tec-27",
    "word": "Akıllı cihaz",
    "translation": "Pajisje inteligjente / smart",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Evimizde birçok akıllı cihaz var.",
        "target": "Në shtëpinë tonë ka shumë pajisje inteligjente."
      }
    ]
  },
  {
    "id": "a2-tec-28",
    "word": "Bulut depolama",
    "translation": "Ruajtje në cloud",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Fotoğrafları bulut depolamaya kaydettim.",
        "target": "I ruajta fotografitë në memorien cloud."
      }
    ]
  },
  {
    "id": "a2-tec-29",
    "word": "Çevrimiçi",
    "translation": "Online / Në rrjet",
    "pos": "mbiemër",
    "category": "technology",
    "examples": [
      {
        "source": "Toplantı çevrimiçi yapılacak.",
        "target": "Mbledhja do të behet online."
      }
    ]
  },
  {
    "id": "a2-tec-30",
    "word": "Çevrimdışı",
    "translation": "Offline / Jashtë rrjetit",
    "pos": "mbiemër",
    "category": "technology",
    "examples": [
      {
        "source": "Şu an çevrimdışıyım.",
        "target": "Tani jam offline."
      }
    ]
  },
  {
    "id": "a2-tec-31",
    "word": "Veritabanı",
    "translation": "Bazë të dhënash / Databazë",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Veritabanı yöneticisi hata düzetti.",
        "target": "Administratori i databazës rregulloi gabimin."
      }
    ]
  },
  {
    "id": "a2-tec-32",
    "word": "Siber saldırı",
    "translation": "Sulm kibernetik",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Şirket siber saldırıya uğradı.",
        "target": "Kompania u përball me një sulm kibernetik."
      }
    ]
  },
  {
    "id": "a2-tec-33",
    "word": "Kodlama",
    "translation": "Kodim",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Okulda kodlama dersleri veriliyor.",
        "target": "Në shkollë po jepen mësime kodimi."
      }
    ]
  },
  {
    "id": "a2-tec-34",
    "word": "Programlama",
    "translation": "Programim",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Programlama dillerini öğrenmek istiyorum.",
        "target": "Dua të mësoj gjuhët e programimit."
      }
    ]
  },
  {
    "id": "a2-tec-35",
    "word": "Sanal gerçeklik",
    "translation": "Realitet virtual",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Sanal gerçeklik gözlüğü aldım.",
        "target": "Bleva syze të realitetit virtual."
      }
    ]
  },
  {
    "id": "a2-tec-36",
    "word": "Teknoloji",
    "translation": "Teknologji",
    "pos": "emër",
    "category": "technology",
    "is_balkan": true,
    "examples": [
      {
        "source": "Teknoloji hayatımızı kolaylaştırıyor.",
        "target": "Teknologjia lehtëson jetën tonë."
      }
    ]
  },
  {
    "id": "a2-tec-37",
    "word": "Dijital",
    "translation": "Dixhital / Digjital",
    "pos": "mbiemër",
    "category": "technology",
    "is_balkan": true,
    "examples": [
      {
        "source": "Dijital saat kullanıyorum.",
        "target": "Përdor orë digjitale."
      }
    ]
  },
  {
    "id": "a2-tec-38",
    "word": "Kamera",
    "translation": "Kamerë",
    "pos": "emër",
    "category": "technology",
    "is_balkan": true,
    "examples": [
      {
        "source": "Güvenlik kamerası kayıt yapıyor.",
        "target": "Kamera e sigurisë po bën regjistrim."
      }
    ]
  },
  {
    "id": "a2-tec-39",
    "word": "Kulaklık",
    "translation": "Kufje",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Müzik dinlemek için kulaklık taktım.",
        "target": "Vendosa kufje për të dëgjuar muzikë."
      }
    ]
  },
  {
    "id": "a2-tec-40",
    "word": "Hoparlör",
    "translation": "Altoparlant / Zmadhues zëri",
    "pos": "emër",
    "category": "technology",
    "is_balkan": true,
    "examples": [
      {
        "source": "Hoparlörün sesini kıstım.",
        "target": "Ula zërin e altoparlantit."
      }
    ]
  },
  {
    "id": "a2-tec-41",
    "word": "Mikrofon",
    "translation": "Mikrofon",
    "pos": "emër",
    "category": "technology",
    "is_balkan": true,
    "examples": [
      {
        "source": "Mikrofon çalışmıyor.",
        "target": "Mikrofoni nuk punon."
      }
    ]
  },
  {
    "id": "a2-tec-42",
    "word": "Yazıcı",
    "translation": "Printer / Shtypshkronjë",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Yazıcıdan çıktı aldım.",
        "target": "Mora një printim nga printeri."
      }
    ]
  },
  {
    "id": "a2-tec-43",
    "word": "Tarayıcı (cihaz)",
    "translation": "Skaner (pajisje)",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Belgeyi tarayıcı ile bilgisayara aktardım.",
        "target": "E kalova dokumentin në kompjuter me skaner."
      }
    ]
  },
  {
    "id": "a2-tec-44",
    "word": "Bellek",
    "translation": "Memorie / USB flash memorie",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Bellekte boş yer kalmadı.",
        "target": "Nuk mbeti hapësirë e lirë në memorie."
      }
    ]
  },
  {
    "id": "a2-tec-45",
    "word": "Şarj aleti",
    "translation": "Karikues",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Şarj aletini evde unuttum.",
        "target": "E harrova karikuesin në shtëpi."
      }
    ]
  },
  {
    "id": "a2-tec-46",
    "word": "Pil",
    "translation": "Bateri / Pilë",
    "pos": "emër",
    "category": "technology",
    "is_balkan": true,
    "examples": [
      {
        "source": "Kumandanın pili bitti.",
        "target": "Mbaroi bateria e telekomandës."
      }
    ]
  },
  {
    "id": "a2-tec-47",
    "word": "Kablo",
    "translation": "Kabllo",
    "pos": "emër",
    "category": "technology",
    "is_balkan": true,
    "examples": [
      {
        "source": "İnternet kablosunu bağladım.",
        "target": "Lidha kabllon e internetit."
      }
    ]
  },
  {
    "id": "a2-tec-48",
    "word": "Bağlantı",
    "translation": "Lidhje / Lidhshmëri",
    "pos": "emër",
    "category": "technology",
    "examples": [
      {
        "source": "Kablosuz bağlantı çok stabil.",
        "target": "Lidhja pa kabllo është shumë stabile."
      }
    ]
  },
  {
    "id": "a2-tec-49",
    "word": "Sinyal",
    "translation": "Sinjal",
    "pos": "emër",
    "category": "technology",
    "is_balkan": true,
    "examples": [
      {
        "source": "Telefon sinyali zayıf.",
        "target": "Sinjali i telefonit është i dobët."
      }
    ]
  },
  {
    "id": "a2-tec-50",
    "word": "Modem",
    "translation": "Modem",
    "pos": "emër",
    "category": "technology",
    "is_balkan": true,
    "examples": [
      {
        "source": "Modemi kapatıp tekrar açtım.",
        "target": "E fika modemin dhe e hapa përsëri."
      }
    ]
  },
  {
    "id": "a2-soc-1",
    "word": "Toplum",
    "translation": "Shoqëri / Popullsi",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Toplum kurallarına uymalıyız.",
        "target": "Duhet t'u përmbahemi rregullave të shoqërisë."
      }
    ]
  },
  {
    "id": "a2-soc-2",
    "word": "Kültür",
    "translation": "Kulturë",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Türk kültürü çok zengindir.",
        "target": "Kultura turke është shumë e pasur."
      }
    ]
  },
  {
    "id": "a2-soc-3",
    "word": "Gelenek",
    "translation": "Traditë",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Geleneklerimizi koruyoruz.",
        "target": "Mbrojmë traditat tona."
      }
    ]
  },
  {
    "id": "a2-soc-4",
    "word": "Görenek",
    "translation": "Zakon / Mënyrë sjelljeje",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Adet ve görenekler önemlidir.",
        "target": "Adetet dhe zakonet janë të rëndësishme."
      }
    ]
  },
  {
    "id": "a2-soc-5",
    "word": "Adalet",
    "translation": "Drejtësi",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Adalet mülkün temelidir.",
        "target": "Drejtësia është themeli i shtetit."
      }
    ]
  },
  {
    "id": "a2-soc-6",
    "word": "Hukuk",
    "translation": "Ligj / E drejta",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Hukuk fakültesinde okuyor.",
        "target": "Studion në fakultetin e drejtësisë."
      }
    ]
  },
  {
    "id": "a2-soc-7",
    "word": "Kanun",
    "translation": "Ligj / Kanun",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Yeni kanun kabul edildi.",
        "target": "U pranua ligji i ri."
      }
    ]
  },
  {
    "id": "a2-soc-8",
    "word": "Hak",
    "translation": "E drejtë / Hak",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "İnsan haklarını korumalıyız.",
        "target": "Duhet të mbrojmë të drejtat e njeriut."
      }
    ]
  },
  {
    "id": "a2-soc-9",
    "word": "Özgürlük",
    "translation": "Liri",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Özgürlük en değerli şeydir.",
        "target": "Liria është gjëja më e vlefshme."
      }
    ]
  },
  {
    "id": "a2-soc-10",
    "word": "Eşitlik",
    "translation": "Barazi",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Toplumda eşitlik olmalıdır.",
        "target": "Duhet të ketë barazi në shoqëri."
      }
    ]
  },
  {
    "id": "a2-soc-11",
    "word": "Demokrasi",
    "translation": "Demokraci",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Demokrasi halkın yönetimidir.",
        "target": "Demokracia është qeverisja e popullit."
      }
    ]
  },
  {
    "id": "a2-soc-12",
    "word": "Devlet",
    "translation": "Shtet / Devlet",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Devlet kurumları çalışıyor.",
        "target": "Institucionet shtetërore po punojnë."
      }
    ]
  },
  {
    "id": "a2-soc-13",
    "word": "Hükümet",
    "translation": "Qeveri / Hükümet",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Hükümet yeni bütçeyi açıkladı.",
        "target": "Qeveria shpalli buxhetin e ri."
      }
    ]
  },
  {
    "id": "a2-soc-14",
    "word": "Seçim",
    "translation": "Zgjedhje (politike)",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Yerel seçimler yaklaşıyor.",
        "target": "Zgjedhjet lokale po afrohen."
      }
    ]
  },
  {
    "id": "a2-soc-15",
    "word": "Oy kullanmak",
    "translation": "Votoj / Hedh votën",
    "pos": "folje",
    "category": "society",
    "examples": [
      {
        "source": "Vatandaşlar sandıkta oy kullanıyor.",
        "target": "Qytetarët po votojnë në kutitë e votimit."
      }
    ]
  },
  {
    "id": "a2-soc-16",
    "word": "Parti",
    "translation": "Parti (politike/argëtuese)",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Siyasi parti lideri konuştu.",
        "target": "Foli lideri i partisë politike."
      }
    ]
  },
  {
    "id": "a2-soc-17",
    "word": "Vatandaş",
    "translation": "Qytetar / Shtetas",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Her vatandaşın hakları vardır.",
        "target": "Çdo shtetas ka të drejta."
      }
    ]
  },
  {
    "id": "a2-soc-18",
    "word": "Nüfus",
    "translation": "Popullsi / Nüfus",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Şehrin nüfusu hızla artıyor.",
        "target": "Popullsia e qytetit po rritet shpejt."
      }
    ]
  },
  {
    "id": "a2-soc-19",
    "word": "Göç",
    "translation": "Migrim / Shpërngulje",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Köyden kente göç devam ediyor.",
        "target": "Migrimi nga fshati në qytet po vazhdon."
      }
    ]
  },
  {
    "id": "a2-soc-20",
    "word": "Savaş",
    "translation": "Luftë",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Savaş insanlık dramıdır.",
        "target": "Lufta është dramë njerëzore."
      }
    ]
  },
  {
    "id": "a2-soc-21",
    "word": "Barış",
    "translation": "Paqe",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Dünyada barış istiyoruz.",
        "target": "Duam paqe në botë."
      }
    ]
  },
  {
    "id": "a2-soc-22",
    "word": "Anayasa",
    "translation": "Kushtetutë",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Anayasa maddeleri değişti.",
        "target": "Ndryshuan nenet e kushtetutës."
      }
    ]
  },
  {
    "id": "a2-soc-23",
    "word": "Mahkeme",
    "translation": "Gjykatë / Gjyq / Mehkeme",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Mahkeme kararı açıkladı.",
        "target": "Gjykata shpalli vendimin."
      }
    ]
  },
  {
    "id": "a2-soc-24",
    "word": "Hâkim",
    "translation": "Gjykatës / Hakim",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Hâkim davayı erteledi.",
        "target": "Gjykatësi e shtyu seancën."
      }
    ]
  },
  {
    "id": "a2-soc-25",
    "word": "Savcı",
    "translation": "Prokuror",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Savcı kanıtları inceledi.",
        "target": "Prokurori shqyrtoi provat."
      }
    ]
  },
  {
    "id": "a2-soc-26",
    "word": "Bürokrat",
    "translation": "Burokrat",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Bürokratlar toplantıda bir araya geldi.",
        "target": "Burokratët u mblodhën në takim."
      }
    ]
  },
  {
    "id": "a2-soc-27",
    "word": "Asker",
    "translation": "Ushtar / Asqer",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Kardeşim şu an askerdir.",
        "target": "Vëllai im është ushtar tani."
      }
    ]
  },
  {
    "id": "a2-soc-28",
    "word": "Güvenlik",
    "translation": "Siguri",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Güvenlik görevlisi kapıyı açtı.",
        "target": "Roja e sigurisë hapi derën."
      }
    ]
  },
  {
    "id": "a2-soc-29",
    "word": "Suç",
    "translation": "Faj / Krim",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Suç işlemek yasaktır.",
        "target": "Kryerja e krimit është e ndaluar."
      }
    ]
  },
  {
    "id": "a2-soc-30",
    "word": "Ceza",
    "translation": "Dënim / Ndëshkim / Gjobë / Xheza",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Hız sınırını aşanlara para cezası verilir.",
        "target": "Atyre që kalojnë kufirin e shpejtësisë u jepet gjobë."
      }
    ]
  },
  {
    "id": "a2-soc-31",
    "word": "Hapishane",
    "translation": "Burg / Hapishane",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Hapishane duvarları çok yüksek.",
        "target": "Muret e burgut janë shumë të larta."
      }
    ]
  },
  {
    "id": "a2-soc-32",
    "word": "Siyaset",
    "translation": "Politikë / Siyaset",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Siyaset hakkında konuşmayı sevmem.",
        "target": "Nuk më pëlqen të flas për politikë."
      }
    ]
  },
  {
    "id": "a2-soc-33",
    "word": "Ekonomi",
    "translation": "Ekonomi",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Ülke ekonomisi büyüyor.",
        "target": "Ekonomia e vendit po rritet."
      }
    ]
  },
  {
    "id": "a2-soc-34",
    "word": "Enflasyon",
    "translation": "Inflacion",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Enflasyon oranları düştü.",
        "target": "Shkalla e inflacionit ra."
      }
    ]
  },
  {
    "id": "a2-soc-35",
    "word": "İşsizlik oranı",
    "translation": "Shkalla e papunësisë",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "İşsizlik oranı bu yıl azaldı.",
        "target": "Shkalla e papunësisë u zvogëlua këtë vit."
      }
    ]
  },
  {
    "id": "a2-soc-36",
    "word": "Sosyal yardım",
    "translation": "Ndihmë sociale",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Fakir ailelere sosyal yardım yapılıyor.",
        "target": "Po jepet ndihmë sociale për familjet e varfra."
      }
    ]
  },
  {
    "id": "a2-soc-37",
    "word": "Vakıf",
    "translation": "Fondacion / Vakëf",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Bu vakıf burs sağlıyor.",
        "target": "Ky fondacion siguron bursa."
      }
    ]
  },
  {
    "id": "a2-soc-38",
    "word": "Sivil toplum",
    "translation": "Shoqëri civile",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Sivil toplum kuruluşları toplandı.",
        "target": "U mblodhën organizatat e shoqërisë civile."
      }
    ]
  },
  {
    "id": "a2-soc-39",
    "word": "Gönüllü",
    "translation": "Vullnetar",
    "pos": "mbiemër",
    "category": "society",
    "examples": [
      {
        "source": "Gönüllü gençler çevreyi temizledi.",
        "target": "Të rinjtë vullnetarë pastruan mjedisin."
      }
    ]
  },
  {
    "id": "a2-soc-40",
    "word": "Dayanışma",
    "translation": "Solidaritet / Mbështetje e ndërsjellë",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Toplumsal dayanışma önemlidir.",
        "target": "Solidariteti shoqëror është i rëndësishëm."
      }
    ]
  },
  {
    "id": "a2-soc-41",
    "word": "Kampanya",
    "translation": "Fushata / Kampanjë",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Kan bağışı kampanyası başladı.",
        "target": "Filloi fushata e dhurimit të gjakut."
      }
    ]
  },
  {
    "id": "a2-soc-42",
    "word": "Protesto",
    "translation": "Protestë",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "İşçiler protesto düzenledi.",
        "target": "Punëtorët organizuan protestë."
      }
    ]
  },
  {
    "id": "a2-soc-43",
    "word": "Miting",
    "translation": "Miting / Tubim",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Meydanda büyük bir miting vardı.",
        "target": "Kishte një tubim të madh në shesh."
      }
    ]
  },
  {
    "id": "a2-soc-44",
    "word": "Söyleşi",
    "translation": "Bashkëbisedim / Intervistë / Bisedë",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Yazarla söyleşi yapıldı.",
        "target": "U bë një bisedë me shkrimtarin."
      }
    ]
  },
  {
    "id": "a2-soc-45",
    "word": "Tören",
    "translation": "Ceremoni / Kremtim",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Açılış töreni saat onda.",
        "target": "Ceremonia e hapjes është në orën dhjetë."
      }
    ]
  },
  {
    "id": "a2-soc-46",
    "word": "Davet",
    "translation": "Ftesë / Davet",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Düğün davetiyesini aldım.",
        "target": "Mora ftesën e dasmës."
      }
    ]
  },
  {
    "id": "a2-soc-47",
    "word": "Düğün",
    "translation": "Dasme / Dasmë",
    "pos": "emër",
    "category": "society",
    "examples": [
      {
        "source": "Düğün salonu çok süslüydü.",
        "target": "Salla e dasmës ishte shumë e zbukuruar."
      }
    ]
  },
  {
    "id": "a2-soc-48",
    "word": "Cenaze",
    "translation": "Varrim / Xhenaze",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Cenaze merasimine katıldık.",
        "target": "Morëm pjesë në ceremoninë e varrimit."
      }
    ]
  },
  {
    "id": "a2-soc-49",
    "word": "Bayram",
    "translation": "Festë / Bajram",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Ramazan Bayramı kutlu olsun!",
        "target": "Gëzuar Fiter Bajramin!"
      }
    ]
  },
  {
    "id": "a2-soc-50",
    "word": "Miras",
    "translation": "Trashëgimi / Miras",
    "pos": "emër",
    "category": "society",
    "is_balkan": true,
    "examples": [
      {
        "source": "Kültürel mirasımızı korumalıyız.",
        "target": "Duhet të mbrojmë trashëgiminë tonë kulturore."
      }
    ]
  },
  {
    "id": "a2-ver-1",
    "word": "İnanmak",
    "translation": "Besoj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Sana inanıyorum.",
        "target": "Të besoj ty."
      }
    ]
  },
  {
    "id": "a2-ver-2",
    "word": "Düşünmek",
    "translation": "Mendoj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Gelecek hakkında düşünüyorum.",
        "target": "Po mendoj për të ardhmen."
      }
    ]
  },
  {
    "id": "a2-ver-3",
    "word": "Karar vermek",
    "translation": "Vendos / Marr vendim",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Gitmeye karar verdim.",
        "target": "Vendosa të shkoj."
      }
    ]
  },
  {
    "id": "a2-ver-4",
    "word": "Hazırlamak",
    "translation": "Përgatis",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Akşam yemeğini hazırladım.",
        "target": "Përgatita darkën."
      }
    ]
  },
  {
    "id": "a2-ver-5",
    "word": "Hatırlamak",
    "translation": "Kujtoj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Onun adını hatırlıyorum.",
        "target": "E kujtoj emrin e tij."
      }
    ]
  },
  {
    "id": "a2-ver-6",
    "word": "Unutmak",
    "translation": "Harroj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Anahtarımı evde unuttum.",
        "target": "Harrova anahtarin tim në shtëpi."
      }
    ]
  },
  {
    "id": "a2-ver-7",
    "word": "Paylaşmak",
    "translation": "Ndaj (me të tjerët)",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Bilgilerimi arkadaşlarımla paylaşıyorum.",
        "target": "I ndaj informacionet e mia me shokët."
      }
    ]
  },
  {
    "id": "a2-ver-8",
    "word": "Değiştirmek",
    "translation": "Ndryshoj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Fikrimi değiştirdim.",
        "target": "Ndryshova mendjen time."
      }
    ]
  },
  {
    "id": "a2-ver-9",
    "word": "Geliştirmek",
    "translation": "Zhvilloj / Përmirësoj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Türkçemi geliştirmek istiyorum.",
        "target": "Dua ta përmirësoj turqishten time."
      }
    ]
  },
  {
    "id": "a2-ver-10",
    "word": "Kaydetmek",
    "translation": "Regjistroj / Ruaj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Dosyayı bilgisayara kaydettim.",
        "target": "E ruajta skedarin në kompjuter."
      }
    ]
  },
  {
    "id": "a2-ver-11",
    "word": "Kabul etmek",
    "translation": "Pranoj / Kabul",
    "pos": "folje",
    "category": "verbs",
    "is_balkan": true,
    "examples": [
      {
        "source": "Teklifinizi kabul ediyorum.",
        "target": "E pranoj ofertën tuaj."
      }
    ]
  },
  {
    "id": "a2-ver-12",
    "word": "Reddetmek",
    "translation": "Refuzoj / Kundërshtoj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Başvuruyu reddettiler.",
        "target": "E refuzuan aplikimin."
      }
    ]
  },
  {
    "id": "a2-ver-13",
    "word": "Katılmak",
    "translation": "Marr pjesë / Bashkohem",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Toplantıya katılacağım.",
        "target": "Do të marr pjesë në mbledhje."
      }
    ]
  },
  {
    "id": "a2-ver-14",
    "word": "Tavsiye etmek",
    "translation": "Këshilloj / Rekomandoj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Bu kitabı okumanı tavsiye ederim.",
        "target": "Rekomandoj ta lexosh këtë libër."
      }
    ]
  },
  {
    "id": "a2-ver-15",
    "word": "Şikayet etmek",
    "translation": "Ankohem / Bëj shpifje / Gjakim",
    "pos": "folje",
    "category": "verbs",
    "is_balkan": true,
    "examples": [
      {
        "source": "Gürültüden şikayet ettik.",
        "target": "U ankuam për zhurmën."
      }
    ]
  },
  {
    "id": "a2-ver-16",
    "word": "İptal etmek",
    "translation": "Anuloj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Rezervasyonumu iptal ettim.",
        "target": "E anulova rezervimin tim."
      }
    ]
  },
  {
    "id": "a2-ver-17",
    "word": "Erişmek",
    "translation": "Arrij / Kam qasje",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "İnternet üzerinden bilgilere eriştim.",
        "target": "Arrita tek informacionet përmes internetit."
      }
    ]
  },
  {
    "id": "a2-ver-18",
    "word": "Ulaşmak",
    "translation": "Mbërrij / Arrij te",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Otobüs durağına ulaştım.",
        "target": "Mbërrita në stacionin e otobusit."
      }
    ]
  },
  {
    "id": "a2-ver-19",
    "word": "Uygulamak",
    "translation": "Zbatoj / Aplikoj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Yeni kuralları uyguluyoruz.",
        "target": "Po zbatojmë rregullat e reja."
      }
    ]
  },
  {
    "id": "a2-ver-20",
    "word": "Denemek",
    "translation": "Provoj / Tentoj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Bu yemeği denemek istiyorum.",
        "target": "Dua ta provoj këtë ushqim."
      }
    ]
  },
  {
    "id": "a2-ver-21",
    "word": "Tercih etmek",
    "translation": "Preferoj / Përzgjedh",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Çay yerine kahve tercih ederim.",
        "target": "Preferoj kafenë në vend të çajit."
      }
    ]
  },
  {
    "id": "a2-ver-22",
    "word": "Tanımlamak",
    "translation": "Përkufizoj / Përshkruaj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Bugün kelimeyi nasıl tanımlarsınız?",
        "target": "Si e përkufizoni këtë fjalë?"
      }
    ]
  },
  {
    "id": "a2-ver-23",
    "word": "Açıklamak",
    "translation": "Shpjegoj / Sqaroj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Öğretmen konuyu açıkladı.",
        "target": "Mësuesi sqaroi temën."
      }
    ]
  },
  {
    "id": "a2-ver-24",
    "word": "Korumak",
    "translation": "Mbroj / Ruaj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Doğayı korumalıyız.",
        "target": "Duhet ta mbrojmë natyrën."
      }
    ]
  },
  {
    "id": "a2-ver-25",
    "word": "Saldırmak",
    "translation": "Sulmoj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Düşman askerleri saldırdı.",
        "target": "Ushtarët armiq sulmuan."
      }
    ]
  },
  {
    "id": "a2-ver-26",
    "word": "Savunmak",
    "translation": "Mbroj (një qëndrim)",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Haklarımızı savunduk.",
        "target": "Mbrojtëm të drejtat tona."
      }
    ]
  },
  {
    "id": "a2-ver-27",
    "word": "Yönetmek",
    "translation": "Drejtoj / Menaxhoj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Şirketi başarıyla yönetiyor.",
        "target": "E drejton kompaninë me sukses."
      }
    ]
  },
  {
    "id": "a2-ver-28",
    "word": "Üretmek",
    "translation": "Prodhoni / Prodhon",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Fabrika yeni ürünler üretiyor.",
        "target": "Fabrika po prodhon produkte të reja."
      }
    ]
  },
  {
    "id": "a2-ver-29",
    "word": "Tüketmek",
    "translation": "Konsumoj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Çok fazla şeker tüketmemeliyiz.",
        "target": "Nuk duhet të konsumojmë shumë sheqer."
      }
    ]
  },
  {
    "id": "a2-ver-30",
    "word": "Harcamak",
    "translation": "Shpenzoj / Harxhoj",
    "pos": "folje",
    "category": "verbs",
    "is_balkan": true,
    "examples": [
      {
        "source": "Çok para harcadım.",
        "target": "Shpenzova shumë para."
      }
    ]
  },
  {
    "id": "a2-ver-31",
    "word": "Kazanmak",
    "translation": "Fitoj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Yarışmayı kazandım.",
        "target": "E fitova garën."
      }
    ]
  },
  {
    "id": "a2-ver-32",
    "word": "Keşfetmek",
    "translation": "Zbuloj / Eksploroj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Yeni bir yer keşfettik.",
        "target": "Zbuluam një vend të ri."
      }
    ]
  },
  {
    "id": "a2-ver-33",
    "word": "Başarmak",
    "translation": "Ia dal / Arrij sukses",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Sonunda başardık!",
        "target": "Më në fund ia dolëm!"
      }
    ]
  },
  {
    "id": "a2-ver-34",
    "word": "Gecikmek",
    "translation": "Vonohem",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Otobüs gecikti.",
        "target": "U vonua autobusi."
      }
    ]
  },
  {
    "id": "a2-ver-35",
    "word": "Acele etmek",
    "translation": "Nitohem / Nxiton",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Acele etmeliyiz, geç kalıyoruz.",
        "target": "Duhet të nxitojmë, po vonohemi."
      }
    ]
  },
  {
    "id": "a2-ver-36",
    "word": "Tatsızlaşmak",
    "translation": "Mërzitem / Bëhet pa shije",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Konu giderek tatsızlaştı.",
        "target": "Çështja u bë gjithnjë e më pa shije."
      }
    ]
  },
  {
    "id": "a2-ver-37",
    "word": "Gülümsemek",
    "translation": "Bëj buzëqeshje",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Fotoğraf çekilirken gülümsedi.",
        "target": "Bëri buzëqeshje gjatë fotografimit."
      }
    ]
  },
  {
    "id": "a2-ver-38",
    "word": "Ağlamak",
    "translation": "Qaj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Çocuk acıdan ağladı.",
        "target": "Fëmija qau nga dhimbja."
      }
    ]
  },
  {
    "id": "a2-ver-39",
    "word": "Gülmek",
    "translation": "Qesh",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Fıkraya çok güldük.",
        "target": "Qeshëm shumë me anekdotën."
      }
    ]
  },
  {
    "id": "a2-ver-40",
    "word": "Bağırmak",
    "translation": "Bërtas / Thirras",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Lütfen bağırmadan konuşun.",
        "target": "Ju lutem flisni pa bërtitur."
      }
    ]
  },
  {
    "id": "a2-ver-41",
    "word": "Fısıldamak",
    "translation": "Pëshpërit",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Kulağıma bir sır fısıldadı.",
        "target": "Më pëshpëriti një sekret në vesh."
      }
    ]
  },
  {
    "id": "a2-ver-42",
    "word": "Seyretmek",
    "translation": "Shikoj / Vëzhgoj / Sehir",
    "pos": "folje",
    "category": "verbs",
    "is_balkan": true,
    "examples": [
      {
        "source": "Televizyon seyrediyorum.",
        "target": "Po shikoj televizor."
      }
    ]
  },
  {
    "id": "a2-ver-43",
    "word": "İncelemek",
    "translation": "Shqyrtoj / Ekzaminoj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Doktor raporları inceledi.",
        "target": "Doktori shqyrtoi raportet."
      }
    ]
  },
  {
    "id": "a2-ver-44",
    "word": "İzlemek",
    "translation": "Ndjek / Shikoj",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Maçı canlı izledik.",
        "target": "E ndoqëm ndeshjen drejtpërdrejt."
      }
    ]
  },
  {
    "id": "a2-ver-45",
    "word": "Takip etmek",
    "translation": "Ndjek / Pasoj hap pas hapi",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Kılavuzu takip edin.",
        "target": "Ndiqni udhëzuesin."
      }
    ]
  },
  {
    "id": "a2-ver-46",
    "word": "Kaçınmak",
    "translation": "Shmangem / Ruhem",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Hatalardan kaçınmalıyız.",
        "target": "Duhet t'u shmangemi gabimeve."
      }
    ]
  },
  {
    "id": "a2-ver-47",
    "word": "Vazgeçmek",
    "translation": "Heq dorë",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Gitmekten vazgeçtim.",
        "target": "Hoqa dorë nga të shkuarit."
      }
    ]
  },
  {
    "id": "a2-ver-48",
    "word": "Söz vermek",
    "translation": "Premtoj / Jap fjalën",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Zamanında geleceğime söz verdim.",
        "target": "Japa fjalën se do të vij në kohë."
      }
    ]
  },
  {
    "id": "a2-ver-49",
    "word": "Yalan söylemek",
    "translation": "Gënjej / Rren",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Asla yalan söylemem.",
        "target": "Kurrë nuk gënjej."
      }
    ]
  },
  {
    "id": "a2-ver-50",
    "word": "Doğru söylemek",
    "translation": "Flas të vërtetën",
    "pos": "folje",
    "category": "verbs",
    "examples": [
      {
        "source": "Her zaman doğruyu söylemeliyzi.",
        "target": "Gjithmonë duhet të flasim të vërtetën."
      }
    ]
  },
  {
    "id": "a2-adv-1",
    "word": "Genellikle",
    "translation": "Zakonisht",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Genellikle saat yedide uyanırım.",
        "target": "Zakonisht zgjohem në orën shtatë."
      }
    ]
  },
  {
    "id": "a2-adv-2",
    "word": "Bazen",
    "translation": "Nganjëherë / Bazen",
    "pos": "ndajfolje",
    "category": "adverbs",
    "is_balkan": true,
    "examples": [
      {
        "source": "Bazen dışarıda yemek yeriz.",
        "target": "Nganjëherë hamë jashtë."
      }
    ]
  },
  {
    "id": "a2-adv-3",
    "word": "Sık sık",
    "translation": "Shpesh",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Onu sık sık kütüphanede görüyorum.",
        "target": "E shoh shpesh në bibliotekë."
      }
    ]
  },
  {
    "id": "a2-adv-4",
    "word": "Seyrek",
    "translation": "Rrallë",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Tiyatroya seyrek gideriz.",
        "target": "Shkojmë rrallë në teatër."
      }
    ]
  },
  {
    "id": "a2-adv-5",
    "word": "Asla",
    "translation": "Kurrë / Asnjëherë",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Asla yalan söylemem.",
        "target": "Kurrë nuk gënjej."
      }
    ]
  },
  {
    "id": "a2-adv-6",
    "word": "Her zaman",
    "translation": "Gjithmonë",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Her zaman seni destekleyeceğim.",
        "target": "Gjithmonë do të të mbështes."
      }
    ]
  },
  {
    "id": "a2-adv-7",
    "word": "Hiçbir zaman",
    "translation": "Asnjëherë",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Hiçbir zaman geç kalmaz.",
        "target": "Asnjëherë nuk vonohet."
      }
    ]
  },
  {
    "id": "a2-adv-8",
    "word": "Hemen",
    "translation": "Menjëherë / Hekur",
    "pos": "ndajfolje",
    "category": "adverbs",
    "is_balkan": true,
    "examples": [
      {
        "source": "Hemen buraya gel!",
        "target": "Eja menjëherë këtu!"
      }
    ]
  },
  {
    "id": "a2-adv-9",
    "word": "Derhal",
    "translation": "Menjëherë / Derhal",
    "pos": "ndajfolje",
    "category": "adverbs",
    "is_balkan": true,
    "examples": [
      {
        "source": "Derhal yola çıktık.",
        "target": "U nisëm menjëherë."
      }
    ]
  },
  {
    "id": "a2-adv-10",
    "word": "Aniden",
    "translation": "Papritmas",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Aniden yağmur başladı.",
        "target": "Papritmas filloi shiu."
      }
    ]
  },
  {
    "id": "a2-adv-11",
    "word": "Yavaşça",
    "translation": "Ngadalë",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Kapıyı yavaşça kapattı.",
        "target": "E mbylli derën ngadalë."
      }
    ]
  },
  {
    "id": "a2-adv-12",
    "word": "Hızlıca",
    "translation": "Shpejt e shpejt",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Ödevini hızlıca bitirdi.",
        "target": "E përfundoi detyrën e tij shpejt."
      }
    ]
  },
  {
    "id": "a2-adv-13",
    "word": "Kolayca",
    "translation": "Lehtësisht",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Sınavı kolayca geçti.",
        "target": "E kaloi provimin lehtësisht."
      }
    ]
  },
  {
    "id": "a2-adv-14",
    "word": "Zorlukla",
    "translation": "Me vështirësi",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Yokuşu zorlukla tırmandı.",
        "target": "U ngjit në përpjetëz me vështirësi."
      }
    ]
  },
  {
    "id": "a2-adv-15",
    "word": "Özellikle",
    "translation": "Veçanërisht / Sidomos",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Özellikle bu konuyu çalışmalısın.",
        "target": "Veçanërisht duhet ta studiosh këtë temë."
      }
    ]
  },
  {
    "id": "a2-adv-16",
    "word": "Kesinlikle",
    "translation": "Padyshim / Absolutisht",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Bu teklifi kesinlikle kabul etmelisin.",
        "target": "Absolutisht duhet ta pranosh këtë ofertë."
      }
    ]
  },
  {
    "id": "a2-adv-17",
    "word": "Muhtemelen",
    "translation": "Ndoshta / E mundshme",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Muhtemelen yarın gelecek.",
        "target": "Ndoshta do të vijë nesër."
      }
    ]
  },
  {
    "id": "a2-adv-18",
    "word": "Belki",
    "translation": "Ndoshta / Belki",
    "pos": "ndajfolje",
    "category": "adverbs",
    "is_balkan": true,
    "examples": [
      {
        "source": "Belki sinemaya gideriz.",
        "target": "Ndoshta shkojmë në kinema."
      }
    ]
  },
  {
    "id": "a2-adv-19",
    "word": "Yalnızca",
    "translation": "Vetëm / Vetëm se",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Yalnızca seni bekliyorum.",
        "target": "Po të pres vetëm ty."
      }
    ]
  },
  {
    "id": "a2-adv-20",
    "word": "Sadece",
    "translation": "Vetëm",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Sadece bir saat vaktim var.",
        "target": "Kam vetëm një orë kohë."
      }
    ]
  },
  {
    "id": "a2-adv-21",
    "word": "Birlikte",
    "translation": "Së bashku / Bashkë",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Birlikte ders çalıştık.",
        "target": "Studiuam bashkë."
      }
    ]
  },
  {
    "id": "a2-adv-22",
    "word": "Yalnız",
    "translation": "Vetëm (pa të tjerët)",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Evde yalnız yaşıyor.",
        "target": "Jeton vetëm në shtëpi."
      }
    ]
  },
  {
    "id": "a2-adv-23",
    "word": "Karşılıklı",
    "translation": "Në mënyrë të ndërsjellë / Ballë për ballë",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Karşılıklı konuşarak anlaştık.",
        "target": "U morëm vesh duke biseduar ballë për ballë."
      }
    ]
  },
  {
    "id": "a2-adv-24",
    "word": "Yaklaşık",
    "translation": "Rreth / Përafërsisht",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Yaklaşık iki saat sürdü.",
        "target": "Zgjati përafërsisht dy orë."
      }
    ]
  },
  {
    "id": "a2-adv-25",
    "word": "Tamamen",
    "translation": "Tërësisht / Plotësisht",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Evi tamamen temizledim.",
        "target": "E pastrova shtëpinë plotësisht."
      }
    ]
  },
  {
    "id": "a2-adv-26",
    "word": "Kısmen",
    "translation": "Pjesërisht",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Proje kısmen tamamlandı.",
        "target": "Projekti u përfundua pjesërisht."
      }
    ]
  },
  {
    "id": "a2-adv-27",
    "word": "Çoğunlukla",
    "translation": "Shumicën e kohës / Kryesisht",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Çoğunlukla evde kitap okurum.",
        "target": "Kryesisht lexoj libra në shtëpi."
      }
    ]
  },
  {
    "id": "a2-adv-28",
    "word": "Neredeyse",
    "translation": "Pothuajse",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Neredeyse geç kalıyordum.",
        "target": "Pothuajse po vonohesha."
      }
    ]
  },
  {
    "id": "a2-adv-29",
    "word": "Yine",
    "translation": "Përsëri / Sërish",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Bugün yine yağmur yağıyor.",
        "target": "Sot përsëri po bie shi."
      }
    ]
  },
  {
    "id": "a2-adv-30",
    "word": "Henüz",
    "translation": "Ende (në fjali mohuese) / Sapo",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Henüz gelmedi.",
        "target": "Nuk ka ardhur ende."
      }
    ]
  },
  {
    "id": "a2-adv-31",
    "word": "Çünkü",
    "translation": "Sepse / Pasi",
    "pos": "lidhëz",
    "category": "adverbs",
    "examples": [
      {
        "source": "Okula gitmedim çünkü hastaydım.",
        "target": "Nuk shkova në shkollë sepse isha i sëmurë."
      }
    ]
  },
  {
    "id": "a2-adv-32",
    "word": "Bu yüzden",
    "translation": "Prandaj / Për këtë arsye",
    "pos": "lidhëz",
    "category": "adverbs",
    "examples": [
      {
        "source": "Çok çalıştım bu yüzden yoruldum.",
        "target": "Punova shumë prandaj u lodha."
      }
    ]
  },
  {
    "id": "a2-adv-33",
    "word": "Bu nedenle",
    "translation": "Për këtë arsye",
    "pos": "lidhëz",
    "category": "adverbs",
    "examples": [
      {
        "source": "Hava soğuk bu nedenle evde kaldık.",
        "target": "Moti është i ftohtë për këtë arsye ndenjëm në shtëpi."
      }
    ]
  },
  {
    "id": "a2-adv-34",
    "word": "Ama",
    "translation": "Por / Ama",
    "pos": "lidhëz",
    "category": "adverbs",
    "is_balkan": true,
    "examples": [
      {
        "source": "Gelmek istedim ama vaktim yoktu.",
        "target": "Desha të vija por nuk kisha kohë."
      }
    ]
  },
  {
    "id": "a2-adv-35",
    "word": "Fakat",
    "translation": "Por / Megjithatë",
    "pos": "lidhëz",
    "category": "adverbs",
    "examples": [
      {
        "source": "Çok zor fakat imkansız değil.",
        "target": "Është shumë e vështirë por jo e pamundur."
      }
    ]
  },
  {
    "id": "a2-adv-36",
    "word": "Lakin",
    "translation": "Mirëpo / Lakin",
    "pos": "lidhëz",
    "category": "adverbs",
    "is_balkan": true,
    "examples": [
      {
        "source": "Geldi lakin konuşmadı.",
        "target": "Erdhi mirëpo nuk foli."
      }
    ]
  },
  {
    "id": "a2-adv-37",
    "word": "Ancak",
    "translation": "Vetëm se / Megjithatë",
    "pos": "lidhëz",
    "category": "adverbs",
    "examples": [
      {
        "source": "Oraya gidebilirsin ancak dikkatli ol.",
        "target": "Mund të shkosh atje vetëm se ki kujdes."
      }
    ]
  },
  {
    "id": "a2-adv-38",
    "word": "Oysa",
    "translation": "Ndërsa / Kurse / Kur në të vërtetë",
    "pos": "lidhëz",
    "category": "adverbs",
    "examples": [
      {
        "source": "Çalıştığını söyledi oysa uyuyordu.",
        "target": "Tha se po punonte kur në të vërtetë po flinte."
      }
    ]
  },
  {
    "id": "a2-adv-39",
    "word": "Halbuki",
    "translation": "Kurse / Megjithatë / Megjithëse",
    "pos": "lidhëz",
    "category": "adverbs",
    "examples": [
      {
        "source": "Beni arayacaktın halbuki aramadın.",
        "target": "Do të më telefonoje megjithëse nuk më telefonove."
      }
    ]
  },
  {
    "id": "a2-adv-40",
    "word": "Veya",
    "translation": "Ose",
    "pos": "lidhëz",
    "category": "adverbs",
    "examples": [
      {
        "source": "Çay veya kahve ister misin?",
        "target": "A dëshiron çaj ose kafe?"
      }
    ]
  },
  {
    "id": "a2-adv-41",
    "word": "Yahut",
    "translation": "Ose / Apo / Jahut",
    "pos": "lidhëz",
    "category": "adverbs",
    "is_balkan": true,
    "examples": [
      {
        "source": "Bugün yahut yarın geleceğim.",
        "target": "Do të vij sot ose nesër."
      }
    ]
  },
  {
    "id": "a2-adv-42",
    "word": "Yoksa",
    "translation": "Përndryshe / Apo",
    "pos": "lidhëz",
    "category": "adverbs",
    "examples": [
      {
        "source": "Çabuk ol yoksa geç kalacağız.",
        "target": "Bëj shpejt përndryshe do të vonohemi."
      }
    ]
  },
  {
    "id": "a2-adv-43",
    "word": "Üstelik",
    "translation": "Për më tepër / Bile",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Hava soğuk üstelik yağmur yağıyor.",
        "target": "Moti është i ftohtë për më tepër po bie shi."
      }
    ]
  },
  {
    "id": "a2-adv-44",
    "word": "Ayrıca",
    "translation": "Gjithashtu / Përveç kësaj",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Bu kitabı okudum ayrıca özet çıkardım.",
        "target": "E lexova këtë libër gjithashtu nxora përmbledhjen."
      }
    ]
  },
  {
    "id": "a2-adv-45",
    "word": "Hatta",
    "translation": "Madje / Hatta",
    "pos": "lidhëz",
    "category": "adverbs",
    "is_balkan": true,
    "examples": [
      {
        "source": "Gelmedi hatta aramadı bile.",
        "target": "Nuk erdhi madje as nuk telefonoi fare."
      }
    ]
  },
  {
    "id": "a2-adv-46",
    "word": "Bile",
    "translation": "Bile / Edhe",
    "pos": "ndajfolje",
    "category": "adverbs",
    "examples": [
      {
        "source": "Çocuk bile bunu anlar.",
        "target": "Bile edhe fëmija e kupton këtë."
      }
    ]
  },
  {
    "id": "a2-adv-47",
    "word": "Dahi",
    "translation": "Edhe / Gjithashtu",
    "pos": "lidhëz",
    "category": "adverbs",
    "examples": [
      {
        "source": "Ben dahi oradaydım.",
        "target": "Edhe unë isha atje."
      }
    ]
  },
  {
    "id": "a2-adv-48",
    "word": "Hem hem de",
    "translation": "Edhe... edhe...",
    "pos": "lidhëz",
    "category": "adverbs",
    "examples": [
      {
        "source": "Hem Türkçe hem İngilizce biliyor.",
        "target": "Di edhe turqisht edhe anglisht."
      }
    ]
  },
  {
    "id": "a2-adv-49",
    "word": "Ne ne de",
    "translation": "As... as...",
    "pos": "lidhëz",
    "category": "adverbs",
    "examples": [
      {
        "source": "Ne çay ne kahve içti.",
        "target": "As çaj as kafe nuk piu."
      }
    ]
  },
  {
    "id": "a2-adv-50",
    "word": "Ya ya da",
    "translation": "Ose... ose...",
    "pos": "lidhëz",
    "category": "adverbs",
    "examples": [
      {
        "source": "Ya şimdi gel ya da hiç gelme.",
        "target": "Ose eja tani ose mos eja fare."
      }
    ]
  }
];
