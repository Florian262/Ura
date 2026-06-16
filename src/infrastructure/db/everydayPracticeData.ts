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
  },

  // --- A2 DIALOGUES ---
  {
    id: "a2_dialog_doctor",
    type: "dialog",
    level: "A2",
    titleTurkish: "Doktorda Muayene",
    titleAlbanian: "Vizita te Mjeku",
    descriptionAlbanian: "Praktikoni përshkrimin e simptomave të sëmundjes dhe bisedën me mjekun.",
    icon: "doctor",
    content: [
      {
        speaker: "Doktor",
        turkish: "Merhaba, şikayetiniz nedir? Geçmiş olsun.",
        albanian: "Tungjatjeta, cila është ankesa juaj? Të shkuara."
      },
      {
        speaker: "Hasta",
        turkish: "Teşekkür ederim. İki gündür kendimi çok halsiz hissediyorum. Başım ağrıyor ve öksürüyorum.",
        albanian: "Faleminderit. Ka dy ditë që ndihem shumë i pafuqishëm. Më dhemb koka dhe kam kollë."
      },
      {
        speaker: "Doktor",
        turkish: "Ateşinizi ölçelim. Evet, otuz sekiz derece. Boğazınız da biraz kızarmış.",
        albanian: "Le ta masim temperaturën tuaj. Po, tridhjetë e tetë gradë. Fyti juaj është gjithashtu pak i skuqur."
      },
      {
        speaker: "Hasta",
        turkish: "Ciddi bir şey var mı, doktor bey? Yarın işe gidebilir miyim?",
        albanian: "A ka diçka serioze, zoti mjek? A mund të shkoj në punë nesër?"
      },
      {
        speaker: "Doktor",
        turkish: "Hayır, ağır bir grip geçiriyorsunuz. En az üç gün evde dinlenmeniz gerekiyor.",
        albanian: "Jo, po kaloni një grip të rëndë. Ju duhet të pushoni në shtëpi të paktën tri ditë."
      },
      {
        speaker: "Hasta",
        turkish: "Peki, ilaç yazacak mısınız? Bunları nasıl kullanmalıyım?",
        albanian: "Mirë, a do të më shkruani barna? Si duhet t'i përdor këto?"
      },
      {
        speaker: "Doktor",
        turkish: "Evet, bir ağrı kesici ve şurup yazıyorum. Günde iki defa tok karnına içeceksiniz. Bol su tüketin.",
        albanian: "Po, po ju shkruaj një kundërdhembje (analgjezik) dhe shurup. Do t'i pini dy herë në ditë me barkun plot. Konsumoni shumë ujë."
      },
      {
        speaker: "Hasta",
        turkish: "Çok teşekkür ederim, doktor bey. İyi çalışmalar.",
        albanian: "Ju faleminderit shumë, zoti mjek. Punë të mbarë."
      },
      {
        speaker: "Doktor",
        turkish: "Rica ederim, kendinize iyi bakın. Tekrar geçmiş olsun.",
        albanian: "Ju lutem, kujdesuni për veten. Edhe një herë të shkuara."
      }
    ]
  },
  {
    id: "a2_dialog_hotel",
    type: "dialog",
    level: "A2",
    titleTurkish: "Otelde Giriş İşlemleri",
    titleAlbanian: "Regjistrimi në Hotel",
    descriptionAlbanian: "Mësoni si të kryeni regjistrimin në hotel dhe të kërkoni shërbime të ndryshme.",
    icon: "hotel",
    content: [
      {
        speaker: "Resepsiyonist",
        turkish: "İyi günler beyefendi, otelimize hoş geldiniz! Rezervasyonunuz var mıydı?",
        albanian: "Ditë të mbarë zotëri, mirë se vini në hotelin tonë! A kishit ndonjë rezervim?"
      },
      {
        speaker: "Müşteri",
        turkish: "Merhaba, iyi günler. Evet, internetten iki gecelik bir oda ayırtmıştım. Adım Can Yılmaz.",
        albanian: "Tungjatjeta, ditë të mbarë. Po, kisha rezervuar një dhomë për dy net në internet. Emri im është Can Yılmaz."
      },
      {
        speaker: "Resepsiyonist",
        turkish: "Kontrol ediyorum... Evet, Can Bey. Tek kişilik, deniz manzaralı odanız hazır. Kimliğinizi alabilir miyim?",
        albanian: "Po e kontrolloj... Po, zoti Can. Dhoma juaj teke me pamje nga deti është gati. A mund ta marr ID-në tuaj?"
      },
      {
        speaker: "Müşteri",
        turkish: "Tabii ki, buyurun kimliğim. Bir sorum olacaktı; kahvaltı saat kaçta başlıyor?",
        albanian: "Sigurisht, urdhëroni ID-në time. Kisha një pyetje; në çfarë ore fillon mëngjesi?"
      },
      {
        speaker: "Resepsiyonist",
        turkish: "Kahvaltı her sabah saat yedi ile on arasında zemin kattaki restoranda servis ediliyor.",
        albanian: "Mëngjesi shërbehet çdo mëngjes midis orës shtatë dhe dhjetë në restorantin në katin përdhes."
      },
      {
        speaker: "Müşteri",
        turkish: "Harika. Otelde kablosuz internet ücretsiz mi? Şifreyi öğrenebilir miyim?",
        albanian: "Shkëlqyeshëm. A është interneti pa tel falas në hotel? A mund ta mësoj fjalëkalimin?"
      },
      {
        speaker: "Resepsiyonist",
        turkish: "Evet, ücretsiz. Şifre bu kağıtta yazıyor: \"otel2026\". Odanızın anahtarı burada, dördüncü katta, oda numarası 402.",
        albanian: "Po, është falas. Fjalëkalimi është i shkruar në këtë letër: \"otel2026\". Çelësi i dhomës suaj është këtu, në katin e katërt, numri i dhomës 402."
      },
      {
        speaker: "Müşteri",
        turkish: "Teşekkürler. Bavullarımı odama kim çıkaracak?",
        albanian: "Faleminderit. Kush do t'i ngjisë valixhet e mia në dhomë?"
      },
      {
        speaker: "Resepsiyonist",
        turkish: "Görevli arkadaşımız size yardımcı olacak ve bavullarınızı hemen çıkaracaktır. İyi tatiller dilerim!",
        albanian: "Shoku ynë përgjegjës do t'ju ndihmojë dhe do t'i ngjisë valixhet tuaja menjëherë. Ju uroj pushime të mbarë!"
      },
      {
        speaker: "Müşteri",
        turkish: "Çok teşekkürler, iyi günler.",
        albanian: "Shumë faleminderit, ditë të mbarë."
      }
    ]
  },

  // --- A2 STORIES ---
  {
    id: "a2_story_vacation",
    type: "story",
    level: "A2",
    titleTurkish: "Unutulmaz Bir Yaz Tatili",
    titleAlbanian: "Pushime Verore të Paharrueshme",
    descriptionAlbanian: "Lexoni rreth një udhëtimi veror në të kaluarën duke krahasuar vetën e parë dhe të tretë të foljeve.",
    icon: "travel",
    perspectives: {
      firstPerson: [
        {
          turkish: "Geçen yaz ailemle birlikte güzel bir tatil planladık ve Muğla'ya gittik.",
          albanian: "Vitin e kaluar në verë planifikuam një pushim të bukur me familjen time dhe shkuam në Mugla."
        },
        {
          turkish: "Orada küçük ve sakin bir pansiyonda beş gün kaldık.",
          albanian: "Aty qëndruam pesë ditë në një pension të vogël dhe të qetë."
        },
        {
          turkish: "Her sabah erken uyandık ve masmavi denizde bol bol yüzdük.",
          albanian: "Çdo mëngjes u zgjuam herët dhe notuam shumë në detin e kaltër."
        },
        {
          turkish: "Öğleden sonra tarihi yerleri ziyaret ettik ve yöresel yemekler yedik.",
          albanian: "Pasdite vizituam vende historike dhe hëngrëm ushqime lokale."
        },
        {
          turkish: "Bir akşam tekne turuna katıldık ve harika koyları gezdik.",
          albanian: "Një mbrəmje morëm pjesë në një xhiro me anije dhe vizituam gjire të mrekullueshme."
        },
        {
          turkish: "Bu tatilde hem çok dinlendim hem de yeni yerler keşfettim.",
          albanian: "Në këto pushime edhe u çlodha shumë, edhe zbulova vende të reja."
        },
        {
          turkish: "Eve dönerken kendimi çok mutlu ve enerjik hissediyordum.",
          albanian: "Kur po kthehesha në shtëpi, ndihesha shumë i lumtur den energjik."
        }
      ],
      thirdPerson: [
        {
          turkish: "Geçen yaz ailesiyle birlikte güzel bir tatil planladı ve Muğla'ya gitti.",
          albanian: "Vitin e kaluar në verë planifikoi një pushim të bukur me familjen e tij dhe shkoi në Mugla."
        },
        {
          turkish: "Orada küçük ve sakin bir pansiyonda beş gün kaldılar.",
          albanian: "Aty qëndruan pesë ditë në një pension të vogël dhe të qetë."
        },
        {
          turkish: "Her sabah erken uyandılar ve masmavi denizde bol bol yüzdüler.",
          albanian: "Çdo mëngjes u zgjuan herët dhe notuan shumë në detin e kaltër."
        },
        {
          turkish: "Öğleden sonra tarihi yerleri ziyaret ettiler ve yöresel yemekler yediler.",
          albanian: "Pasdite vizituan vende historike dhe hëngrëm ushqime lokale."
        },
        {
          turkish: "Bir akşam tekne turuna katıldılar ve harika koyları gezdiler.",
          albanian: "Një mbrëmje morëm pjesë në një xhiro me anije dhe vizituan gjire të mrekullueshme."
        },
        {
          turkish: "Bu tatilde hem çok dinlendi hem de yeni yerler keşfetti.",
          albanian: "Në këto pushime edhe u çlodh shumë, edhe zbuloi vende të reja."
        },
        {
          turkish: "Eve dönerken kendisini çok mutlu ve enerjik hissediyordu.",
          albanian: "Kur po kthehej në shtëpi, ndihej shumë i lumtur dhe energjik."
        }
      ]
    }
  },
  {
    id: "a2_story_future",
    type: "story",
    level: "A2",
    titleTurkish: "Gelecek Hayallerim ve Planlarım",
    titleAlbanian: "Ëndrrat dhe Planet e mia për të Ardhmen",
    descriptionAlbanian: "Mësoni si të shprehni synimet e karrierës dhe planet e ardhshme duke përdorur kohën e ardhme.",
    icon: "future",
    perspectives: {
      firstPerson: [
        {
          turkish: "Gelecek yıl üniversiteden mezun olacağım ve iş aramaya başlayacağım.",
          albanian: "Vitin e ardhshëm do të diplomohem në universitet dhe do të filloj të kërkoj punë."
        },
        {
          turkish: "Mezuniyetten sonra iyi bir şirkette bilgisayar mühendisi olarak çalışmak istiyorum.",
          albanian: "Pas diplomimit dua të punoj si inxhinier kompjuteri në një kompani të mirë."
        },
        {
          turkish: "Bu yüzden şimdiden yabancı dil öğreniyorum ve kendimi geliştiriyorum.",
          albanian: "Prandaj që tani po mësoj gjuhë të huaj dhe po zhvilloj veten."
        },
        {
          turkish: "Gelecekte büyük bir şehirde yaşayacağım ve kendi evimi satın alacağım.",
          albanian: "Në të ardhmen do të jetoj në një qytet të madh dhe do të blej shtëpinë time."
        },
        {
          turkish: "Ayrıca her yıl yeni bir ülkeye seyahat edeceğim ve farklı kültürler tanıyacağım.",
          albanian: "Gjithashtu çdo vit do të udhëtoj në një shtet të ri dhe do të njoh kultura të ndryshme."
        },
        {
          turkish: "Planlarımı gerçekleştirmek için çok çalışacağım ve asla pes etmeyeceğim.",
          albanian: "Për të realizuar planet e mia do të punoj shumë dhe nuk do të dorëzohem kurrë."
        }
      ],
      thirdPerson: [
        {
          turkish: "Gelecek yıl üniversiteden mezun olacak ve iş aramaya başlayacak.",
          albanian: "Vitin e ardhshëm do të diplomohet në universitet dhe do të fillojë të kërkojë punë."
        },
        {
          turkish: "Mezuniyetten sonra iyi bir şirkette bilgisayar mühendisi olarak çalışmak istiyor.",
          albanian: "Pas diplomimit dëshiron të punojë si inxhinier kompjuteri në një kompani të mirë."
        },
        {
          turkish: "Bu yüzden şimdiden yabancı dil öğreniyor ve kendisini geliştiriyor.",
          albanian: "Prandaj që tani po mëson gjuhë të huaj dhe po zhvillon veten."
        },
        {
          turkish: "Gelecekte büyük bir şehirde yaşayacak ve kendi evimi satın alacak.",
          albanian: "Në të ardhmen do të jetojë në një qytet të madh dhe do të blejë shtëpinë e tij."
        },
        {
          turkish: "Ayrıca her yıl yeni bir ülkeye seyahat edecek ve farklı kültürler tanıyacak.",
          albanian: "Gjithashtu çdo vit do të udhëtojë në një shtet të ri dhe do të njohë kultura të ndryshme."
        },
        {
          turkish: "Planlarını gerçekleştirmek için çok çalışacak ve asla pes etmeyecek.",
          albanian: "Për të realizuar planet e tij do të punojë shumë dhe nuk do të dorëzohet kurrë."
        }
      ]
    }
  },
  {
    id: "a2_dialog_rent_car",
    type: "dialog",
    level: "A2",
    titleTurkish: "Araba Kiralamak",
    titleAlbanian: "Marrja e Veturës me Qira",
    descriptionAlbanian: "Praktikoni bisedën për marrjen e një veture me qira dhe kushtet e saj.",
    icon: "taxi",
    content: [
      {
        speaker: "Görevli",
        turkish: "Merhaba! Rent-a-car ofisimize hoş geldiniz. Nasıl yardımcı olabilirim?",
        albanian: "Tungjatjeta! Mirë se vini në zyrën tonë të rent-a-car. Si mund t'ju ndihmoj?"
      },
      {
        speaker: "Müşteri",
        turkish: "Merhaba. Üç günlüğüne ekonomik bir araba kiralamak istiyorum. Fiyatı ne kadar?",
        albanian: "Tungjatjeta. Dua të marr me qira një veturë ekonomike për tri ditë. Sa është çmimi?"
      },
      {
        speaker: "Görevli",
        turkish: "Günlük ücretimiz dört yüz liradır. Sigorta da bu fiyata dahildir. Ehliyetiniz var mı?",
        albanian: "Tarifa jonë ditore është katërqind lira. Sigurimi është gjithashtu i përfshirë në këtë çmim. A keni patentë shoferi?"
      },
      {
        speaker: "Müşteri",
        turkish: "Evet, beş yıllık ehliyetim var. Araba benzinli mi yoksa dizel mi?",
        albanian: "Po, kam patentë shoferi pesëvjeçare. A është vetura me benzinë apo me naftë (dizel)?"
      },
      {
        speaker: "Görevli",
        turkish: "Bu arabamız dizel ve manuel vitesli. Depoyu dolu veriyoruz, dolu geri alıyoruz.",
        albanian: "Kjo vetura jonë është me naftë dhe ndërrues manual. Rezervuarin e japim plot dhe e marrim plot mbrapsht."
      },
      {
        speaker: "Müşteri",
        turkish: "Harika, anlaştık. Ödemeyi kredi kartıyla yapabilir miyim?",
        albanian: "Shkëlqyeshëm, u morëm vesh. A mund ta bëj pagesën me kartë krediti?"
      },
      {
        speaker: "Görevli",
        turkish: "Tabii ki. Lütfen bu sözleşmeyi imzalayın ve kimliğinizi gösterin.",
        albanian: "Sigurisht. Ju lutem nënshkruani këtë kontratë dhe tregoni letërnjoftimin tuaj."
      },
      {
        speaker: "Müşteri",
        turkish: "Buyurun kartım ve kimliğim. Arabayı nereden teslim alacağım?",
        albanian: "Urdhëroni kartën dhe letërnjoftimin tim. Ku do ta marr veturën?"
      },
      {
        speaker: "Görevli",
        turkish: "Otopark görevlimiz size anahtarı verecek ve arabayı teslim edecektir. İyi yolculuklar!",
        albanian: "Punonjësi ynë i parkimit do t'ju japë çelësin dhe do t'ju dorëzojë veturën. Rrugë të mbarë!"
      },
      {
        speaker: "Müşteri",
        turkish: "Çok teşekkürler, iyi günler.",
        albanian: "Shumë faleminderit, ditë të mbarë."
      }
    ]
  },
  {
    id: "a2_dialog_restaurant_complaint",
    type: "dialog",
    level: "A2",
    titleTurkish: "Restoranda Şikayet",
    titleAlbanian: "Ankesë në Restorant",
    descriptionAlbanian: "Mësoni si të shprehni një ankesë për ushqimin dhe të zgjidhni problemet me shërbimin.",
    icon: "cafe",
    content: [
      {
        speaker: "Müşteri",
        turkish: "Garson bey, bakar mısınız lütfen? Bir sorunumuz var.",
        albanian: "Zoti kamarier, a mund të shikoni ju lutem? Kemi një problem."
      },
      {
        speaker: "Garson",
        turkish: "Buyurun efendim, sorun nedir? Yardımcı olayım.",
        albanian: "Urdhëroni zotëri, cili është problemi? T'ju ndihmoj."
      },
      {
        speaker: "Müşteri",
        turkish: "Çorbamız geldi ama maalesef çok soğuk. Ayrıca tuzsuz.",
        albanian: "Supa jonë erdhi por fatkeqësisht është shumë e ftohtë. Gjithashtu është pa kripë."
      },
      {
        speaker: "Garson",
        turkish: "Çok özür dilerim efendim, mutfakta bir hata olmuş olmalı. Hemen sıcak bir çorba getiriyorum.",
        albanian: "Kërkoj shumë ndjesë zotëri, duhet të ketë ndodhur një gabim në kuzhinë. Po sjell menjëherë një supë të ngrohtë."
      },
      {
        speaker: "Müşteri",
        turkish: "Teşekkürler. Bir de patates kızartması istemiştik ama o hala gelmedi.",
        albanian: "Faleminderit. Kishim kërkuar edhe patate të skuqura, por ato ende nuk kanë ardhur."
      },
      {
        speaker: "Garson",
        turkish: "Hemen şefe iletiyorum. On beş dakika içinde masanızda olacaktır.",
        albanian: "Po ia përcjell menjëherë shefit. Do të jetë në tryezën tuaj brenda pesëmbëdhjetë minutave."
      },
      {
        speaker: "Müşteri",
        turkish: "Peki, çorba geldikten sonra yiyelim. Lütfen biraz acele edin, çok açız.",
        albanian: "Mirë, le ta hamë pasi të vijë supa. Ju lutem nxitoni pak, jemi shumë të uritur."
      },
      {
        speaker: "Garson",
        turkish: "Anlıyorum efendim. Gecikme için tekrar özür dilerim. Bu içecekler müessesemizin ikramıdır.",
        albanian: "E kuptoj zotëri. Ju kërkoj ndjesë përsëri për vonesën. Këto pije janë dhuratë nga lokali ynë."
      },
      {
        speaker: "Müşteri",
        turkish: "Nazikliğiniz için teşekkürler.",
        albanian: "Faleminderit për mirësjelljen tuaj."
      }
    ]
  },
  {
    id: "a2_story_business_trip",
    type: "story",
    level: "A2",
    titleTurkish: "Ankara'da İş Gezisi",
    titleAlbanian: "Udhëtim Pune në Ankara",
    descriptionAlbanian: "Lexoni rreth një udhëtimi të kaluar pune duke parë ndryshimet e foljeve sipas vetave gramatikore.",
    icon: "travel",
    perspectives: {
      firstPerson: [
        {
          turkish: "Geçen hafta şirketim için önemli bir iş gezisine çıktım ve Ankara'ya uçtum.",
          albanian: "Javën e kaluar ndërmora një udhëtim të rëndësishëm pune për kompaninë time dhe fluturova për në Ankara."
        },
        {
          turkish: "Ankara'da büyük bir otelde kaldım ve üç gün boyunca toplantılara katıldım.",
          albanian: "Në Ankara qëndrova në një hotel të madh dhe mora pjesë në mbledhje për tri ditë."
        },
        {
          turkish: "Yeni müşterilerle görüştüm ve şirketimin projelerini anlattım.",
          albanian: "U takova me klientë të rinj dhe shpjegova projektet e kompanisë sime."
        },
        {
          turkish: "Salı akşamı Ankara Kalesi'ni gezdim ve orada yöresel yemekler yedim.",
          albanian: "Të martën në mbrëmje vizitova Kalanë e Ankarasë dhe hëngra ushqime lokale atje."
        },
        {
          turkish: "Gezi çok yorucu geçti ama başarılı iş anlaşmaları yaptım.",
          albanian: "Udhëtimi kaloi shumë i lodhshëm por bëra marrëveshje të suksesshme pune."
        },
        {
          turkish: "Cuma günü uçağa bindim ve evime geri döndüm.",
          albanian: "Të premten hypa në aeroplan dhe u ktheva në shtëpinë time."
        }
      ],
      thirdPerson: [
        {
          turkish: "Geçen hafta şirketi için önemli bir iş gezisine çıktı ve Ankara'ya uçtu.",
          albanian: "Javën e kaluar ndërmori një udhëtim të rëndësishëm pune për kompaninë e tij dhe fluturoi për në Ankara."
        },
        {
          turkish: "Ankara'da büyük bir otelde kaldı ve üç gün boyunca toplantılara katıldı.",
          albanian: "Në Ankara qëndroi në një hotel të madh dhe mori pjesë në mbledhje për tri ditë."
        },
        {
          turkish: "Yeni müşterilerle görüştü ve şirketinin projelerini anlattı.",
          albanian: "U takua me klientë të rinj dhe shpjegoi projektet e kompanisë së tij."
        },
        {
          turkish: "Salı akşamı Ankara Kalesi'ni gezdi ve orada yöresel yemekler yedi.",
          albanian: "Të martën në mbrëmje vizitoi Kalanë e Ankarasë dhe hëngri ushqime lokale atje."
        },
        {
          turkish: "Gezi çok yorucu geçti ama başarılı iş anlaşmaları yaptı.",
          albanian: "Udhëtimi kaloi shumë i lodhshëm por bëri marrëveshje të suksesshme pune."
        },
        {
          turkish: "Cuma günü uçağa bindi ve evine geri döndü.",
          albanian: "Të premten hypi në aeroplan dhe u kthye në shtëpinë e tij."
        }
      ]
    }
  },
  {
    id: "a2_story_learning_language",
    type: "story",
    level: "A2",
    titleTurkish: "Türkçe Öğreniyorum",
    titleAlbanian: "Po Mësoj Turqisht",
    descriptionAlbanian: "Mësoni si të tregoni synimet për mësimin e gjuhës dhe planet e ardhshme duke përdorur kohën e ardhme.",
    icon: "future",
    perspectives: {
      firstPerson: [
        {
          turkish: "Gelecek ay yeni bir Türkçe kursuna başlayacağım ve çok ders çalışacağım.",
          albanian: "Muajin e ardhshëm do të filloj një kurs të ri të turqishtes dhe do të studioj shumë."
        },
        {
          turkish: "Her gün yeni kelimeler öğreneceğim ve Türkçe videolar izleyeceğim.",
          albanian: "Çdo ditë do të mësoj fjalë të reja dhe do të shikoj video turqisht."
        },
        {
          turkish: "Kurstaki arkadaşlarımla sürekli Türkçe konuşacağım ve pratik yapacağım.",
          albanian: "Me shokët e kursit do të flas vazhdimisht turqisht dhe do të praktikoj."
        },
        {
          turkish: "Yaz tatilinde İstanbul'a gideceğim ve orada insanlarla sohbet edeceğim.",
          albanian: "Gjatë pushimeve verore do të shkoj në Stamboll dhe do të bisedoj me njerëz atje."
        },
        {
          turkish: "Bu dili kısa sürede çok iyi konuşacağım çünkü Türkiye'yi çok seviyorum.",
          albanian: "Këtë gjuhë do ta flas shumë mirë në një kohë të shkurtër sepse e dua shumë Turqinë."
        },
        {
          turkish: "Hayalimi gerçekleştirmek için asla vazgeçmeyeceğim.",
          albanian: "Për të realizuar ëndrrën time nuk do të dorëzohem kurrë."
        }
      ],
      thirdPerson: [
        {
          turkish: "Gelecek ay yeni bir Türkçe kursuna başlayacak ve çok ders çalışacak.",
          albanian: "Muajin e ardhshëm do të fillojë një kurs të ri të turqishtes dhe do të studiojë shumë."
        },
        {
          turkish: "Her gün yeni kelimeler öğrenecek ve Türkçe videolar izleyecek.",
          albanian: "Çdo ditë do të mësojë fjalë të reja dhe do të shikojë video turqisht."
        },
        {
          turkish: "Kurstaki arkadaşlarıyla sürekli Türkçe konuşacak ve pratik yapacak.",
          albanian: "Me shokët e kursit do të flasë vazhdimisht turqisht dhe do të praktikojë."
        },
        {
          turkish: "Yaz tatilinde İstanbul'a gidecek ve orada insanlarla sohbet edecek.",
          albanian: "Gjatë pushimeve verore do të shkojë në Stamboll dhe do të bisedojë me njerëz atje."
        },
        {
          turkish: "Bu dili kısa sürede çok iyi konuşacak çünkü Türkiye'yi çok seviyor.",
          albanian: "Këtë gjuhë do ta flasë shumë mirë në një kohë të shkurtër sepse e do shumë Turqinë."
        },
        {
          turkish: "Hayalini gerçekleştirmek için asla vazgeçmeyecek.",
          albanian: "Për të realizuar ëndrrën e tij nuk do të dorëzohet kurrë."
        }
      ]
    }
  },
  // --- B1 DIALOGUES ---
  {
    id: "b1_dialog_bank",
    type: "dialog",
    level: "B1",
    titleTurkish: "Bankada Hesap Açmak",
    titleAlbanian: "Hapja e Llogarisë në Bankë",
    descriptionAlbanian: "Praktikoni bisedën me nëpunësin e bankës për hapjen e llogarive dhe përdorimin e shërbimeve dixhitale.",
    icon: "bank",
    content: [
      {
        speaker: "Banka Görevlisi",
        turkish: "Merhabalar efendim! Yapı Kredi Bankası'na hoş geldiniz. Bugün size nasıl yardımcı olabilirim?",
        albanian: "Përshëndetje zotëri/zonjë! Mirë se vini në Yapı Kredi Bank. Si mund t'ju ndihmoj sot?"
      },
      {
        speaker: "Müşteri",
        turkish: "Merhaba. Hem Türk lirası hem de avro için vadesiz mevduat hesabı açtırmak istiyordum. Hangi belgeler gerekiyor?",
        albanian: "Tungjatjeta. Doja të hapja një llogari rrjedhëse si në lira turke ashtu edhe në euro. Çfarë dokumentesh nevojiten?"
      },
      {
        speaker: "Banka Görevlisi",
        turkish: "Tabii ki. İşlemlerimizi başlatabilmemiz için geçerli bir kimlik kartı veya pasaport ile ikametgah belgenizin olması yeterlidir.",
        albanian: "Sigurisht. Që të mund të fillojmë procedurat tona mjafton të keni një kartë identiteti ose pasaportë të vlefshme dhe dëshminë e vendbanimit."
      },
      {
        speaker: "Müşteri",
        turkish: "Pasaportum yanımda, ikametgah belgemi de e-devlet üzerinden hemen indirebilirim. Peki, hesap işletim ücreti alıyor musunuz?",
        albanian: "Pasaportën e kam me vete, kurse dëshminë e vendbanimit mund ta shkarkoj menjëherë përmes e-devlet. Po tarifë për mirëmbajtjen e llogarisë a aplikoni?"
      },
      {
        speaker: "Banka Görevlisi",
        turkish: "Hayır, bireysel vadesiz hesaplarımızdan herhangi bir işletim ücreti kesmiyoruz. Ayrıca mobil bankacılık uygulamamızı kullanarak EFT ve havale işlemlerinizi ücretsiz yapabilirsiniz.",
        albanian: "Jo, nuk ndalim asnjë tarifë mirëmbajtjeje nga llogaritë tona rrjedhëse individuale. Gjithashtu, duke përdorur aplikacionin tonë të bankës në celular mund t'i kryeni transfertat tuaja EFT dhe havale falas."
      },
      {
        speaker: "Müşteri",
        turkish: "Bu çok iyi. Bir de internet alışverişlerinde kullanmak üzere bir kredi kartı başvurusunda bulunmak istiyorum.",
        albanian: "Kjo është shumë mirë. Gjithashtu do të dëshiroja të bëja një aplikim për kartë krediti për ta përdorur në blerjet në internet."
      },
      {
        speaker: "Banka Görevlisi",
        turkish: "Memnuniyetle. Kredi kartı talebinizi de hemen sisteme giriyorum. Kartınız onaylandıktan sonra adresinize kurye ile teslim edilecektir.",
        albanian: "Me kënaqësi. Po e fus në sistem menjëherë edhe kërkesën tuaj për kartë krediti. Pasi të miratohet karta, do t'ju dorëzohet në adresën tuaj me korrier."
      },
      {
        speaker: "Müşteri",
        turkish: "Çok teşekkür ederim. Mobil uygulama için geçici bir şifre alabilir miyim?",
        albanian: "Ju faleminderit shumë. A mund të marr një fjalëkalim të përkohshëm për aplikacionin në celular?"
      },
      {
        speaker: "Banka Görevlisi",
        turkish: "Evet, telefonunuza sms olarak gönderdim. Giriş yaptıktan sonra şifrenizi güvenliğiniz için değiştirmeniz gerekmektedir.",
        albanian: "Po, jua dërgova në telefon si sms. Pasi të hyni, duhet ta ndryshoni fjalëkalimin për sigurinë tuaj."
      },
      {
        speaker: "Müşteri",
        turkish: "Anladım, ilginiz ve yardımınız için çok teşekkürler. İyi günler.",
        albanian: "E kuptova, faleminderit shumë për vëmendjen dhe ndihmën tuaj. Ditë të mbarë."
      }
    ]
  },
  {
    id: "b1_dialog_interview",
    type: "dialog",
    level: "B1",
    titleTurkish: "İş Görüşmesi ve Kariyer",
    titleAlbanian: "Intervista e Punës dhe Karriera",
    descriptionAlbanian: "Praktikoni bisedën në një mjedis profesional duke prezantuar përvojën tuaj dhe duke diskutuar kushtet e punës.",
    icon: "job",
    content: [
      {
        speaker: "İnsan Kaynakları",
        turkish: "Merhaba Ahmet Bey, görüşmemize hoş geldiniz. Özgeçmişinizi inceledik ve deneyimleriniz oldukça ilgimizi çekti.",
        albanian: "Përshëndetje zoti Ahmet, mirë se vini në takimin tonë. E shqyrtuam jetëshkrimin tuaj dhe përvojat tuaja na tërhoqën mjaft interesin."
      },
      {
        speaker: "Aday",
        turkish: "Merhaba Merve Hanım, teşekkür ederim. Ben de sizin gibi yenilikçi bir teknoloji şirketiyle çalışmayı çok istiyorum.",
        albanian: "Përshëndetje zonja Merve, faleminderit. Edhe unë dëshiroj shumë të punoj me një kompani teknologjike inovative si e juaja."
      },
      {
        speaker: "İnsan Kaynakları",
        turkish: "Harika. Bize üzerinde çalıştığınız son web yazılım projesinden ve oradaki teknik sorumluluklarınızdan bahseder misiniz?",
        albanian: "Shkëlqyeshëm. A na flisni pak për projektin e fundit të softuerit web në të cilin keni punuar dhe për përgjegjësitë tuaja teknike atje?"
      },
      {
        speaker: "Aday",
        turkish: "Tabii ki. Son projemizde React ve Node.js teknolojilerini kullandık. Ben hem veritabanı yönetiminden hem de kullanıcı arayüzünün geliştirilmesinden sorumluydum.",
        albanian: "Sigurisht. Në projektin tonë të fundit përdorëm teknologjitë React dhe Node.js. Unë isha përgjegjës si për menaxhimin e bazës së të dhënave ashtu edhe për zhvillimin e ndërfaqes së përdoruesit."
      },
      {
        speaker: "İnsan Kaynakları",
        turkish: "Çok güzel. Peki, yoğun çalışma dönemlerinde stresinizi nasıl yönetiyorsunuz? Takım içindeki iş birliğine nasıl katkı sağlarsınız?",
        albanian: "Shumë mirë. Po si e menaxhoni stresin tuaj gjatë periudhave të ngarkuara të punës? Si kontribuoni në bashkëpunimin brenda skuadrës?"
      },
      {
        speaker: "Aday",
        turkish: "Stresli durumlarda planlı çalışmaya özen gösteririm ve görevleri önem sırasına göre bölerim. İletişime açık olduğum için ekibimle her sorunu konuşarak çözerim.",
        albanian: "Në situata stresuese tregoj kujdes të punoj në mënyrë të planifikuar dhe i ndaj detyrat sipas rëndësisë. Duke qenë se jam i hapur për komunikim, çdo problem e zgjidh duke biseduar me ekipin tim."
      },
      {
        speaker: "İnsan Kaynakları",
        turkish: "Peki, çalışma modelimiz hakkında ne düşünüyorsunuz? Şirketimizde hibrit model uygulanıyor; haftada iki gün ofise gelmeniz gerekiyor.",
        albanian: "Po për modelin tonë të punës çfarë mendoni? Në kompaninë tonë aplikohet modeli hibrit; ju duhet të vini në zyrë dy ditë në javë."
      },
      {
        speaker: "Aday",
        turkish: "Hibrit çalışma modeli benim için son derece uygun. Hem evden verimli çalışabiliyorum hem de ofiste ekiple bir araya gelmeyi seviyorum.",
        albanian: "Modeli hibrit i punës është jashtëzakonisht i përshtatshëm për mua. Unë mund të punoj në mënyrë produktive nga shtëpia, por gjithashtu më pëlqen të mblidhem me ekipin në zyrë."
      },
      {
        speaker: "İnsan Kaynakları",
        turkish: "Çok iyi. Sorularınız bittiyse size maaş beklentinizi sormak istiyorum. Ayrıca yan haklar hakkındaki düşünceleriniz nelerdir?",
        albanian: "Shumë mirë. Nëse pyetjet tuaja kanë mbaruar, do të dëshiroja t'ju pyesja për pritshmëritë tuaja për pagën. Gjithashtu, cilat janë mendimet tuaja për përfitimet shtesë?"
      },
      {
        speaker: "Aday",
        turkish: "Niteliklerime uygun, sektör ortalamasında bir maaş bekliyorum. Özel sağlık sigortası ve yemek kartı gibi yan haklar da benim için önemlidir.",
        albanian: "Pres një pagë të përshtatshme me kualifikimet e mia, në mesataren e sektorit. Përfitimet shtesë si sigurimi shëndetësor privat dhe karta e ushqimit janë gjithashtu të rëndësishme për mua."
      },
      {
        speaker: "İnsan Kaynakları",
        turkish: "Değerlendirip size en kısa sürede geri dönüş yapacağız. Katıldığınız için teşekkür ederiz.",
        albanian: "Do ta vlerësojmë dhe do t'ju kthejmë përgjigje në një kohë sa më të shkurtër. Ju faleminderit që morët pjesë."
      }
    ]
  },
  {
    id: "b1_dialog_realtor",
    type: "dialog",
    level: "B1",
    titleTurkish: "Emlakçı ile Ev Arama",
    titleAlbanian: "Kërkimi i Shtëpisë me Emlakçi",
    descriptionAlbanian: "Bisedoni për kërkesat e qirasë së shtëpisë, vendndodhjen, sistemin e ngrohjes dhe detajet e kontratës.",
    icon: "home",
    content: [
      {
        speaker: "Emlakçı",
        turkish: "Hoş geldiniz Elif Hanım! Nasıl bir daire arıyordunuz? Kiralık mı, satılık mı?",
        albanian: "Mirë se vini zonja Elif! Çfarë lloj banese po kërkonit? Me qira, apo për shitje?"
      },
      {
        speaker: "Müşteri",
        turkish: "Hoş bulduk. Metro istasyonuna yakın, iki oda bir salon kiralık bir ev arıyorum. Bütçem en fazla yirmi bin lira.",
        albanian: "Mirë se ju gjeta. Po kërkoj një shtëpi me qira 2+1 (dy dhoma dhe një sallon) afër stacionit të metrosë. Buxheti im është më së shumti njëzet mijë lira."
      },
      {
        speaker: "Emlakçı",
        turkish: "Elimizde tam istediğiniz gibi çok güzel bir seçenek var. Metroya sadece beş dakika yürüme mesafesinde, doğalgazlı ve kombili bir daire.",
        albanian: "Kemi në dorë një opsion shumë të bukur pikërisht ashtu siç dëshironi. Një banesë me gaz natyror dhe kombi (ngrohje qendrore), vetëm pesë minuta ecje distancë nga metroja."
      },
      {
        speaker: "Müşteri",
        turkish: "Harika görünüyor! Daire kaçıncı katta ve binanın asansörü var mı? Aidat bedeli ne kadar?",
        albanian: "Duket shkëlqyeshëm! Në cilin kat është banesa dhe a ka ashensor ndërtesa? Sa është kostoja e mirëmbajtjes (aidat)?"
      },
      {
        speaker: "Emlakçı",
        turkish: "Daire üçüncü katta, binada çift asansör mevcuttur. Aylık aidat ücreti ise bin liradır. Apartman temizliği ve çevre bakımı bu ücrete dahildir.",
        albanian: "Banesa është në katin e tretë, ndërtesa ka ashensor të dyfishtë. Kurse pagesa mujore e mirëmbajtjes është një mijë lira. Pastrimi i pallatit dhe mirëmbajtja e mjedisit janë të përfshira në këtë tarifë."
      },
      {
        speaker: "Müşteri",
        turkish: "Peki, ev sahibi depozito olarak ne kadar istiyor? Kontratı kaç yıllık yapabiliyoruz?",
        albanian: "Mirë, sa kërkon pronari i shtëpisë si depozitë? Për sa vite mund ta bëjmë kontratën?"
      },
      {
        speaker: "Emlakçı",
        turkish: "Ev sahibi bir kira bedeli depozito ve bir kira peşin istiyor. Kira sözleşmesini standart olarak bir yıllık imzalıyoruz, her yıl tefe-tüfe oranında artış yapılıyor.",
        albanian: "Pronari kërkon një qira si depozitë dhe një qira parapagim. Kontratën e qirasë si standard e nënshkruajmë për një vit, çdo vit bëhet rritje sipas shkallës së inflacionit (tefe-tüfe)."
      },
      {
        speaker: "Müşteri",
        turkish: "Tamam, koşullar bana oldukça makul geldi. Evi ne zaman görebiliriz? Kiracı çıkmış mı?",
        albanian: "Rregull, kushtet më duken mjaft të arsyeshme. Kur mund ta shohim shtëpinë? A ka dalë qiramarrësi i mëparshëm?"
      },
      {
        speaker: "Emlakçı",
        turkish: "Evet, daire tamamen boş durumdadır. İsterseniz hemen gidip evi birlikte inceleyebiliriz.",
        albanian: "Po, banesa është krejtësisht e zbrazët. Nëse dëshironi, mund të shkojmë menjëherë ta inspektojmë shtëpinë së bashku."
      },
      {
        speaker: "Müşteri",
        turkish: "Çok memnun olurum, hemen gidelim lütfen.",
        albanian: "Do të gëzohesha shumë, le të shkojmë menjëherë ju lutem."
      }
    ]
  },
  {
    id: "b1_dialog_repair",
    type: "dialog",
    level: "B1",
    titleTurkish: "Teknik Servis ve Tamir",
    titleAlbanian: "Shërbimi Teknik dhe Riparimi",
    descriptionAlbanian: "Praktikoni sqarimin e defekteve të pajisjeve elektronike, pagesave të riparimit dhe kushteve të garancisë.",
    icon: "repair",
    content: [
      {
        speaker: "Tekniker",
        turkish: "Merhaba Selin Hanım. Bilgisayarınızın şikayeti tam olarak neydi? Nasıl bir arıza yaşıyorsunuz?",
        albanian: "Përshëndetje zonja Selin. Cila ishte saktësisht ankesa për kompjuterin tuaj? Çfarë lloj defekti po përjetoni?"
      },
      {
        speaker: "Müşteri",
        turkish: "Merhaba Cem Bey. Dizüstü bilgisayarım son zamanlarda aşırı ısınıyor ve kendi kendine kapanıyor. Ayrıca ekranda bazen çizgiler çıkıyor.",
        albanian: "Përshëndetje zoti Cem. Laptopi im kohët e fundit po nxehet jashtë mase dhe fiket vetvetiu. Gjithashtu në ekran ndonjëherë dalin vija."
      },
      {
        speaker: "Tekniker",
        turkish: "Anladım. Aşırı ısınma sorunu genellikle fan tıkanıklığından veya termal macunun kurumasından kaynaklanır. Ekrandaki çizgiler ise ekran kartı arızasına işaret edebilir.",
        albanian: "E kuptova. Problemi i nxehjes së tepërt zakonisht vjen nga bllokimi i ventilatorit (fan) ose nga tharja e pastës termike. Kurse vijat në ekran mund të tregojnë një defekt të kartës grafike."
      },
      {
        speaker: "Müşteri",
        turkish: "Cihazımın garantisi devam ediyor. Bu işlemler garanti kapsamında ücretsiz olarak yapılır mı?",
        albanian: "Pajisja ime është ende në garanci. A kryhen këto procedura falas nën ombrellën e garancisë?"
      },
      {
        speaker: "Tekniker",
        turkish: "Eğer cihazınızda kullanıcı hatasından kaynaklanan bir sıvı teması veya düşme gibi fiziksel hasar yoksa, tüm onarım garanti kapsamında ücretsiz karşılanacaktır.",
        albanian: "Nëse në pajisjen tuaj nuk ka pasur kontakt me lëngje ose dëmtime fizike si rënia, të cilat vijnë nga gabimi i përdoruesit, i gjithë riparimi do të mbulohet falas nën garanci."
      },
      {
        speaker: "Müşteri",
        turkish: "Hayır, hiç düşürmedim ve sıvı dökülmedi. Onarım süresi ne kadar sürer? İçindeki verilerim silinir mi?",
        albanian: "Jo, nuk e kam rrëzuar asnjëherë dhe nuk është derdhur lëng. Sa kohë zgjat riparimi? A do të fshihen të dhënat e mia brenda?"
      },
      {
        speaker: "Tekniker",
        turkish: "Arıza tespiti yaptıktan sonra yedek parça durumuna göre onarım genellikle üç iş günü sürer. Verilerinizin silinmemesi için diskinizi işlem öncesinde yedekleyeceğiz.",
        albanian: "Pasi të bëjmë identifikimin e defektit, riparimi zakonisht zgjat tri ditë pune varësisht nga gjendja e pjesëve të këmbimit. Që të mos fshihen të dhënat tuaja, do ta bëjmë backup diskun tuaj para procedurës."
      },
      {
        speaker: "Müşteri",
        turkish: "Çok teşekkür ederim. Bu durum beni çok rahatlattı. İşlemleri başlatabiliriz.",
        albanian: "Ju faleminderit shumë. Kjo situatë më lehtësoi shumë. Mund t'i fillojmë procedurat."
      },
      {
        speaker: "Tekniker",
        turkish: "Rica ederim. Lütfen bu teslim formunu imzalayın. Cihazınız hazır olduğunda size sms ile bilgi vereceğiz.",
        albanian: "Ju lutem. Ju lutem nënshkruani këtë formular dorëzimi. Kur pajisja juaj të jetë gati, do t'ju njoftojmë me sms."
      }
    ]
  },
  // --- B1 STORIES ---
  {
    id: "b1_story_startup",
    type: "story",
    level: "B1",
    titleTurkish: "Kendi Şirketimi Kurma Yolculuğu",
    titleAlbanian: "Udhëtimi i Themelimit të Kompanisë Sime",
    descriptionAlbanian: "Lexoni rreth sfidave dhe sukseseve të hapjes së një biznesi të ri digjital duke krahasuar këndvështrimet e vetave.",
    icon: "business",
    perspectives: {
      firstPerson: [
        {
          turkish: "Yıllarca büyük bir şirkette çalıştıktan sonra kendi işimi kurmaya karar verdim.",
          albanian: "Pasi punova për vite me radhë në një kompani të madhe, vendosa të hap biznesin tim."
        },
        {
          turkish: "Güvendiğim iki arkadaşımla bir araya gelerek küçük bir dijital ajans açtık.",
          albanian: "U bëmë bashkë me dy shokë që u besoja dhe hapëm një agjenci të vogël digjitale."
        },
        {
          turkish: "İlk aylarda müşteri bulmakta çok zorlandık ve büyük finansal riskler aldık.",
          albanian: "Në muajt e parë e patëm shumë të vështirë të gjenim klientë dhe morëm rreziqe të mëdha financiare."
        },
        {
          turkish: "Ancak pes etmeyip gece gündüz çalışarak harika projeler teslim ettik.",
          albanian: "Megjithatë, pa u dorëzuar, duke punuar natë e ditë dorëzuam projekte të mrekullueshme."
        },
        {
          turkish: "Şirketimiz kısa sürede büyüdü ve şimdi on kişilik bir ekiple mobil uygulamalar geliştiriyoruz.",
          albanian: "Kompania jonë u rrit në një kohë të shkurtër dhe tani po zhvillojmë aplikacione celulare me një ekip prej dhjetë vetash."
        },
        {
          turkish: "Bu süreçte risk almanın ve takım çalışmasının önemini çok daha iyi anladım.",
          albanian: "Gjatë këtij procesi e kuptova shumë më mirë rëndësinë e marrjes së rreziqeve dhe të punës në ekip."
        }
      ],
      thirdPerson: [
        {
          turkish: "Kerem yıllarca büyük bir şirkette çalıştıktan sonra kendi işini kurmaya karar verdi.",
          albanian: "Pasi punoi për vite me radhë në një kompani të madhe, Keremi vendosi të hapte biznesin e tij."
        },
        {
          turkish: "Güvendiği iki arkadaşıyla bir araya gelerek küçük bir dijital ajans açtılar.",
          albanian: "U bënë bashkë me dy shokë që u besonte dhe hapën një agjenci të vogël digjitale."
        },
        {
          turkish: "İlk aylarda müşteri bulmakta çok zorlandılar ve büyük finansal riskler aldılar.",
          albanian: "Në muajt e parë e patën shumë të vështirë të gjenin klientë dhe morën rreziqe të mëdha financiare."
        },
        {
          turkish: "Ancak pes etmeyip gece gündüz çalışarak harika projeler teslim ettiler.",
          albanian: "Megjithatë, pa u dorëzuar, duke punuar natë e ditë dorëzuan projekte të mrekullueshme."
        },
        {
          turkish: "Şirketleri kısa sürede büyüdü ve şimdi on kişilik bir ekiple mobil uygulamalar geliştiriyorlar.",
          albanian: "Kompania e tyre u rrit në një kohë të shkurtër dhe tani po zhvillojnë aplikacione celulare me një ekip prej dhjetë vetash."
        },
        {
          turkish: "Bu süreçte risk almanın ve takım çalışmasının önemini çok daha iyi anladı.",
          albanian: "Gjatë këtij procesi e kuptoi shumë më mirë rëndësinë e marrjes së rreziqeve dhe të punës në ekip."
        }
      ]
    }
  },
  {
    id: "b1_story_culture",
    type: "story",
    level: "B1",
    titleTurkish: "Kültür Şoku ve Uyum",
    titleAlbanian: "Shoku Kulturor dhe Përshtatja",
    descriptionAlbanian: "Mësoni se si të përshkruani përshtatjen në një vend të ri, mikpritjen lokale dhe kapërcimin e barrierave gjuhësore.",
    icon: "culture",
    perspectives: {
      firstPerson: [
        {
          turkish: "İstanbul'a ilk geldiğimde büyük bir kültür şoku yaşadım ve kendimi yalnız hissettim.",
          albanian: "Kur erdha për herë të parë në Stamboll përjetova një shok të madh kulturor dhe u ndjeva i vetmuar."
        },
        {
          turkish: "Başlangıçta dil bariyeri yüzünden insanlarla iletişim kurmakta oldukça zorlanıyordum.",
          albanian: "Në fillim, për shkak të barrierës gjuhësore, e kisha mjaft të vështirë të komunikoja me njerëzit."
        },
        {
          turkish: "Fakat komşularımın inanılmaz misafirperverliği sayesinde bu zorlukları yavaş yavaş aştım.",
          albanian: "Por, falë mikpritjes së jashtëzakonshme të fqinjëve të mi, i kalova këto vështirësi gradualisht."
        },
        {
          turkish: "Her gün yeni Türkçe deyimler öğrendim ve yerel alışkanlıklara uyum sağladım.",
          albanian: "Çdo ditë mësova shprehje të reja të turqishtes dhe iu përshtata zakonave lokale."
        },
        {
          turkish: "Artık kendimi yabancı gibi değil, bu şehrin ve kültürün bir parçası olarak hissediyorum.",
          albanian: "Tani nuk e ndiej më veten si i huaj, por si pjesë e këtij qyteti dhe e kësaj kulture."
        },
        {
          turkish: "Buradaki dostluklarım hayatımın en değerli hazinesi haline geldi.",
          albanian: "Miqësitë e mia këtu u bënë thesari më i çmuar i jetës sime."
        }
      ],
      thirdPerson: [
        {
          turkish: "Sarah İstanbul'a ilk geldiğinde büyük bir kültür şoku yaşadı ve kendisini yalnız hissetti.",
          albanian: "Kur erdhi për herë të parë në Stamboll Sarah përjetoi një shok të madh kulturor dhe u ndje e vetmuar."
        },
        {
          turkish: "Başlangıçta dil bariyeri yüzünden insanlarla iletişim kurmakta oldukça zorlanıyordu.",
          albanian: "Në fillim, për shkak të barrierës gjuhësore, e kishte mjaft të vështirë të komunikonte me njerëzit."
        },
        {
          turkish: "Fakat komşularının inanılmaz misafirperverliği sayesinde bu zorlukları yavaş yavaş aştı.",
          albanian: "Por, falë mikpritjes së jashtëzakonshme të fqinjëve të saj, i kaloi këto vështirësi gradualisht."
        },
        {
          turkish: "Her gün yeni Türkçe deyimler öğrendi ve yerel alışkanlıklara uyum sağladı.",
          albanian: "Çdo ditë mësoi shprehje të reja të turqishtes dhe iu përshtat zakonave lokale."
        },
        {
          turkish: "Artık kendisini yabancı gibi değil, bu şehrin ve kültürün bir parçası olarak hissediyor.",
          albanian: "Tani nuk e ndjen më veten si e huaj, por si pjesë e këtij qyteti dhe e kësaj kulture."
        },
        {
          turkish: "Buradaki dostlukları hayatının en değerli hazinesi haline geldi.",
          albanian: "Miqësitë e saj këtu u bënë thesari më i çmuar i jetës sime."
        }
      ]
    }
  },
  {
    id: "b1_story_health",
    type: "story",
    level: "B1",
    titleTurkish: "Sağlıklı Yaşam Kararım",
    titleAlbanian: "Vendimi Im për Jetë të Shëndetshme",
    descriptionAlbanian: "Lexoni rreth ndryshimit të stilit të jetesës, dietës dhe sportit duke vëzhguar ndryshimet e foljeve.",
    icon: "sports",
    perspectives: {
      firstPerson: [
        {
          turkish: "Geçen yıl hareketsiz yaşam tarzımdan kurtulup sağlıklı bir hayata adım atmaya karar verdim.",
          albanian: "Vitin e kaluar vendosa të shpëtoj nga stili im i jetës pasive (pa lëvizje) dhe të bëj një hap drejt një jete të shëndetshme."
        },
        {
          turkish: "İlk olarak sabahları erken uyanıp parkta düzenli koşular yapmaya başladım.",
          albanian: "Si fillim, fillova të zgjohem herët në mëngjes dhe të bëj vrapime të rregullta në park."
        },
        {
          turkish: "Beslenme düzenimi tamamen değiştirerek organik gıdalar tüketmeye ve şekeri azaltmaya çalıştım.",
          albanian: "Duke ndryshuar krejtësisht regjimin tim ushqimor, u përpoqa të konsumoj ushqime organike dhe të reduktoj sheqerin."
        },
        {
          turkish: "Birkaç ay içinde hem fiziksel gücüm arttı hem de zihinsel odaklanma seviyem yükseldi.",
          albanian: "Brenda pak muajve u rrit si fuqia ime fizike ashtu edhe niveli i përqendrimit tim mendor."
        },
        {
          turkish: "Spor salonuna üye oldum ve haftada üç gün ağırlık antrenmanları yapıyorum.",
          albanian: "U anëtarësova në një palestër dhe bëj stërvitje me pesha tri ditë në javë."
        },
        {
          turkish: "Kendimi her zamankinden çok daha enerjik, üretken ve mutlu hissediyorum.",
          albanian: "Ndihem shumë më energjik, produktiv dhe i lumtur se kurrë më parë."
        }
      ],
      thirdPerson: [
        {
          turkish: "Cem geçen yıl hareketsiz yaşam tarzından kurtulup sağlıklı bir hayata adım atmaya karar verdi.",
          albanian: "Vitin e kaluar Cemi vendosi të shpëtonte nga stili i tij i jetës pasive dhe të bënte një hap drejt një jete të shëndetshme."
        },
        {
          turkish: "İlk olarak sabahları erken uyanıp parkta düzenli koşular yapmaya başladı.",
          albanian: "Si fillim, filloi të zgjohej herët në mëngjes dhe të bënte vrapime të rregullta në park."
        },
        {
          turkish: "Beslenme düzenini tamamen değiştirerek organik gıdalar tüketmeye ve şekeri azaltmaya çalıştı.",
          albanian: "Duke ndryshuar krejtësisht regjimin e tij ushqimor, u përpoq të konsumonte ushqime organike dhe të reduktonte sheqerin."
        },
        {
          turkish: "Birkaç ay içinde hem fiziksel gücü arttı hem de zihinsel odaklanma seviyesi yükseldi.",
          albanian: "Brenda pak muajve u rrit si fuqia e tij fizike ashtu edhe niveli i përqendrimit të tij mendor."
        },
        {
          turkish: "Spor salonuna üye oldu ve haftada üç gün ağırlık antrenmanları yapıyor.",
          albanian: "U anëtarësua në një palestër dhe bën stërvitje me pesha tri ditë në javë."
        },
        {
          turkish: "Kendisini her zamankinden çok daha enerjik, üretken ve mutlu hissediyor.",
          albanian: "Ndihet shumë më energjik, produktiv dhe i lumtur se kurrë më parë."
        }
      ]
    }
  },
  {
    id: "b1_story_eco",
    type: "story",
    level: "B1",
    titleTurkish: "Çevre Gönüllüsü Olmak",
    titleAlbanian: "Të Qenit Vullnetar Mjedisor",
    descriptionAlbanian: "Mësoni se si të përshkruani iniciativat e riciklimit, mbjelljen e pemëve dhe ndërgjegjësimin ekologjik.",
    icon: "nature",
    perspectives: {
      firstPerson: [
        {
          turkish: "Çevre koruma bilincini artırmak amacıyla mahallemizdeki ekolojik gruba gönüllü katıldım.",
          albanian: "Me qëllim të rritjes së ndërgjegjësimit për mbrojtjen e mjedisit, iu bashkova si vullnetar grupit ekologjik të lagjes sonë."
        },
        {
          turkish: "Hafta sonları parklardaki çöpleri topluyoruz ve geri dönüşüm kutuları yerleştiriyoruz.",
          albanian: "Gjatë fundjavave mbledhim mbeturinat në parqe dhe vendosim kanta riciklimi."
        },
        {
          turkish: "Geçen ay belediyenin desteğiyle boş bir araziye yüzlerce genç fidan diktik.",
          albanian: "Muajin e kaluar me mbështetjen e bashkisë mbollëm qindra fidanë të rinj në një tokë të zbrazët."
        },
        {
          turkish: "Ayrıca plastik atıkların azaltılması konusunda okullarda küçük seminerler düzenliyoruz.",
          albanian: "Gjithashtu organizojmë seminare të vogla në shkolla rreth reduktimit të mbetjeve plastike."
        },
        {
          turkish: "Yaptığımız çalışmalar sayesinde mahalle sakinleri artık çevre temizliğine çok daha fazla özen gösteriyor.",
          albanian: "Falë punëve tona, banorët e lagjes tani tregojnë shumë më tepër kujdes për pastërtinë e mjedisit."
        },
        {
          turkish: "Gelecek nesillere daha yeşil bir dünya bırakmak için mücadele etmeye devam edeceğim.",
          albanian: "Do të vazhdoj të luftoj për t'u lënë brezave të ardhshëm një botë më të gjelbër."
        }
      ],
      thirdPerson: [
        {
          turkish: "Leyla çevre koruma bilincini artırmak amacıyla mahallesindeki ekolojik gruba gönüllü katıldı.",
          albanian: "Me qëllim të rritjes së ndërgjegjësimit për mbrojtjen e mjedisit, Leyla iu bashkua si vullnetare grupit ekologjik të lagjes së saj."
        },
        {
          turkish: "Hafta sonları parklardaki çöpleri topluyorlar ve geri dönüşüm kutuları yerleştiriyorlar.",
          albanian: "Gjatë fundjavave mbledhin mbeturinat në parqe dhe vendosin kanta riciklimi."
        },
        {
          turkish: "Geçen ay belediyenin desteğiyle boş bir araziye yüzlerce genç fidan diktiler.",
          albanian: "Muajin e kaluar me mbështetjen e bashkisë mbollën qindra fidanë të rinj në një tokë të zbrazët."
        },
        {
          turkish: "Ayrıca plastik atıkların azaltılması konusunda okullarda küçük seminerler düzenliyorlar.",
          albanian: "Gjithashtu organizojnë seminare të vogla në shkolla rreth reduktimit të mbetjeve plastike."
        },
        {
          turkish: "Yaptıkları çalışmalar sayesinde mahalle sakinleri artık çevre temizliğine çok daha fazla özen gösteriyor.",
          albanian: "Falë punëve të tyre, banorët e lagjes tani tregojnë shumë më tepër kujdes për pastërtinë e mjedisit."
        },
        {
          turkish: "Gelecek nesillere daha yeşil bir dünya bırakmak için mücadele etmeye devam edecek.",
          albanian: "Do të vazhdojë të luftojë për t'u lënë brezave të ardhshëm një botë më të gjelbër."
        }
      ]
    }
  }
];
