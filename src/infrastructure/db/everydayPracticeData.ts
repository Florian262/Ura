export interface PracticeContentLine {
  speaker?: string; // e.g. "Kasiyer" | "Müşteri"
  turkish: string;
  albanian: string;
}

export interface PracticeItem {
  id: string;
  type: 'dialog' | 'story';
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  titleTurkish: string;
  titleAlbanian: string;
  descriptionAlbanian: string;
  icon: string; // "supermarket", "cafe", etc.
  
  // For stories supporting perspective swaps (1st vs 3rd person)
  perspectives?: {
    firstPerson: PracticeContentLine[];
    thirdPerson: PracticeContentLine[];
  };
  
  // For standard stories or dialogues
  content?: PracticeContentLine[];
}

export const EVERYDAY_PRACTICE_ITEMS: PracticeItem[] = [
  // --- DIALOGUES ---
  {
    id: "a1_dialog_supermarket",
    type: "dialog",
    level: "A1",
    titleTurkish: "Süpermarkette Alışveriş",
    titleAlbanian: "Blerje në Supermarket",
    descriptionAlbanian: "Praktikoni blerjen e ushqimeve të thjeshta dhe bisedën me arkëtarin.",
    icon: "supermarket",
    content: [
      {
        speaker: "Kasiyer",
        turkish: "Merhaba! Hoş geldiniz.",
        albanian: "Tungjatjeta! Mirë se vini."
      },
      {
        speaker: "Müşteri",
        turkish: "Merhaba! Bir ekmek ve bir süt almak istiyorum.",
        albanian: "Tungjatjeta! Dua të blej një bukë dhe një qumësht."
      },
      {
        speaker: "Kasiyer",
        turkish: "Tabii, buyurun. Başka bir şey istiyor musunuz?",
        albanian: "Sigurisht, urdhëroni. A dëshironi diçka tjetër?"
      },
      {
        speaker: "Müşteri",
        turkish: "Hayır, teşekkürler. Hepsi bu kadar. Borcum ne kadar?",
        albanian: "Jo, faleminderit. Kjo është e gjitha. Sa është borxhi im?"
      },
      {
        speaker: "Kasiyer",
        turkish: "Toplam otuz lira.",
        albanian: "Gjithsej tridhjetë lira."
      },
      {
        speaker: "Müşteri",
        turkish: "Buyurun, otuz lira.",
        albanian: "Urdhëroni, tridhjetë lira."
      },
      {
        speaker: "Kasiyer",
        turkish: "Teşekkürler, iyi günler!",
        albanian: "Faleminderit, ditë të mbarë!"
      },
      {
        speaker: "Müşteri",
        turkish: "İyi günler!",
        albanian: "Ditë të mbarë!"
      }
    ]
  },
  {
    id: "a1_dialog_cafe",
    type: "dialog",
    level: "A1",
    titleTurkish: "Kafede Sipariş",
    titleAlbanian: "Porosi në Kafe",
    descriptionAlbanian: "Mësoni si të porosisni pije dhe ushqime të thjeshta në një kafene turke.",
    icon: "cafe",
    content: [
      {
        speaker: "Garson",
        turkish: "Merhaba, hoş geldiniz! Ne almak istersiniz?",
        albanian: "Tungjatjeta, mirë se vini! Çfarë dëshironi të merrni?"
      },
      {
        speaker: "Müşteri",
        turkish: "Merhaba! Bir fincan Türk kahvesi ve bir su alabilir miyim?",
        albanian: "Tungjatjeta! A mund të marr një filxhan kafe turke dhe një ujë?"
      },
      {
        speaker: "Garson",
        turkish: "Tabii ki. Kahveniz nasıl olsun? Sade mi, orta mı, şekerli mi?",
        albanian: "Sigurisht. Si ta ketë kafenë? E thjeshtë (pa sheqer), mesatare, apo me sheqer?"
      },
      {
        speaker: "Müşteri",
        turkish: "Orta olsun, lütfen.",
        albanian: "Mesatare, ju lutem."
      },
      {
        speaker: "Garson",
        turkish: "Hemen getiriyorum. Başka bir isteğiniz var mı?",
        albanian: "Po e sjell menjëherë. A keni ndonjë dëshirë tjetër?"
      },
      {
        speaker: "Müşteri",
        turkish: "Hayır, teşekkürler. Hepsi bu.",
        albanian: "Jo, faleminderit. Kjo është e gjitha."
      },
      {
        speaker: "Garson",
        turkish: "Buyurun, kahveniz ve suyunuz. Afiyet olsun!",
        albanian: "Urdhëroni, kafja dhe uji juaj. Ju bëftë mirë!"
      },
      {
        speaker: "Müşteri",
        turkish: "Teşekkür ederim, elinize sağlık!",
        albanian: "Faleminderit, ju lumshin duart!"
      }
    ]
  },
  {
    id: "a1_dialog_taxi",
    type: "dialog",
    level: "A1",
    titleTurkish: "Taksiye Binmek",
    titleAlbanian: "Marrja e Taksisë",
    descriptionAlbanian: "Tregoni destinacionin, pyesni për kohën dhe bëni pagesën me taksi.",
    icon: "taxi",
    content: [
      {
        speaker: "Yolcu",
        turkish: "Merhaba! İyi günler.",
        albanian: "Tungjatjeta! Ditë të mbarë."
      },
      {
        speaker: "Şoför",
        turkish: "Merhaba, iyi günler! Nereye gitmek istiyorsunuz?",
        albanian: "Tungjatjeta, ditë të mbarë! Ku dëshironi të shkoni?"
      },
      {
        speaker: "Yolcu",
        turkish: "Havalimanına gitmek istiyorum. Ne kadar sürer?",
        albanian: "Dua të shkoj në aeroport. Sa kohë merr?"
      },
      {
        speaker: "Şoför",
        turkish: "Trafik yok, yaklaşık yirmi dakika sürer.",
        albanian: "Nuk ka trafik, merr afërsisht njëzet minuta."
      },
      {
        speaker: "Yolcu",
        turkish: "Tamam, harika. Ücret ne kadar tutar?",
        albanian: "Rregull, shkëlqyeshëm. Sa kushton pagesa?"
      },
      {
        speaker: "Şoför",
        turkish: "Yaklaşık iki yüz lira tutar.",
        albanian: "Kushton afërsisht dyqind lira."
      },
      {
        speaker: "Yolcu",
        turkish: "Anlaştık, gidelim lütfen.",
        albanian: "U pajtuam, le të shkojmë ju lutem."
      },
      {
        speaker: "Şoför",
        turkish: "Tabii ki, kemerinizi bağlayın lütfen.",
        albanian: "Sigurisht, lidhni rripin e sigurimit ju lutem."
      }
    ]
  },
  {
    id: "a1_dialog_introduction",
    type: "dialog",
    level: "A1",
    titleTurkish: "Yeni Biriyle Tanışmak",
    titleAlbanian: "Takimi me një person të ri",
    descriptionAlbanian: "Prezantoni veten tuaj, pyesni për prejardhjen dhe profesionin e dikujt tjetër.",
    icon: "introduction",
    content: [
      {
        speaker: "Ahmet",
        turkish: "Merhaba! Benim adım Ahmet. Senin adın ne?",
        albanian: "Tungjatjeta! Emri im është Ahmet. Si është emri yt?"
      },
      {
        speaker: "Elif",
        turkish: "Merhaba Ahmet! Benim adım Elif. Memnun oldum.",
        albanian: "Tungjatjeta Ahmet! Emri im është Elif. Gëzohem që të takoj."
      },
      {
        speaker: "Ahmet",
        turkish: "Ben de memnun oldum. Nerelisin Elif?",
        albanian: "Edhe unë gëzohem që të takoj. Nga je Elif?"
      },
      {
        speaker: "Elif",
        turkish: "Ben İzmirliyim. Sen nerelisin?",
        albanian: "Unë jam nga Izmiri. Po ti nga je?"
      },
      {
        speaker: "Ahmet",
        turkish: "Ben Kosovalıyım ama İstanbul'da yaşıyorum. Ne iş yapıyorsun?",
        albanian: "Unë jam nga Kosova por jetoj në Stamboll. Çfarë pune bën?"
      },
      {
        speaker: "Elif",
        turkish: "Ben öğretmenim, Türkçe öğretiyorum. Sen ne iş yapıyorsun?",
        albanian: "Unë jam mësuese, jap mësim turqisht. Po ti çfarë pune bën?"
      },
      {
        speaker: "Ahmet",
        turkish: "Ben öğrenciyim, üniversitede okuyorum.",
        albanian: "Unë jam student, studioj në universitet."
      },
      {
        speaker: "Elif",
        turkish: "Harika! Görüşmek üzere, Ahmet.",
        albanian: "Shkëlqyeshëm! Shihemi së shpejti, Ahmet."
      },
      {
        speaker: "Ahmet",
        turkish: "Görüşürüz, kendine iyi bak!",
        albanian: "Shihemi, kujdesu për veten!"
      }
    ]
  },

  // --- STORIES ---
  {
    id: "a1_story_routine",
    type: "story",
    level: "A1",
    titleTurkish: "Hayatımdan Bir Gün",
    titleAlbanian: "Një ditë në jetën time",
    descriptionAlbanian: "Mësoni si të përshkruani rutinën tuaj të përditshme ose të dikujt tjetër duke ndryshuar vetën e foljes.",
    icon: "routine",
    perspectives: {
      firstPerson: [
        {
          turkish: "Her sabah saat yedide uyanırım.",
          albanian: "Çdo mëngjes zgjohem në orën shtatë."
        },
        {
          turkish: "Yüzümü yıkarım ve güzel bir kahvaltı yaparım.",
          albanian: "Laj fytyrën dhe bëj një mëngjes të mirë."
        },
        {
          turkish: "Kahvaltıda peynir, zeytin yerim ve çay içerim.",
          albanian: "Në mëngjes ha djathë, ullinj dhe pi çaj."
        },
        {
          turkish: "Saat sekizde evden çıkarım ve otobüsle okula giderim.",
          albanian: "Në orën tetë dal nga shtëpia dhe shkoj me autobus në shkollë."
        },
        {
          turkish: "Okulda yeni şeyler öğrenirim ve arkadaşlarımla konuşurum.",
          albanian: "Në shkollë mësoj gjëra të reja dhe flas me shokët e mi."
        },
        {
          turkish: "Akşam eve dönerim, akşam yemeği yerim ve kitap okurum.",
          albanian: "Në mbrëmje kthehem në shtëpi, ha darkë darkë  dhe lexoj libër."
        },
        {
          turkish: "Gece saat on birde uyurum.",
          albanian: "Në orën njëmbëdhjetë të natës fle."
        }
      ],
      thirdPerson: [
        {
          turkish: "Ahmet her sabah saat yedide uyanır.",
          albanian: "Ahmeti çdo mëngjes zgjohet në orën shtatë."
        },
        {
          turkish: "Yüzünü yıkar ve güzel bir kahvaltı yapar.",
          albanian: "Lan fytyrën dhe bën një mëngjes të mirë."
        },
        {
          turkish: "Kahvaltıda peynir, zeytin yer ve çay içer.",
          albanian: "Në mëngjes ha djathë, ullinj dhe pi çaj."
        },
        {
          turkish: "Saat sekizde evden çıkar ve otobüsle okula gider.",
          albanian: "Në orën tetë del nga shtëpia dhe shkon me autobus në shkollë."
        },
        {
          turkish: "Okulda yeni şeyler öğrenir ve arkadaşlarıyla konuşur.",
          albanian: "Në shkollë mëson gjëra të reja dhe flet me shokët e tij."
        },
        {
          turkish: "Akşam eve döner, akşam yemeği yer ve kitap okur.",
          albanian: "Në mbrëmje kthehet në shtëpi, ha darkë dhe lexon libër."
        },
        {
          turkish: "Gece saat on birde uyur.",
          albanian: "Në orën njëmbëdhjetë të natës fle."
        }
      ]
    }
  },
  {
    id: "a1_story_family",
    type: "story",
    level: "A1",
    titleTurkish: "Benim Ailem",
    titleAlbanian: "Familja Ime",
    descriptionAlbanian: "Prezantoni anëtarët e familjes suaj ose të dikujt tjetër duke përdorur përemrat pronorë.",
    icon: "family",
    perspectives: {
      firstPerson: [
        {
          turkish: "Benim adım Selim ve bu benim ailem.",
          albanian: "Emri im është Selim dhe kjo është familja ime."
        },
        {
          turkish: "Babam elli yaşında, o bir doktor ve çok çalışır.",
          albanian: "Babai im është pesëdhjetë vjeç, ai është doktor dhe punon shumë."
        },
        {
          turkish: "Annem kırk sekiz yaşında, o ev hanımı ve harika yemek yapar.",
          albanian: "Nëna ime është dyzet e tetë vjeç, ajo është shtëpiake dhe gatuan shkëlqyeshëm."
        },
        {
          turkish: "Bir kız kardeşim var, adı Merve ve lisede okuyor.",
          albanian: "Kam një motër, quhet Merve dhe studion në shkollë të mesme."
        },
        {
          turkish: "Hafta sonları birlikte pikniğe gideriz ve çok eğleniriz.",
          albanian: "Gjatë fundjavave shkojmë së bashku në piknik dhe argëtohemi shumë."
        },
        {
          turkish: "Ailemi çok seviyorum.",
          albanian: "E dua shumë familjen time."
        }
      ],
      thirdPerson: [
        {
          turkish: "Onun adı Selim ve bu onun ailesi.",
          albanian: "Emri i tij është Selim dhe kjo është familja e tij."
        },
        {
          turkish: "Babası elli yaşında, o bir doktor ve çok çalışır.",
          albanian: "Babai i tij është pesëdhjetë vjeç, ai është doktor datë dhe punon shumë."
        },
        {
          turkish: "Annesi kırk sekiz yaşında, o ev hanımı ve harika yemek yapar.",
          albanian: "Nëna e tij është dyzet e tetë vjeç, ajo është shtëpiake dhe gatuan shkëlqyeshëm."
        },
        {
          turkish: "Bir kız kardeşi var, adı Merve ve lisede okuyor.",
          albanian: "Ka një motër, quhet Merve dhe studion në shkollë të mesme."
        },
        {
          turkish: "Hafta sonları birlikte pikniğe giderler ve çok eğlenirler.",
          albanian: "Gjatë fundjavave shkojnë së bashku në piknik dhe argëtohen shumë."
        },
        {
          turkish: "Ailesini çok seviyor.",
          albanian: "E do shumë familjen e tij."
        }
      ]
    }
  },
  {
    id: "a1_story_neighborhood",
    type: "story",
    level: "A1",
    titleTurkish: "Evim ve Mahallem",
    titleAlbanian: "Shtëpia dhe Lagjja Ime",
    descriptionAlbanian: "Përshkruani shtëpinë tuaj dhe mjedisin përreth duke përdorur rasën lokative (vendi).",
    icon: "neighborhood",
    perspectives: {
      firstPerson: [
        {
          turkish: "İstanbul'da küçük bir evde yaşıyorum.",
          albanian: "Jetoj në një shtëpi të vogël në Stamboll."
        },
        {
          turkish: "Evimde iki oda, bir salon ve şirin bir balkon var.",
          albanian: "Në shtëpinë time ka dy dhoma, një salon dhe një ballkon të këndshëm."
        },
        {
          turkish: "Mahallem çok hareketli ve her yere yakın.",
          albanian: "Lagjja ime është shumë e gjallë dhe afër çdo vendi."
        },
        {
          turkish: "Evimin yanında büyük bir park ve fırın var.",
          albanian: "Pranë shtëpisë sime ka një park të madh dhe një furrë buke."
        },
        {
          turkish: "Her sabah fırından taze ekmek alırım ve parkta yürürüm.",
          albanian: "Çdo mëngjes blej bukë të freskët nga furra dhe eci në park."
        },
        {
          turkish: "Evimi ve mahallemi çok seviyorum.",
          albanian: "Shtëpinë dhe lagjen time i dua shumë."
        }
      ],
      thirdPerson: [
        {
          turkish: "Ahmet İstanbul'da küçük bir evde yaşıyor.",
          albanian: "Ahmeti jeton në një shtëpi të vogël në Stamboll."
        },
        {
          turkish: "Evinde iki oda, bir salon ve şirin bir balkon var.",
          albanian: "Në shtëpinë e tij ka dy dhoma, një salon dhe një ballkon të këndshëm."
        },
        {
          turkish: "Mahallesi çok hareketli ve her yere yakın.",
          albanian: "Lagjja e tij është shumë e gjallë dhe afër çdo vendi."
        },
        {
          turkish: "Evinin yanında büyük bir park ve fırın var.",
          albanian: "Pranë shtëpisë së tij ka një park të madh dhe një furrë buke."
        },
        {
          turkish: "Her sabah fırından taze ekmek alır ve parkta yürür.",
          albanian: "Çdo mëngjes blen bukë të freskët nga furra dhe ecën në park."
        },
        {
          turkish: "Evini ve mahallesini çok seviyor.",
          albanian: "Shtëpinë yard dhe lagjen e tij i do shumë."
        }
      ]
    }
  },
  {
    id: "a1_story_weekend",
    type: "story",
    level: "A1",
    titleTurkish: "Hafta Sonu Planları",
    titleAlbanian: "Planet e Fundjavës",
    descriptionAlbanian: "Mësoni si të tregoni planet aktive dhe aktivitetet e lira duke përdorur kohën e tashme.",
    icon: "weekend",
    perspectives: {
      firstPerson: [
        {
          turkish: "Hafta sonu geldiği için çok mutluyum.",
          albanian: "Jam shumë i lumtur që erdhi fundjava."
        },
        {
          turkish: "Bugün hava güneşli ve sıcak, dışarı çıkıyorum.",
          albanian: "Sot koha është me diell dhe ngrohtë, po dal jashtë."
        },
        {
          turkish: "Arkadaşlarımla Kadıköy'de buluşuyorum.",
          albanian: "Po takohem me shokët e mi në Kadikoj."
        },
        {
          turkish: "Birlikte deniz kenarında yürüyoruz ve dondurma yiyoruz.",
          albanian: "Së bashku ecim buzë detit dhe hamë akullore."
        },
        {
          turkish: "Akşam sinemaya gidiyoruz ve yeni bir film izliyoruz.",
          albanian: "Në mbrëmje shkojmë në kinema dhe shikojmë një film të ri."
        },
        {
          turkish: "Pazar günü ise evde kalıyorum ve dinleniyorum.",
          albanian: "Kurse të dielën qëndroj në shtëpi dhe pushoj."
        }
      ],
      thirdPerson: [
        {
          turkish: "Cem hafta sonu geldiği için çok mutlu.",
          albanian: "Cemi është shumë i lumtur që erdhi fundjava."
        },
        {
          turkish: "Bugün hava güneşli ve sıcak, dışarı çıkıyor.",
          albanian: "Sot koha është me diell ve ngrohtë, ai po del jashtë."
        },
        {
          turkish: "Arkadaşlarıyla Kadıköy'de buluşuyor.",
          albanian: "Po takohet me shokët e tij në Kadikoj."
        },
        {
          turkish: "Birlikte deniz kenarında yürüyorlar ve dondurma yiyorlar.",
          albanian: "Së bashku ecin buzë detit ve hanë akullore."
        },
        {
          turkish: "Akşam sinemaya gidiyorlar ve yeni bir film izliyorlar.",
          albanian: "Në mbrëmje shkojnë in kinema ve shikojnë një film të ri."
        },
        {
          turkish: "Pazar günü ise evde kalıyor ve dinleniyor.",
          albanian: "Kurse të dielën qëndron në shtëpi ve pushon."
        }
      ]
    }
  }
];
