export interface A1VocabularyItem {
  id: string;
  word: string;
  translation: string;
  pos: 'emër' | 'folje' | 'mbiemër' | 'ndajfolje' | 'përemër' | 'lidhëz' | 'pasthirrmë' | 'shprehje';
  category: 'greetings' | 'family' | 'home' | 'cooking' | 'weather' | 'shopping' | 'transport' | 'verbs' | 'adjectives' | 'health';
  is_balkan?: boolean;
  notes?: string;
  examples?: Array<{ source: string; target: string }>;
  derivatives?: Array<{ word: string; translation: string; pos: string }>;
}

export const a1VocabularyData: A1VocabularyItem[] = [
  // ==================== 1. GREETINGS & BASICS (30 words) ====================
  {
    id: 'a1-gr-1',
    word: 'Merhaba',
    translation: 'Tungjatjeta / Përshëndetje',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Merhaba! Nasılsın?', target: 'Tungjatjeta! Si je?' }]
  },
  {
    id: 'a1-gr-2',
    word: 'Selam',
    translation: 'Përshëndetje (shkurt)',
    pos: 'shprehje',
    category: 'greetings',
    is_balkan: true,
    examples: [{ source: 'Selam arkadaşım!', target: 'Përshëndetje shoku im!' }]
  },
  {
    id: 'a1-gr-3',
    word: 'Günaydın',
    translation: 'Mirëmëngjes',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Günaydın anne!', target: 'Mirëmëngjes nënë!' }]
  },
  {
    id: 'a1-gr-4',
    word: 'İyi günler',
    translation: 'Ditë të mbarë',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'İyi günler, efendim.', target: 'Ditë të mbarë, zotëri.' }]
  },
  {
    id: 'a1-gr-5',
    word: 'İyi akşamlar',
    translation: 'Mirëmbrëma / Mbrëmje të mirë',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'İyi akşamlar öğretmenim.', target: 'Mirëmbrëma mësuesi im.' }]
  },
  {
    id: 'a1-gr-6',
    word: 'İyi geceler',
    translation: 'Natën e mirë',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'İyi geceler baba.', target: 'Natën e mirë baba.' }]
  },
  {
    id: 'a1-gr-7',
    word: 'Hoş geldiniz',
    translation: 'Mirëseerdhët',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Hoş geldiniz, nasılsınız?', target: 'Mirëseerdhët, si jeni?' }]
  },
  {
    id: 'a1-gr-8',
    word: 'Hoş bulduk',
    translation: 'Mirëseju gjetëm',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Hoş bulduk, teşekkürler.', target: 'Mirëseju gjetëm, faleminderit.' }]
  },
  {
    id: 'a1-gr-9',
    word: 'Görüşürüz',
    translation: 'Shihemi',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Yarın görüşürüz!', target: 'Shihemi nesër!' }]
  },
  {
    id: 'a1-gr-10',
    word: 'Görüşmek üzere',
    translation: 'Shihemi së shpejti',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Görüşmek üzere, kendine iyi bak.', target: 'Shihemi së shpejti, kujdesu për veten.' }]
  },
  {
    id: 'a1-gr-11',
    word: 'Hoşça kal',
    translation: 'Mirupafshim (nga ai që ikën)',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Hoşça kal, ben gidiyorum.', target: 'Mirupafshim, unë po iki.' }]
  },
  {
    id: 'a1-gr-12',
    word: 'Güle güle',
    translation: 'Mirupafshim (nga ai që rri)',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Güle güle, iyi yolculuklar.', target: 'Mirupafshim, udhëtim të mbarë.' }]
  },
  {
    id: 'a1-gr-13',
    word: 'Nasılsın?',
    translation: 'Si je?',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Nasılsın? İyiyim, ya sen?', target: 'Si je? Jam mirë, po ti?' }]
  },
  {
    id: 'a1-gr-14',
    word: 'İyiyim',
    translation: 'Jam mirë',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Ben çok iyiyim, teşekkür ederim.', target: 'Unë jam shumë mirë, faleminderit.' }]
  },
  {
    id: 'a1-gr-15',
    word: 'Teşekkürler',
    translation: 'Faleminderit (shkurt)',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Yardım için teşekkürler.', target: 'Faleminderit për ndihmën.' }]
  },
  {
    id: 'a1-gr-16',
    word: 'Rica ederim',
    translation: 'S\'ka përse / Të lutem',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Teşekkür ederim. - Rica ederim.', target: 'Faleminderit. - S\'ka përse.' }]
  },
  {
    id: 'a1-gr-17',
    word: 'Lütfen',
    translation: 'Ju lutem',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Bir çay lütfen.', target: 'Një çaj ju lutem.' }]
  },
  {
    id: 'a1-gr-18',
    word: 'Özür dilerim',
    translation: 'Kërkoj ndjesë / Më vjen keq',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Geç kaldım, özür dilerim.', target: 'U vonova, kërkoj ndjesë.' }]
  },
  {
    id: 'a1-gr-19',
    word: 'Afiyet olsun',
    translation: 'Ju bëftë mirë',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Yemek hazır, afiyet olsun!', target: 'Ushqimi është gati, ju bëftë mirë!' }]
  },
  {
    id: 'a1-gr-20',
    word: 'Tebrikler',
    translation: 'Urime',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Yeni iş için tebrikler!', target: 'Urime për punën e re!' }]
  },
  {
    id: 'a1-gr-21',
    word: 'Evet',
    translation: 'Po',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Evet, ben öğrenciyim.', target: 'Po, unë jam student.' }]
  },
  {
    id: 'a1-gr-22',
    word: 'Hayır',
    translation: 'Jo',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Hayır, o öğretmen değil.', target: 'Jo, ai nuk është mësues.' }]
  },
  {
    id: 'a1-gr-23',
    word: 'Buyurun',
    translation: 'Urdhëroni',
    pos: 'shprehje',
    category: 'greetings',
    is_balkan: true,
    notes: 'Përdoret kur i jepet diçka dikujt ose kur ftohet dikush të hyjë.',
    examples: [{ source: 'Buyurun, bu sizin çayınız.', target: 'Urdhëroni, ky është çaji juaj.' }]
  },
  {
    id: 'a1-gr-24',
    word: 'Tamam',
    translation: 'Në rregull / Mirë',
    pos: 'shprehje',
    category: 'greetings',
    is_balkan: true,
    examples: [{ source: 'Saat beşte buluşalım. - Tamam.', target: 'Të takohemi në orën pesë. - Në rregull.' }]
  },
  {
    id: 'a1-gr-25',
    word: 'Efendim',
    translation: 'Zotëri / Si urdhëroni / Si te lutem',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Efendim, bakar mısınız?', target: 'Zotëri, a shikoni pak?' }]
  },
  {
    id: 'a1-gr-26',
    word: 'Hoşça kalın',
    translation: 'Mirupafshim (formal/shumës)',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Hoşça kalın, iyi akşamlar.', target: 'Mirupafshim, mbrëmje të mirë.' }]
  },
  {
    id: 'a1-gr-27',
    word: 'Memnun oldum',
    translation: 'Kënaqem që u njohëm',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Ben de memnun oldum.', target: 'Edhe unë kënaqem që u njohëm.' }]
  },
  {
    id: 'a1-gr-28',
    word: 'Ben de',
    translation: 'Edhe unë',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Ben de sinemaya gidiyorum.', target: 'Edhe unë po shkoj në kinema.' }]
  },
  {
    id: 'a1-gr-29',
    word: 'Adınız ne?',
    translation: 'Si e keni emrin? (formal)',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Adınız ne? Benim adım Ahmet.', target: 'Si e keni emrin? Emri im është Ahmet.' }]
  },
  {
    id: 'a1-gr-30',
    word: 'Nasılsınız?',
    translation: 'Si jeni? (formal/shumës)',
    pos: 'shprehje',
    category: 'greetings',
    examples: [{ source: 'Nasılsınız? - Teşekkürler, iyiyim.', target: 'Si jeni? - Faleminderit, jam mirë.' }]
  },

  // ==================== 2. FAMILY & PEOPLE (30 words) ====================
  {
    id: 'a1-fa-1',
    word: 'Aile',
    translation: 'Familje',
    pos: 'emër',
    category: 'family',
    examples: [{ source: 'Benim ailem büyük.', target: 'Familja ime është e madhe.' }],
    derivatives: [{ word: 'ailece', translation: 'familjarisht', pos: 'ndajfolje' }]
  },
  {
    id: 'a1-fa-2',
    word: 'Baba',
    translation: 'Baba',
    pos: 'emër',
    category: 'family',
    is_balkan: true,
    examples: [{ source: 'Babam mühendis.', target: 'Babai im është inxhinier.' }]
  },
  {
    id: 'a1-fa-3',
    word: 'Anne',
    translation: 'Nënë',
    pos: 'emër',
    category: 'family',
    examples: [{ source: 'Annem mutfakta yemek pişiriyor.', target: 'Nëna ime po gatuan në kuzhinë.' }]
  },
  {
    id: 'a1-fa-4',
    word: 'Oğul',
    translation: 'Djalë (bir)',
    pos: 'emër',
    category: 'family',
    examples: [{ source: 'Onun bir oğlu var.', target: 'Ai ka një djalë.' }]
  },
  {
    id: 'a1-fa-5',
    word: 'Kız',
    translation: 'Vajzë / e bijë',
    pos: 'emër',
    category: 'family',
    examples: [{ source: 'Kızım üniversitede okuyor.', target: 'Vajza ime studion në universitet.' }]
  },
  {
    id: 'a1-fa-6',
    word: 'Kardeş',
    translation: 'Vëlla ose motër',
    pos: 'emër',
    category: 'family',
    examples: [{ source: 'Kaç kardeşin var?', target: 'Sa vëllezër/motra ke?' }],
    derivatives: [{ word: 'kardeşlik', translation: 'vëllazëri', pos: 'emër' }]
  },
  {
    id: 'a1-fa-7',
    word: 'Abla',
    translation: 'Motër e madhe',
    pos: 'emër',
    category: 'family',
    examples: [{ source: 'Ablam benden üç yaş büyük.', target: 'Motra ime e madhe është tre vjet më e madhe se unë.' }]
  },
  {
    id: 'a1-fa-8',
    word: 'Abi',
    translation: 'Vëlla i madh (ağabey)',
    pos: 'emër',
    category: 'family',
    examples: [{ source: 'Abim spor yapıyor.', target: 'Vëllai im i madh po bën sport.' }]
  },
  {
    id: 'a1-fa-9',
    word: 'Karı',
    translation: 'Grua (bashkëshorte)',
    pos: 'emër',
    category: 'family',
    examples: [{ source: 'Kocası ve karısı restoranda.', target: 'Burri dhe gruaja janë në restorant.' }]
  },
  {
    id: 'a1-fa-10',
    word: 'Koca',
    translation: 'Burrë (bashkëshort)',
    pos: 'emër',
    category: 'family',
    examples: [{ source: 'Kocam işte.', target: 'Burri im është në punë.' }]
  },
  {
    id: 'a1-fa-11',
    word: 'Dede',
    translation: 'Gjysh',
    pos: 'emër',
    category: 'family',
    is_balkan: true,
    examples: [{ source: 'Dedem gazete okuyor.', target: 'Gjyshi im po lexon gazetë.' }]
  },
  {
    id: 'a1-fa-12',
    word: 'Anneanne',
    translation: 'Gjyshe (nga nëna)',
    pos: 'emër',
    category: 'family',
    examples: [{ source: 'Anneannemi çok seviyorum.', target: 'E dua shumë gjyshen time nga nëna.' }]
  },
  {
    id: 'a1-fa-13',
    word: 'Babaanne',
    translation: 'Gjyshe (nga babai)',
    pos: 'emër',
    category: 'family',
    examples: [{ source: 'Babaannem kek yaptı.', target: 'Gjyshja ime nga babai bëri kek.' }]
  },
  {
    id: 'a1-fa-14',
    word: 'Teyze',
    translation: 'Teze',
    pos: 'emër',
    category: 'family',
    is_balkan: true,
    examples: [{ source: 'Teyzem bize geldi.', target: 'Tezja ime na erdhi për vizitë.' }]
  },
  {
    id: 'a1-fa-15',
    word: 'Hala',
    translation: 'Hallë',
    pos: 'emër',
    category: 'family',
    examples: [{ source: 'Halam Ankara\'da yaşıyor.', target: 'Halla ime jeton në Ankara.' }]
  },
  {
    id: 'a1-fa-16',
    word: 'Dayı',
    translation: 'Dajë',
    pos: 'emër',
    category: 'family',
    is_balkan: true,
    examples: [{ source: 'Dayım çok komik bir insan.', target: 'Daja im është një njeri shumë komik.' }]
  },
  {
    id: 'a1-fa-17',
    word: 'Amca',
    translation: 'Xhaxha',
    pos: 'emër',
    category: 'family',
    is_balkan: true,
    examples: [{ source: 'Amcam öğretmen.', target: 'Xhaxhai im është mësues.' }]
  },
  {
    id: 'a1-fa-18',
    word: 'Bebek',
    translation: 'Foshnje / Bebek',
    pos: 'emër',
    category: 'family',
    is_balkan: true,
    examples: [{ source: 'Bebek uyuyor.', target: 'Bebja po fle.' }]
  },
  {
    id: 'a1-fa-19',
    word: 'Arkadaş',
    translation: 'Mik / Shok',
    pos: 'emër',
    category: 'family',
    examples: [{ source: 'Ahmet benim arkadaşım.', target: 'Ahmeti është shoku im.' }],
    derivatives: [{ word: 'arkadaşlık', translation: 'shoqëri', pos: 'emër' }]
  },
  {
    id: 'a1-fa-20',
    word: 'Komşu',
    translation: 'Fqinj / Komshi',
    pos: 'emër',
    category: 'family',
    is_balkan: true,
    examples: [{ source: 'Yeni komşumuz çok kibar.', target: 'Komshiu ynë i ri është shumë i sjellshëm.' }]
  },
  {
    id: 'a1-fa-21',
    word: 'İnsan',
    translation: 'Njeri / Insan',
    pos: 'emër',
    category: 'family',
    is_balkan: true,
    examples: [{ source: 'Burada çok insan var.', target: 'Këtu ka shumë njerëz.' }]
  },
  {
    id: 'a1-fa-22',
    word: 'Çocuk',
    translation: 'Fëmijë',
    pos: 'emër',
    category: 'family',
    examples: [{ source: 'Çocuklar bahçede oynuyor.', target: 'Fëmijët po luajnë në kopsht.' }]
  },
  {
    id: 'a1-fa-23',
    word: 'Öğretmen',
    translation: 'Mësues',
    pos: 'emër',
    category: 'family',
    examples: [{ source: 'Öğretmen sınıfa girdi.', target: 'Mësuesi hyri në klasë.' }]
  },
  {
    id: 'a1-fa-24',
    word: 'Öğrenci',
    translation: 'Nxënës / Student',
    pos: 'emër',
    category: 'family',
    examples: [{ source: 'Ben başarılı bir öğrenciyim.', target: 'Unë jam një student i suksesshëm.' }]
  },
  {
    id: 'a1-fa-25',
    word: 'Doktor',
    translation: 'Mjek / Doktor',
    pos: 'emër',
    category: 'family',
    is_balkan: true,
    examples: [{ source: 'Hastanede yeni bir doktor var.', target: 'Në spital ka një mjek të ri.' }]
  },
  {
    id: 'a1-fa-26',
    word: 'Polis',
    translation: 'Polic',
    pos: 'emër',
    category: 'family',
    is_balkan: true,
    examples: [{ source: 'Polis yolu gösterdi.', target: 'Polici tregoi rrugën.' }]
  },
  {
    id: 'a1-fa-27',
    word: 'Müdür',
    translation: 'Drejtor / Müdür',
    pos: 'emër',
    category: 'family',
    is_balkan: true,
    examples: [{ source: 'Okul müdürü konuşuyor.', target: 'Drejtori i shkollës po flet.' }]
  },
  {
    id: 'a1-fa-28',
    word: 'Mühendis',
    translation: 'Inxhinier',
    pos: 'emër',
    category: 'family',
    examples: [{ source: 'Abim inşaat mühendisi.', target: 'Vëllai im është inxhinier ndërtimi.' }]
  },
  {
    id: 'a1-fa-29',
    word: 'Avukat',
    translation: 'Avokat',
    pos: 'emër',
    category: 'family',
    is_balkan: true,
    examples: [{ source: 'Avukat belgeleri inceledi.', target: 'Avokati kontrolloi dokumentet.' }]
  },
  {
    id: 'a1-fa-30',
    word: 'Yabancı',
    translation: 'I huaj / jabanxhi',
    pos: 'mbiemër',
    category: 'family',
    is_balkan: true,
    examples: [{ source: 'Bu yabancı dili seviyorum.', target: 'E pëlqej këtë gjuhë të huaj.' }]
  },

  // ==================== 3. HOUSE & PLACES (30 words) ====================
  {
    id: 'a1-ho-1',
    word: 'Ev',
    translation: 'Shtëpi',
    pos: 'emër',
    category: 'home',
    examples: [{ source: 'Bizim evimiz yeşil.', target: 'Shtëpia jonë është e gjelbër.' }],
    derivatives: [{ word: 'evli', translation: 'i martuar', pos: 'mbiemër' }]
  },
  {
    id: 'a1-ho-2',
    word: 'Oda',
    translation: 'Dhomë / Odë',
    pos: 'emër',
    category: 'home',
    is_balkan: true,
    examples: [{ source: 'Bu odada iki yatak var.', target: 'Në këtë dhomë ka dy krevate.' }]
  },
  {
    id: 'a1-ho-3',
    word: 'Kapı',
    translation: 'Derë / Kapia',
    pos: 'emër',
    category: 'home',
    is_balkan: true,
    examples: [{ source: 'Kapıyı kapat lütfen.', target: 'Mbyll derën ju lutem.' }]
  },
  {
    id: 'a1-ho-4',
    word: 'Pencere',
    translation: 'Dritare / Penxhere',
    pos: 'emër',
    category: 'home',
    is_balkan: true,
    examples: [{ source: 'Pencereyi açar mısın?', target: 'A mund ta hapësh dritaren?' }]
  },
  {
    id: 'a1-ho-5',
    word: 'Mutfak',
    translation: 'Kuzhinë',
    pos: 'emër',
    category: 'home',
    examples: [{ source: 'Mutfakta çay hazırlıyorum.', target: 'Po përgatis çaj në kuzhinë.' }]
  },
  {
    id: 'a1-ho-6',
    word: 'Banyo',
    translation: 'Banjë',
    pos: 'emër',
    category: 'home',
    examples: [{ source: 'Banyoda sıcak su var.', target: 'Në banjë ka ujë të ngrohtë.' }]
  },
  {
    id: 'a1-ho-7',
    word: 'Bahçe',
    translation: 'Kopsht / Bahçe',
    pos: 'emër',
    category: 'home',
    is_balkan: true,
    examples: [{ source: 'Bahçede güzel çiçekler var.', target: 'Në kopsht ka lule të bukura.' }]
  },
  {
    id: 'a1-ho-8',
    word: 'Masa',
    translation: 'Tavolinë / Sofër',
    pos: 'emër',
    category: 'home',
    is_balkan: true,
    examples: [{ source: 'Defter masanın üstünde.', target: 'Fletorja është mbi tavolinë.' }]
  },
  {
    id: 'a1-ho-9',
    word: 'Sandalye',
    translation: 'Karrige',
    pos: 'emër',
    category: 'home',
    examples: [{ source: 'Sandalye çok rahat.', target: 'Karrigia është shumë e rehatshme.' }]
  },
  {
    id: 'a1-ho-10',
    word: 'Yatak',
    translation: 'Krevat / Shtrat',
    pos: 'emër',
    category: 'home',
    examples: [{ source: 'Yatağa erken giriyorum.', target: 'Po futem herët në shtrat.' }]
  },
  {
    id: 'a1-ho-11',
    word: 'Dolap',
    translation: 'Dollap',
    pos: 'emër',
    category: 'home',
    is_balkan: true,
    examples: [{ source: 'Elbise dolapta.', target: 'Fustani është në dollap.' }]
  },
  {
    id: 'a1-ho-12',
    word: 'Ayna',
    translation: 'Pasqyrë',
    pos: 'emër',
    category: 'home',
    examples: [{ source: 'Aynaya bakıyor.', target: 'Po shikohet në pasqyrë.' }]
  },
  {
    id: 'a1-ho-13',
    word: 'Halı',
    translation: 'Qilim / Tapet',
    pos: 'emër',
    category: 'home',
    examples: [{ source: 'Halı çok desenli.', target: 'Tapeti ka shumë vizatime.' }]
  },
  {
    id: 'a1-ho-14',
    word: 'Sokak',
    translation: 'Sokak / Rrugicë',
    pos: 'emër',
    category: 'home',
    is_balkan: true,
    examples: [{ source: 'Bizim sokak sessiz.', target: 'Sokaku ynë është i qetë.' }]
  },
  {
    id: 'a1-ho-15',
    word: 'Park',
    translation: 'Park',
    pos: 'emër',
    category: 'home',
    is_balkan: true,
    examples: [{ source: 'Parkta yürüyoruz.', target: 'Po ecim në park.' }]
  },
  {
    id: 'a1-ho-16',
    word: 'Okul',
    translation: 'Shkollë',
    pos: 'emër',
    category: 'home',
    examples: [{ source: 'Okula gidiyorum.', target: 'Po shkoj në shkollë.' }]
  },
  {
    id: 'a1-ho-17',
    word: 'Sınıf',
    translation: 'Klasë',
    pos: 'emër',
    category: 'home',
    examples: [{ source: 'Sınıfta yazı tahtası var.', target: 'Në klasë ka dërrasë të zezë.' }]
  },
  {
    id: 'a1-ho-18',
    word: 'Kütüphane',
    translation: 'Bibliotekë',
    pos: 'emër',
    category: 'home',
    examples: [{ source: 'Kütüphaneden kitap aldım.', target: 'Mora libër nga biblioteka.' }]
  },
  {
    id: 'a1-ho-19',
    word: 'Hastane',
    translation: 'Spital',
    pos: 'emër',
    category: 'home',
    examples: [{ source: 'Hastane çok uzakta.', target: 'Spitali është shumë larg.' }]
  },
  {
    id: 'a1-ho-20',
    word: 'Eczane',
    translation: 'Farmaci',
    pos: 'emër',
    category: 'home',
    examples: [{ source: 'Eczane gece açık mı?', target: 'A është hapët farmacia natën?' }]
  },
  {
    id: 'a1-ho-21',
    word: 'Market',
    translation: 'Market / Dyqan',
    pos: 'emër',
    category: 'home',
    is_balkan: true,
    examples: [{ source: 'Marketten süt al.', target: 'Bli qumësht në market.' }]
  },
  {
    id: 'a1-ho-22',
    word: 'Otel',
    translation: 'Otel',
    pos: 'emër',
    category: 'home',
    is_balkan: true,
    examples: [{ source: 'Otel deniz kenarında.', target: 'Oteli është pranë detit.' }]
  },
  {
    id: 'a1-ho-23',
    word: 'Restoran',
    translation: 'Restorant',
    pos: 'emër',
    category: 'home',
    is_balkan: true,
    examples: [{ source: 'Bu restoran çok lüks.', target: 'Ky restorant është shumë luksoz.' }]
  },
  {
    id: 'a1-ho-24',
    word: 'Köprü',
    translation: 'Urë',
    pos: 'emër',
    category: 'home',
    examples: [{ source: 'Köprü nehri geçiyor.', target: 'Ura kalon lumin.' }]
  },
  {
    id: 'a1-ho-25',
    word: 'Deniz',
    translation: 'Det',
    pos: 'emër',
    category: 'home',
    examples: [{ source: 'Deniz bugün çok sakin.', target: 'Deti sot është shumë i qetë.' }]
  },
  {
    id: 'a1-ho-26',
    word: 'Şehir',
    translation: 'Qytet / Sheher',
    pos: 'emër',
    category: 'home',
    is_balkan: true,
    examples: [{ source: 'Tiran güzel bir şehir.', target: 'Tirana është një qytet i bukur.' }]
  },
  {
    id: 'a1-ho-27',
    word: 'Köy',
    translation: 'Fshat',
    pos: 'emër',
    category: 'home',
    examples: [{ source: 'Köye trenle gidiyoruz.', target: 'Po shkojmë në fshat me tren.' }]
  },
  {
    id: 'a1-ho-28',
    word: 'Sinema',
    translation: 'Kinema',
    pos: 'emër',
    category: 'home',
    is_balkan: true,
    examples: [{ source: 'Sinemada yeni film var.', target: 'Në kinema ka një film të ri.' }]
  },
  {
    id: 'a1-ho-29',
    word: 'Zemin',
    translation: 'Dysheme / Tokë',
    pos: 'emër',
    category: 'home',
    examples: [{ source: 'Zemin çok soğuk.', target: 'Dyshemeja është shumë e ftohtë.' }]
  },
  {
    id: 'a1-ho-30',
    word: 'Ofis',
    translation: 'Zyrë / Ofis',
    pos: 'emër',
    category: 'home',
    is_balkan: true,
    examples: [{ source: 'Ofise sabah dokuzda geldim.', target: 'Erdha në zyrë në orën nëntë të mëngjesit.' }]
  },

  // ==================== 4. FOOD & COOKING (30 words) ====================
  {
    id: 'a1-co-1',
    word: 'Yemek',
    translation: 'Ushqim / të hash',
    pos: 'emër',
    category: 'cooking',
    examples: [{ source: 'Yemek hazır, buyurun!', target: 'Ushqimi është gati, urdhëroni!' }]
  },
  {
    id: 'a1-co-2',
    word: 'Ekmek',
    translation: 'Bukë',
    pos: 'emër',
    category: 'cooking',
    examples: [{ source: 'Lütfen taze ekmek al.', target: 'Ju lutem blini bukë të freskët.' }],
    derivatives: [{ word: 'ekmekçi', translation: 'bukëpjekës', pos: 'emër' }]
  },
  {
    id: 'a1-co-3',
    word: 'Su',
    translation: 'Ujë',
    pos: 'emër',
    category: 'cooking',
    examples: [{ source: 'Soğuk bir su istiyorum.', target: 'Dua një ujë të ftohtë.' }],
    derivatives: [{ word: 'sucu', translation: 'ujësjellës (tregtar uji)', pos: 'emër' }]
  },
  {
    id: 'a1-co-4',
    word: 'Süt',
    translation: 'Qumësht',
    pos: 'emër',
    category: 'cooking',
    examples: [{ source: 'Çocuklar süt içiyor.', target: 'Fëmijët po pinë qumësht.' }]
  },
  {
    id: 'a1-co-5',
    word: 'Çay',
    translation: 'Çaj',
    pos: 'emër',
    category: 'cooking',
    is_balkan: true,
    examples: [{ source: 'Türk çayı çok meşhur.', target: 'Çaji turk është shumë i njohur.' }]
  },
  {
    id: 'a1-co-6',
    word: 'Kahve',
    translation: 'Kafe',
    pos: 'emër',
    category: 'cooking',
    is_balkan: true,
    examples: [{ source: 'Şekerli kahve içer misin?', target: 'A pi kafe me sheqer?' }]
  },
  {
    id: 'a1-co-7',
    word: 'Et',
    translation: 'Mish',
    pos: 'emër',
    category: 'cooking',
    examples: [{ source: 'Kasaptan et al.', target: 'Bli mish te kasapi.' }],
    derivatives: [{ word: 'etçi', translation: 'mishngrënës / restorant mishi', pos: 'emër' }]
  },
  {
    id: 'a1-co-8',
    word: 'Tavuk',
    translation: 'Pulë / Mish pule',
    pos: 'emër',
    category: 'cooking',
    examples: [{ source: 'Fırında tavuk pişiyor.', target: 'Pula po piqet në furrë.' }]
  },
  {
    id: 'a1-co-9',
    word: 'Balık',
    translation: 'Peshk',
    pos: 'emër',
    category: 'cooking',
    examples: [{ source: 'Taze balık lezzetli.', target: 'Peshku i freskët është i shijshëm.' }]
  },
  {
    id: 'a1-co-10',
    word: 'Peynir',
    translation: 'Djathë / Penir',
    pos: 'emër',
    category: 'cooking',
    is_balkan: true,
    examples: [{ source: 'Beyaz peynir ve domates yiyorum.', target: 'Po ha djathë të bardhë dhe domate.' }]
  },
  {
    id: 'a1-co-11',
    word: 'Zeytin',
    translation: 'Ulliri / Zejtuni',
    pos: 'emër',
    category: 'cooking',
    is_balkan: true,
    examples: [{ source: 'Sabahları siyah zeytin yiyorum.', target: 'Mëngjeseve ha ullinj të zinj.' }]
  },
  {
    id: 'a1-co-12',
    word: 'Yumurta',
    translation: 'Vezë',
    pos: 'emër',
    category: 'cooking',
    examples: [{ source: 'Tavada iki yumurta var.', target: 'Në tigan ka dy vezë.' }]
  },
  {
    id: 'a1-co-13',
    word: 'Tuz',
    translation: 'Kripë',
    pos: 'emër',
    category: 'cooking',
    examples: [{ source: 'Çorbaya biraz tuz ekle.', target: 'Shto pak kripë në supë.' }],
    derivatives: [{ word: 'tuzlu', translation: 'i kripur', pos: 'mbiemër' }]
  },
  {
    id: 'a1-co-14',
    word: 'Şeker',
    translation: 'Sheqer',
    pos: 'emër',
    category: 'cooking',
    is_balkan: true,
    examples: [{ source: 'Kahveye şeker atmıyorum.', target: 'Nuk i hedh sheqer kafesë.' }]
  },
  {
    id: 'a1-co-15',
    word: 'Yağ',
    translation: 'Vaj / Gjalpë',
    pos: 'emër',
    category: 'cooking',
    examples: [{ source: 'Zeytinyağı çok sağlıklıdır.', target: 'Vaji i ullirit është shumë i shëndetshëm.' }]
  },
  {
    id: 'a1-co-16',
    word: 'Meyve',
    translation: 'Frutë / Pemë',
    pos: 'emër',
    category: 'cooking',
    is_balkan: true,
    examples: [{ source: 'Meyveleri yıka lütfen.', target: 'Laji frutat ju lutem.' }]
  },
  {
    id: 'a1-co-17',
    word: 'Sebze',
    translation: 'Perime / Zarzavate',
    pos: 'emër',
    category: 'cooking',
    is_balkan: true,
    examples: [{ source: 'Sebze çorbası yaptım.', target: 'Bëra supë me perime.' }]
  },
  {
    id: 'a1-co-18',
    word: 'Domates',
    translation: 'Domate',
    pos: 'emër',
    category: 'cooking',
    examples: [{ source: 'Domates salatası yapıyorum.', target: 'Po bëj sallatë me domate.' }]
  },
  {
    id: 'a1-co-19',
    word: 'Biber',
    translation: 'Spec / Piper',
    pos: 'emër',
    category: 'cooking',
    is_balkan: true,
    examples: [{ source: 'Yeşil biber acı mı?', target: 'A është speci i gjelbër djegës?' }]
  },
  {
    id: 'a1-co-20',
    word: 'Soğan',
    translation: 'Qepë',
    pos: 'emër',
    category: 'cooking',
    examples: [{ source: 'Soğan doğrarken ağlıyor.', target: 'Po qan duke grirë qepë.' }]
  },
  {
    id: 'a1-co-21',
    word: 'Patates',
    translation: 'Patate',
    pos: 'emër',
    category: 'cooking',
    examples: [{ source: 'Fırında patates kızartması.', target: 'Patate të skuqura në furrë.' }]
  },
  {
    id: 'a1-co-22',
    word: 'Elma',
    translation: 'Mollë',
    pos: 'emër',
    category: 'cooking',
    examples: [{ source: 'Kırmızı elma tatlıdır.', target: 'Molla e kuqe është e ëmbël.' }]
  },
  {
    id: 'a1-co-23',
    word: 'Muz',
    translation: 'Bananë',
    pos: 'emër',
    category: 'cooking',
    examples: [{ source: 'Maymun muz yiyor.', target: 'Majmuni po ha bananë.' }]
  },
  {
    id: 'a1-co-24',
    word: 'Limon',
    translation: 'Limon',
    pos: 'emër',
    category: 'cooking',
    is_balkan: true,
    examples: [{ source: 'Salataya limon sık.', target: 'Shtrydh limon në sallatë.' }]
  },
  {
    id: 'a1-co-25',
    word: 'Pilav',
    translation: 'Pilaf',
    pos: 'emër',
    category: 'cooking',
    is_balkan: true,
    examples: [{ source: 'Tavuklu pilav pişirdim.', target: 'Gatova pilaf me pulë.' }]
  },
  {
    id: 'a1-co-26',
    word: 'Çorba',
    translation: 'Supë / Çorbë',
    pos: 'emër',
    category: 'cooking',
    is_balkan: true,
    examples: [{ source: 'Mercimek çorbası sıcak.', target: 'Supa me thjerrëza është e ngrohtë.' }]
  },
  {
    id: 'a1-co-27',
    word: 'Tabak',
    translation: 'Pjatë / Tabaka',
    pos: 'emër',
    category: 'cooking',
    is_balkan: true,
    examples: [{ source: 'Masaya tabakları koy.', target: 'Vendos pjatat mbi tavolinë.' }]
  },
  {
    id: 'a1-co-28',
    word: 'Çatal',
    translation: 'Pirun',
    pos: 'emër',
    category: 'cooking',
    examples: [{ source: 'Çatal çekmecede.', target: 'Piruni është në sirtar.' }]
  },
  {
    id: 'a1-co-29',
    word: 'Kaşık',
    translation: 'Lugë',
    pos: 'emër',
    category: 'cooking',
    examples: [{ source: 'Çorba için kaşık lazım.', target: 'Duhet lugë për supën.' }]
  },
  {
    id: 'a1-co-30',
    word: 'Bıçak',
    translation: 'Thikë',
    pos: 'emër',
    category: 'cooking',
    examples: [{ source: 'Bıçak çok keskin.', target: 'Thika është shumë e mprehtë.' }]
  },

  // ==================== 5. WEATHER & TIME (30 words) ====================
  {
    id: 'a1-we-1',
    word: 'Mevsim',
    translation: 'Stinë',
    pos: 'emër',
    category: 'weather',
    examples: [{ source: 'Yılda dört mevsim var.', target: 'Në vit ka katër stinë.' }]
  },
  {
    id: 'a1-we-2',
    word: 'Hava',
    translation: 'Kohë / Mot / Hava',
    pos: 'emër',
    category: 'weather',
    is_balkan: true,
    examples: [{ source: 'Bugün hava çok güzel.', target: 'Sot moti është shumë i bukur.' }]
  },
  {
    id: 'a1-we-3',
    word: 'Güneş',
    translation: 'Diell',
    pos: 'emër',
    category: 'weather',
    examples: [{ source: 'Güneş parlıyor.', target: 'Dielli po shndrit.' }],
    derivatives: [{ word: 'güneşli', translation: 'me diell', pos: 'mbiemër' }]
  },
  {
    id: 'a1-we-4',
    word: 'Yağmur',
    translation: 'Shi',
    pos: 'emër',
    category: 'weather',
    examples: [{ source: 'Dışarıda yağmur yağıyor.', target: 'Jashtë po bie shi.' }],
    derivatives: [{ word: 'yağmurlu', translation: 'me shi', pos: 'mbiemër' }]
  },
  {
    id: 'a1-we-5',
    word: 'Kar',
    translation: 'Borë / Dëborë',
    pos: 'emër',
    category: 'weather',
    examples: [{ source: 'Kar dağa yağıyor.', target: 'Bora po bie në mal.' }],
    derivatives: [{ word: 'karlı', translation: 'me borë', pos: 'mbiemër' }]
  },
  {
    id: 'a1-we-6',
    word: 'Rüzgar',
    translation: 'Erë / Rüzgar',
    pos: 'emër',
    category: 'weather',
    is_balkan: true,
    examples: [{ source: 'Rüzgar sert esiyor.', target: 'Era po fryn fort.' }]
  },
  {
    id: 'a1-we-7',
    word: 'Bulut',
    translation: 'Re',
    pos: 'emër',
    category: 'weather',
    examples: [{ source: 'Gökyüzünde kara bulutlar var.', target: 'Në qiell ka re të zeza.' }],
    derivatives: [{ word: 'bulutlu', translation: 'me re', pos: 'mbiemër' }]
  },
  {
    id: 'a1-we-8',
    word: 'Sıcak',
    translation: 'I nxehtë / ngrohtë',
    pos: 'mbiemër',
    category: 'weather',
    examples: [{ source: 'Çay çok sıcak.', target: 'Çaji është shumë i nxehtë.' }]
  },
  {
    id: 'a1-we-9',
    word: 'Soğuk',
    translation: 'I ftohtë',
    pos: 'mbiemër',
    category: 'weather',
    examples: [{ source: 'Bugün hava soğuk.', target: 'Sot moti është i ftohtë.' }]
  },
  {
    id: 'a1-we-10',
    word: 'Zaman',
    translation: 'Kohë / Zaman',
    pos: 'emër',
    category: 'weather',
    is_balkan: true,
    examples: [{ source: 'Hiç zamanım yok.', target: 'Nuk kam fare kohë.' }]
  },
  {
    id: 'a1-we-11',
    word: 'Saat',
    translation: 'Orë / Saat',
    pos: 'emër',
    category: 'weather',
    is_balkan: true,
    examples: [{ source: 'Saat kaç? - Saat iki.', target: 'Sa është ora? - Ora dy.' }]
  },
  {
    id: 'a1-we-12',
    word: 'Dakika',
    translation: 'Minutë / Takikë',
    pos: 'emër',
    category: 'weather',
    is_balkan: true,
    examples: [{ source: 'Beş dakika bekleyin.', target: 'Prisni pesë minuta.' }]
  },
  {
    id: 'a1-we-13',
    word: 'Gün',
    translation: 'Ditë',
    pos: 'emër',
    category: 'weather',
    examples: [{ source: 'Bugün hangi gün?', target: 'Çfarë dite është sot?' }],
    derivatives: [{ word: 'günlük', translation: 'e përditshme', pos: 'mbiemër' }]
  },
  {
    id: 'a1-we-14',
    word: 'Hafta',
    translation: 'Javë / Haftë',
    pos: 'emër',
    category: 'weather',
    is_balkan: true,
    examples: [{ source: 'Bir hafta sonra tatil.', target: 'Pas një jave ka pushim.' }]
  },
  {
    id: 'a1-we-15',
    word: 'Ay',
    translation: 'Muaj / Hënë',
    pos: 'emër',
    category: 'weather',
    examples: [{ source: 'Yılda on iki ay var.', target: 'Viti ka dymbëdhjetë muaj.' }]
  },
  {
    id: 'a1-we-16',
    word: 'Yıl',
    translation: 'Vit',
    pos: 'emër',
    category: 'weather',
    examples: [{ source: 'Yeni yıl kutlu olsun!', target: 'Gëzuar vitin e ri!' }]
  },
  {
    id: 'a1-we-17',
    word: 'Pazartesi',
    translation: 'E hënë',
    pos: 'emër',
    category: 'weather',
    examples: [{ source: 'Pazartesi günü iş başlıyor.', target: 'Të hënën fillon puna.' }]
  },
  {
    id: 'a1-we-18',
    word: 'Salı',
    translation: 'E martë',
    pos: 'emër',
    category: 'weather',
    examples: [{ source: 'Salı günü dersimiz var.', target: 'Të martën kemi mësim.' }]
  },
  {
    id: 'a1-we-19',
    word: 'Çarşamba',
    translation: 'E mërkurë',
    pos: 'emër',
    category: 'weather',
    examples: [{ source: 'Çarşamba günü evdeyim.', target: 'Të mërkurën jam në shtëpi.' }]
  },
  {
    id: 'a1-we-20',
    word: 'Perşembe',
    translation: 'E enjte',
    pos: 'emër',
    category: 'weather',
    examples: [{ source: 'Perşembe pazardan alışveriş yaparım.', target: 'Të enjten bëj blerje nga pazari.' }]
  },
  {
    id: 'a1-we-21',
    word: 'Cuma',
    translation: 'E premte',
    pos: 'emër',
    category: 'weather',
    is_balkan: true,
    examples: [{ source: 'Cuma akşamı sinemaya gidelim.', target: 'Të premten mbrëma shkojmë në kinema.' }]
  },
  {
    id: 'a1-we-22',
    word: 'Cumartesi',
    translation: 'E shtunë',
    pos: 'emër',
    category: 'weather',
    examples: [{ source: 'Cumartesi günü dinleniyorum.', target: 'Të shtunën po pushoj.' }]
  },
  {
    id: 'a1-we-23',
    word: 'Pazar',
    translation: 'E diel / Pazar',
    pos: 'emër',
    category: 'weather',
    is_balkan: true,
    examples: [{ source: 'Pazar günü her yer kapalı.', target: 'Të dielën çdo vend është i mbyllur.' }]
  },
  {
    id: 'a1-we-24',
    word: 'Sabah',
    translation: 'Mëngjes / Sabah',
    pos: 'emër',
    category: 'weather',
    is_balkan: true,
    examples: [{ source: 'Sabah erken uyanırım.', target: 'Zgjohem herët në mëngjes.' }]
  },
  {
    id: 'a1-we-25',
    word: 'Öğle',
    translation: 'Mesditë / Dreke',
    pos: 'emër',
    category: 'weather',
    examples: [{ source: 'Öğle yemeği yiyoruz.', target: 'Po hamë drekë.' }]
  },
  {
    id: 'a1-we-26',
    word: 'Akşam',
    translation: 'Mbrëmje / Aksham',
    pos: 'emër',
    category: 'weather',
    is_balkan: true,
    examples: [{ source: 'Akşam kitap okuyorum.', target: 'Në mbrëmje lexoj libër.' }]
  },
  {
    id: 'a1-we-27',
    word: 'Gece',
    translation: 'Natë',
    pos: 'emër',
    category: 'weather',
    examples: [{ source: 'Gece gökyüzü karanlık.', target: 'Nën natë qielli është i zi.' }]
  },
  {
    id: 'a1-we-28',
    word: 'Yaz',
    translation: 'Verë (stinë)',
    pos: 'emër',
    category: 'weather',
    examples: [{ source: 'Yazın tatile gidiyoruz.', target: 'Në verë shkojmë me pushime.' }]
  },
  {
    id: 'a1-we-29',
    word: 'Kış',
    translation: 'Dimër',
    pos: 'emër',
    category: 'weather',
    examples: [{ source: 'Kışın kar yağıyor.', target: 'Në dimër bie dëborë.' }]
  },
  {
    id: 'a1-we-30',
    word: 'Derece',
    translation: 'Gradë / Celsius / Derexhe',
    pos: 'emër',
    category: 'weather',
    is_balkan: true,
    examples: [{ source: 'Hava sıcaklığı yirmi derece.', target: 'Temperatura e ajrit është njëzet gradë.' }]
  },

  // ==================== 6. SHOPPING & NUMBERS (30 words) ====================
  {
    id: 'a1-sh-1',
    word: 'Alışveriş',
    translation: 'Blerje / Pazari',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'Alışveriş merkezine gidiyorum.', target: 'Po shkoj në qendrën tregtare.' }]
  },
  {
    id: 'a1-sh-2',
    word: 'Fiyat',
    translation: 'Çmim / Fiyat',
    pos: 'emër',
    category: 'shopping',
    is_balkan: true,
    examples: [{ source: 'Bu kalemin fiyatı ne?', target: 'Sa është çmimi i këtë lapsi?' }]
  },
  {
    id: 'a1-sh-3',
    word: 'Para',
    translation: 'Para / Monedhë',
    pos: 'emër',
    category: 'shopping',
    is_balkan: true,
    examples: [{ source: 'Hiç param kalmadı.', target: 'Nuk më mbeti fare para.' }]
  },
  {
    id: 'a1-sh-4',
    word: 'Ucuz',
    translation: 'I lirë',
    pos: 'mbiemër',
    category: 'shopping',
    examples: [{ source: 'Bu elbise çok ucuz.', target: 'Ky fustan është shumë i lirë.' }]
  },
  {
    id: 'a1-sh-5',
    word: 'Pahalı',
    translation: 'I shtrenjtë',
    pos: 'mbiemër',
    category: 'shopping',
    examples: [{ source: 'O araba çok pahalı.', target: 'Ajo makinë është shumë e shtrenjtë.' }]
  },
  {
    id: 'a1-sh-6',
    word: 'Müşteri',
    translation: 'Klient / Myshteri',
    pos: 'emër',
    category: 'shopping',
    is_balkan: true,
    examples: [{ source: 'Dükkanda çok müşteri var.', target: 'Në dyqan ka shumë klientë.' }]
  },
  {
    id: 'a1-sh-7',
    word: 'Satıcı',
    translation: 'Shitës',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'Satıcı fiyatı indirdi.', target: 'Shitësi uli çmimin.' }]
  },
  {
    id: 'a1-sh-8',
    word: 'Kilo',
    translation: 'Kilogram',
    pos: 'emër',
    category: 'shopping',
    is_balkan: true,
    examples: [{ source: 'İki kilo elma lütfen.', target: 'Dy kilogramë mollë ju lutem.' }]
  },
  {
    id: 'a1-sh-9',
    word: 'Tane',
    translation: 'Copë / Tane',
    pos: 'emër',
    category: 'shopping',
    is_balkan: true,
    examples: [{ source: 'Beş tane simit aldım.', target: 'Bleva pesë copë simite.' }]
  },
  {
    id: 'a1-sh-10',
    word: 'Ekmekçi',
    translation: 'Furrë buke / Furrxhi',
    pos: 'emër',
    category: 'shopping',
    is_balkan: true,
    examples: [{ source: 'Ekmekçiden simit aldım.', target: 'Mora simite te furra e bukës.' }]
  },
  {
    id: 'a1-sh-11',
    word: 'Bir',
    translation: 'Një',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'Bir çay istiyorum.', target: 'Dua një çaj.' }]
  },
  {
    id: 'a1-sh-12',
    word: 'İki',
    translation: 'Dy',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'İki bilet lütfen.', target: 'Dy bileta ju lutem.' }]
  },
  {
    id: 'a1-sh-13',
    word: 'Üç',
    translation: 'Tre',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'Üç kitap okudum.', target: 'Lexova tre libra.' }]
  },
  {
    id: 'a1-sh-14',
    word: 'Dört',
    translation: 'Katër',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'Dört sandalye var.', target: 'Ka katër karrige.' }]
  },
  {
    id: 'a1-sh-15',
    word: 'Beş',
    translation: 'Pesë',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'Beş dakika bekleyin.', target: 'Prisni pesë minuta.' }]
  },
  {
    id: 'a1-sh-16',
    word: 'Altı',
    translation: 'Gjashtë',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'Altı gün çalışıyorum.', target: 'Punoj gjashtë ditë.' }]
  },
  {
    id: 'a1-sh-17',
    word: 'Yedi',
    translation: 'Shtatë',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'Yedi kişi geldi.', target: 'Arritën shtatë persona.' }]
  },
  {
    id: 'a1-sh-18',
    word: 'Sekiz',
    translation: 'Tetë',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'Saat sekizde buluşalım.', target: 'Të takohemi në orën tetë.' }]
  },
  {
    id: 'a1-sh-19',
    word: 'Dokuz',
    translation: 'Nëntë',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'Dokuz elma var.', target: 'Ka nëntë mollë.' }]
  },
  {
    id: 'a1-sh-20',
    word: 'On',
    translation: 'Dhjetë',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'On kilo patates aldım.', target: 'Mora dhjetë kilogramë patate.' }]
  },
  {
    id: 'a1-sh-21',
    word: 'Yirmi',
    translation: 'Njëzet',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'Yirmi lira ödedim.', target: 'Paguesha njëzet lira.' }]
  },
  {
    id: 'a1-sh-22',
    word: 'Otuz',
    translation: 'Tridhjetë',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'Otuz gün sonra görüşürüz.', target: 'Shihemi pas tridhjetë ditësh.' }]
  },
  {
    id: 'a1-sh-23',
    word: 'Kırk',
    translation: 'Dyzet',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'Kırk derece sıcaklık var.', target: 'Ka dyzet gradë nxehtësi.' }]
  },
  {
    id: 'a1-sh-24',
    word: 'Elli',
    translation: 'Pesëdhjetë',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'Babam elli yaşında.', target: 'Babai im është pesëdhjetë vjeç.' }]
  },
  {
    id: 'a1-sh-25',
    word: 'Yüz',
    translation: 'Qind / Fytyrë',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'Yüz lira verir misiniz?', target: 'A mund të më jepni njëqind lira?' }]
  },
  {
    id: 'a1-sh-26',
    word: 'Bin',
    translation: 'Mijë',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'Bin kitap kütüphanede.', target: 'Një mijë libra janë në bibliotekë.' }]
  },
  {
    id: 'a1-sh-27',
    word: 'Poşet',
    translation: 'Qese / Çantë plastike',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'Poşet istiyor musunuz?', target: 'A dëshironi qese?' }]
  },
  {
    id: 'a1-sh-28',
    word: 'Bedava',
    translation: 'Falas / Badhava',
    pos: 'mbiemër',
    category: 'shopping',
    is_balkan: true,
    examples: [{ source: 'Bu su bedava.', target: 'Ky ujë është falas.' }]
  },
  {
    id: 'a1-sh-29',
    word: 'Kasa',
    translation: 'Kasë / Arkë',
    pos: 'emër',
    category: 'shopping',
    is_balkan: true,
    examples: [{ source: 'Kasada ödeme yapın.', target: 'Bëni pagesën te kasa.' }]
  },
  {
    id: 'a1-sh-30',
    word: 'İndirim',
    translation: 'Zbritje çmimi',
    pos: 'emër',
    category: 'shopping',
    examples: [{ source: 'Bugün markette indirim var.', target: 'Sot në market ka zbritje.' }]
  },

  // ==================== 7. TRANSPORT & DIRECTIONS (30 words) ====================
  {
    id: 'a1-tr-1',
    word: 'Otobüs',
    translation: 'Autobus',
    pos: 'emër',
    category: 'transport',
    is_balkan: true,
    examples: [{ source: 'Otobüs saat onda kalkıyor.', target: 'Autobusi niset në orën dhjetë.' }]
  },
  {
    id: 'a1-tr-2',
    word: 'Araba',
    translation: 'Makinë / Karrocë',
    pos: 'emër',
    category: 'transport',
    is_balkan: true,
    examples: [{ source: 'Arabam sokakta.', target: 'Makina ime është në rrugë.' }]
  },
  {
    id: 'a1-tr-3',
    word: 'Tren',
    translation: 'Tren',
    pos: 'emër',
    category: 'transport',
    is_balkan: true,
    examples: [{ source: 'Tren gara geldi.', target: 'Treni erdhi në stacion.' }]
  },
  {
    id: 'a1-tr-4',
    word: 'Uçak',
    translation: 'Aeroplan',
    pos: 'emër',
    category: 'transport',
    examples: [{ source: 'Uçak havada.', target: 'Aeroplani është në ajër.' }]
  },
  {
    id: 'a1-tr-5',
    word: 'Bilet',
    translation: 'Biletë',
    pos: 'emër',
    category: 'transport',
    is_balkan: true,
    examples: [{ source: 'Otobüs bileti aldım.', target: 'Bleva një biletë autobusi.' }]
  },
  {
    id: 'a1-tr-6',
    word: 'İstasyon',
    translation: 'Stacion / Stacion treni',
    pos: 'emër',
    category: 'transport',
    is_balkan: true,
    examples: [{ source: 'İstasyonda bekliyorum.', target: 'Po pres në stacion.' }]
  },
  {
    id: 'a1-tr-7',
    word: 'Yol',
    translation: 'Rrugë / Udhë',
    pos: 'emër',
    category: 'transport',
    examples: [{ source: 'Yol çok uzun.', target: 'Rruga është shumë e gjatë.' }],
    derivatives: [
      { word: 'yolcu', translation: 'udhëtar', pos: 'emër' },
      { word: 'yolculuk', translation: 'udhëtim', pos: 'emër' }
    ]
  },
  {
    id: 'a1-tr-8',
    word: 'Harita',
    translation: 'Hartë',
    pos: 'emër',
    category: 'transport',
    examples: [{ source: 'Haritada Tiran\'ı göster.', target: 'Tregoni Tiranën në hartë.' }]
  },
  {
    id: 'a1-tr-9',
    word: 'Nerede?',
    translation: 'Ku?',
    pos: 'përemër',
    category: 'transport',
    examples: [{ source: 'Evim nerede?', target: 'Ku është shtëpia ime?' }]
  },
  {
    id: 'a1-tr-10',
    word: 'Nereye?',
    translation: 'Ku po shkon? / Drejt ku?',
    pos: 'përemër',
    category: 'transport',
    examples: [{ source: 'Nereye gidiyorsun?', target: 'Drejt ku po shkon?' }]
  },
  {
    id: 'a1-tr-11',
    word: 'Nereden?',
    translation: 'Nga? / Prej ku?',
    pos: 'përemër',
    category: 'transport',
    examples: [{ source: 'Nereden geliyorsun?', target: 'Prej nga po vjen?' }]
  },
  {
    id: 'a1-tr-12',
    word: 'Sağ',
    translation: 'Djathtas / I djathtë',
    pos: 'mbiemër',
    category: 'transport',
    examples: [{ source: 'Sağa dönün.', target: 'Kthehuni djathtas.' }]
  },
  {
    id: 'a1-tr-13',
    word: 'Sol',
    translation: 'Majtas / I majtë',
    pos: 'mbiemër',
    category: 'transport',
    examples: [{ source: 'Sola bakın.', target: 'Shikoni majtas.' }]
  },
  {
    id: 'a1-tr-14',
    word: 'Düz',
    translation: 'Drejt / Rrafsh',
    pos: 'mbiemër',
    category: 'transport',
    examples: [{ source: 'Düz gidin lütfen.', target: 'Shkoni drejt ju lutem.' }]
  },
  {
    id: 'a1-tr-15',
    word: 'Uzak',
    translation: 'Larg',
    pos: 'mbiemër',
    category: 'transport',
    examples: [{ source: 'Okul eve çok uzak.', target: 'Shkollë është shumë larg nga shtëpia.' }]
  },
  {
    id: 'a1-tr-16',
    word: 'Yakın',
    translation: 'Afër / Pranë',
    pos: 'mbiemër',
    category: 'transport',
    examples: [{ source: 'Ev markete yakın.', target: 'Shtëpia është afër me marketin.' }]
  },
  {
    id: 'a1-tr-17',
    word: 'Durak',
    translation: 'Stacion (autobusi/taksi)',
    pos: 'emër',
    category: 'transport',
    examples: [{ source: 'Durakta otobüs bekliyorum.', target: 'Po pres autobusin në stacion.' }]
  },
  {
    id: 'a1-tr-18',
    word: 'Taksi',
    translation: 'Taksi',
    pos: 'emër',
    category: 'transport',
    is_balkan: true,
    examples: [{ source: 'Taksi ile eve döndüm.', target: 'U ktheva në shtëpi me taksi.' }]
  },
  {
    id: 'a1-tr-19',
    word: 'Gemi',
    translation: 'Anije',
    pos: 'emër',
    category: 'transport',
    examples: [{ source: 'Gemi limandan kalkıyor.', target: 'Anija niset nga limani.' }]
  },
  {
    id: 'a1-tr-20',
    word: 'Bisiklet',
    translation: 'Biçikletë',
    pos: 'emër',
    category: 'transport',
    examples: [{ source: 'Bisiklet sürmeyi seviyorum.', target: 'Më pëlqen të ngas biçikletën.' }]
  },
  {
    id: 'a1-tr-21',
    word: 'Köşe',
    translation: 'Kënd / Qoshe',
    pos: 'emër',
    category: 'transport',
    is_balkan: true,
    examples: [{ source: 'Eczane köşede.', target: 'Farmacia është në qoshe.' }]
  },
  {
    id: 'a1-tr-22',
    word: 'Merkez',
    translation: 'Qendër / Merkez',
    pos: 'emër',
    category: 'transport',
    is_balkan: true,
    examples: [{ source: 'Şehir merkezinde buluşalım.', target: 'Të takohemi në qendër të qytetit.' }]
  },
  {
    id: 'a1-tr-23',
    word: 'Cadde',
    translation: 'Bulevard / Rrugë e madhe',
    pos: 'emër',
    category: 'transport',
    examples: [{ source: 'Bu cadde çok kalabalık.', target: 'Kjo rrugë është shumë e populluar.' }]
  },
  {
    id: 'a1-tr-24',
    word: 'Meydan',
    translation: 'Shesh / Mejdan',
    pos: 'emër',
    category: 'transport',
    is_balkan: true,
    examples: [{ source: 'Skanderbeg meydanı büyük.', target: 'Sheshi Skënderbej është i madh.' }]
  },
  {
    id: 'a1-tr-25',
    word: 'Adres',
    translation: 'Adresë',
    pos: 'emër',
    category: 'transport',
    is_balkan: true,
    examples: [{ source: 'Lütfen bana adresi yaz.', target: 'Ju lutem më shkruani adresën.' }]
  },
  {
    id: 'a1-tr-26',
    word: 'Metro',
    translation: 'Metro',
    pos: 'emër',
    category: 'transport',
    is_balkan: true,
    examples: [{ source: 'Metro hızlı bir ulaşımdır.', target: 'Metroja është një transport i shpejtë.' }]
  },
  {
    id: 'a1-tr-27',
    word: 'Pasaport',
    translation: 'Pasaportë',
    pos: 'emër',
    category: 'transport',
    is_balkan: true,
    examples: [{ source: 'Pasaport kontrolü bitti.', target: 'Kontrolli i pasaportave mbaroi.' }]
  },
  {
    id: 'a1-tr-28',
    word: 'Bagaj',
    translation: 'Bagazh',
    pos: 'emër',
    category: 'transport',
    is_balkan: true,
    examples: [{ source: 'Bagajımı kaybettim.', target: 'Humba bagazhin tim.' }]
  },
  {
    id: 'a1-tr-29',
    word: 'Havalimanı',
    translation: 'Aeroport',
    pos: 'emër',
    category: 'transport',
    examples: [{ source: 'Uçak havalimanına indi.', target: 'Avioni u ul në aeroport.' }]
  },
  {
    id: 'a1-tr-30',
    word: 'Hızlı',
    translation: 'I shpejtë',
    pos: 'mbiemër',
    category: 'transport',
    examples: [{ source: 'Hızlı tren buraya geliyor.', target: 'Treni i shpejtë po vjen këtu.' }]
  },

  // ==================== 8. DAILY VERBS (30 words) ====================
  {
    id: 'a1-ve-1',
    word: 'Uyanmak',
    translation: 'Zgjohem',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Her sabah erken uyanırım.', target: 'Zgjohem herët çdo mëngjes.' }]
  },
  {
    id: 'a1-ve-2',
    word: 'Gitmek',
    translation: 'Shkoj',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Bugün okula gidiyorum.', target: 'Sot po shkoj në shkollë.' }]
  },
  {
    id: 'a1-ve-3',
    word: 'Gelmek',
    translation: 'Vjej / Vij',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Arkadaşım bana geliyor.', target: 'Shoku im po vjen tek unë.' }]
  },
  {
    id: 'a1-ve-4',
    word: 'Okumak',
    translation: 'Lexoj / Studioj',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Her gün kitap okuyorum.', target: 'Çdo ditë lexoj libër.' }],
    derivatives: [{ word: 'okul', translation: 'shkollë', pos: 'emër' }]
  },
  {
    id: 'a1-ve-5',
    word: 'Yazmak',
    translation: 'Shkruaj',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Mektup yazıyorum.', target: 'Po shkruaj letër.' }],
    derivatives: [{ word: 'yazar', translation: 'shkrimtar', pos: 'emër' }]
  },
  {
    id: 'a1-ve-6',
    word: 'İçmek',
    translation: 'Pi',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Su içmek istiyorum.', target: 'Dua të pi ujë.' }]
  },
  {
    id: 'a1-ve-7',
    word: 'Almak',
    translation: 'Marr / Blej',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Marketten ekmek aldım.', target: 'Mora bukë në market.' }]
  },
  {
    id: 'a1-ve-8',
    word: 'Vermek',
    translation: 'Jap',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Lütfen bana kitabı ver.', target: 'Ju lutem më jepni librin.' }]
  },
  {
    id: 'a1-ve-9',
    word: 'Konuşmak',
    translation: 'Flas / Bisedoj',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Türkçe konuşuyorum.', target: 'Po flas turqisht.' }]
  },
  {
    id: 'a1-ve-10',
    word: 'Dinlemek',
    translation: 'Dëgjoj',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Müzik dinliyorum.', target: 'Po dëgjoj muzikë.' }]
  },
  {
    id: 'a1-ve-11',
    word: 'Görmek',
    translation: 'Shoh',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Seni görüyorum.', target: 'Po të shoh ty.' }]
  },
  {
    id: 'a1-ve-12',
    word: 'Bakmak',
    translation: 'Shikoj / Kujdesem',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Aynaya bakıyor.', target: 'Po shikon në pasqyrë.' }]
  },
  {
    id: 'a1-ve-13',
    word: 'Sevmek',
    translation: 'Dua / Dashuroj / Pëlqej',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Seni çok seviyorum.', target: 'Të dua shumë ty.' }],
    derivatives: [{ word: 'sevgili', translation: 'i dashur / e dashur', pos: 'mbiemër' }]
  },
  {
    id: 'a1-ve-14',
    word: 'Çalışmak',
    translation: 'Punoj / Studioj',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Fabrikada çalışıyorum.', target: 'Punoj në fabrikë.' }],
    derivatives: [{ word: 'çalışkan', translation: 'punëtor / i zellshëm', pos: 'mbiemër' }]
  },
  {
    id: 'a1-ve-15',
    word: 'Öğrenmek',
    translation: 'Mësoj (marr dije)',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Yeni kelimeler öğreniyorum.', target: 'Po mësoj fjalë të reja.' }],
    derivatives: [
      { word: 'öğrenci', translation: 'student', pos: 'emër' },
      { word: 'öğretmen', translation: 'mësues', pos: 'emër' }
    ]
  },
  {
    id: 'a1-ve-16',
    word: 'Öğretmek',
    translation: 'Mësoj (jap dije) / Udhëzoj',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Hoca Türkçe öğretiyor.', target: 'Mësuesi po mëson turqisht.' }]
  },
  {
    id: 'a1-ve-17',
    word: 'Anlamak',
    translation: 'Kuptoj',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Seni çok iyi anlıyorum.', target: 'Të kuptoj shumë mirë.' }],
    derivatives: [{ word: 'anlamlı', translation: 'me kuptim', pos: 'mbiemër' }]
  },
  {
    id: 'a1-ve-18',
    word: 'Sormak',
    translation: 'Pyes',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Öğretmene soru sordum.', target: 'I bëra pyetje mësuesit.' }],
    derivatives: [{ word: 'soru', translation: 'pyetje', pos: 'emër' }]
  },
  {
    id: 'a1-ve-19',
    word: 'Cevaplamak',
    translation: 'Përgjigjem / Xhevap',
    pos: 'folje',
    category: 'verbs',
    is_balkan: true,
    examples: [{ source: 'Soruyu cevapladı.', target: 'U përgjigj pyetjes.' }]
  },
  {
    id: 'a1-ve-20',
    word: 'Yaşamak',
    translation: 'Jetoj',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Tiran\'da yaşıyorum.', target: 'Jetoj në Tiranë.' }]
  },
  {
    id: 'a1-ve-21',
    word: 'Bulmak',
    translation: 'Gjej',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Anahtarımı buldum.', target: 'Gjeta çelësin tim.' }]
  },
  {
    id: 'a1-ve-22',
    word: 'Kaybetmek',
    translation: 'Humb',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Cüzdanımı kaybettim.', target: 'Humba portofolin tim.' }]
  },
  {
    id: 'a1-ve-23',
    word: 'Buluşmak',
    translation: 'Takohem (me marrëveshje)',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Saat altıda kafede buluşuyoruz.', target: 'Po takohemi në kafene në orën gjashtë.' }]
  },
  {
    id: 'a1-ve-24',
    word: 'Beklemek',
    translation: 'Pres (kohë)',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Seni kapıda bekliyorum.', target: 'Po të pres te dera.' }]
  },
  {
    id: 'a1-ve-25',
    word: 'Kalkmak',
    translation: 'Nisëm / Ngrihem',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Tren birazdan kalkıyor.', target: 'Treni niset pas pak.' }]
  },
  {
    id: 'a1-ve-26',
    word: 'Oturmak',
    translation: 'Ulem / Banoj',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Sandalyeye oturdum.', target: 'U ula në karrige.' }]
  },
  {
    id: 'a1-ve-27',
    word: 'Giriş yapmak',
    translation: 'Hyr / Regjistrohem',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Odaya giriş yaptık.', target: 'Hrymë në dhomë.' }]
  },
  {
    id: 'a1-ve-28',
    word: 'Açmak',
    translation: 'Hap / Ndiz (p.sh. dritën)',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Lütfen ışığı aç.', target: 'Ju lutem ndizni dritën.' }]
  },
  {
    id: 'a1-ve-29',
    word: 'Kapatmak',
    translation: 'Mbyll / Fik (p.sh. dritën)',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Televizyonu kapat.', target: 'Fike televizorin.' }]
  },
  {
    id: 'a1-ve-30',
    word: 'Bilmek',
    translation: 'Di',
    pos: 'folje',
    category: 'verbs',
    examples: [{ source: 'Ben cevabı biliyorum.', target: 'Unë e di përgjigjen.' }],
    derivatives: [{ word: 'bilgi', translation: 'dije / informacion', pos: 'emër' }]
  },

  // ==================== 9. ADJECTIVES & COLORS (30 words) ====================
  {
    id: 'a1-ad-1',
    word: 'Büyük',
    translation: 'I madh',
    pos: 'mbiemër',
    category: 'adjectives',
    examples: [{ source: 'Büyük bir evimiz var.', target: 'Kemi një shtëpi të madhe.' }]
  },
  {
    id: 'a1-ad-2',
    word: 'Küçük',
    translation: 'I vogël',
    pos: 'mbiemër',
    category: 'adjectives',
    examples: [{ source: 'Küçük bir kedi gördüm.', target: 'Pashë një mace të vogël.' }]
  },
  {
    id: 'a1-ad-3',
    word: 'Güzel',
    translation: 'I bukur / Guxhel',
    pos: 'mbiemër',
    category: 'adjectives',
    is_balkan: true,
    examples: [{ source: 'Valbona çok güzel bir kız.', target: 'Valbona është një vajzë shumë e bukur.' }]
  },
  {
    id: 'a1-ad-4',
    word: 'Çirkin',
    translation: 'I shëmtuar',
    pos: 'mbiemër',
    category: 'adjectives',
    examples: [{ source: 'Bu resim çirkin.', target: 'Kjo pikturë është e shëmtuar.' }]
  },
  {
    id: 'a1-ad-5',
    word: 'Yeni',
    translation: 'I ri',
    pos: 'mbiemër',
    category: 'adjectives',
    examples: [{ source: 'Yeni bir araba aldım.', target: 'Mora një makinë të re.' }]
  },
  {
    id: 'a1-ad-6',
    word: 'Eski',
    translation: 'I vjetër (për objekte)',
    pos: 'mbiemër',
    category: 'adjectives',
    examples: [{ source: 'Eski kitap masada.', target: 'Libri i vjetër është mbi tavolinë.' }]
  },
  {
    id: 'a1-ad-7',
    word: 'Genç',
    translation: 'I ri (në moshë)',
    pos: 'mbiemër',
    category: 'adjectives',
    examples: [{ source: 'Genç adam hızlı koşuyor.', target: 'Njeriu i ri po vrapon shpejt.' }]
  },
  {
    id: 'a1-ad-8',
    word: 'Yaşlı',
    translation: 'I moshuar / plak',
    pos: 'mbiemër',
    category: 'adjectives',
    examples: [{ source: 'Yaşlı kadın bahçede oturuyor.', target: 'Plaka po rri në kopsht.' }]
  },
  {
    id: 'a1-ad-9',
    word: 'Zengin',
    translation: 'I pasur / Xhinfis',
    pos: 'mbiemër',
    category: 'adjectives',
    is_balkan: true,
    examples: [{ source: 'Zengin adam yardım etti.', target: 'I pasuri ndihmoi.' }]
  },
  {
    id: 'a1-ad-10',
    word: 'Fakir',
    translation: 'I varfër / Fakir',
    pos: 'mbiemër',
    category: 'adjectives',
    is_balkan: true,
    examples: [{ source: 'Fakir insanlara ekmek verdi.', target: 'I dha bukë njerëzve të varfër.' }]
  },
  {
    id: 'a1-ad-11',
    word: 'Kolay',
    translation: 'I lehtë / Kolaj',
    pos: 'mbiemër',
    category: 'adjectives',
    is_balkan: true,
    examples: [{ source: 'Bu sınav çok kolay.', target: 'Ky provim është shumë i lehtë.' }]
  },
  {
    id: 'a1-ad-12',
    word: 'Zor',
    translation: 'I vështirë / Zor',
    pos: 'mbiemër',
    category: 'adjectives',
    is_balkan: true,
    examples: [{ source: 'Türkçe öğrenmek zor değil.', target: 'Të mësosh turqisht nuk është e vështirë.' }]
  },
  {
    id: 'a1-ad-13',
    word: 'Temiz',
    translation: 'I pastër / Temiz',
    pos: 'mbiemër',
    category: 'adjectives',
    is_balkan: true,
    examples: [{ source: 'Sınıf bugün temiz.', target: 'Klasa sot është e pastër.' }]
  },
  {
    id: 'a1-ad-14',
    word: 'Kirli',
    translation: 'I pistë / fëlliqur',
    pos: 'mbiemër',
    category: 'adjectives',
    examples: [{ source: 'Kirli kıyafetleri yıka.', target: 'Laji rrobat e pista.' }]
  },
  {
    id: 'a1-ad-15',
    word: 'Kırmızı',
    translation: 'I kuq',
    pos: 'mbiemër',
    category: 'adjectives',
    examples: [{ source: 'Kırmızı elma lezzetli.', target: 'Molla e kuqe është e shijshëm.' }]
  },
  {
    id: 'a1-ad-16',
    word: 'Mavi',
    translation: 'Mavi / Kaltër',
    pos: 'mbiemër',
    category: 'adjectives',
    is_balkan: true,
    examples: [{ source: 'Mavi gökyüzü çok güzel.', target: 'Qielli i kaltër është shumë i bukur.' }]
  },
  {
    id: 'a1-ad-17',
    word: 'Yeşil',
    translation: 'Gjelbër / Jeshil',
    pos: 'mbiemër',
    category: 'adjectives',
    is_balkan: true,
    examples: [{ source: 'Yeşil elma ekşidir.', target: 'Molla e gjelbër është e thartë.' }]
  },
  {
    id: 'a1-ad-18',
    word: 'Sarı',
    translation: 'Verdhë',
    pos: 'mbiemër',
    category: 'adjectives',
    examples: [{ source: 'Sarı saçları var.', target: 'Ka flokë të verdhë.' }]
  },
  {
    id: 'a1-ad-19',
    word: 'Siyah',
    translation: 'Zi',
    pos: 'mbiemër',
    category: 'adjectives',
    examples: [{ source: 'Siyah kediyi gördüm.', target: 'Pashë macen e zezë.' }]
  },
  {
    id: 'a1-ad-20',
    word: 'Beyaz',
    translation: 'Bardhë / Bojëbardhë',
    pos: 'mbiemër',
    category: 'adjectives',
    is_balkan: true,
    examples: [{ source: 'Beyaz ev dağın eteğinde.', target: 'Shtëpia e bardhë është në rrëzë të malit.' }]
  },
  {
    id: 'a1-ad-21',
    word: 'Mutlu',
    translation: 'I lumtur',
    pos: 'mbiemër',
    category: 'adjectives',
    examples: [{ source: 'Bugün çok mutluyum.', target: 'Sot jam shumë i lumtur.' }]
  },
  {
    id: 'a1-ad-22',
    word: 'Üzgün',
    translation: 'I mërzitur / trishtuar',
    pos: 'mbiemër',
    category: 'adjectives',
    examples: [{ source: 'Neden üzgünsün?', target: 'Pse je i mërzitur?' }]
  },
  {
    id: 'a1-ad-23',
    word: 'Yorgun',
    translation: 'I lodhur',
    pos: 'mbiemër',
    category: 'adjectives',
    examples: [{ source: 'İşten sonra çok yorgunum.', target: 'Pas punës jam shumë i lodhur.' }]
  },
  {
    id: 'a1-ad-24',
    word: 'Çalışkan',
    translation: 'I zellshëm / punëtor',
    pos: 'mbiemër',
    category: 'adjectives',
    examples: [{ source: 'Çalışkan öğrenciler ders çalışıyor.', target: 'Nxënësit punëtorë po studiojnë.' }]
  },
  {
    id: 'a1-ad-25',
    word: 'Tembel',
    translation: 'Përtac / Dembel',
    pos: 'mbiemër',
    category: 'adjectives',
    is_balkan: true,
    examples: [{ source: 'Tembel kedi uyuyor.', target: 'Macja dembele po fle.' }]
  },
  {
    id: 'a1-ad-26',
    word: 'Soğukkanlı',
    translation: 'Gjakftohtë',
    pos: 'mbiemër',
    category: 'adjectives',
    examples: [{ source: 'O çok soğukkanlı bir insan.', target: 'Ai është një njeri shumë gjakftohtë.' }]
  },
  {
    id: 'a1-ad-27',
    word: 'Sıcakkanlı',
    translation: 'I dashur / miqësor',
    pos: 'mbiemër',
    category: 'adjectives',
    examples: [{ source: 'Türkler sıcakkanlı insanlardır.', target: 'Turqit janë njerëz miqësorë.' }]
  },
  {
    id: 'a1-ad-28',
    word: 'Boş',
    translation: 'Bosh / Zbrazët',
    pos: 'mbiemër',
    category: 'adjectives',
    is_balkan: true,
    examples: [{ source: 'Bu kutu boş.', target: 'Kjo kuti është bosh.' }]
  },
  {
    id: 'a1-ad-29',
    word: 'Dolu',
    translation: 'Plot / I mbushur',
    pos: 'mbiemër',
    category: 'adjectives',
    examples: [{ source: 'Bardak suyla dolu.', target: 'Gota është plot me ujë.' }]
  },
  {
    id: 'a1-ad-30',
    word: 'Açık',
    translation: 'Hapur / Ndritshme',
    pos: 'mbiemër',
    category: 'adjectives',
    examples: [{ source: 'Market saat kaçta açık?', target: 'Në çfarë ore është hapur marketi?' }]
  },

  // ==================== 10. BODY & HEALTH (30 words) ====================
  {
    id: 'a1-he-1',
    word: 'Baş',
    translation: 'Kokë',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Başım çok ağrıyor.', target: 'Më dhemb koka shumë.' }]
  },
  {
    id: 'a1-he-2',
    word: 'Göz',
    translation: 'Sy',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Mavi gözleri var.', target: 'Ka sy të kaltër.' }],
    derivatives: [
      { word: 'gözlük', translation: 'syze', pos: 'emër' },
      { word: 'gözlükçü', translation: 'optik (tregtar syzesh)', pos: 'emër' }
    ]
  },
  {
    id: 'a1-he-3',
    word: 'Kulak',
    translation: 'Vesh',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Kulaklarım soğuktan üşüdü.', target: 'Më ngrinë veshët nga i ftohti.' }]
  },
  {
    id: 'a1-he-4',
    word: 'Burun',
    translation: 'Hundë',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Burun yoluyla nefes alırız.', target: 'Marrim frymë nëpërmjet hundës.' }]
  },
  {
    id: 'a1-he-5',
    word: 'Ağız',
    translation: 'Gojë',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Ağzını aç lütfen.', target: 'Hap gojën ju lutem.' }]
  },
  {
    id: 'a1-he-6',
    word: 'Diş',
    translation: 'Dhëmb',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Günde iki kez dişlerimi fırçalarım.', target: 'Larë dhëmbët dy herë në ditë.' }],
    derivatives: [{ word: 'dişçi', translation: 'dentist', pos: 'emër' }]
  },
  {
    id: 'a1-he-7',
    word: 'El',
    translation: 'Dorë',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Yemekten önce ellerini yıka.', target: 'Laji duart para ushqimit.' }]
  },
  {
    id: 'a1-he-8',
    word: 'Ayak',
    translation: 'Këmbë (shputë)',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Ayaklarım yoruldu.', target: 'Më u lodhën këmbët.' }]
  },
  {
    id: 'a1-he-9',
    word: 'Kol',
    translation: 'Krah / Dorë (nga supet)',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Kolum kırıldı.', target: 'Më u thye krahu.' }]
  },
  {
    id: 'a1-he-10',
    word: 'Bacak',
    translation: 'Këmbë (e plotë)',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Bacaklarım ağrıyor.', target: 'Më dhembin këmbët.' }]
  },
  {
    id: 'a1-he-11',
    word: 'Kalp',
    translation: 'Zemër',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Kalbi hızlı atıyor.', target: 'Zemra e tij po rreh shpejt.' }]
  },
  {
    id: 'a1-he-12',
    word: 'Saç',
    translation: 'Flokë',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Sarı saçları çok uzun.', target: 'Flokët e verdhë janë shumë të gjatë.' }]
  },
  {
    id: 'a1-he-13',
    word: 'Yüz',
    translation: 'Fytyrë / Qind',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Yüzünü soğuk suyla yıkadı.', target: 'Lau fytyrën me ujë të ftohtë.' }]
  },
  {
    id: 'a1-he-14',
    word: 'Hasta',
    translation: 'I sëmurë / Hastë',
    pos: 'mbiemër',
    category: 'health',
    is_balkan: true,
    examples: [{ source: 'Bugün hastayım, okula gitmiyorum.', target: 'Sot jam i sëmurë, nuk shkoj në shkollë.' }],
    derivatives: [
      { word: 'hastalık', translation: 'sëmundje', pos: 'emër' },
      { word: 'hastane', translation: 'spital', pos: 'emër' }
    ]
  },
  {
    id: 'a1-he-15',
    word: 'Sağlık',
    translation: 'Shëndet',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Sağlık en büyük zenginliktir.', target: 'Shëndeti është pasuria më e madhe.' }],
    derivatives: [{ word: 'sağlıklı', translation: 'i shëndetshëm', pos: 'mbiemër' }]
  },
  {
    id: 'a1-he-16',
    word: 'İlaç',
    translation: 'Ilaç / İlaç',
    pos: 'emër',
    category: 'health',
    is_balkan: true,
    examples: [{ source: 'Eczaneden ilaç aldım.', target: 'Mora ilaçe në farmaci.' }]
  },
  {
    id: 'a1-he-17',
    word: 'Ateş',
    translation: 'Zjarr / Temperaturë',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Çocuğun ateşi çok yüksek.', target: 'Temperatura e fëmijës është shumë e lartë.' }]
  },
  {
    id: 'a1-he-18',
    word: 'Öksürük',
    translation: 'Kollë',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Kuru öksürüğüm var.', target: 'Kam kollë të thatë.' }]
  },
  {
    id: 'a1-he-19',
    word: 'Reçete',
    translation: 'Recetë',
    pos: 'emër',
    category: 'health',
    is_balkan: true,
    examples: [{ source: 'Doktor reçete yazdı.', target: 'Mjeku shkroi recetë.' }]
  },
  {
    id: 'a1-he-20',
    word: 'Ağrı',
    translation: 'Dhembje',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Diş ağrısı çok kötüdür.', target: 'Dhembja e dhëmbit është shumë e keqe.' }]
  },
  {
    id: 'a1-he-21',
    word: 'Beden',
    translation: 'Trup / Beden',
    pos: 'emër',
    category: 'health',
    is_balkan: true,
    examples: [{ source: 'Spor yapmak beden için yararlıdır.', target: 'Të bësh sport është e dobishme për trupin.' }]
  },
  {
    id: 'a1-he-22',
    word: 'Kan',
    translation: 'Gjak',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Kan grubunuz nedir?', target: 'Cili është grupi juaj i gjakut?' }]
  },
  {
    id: 'a1-he-23',
    word: 'Nefes',
    translation: 'Frymë / Nefes',
    pos: 'emër',
    category: 'health',
    is_balkan: true,
    examples: [{ source: 'Derin bir nefes al.', target: 'Merr një frymëmarrje të thellë.' }]
  },
  {
    id: 'a1-he-24',
    word: 'Yara',
    translation: 'Plagë / Vragë',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Yara yavaşça iyileşiyor.', target: 'Plaga po shërohet ngadalë.' }]
  },
  {
    id: 'a1-he-25',
    word: 'Yorgunluk',
    translation: 'Lodhje',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Yorgunluktan uyudum.', target: 'Më zuri gjumi nga lodhja.' }]
  },
  {
    id: 'a1-he-26',
    word: 'Boyun',
    translation: 'Qafë',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Boynum ağrıyor.', target: 'Më dhemb qafa.' }]
  },
  {
    id: 'a1-he-27',
    word: 'Omuz',
    translation: 'Sup',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Çantayı omzuma koydum.', target: 'E vendosa çantën në supin tim.' }]
  },
  {
    id: 'a1-he-28',
    word: 'Parmak',
    translation: 'Gisht',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Beş parmağımız var.', target: 'Kemi pesë gishta.' }]
  },
  {
    id: 'a1-he-29',
    word: 'Tırnak',
    translation: 'Thonj',
    pos: 'emër',
    category: 'health',
    examples: [{ source: 'Tırnaklarını kes.', target: 'Preji thonjtë.' }]
  },
  {
    id: 'a1-he-30',
    word: ' Grip',
    translation: 'Grip',
    pos: 'emër',
    category: 'health',
    is_balkan: true,
    examples: [{ source: 'Ben bugün grip oldum.', target: 'Unë sot jam me grip.' }]
  }
];
