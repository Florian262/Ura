export interface TestReadingQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface TestReadingSection {
  id: string;
  title: string;
  textTurkish: string;
  promptAlbanian: string;
  questions: TestReadingQuestion[];
}

export interface TestMCQuestion {
  id: string;
  promptAlbanian: string;
  questionTurkish: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface TestSuffixQuestion {
  id: string;
  promptAlbanian: string;
  root: string;
  suffixes: string[];
  correctSuffix: string;
  explanation: string;
}

export interface TestWordSortQuestion {
  id: string;
  promptAlbanian: string;
  words: string[];
  correctSequence: string[];
  explanation: string;
}

export interface TestWritingQuestion {
  id: string;
  promptAlbanian: string;
  correctAnswers: string[];
  explanation: string;
}

export interface B1Test {
  readingSection: TestReadingSection;
  multipleChoice: TestMCQuestion[];
  suffixBuilder: TestSuffixQuestion[];
  wordSort: TestWordSortQuestion[];
  writing: TestWritingQuestion[];
}

// ==========================================
// 1. B1 READING SECTIONS (3 Sections - 1 for each test set)
// ==========================================
export const B1_READING_SECTIONS: Record<'official' | 'practice_a' | 'practice_b', TestReadingSection> = {
  official: {
    id: "b1_r_off",
    title: "Teknoloji ve İletişim (Teknologjia dhe Komunikimi)",
    textTurkish: "Sosyal medya, günümüzde bilgiye ulaşma ve haberleşme şeklimizi tamamen değiştirdi. Eskiden insanlar haberleri televizyondan veya gazetelerden takip ediyordu, fakat şimdi her şey saniyeler içinde sosyal medyada paylaşılıyor. Ancak bu hızın bazı olumsuz yönleri de var. Sosyal medyada yayılan her haber doğru olmuyor; bazen yalan haberler çok hızlı yayılarak insanları yanıltabiliyor. Bu yüzden okuduğumuz haberleri farklı kaynaklardan doğrulamak artık bir zorunluluk haline geldi. Sonuç olarak, internet çağında güvenilir haber kaynaklarını bulmak ve sosyal ağları bilinçli kullanmak hayati önem taşıyor.",
    promptAlbanian: "Aşağıdaki metni okuyunuz ve soruları cevaplayınız:",
    questions: [
      {
        id: "b1_r_off_q1",
        question: "Sosyal medyanın hayatımızdaki en büyük etkisi nedir?",
        options: [
          "Televizyon izleme sürelerini arttırması",
          "Bilgiye ulaşma ve haberleşme şeklimizi tamamen değiştirmesi",
          "Gazete basım maliyetlerini düşürmesi",
          "İnsanların daha çok kitap okumasını sağlaması"
        ],
        correctAnswer: "Bilgiye ulaşma ve haberleşme şeklimizi tamamen değiştirmesi",
        explanation: "Metne göre sosyal medya bilgiye ulaşma ve haberleşme şeklimizi tamamen değiştirmiştir."
      },
      {
        id: "b1_r_off_q2",
        question: "Yazar yalan haberler hakkında ne düşünüyor?",
        options: [
          "Televizyon haberlerinden daha doğru olduklarını",
          "Çok hızlı yayılarak insanları yanıltabildiklerini",
          "Sadece gazeteciler tarafından yazıldıklarını",
          "İnternette hiç yayılmadıklarını"
        ],
        correctAnswer: "Çok hızlı yayılarak insanları yanıltabildiklerini",
        explanation: "Metinde yalan haberlerin sosyal medyada çok hızlı yayılarak insanları yanıltabildiği belirtilmiştir."
      },
      {
        id: "b1_r_off_q3",
        question: "Haberleri doğrulamak neden artık bir zorunluluktur?",
        options: [
          "Çünkü internet çok pahalıdır",
          "Çünkü sosyal medyadaki her haber doğru olmayabiliyor",
          "Çünkü televizyonlar artık çalışmıyor",
          "Çünkü kimse haber okumak istemiyor"
        ],
        correctAnswer: "Çünkü sosyal medyadaki her haber doğru olmayabiliyor",
        explanation: "Sosyal medyadaki her haber doğru olmadığı için okunan haberleri farklı kaynaklardan doğrulamak artık bir zorunluluktur."
      },
      {
        id: "b1_r_off_q4",
        question: "Eskiden insanlar haberleri nereden takip ediyordu?",
        options: [
          "Sadece sosyal medyadan",
          "Radyodan ve internet sitelerinden",
          "Televizyondan veya gazetelerden",
          "Sadece arkadaşlarından"
        ],
        correctAnswer: "Televizyondan veya gazetelerden",
        explanation: "Metne göre eskiden insanlar haberleri televizyondan veya gazetelerden takip ediyordu."
      },
      {
        id: "b1_r_off_q5",
        question: "Yazara göre internet çağında ne hayati önem taşıyor?",
        options: [
          "Her habere anında inanıp paylaşmak",
          "Güvenilir haber kaynaklarını bulmak ve sosyal ağları bilinçli kullanmak",
          "Sosyal medyayı tamamen hayatımızdan çıkarmak",
          "Sadece profesyonel gazeteleri satın almak"
        ],
        correctAnswer: "Güvenilir haber kaynaklarını bulmak ve sosyal ağları bilinçli kullanmak",
        explanation: "Metnin sonunda internet çağında güvenilir haber kaynaklarını bulmanın ve sosyal ağları bilinçli kullanmanın hayati önem taşıdığı ifade edilmiştir."
      }
    ]
  },
  practice_a: {
    id: "b1_r_pra_a",
    title: "Kültürel Bayramlar ve Ortak Değerler (Festat Kulturore dhe Vlerat e Përbashkëta)",
    textTurkish: "Geleneksel bayramlar, aile üyelerini ve dostları bir araya getiren en önemli kültürel değerlerimizdir. Bayramlarda herkes bir araya gelince büyük sofralar kurulur, sohbetler edilir ve eski anılar hatırlanır. Balkan kültürlerinde de benzer kutlamalar görülür. Örneğin Ramazan Bayramı veya yerel bahar festivalleri hem Türkiye'de hem de Arnavutluk'ta coşkuyla kutlanır. Bu tür ortak bayramlar, toplumlar arasındaki bağı güçlendirir. Eskiden sadece köy halkı bir araya gelirken, günümüzde şehirlerde yaşayan insanlar da bayramlarda ailelerini ziyaret etmek için yollara düşüyor.",
    promptAlbanian: "Aşağıdaki metni okuyunuz ve soruları cevaplayınız:",
    questions: [
      {
        id: "b1_r_pra_a_q1",
        question: "Geleneksel bayramların en önemli işlevi nedir?",
        options: [
          "İnsanlara tatil yapma fırsatı sunması",
          "Aile üyelerini ve dostları bir araya getirmesi",
          "Köy hayatını tamamen sona erdirmesi",
          "Sadece yemek kültürünü geliştirmesi"
        ],
        correctAnswer: "Aile üyelerini ve dostları bir araya getirmesi",
        explanation: "Metne göre geleneksel bayramlar aile üyelerini ve dostları bir araya getiren en önemli kültürel değerlerimizdir."
      },
      {
        id: "b1_r_pra_a_q2",
        question: "Bayram sofralarında insanlar ne yapar?",
        options: [
          "Sadece yemek yer ve hemen kalkarlar",
          "Sohbet ederler ve eski anıları hatırlarlar",
          "İnternetteki haberleri doğrularlar",
          "Yeni projeler üzerinde çalışırlar"
        ],
        correctAnswer: "Sohbet ederler ve eski anıları hatırlarlar",
        explanation: "Metne göre bayramlarda büyük sofralar kurulur, sohbetler edilir ve eski anılar hatırlanır."
      },
      {
        id: "b1_r_pra_a_q3",
        question: "Metne göre hangi kültürel kutlamalar Türkiye ve Arnavutluk'ta ortaktır?",
        options: [
          "Sadece modern müzik festivalleri",
          "Ramazan Bayramı veya yerel bahar festivalleri",
          "Yeni yıl kutlamaları ve okul tatilleri",
          "Sadece spor müsabakaları"
        ],
        correctAnswer: "Ramazan Bayramı veya yerel bahar festivalleri",
        explanation: "Metinde Ramazan Bayramı veya yerel bahar festivallerinin hem Türkiye'de hem de Arnavutluk'ta kutlandığı belirtilmiştir."
      },
      {
        id: "b1_r_pra_a_q4",
        question: "Ortak bayramların toplumlar üzerindeki etkisi nedir?",
        options: [
          "Toplumlar arasındaki bağı güçlendirmesi",
          "İnsanların daha az çalışmasına yol açması",
          "Şehir nüfusunu azaltması",
          "Kültürel farklılıkları yok etmesi"
        ],
        correctAnswer: "Toplumlar arasındaki bağı güçlendirmesi",
        explanation: "Metne göre bu tür ortak bayramlar toplumlar arasındaki bağı güçlendirir."
      },
      {
        id: "b1_r_pra_a_q5",
        question: "Günümüzde şehirde yaşayan insanlar bayramlarda ne yapıyor?",
        options: [
          "Şehirde yalnız kalmayı tercih ediyorlar",
          "Ailelerini ziyaret etmek için yola çıkıyorlar",
          "Yabancı ülkelere tatile gidiyorlar",
          "Sadece telefonla mesaj gönderiyorlar"
        ],
        correctAnswer: "Ailelerini ziyaret etmek için yola çıkıyorlar",
        explanation: "Metne göre günümüzde şehirlerde yaşayan insanlar bayramlarda ailelerini ziyaret etmek için yollara düşmektedir."
      }
    ]
  },
  practice_b: {
    id: "b1_r_pra_b",
    title: "Zorluklar ve Kendini Geliştirme (Vështirësitë dhe Vetëzhvillimi)",
    textTurkish: "Hayatta başarılı olmak, her insanın hayalidir. Ancak bu hedefe ulaşmak kolay değildir; engellerle mücadele etmek ve çok çalışmak gerekir. Çocukken her şeyin zahmetsizce gerçekleşeceğini düşünürdük. Oysa büyüdükçe hayatın sorumluluklarıyla karşılaşırız ve kendi kararlarımızı kendimiz vermek zorunda kalırız. Kendini geliştirmek, ömür boyu süren bir yolculuktur. Hatalardan ders çıkarmak ve pes etmemek bu yolculuğun en önemli kuralıdır. Kendine güvenen insanlar, karşılaştıkları her zorluğu yeni bir öğrenme fırsatı olarak görürler.",
    promptAlbanian: "Aşağıdaki metni okuyunuz ve soruları cevaplayınız:",
    questions: [
      {
        id: "b1_r_pra_b_q1",
        question: "Yazara göre hayatta başarılı olmak için ne yapılmalıdır?",
        options: [
          "Sadece büyük hayaller kurup beklemek",
          "Engellerle mücadele etmek ve çok çalışmak",
          "Çocukluk günlerine geri dönmek",
          "Karar almaktan kaçınmak"
        ],
        correctAnswer: "Engellerle mücadele etmek ve çok çalışmak",
        explanation: "Metne göre hayatta başarılı olmak için engellerle mücadele etmek ve çok çalışmak gerekir."
      },
      {
        id: "b1_r_pra_b_q2",
        question: "Çocukken hayat hakkında ne düşünürdük?",
        options: [
          "Hayatın çok zor olduğunu",
          "Her şeyin zahmetsizce gerçekleşeceğini",
          "Kendi kararlarımızı vermemiz gerektiğini",
          "Sorumlulukların çok fazla olduğunu"
        ],
        correctAnswer: "Her şeyin zahmetsizce gerçekleşeceğini",
        explanation: "Metne göre çocukken her şeyin zahmetsizce gerçekleşeceğini düşünürdük."
      },
      {
        id: "b1_r_pra_b_q3",
        question: "Büyüdükçe hayatımızda ne gibi değişiklikler olur?",
        options: [
          "Daha az sorumluluk alırız",
          "Hayatın sorumluluklarıyla karşılaşır ve kendi kararlarımızı vermek zorunda kalırız",
          "Hatalarımızdan ders almayı bırakırız",
          "Çok çalışmaya gerek kalmaz"
        ],
        correctAnswer: "Hayatın sorumluluklarıyla karşılaşır ve kendi kararlarımızı vermek zorunda kalırız",
        explanation: "Metinde büyüdükçe hayatın sorumluluklarıyla karşılaştığımız ve kendi kararlarımızı kendimiz vermek zorunda kaldığımız belirtilmiştir."
      },
      {
        id: "b1_r_pra_b_q4",
        question: "Kendini geliştirme süreci ne kadar sürer?",
        options: [
          "Sadece okul yıllarında sürer",
          "Ömür boyu süren bir yolculuktur",
          "Başarılı olana kadar sürer",
          "Sadece zor zamanlarda sürer"
        ],
        correctAnswer: "Ömür boyu süren bir yolculuktur",
        explanation: "Metne göre kendini geliştirmek ömür boyu süren bir yolculuktur."
      },
      {
        id: "b1_r_pra_b_q5",
        question: "Kendine güvenen insanlar zorlukları nasıl görür?",
        options: [
          "Kaçılması gereken büyük tehlikeler olarak",
          "Yeni bir öğrenme fırsatı olarak",
          "Pes etme zamanı olarak",
          "Çocukluk hayali olarak"
        ],
        correctAnswer: "Yeni bir öğrenme fırsatı olarak",
        explanation: "Metnin sonunda kendine güvenen insanların karşılaştıkları zorlukları yeni bir öğrenme fırsatı olarak gördüğü ifade edilmiştir."
      }
    ]
  }
};

// ==========================================
// 2. B1 MULTIPLE CHOICE QUESTIONS (15 Questions - 5 for each set)
// ==========================================
export const B1_MC_QUESTIONS: Record<'official' | 'practice_a' | 'practice_b', TestMCQuestion[]> = {
  official: [
    {
      id: "b1_mc_off1",
      promptAlbanian: "Boşluğa uygun şimdiki zamanın hikayesi (-iyordu) ekini seçiniz:",
      questionTurkish: "Biz çocukken her yaz dedemin köydeki çiftliğine \_\_\_\_\_.",
      options: ["gittik", "gidiyorduk", "gidiyoruz", "gideceğiz"],
      correctAnswer: "gidiyorduk",
      explanation: "Biz çocukken geçmişte sürekli yapılan bir eylemi anlatmak için şimdiki zamanın hikayesi birinci çoğul şahıs ekini (-iyorduk) kullanırız."
    },
    {
      id: "b1_mc_off2",
      promptAlbanian: "Boşluğa uygun işteş fiil (karşılıklı eylem) çekimini seçiniz:",
      questionTurkish: "Onlar geçen yıl kütüphanede tanıştılar ve o zamandan beri \_\_\_\_\_.",
      options: ["yazıştılar", "yazıştınız", "yazıştım", "yazıştık"],
      correctAnswer: "yazıştılar",
      explanation: "Üçüncü çoğul şahıs (Onlar) için karşılıklı yapılan 'yazışmak' fiilinin geçmiş zaman çekimi 'yazıştılar' olur."
    },
    {
      id: "b1_mc_off3",
      promptAlbanian: "Cümleyi uygun şart kipi (-se/-sa) ile tamamlayınız:",
      questionTurkish: "Eğer o yarın erken \_\_\_\_\_ bizimle gelebilir.",
      options: ["uyansa", "uyanırsa", "uyandıysa", "uyanmalı"],
      correctAnswer: "uyanırsa",
      explanation: "Gerçekleşmesi muhtemel bir şartı ifade ederken geniş zaman şart çekimi olan 'uyanırsa' tercih edilir."
    },
    {
      id: "b1_mc_off4",
      promptAlbanian: "Boşluğa uygun gereklilik kipi (-meli/-malı) ekini seçiniz:",
      questionTurkish: "Sınavı geçmek istiyorsan her gün düzenli ders \_\_\_\_\_.",
      options: ["çalışmalısın", "çalışabilirsin", "çalışıyordun", "çalıştın"],
      correctAnswer: "çalışmalısın",
      explanation: "Sen (ikinci tekil şahıs) için gereklilik bildiren yapı 'çalışmalısın' (çalış-malı-sın) şeklindedir."
    },
    {
      id: "b1_mc_off5",
      promptAlbanian: "Boşluğa uygun zarf-fiil (-(y)ken) ekini seçiniz:",
      questionTurkish: "Ben akşam yemek \_\_\_\_\_ elektrikler kesildi.",
      options: ["yerken", "yiyorken", "yediysem", "yemeliyken"],
      correctAnswer: "yerken",
      explanation: "Yemek eylemi sürerken başka bir olayın gerçekleştiğini belirtmek için geniş zaman üzerine gelen '-ken' eki (yerken) kullanılır."
    }
  ],
  practice_a: [
    {
      id: "b1_mc_pra_a1",
      promptAlbanian: "Cümleyi uygun dönüşlülük zamiri (kendi) ile tamamlayınız:",
      questionTurkish: "Ali, bu zor projeyi tek başına, yani \_\_\_\_\_ hazırladı.",
      options: ["kendim", "kendin", "kendisi", "kendimiz"],
      correctAnswer: "kendisi",
      explanation: "Üçüncü tekil şahıs (Ali) için dönüşlülük zamiri iyelik eki alarak 'kendisi' olur."
    },
    {
      id: "b1_mc_pra_a2",
      promptAlbanian: "Cümleyi uygun dönüşlü fiil çekimi ile tamamlayınız:",
      questionTurkish: "Mehmet sabah uyanınca hemen banyoya gitti ve \_\_\_\_\_.",
      options: ["yıkadı", "yıkandı", "yıkattı", "yıkayacak"],
      correctAnswer: "yıkandı",
      explanation: "Öznenin işi kendi kendine yaptığını belirten dönüşlü fiil yapısı, yıka- köküne '-n' getirilerek yapılan 'yıkandı'dır."
    },
    {
      id: "b1_mc_pra_a3",
      promptAlbanian: "Hangi seçenek ettirgen/oldurgan (ettirgen çatı) fiil çekimidir?",
      questionTurkish: "Öğretmen derste öğrencilere güzel bir kitap \_\_\_\_\_.",
      options: ["okudu", "okuttu", "okundu", "okuyordu"],
      correctAnswer: "okuttu",
      explanation: "Okumak eylemini başkasına (öğrencilere) yaptırmayı belirten ettirgen yapı, fiile '-t' eki getirilerek yapılan 'okuttu'dur."
    },
    {
      id: "b1_mc_pra_a4",
      promptAlbanian: "Cümleyi uygun edilgen çatı fiil çekimi ile tamamlayınız:",
      questionTurkish: "Bu önemli rapor dün akşam müdür tarafından \_\_\_\_\_.",
      options: ["yazdı", "yazıldı", "yazıştı", "yazdırdı"],
      correctAnswer: "yazıldı",
      explanation: "İşi yapanın açıkça 'tarafından' sözcüğüyle belirtildiği edilgen cümlelerde fiil edilgen çatı eki (-ıl) alır: 'yazıldı'."
    },
    {
      id: "b1_mc_pra_a5",
      promptAlbanian: "Boşluğa uygun ayrılma durumlu sıfat-fiil (-diğinden beri) ekini seçiniz:",
      questionTurkish: "Türkiye'ye \_\_\_\_\_ beri her gün Türkçe pratik yapıyorum.",
      options: ["geldiğimden", "geldiğim", "gelirken", "geldiğimde"],
      correctAnswer: "geldiğimden",
      explanation: "Türkiye'ye geldiğim zamandan bu yana süren durumu belirtmek için birinci tekil şahıs iyelikli '-diğinden beri' (geldiğimden beri) yapısı kullanılır."
    }
  ],
  practice_b: [
    {
      id: "b1_mc_pra_b1",
      promptAlbanian: "Cümleyi uygun sıfat-fiil (-an/-en) eki ile tamamlayınız:",
      questionTurkish: "Yolda \_\_\_\_\_ insanlara gülümseyerek selam verdim.",
      options: ["yürüyen", "yürüyüş", "yürüdüğüm", "yürüyeceğim"],
      correctAnswer: "yürüyen",
      explanation: "İnsanlar ismini niteleyen sıfat-fiil, şimdiki/geniş zaman anlamı veren '-en' eki ile kurulan 'yürüyen' sözcüğüdür."
    },
    {
      id: "b1_mc_pra_b2",
      promptAlbanian: "Cümleyi uygun sıfat-fiil (-dık/-dik) eki ile tamamlayınız:",
      questionTurkish: "Bu, benim hayatımda \_\_\_\_\_ en güzel tatildi.",
      options: ["yapacağım", "yaptığım", "yapan", "yaptıysam"],
      correctAnswer: "yaptığım",
      explanation: "Geçmişte yapılmış ve iyelik içeren sıfat-fiil yapısı 'yaptığım' (yap-tık-ım) olarak çekimlenir."
    },
    {
      id: "b1_mc_pra_b3",
      promptAlbanian: "Cümleyi uygun sıfat-fiil (-acak/-ecek) eki ile tamamlayınız:",
      questionTurkish: "Bizim yarın \_\_\_\_\_ sınav çok zor olacak.",
      options: ["gireceğimiz", "gireceğiz", "giren", "girdiğimiz"],
      correctAnswer: "gireceğimiz",
      explanation: "Gelecekte yapılacak bir eylemi ve sahipliği bildiren gelecek zaman sıfat-fiili 'gireceğimiz' (gir-ecek-imiz) şeklindedir."
    },
    {
      id: "b1_mc_pra_b4",
      promptAlbanian: "Cümleyi anlamlı kılan zıtlık bağlacını seçiniz:",
      questionTurkish: "Bana her gün yardım edeceğini söyledi, \_\_\_\_\_ hiç yardım etmedi.",
      options: ["oysa", "bu yüzden", "hem de", "çünkü"],
      correctAnswer: "oysa",
      explanation: "Beklenti ile gerçekleşen arasındaki çelişkiyi belirten zıtlık bağlacı 'oysa' sözcüğüdür."
    },
    {
      id: "b1_mc_pra_b5",
      promptAlbanian: "Cümledeki boşluklara uygun bağlacı seçiniz:",
      questionTurkish: "O yeni işinde \_\_\_\_\_ çok yoruluyor \_\_\_\_\_ çok mutlu oluyor.",
      options: [
        "hem ... hem",
        "ne ... ne",
        "ya ... ya",
        "gerek ... gerek"
      ],
      correctAnswer: "hem ... hem",
      explanation: "Aynı anda gerçekleşen iki durumu bağlamak için 'hem... hem...' bağlacı kullanılır."
    }
  ]
};

// ==========================================
// 3. B1 SUFFIX BUILDERS (18 Questions - 6 for each set)
// ==========================================
export const B1_SUFFIX_QUESTIONS: Record<'official' | 'practice_a' | 'practice_b', TestSuffixQuestion[]> = {
  official: [
    {
      id: "b1_sb_off1",
      promptAlbanian: "Kelimeyi şart kipinin hikayesi (-seydin) ile çekimleyiniz:",
      root: "gel",
      suffixes: ["seydin", "saydın", "seydim", "saydık"],
      correctSuffix: "seydin",
      explanation: "İnce ünlü uyumuna göre 'gel-' köküne şart kipi, buffer 'y', geçmiş zaman ve şahıs eki gelerek 'gelseydin' oluşturulur."
    },
    {
      id: "b1_sb_off2",
      promptAlbanian: "Kelimeyi işteş fiil (karşılıklı) yapacak eki seçiniz:",
      root: "tanı",
      suffixes: ["ş", "ış", "uş", "iş"],
      correctSuffix: "ş",
      explanation: "Ünlü ile biten 'tanı-' köküne doğrudan '-ş' eki getirilerek karşılıklı eylem bildiren 'tanışmak' türetilir."
    },
    {
      id: "b1_sb_off3",
      promptAlbanian: "Kelimeyi dönüşlü fiil yapacak eki seçiniz:",
      root: "hazırla",
      suffixes: ["n", "ın", "un", "en"],
      correctSuffix: "n",
      explanation: "Ünlüyle biten 'hazırla-' fiiline doğrudan '-n' dönüşlülük eki getirilerek 'hazırlanmak' fiili kurulur."
    },
    {
      id: "b1_sb_off4",
      promptAlbanian: "Kelimeyi şimdiki zamanın hikayesi ile çekimleyiniz:",
      root: "oku",
      suffixes: ["yordu", "yordum", "yordun", "yorduk"],
      correctSuffix: "yordu",
      explanation: "Okumak kökünden üçüncü şahsa yönelik şimdiki zamanın hikayesi 'okuyordu' (oku-yor-du) olarak çekimlenir."
    },
    {
      id: "b1_sb_off5",
      promptAlbanian: "Kelimeyi gereklilik kipi (-malı) ile çekimleyiniz:",
      root: "yap",
      suffixes: ["malı", "meli", "malıymış", "malıyım"],
      correctSuffix: "malı",
      explanation: "Kalın ünlüyle biten 'yap-' fiiline gereklilik eki '-malı' (yapmalı) eklenir."
    },
    {
      id: "b1_sb_off6",
      promptAlbanian: "Kelimeyi sıfat-fiil (-diğim) ekiyle çekimleyiniz:",
      root: "git",
      suffixes: ["tiğim", "diğim", "tiğin", "tiğimiz"],
      correctSuffix: "tiğim",
      explanation: "Gitmek fiili sert ünsüzle bittiği için sıfat-fiil eki '-tiğim' olur, kökteki 't' ise yumuşayarak 'd' olur: gittiğim."
    }
  ],
  practice_a: [
    {
      id: "b1_sb_pra_a1",
      promptAlbanian: "Kelimeyi dönüşlü fiil yapacak eki seçiniz:",
      root: "giy",
      suffixes: ["in", "ın", "n", "ün"],
      correctSuffix: "in",
      explanation: "Ünsüzle biten 'giy-' fiili, ince ünlü uyumuna uygun '-in' ekini alarak 'giyinmek' dönüşlü fiilini oluşturur."
    },
    {
      id: "b1_sb_pra_a2",
      promptAlbanian: "Kelimeyi ettirgen fiil yapacak eki seçiniz:",
      root: "yaz",
      suffixes: ["dır", "tır", "t", "ır"],
      correctSuffix: "dır",
      explanation: "Yazmak fiiline ettirgen çatı eki olarak kalın ses uyumuna göre '-dır' (yazdırmak) gelir."
    },
    {
      id: "b1_sb_pra_a3",
      promptAlbanian: "Kelimeyi edilgen sıfat-fiil yapacak eki seçiniz:",
      root: "bil",
      suffixes: ["inen", "inenler", "ineni", "inmek"],
      correctSuffix: "inen",
      explanation: "'Bil-' fiiline edilgenlik eki '-in-' ve sıfat-fiil eki '-en' getirilerek 'bilinen' (malum olan) kelimesi türetilir."
    },
    {
      id: "b1_sb_pra_a4",
      promptAlbanian: "Kelimeyi işteş fiil yapacak eki seçiniz:",
      root: "bul",
      suffixes: ["uş", "ış", "ş", "üş"],
      correctSuffix: "uş",
      explanation: "'Bul-' fiiline işteşlik eki '-uş' getirilerek birlikte/karşılıklı yapılma anlamı taşıyan 'buluşmak' türetilir."
    },
    {
      id: "b1_sb_pra_a5",
      promptAlbanian: "Kelimeyi şart kipinin hikayesi (-saydık) ile çekimleyiniz:",
      root: "çalış",
      suffixes: ["saydık", "seydik", "saydım", "saydınız"],
      correctSuffix: "saydık",
      explanation: "Çalış- köküne kalın uyuma göre şart kipi, buffer 'y', geçmiş zaman ve çoğul şahıs eki eklenir: çalışsaydık."
    },
    {
      id: "b1_sb_pra_a6",
      promptAlbanian: "Kelimeyi sıfat-fiil (-diğinden beri) ekiyle çekimleyiniz:",
      root: "gel",
      suffixes: ["diğinden", "diğime", "diğinde", "diğince"],
      correctSuffix: "diğinden",
      explanation: "Gelmek kökünden süregelen bir zamanı belirtmek için '-diğinden beri' yapısının ilk parçası olan 'geldiğinden' seçilir."
    }
  ],
  practice_b: [
    {
      id: "b1_sb_pra_b1",
      promptAlbanian: "Kelimeyi işteş fiil yapacak eki seçiniz:",
      root: "gör",
      suffixes: ["üş", "iş", "ş", "uş"],
      correctSuffix: "üş",
      explanation: "Görmek fiiline ince-yuvarlak ses uyumuna göre '-üş' getirilerek 'görüşmek' (buluşup konuşmak) yapılır."
    },
    {
      id: "b1_sb_pra_b2",
      promptAlbanian: "Kelimeyi işteş fiil yapacak eki seçiniz:",
      root: "anla",
      suffixes: ["ş", "ış", "uş", "iş"],
      correctSuffix: "ş",
      explanation: "Ünlüyle biten 'anla-' köküne doğrudan '-ş' eklenerek 'anlaşmak' (mutabık olmak) fiili oluşturulur."
    },
    {
      id: "b1_sb_pra_b3",
      promptAlbanian: "Kelimeyi dönüşlü fiil yapacak eki seçiniz:",
      root: "yıka",
      suffixes: ["n", "ın", "en", "un"],
      correctSuffix: "n",
      explanation: "Ünlüyle biten 'yıka-' fiiline doğrudan '-n' dönüşlülük eki eklenerek 'yıkanmak' (banyo yapmak) fiili kurulur."
    },
    {
      id: "b1_sb_pra_b4",
      promptAlbanian: "Kelimeyi edilgen sıfat-fiil yapacak eki seçiniz:",
      root: "yaz",
      suffixes: ["ılan", "an", "dığı", "dığımız"],
      correctSuffix: "ılan",
      explanation: "Yaz- fiiline edilgenlik eki '-ıl-' ve sıfat-fiil '-an' eklenerek 'yazılan' (kaydedilen) elde edilir."
    },
    {
      id: "b1_sb_pra_b5",
      promptAlbanian: "Kelimeyi sıfat-fiil (-dığın) ekiyle çekimleyiniz:",
      root: "başar",
      suffixes: ["dığın", "dığım", "dığımız", "dıkları"],
      correctSuffix: "dığın",
      explanation: "Başarmak fiilinin ikinci şahıs iyelikli sıfat-fiil çekimi 'başardığın' (başar-dık-ın) şeklindedir."
    },
    {
      id: "b1_sb_pra_b6",
      promptAlbanian: "Kelimeyi geçmişte gereklilik (-meliydim) bildirecek şekilde çekimleyiniz:",
      root: "git",
      suffixes: ["meliydim", "malıydım", "meliydin", "meliydik"],
      correctSuffix: "meliydim",
      explanation: "Gitmek fiiline gereklilik eki, buffer 'y', geçmiş zaman ve birinci tekil şahıs eklenir: gitmeliydim."
    }
  ]
};

// ==========================================
// 4. B1 WORD SORTS (18 Questions - 6 for each set)
// ==========================================
export const B1_WORDSORT_QUESTIONS: Record<'official' | 'practice_a' | 'practice_b', TestWordSortQuestion[]> = {
  official: [
    {
      id: "b1_ws_off1",
      promptAlbanian: "Kelimeleri kurallı ve anlamlı bir cümle oluşturacak şekilde sıralayınız:",
      words: ["oynuyordum", "parkta", "Ben", "çocukken", "çok"],
      correctSequence: ["Ben", "çocukken", "parkta", "çok", "oynuyordum"],
      explanation: "Türkçe cümle yapısına göre özne başta, zaman zarfları ortada ve çekimli fiil sonda bulunur."
    },
    {
      id: "b1_ws_off2",
      promptAlbanian: "Kelimeleri kurallı ve anlamlı bir cümle oluşturacak şekilde sıralayınız:",
      words: ["kahve", "okurken", "Kitap", "içti"],
      correctSequence: ["Kitap", "okurken", "kahve", "içti"],
      explanation: "Önce yan cümlenin öğeleri (Kitap okurken), sonra ana cümlenin nesnesi ve fiili (kahve içti) gelir."
    },
    {
      id: "b1_ws_off3",
      promptAlbanian: "Kelimeleri kurallı ve anlamlı bir cümle oluşturacak şekilde sıralayınız:",
      words: ["çalışsaydım", "geçerdim", "Daha", "çok"],
      correctSequence: ["Daha", "çok", "çalışsaydım", "geçerdim"],
      explanation: "Miktar belirteci (Daha çok) şart eyleminin önünde yer alır, temel cümlenin yüklemi sonda bulunur."
    },
    {
      id: "b1_ws_off4",
      promptAlbanian: "Kelimeleri kurallı ve anlamlı bir cümle oluşturacak şekilde sıralayınız:",
      words: ["gürültü", "yapmamalıyız", "Apartmanda", "çok"],
      correctSequence: ["Apartmanda", "çok", "gürültü", "yapmamalıyız"],
      explanation: "Yer tamlayıcısı (Apartmanda) başta, nesne (çok gürültü) ortada ve olumsuz gereklilik yüklemi sonda yer alır."
    },
    {
      id: "b1_ws_off5",
      promptAlbanian: "Kelimeleri kurallı ve anlamlı bir cümle oluşturacak şekilde sıralayınız:",
      words: ["geldiğinden", "çalışıyor", "Bu", "beri", "şehre"],
      correctSequence: ["Bu", "şehre", "geldiğinden", "beri", "çalışıyor"],
      explanation: "Yönelme durumu (Bu şehre) ve zaman belirteci (geldiğinden beri) başta, çekimli eylem sonda yer alır."
    },
    {
      id: "b1_ws_off6",
      promptAlbanian: "Kelimeleri kurallı ve anlamlı bir cümle oluşturacak şekilde sıralayınız:",
      words: ["konuşuyor", "Türkçe", "Arnavutça", "hem", "O", "hem"],
      correctSequence: ["O", "hem", "Türkçe", "hem", "Arnavutça", "konuşuyor"],
      explanation: "Özne (O) başta, sıralama bağlacı (hem Türkçe hem Arnavutça) ortada ve yüklem (konuşuyor) sondadır."
    }
  ],
  practice_a: [
    {
      id: "b1_ws_pra_a1",
      promptAlbanian: "Kelimeleri kurallı ve anlamlı bir cümle oluşturacak şekilde sıralayınız:",
      words: ["projeyi", "yaptım", "kendim", "ben", "Bu"],
      correctSequence: ["Bu", "projeyi", "ben", "kendim", "yaptım"],
      explanation: "Nesne (Bu projeyi) belirtilmiş, özne ve dönüşlülük zamiri (ben kendim) yüklemden önce gelmiştir."
    },
    {
      id: "b1_ws_pra_a2",
      promptAlbanian: "Kelimeleri kurallı ve anlamlı bir cümle oluşturacak şekilde sıralayınız:",
      words: ["bak", "Kendine", "iyi", "çok"],
      correctSequence: ["Kendine", "çok", "iyi", "bak"],
      explanation: "Dönüşlülük zamiri (Kendine) yönelme halinde başta, niteleme grubu (çok iyi) ortada, fiil sondadır."
    },
    {
      id: "b1_ws_pra_a3",
      promptAlbanian: "Kelimeleri kurallı ve anlamlı bir cümle oluşturacak şekilde sıralayınız:",
      words: ["giyinirim", "hızlıca", "yıkanıp", "Her", "sabah"],
      correctSequence: ["Her", "sabah", "hızlıca", "yıkanıp", "giyinirim"],
      explanation: "Zaman zarfı (Her sabah) başta, zarf-fiil grubu (hızlıca yıkanıp) ortada, yüklem sonda bulunur."
    },
    {
      id: "b1_ws_pra_a4",
      promptAlbanian: "Kelimeleri kurallı ve anlamlı bir cümle oluşturacak şekilde sıralayınız:",
      words: ["tarafından", "yazıldı", "bir", "yazar", "Bu", "kitap", "ünlü"],
      correctSequence: ["Bu", "kitap", "ünlü", "bir", "yazar", "tarafından", "yazıldı"],
      explanation: "Edilgen özneden sonra 'tarafından' ilgeci ile kurulan etken unsur gelir, edilgen yüklem sonda yer alır."
    },
    {
      id: "b1_ws_pra_a5",
      promptAlbanian: "Kelimeleri kurallı ve anlamlı bir cümle oluşturacak şekilde sıralayınız:",
      words: ["mektup", "yazdırdı", "Babam", "yeni", "bir"],
      correctSequence: ["Babam", "yeni", "bir", "mektup", "yazdırdı"],
      explanation: "Özne (Babam) başta, belirtisiz nesne (yeni bir mektup) ortada ve ettirgen yüklem (yazdırdı) sondadır."
    },
    {
      id: "b1_ws_pra_a6",
      promptAlbanian: "Kelimeleri kurallı ve anlamlı bir cümle oluşturacak şekilde sıralayınız:",
      words: ["bulmamız", "haber", "kaynakları", "Güvenilir", "lazım"],
      correctSequence: ["Güvenilir", "haber", "kaynakları", "bulmamız", "lazım"],
      explanation: "Özne grubu (Güvenilir haber kaynakları) başta, iyelikli isim-fiil yüklem önünde, gereklilik kelimesi (lazım) sondadır."
    }
  ],
  practice_b: [
    {
      id: "b1_ws_pra_b1",
      promptAlbanian: "Kelimeleri kurallı ve anlamlı bir cümle oluşturacak şekilde sıralayınız:",
      words: ["bebek", "mutlu", "bizi", "Gülen", "ediyor"],
      correctSequence: ["Gülen", "bebek", "bizi", "mutlu", "ediyor"],
      explanation: "Sıfat-fiil grubu (Gülen bebek) özne olarak başta, nesne (bizi) ortada ve birleşik eylem sonda yer alır."
    },
    {
      id: "b1_ws_pra_b2",
      promptAlbanian: "Kelimeleri kurallı ve anlamlı bir cümle oluşturacak şekilde sıralayınız:",
      words: ["en", "yediğim", "güzel", "Bu", "yemekti"],
      correctSequence: ["Bu", "yediğim", "en", "güzel", "yemekti"],
      explanation: "İşaret zamiri (Bu) başta, sıfat-fiil ve üstünlük derecesi alan isim yüklem olarak sondadır."
    },
    {
      id: "b1_ws_pra_b3",
      promptAlbanian: "Kelimeleri kurallı ve anlamlı bir cümle oluşturacak şekilde sıralayınız:",
      words: ["mektup", "önemlidir", "yazacağın", "Yarın"],
      correctSequence: ["Yarın", "yazacağın", "mektup", "önemlidir"],
      explanation: "Zaman zarfı (Yarın) başta, gelecek zaman sıfat-fiil grubu (yazacağın mektup) ortada ve yüklem sondadır."
    },
    {
      id: "b1_ws_pra_b4",
      promptAlbanian: "Kelimeleri kurallı ve anlamlı bir cümle oluşturacak şekilde sıralayınız:",
      words: ["söyledi", "tüm", "uyudu", "Çalıştığını", "gün", "oysa"],
      correctSequence: ["Çalıştığını", "söyledi", "oysa", "tüm", "gün", "uyudu"],
      explanation: "Nesne ve fiil başta (Çalıştığını söyledi), bağlaç ortada (oysa), zaman ve ikinci eylem sonda bulunur."
    },
    {
      id: "b1_ws_pra_b5",
      promptAlbanian: "Kelimeleri kurallı ve anlamlı bir cümle oluşturacak şekilde sıralayınız:",
      words: ["çay", "içti", "kafe", "ne", "O", "ne"],
      correctSequence: ["O", "ne", "çay", "ne", "kafe", "içti"],
      explanation: "Özne (O) başta, olumsuzluk bağlacı (ne çay ne kafe) ortada, yüklem düz cümle yapısında olumlu olarak sondadır."
    },
    {
      id: "b1_ws_pra_b6",
      promptAlbanian: "Kelimeleri kurallı ve anlamlı bir cümle oluşturacak şekilde sıralayınız:",
      words: ["karşısında", "pes", "lazım", "etmemek", "Zorluklar"],
      correctSequence: ["Zorluklar", "karşısında", "pes", "etmemek", "lazım"],
      explanation: "İlgeç öbeği (Zorluklar karşısında) başta, isim-fiil grubu ortada ve yüklem (lazım) sondadır."
    }
  ]
};

// ==========================================
// 5. B1 WRITING TRANSLATIONS (9 Questions - 3 for each set)
// ==========================================
export const B1_WRITING_QUESTIONS: Record<'official' | 'practice_a' | 'practice_b', TestWritingQuestion[]> = {
  official: [
    {
      id: "b1_wq_off1",
      promptAlbanian: "Geçmişte size daha önce haber verilmiş olsaydı geleceğinizi ifade eden şart cümlesini yazınız:",
      correctAnswers: [
        "Bana daha önce söyleseydin gelirdim",
        "Daha önce söyleseydin gelirdim",
        "Bana daha önce söylesen gelirdim"
      ],
      explanation: "Şart kipinin hikayesi (söyleseydin) ve geniş zamanın hikayesi (gelirdim) ile kurulan bir cümledir."
    },
    {
      id: "b1_wq_off2",
      promptAlbanian: "Türkçe çalışmaya başladığınız zamandan beri çok okuduğunuzu belirten cümleyi yazınız:",
      correctAnswers: [
        "Türkçe öğrenmeye başladığımdan beri çok okuyorum",
        "Türkçe öğrenmeye başladığımdan beri çok kitap okuyorum",
        "Türkçe öğrenmeye başladığımdan beri çok okurum"
      ],
      explanation: "-diğinden beri kalıbı (başladığımdan beri) ve şimdiki zaman kullanılarak oluşturulan cümledir."
    },
    {
      id: "b1_wq_off3",
      promptAlbanian: "Dün yazdığınız mektubun gönderildiğini bildiren edilgen (pasif) cümleyi yazınız:",
      correctAnswers: [
        "Dün yazdığımız mektup gönderildi",
        "Dün yazdığımız mektup yollandı"
      ],
      explanation: "Sıfat-fiil grubu (Dün yazdığımız mektup) ve edilgen yüklem (gönderildi) içeren yapıdır."
    }
  ],
  practice_a: [
    {
      id: "b1_wq_pra_a1",
      promptAlbanian: "Hastaneye gitmek durumunda kaldığınızı (-mek zorunda kalmak) belirten geçmiş zaman cümlesini yazınız:",
      correctAnswers: [
        "O hastaneye gitmek zorunda kaldı",
        "Hastaneye gitmek zorunda kaldı"
      ],
      explanation: "Zorunluluk yapısı (-mek zorunda kalmak) üçüncü şahsa göre geçmiş zamanda kurulmuştur."
    },
    {
      id: "b1_wq_pra_a2",
      promptAlbanian: "İşe gittiğiniz esnada (giderken) bir arkadaşınızı gördüğünüzü belirten cümleyi yazınız:",
      correctAnswers: [
        "İşe giderken bir arkadaş gördüm",
        "İşe giderken bir arkadaşımı gördüm",
        "Ben işe giderken bir arkadaşımla karşılaştım"
      ],
      explanation: "Zaman zarf-fiili (-ken) ve geçmiş zaman yüklemi (gördüm) ile kurulan cümledir."
    },
    {
      id: "b1_wq_pra_a3",
      promptAlbanian: "Hem haberlerin hem de yorumların önemli olduğunu belirten ikili bağlaçlı (hem... hem...) cümleyi yazınız:",
      correctAnswers: [
        "Hem haberler hem de yorumlar önemlidir",
        "Hem haberler hem yorumlar önemlidir",
        "Hem haber hem de yorumlar önemlidir"
      ],
      explanation: "Sıralama bağlacı (hem... hem de...) ve isim cümlesi yüklemi (önemlidir) ile kurulan yapıdır."
    }
  ],
  practice_b: [
    {
      id: "b1_wq_pra_b1",
      promptAlbanian: "Karşınızdaki kişilere (siz) hitap ederek kendi sağlıklarına dikkat etmelerini rica eden cümleyi yazınız:",
      correctAnswers: [
        "Kendinize iyi bakın",
        "Kendinize çok iyi bakın",
        "Kendinize bakın"
      ],
      explanation: "Dönüşlülük zamiri yönelme eki alır (Kendinize) ve bakmak fiili çoğul emir kipiyle çekimlenir."
    },
    {
      id: "b1_wq_pra_b2",
      promptAlbanian: "Yarın izlenecek olan filmin çok güzel olacağını belirten gelecek zaman sıfat-fiil cümlesini yazınız:",
      correctAnswers: [
        "Yarın izleyeceğimiz film çok güzel",
        "Yarın bakacağımız film çok güzel",
        "Yarın izleyeceğimiz film çok güzeldir",
        "Yarın seyredeceğimiz film çok güzel"
      ],
      explanation: "Gelecek zaman sıfat-fiil grubu (izleyeceğimiz film) ve isim yüklemi (çok güzel) ile kurulan cümledir."
    },
    {
      id: "b1_wq_pra_b3",
      promptAlbanian: "Yarın yağmur yağması durumunda evde kalınacağını belirten geniş zaman şart cümlesini yazınız:",
      correctAnswers: [
        "Yarın yağmur yağarsa evde kalacağız",
        "Yarın yağmur yağarsa evde duracağız",
        "Eğer yarın yağmur yağarsa evde kalacağız"
      ],
      explanation: "Geniş zaman şartı (yağarsa) ve gelecek zaman çekimli yüklemi (kalacağız) ile kurulan şart cümlesidir."
    }
  ]
};

// ==========================================
// 6. MAIN RETRIEVAL HELPER
// ==========================================
export function getB1Test(testType: 'official' | 'practice_a' | 'practice_b'): B1Test {
  return {
    readingSection: B1_READING_SECTIONS[testType],
    multipleChoice: B1_MC_QUESTIONS[testType],
    suffixBuilder: B1_SUFFIX_QUESTIONS[testType],
    wordSort: B1_WORDSORT_QUESTIONS[testType],
    writing: B1_WRITING_QUESTIONS[testType]
  };
}
