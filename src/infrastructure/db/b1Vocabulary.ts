export interface B1VocabularyItem {
  id: string;
  word: string;
  translation: string;
  pos: 'emër' | 'folje' | 'mbiemër' | 'ndajfolje' | 'përemër' | 'lidhëz' | 'pasthirrmë' | 'shprehje';
  category: 'workplace' | 'media' | 'social' | 'idioms' | 'academic';
  is_balkan?: boolean;
  notes?: string;
  examples?: Array<{ source: string; target: string }>;
  derivatives?: Array<{ word: string; translation: string; pos: string }>;
}

export const b1VocabularyData: B1VocabularyItem[] = [
  {
    "id": "b1-work-1",
    "word": "Özgeçmiş",
    "translation": "Jetëshkrim (CV)",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "İş başvurusu yapmadan önce özgeçmişimi güncellemeliyim.",
        "target": "Duhet të përditësoj CV-në time përpara se të bëj kërkesë për punë."
      }
    ]
  },
  {
    "id": "b1-work-2",
    "word": "Mülakat",
    "translation": "Intervistë pune",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Yarın sabah çok önemli bir mülakatım var.",
        "target": "Nesër në mëngjes kam një intervistë pune shumë të rëndësishme."
      }
    ]
  },
  {
    "id": "b1-work-3",
    "word": "Yetenek",
    "translation": "Aftësi / Talent",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Yeni iş pozisyonu için bilgisayar yetenekleri çok önemlidir.",
        "target": "Përdorimi i kompjuterit është shumë i rëndësishëm për pozicionin e ri të punës."
      }
    ]
  },
  {
    "id": "b1-work-4",
    "word": "Tecrübe",
    "translation": "Përvojë",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Bu alanda geniş tecrübelerim var.",
        "target": "Kam përvojë të gjerë në këtë fushë."
      }
    ]
  },
  {
    "id": "b1-work-5",
    "word": "Başvurmak",
    "translation": "Aplikoj",
    "pos": "folje",
    "category": "workplace",
    "examples": [
      {
        "source": "Dün yeni bir iş ilanına başvurdum.",
        "target": "Dje aplikova për një shpallje të re pune."
      }
    ]
  },
  {
    "id": "b1-work-6",
    "word": "İstifa etmek",
    "translation": "Jap dorëheqjen",
    "pos": "folje",
    "category": "workplace",
    "examples": [
      {
        "source": "Şirketteki görevinden istifa etmeye karar verdi.",
        "target": "Ai vendosi të japë dorëheqjen nga detyra e tij në kompani."
      }
    ]
  },
  {
    "id": "b1-work-7",
    "word": "Terfi",
    "translation": "Ngritje në detyrë",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Başarılı çalışmalarından dolayı terfi aldı.",
        "target": "Ai mori një ngritje në detyrë për shkak të punës së tij të suksesshme."
      }
    ]
  },
  {
    "id": "b1-work-8",
    "word": "Maaş",
    "translation": "Pagë / Rrogë",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Maaşlar her ayın birinde hesaba yatıyor.",
        "target": "Pagat kalojnë në llogari në datën një të çdo muaji."
      }
    ]
  },
  {
    "id": "b1-work-9",
    "word": "Sözleşme",
    "translation": "Kontratë",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "İki yıllık yeni bir iş sözleşmesi imzaladık.",
        "target": "Nënshkruam një kontratë të re pune dyvjeçare."
      }
    ]
  },
  {
    "id": "b1-work-10",
    "word": "Sorumluluk",
    "translation": "Përgjegjësi",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Bu projede çok büyük sorumluluklarım var.",
        "target": "Kam përgjegjësi shumë të mëdha në këtë projekt."
      }
    ]
  },
  {
    "id": "b1-work-11",
    "word": "İşbirliği",
    "translation": "Bashkëpunim",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Ortak hedefe ulaşmak için işbirliği yapmalıyız.",
        "target": "Duhet të bashkëpunojmë për të arritur qëllimin e përbashkët."
      }
    ]
  },
  {
    "id": "b1-work-12",
    "word": "Başarı",
    "translation": "Sukses",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Bu başarı tüm ekibin ortak çalışmasıdır.",
        "target": "Ky sukses është punë e përbashkët e të gjithë ekipit."
      }
    ]
  },
  {
    "id": "b1-work-13",
    "word": "Toplantı",
    "translation": "Mbledhje / Takim",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Önemli kararlar almak için yarın toplantı yapacağız.",
        "target": "Nesër do të bëjmë një mbledhje për të marrë vendime të rëndësishme."
      }
    ]
  },
  {
    "id": "b1-work-14",
    "word": "Proje",
    "translation": "Projekt",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Yeni tasarım projesi üzerinde çalışıyoruz.",
        "target": "Po punojmë mbi projektin e ri të dizajnit."
      }
    ]
  },
  {
    "id": "b1-work-15",
    "word": "Yönetici",
    "translation": "Menaxher / Drejtues",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Yöneticimiz yeni planı onayladı.",
        "target": "Menaxheri ynë e miratoi planin e ri."
      }
    ]
  },
  {
    "id": "b1-work-16",
    "word": "Mesai",
    "translation": "Orar pune",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Sabah mesaisi saat sekizde başlıyor.",
        "target": "Orari i punës në mëngjes fillon në orën tetë."
      }
    ]
  },
  {
    "id": "b1-work-17",
    "word": "Fazla mesai",
    "translation": "Orë shtesë",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Bu hafta çok fazla mesai yapmak zorunda kaldım.",
        "target": "Këtë javë u desh të bëja shumë orë shtesë."
      }
    ]
  },
  {
    "id": "b1-work-18",
    "word": "İşsizlik",
    "translation": "Papunësi",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Gençler arasında işsizlik oranı düşüyor.",
        "target": "Shkalla e papunësisë midis të rinjve po bie."
      }
    ]
  },
  {
    "id": "b1-work-19",
    "word": "Girişimci",
    "translation": "Sipërmarrës",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Genç girişimci yeni bir teknoloji şirketi kurdu.",
        "target": "Sipërmarrësi i ri themeloi një kompani të re teknologjike."
      }
    ]
  },
  {
    "id": "b1-work-20",
    "word": "Stajyer",
    "translation": "Praktikant",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Stajyer üniversite öğrencisidir ve çok heveslidir.",
        "target": "Praktikanti është student universiteti dhe shumë entuziast."
      }
    ]
  },
  {
    "id": "b1-work-21",
    "word": "Müşteri",
    "translation": "Klient",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Müşteri memnuniyeti bizim için birinci önceliktir.",
        "target": "Kënaqësia e klientit është prioriteti ynë kryesor."
      }
    ]
  },
  {
    "id": "b1-work-22",
    "word": "Şirket",
    "translation": "Kompani / Firmë",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Şirketimiz uluslararası pazarda faaliyet gösteriyor.",
        "target": "Kompania jonë operon në tregun ndërkombëtar."
      }
    ]
  },
  {
    "id": "b1-work-23",
    "word": "Sektör",
    "translation": "Sektor",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Turizm sektörü bu yıl büyük bir büyüme gösterdi.",
        "target": "Sektori i turizmit tregoi një rritje të madhe këtë vit."
      }
    ]
  },
  {
    "id": "b1-work-24",
    "word": "Kariyer",
    "translation": "Karrierë",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Kariyer hedeflerimi belirlemek için çalışıyorum.",
        "target": "Po punoj për të përcaktuar synimet e mia të karrierës."
      }
    ]
  },
  {
    "id": "b1-work-25",
    "word": "Başvuru",
    "translation": "Aplikim",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Başvuruların son tarihi cuma günüdür.",
        "target": "Afati i fundit i aplikimeve është dita e premte."
      }
    ]
  },
  {
    "id": "b1-work-26",
    "word": "Belgeler",
    "translation": "Dokumente",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "İş başvurusu için gerekli belgeleri hazırladım.",
        "target": "I përgatita dokumentet e nevojshme për aplikim për punë."
      }
    ]
  },
  {
    "id": "b1-work-27",
    "word": "İmza",
    "translation": "Nënshkrim / Firmë",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Sözleşmenin geçerli olması için imzanız gerekiyor.",
        "target": "Nënshkrimi juaj nevojitet që kontrata të jetë e vlefshme."
      }
    ]
  },
  {
    "id": "b1-work-28",
    "word": "İzin",
    "translation": "Leje",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Gelecek hafta yıllık izin kullanacağım.",
        "target": "Javën e ardhshme do të përdor lejen vjetore."
      }
    ]
  },
  {
    "id": "b1-work-29",
    "word": "Emekli",
    "translation": "Pensionist / I pensionuar",
    "pos": "mbiemër",
    "category": "workplace",
    "examples": [
      {
        "source": "Babam geçen yıl emekli oldu.",
        "target": "Babai im doli në pension vitin e kaluar."
      }
    ]
  },
  {
    "id": "b1-work-30",
    "word": "Sendika",
    "translation": "Sindikatë",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "İşçiler sendika çatısı altında haklarını arıyor.",
        "target": "Punëtorët kërkojnë të drejtat e tyre nën ombrellën e sindikatës."
      }
    ]
  },
  {
    "id": "b1-work-31",
    "word": "Rekabet",
    "translation": "Konkurrencë",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Piyasadaki sert rekabet fiyatları düşürdü.",
        "target": "Konkurrenca e ashpër në treg uli çmimet."
      }
    ]
  },
  {
    "id": "b1-work-32",
    "word": "Performans",
    "translation": "Performancë",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Yıllık performans değerlendirmesi olumlu geçti.",
        "target": "Vlerësimi vjetor i performancës shkoi pozitivisht."
      }
    ]
  },
  {
    "id": "b1-work-33",
    "word": "Verimli",
    "translation": "Produktiv / Efikas",
    "pos": "mbiemër",
    "category": "workplace",
    "examples": [
      {
        "source": "Bugün çok verimli bir çalışma günü geçirdik.",
        "target": "Sot patëm një ditë pune shumë produktive."
      }
    ]
  },
  {
    "id": "b1-work-34",
    "word": "Rapor",
    "translation": "Raport",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Finansal raporu akşama kadar bitirmeliyim.",
        "target": "Duhet ta përfundoj raportin financiar deri në mbrëmje."
      }
    ]
  },
  {
    "id": "b1-work-35",
    "word": "Görev",
    "translation": "Detyrë",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Bana verilen tüm görevleri başarıyla tamamladım.",
        "target": "I përfundova me sukses të gjitha detyrat që më dhanë."
      }
    ]
  },
  {
    "id": "b1-work-36",
    "word": "Yetki",
    "translation": "Autoritet / Kompetencë",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Bu kararı vermeye yetkim yok.",
        "target": "Nuk kam autoritet për të marrë këtë vendim."
      }
    ]
  },
  {
    "id": "b1-work-37",
    "word": "İletişim",
    "translation": "Komunikim",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Ekip içi iletişim projelerde kritik rol oynar.",
        "target": "Komunikimi brenda ekipit luan një rol kritik në projekte."
      }
    ]
  },
  {
    "id": "b1-work-38",
    "word": "Kolektif",
    "translation": "Kolektiv",
    "pos": "mbiemër",
    "category": "workplace",
    "examples": [
      {
        "source": "Kolektif çalışma hedeflere daha hızlı ulaştırır.",
        "target": "Puna kolektive na afron më shpejt te qëllimet."
      }
    ]
  },
  {
    "id": "b1-work-39",
    "word": "Gelir",
    "translation": "E ardhur",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Şirketin bu ayki geliri beklentileri aştı.",
        "target": "Të ardhurat e kompanisë për këtë muaj kaluan pritshmëritë."
      }
    ]
  },
  {
    "id": "b1-work-40",
    "word": "Bütçe",
    "translation": "Buxhet",
    "pos": "emër",
    "category": "workplace",
    "examples": [
      {
        "source": "Yeni bütçe planı pazarlama için kaynak ayırıyor.",
        "target": "Plani i ri i buxhetit ndan burime për marketing."
      }
    ]
  },
  {
    "id": "b1-media-1",
    "word": "Sosyal Medya",
    "translation": "Media sociale",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Sosyal medya günümüzde haberleşme şeklimizi tamamen değiştirdi.",
        "target": "Media sociale ka ndryshuar plotësisht mënyrën se si ne komunikojmë sot."
      }
    ]
  },
  {
    "id": "b1-media-2",
    "word": "Haberleşmek",
    "translation": "Komunikoj / Ndaj lajme",
    "pos": "folje",
    "category": "media",
    "examples": [
      {
        "source": "Eski arkadaşlarımla haberleşmek için bu uygulamayı kullanıyorum.",
        "target": "Përdor këtë aplikacion për të komunikuar me shokët e mi të vjetër."
      }
    ]
  },
  {
    "id": "b1-media-3",
    "word": "Yayınlamak",
    "translation": "Publikoj / Transmetoj",
    "pos": "folje",
    "category": "media",
    "examples": [
      {
        "source": "Yeni makalesini kendi blogunda yayınladı.",
        "target": "Ai publikoi artikullin e tij të ri në blogun e vet."
      }
    ]
  },
  {
    "id": "b1-media-4",
    "word": "Yorum",
    "translation": "Koment",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Köşe yazarının bugünkü yorumu çok ilginçti.",
        "target": "Komentimi i sotëm i kolumnistit ishte shumë interesant."
      }
    ]
  },
  {
    "id": "b1-media-5",
    "word": "Güncel",
    "translation": "Aktual / I kohës",
    "pos": "mbiemër",
    "category": "media",
    "examples": [
      {
        "source": "Güncel haberleri takip etmek dünyayı anlamayı sağlar.",
        "target": "Ndjekja e lajmeve aktuale mundëson të kuptuarit e botës."
      }
    ]
  },
  {
    "id": "b1-media-6",
    "word": "Yalan haber",
    "translation": "Lajm i rremë",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Sosyal medyada yalan haberler çok hızlı yayılıyor.",
        "target": "Lajmet e rreme përhapen shumë shpejt në mediat sociale."
      }
    ]
  },
  {
    "id": "b1-media-7",
    "word": "Reklam",
    "translation": "Reklamë",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Yeni televizyon reklamı izleyicilerin ilgisini çekti.",
        "target": "Reklama e re televizive tërhoqi vëmendjen e shikuesve."
      }
    ]
  },
  {
    "id": "b1-media-8",
    "word": "Dergi",
    "translation": "Revistë",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Aylık bilim dergisine abone oldum.",
        "target": "U abonova në një revistë shkencore mujore."
      }
    ]
  },
  {
    "id": "b1-media-9",
    "word": "Gazeteci",
    "translation": "Gazetar",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Gazeteci olay yerinden canlı bildirdi.",
        "target": "Gazetari raportoi drejtpërdrejt nga vendi i ngjarjes."
      }
    ]
  },
  {
    "id": "b1-media-10",
    "word": "Muhabir",
    "translation": "Reporter / Korrespondent",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Savaş muhabiri cephedeki son durumu aktardı.",
        "target": "Reporteri i luftës tregoi situatën e fundit në front."
      }
    ]
  },
  {
    "id": "b1-media-11",
    "word": "Sunucu",
    "translation": "Prezantues / Moderator",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Program sunucusu konuklara ilginç sorular sordu.",
        "target": "Prezantuesi i programit u bëri pyetje interesante të ftuarve."
      }
    ]
  },
  {
    "id": "b1-media-12",
    "word": "Kanal",
    "translation": "Kanal",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Haber kanalı kesintisiz yayın yapıyor.",
        "target": "Kanali i lajmeve transmeton pa ndërprerje."
      }
    ]
  },
  {
    "id": "b1-media-13",
    "word": "Canlı yayın",
    "translation": "Transmetim i drejtpërdrejtë",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Maç bu akşam canlı yayınla verilecek.",
        "target": "Ndeshja do të jepet këtë mbrëmje në transmetim të drejtpërdrejtë."
      }
    ]
  },
  {
    "id": "b1-media-14",
    "word": "Takipçi",
    "translation": "Ndjekës",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Sosyal medya fenomeninin bir milyon takipçisi var.",
        "target": "Fenomeni i mediave sociale ka një milion ndjekës."
      }
    ]
  },
  {
    "id": "b1-media-15",
    "word": "Paylaşım",
    "translation": "Postim / Shpërndarje",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Yeni paylaşımı çok sayıda beğeni topladı.",
        "target": "Postimi i tij i ri mori shumë pëlqime."
      }
    ]
  },
  {
    "id": "b1-media-16",
    "word": "Beğeni",
    "translation": "Pëlqim",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Videom kısa sürede binlerce beğeni aldı.",
        "target": "Videoja ime mori mijëra pëlqime brenda një kohe të shkurtër."
      }
    ]
  },
  {
    "id": "b1-media-17",
    "word": "Abone",
    "translation": "Abonent",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "YouTube kanalının abone sayısı hızla artıyor.",
        "target": "Numri i abonentëve të kanalit në YouTube po rritet shpejt."
      }
    ]
  },
  {
    "id": "b1-media-18",
    "word": "Makale",
    "translation": "Artikull",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Yazar güncel olaylar hakkında bir makale yazdı.",
        "target": "Autori shkroi një artikull rreth ngjarjeve aktuale."
      }
    ]
  },
  {
    "id": "b1-media-19",
    "word": "Röportaj",
    "translation": "Intervistë",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Ünlü oyuncu ile yapılan röportaj yarın yayınlanacak.",
        "target": "Intervista me aktorin e njohur do të publikohet nesër."
      }
    ]
  },
  {
    "id": "b1-media-20",
    "word": "Basın",
    "translation": "Shtypi",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Basın açıklaması saat onda yapılacak.",
        "target": "Deklarata për shtyp do të bëhet në orën dhjetë."
      }
    ]
  },
  {
    "id": "b1-media-21",
    "word": "İnternet",
    "translation": "Internet",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "İnternet sayesinde bilgiye erişmek artık çok kolay.",
        "target": "Falë internetit, qasja në informacion tani është shumë e lehtë."
      }
    ]
  },
  {
    "id": "b1-media-22",
    "word": "Web sitesi",
    "translation": "Uebsajt / Faqe interneti",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Yeni web sitesi kullanıcı dostu tasarımıyla açıldı.",
        "target": "Uebsajti i ri u hap me një dizajn miqësor për përdoruesin."
      }
    ]
  },
  {
    "id": "b1-media-23",
    "word": "Sansür",
    "translation": "Censurë",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Gazeteler sansür yasasına karşı tepki gösterdi.",
        "target": "Gazetat reaguan kundër ligjit të censurës."
      }
    ]
  },
  {
    "id": "b1-media-24",
    "word": "İzleyici",
    "translation": "Shikues / Publik",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Tiyatro oyunu izleyicilerden büyük alkış aldı.",
        "target": "Shfaqja e teatrit mori duartrokitje të mëdha nga shikuesit."
      }
    ]
  },
  {
    "id": "b1-media-25",
    "word": "Dinleyici",
    "translation": "Dëgjues",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Radyo programı sadık dinleyicilere sahip.",
        "target": "Programi i radios ka dëgjues besnikë."
      }
    ]
  },
  {
    "id": "b1-media-26",
    "word": "Gündem",
    "translation": "Rend dite / Agjendë",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Meclisin gündeminde yeni vergi yasası var.",
        "target": "Në agjendën e parlamentit është ligji i ri i taksave."
      }
    ]
  },
  {
    "id": "b1-media-27",
    "word": "Başlık",
    "translation": "Titull",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Haberin başlığı dikkat çekici olmalıdır.",
        "target": "Titulli i lajmit duhet të jetë tërheqës."
      }
    ]
  },
  {
    "id": "b1-media-28",
    "word": "Yazar",
    "translation": "Shkrimtar / Autor",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Yazar son romanında toplumsal sorunları işliyor.",
        "target": "Autori trajton problemet shoqërore në romanin e tij të fundit."
      }
    ]
  },
  {
    "id": "b1-media-29",
    "word": "Editör",
    "translation": "Redaktor",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Editör kitap taslağındaki hataları düzeltti.",
        "target": "Redaktori korrigjoi gabimet në dorëshkrimin e librit."
      }
    ]
  },
  {
    "id": "b1-media-30",
    "word": "Medya",
    "translation": "Medie",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Medya toplumsal algıyı şekillendirmede etkilidir.",
        "target": "Mediat janë ndikuese në formësimin e perceptimit shoqëror."
      }
    ]
  },
  {
    "id": "b1-media-31",
    "word": "Yayın",
    "translation": "Transmetim / Publikim",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Televizyon yayını fırtına nedeniyle kesildi.",
        "target": "Transmetimi televiziv u ndërpre për shkak të stuhisë."
      }
    ]
  },
  {
    "id": "b1-media-32",
    "word": "İlan",
    "translation": "Shpallje / Njoftim",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Gazeteye kiralık ev ilanı verdik.",
        "target": "Dhamë njoftim në gazetë për shtëpi me qira."
      }
    ]
  },
  {
    "id": "b1-media-33",
    "word": "Gazete",
    "translation": "Gazetë",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Babam sabahları kahve içerken gazete okur.",
        "target": "Babai im lexon gazetë në mëngjes ndërsa pi kafe."
      }
    ]
  },
  {
    "id": "b1-media-34",
    "word": "Bülten",
    "translation": "Buletin",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Haber bülteni saat on dokuzda başlayacak.",
        "target": "Buletini i lajmeve do të fillojë në orën nëntëmbëdhjetë."
      }
    ]
  },
  {
    "id": "b1-media-35",
    "word": "Etkileşim",
    "translation": "Ndërveprim",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Instagram gönderisi yüksek etkileşim aldı.",
        "target": "Postimi në Instagram mori ndërveprim të lartë."
      }
    ]
  },
  {
    "id": "b1-media-36",
    "word": "Algoritma",
    "translation": "Algoritëm",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Arama motorunun algoritması güncellendi.",
        "target": "Algoritmi i motorit të kërkimit u përditësua."
      }
    ]
  },
  {
    "id": "b1-media-37",
    "word": "Erişim",
    "translation": "Akses / Qasje",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Kütüphane üyelerine çevrimiçi makale erişimi sunuyor.",
        "target": "Biblioteka u ofron anëtarëve akses në artikujt online."
      }
    ]
  },
  {
    "id": "b1-media-38",
    "word": "Belgesel",
    "translation": "Dokumentar",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Vahşi doğa hakkında harika bir belgesel izledik.",
        "target": "Shikuam një dokumentar të mrekullueshëm mbi natyrën e egër."
      }
    ]
  },
  {
    "id": "b1-media-39",
    "word": "Fotoğrafçılık",
    "translation": "Fotografi",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Fotoğrafçılık hobisiyle ilgilenen genç sergi açtı.",
        "target": "I riu që merret me hobi të fotografisë hapi një ekspozitë."
      }
    ]
  },
  {
    "id": "b1-media-40",
    "word": "Yayıncılık",
    "translation": "Botim / Transmetim",
    "pos": "emër",
    "category": "media",
    "examples": [
      {
        "source": "Dijital yayıncılık sektörü hızla büyümeye devam ediyor.",
        "target": "Sektori i botimeve dixhitale po vazhdon të rritet shpejt."
      }
    ]
  },
  {
    "id": "b1-social-1",
    "word": "Kamuoyu",
    "translation": "Opinioni publik",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Yorumlar kamuoyunu hem olumlu hem de olumsuz etkiliyor.",
        "target": "Komentet ndikojnë opinionin publik si pozitivisht ashtu edit negativisht."
      }
    ]
  },
  {
    "id": "b1-social-2",
    "word": "Geleneksel",
    "translation": "Tradicional",
    "pos": "mbiemër",
    "category": "social",
    "examples": [
      {
        "source": "Geleneksel Balkan yemekleri birbirine çok benzer.",
        "target": "Ushqimet tradicionale të Ballkanit janë shumë të ngjashme me njëra-tjetrën."
      }
    ]
  },
  {
    "id": "b1-social-3",
    "word": "Gelişmek",
    "translation": "Zhvillohem",
    "pos": "folje",
    "category": "social",
    "examples": [
      {
        "source": "Son yıllarda bu şehir çok gelişti.",
        "target": "Në vitet e fundit ky qytet është zhvilluar shumë."
      }
    ]
  },
  {
    "id": "b1-social-4",
    "word": "Fikir",
    "translation": "Mendim / Ide",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Senin bu konu hakkındaki fikrin nedir?",
        "target": "Cili është mendimi yt për këtë çështje?"
      }
    ]
  },
  {
    "id": "b1-social-5",
    "word": "Kültür",
    "translation": "Kulturë",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Balkan kültürü ve Türk kültürü birbirine yakındır.",
        "target": "Kultura ballkanike dhe ajo turke janë të afërta me njëra-tjetrën."
      }
    ]
  },
  {
    "id": "b1-social-6",
    "word": "Toplum",
    "translation": "Shoqëri",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Toplum kurallarına uymak huzur getirir.",
        "target": "Respektimi i rregullave të shoqërisë sjell qetësi."
      }
    ]
  },
  {
    "id": "b1-social-7",
    "word": "İlişki",
    "translation": "Marrëdhënie",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "İki ülke arasındaki ilişkiler iyi yönde ilerliyor.",
        "target": "Marrëdhëniet midis dy vendeve po ecin në drejtim të mirë."
      }
    ]
  },
  {
    "id": "b1-social-8",
    "word": "Çevre",
    "translation": "Mjedis / Rrethinë",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Çevreyi korumak hepimizin vatandaşlık görevidir.",
        "target": "Mbrojtja e mjedisit është detyrë qytetare e të gjithë neve."
      }
    ]
  },
  {
    "id": "b1-social-9",
    "word": "Gelenek",
    "translation": "Traditë",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Eski gelenekleri yaşatmaya çalışmalıyız.",
        "target": "Duhet të përpiqemi të mbajmë gjallë traditat e vjetra."
      }
    ]
  },
  {
    "id": "b1-social-10",
    "word": "Görenek",
    "translation": "Zakon",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Adet ve göreneklerimize bağlı bir aileyiz.",
        "target": "Jemi një familje e lidhur pas dokeve dhe zakoneve tona."
      }
    ]
  },
  {
    "id": "b1-social-11",
    "word": "Saygı",
    "translation": "Respekt",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Büyüklere saygı göstermek kültürümüzün bir parçasıdır.",
        "target": "Tregimi i respektit ndaj më të vjetërve është pjesë e kulturës sonë."
      }
    ]
  },
  {
    "id": "b1-social-12",
    "word": "Sevgi",
    "translation": "Dashuri",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Sevgi paylaştıkça çoğalır.",
        "target": "Dashuria shtohet kur ndahet me të tjerët."
      }
    ]
  },
  {
    "id": "b1-social-13",
    "word": "Arkadaşlık",
    "translation": "Shoqëri / Miqësi",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Gerçek arkadaşlıklar zor günlerde belli olur.",
        "target": "Miqësitë e vërteta dallohen në ditë të vështira."
      }
    ]
  },
  {
    "id": "b1-social-14",
    "word": "Destek",
    "translation": "Përkrahje / Mbështetje",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Zor zamanımda bana büyük destek oldu.",
        "target": "Më dha mbështetje të madhe në kohën time të vështirë."
      }
    ]
  },
  {
    "id": "b1-social-15",
    "word": "Yardımsever",
    "translation": "Bamirës / Ndihmues",
    "pos": "mbiemër",
    "category": "social",
    "examples": [
      {
        "source": "Yardımsever insanlar kütüphane için bağış yaptı.",
        "target": "Njerëz bamirës bënë donacione për bibliotekën."
      }
    ]
  },
  {
    "id": "b1-social-16",
    "word": "Davranış",
    "translation": "Sjellje",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Çocuğun nazik davranışları herkesi memnun etti.",
        "target": "Sjelljet e sjellshme të fëmijës i kënaqën të gjithë."
      }
    ]
  },
  {
    "id": "b1-social-17",
    "word": "Güven",
    "translation": "Besim",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "İlişkilerde karşılıklı güven çok önemlidir.",
        "target": "Besimi i ndërsjellë është shumë i rëndësishëm në marrëdhënie."
      }
    ]
  },
  {
    "id": "b1-social-18",
    "word": "Sorumluluk",
    "translation": "Përgjegjësi",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Toplumsal sorumluluk projelerine katılıyorum.",
        "target": "Marr pjesë në projekte të përgjegjësisë shoqërore."
      }
    ]
  },
  {
    "id": "b1-social-19",
    "word": "Hoşgörü",
    "translation": "Tolerancë",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Toplumda hoşgörü ortamını yaygınlaştırmalıyız.",
        "target": "Duhet të përhapim një atmosferë tolerance në shoqëri."
      }
    ]
  },
  {
    "id": "b1-social-20",
    "word": "Dayanışma",
    "translation": "Solidaritet",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Deprem sonrasında halk büyük bir dayanışma gösterdi.",
        "target": "Pas tërmetit, populli tregoi një solidaritet të madh."
      }
    ]
  },
  {
    "id": "b1-social-21",
    "word": "Paylaşmak",
    "translation": "Ndaj",
    "pos": "folje",
    "category": "social",
    "examples": [
      {
        "source": "Yemeğimi arkadaşımla paylaşmayı severim.",
        "target": "Më pëlqen ta ndaj ushqimin tim me shokun."
      }
    ]
  },
  {
    "id": "b1-social-22",
    "word": "Birliktelik",
    "translation": "Bashkim / Unitet",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Birliktelik duygusu bizi daha güçlü kılıyor.",
        "target": "Ndjenja e bashkimit na bën më të fortë."
      }
    ]
  },
  {
    "id": "b1-social-23",
    "word": "Farklılık",
    "translation": "Diversitet / Ndryshim",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Farklılıklar toplumumuzu zenginleştirir.",
        "target": "Ndryshimet pasurojnë shoqërinë tonë."
      }
    ]
  },
  {
    "id": "b1-social-24",
    "word": "Eşitlik",
    "translation": "Barazi",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Kadın ve erkek haklarında eşitlik sağlanmalıdır.",
        "target": "Duhet të sigurohet barazia në të drejtat e grave dhe burrave."
      }
    ]
  },
  {
    "id": "b1-social-25",
    "word": "Adalet",
    "translation": "Drejtësi",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Adalet mülkün temelidir.",
        "target": "Drejtësia është themeli i shtetit."
      }
    ]
  },
  {
    "id": "b1-social-26",
    "word": "Özgürlük",
    "translation": "Liri",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Fikir özgürlüğü demokratik bir haktır.",
        "target": "Liria e mendimit është një e drejtë demokratike."
      }
    ]
  },
  {
    "id": "b1-social-27",
    "word": "Barış",
    "translation": "Paqe",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Yurtta barış, dünyada barış.",
        "target": "Paqe në atdhe, paqe në botë."
      }
    ]
  },
  {
    "id": "b1-social-28",
    "word": "Ziyaret",
    "translation": "Vizitë",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Hafta sonu akrabalarımızı ziyaret ettik.",
        "target": "Gjatë fundjavës bëmë vizitë te të afërmit tanë."
      }
    ]
  },
  {
    "id": "b1-social-29",
    "word": "Mikpritje",
    "translation": "Mikpritje",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Türk halkının misafirperverliği dünyaca bilinir.",
        "target": "Mikpritja e popullit turk njihet në të gjithë botën."
      }
    ]
  },
  {
    "id": "b1-social-30",
    "word": "Tören",
    "translation": "Ceremoni",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Mezuniyet töreni okulun bahçesinde yapıldı.",
        "target": "Ceremonia e diplomimit u mbajt në oborrin e shkollës."
      }
    ]
  },
  {
    "id": "b1-social-31",
    "word": "Bayram",
    "translation": "Festë / Bajram",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Bayramda bütün aile bir araya gelir.",
        "target": "Në festë e gjithë familja mblidhet së bashku."
      }
    ]
  },
  {
    "id": "b1-social-32",
    "word": "Düğün",
    "translation": "Dasmë",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Kuzenimin düğünü gelecek ay olacak.",
        "target": "Dasma e kushërirës sime do të jetë muajin e ardhshëm."
      }
    ]
  },
  {
    "id": "b1-social-33",
    "word": "Kutlama",
    "translation": "Festim",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Doğum günü kutlaması çok eğlenceli geçti.",
        "target": "Festimi i ditëlindjes shkoi shumë këndshëm."
      }
    ]
  },
  {
    "id": "b1-social-34",
    "word": "Alışkanlık",
    "translation": "Zakon / Shprehi",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Kitap okuma alışkanlığı erken yaşta kazanılır.",
        "target": "Zakoni i leximit të librave fitohet në moshë të hershme."
      }
    ]
  },
  {
    "id": "b1-social-35",
    "word": "Yaşam tarzı",
    "translation": "Stil jetese",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Sağlıklı yaşam tarzı spor yapmayı gerektirir.",
        "target": "Stili i shëndetshëm i jetesës kërkon marrjen me sport."
      }
    ]
  },
  {
    "id": "b1-social-36",
    "word": "Kuşak",
    "translation": "Brez / Gjeneratë",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Yeni kuşak teknolojiyle iç içe büyüyor.",
        "target": "Brezi i ri po rritet i ndërthurur me teknologjinë."
      }
    ]
  },
  {
    "id": "b1-social-37",
    "word": "Değer",
    "translation": "Vlerë",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Manevi değerler toplumları ayakta tutar.",
        "target": "Vlerat shpirtërore i mbajnë shoqëritë në këmbë."
      }
    ]
  },
  {
    "id": "b1-social-38",
    "word": "Ahlak",
    "translation": "Moral",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Ahlak kuralları yazısız ama önemlidir.",
        "target": "Rregullat e moralit janë të paprishura dhe të rëndësishme."
      }
    ]
  },
  {
    "id": "b1-social-39",
    "word": "Nüfus",
    "translation": "Popullsi",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "İstanbul nüfusu birçok ülkeden büyüktür.",
        "target": "Popullsia e Stambollit është më e madhe se e shumë vendeve."
      }
    ]
  },
  {
    "id": "b1-social-40",
    "word": "Göç",
    "translation": "Migrim",
    "pos": "emër",
    "category": "social",
    "examples": [
      {
        "source": "Köyden kente göç sorunlara yol açıyor.",
        "target": "Migrimi nga fshati në qytet shkakton probleme."
      }
    ]
  },
  {
    "id": "b1-idioms-1",
    "word": "Haberin var mı?",
    "translation": "A ke ndonjë lajm? / A je në dijeni?",
    "pos": "shprehje",
    "category": "idioms",
    "examples": [
      {
        "source": "Son gelişmelerden haberin var mı?",
        "target": "A ke ndonjë lajm për zhvillimet e fundit?"
      }
    ]
  },
  {
    "id": "b1-idioms-2",
    "word": "Oysa",
    "translation": "Ndërsa / Kurse / E megjithatë",
    "pos": "lidhëz",
    "category": "idioms",
    "examples": [
      {
        "source": "O haberin doğru olduğunu söylüyordu; oysa gerçek tamamen farklıydı.",
        "target": "Ai thoshte se ai lajm ishte i saktë; ndërsa e vërteta ishte krejt ndryshe."
      }
    ]
  },
  {
    "id": "b1-idioms-3",
    "word": "Göz yummak",
    "translation": "Mbyll sytë / Toleroj diçka të gabuar",
    "pos": "shprehje",
    "category": "idioms",
    "examples": [
      {
        "source": "Bu hataya daha fazla göz yumamam.",
        "target": "Nuk mund t'i mbyll më shumë sytë para këtij gabimi."
      }
    ]
  },
  {
    "id": "b1-idioms-4",
    "word": "Kafaya takmak",
    "translation": "Shqetësohem shumë / Mbaj mendjen te diçka",
    "pos": "shprehje",
    "category": "idioms",
    "examples": [
      {
        "source": "Böyle küçük şeyleri kafaya takma.",
        "target": "Mos e mbaj mendjen te gjëra kaq të vogla."
      }
    ]
  },
  {
    "id": "b1-idioms-5",
    "word": "Ancak",
    "translation": "Megjithatë / Vetëm",
    "pos": "lidhëz",
    "category": "idioms",
    "examples": [
      {
        "source": "Çok çalıştı ancak başarılı olamadı.",
        "target": "Ai punoi shumë, megjithatë nuk pati sukses."
      }
    ]
  },
  {
    "id": "b1-idioms-6",
    "word": "Hatta",
    "translation": "Madje / Bile",
    "pos": "lidhëz",
    "category": "idioms",
    "examples": [
      {
        "source": "Oraya gitmeyeceğini, hatta beni aramayacağını söyledi.",
        "target": "Tha se nuk do të shkonte atje, madje as nuk do të më telefononte."
      }
    ]
  },
  {
    "id": "b1-idioms-7",
    "word": "Bu yüzden",
    "translation": "Prandaj / Për këtë arsye",
    "pos": "lidhëz",
    "category": "idioms",
    "examples": [
      {
        "source": "Hava yağmurluydu bu yüzden evde kaldık.",
        "target": "Koha ishte me shi prandaj qëndruam në shtëpi."
      }
    ]
  },
  {
    "id": "b1-idioms-8",
    "word": "Bu nedenle",
    "translation": "Për këtë arsye",
    "pos": "lidhëz",
    "category": "idioms",
    "examples": [
      {
        "source": "Geç kaldım bu nedenle özür dilerim.",
        "target": "U vonova, për këtë arsye kërkoj falje."
      }
    ]
  },
  {
    "id": "b1-idioms-9",
    "word": "Dolayısıyla",
    "translation": "Si rrjedhojë / Prandaj",
    "pos": "lidhëz",
    "category": "idioms",
    "examples": [
      {
        "source": "Sınavı kazandı dolayısıyla tatile çıkabilir.",
        "target": "Ai e kaloi provimin, si rrjedhojë mund të shkojë në pushime."
      }
    ]
  },
  {
    "id": "b1-idioms-10",
    "word": "Örneğin",
    "translation": "Për shembull",
    "pos": "ndajfolje",
    "category": "idioms",
    "examples": [
      {
        "source": "Spor yapmalısın örneğin koşabilirsin.",
        "target": "Duhet të bësh sport, për shembull mund të vraposh."
      }
    ]
  },
  {
    "id": "b1-idioms-11",
    "word": "Kısacası",
    "translation": "Shkurtimisht",
    "pos": "ndajfolje",
    "category": "idioms",
    "examples": [
      {
        "source": "Kısacası planı iptal etmek zorundayız.",
        "target": "Shkurtimisht na duhet ta anulojmë planin."
      }
    ]
  },
  {
    "id": "b1-idioms-12",
    "word": "Özetle",
    "translation": "Përmbledhtazi",
    "pos": "ndajfolje",
    "category": "idioms",
    "examples": [
      {
        "source": "Özetle yeni strateji verimli oldu.",
        "target": "Përmbledhtazi strategjia e re ishte produktive."
      }
    ]
  },
  {
    "id": "b1-idioms-13",
    "word": "Sonuç olarak",
    "translation": "Si përfundim",
    "pos": "shprehje",
    "category": "idioms",
    "examples": [
      {
        "source": "Sonuç olarak anlaşmaya vardık.",
        "target": "Si përfundim arritëm një marrëveshje."
      }
    ]
  },
  {
    "id": "b1-idioms-14",
    "word": "Bilhassa",
    "translation": "Veçanërisht",
    "pos": "ndajfolje",
    "category": "idioms",
    "examples": [
      {
        "source": "Meyveleri bilhassa elmayı çok severim.",
        "target": "I dua frutat, veçanërisht mollën."
      }
    ]
  },
  {
    "id": "b1-idioms-15",
    "word": "Özellikle",
    "translation": "Sidomos / Veçanërisht",
    "pos": "ndajfolje",
    "category": "idioms",
    "examples": [
      {
        "source": "Özellikle akşamları kahve içmem.",
        "target": "Sidomos në mbrëmje nuk pi kafe."
      }
    ]
  },
  {
    "id": "b1-idioms-16",
    "word": "Genellikle",
    "translation": "Zakonisht",
    "pos": "ndajfolje",
    "category": "idioms",
    "examples": [
      {
        "source": "Genellikle erken kalkarım.",
        "target": "Zakonisht zgjohem herët."
      }
    ]
  },
  {
    "id": "b1-idioms-17",
    "word": "Nadiren",
    "translation": "Rrallë",
    "pos": "ndajfolje",
    "category": "idioms",
    "examples": [
      {
        "source": "Nadiren dışarıda yemek yeriz.",
        "target": "Rrallë hamë jashtë."
      }
    ]
  },
  {
    "id": "b1-idioms-18",
    "word": "Kesinlikle",
    "translation": "Absolutisht / Pa dyshim",
    "pos": "ndajfolje",
    "category": "idioms",
    "examples": [
      {
        "source": "Bu teklifi kesinlikle kabul etmelisin.",
        "target": "Duhet ta pranosh absolutisht këtë ofertë."
      }
    ]
  },
  {
    "id": "b1-idioms-19",
    "word": "Muhtemelen",
    "translation": "Ndoshta / Ka mundësi",
    "pos": "ndajfolje",
    "category": "idioms",
    "examples": [
      {
        "source": "Yarın muhtemelen yağmur yağacak.",
        "target": "Ndoshta nesër do të bjerë shi."
      }
    ]
  },
  {
    "id": "b1-idioms-20",
    "word": "Şüphesiz",
    "translation": "Pa dyshim",
    "pos": "ndajfolje",
    "category": "idioms",
    "examples": [
      {
        "source": "Şüphesiz en güzel şehir burasıdır.",
        "target": "Pa dyshim qyteti më i bukur është ky këtu."
      }
    ]
  },
  {
    "id": "b1-idioms-21",
    "word": "Galiba",
    "translation": "Siç duket / Mbase",
    "pos": "ndajfolje",
    "category": "idioms",
    "examples": [
      {
        "source": "Galiba yolu kaybettik.",
        "target": "Siç duket e humbëm rrugën."
      }
    ]
  },
  {
    "id": "b1-idioms-22",
    "word": "Sanki",
    "translation": "Sikur",
    "pos": "lidhëz",
    "category": "idioms",
    "examples": [
      {
        "source": "Sanki daha önce buraya gelmiştim.",
        "target": "Sikur kisha ardhur më parë këtu."
      }
    ]
  },
  {
    "id": "b1-idioms-23",
    "word": "Keşke",
    "translation": "Ah sikur / Dashtë Zoti",
    "pos": "shprehje",
    "category": "idioms",
    "examples": [
      {
        "source": "Keşke dün bizimle gelseydin.",
        "target": "Ah sikur të vije dje me ne."
      }
    ]
  },
  {
    "id": "b1-idioms-24",
    "word": "Ne yazık ki",
    "translation": "Mjerisht / Për fat të keq",
    "pos": "shprehje",
    "category": "idioms",
    "examples": [
      {
        "source": "Ne yazık ki biletler tükendi.",
        "target": "Për fat të keq biletat u shitën."
      }
    ]
  },
  {
    "id": "b1-idioms-25",
    "word": "İyi ki",
    "translation": "Fatmirësisht / Sa mirë që",
    "pos": "shprehje",
    "category": "idioms",
    "examples": [
      {
        "source": "İyi ki geldin, seni çok özlemiştim.",
        "target": "Sa mirë që erdhe, më kishte marrë malli shumë."
      }
    ]
  },
  {
    "id": "b1-idioms-26",
    "word": "Neyse ki",
    "translation": "Për fat të mirë",
    "pos": "shprehje",
    "category": "idioms",
    "examples": [
      {
        "source": "Neyse ki anahtarı buldum.",
        "target": "Për fat të mirë e gjeta çelësin."
      }
    ]
  },
  {
    "id": "b1-idioms-27",
    "word": "Her neyse",
    "translation": "Sidoqoftë",
    "pos": "shprehje",
    "category": "idioms",
    "examples": [
      {
        "source": "Her neyse, biz işimize bakalım.",
        "target": "Sidoqoftë, ne të shohim punën tonë."
      }
    ]
  },
  {
    "id": "b1-idioms-28",
    "word": "Göze almak",
    "translation": "Rrezikoj / Marr parasysh rrezikun",
    "pos": "shprehje",
    "category": "idioms",
    "examples": [
      {
        "source": "Her şeyi göze alıp yola çıktım.",
        "target": "I morra parasysh të gjitha rreziqet dhe u nisa."
      }
    ]
  },
  {
    "id": "b1-idioms-29",
    "word": "Hayal kırıklığı",
    "translation": "Zhgënjim",
    "pos": "emër",
    "category": "idioms",
    "examples": [
      {
        "source": "Yeni film büyük bir hayal kırıklığı oldu.",
        "target": "Filmi i ri ishte një zhgënjim i madh."
      }
    ]
  },
  {
    "id": "b1-idioms-30",
    "word": "Canı sıkılmak",
    "translation": "Mërzitem / Më behet mërzi",
    "pos": "shprehje",
    "category": "idioms",
    "examples": [
      {
        "source": "Evde oturmaktan canım sıkıldı.",
        "target": "Më erdhi mërzi duke ndenjur në shtëpi."
      }
    ]
  },
  {
    "id": "b1-idioms-31",
    "word": "Karar vermek",
    "translation": "Vendos",
    "pos": "folje",
    "category": "idioms",
    "examples": [
      {
        "source": "Sonunda üniversite tercihime karar verdim.",
        "target": "Në fund vendosa për zgjedhjen e universitetit tim."
      }
    ]
  },
  {
    "id": "b1-idioms-32",
    "word": "Dikkat etmek",
    "translation": "Kujdesem / Kushtoj vëmendje",
    "pos": "folje",
    "category": "idioms",
    "examples": [
      {
        "source": "Yolda yürürken dikkat etmelisin.",
        "target": "Duhet të kujdesesh kur ecën në rrugë."
      }
    ]
  },
  {
    "id": "b1-idioms-33",
    "word": "Fark etmek",
    "translation": "Vërej / Vë re",
    "pos": "folje",
    "category": "idioms",
    "examples": [
      {
        "source": "Değişikliği hemen fark ettim.",
        "target": "E vërejta ndryshimin menjëherë."
      }
    ]
  },
  {
    "id": "b1-idioms-34",
    "word": "Başa çıkmak",
    "translation": "Përballoj",
    "pos": "folje",
    "category": "idioms",
    "examples": [
      {
        "source": "Stresle başa çıkmak için spor yapıyorum.",
        "target": "Bëj sport për të përballuar stresin."
      }
    ]
  },
  {
    "id": "b1-idioms-35",
    "word": "Yola çıkmak",
    "translation": "Nisem për rrugë",
    "pos": "folje",
    "category": "idioms",
    "examples": [
      {
        "source": "Sabah erkenden yola çıkacağız.",
        "target": "Do të nisemi për rrugë herët në mëngjes."
      }
    ]
  },
  {
    "id": "b1-idioms-36",
    "word": "Vazgeçmek",
    "translation": "Heq dorë",
    "pos": "folje",
    "category": "idioms",
    "examples": [
      {
        "source": "Sigarayı bırakmaktan vazgeçme.",
        "target": "Mos hiq dorë nga lënia e cigares."
      }
    ]
  },
  {
    "id": "b1-idioms-37",
    "word": "İhtiyaç duymak",
    "translation": "Kam nevojë",
    "pos": "folje",
    "category": "idioms",
    "examples": [
      {
        "source": "Desteğine ihtiyaç duyuyorum.",
        "target": "Kam nevojë për mbështetjen tënde."
      }
    ]
  },
  {
    "id": "b1-idioms-38",
    "word": "İnanmak",
    "translation": "Besoj",
    "pos": "folje",
    "category": "idioms",
    "examples": [
      {
        "source": "Söylediklerine inanmak istiyorum.",
        "target": "Dua t'i besoj ato që thua."
      }
    ]
  },
  {
    "id": "b1-idioms-39",
    "word": "Pişman olmak",
    "translation": "Pendohem",
    "pos": "folje",
    "category": "idioms",
    "examples": [
      {
        "source": "Ona bağırdığım için pişman oldu.",
        "target": "U pendova që i bërtita."
      }
    ]
  },
  {
    "id": "b1-idioms-40",
    "word": "Merak etmek",
    "translation": "Jam kurioz / Shqetësohem",
    "pos": "folje",
    "category": "idioms",
    "examples": [
      {
        "source": "Sınav sonucunu çok merak ediyorum.",
        "target": "Jam shumë kurioz për rezultatin e provimit."
      }
    ]
  },
  {
    "id": "b1-academic-1",
    "word": "Araştırma",
    "translation": "Hulumtim / Kërkim shkencor",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Üniversitedeki profesör yeni bir araştırma projesine başladı.",
        "target": "Profesori në universitet nisi një projekt të ri kërkimor."
      }
    ]
  },
  {
    "id": "b1-academic-2",
    "word": "Kanıtlamak",
    "translation": "Vërtetoj / Provon",
    "pos": "folje",
    "category": "academic",
    "examples": [
      {
        "source": "Bu deney teorimizin doğru olduğunu kanıtlıyor.",
        "target": "Kjo provë vërteton se teoria jonë është e saktë."
      }
    ]
  },
  {
    "id": "b1-academic-3",
    "word": "Eğitim",
    "translation": "Arsim / Edukim",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Yüksek eğitim almak için yurt dışına gitti.",
        "target": "Shkoi jashtë vendit për të marrë arsim të lartë."
      }
    ]
  },
  {
    "id": "b1-academic-4",
    "word": "Sonuç",
    "translation": "Rezultat / Përfundim",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Sınav sonuçları haftaya açıklanacak.",
        "target": "Rezultatet e provimit do të shpallen javën tjetër."
      }
    ]
  },
  {
    "id": "b1-academic-5",
    "word": "Tartışmak",
    "translation": "Diskutoj / Debatoj",
    "pos": "folje",
    "category": "academic",
    "examples": [
      {
        "source": "Projenin detaylarını sınıfta tartıştık.",
        "target": "I diskutuam detajet e projektit në klasë."
      }
    ]
  },
  {
    "id": "b1-academic-6",
    "word": "Teori",
    "translation": "Teori",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Bilim insanları yeni bir teori ortaya attı.",
        "target": "Shkencëtarët hodhën në dritë një teori të re."
      }
    ]
  },
  {
    "id": "b1-academic-7",
    "word": "Deney",
    "translation": "Eksperiment",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Laboratuvarda yeni bir kimya deneyi yaptık.",
        "target": "Bëmë një eksperiment të ri kimie në laborator."
      }
    ]
  },
  {
    "id": "b1-academic-8",
    "word": "Bilim",
    "translation": "Shkencë",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Bilim ve teknoloji dünyayı değiştiriyor.",
        "target": "Shkenca dhe teknologjia po ndryshojnë botën."
      }
    ]
  },
  {
    "id": "b1-academic-9",
    "word": "Makale",
    "translation": "Artikull shkencor",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Profesör uluslararası bir dergide makale yayınladı.",
        "target": "Profesori publikoi një artikull shkencor në një revistë ndërkombëtare."
      }
    ]
  },
  {
    "id": "b1-academic-10",
    "word": "Yöntem",
    "translation": "Metodë / Mënyrë",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Araştırmamızda yeni bir yöntem kullandık.",
        "target": "Përdorëm një metodë të re në kërkimin tonë."
      }
    ]
  },
  {
    "id": "b1-academic-11",
    "word": "Analiz",
    "translation": "Analizë",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Verilerin analizi saatler sürdü.",
        "target": "Analiza e të dhënave zgjati me orë të tëra."
      }
    ]
  },
  {
    "id": "b1-academic-12",
    "word": "Bilgi",
    "translation": "Informacion / Dije",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Kütüphanede aradığım tüm bilgilere ulaştım.",
        "target": "I gjeta të gjitha informacionet që kërkoja në bibliotekë."
      }
    ]
  },
  {
    "id": "b1-academic-13",
    "word": "Kaynak",
    "translation": "Burim / Referencë",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Tez yazarken güvenilir kaynaklar kullanmalısın.",
        "target": "Duhet të përdorësh burime të besueshme gjatë shkrimit të tezës."
      }
    ]
  },
  {
    "id": "b1-academic-14",
    "word": "Kütüphane",
    "translation": "Bibliotekë",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Kütüphanede sessizce çalışmak çok verimlidir.",
        "target": "Puna në qetësi në bibliotekë është shumë produktive."
      }
    ]
  },
  {
    "id": "b1-academic-15",
    "word": "Üniversite",
    "translation": "Universitet",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Üniversite eğitimi insana yeni ufuklar açar.",
        "target": "Arsimi universitar i hap njeriut horizonte të reja."
      }
    ]
  },
  {
    "id": "b1-academic-16",
    "word": "Araştırmacı",
    "translation": "Hulumtues / Kërkues",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Genç araştırmacı ödül kazandı.",
        "target": "Kërkuesi i ri fitoi çmim."
      }
    ]
  },
  {
    "id": "b1-academic-17",
    "word": "Konu",
    "translation": "Temë / Çështje",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Bugünkü dersin konusu tarih üzerineydi.",
        "target": "Tema e mësimit të sotëm ishte mbi historinë."
      }
    ]
  },
  {
    "id": "b1-academic-18",
    "word": "Sunum",
    "translation": "Prezantim",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Yarın sınıfta bir sunum yapacağım.",
        "target": "Nesër do të bëj një prezantim në klasë."
      }
    ]
  },
  {
    "id": "b1-academic-19",
    "word": "Tez",
    "translation": "Tezë / Punim diplome",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Yüksek lisans tezimi teslim ettim.",
        "target": "E dorëzova tezën time të masterit."
      }
    ]
  },
  {
    "id": "b1-academic-20",
    "word": "Sınav",
    "translation": "Provim",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Sınavda başarılı olmak için çok çalıştım.",
        "target": "Kam punuar shumë për të pasur sukses në provim."
      }
    ]
  },
  {
    "id": "b1-academic-21",
    "word": "Ödev",
    "translation": "Detyrë shtëpie",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Ödevimi zamanında bitirmem gerekiyor.",
        "target": "Duhet ta përfundoj detyrën e shtëpisë në kohë."
      }
    ]
  },
  {
    "id": "b1-academic-22",
    "word": "Ders programı",
    "translation": "Program mësimor / Kurrikulë",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Yeni ders programı çok yoğun görünüyor.",
        "target": "Programi i ri mësimor duket shumë i ngjeshur."
      }
    ]
  },
  {
    "id": "b1-academic-23",
    "word": "Burs",
    "translation": "Bursë",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Başarılı öğrencilere burs verilecek.",
        "target": "Studentëve të suksesshëm do t'u jepet bursë."
      }
    ]
  },
  {
    "id": "b1-academic-24",
    "word": "Mezun olmak",
    "translation": "Graduohem / Mituroj",
    "pos": "folje",
    "category": "academic",
    "examples": [
      {
        "source": "Bu yıl üniversiteden mezun oluyorum.",
        "target": "Këtë vit po diplomohem nga universiteti."
      }
    ]
  },
  {
    "id": "b1-academic-25",
    "word": "Öğretim üyesi",
    "translation": "Pedagog / Anëtar i fakultetit",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Öğretim üyesi öğrencilerin sorularını yanıtladı.",
        "target": "Pedagogu iu përgjigj pyetjeve të studentëve."
      }
    ]
  },
  {
    "id": "b1-academic-26",
    "word": "Rektör",
    "translation": "Rektor",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Rektör kampüsteki yenilikleri inceledi.",
        "target": "Rektori inspektoi risitë në kampus."
      }
    ]
  },
  {
    "id": "b1-academic-27",
    "word": "Dekan",
    "translation": "Dekan",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Fakülte dekanı yeni öğrencileri karşıladı.",
        "target": "Dekani i fakultetit priti studentët e rinj."
      }
    ]
  },
  {
    "id": "b1-academic-28",
    "word": "Fakülte",
    "translation": "Fakultet",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Tıp fakültesi hastanenin yanındadır.",
        "target": "Fakulteti i mjekësisë është pranë spitalit."
      }
    ]
  },
  {
    "id": "b1-academic-29",
    "word": "Bölüm",
    "translation": "Departament / Degë",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Bilgisayar mühendisliği bölümünde okuyorum.",
        "target": "Studioj në degën e inxhinierisë kompjuterike."
      }
    ]
  },
  {
    "id": "b1-academic-30",
    "word": "Kayıt",
    "translation": "Regjistrim",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Üniversite kayıtları yarın başlıyor.",
        "target": "Regjistrimet universitare fillojnë nesër."
      }
    ]
  },
  {
    "id": "b1-academic-31",
    "word": "Başarı",
    "translation": "Sukses akademik",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Akademik başarı kararlılık gerektirir.",
        "target": "Suksesi akademik kërkon vendosmëri."
      }
    ]
  },
  {
    "id": "b1-academic-32",
    "word": "Not",
    "translation": "Notë / Vlerësim",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Matematik sınavından yüksek not aldım.",
        "target": "Mora notë të lartë në provimin e matematikës."
      }
    ]
  },
  {
    "id": "b1-academic-33",
    "word": "Disiplin",
    "translation": "Disiplinë",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Çalışırken disiplinli olmak hedefe ulaştırır.",
        "target": "Të qenit i disiplinuar gjatë punës të çon te qëllimi."
      }
    ]
  },
  {
    "id": "b1-academic-34",
    "word": "Gözlem",
    "translation": "Vëzhgim",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Araştırmacı kuşlar üzerinde gözlem yaptı.",
        "target": "Hulumtuesi bëri vëzhgime mbi zogjtë."
      }
    ]
  },
  {
    "id": "b1-academic-35",
    "word": "Veri",
    "translation": "Të dhëna",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Anket verileri veri tabanına kaydedildi.",
        "target": "Të dhënat e anketës u regjistruan në bazën e të dhënave."
      }
    ]
  },
  {
    "id": "b1-academic-36",
    "word": "Hipotez",
    "translation": "Hipotezë",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Yeni araştırma bu hipotezi test edecek.",
        "target": "Hulumtimi i ri do të testojë këtë hipotezë."
      }
    ]
  },
  {
    "id": "b1-academic-37",
    "word": "Kriter",
    "translation": "Kriter",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Değerlendirme kriterleri öğrencilere duyuruldu.",
        "target": "Kriteret e vlerësimit iu njoftuan studentëve."
      }
    ]
  },
  {
    "id": "b1-academic-38",
    "word": "Çeviri",
    "translation": "Përkthim",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Şiir çevirisi yapmak büyük hassasiyet gerektirir.",
        "target": "Bërja e përkthimit të poezisë kërkon saktësi të madhe."
      }
    ]
  },
  {
    "id": "b1-academic-39",
    "word": "Sözlük",
    "translation": "Fjalor",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Kelimelerin anlamı için sözlüğe bakmalısın.",
        "target": "Duhet të shikosh fjalorin për kuptimin e fjalëve."
      }
    ]
  },
  {
    "id": "b1-academic-40",
    "word": "Tanım",
    "translation": "Përkufizim",
    "pos": "emër",
    "category": "academic",
    "examples": [
      {
        "source": "Kavramın bilimsel tanımı kitapta yer alıyor.",
        "target": "Përkufizimi shkencor i konceptit ndodhet në libër."
      }
    ]
  }
];
