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

export interface A2Test {
  readingSection: TestReadingSection;
  multipleChoice: TestMCQuestion[];
  suffixBuilder: TestSuffixQuestion[];
  wordSort: TestWordSortQuestion[];
  writing: TestWritingQuestion[];
}

// ==========================================
// 1. READING SECTIONS (4 Texts × 5 Questions = 20 Questions)
// ==========================================
export const A2_READING_SECTIONS: TestReadingSection[] = [
  {
    id: "r1",
    title: "Fethiye Pushimet (Fethiye Tatili)",
    textTurkish: "Geçen yaz ailemle birlikte Fethiye'ye gittik. Orada çok güzel bir otelde kaldık. Fethiye'de hava her gün çok sıcaktı. Sabahları otelde kahvaltı ettik, sonra Ölüdeniz'de yüzdük. Bir gün tekne turuna katıldık ve koyları gezdik. Gelecek yaz tekrar gitmek istiyoruz çünkü orada çok eğlendik. Babam şimdiden otel rezervasyonunu yapacak.",
    promptAlbanian: "Lexoni tekstin e mëposhtëm në turqisht dhe përgjigjuni pesë pyetjeve:",
    questions: [
      {
        id: "r1_q1",
        question: "Fethiye'ye ne zaman gittiler?",
        options: ["Geçen yaz", "Gelecek yaz", "Dün sabah", "Geçen hafta"],
        correctAnswer: "Geçen yaz",
        explanation: "Tekst fillon me fjalët 'Geçen yaz' (Verën e kaluar)."
      },
      {
        id: "r1_q2",
        question: "Fethiye'de nerede kaldılar?",
        options: ["Çadırda", "Güzel bir otelde", "Arkadaşlarının evinde", "Köyde"],
        correctAnswer: "Güzel bir otelde",
        explanation: "Teksti thotë: 'Orada çok güzel bir otelde kaldık' (Aty qëndruam në një hotel shumë të bukur)."
      },
      {
        id: "r1_q3",
        question: "Sabahları ne yaptılar?",
        options: ["Denizde yüzdüler", "Otelde kahvaltı ettiler", "Tekne turuna katıldılar", "Kitap okudular"],
        correctAnswer: "Otelde kahvaltı ettiler",
        explanation: "Teksti thotë: 'Sabahları otelde kahvaltı ettik' (Mëngjeseve hëngrëm mëngjes në hotel)."
      },
      {
        id: "r1_q4",
        question: "Tekne turu ile ne yaptılar?",
        options: ["Koyları gezdiler", "Fethiye'ye gittiler", "Otel rezervasyonu yaptılar", "Ölüdeniz'de yüzdüler"],
        correctAnswer: "Koyları gezdiler",
        explanation: "Teksti specifikon: 'Bir gün tekne turuna katıldık ve koyları gezdik' (Një ditë morëm pjesë në tur me anije dhe vizituam gjiret)."
      },
      {
        id: "r1_q5",
        question: "Gelecek yaz için babası ne yapacak?",
        options: ["Tekne turuna katılacak", "Fethiye'ye yürüyerek gidecek", "Otel rezervasyonunu yapacak", "Ölüdeniz'de yüzecek"],
        correctAnswer: "Otel rezervasyonunu yapacak",
        explanation: "Teksti thotë: 'Babam şimdiden otel rezervasyonunu yapacak' (Babai im që tani do të bëjë rezervimin e hotelit)."
      }
    ]
  },
  {
    id: "r2",
    title: "Bir Yazılımcının Günü (Bir Yazılımcının Rutini)",
    textTurkish: "Benim adım Hakan. Ben bir yazılım şirketinde çalışıyorum. Her sabah genellikle saat yedi buçukta uyanırım. Duş alırım, hızlıca kahvaltı ederim ve sekizde evden çıkarım. Metroyla işe giderim. Ofise varınca önce kahve içerim ve e-postalarımı kontrol ederim. Gün boyu kod yazarım ve yeni projeler geliştiririm. Akşamları ise spora giderim veya kitap okurum.",
    promptAlbanian: "Lexoni tekstin e mëposhtëm në turqisht dhe përgjigjuni pesë pyetjeve:",
    questions: [
      {
        id: "r2_q1",
        question: "Hakan ne iş yapıyor?",
        options: ["Doktor", "Öğretmen", "Yazılımcı", "Polis"],
        correctAnswer: "Yazılımcı",
        explanation: "Hakan punon në një kompani softuerësh ('yazılım şirketinde çalışıyorum'), që do të thotë se është yazılımcı (programues)."
      },
      {
        id: "r2_q2",
        question: "Hakan sabahları genellikle saat kaçta uyanır?",
        options: ["07:30", "08:00", "07:00", "08:30"],
        correctAnswer: "07:30",
        explanation: "Teksti thotë: 'Her sabah genellikle saat yedi buçukta (yedi buçuk = 07:30) uyanırım'."
      },
      {
        id: "r2_q3",
        question: "İşe ne ile gider?",
        options: ["Otobüsle", "Metroyla", "Arabayla", "Yürüyerek"],
        correctAnswer: "Metroyla",
        explanation: "Teksti specifikon: 'Metroyla işe giderim' (Shkoj në punë me metro)."
      },
      {
        id: "r2_q4",
        question: "Ofise varınca ilk olarak ne yapar?",
        options: ["Kod yazar", "Kahve içer ve e-postaları kontrol eder", "Spora gider", "Hızlıca kahvaltı eder"],
        correctAnswer: "Kahve içer ve e-postaları kontrol eder",
        explanation: "Teksti thotë: 'Ofise varınca önce kahve içerim ve e-postalarımı kontrol ederim'."
      },
      {
        id: "r2_q5",
        question: "Hakan akşamları ne yapar?",
        options: ["İşe gider", "Kahvaltı eder", "Spora gider veya kitap okur", "E-postalarını kontrol eder"],
        correctAnswer: "Spora gider veya kitap okur",
        explanation: "Teksti thotë: 'Akşamları ise spora giderim veya kitap okurum'."
      }
    ]
  },
  {
    id: "r3",
    title: "Yetenekler ve Diller (Yetenekler ve Dillerimiz)",
    textTurkish: "Ben Türkçe ve Arnavutça konuşabiliyorum. Şimdi ise İtalyanca öğreniyorum. İtalyanca çok zor bir dil değil, kolayca öğrenebiliyorum. Kız kardeşim Aylin ise piyano çalabiliyor ama gitar çalamıyor. Aylin çok güzel şarkı da söyleyebilir. Biz her hafta sonu müzik odasında birlikte çalışabiliyoruz. Gelecekte büyük konserler verebiliriz.",
    promptAlbanian: "Lexoni tekstin e mëposhtëm në turqisht dhe përgjigjuni pesë pyetjeve:",
    questions: [
      {
        id: "r3_q1",
        question: "Yazar hangi dilleri konuşabiliyor?",
        options: ["Türkçe ve İtalyanca", "Türkçe ve Arnavutça", "Arnavutça ve İtalyanca", "Sadece İtalyanca"],
        correctAnswer: "Türkçe ve Arnavutça",
        explanation: "Teksti fillon me: 'Ben Türkçe ve Arnavutça konuşabiliyorum'."
      },
      {
        id: "r3_q2",
        question: "Yazar İtalyanca hakkında ne düşünüyor?",
        options: ["Çok zor bir dil", "Çok sıkıcı bir dil", "Çok zor bir dil değil, kolayca öğrenebiliyor", "Hiç öğrenemiyor"],
        correctAnswer: "Çok zor bir dil değil, kolayca öğrenebiliyor",
        explanation: "Teksti specifikon: 'İtalyanca çok zor bir dil değil, kolayca öğrenebiliyorum'."
      },
      {
        id: "r3_q3",
        question: "Aylin hangi enstrümanı çalabiliyor?",
        options: ["Gitar", "Piyano", "Keman", "Flüt"],
        correctAnswer: "Piyano",
        explanation: "Teksti thotë: 'kız kardeşim Aylin ise piyano çalabiliyor' (motra ime Aylin mund të luajë në piano)."
      },
      {
        id: "r3_q4",
        question: "Aylin neyi yapamıyor?",
        options: ["Şarkı söyleyemiyor", "Gitar çalamıyor", "İtalyanca öğrenemiyor", "Piyano çalamıyor"],
        correctAnswer: "Gitar çalamıyor",
        explanation: "Teksti thotë: 'piyano çalabiliyor ama gitar çalamıyor' (luan në piano por nuk mund të luajë në gitarë)."
      },
      {
        id: "r3_q5",
        question: "Müzik odasında ne zaman çalışıyorlar?",
        options: ["Her gün", "Her akşam", "Her hafta sonu", "Sadece pazartesi günleri"],
        correctAnswer: "Her hafta sonu",
        explanation: "Teksti specifikon: 'Biz her hafta sonu müzik odasında birlikte çalışabiliyoruz' (Ne çdo fundjavë mund të punojmë së bashku në dhomën e muzikës)."
      }
    ]
  },
  {
    id: "r4",
    title: "Köy Hayatı ve Kurallar (Köy Hayatı ve Dede Kuralları)",
    textTurkish: "Küçükken her yaz dedemin köydeki çiftliğine gidiyorduk. Dedem orada sebze yetiştiriyordu. Çiftlikte uymamız gereken bazı kurallar vardı. Sabahları çok erken uyanmalıydık ve dedeme yardım etmeliydik. Hayvanları beslemeliydik. Öğleden sonraları ise nehirde yüzebiliyorduk. Köy hayatı şehirden daha sessizdi. Orada her şey çok doğaldı.",
    promptAlbanian: "Lexoni tekstin e mëposhtëm në turqisht dhe përgjigjuni pesë pyetjeve:",
    questions: [
      {
        id: "r4_q1",
        question: "Yazar küçükken her yaz nereye gidiyordu?",
        options: ["Şehirdeki eve", "Dedemin köydeki çiftliğine", "Deniz kenarına", "Yurtdışına"],
        correctAnswer: "Dedemin köydeki çiftliğine",
        explanation: "Teksti thotë: 'dedemin köydeki çiftliğine gidiyorduk' (shkonim në fermën e gjyshit në fshat)."
      },
      {
        id: "r4_q2",
        question: "Dedesi çiftlikte ne yapıyordu?",
        options: ["Spor yapıyordu", "Sebze yetiştiriyordu", "Şarkı söylüyordu", "Kitap yazıyordu"],
        correctAnswer: "Sebze yetiştiriyordu",
        explanation: "Teksti thotë: 'Dedem orada sebze yetiştiriyordu' (Gjyshi kultivonte perime atje)."
      },
      {
        id: "r4_q3",
        question: "Çiftlikteki kurallardan biri nedir?",
        options: ["Geç uyanmak", "Sabahları erken uyanmak ve yardım etmek", "Hiç çalışmamak", "Sadece televizyon izlemek"],
        correctAnswer: "Sabahları erken uyanmak ve yardım etmek",
        explanation: "Teksti thotë: 'Sabahları çok erken uyanmalıydık ve dedeme yardım etmeliydik'."
      },
      {
        id: "r4_q4",
        question: "Öğleden sonraları ne yapabiliyorlardı?",
        options: ["Nehirde yüzebiliyorlardı", "Otelde kalabiliyorlardı", "Spora gidebiliyorlardı", "Rezervasyon yapabiliyorlardı"],
        correctAnswer: "Nehirde yüzebiliyorlardı",
        explanation: "Teksti thotë: 'Öğleden sonraları ise nehirde yüzebiliyorduk' (Pasditeve mund të notonim në lumë)."
      },
      {
        id: "r4_q5",
        question: "Köy hayatı şehir hayatına göre nasıldı?",
        options: ["Daha kalabalıktı", "Daha gürültülüydü", "Daha sessizdi", "Daha zordu"],
        correctAnswer: "Daha sessizdi",
        explanation: "Teksti thotë: 'Köy hayatı şehirden daha sessizdi' (Jeta në fshat ishte më e qetë se në qytet)."
      }
    ]
  }
];

// ==========================================
// 2. MULTIPLE CHOICE QUESTIONS (30 Questions)
// ==========================================
export const A2_MC_QUESTIONS: TestMCQuestion[] = [
  {
    id: "mc1",
    promptAlbanian: "Zgjidhni formën e saktë të kohës së shkuar të foljes 'yapmak' për përemrin 'biz':",
    questionTurkish: "Biz dün ödevlerimizi \_\_\_\_\_.",
    options: ["yaptık", "yaptınız", "yaptım", "yaptılar"],
    correctAnswer: "yaptık",
    explanation: "Për përemrin 'biz' (ne), prapashtesa e kohës së shkuar është '-dık/-dik/-duk/-dük' ose '-tık/-tik/-tuk/-tük'. Kështu 'yap' + 'tık' = 'yaptık'."
  },
  {
    id: "mc2",
    promptAlbanian: "Zgjidhni formën e saktë të kohës së ardhshme për përemrin 'ben' (ndryshimi i k/ğ):",
    questionTurkish: "Yarın akşam arkadaşlarımla \_\_\_\_\_.",
    options: ["buluşacağım", "buluşacaksın", "buluşacağız", "buluşacaklar"],
    correctAnswer: "buluşacağım",
    explanation: "Për kohën e ardhshme ('gelecek zaman') veta e parë njëjës ('ben') merr prapashtesën '-eceğim / -acağım'. Bashkëtingëllorja 'k' zbutet në 'ğ': buluş-acak-ım -> buluşacağım."
  },
  {
    id: "mc3",
    promptAlbanian: "Cila prapashtesë tregon aftësi (Potential Mood - 'mund të') në këtë fjali?",
    questionTurkish: "Babam çok güzel yemek \_\_\_\_\_.",
    options: ["yapmalı", "yapıyor", "yapabilir", "yaptı"],
    correctAnswer: "yapabilir",
    explanation: "Prapashtesa e potencialit është '-ebilir/-abilir'. Kështu 'yapabilir' do të thotë 'mund të bëjë'."
  },
  {
    id: "mc4",
    promptAlbanian: "Plotësoni fjalinë me formën e saktë të detyrimit (Necessity Mood - 'duhet'):",
    questionTurkish: "Çok hastayım, doktora \_\_\_\_\_.",
    options: ["gitmeliyim", "gidebilirim", "gittim", "giderim"],
    correctAnswer: "gitmeliyim",
    explanation: "Folja 'gitmek' në veten e parë njëjës ('ben') me mënyrën detyrore ('-meli/-malı') bëhet 'gitmeliyim' (duhet të shkoj)."
  },
  {
    id: "mc5",
    promptAlbanian: "Zgjidhni rasën rrjedhore (Ablative Case) të saktë për krahasimin:",
    questionTurkish: "Ayşe, Fatma'\_\_\_\_\_ daha çalışkandır.",
    options: ["dan", "den", "tan", "ten"],
    correctAnswer: "dan",
    explanation: "Emri 'Fatma' mbaron me zanore të trashë, kështu që merr prapashtesën '-dan' për të formuar krahasimin ('më punëtore se Fatma')."
  },
  {
    id: "mc6",
    promptAlbanian: "Zgjidhni formën e saktë të kohës së shkuar të vazhdueshme (Past Continuous):",
    questionTurkish: "O yıllarda her sabah spor \_\_\_\_\_.",
    options: ["yapıyordum", "yapıyordu", "yaptı", "yapacak"],
    correctAnswer: "yapıyordu",
    explanation: "Për veten e tretë njëjës ('o'), koha e shkuar e vazhdueshme bëhet 'yap' + 'ıyor' + 'du' = 'yapıyordu' (bënte)."
  },
  {
    id: "mc7",
    promptAlbanian: "Plotësoni fjalinë duke përdorur lidhëzën e thjeshtë zarfore (Adverbialip):",
    questionTurkish: "Sabah uyan\_\_\_\_\_ hemen kahvaltı ettim.",
    options: ["up", "ıp", "ip", "üp"],
    correctAnswer: "ıp",
    explanation: "Për uyan- (vokal i fundit 'a'), prapashtesa sipas harmonisë 4-she është '-ıp'. Kështu 'uyanıp' do të thotë 'pasi u zgjova / duke u zgjuar'."
  },
  {
    id: "mc8",
    promptAlbanian: "Cili është përkthimi i saktë i fjalës 'meslek' në shqip?",
    questionTurkish: "Gelecekte hangi mesleği seçeceksin?",
    options: ["Hobin", "Profesionin", "Qytetin", "Librin"],
    correctAnswer: "Profesionin",
    explanation: "'Meslek' do të thotë 'profesion' ose 'punë'."
  },
  {
    id: "mc9",
    promptAlbanian: "Zgjidhni fjalën që lidhet me udhëtimin (Travel):",
    questionTurkish: "Tatile gitmek için bilet \_\_\_\_\_.",
    options: ["söyledim", "aldım", "çalıştım", "uyudum"],
    correctAnswer: "aldım",
    explanation: "Për të shkuar në pushime blehet ose merret bileta: 'bilet aldım' (bleva biletë)."
  },
  {
    id: "mc10",
    promptAlbanian: "Zgjidhni fjalën e saktë për emocionet (Emotions):",
    questionTurkish: "Köpekten çok \_\_\_\_\_.",
    options: ["korktum", "güldüm", "sevindim", "konuştum"],
    correctAnswer: "korktum",
    explanation: "'Korkmak' (të kesh frikë). Nga qeni kemi frikë: 'köpekten korktum' (pata frikë nga qeni)."
  },
  {
    id: "mc11",
    promptAlbanian: "Zgjidhni formën e saktë të Aorist (Koha e Gjerë) mohuese për 'ben':",
    questionTurkish: "Ben asla yalan \_\_\_\_\_.",
    options: ["söylemem", "söylemezsin", "söylemez", "söylemeyiz"],
    correctAnswer: "söylemem",
    explanation: "Negacioni i kohës së gjerë për veten e parë njëjës ('ben') është '-mem/-mam'. Kështu 'söylemem' (nuk them)."
  },
  {
    id: "mc12",
    promptAlbanian: "Plotësoni me prapashtesën e saktë të rasës rrjedhore pas një bashkëtingëlloreje të fortë (Fıstıkçı Şahap):",
    questionTurkish: "Market\_\_\_\_\_ ekmek ve süt aldım.",
    options: ["den", "ten", "dan", "tan"],
    correctAnswer: "ten",
    explanation: "Fjala 'market' mbaron me 't' (bashkëtingëllore e fortë) dhe ka vokal të hollë, prandaj merr '-ten'."
  },
  {
    id: "mc13",
    promptAlbanian: "Zgjidhni formën e saktë të kohës së ardhshme mohuese për veten 'sen':",
    questionTurkish: "Sen yarın okula \_\_\_\_\_ mi?",
    options: ["gitmeyecek misin", "gitmedin mi", "gitmez misin", "gitmeli misin"],
    correctAnswer: "gitmeyecek misin",
    explanation: "Koha e ardhshme pyetëse mohuese për 'sen' është 'git' + 'me' + 'y' + 'ecek' + 'mi' + 'sin' = 'gitmeyecek misin' (nuk do të shkosh?)."
  },
  {
    id: "mc14",
    promptAlbanian: "Zgjidhni formën e saktë të potencialit mohues (Abilities - 'nuk mund të'):",
    questionTurkish: "Gözlüğüm yok, gazete \_\_\_\_\_.",
    options: ["okuyamam", "okuyabilirim", "okumalıyım", "okumuyorum"],
    correctAnswer: "okuyamam",
    explanation: "Mohimi i aftësisë (potencialit) bëhet me '-ama/-eme'. Kështu 'oku-ya-ma-m' do të thotë 'nuk mund të lexoj'."
  },
  {
    id: "mc15",
    promptAlbanian: "Cila prapashtesë tregon nevojë ose këshillë të fortë në veten 'siz'?",
    questionTurkish: "Sınav için çok çalış\_\_\_\_\_.",
    options: ["malısınız", "melisiniz", "dınız", "yorsunuz"],
    correctAnswer: "malısınız",
    explanation: "Për 'çalışmak' (vokal i trashë), detyrimi për 'siz' (ju) është '-malısınız'."
  },
  {
    id: "mc16",
    promptAlbanian: "Plotësoni fjalinë me foljen e saktë të kohës së shkuar të vazhdueshme:",
    questionTurkish: "Araba gelirken ben yolda \_\_\_\_\_.",
    options: ["yürüyordum", "yürüyorum", "yürüyeceğim", "yürürüm"],
    correctAnswer: "yürüyordum",
    explanation: "Folja duhet të jetë në kohën e shkuar të vazhdueshme për veten 'ben': 'yürü' + 'y' + 'ordu' + 'm' = 'yürüyordum' (po ecja)."
  },
  {
    id: "mc17",
    promptAlbanian: "Zgjidhni fjalën që përfaqëson mjedisin (Environment):",
    questionTurkish: "Ormandaki \_\_\_\_\_ korumalıyız.",
    options: ["ağaçları", "bilgisayarları", "meslekleri", "otobüsleri"],
    correctAnswer: "ağaçları",
    explanation: "Në pyll mbrojmë pemët: 'ağaçları korumalıyız' (duhet të mbrojmë pemët)."
  },
  {
    id: "mc18",
    promptAlbanian: "Zgjidhni lidhëzën e saktë zarfore (Adverbialip) për foljen 'gelmek':",
    questionTurkish: "Eve gel\_\_\_\_\_ televizyon izledim.",
    options: ["ip", "ıp", "up", "üp"],
    correctAnswer: "ip",
    explanation: "Sipas harmonisë vokalore për 'gel-' (vokal i hollë 'e'), prapashtesa është '-ip'."
  },
  {
    id: "mc19",
    promptAlbanian: "Cili është përkthimi i saktë i fjalës 'çevre' në shqip?",
    questionTurkish: "Temiz bir çevre için çöpleri yere atmayın.",
    options: ["Punë", "Hob", "Mjedis", "Shoqëri"],
    correctAnswer: "Mjedis",
    explanation: "'Çevre' në shqip do të thotë 'mjedis' ose 'rrethinë'."
  },
  {
    id: "mc20",
    promptAlbanian: "Zgjidhni fjalën e saktë për teknologjinë (Technology):",
    questionTurkish: "Yeni bir \_\_\_\_\_ almak istiyorum çünkü eskisinde kod yazamıyorum.",
    options: ["bilet", "orman", "bilgisayar", "hedef"],
    correctAnswer: "bilgisayar",
    explanation: "Kod shkruhet në kompjuter: 'bilgisayar' (kompjuter)."
  },
  {
    id: "mc21",
    promptAlbanian: "Zgjidhni formën e saktë të Aorist (Koha e Gjerë) pohuese për foljet njërrokshe që janë përjashtim (si gel-):",
    questionTurkish: "O her akşam bize \_\_\_\_\_.",
    options: ["gelir", "geler", "gelmeli", "gelse"],
    correctAnswer: "gelir",
    explanation: "Folja 'gelmek' është një nga përjashtimet njërrokshe që merr '-ir' në vend të '-er' në kohën e gjerë: 'gelir' (vjen)."
  },
  {
    id: "mc22",
    promptAlbanian: "Plotësoni fjalinë me formën e saktë të kohës së shkuar për veten 'sen':",
    questionTurkish: "Dün neden beni \_\_\_\_\_?",
    options: ["aradım", "aradın", "aradı", "aradınız"],
    correctAnswer: "aradın",
    explanation: "Për veten e dytë njëjës ('sen'), koha e shkuar e 'aramak' është 'aradın' (telefonove)."
  },
  {
    id: "mc23",
    promptAlbanian: "Zgjidhni prapashtesën e saktë të kohës së ardhshme për 'siz':",
    questionTurkish: "Siz haftaya tatile mi \_\_\_\_\_?",
    options: ["gideceksiniz", "gideceğim", "gideceğiz", "gitti"],
    correctAnswer: "gideceksiniz",
    explanation: "Për 'siz' (ju), koha e ardhshme e 'gitmek' (me voicing t->d) është 'gideceksiniz' (do të shkoni)."
  },
  {
    id: "mc24",
    promptAlbanian: "Zgjidhni formën e saktë të potencialit pyetës për 'ben':",
    questionTurkish: "Lütfen içeri gir\_\_\_\_\_ miyim?",
    options: ["ebilir", "ebilir miyim", "ebilir misin", "meli"],
    correctAnswer: "ebilir miyim",
    explanation: "Pyetja e potencialit për veten e parë 'ben' (mund të hyj?) është 'girebilir miyim'."
  },
  {
    id: "mc25",
    promptAlbanian: "Plotësoni fjalinë me prapashtesën e detyrimit mohues:",
    questionTurkish: "Burada sigara iç\_\_\_\_\_.",
    options: ["memelisiniz", "melisiniz", "meyebilirsiniz", "mediniz"],
    correctAnswer: "memelisiniz",
    explanation: "Mohimi i detyrimit për 'siz' (ju nuk duhet të...) është 'iç-me-meli-siniz'."
  },
  {
    id: "mc26",
    promptAlbanian: "Zgjidhni formën e saktë të kohës së shkuar të vazhdueshme për 'biz':",
    questionTurkish: "Biz o zamanlar Ankara'da \_\_\_\_\_.",
    options: ["yaşıyorduk", "yaşadık", "yaşıyoruz", "yaşayacağız"],
    correctAnswer: "yaşıyorduk",
    explanation: "Për 'biz' (ne), koha e shkuar e vazhdueshme e 'yaşamak' është 'yaşıyorduk' (jetonim)."
  },
  {
    id: "mc27",
    promptAlbanian: "Plotësoni me lidhëzën zarfore (Adverbialip) për foljen 'bakmak':",
    questionTurkish: "Arkasını dön\_\_\_\_\_ güldü.",
    options: ["üp", "ıp", "ip", "üp"],
    correctAnswer: "üp",
    explanation: "Për 'dönmek' (vokal i fundit 'ö'), prapashtesa është '-üp'."
  },
  {
    id: "mc28",
    promptAlbanian: "Cili është përkthimi i saktë i fjalës 'duygu' në shqip?",
    questionTurkish: "Müzik dinlemek duygularımızı etkiler.",
    options: ["Mendimet", "Ndjenjat/Emocionet", "Profesionet", "Udhëtimet"],
    correctAnswer: "Ndjenjat/Emocionet",
    explanation: "'Duygu' në shqip do të thotë 'ndjenjë' ose 'emocion'."
  },
  {
    id: "mc29",
    promptAlbanian: "Zgjidhni fjalën që i përket sferës shoqërore (Society):",
    questionTurkish: "İnsanlar birbirine \_\_\_\_\_ göstermelidir.",
    options: ["saygı", "bilgisayar", "bilet", "orman"],
    correctAnswer: "saygı",
    explanation: "Në shoqëri njerëzit duhet të tregojnë respekt: 'saygı' (respekt)."
  },
  {
    id: "mc30",
    promptAlbanian: "Zgjidhni foljen e saktë për arsimin (Education):",
    questionTurkish: "Her gün kütüphanede ders \_\_\_\_\_.",
    options: ["çalışırım", "uyurum", "yüzerim", "gezerim"],
    correctAnswer: "çalışırım",
    explanation: "Në kütüplar studiojmë: 'ders çalışırım' (studioj leksione/mësime)."
  }
];

// ==========================================
// 3. SUFFIX BUILDERS (25 Questions)
// ==========================================
export const A2_SUFFIX_QUESTIONS: TestSuffixQuestion[] = [
  {
    id: "sf1",
    promptAlbanian: "Formoni kohën e shkuar për veten 'biz' (ne shkuam):",
    root: "git",
    suffixes: ["tik", "dik", "tık", "dık"],
    correctSuffix: "tik",
    explanation: "Rregulla e asimilimit të bashkëtingëlloreve (Fıstıkçı Şahap): git + dik -> gittik."
  },
  {
    id: "sf2",
    promptAlbanian: "Formoni kohën e ardhshme për veten 'ben' (unë do të lexoj):",
    root: "oku",
    suffixes: ["yacağım", "acağım", "yeceğim", "eceğim"],
    correctSuffix: "yacağım",
    explanation: "oku + y (buffer) + acak + ım (voicing k->ğ) -> okuyacağım."
  },
  {
    id: "sf3",
    promptAlbanian: "Formoni potencialin (mund të) për veten 'sen' (ti mund të bësh):",
    root: "yap",
    suffixes: ["abilirsin", "ebilirsin", "malısın", "acaksın"],
    correctSuffix: "abilirsin",
    explanation: "yap + abilir + sin -> yapabilirsin."
  },
  {
    id: "sf4",
    promptAlbanian: "Formoni mënyrën detyrore (duhet) për veten 'o' (ai/ajo duhet të vijë):",
    root: "gel",
    suffixes: ["meli", "malı", "ebilir", "di"],
    correctSuffix: "meli",
    explanation: "gel + meli -> gelmeli."
  },
  {
    id: "sf5",
    promptAlbanian: "Formoni rasën rrjedhore (Ablative) për krahasimin (nga libri):",
    root: "kitap",
    suffixes: ["tan", "dan", "ten", "den"],
    correctSuffix: "tan",
    explanation: "kitap mbaron me 'p' (e fortë), prandaj merr '-tan' dhe jo '-dan'."
  },
  {
    id: "sf6",
    promptAlbanian: "Formoni kohën e shkuar të vazhdueshme për 'ben' (unë po shkruaja):",
    root: "yaz",
    suffixes: ["ıyordum", "iyordum", "ıyorduk", "tım"],
    correctSuffix: "ıyordum",
    explanation: "yaz + ıyor + du + m -> yazıyordum."
  },
  {
    id: "sf7",
    promptAlbanian: "Formoni lidhëzën zarfore (ip) për foljen 'etmek' (duke bërë - me voicing t->d):",
    root: "ed",
    suffixes: ["ip", "ıp", "yip", "yıp"],
    correctSuffix: "ip",
    explanation: "et + ip -> edip (t zbutet në d)."
  },
  {
    id: "sf8",
    promptAlbanian: "Formoni kohën e shkuar për veten 'o' (ai/ajo shikoi):",
    root: "bak",
    suffixes: ["tı", "dı", "ti", "di"],
    correctSuffix: "tı",
    explanation: "bak mbaron me 'k' (e fortë) dhe ka vokal të trashë, prandaj merr '-tı'."
  },
  {
    id: "sf9",
    promptAlbanian: "Formoni kohën e ardhshme për veten 'o' (ai/ajo do të shkruajë):",
    root: "yaz",
    suffixes: ["acak", "ecek", "acaklar", "acağız"],
    correctSuffix: "acak",
    explanation: "yaz + acak -> yazacak."
  },
  {
    id: "sf10",
    promptAlbanian: "Formoni potencialin (mund të) për veten 'o' (ai/ajo mund të flasë):",
    root: "konuş",
    suffixes: ["abilir", "ebilir", "malı", "uyor"],
    correctSuffix: "abilir",
    explanation: "konuş + abilir -> konuşabilir."
  },
  {
    id: "sf11",
    promptAlbanian: "Formoni detyrimin për veten 'ben' (unë duhet të shkruaj):",
    root: "yaz",
    suffixes: ["malıyım", "meliyim", "malısın", "tım"],
    correctSuffix: "malıyım",
    explanation: "yaz + malı + y (buffer) + ım -> yazmalıyım."
  },
  {
    id: "sf12",
    promptAlbanian: "Formoni rasën rrjedhore për krahasimin (nga shtëpia):",
    root: "ev",
    suffixes: ["den", "ten", "dan", "tan"],
    correctSuffix: "den",
    explanation: "ev + den -> evden."
  },
  {
    id: "sf13",
    promptAlbanian: "Formoni kohën e shkuar të vazhdueshme për 'o' (ai/ajo po lexonte):",
    root: "oku",
    suffixes: ["yordu", "ordu", "iyordu", "uyordu"],
    correctSuffix: "yordu",
    explanation: "oku + y (buffer) + ordu -> okuyordu."
  },
  {
    id: "sf14",
    promptAlbanian: "Formoni lidhëzën zarfore (ip) për foljen 'gitmek' (duke shkuar - voicing t->d):",
    root: "gid",
    suffixes: ["ip", "ıp", "up", "üp"],
    correctSuffix: "ip",
    explanation: "git + ip -> gidip."
  },
  {
    id: "sf15",
    promptAlbanian: "Formoni kohën e shkuar për 'ben' (unë punova):",
    root: "çalış",
    suffixes: ["tım", "dım", "tim", "dim"],
    correctSuffix: "tım",
    explanation: "çalış + tım -> çalıştım."
  },
  {
    id: "sf16",
    promptAlbanian: "Formoni kohën e ardhshme për 'biz' (ne do të shkojmë - voicing t->d):",
    root: "gid",
    suffixes: ["eceğiz", "acağız", "eceksiniz", "acaksınız"],
    correctSuffix: "eceğiz",
    explanation: "git + eceğiz -> gideceğiz."
  },
  {
    id: "sf17",
    promptAlbanian: "Formoni potencialin mohues për 'ben' (unë nuk mund të vij):",
    root: "gel",
    suffixes: ["emem", "amam", "ebilirim", "emezsin"],
    correctSuffix: "emem",
    explanation: "gel + emem -> gelemem."
  },
  {
    id: "sf18",
    promptAlbanian: "Formoni detyrimin për 'sen' (ti duhet të dëgjosh):",
    root: "dinle",
    suffixes: ["melisin", "malısın", "meliyim", "melisiniz"],
    correctSuffix: "melisin",
    explanation: "dinle + melisin -> dinlemelisin."
  },
  {
    id: "sf19",
    promptAlbanian: "Formoni rasën rrjedhore për krahasimin (nga Ahmeti - emër i përveçëm):",
    root: "Ahmet'",
    suffixes: ["ten", "den", "tan", "dan"],
    correctSuffix: "ten",
    explanation: "Ahmet' + ten -> Ahmet'ten (t është e fortë)."
  },
  {
    id: "sf20",
    promptAlbanian: "Formoni kohën e shkuar të vazhdueshme për 'sen' (ti po dëgjoje):",
    root: "dinli",
    suffixes: ["yordun", "ordun", "iyordun", "uyordun"],
    correctSuffix: "yordun",
    explanation: "dinle + y (buffer) + ordun -> dinliyordun (zanorja 'e' kthehet në 'i')."
  },
  {
    id: "sf21",
    promptAlbanian: "Formoni lidhëzën zarfore (ip) për foljen 'almak' (duke marrë/blerë):",
    root: "al",
    suffixes: ["ıp", "ip", "up", "üp"],
    correctSuffix: "ıp",
    explanation: "al + ıp -> alıp."
  },
  {
    id: "sf22",
    promptAlbanian: "Formoni kohën e shkuar për 'sen' (ti pive):",
    root: "iç",
    suffixes: ["tin", "din", "tın", "dın"],
    correctSuffix: "tin",
    explanation: "iç mbaron me 'ç' (e fortë), prandaj merr '-tin'."
  },
  {
    id: "sf23",
    promptAlbanian: "Formoni kohën e ardhshme për 'o' (ai/ajo do të dëgjojë):",
    root: "dinle",
    suffixes: ["yecek", "ecek", "yacak", "acak"],
    correctSuffix: "yecek",
    explanation: "dinle + y (buffer) + ecek -> dinleyecek."
  },
  {
    id: "sf24",
    promptAlbanian: "Formoni potencialin për 'biz' (ne mund të hamë):",
    root: "yi",
    suffixes: ["yebiliriz", "ebiliriz", "yebilirim", "ebilirim"],
    correctSuffix: "yebiliriz",
    explanation: "ye + y (buffer) + ebilir + iz -> yiyebiliriz (zanorja 'e' kthehet në 'i')."
  },
  {
    id: "sf25",
    promptAlbanian: "Formoni detyrimin për 'o' (ai/ajo duhet të ulet/bëjë):",
    root: "otur",
    suffixes: ["malı", "meli", "malıydı", "malıyım"],
    correctSuffix: "malı",
    explanation: "otur + malı -> oturmalı."
  }
];

// Database fields are pre-normalized and verified

// ==========================================
// 4. WORD SORT QUESTIONS (25 Questions)
// ==========================================
export const A2_WORDSORT_QUESTIONS: TestWordSortQuestion[] = [
  {
    id: "ws1",
    promptAlbanian: "Ndërtoni fjalinë: 'Unë shkova në Fethiye verën e kaluar.'",
    words: ["gittim", "Fethiye'ye", "Geçen yaz"],
    correctSequence: ["Geçen yaz", "Fethiye'ye", "gittim"],
    explanation: "Renditja kohore fillon me kohën (Geçen yaz), vendi (Fethiye'ye) dhe folja në fund (gittim)."
  },
  {
    id: "ws2",
    promptAlbanian: "Ndërtoni fjalinë: 'Nesër do të lexoj një libër.'",
    words: ["okuyacağım", "bir kitap", "Yarın"],
    correctSequence: ["Yarın", "bir kitap", "okuyacağım"],
    explanation: "Koha (Yarın), objekti (bir kitap) dhe folja e kohës së ardhshme (okuyacağım)."
  },
  {
    id: "ws3",
    promptAlbanian: "Ndërtoni fjalinë: 'Unë mund të flas turqisht.'",
    words: ["konuşabiliyorum", "Türkçe", "Ben"],
    correctSequence: ["Ben", "Türkçe", "konuşabiliyorum"],
    explanation: "Kryefjala (Ben), gjuha/objekti (Türkçe) dhe folja e potencialit (konuşabiliyorum)."
  },
  {
    id: "ws4",
    promptAlbanian: "Ndërtoni fjalinë: 'Ne duhet të shkojmë te mjeku.'",
    words: ["gitmeliyiz", "doktora", "Biz"],
    correctSequence: ["Biz", "doktora", "gitmeliyiz"],
    explanation: "Biz (kryefjala), doktora (vendi) dhe gitmeliyiz (folja e detyrimit)."
  },
  {
    id: "ws5",
    promptAlbanian: "Ndërtoni fjalinë: 'Kompjuteri im është më i shpejtë se i joti.'",
    words: ["daha hızlıdır", "seninkinden", "Benim bilgisayarım"],
    correctSequence: ["Benim bilgisayarım", "seninkinden", "daha hızlıdır"],
    explanation: "Krahasimi: Benim bilgisayarım (subjekti), seninkinden (rasa rrjedhore për krahasimin), daha hızlıdır (predikati)."
  },
  {
    id: "ws6",
    promptAlbanian: "Ndërtoni fjalinë: 'Unë po ecja në rrugë kur ra shi.'",
    words: ["yürüyordum", "yolda", "Ben"],
    correctSequence: ["Ben", "yolda", "yürüyordum"],
    explanation: "Ben (unë), yolda (në rrugë), yürüyordum (po ecja)."
  },
  {
    id: "ws7",
    promptAlbanian: "Ndërtoni fjalinë: 'Hava sot është më e ngrohtë se dje.'",
    words: ["daha sıcaktır", "dünden", "Bugün hava"],
    correctSequence: ["Bugün hava", "dünden", "daha sıcaktır"],
    explanation: "Bugün hava (subjekti), dünden (dje + den), daha sıcaktır (më e ngrohtë)."
  },
  {
    id: "ws8",
    promptAlbanian: "Ndërtoni fjalinë: 'Gjyshi im zakonisht zgjohet herët.'",
    words: ["uyanır", "erken", "genellikle", "Dedem"],
    correctSequence: ["Dedem", "genellikle", "erken", "uyanır"],
    explanation: "Dedem (kryefjala), genellikle (ndajfolja e kohës), erken (herët), uyanır (folja e kohës së gjerë)."
  },
  {
    id: "ws9",
    promptAlbanian: "Ndërtoni fjalinë: 'Unë bleva një biletë dhe shkova në kinema.'",
    words: ["gittim", "bilet alıp", "sinemaya", "Ben"],
    correctSequence: ["Ben", "bilet alıp", "sinemaya", "gittim"],
    explanation: "Ben (unë), bilet alıp (duke blerë biletë - aksioni i parë), sinemaya (në kinema), gittim (shkova)."
  },
  {
    id: "ws10",
    promptAlbanian: "Ndërtoni fjalinë: 'Këtu ju nuk duhet të flisni me zë të lartë.'",
    words: ["konuşmamalısınız", "yüksek sesle", "Burada"],
    correctSequence: ["Burada", "yüksek sesle", "konuşmamalısınız"],
    explanation: "Burada (këtu), yüksek sesle (me zë të lartë), konuşmamalısınız (nuk duhet të flisni)."
  },
  {
    id: "ws11",
    promptAlbanian: "Ndërtoni fjalinë: 'Aylin mund të luajë në piano shumë mirë.'",
    words: ["çalabiliyor", "piyano", "çok iyi", "Aylin"],
    correctSequence: ["Aylin", "çok iyi", "piyano", "çalabiliyor"],
    explanation: "Aylin (kryefjala), çok iyi (mënyra), piyano (instrumenti), çalabiliyor (folja)."
  },
  {
    id: "ws12",
    promptAlbanian: "Ndërtoni fjalinë: 'Çfarë do të bësh verën e ardhshme?'",
    words: ["yapacaksın?", "ne", "Gelecek yaz"],
    correctSequence: ["Gelecek yaz", "ne", "yapacaksın?"],
    explanation: "Gelecek yaz (Koha), ne (çfarë - përemër pyetës), yapacaksın? (folja pyetëse)."
  },
  {
    id: "ws13",
    promptAlbanian: "Ndërtoni fjalinë: 'Unë pata frikë nga ai qen dje.'",
    words: ["korktum", "köpekten", "o", "Dün ben"],
    correctSequence: ["Dün ben", "o", "köpekten", "korktum"],
    explanation: "Dün ben (Dje unë), o köpekten (nga ai qen), korktum (pata frikë)."
  },
  {
    id: "ws14",
    promptAlbanian: "Ndërtoni fjalinë: 'Ky telefon është më i shtrenjtë se ai tjetri.'",
    words: ["daha pahalıdır", "diğerinden", "Bu telefon"],
    correctSequence: ["Bu telefon", "diğerinden", "daha pahalıdır"],
    explanation: "Bu telefon (subjekti), diğerinden (se ai tjetri), daha pahalıdır (më i shtrenjtë)."
  },
  {
    id: "ws15",
    promptAlbanian: "Ndërtoni fjalinë: 'Ne po hanim darkë kur erdhi ai.'",
    words: ["yiyorduk", "yemek", "Biz o sırada"],
    correctSequence: ["Biz o sırada", "yemek", "yiyorduk"],
    explanation: "Biz o sırada (Ne në atë kohë), yemek (ushqim/darkë), yiyorduk (po hanim)."
  },
  {
    id: "ws16",
    promptAlbanian: "Ndërtoni fjalinë: 'Mbrëmë shkrova kod deri në orën 12.'",
    words: ["yazdım", "kod", "kadar", "saat on ikiye", "Dün gece"],
    correctSequence: ["Dün gece", "saat on ikiye", "kadar", "kod", "yazdım"],
    explanation: "Dün gece (Mbrëmë), saat on ikiye kadar (deri në ora 12), kod (kod), yazdım (shkrova)."
  },
  {
    id: "ws17",
    promptAlbanian: "Ndërtoni fjalinë: 'Ne duhet të mbrojmë pemët në pyll.'",
    words: ["korumalıyız", "ağaçları", "ormandaki", "Biz"],
    correctSequence: ["Biz", "ormandaki", "ağaçları", "korumalıyız"],
    explanation: "Biz (kryefjala), ormandaki ağaçları (pemët në pyll), korumalıyız (duhet të mbrojmë)."
  },
  {
    id: "ws18",
    promptAlbanian: "Ndërtoni fjalinë: 'Njerëzit duhet të tregojnë respekt në shoqëri.'",
    words: ["göstermelidir", "saygı", "toplumda", "İnsanlar"],
    correctSequence: ["İnsanlar", "toplumda", "saygı", "göstermelidir"],
    explanation: "İnsanlar (Njerëzit), toplumda (në shoqëri), saygı (respekt), göstermelidir (duhet të tregojnë)."
  },
  {
    id: "ws19",
    promptAlbanian: "Ndërtoni fjalinë: 'Unë nuk mund ta lexoj këtë libër sot.'",
    words: ["okuyamam", "bu kitabı", "bugün", "Ben"],
    correctSequence: ["Ben", "bugün", "bu kitabı", "okuyamam"],
    explanation: "Ben (unë), bugün (sot), bu kitabı (këtë libër), okuyamam (nuk mund ta lexoj)."
  },
  {
    id: "ws20",
    promptAlbanian: "Ndërtoni fjalinë: 'Babai im shkon në punë çdo mëngjes.'",
    words: ["gider", "işe", "her sabah", "Babam"],
    correctSequence: ["Babam", "her sabah", "işe", "gider"],
    explanation: "Babam (Babai im), her sabah (çdo mëngjes), ise (në punë), gider (shkon - aorist)."
  },
  {
    id: "ws21",
    promptAlbanian: "Ndërtoni fjalinë: 'Unë studioj leksione në kütüphanë çdo ditë.'",
    words: ["çalışırım", "ders", "kütüphanede", "her gün", "Ben"],
    correctSequence: ["Ben", "her gün", "kütüphanede", "ders", "çalışırım"],
    explanation: "Ben (unë), her gün (çdo ditë), kütüphanede (në kütüphanë), ders çalışırım (studioj mësime)."
  },
  {
    id: "ws22",
    promptAlbanian: "Ndërtoni fjalinë: 'Unë bëra një dush dhe pastaj fjeta.'",
    words: ["uyudum", "duş alıp", "Ben"],
    correctSequence: ["Ben", "duş alıp", "uyudum"],
    explanation: "Ben (unë), duş alıp (pasi bëra dush), uyudum (fjeta)."
  },
  {
    id: "ws23",
    promptAlbanian: "Ndërtoni fjalinë: 'Ky liqen është më i thellë se lumi.'",
    words: ["daha derindir", "nehirden", "Bu göl"],
    correctSequence: ["Bu göl", "nehirden", "daha derindir"],
    explanation: "Bu göl (Ky liqen), nehirden (se lumi), daha derindir (është më i thellë)."
  },
  {
    id: "ws24",
    promptAlbanian: "Ndërtoni fjalinë: 'Ti duhet të marrësh një biletë tani.'",
    words: ["almalısın", "bilet", "şimdi", "Sen"],
    correctSequence: ["Sen", "şimdi", "bilet", "almalısın"],
    explanation: "Sen (ti), şimdi (tani), bilet (biletë), almalısın (duhet të marrësh)."
  },
  {
    id: "ws25",
    promptAlbanian: "Ndërtoni fjalinë: 'Çfarë po bëje kur të telefonova?'",
    words: ["yapıyordun?", "ne", "sen", "Aradığımda"],
    correctSequence: ["Aradığımda", "sen", "ne", "yapıyordun?"],
    explanation: "Aradığımda (Kur të telefonova), sen (ti), ne (çfarë), yapıyordun? (po bëje?)."
  }
];

// ==========================================
// 5. WRITING CONSOLE PROMPTS (10 Questions)
// ==========================================
export const A2_WRITING_QUESTIONS: TestWritingQuestion[] = [
  {
    id: "w1",
    promptAlbanian: "Përktheni në turqisht: 'Dje isha shumë i lodhur sepse punova shumë.'",
    correctAnswers: [
      "dün çok yorgundum çünkü çok çalıştım",
      "dün çok yorgundum çünkü çok çalıştım.",
      "çok yorgundum çünkü dün çok çalıştım",
      "çok yorgundum çünkü dün çok çalıştım."
    ],
    explanation: "Fjalia përmban kohën e shkuar ('yorgundum', 'çalıştım') dhe lidhëzën 'çünkü' (sepse)."
  },
  {
    id: "w2",
    promptAlbanian: "Përktheni në turqisht: 'Nesër do të shkojmë në plazh me miqtë tanë.'",
    correctAnswers: [
      "yarın arkadaşlarımızla plaja gideceğiz",
      "yarın arkadaşlarımızla plaja gideceğiz.",
      "yarın arkadaşlarımızla birlikte plaja gideceğiz",
      "yarın arkadaşlarımızla birlikte plaja gideceğiz."
    ],
    explanation: "Përmban kohën e ardhshme ('gideceğiz') dhe përemrin shoqërues ('arkadaşlarımızla')."
  },
  {
    id: "w3",
    promptAlbanian: "Përktheni në turqisht: 'Gjyshi im mund të flasë mirë turqisht.'",
    correctAnswers: [
      "dedem çok iyi türkçe konuşabilir",
      "dedem çok iyi türkçe konuşabilir.",
      "dedem türkçe çok iyi konuşabilir",
      "dedem türkçe çok iyi konuşabilir.",
      "dedem iyi türkçe konuşabilir",
      "dedem iyi türkçe konuşabilir."
    ],
    explanation: "Përmban potencialin ('konuşabilir') dhe fjalën 'dedem' (gjyshi im)."
  },
  {
    id: "w4",
    promptAlbanian: "Përktheni në turqisht: 'Duhet të marrësh ilaçet çdo ditë.'",
    correctAnswers: [
      "her gün ilaçlarını almalısın",
      "her gün ilaçlarını almalısın.",
      "her gün ilaçlarını içmelisin",
      "her gün ilaçlarını içmelisin.",
      "ilaçlarını her gün almalısın",
      "ilaçlarını her gün almalısın.",
      "ilaçlarını her gün içmelisin",
      "ilaçlarını her gün içmelisin."
    ],
    explanation: "Në turqisht marrja e ilaçeve shprehet me 'ilaç almak' ose 'ilaç içmek'. Përdoret detyrimi '-melisin / -malısın'."
  },
  {
    id: "w5",
    promptAlbanian: "Përktheni në turqisht: 'Kjo shtëpi është më e madhe se ajo shtëpi.'",
    correctAnswers: [
      "bu ev o evden daha büyüktür",
      "bu ev o evden daha büyüktür.",
      "bu ev şu evden daha büyüktür",
      "bu ev şu evden daha büyüktür.",
      "bu ev o evden daha büyük",
      "bu ev o evden daha büyük.",
      "bu ev şu evden daha büyük",
      "bu ev şu evden daha büyük."
    ],
    explanation: "Krahasimi me rasën rrjedhore: 'o evden' (se ajo shtëpi) + 'daha büyük' (më e madhe)."
  },
  {
    id: "w6",
    promptAlbanian: "Përktheni në turqisht: 'Çfarë po bëje kur të telefonova dje?'",
    correctAnswers: [
      "dün seni aradığımda ne yapıyordun?",
      "dün seni aradığımda ne yapıyordun",
      "dün seni aradığımda ne yapıyordun ?",
      "dün aradığımda ne yapıyordun?",
      "dün aradığımda ne yapıyordun"
    ],
    explanation: "Përdoret koha e shkuar e vazhdueshme 'yapıyordun' dhe pjesorja kohore 'aradığımda' (kur telefonova)."
  },
  {
    id: "w7",
    promptAlbanian: "Përktheni në turqisht: 'Unë bleva një kompjuter të ri duke punuar.'",
    correctAnswers: [
      "çalışıp yeni bir bilgisayar aldım",
      "çalışıp yeni bir bilgisayar aldım.",
      "çalışarak yeni bir bilgisayar aldım",
      "çalışarak yeni bir bilgisayar aldım."
    ],
    explanation: "Folja 'çalışmak' bëhet 'çalışıp' (duke punuar) duke u lidhur me 'bilgisayar aldım' (bleva kompjuter)."
  },
  {
    id: "w8",
    promptAlbanian: "Përktheni në turqisht: 'Ai herë pas here na viziton dhe na ndihmon.'",
    correctAnswers: [
      "o bazen bizi ziyaret edip bize yardım eder",
      "o bazen bizi ziyaret edip bize yardım eder.",
      "o ara sıra bizi ziyaret edip bize yardım eder",
      "o ara sıra bizi ziyaret edip bize yardım eder."
    ],
    explanation: "Përmban ndajfoljen e kohës 'bazen' ose 'ara sıra' (herë pas here), lidhëzën zarfore 'ziyaret edip' dhe kohën e gjerë 'yardım eder'."
  },
  {
    id: "w9",
    promptAlbanian: "Përktheni në turqisht: 'Ne duhet të mbrojmë mjedisin tonë për një jetë të shëndetshme.'",
    correctAnswers: [
      "sağlıklı bir yaşam için çevremizi korumalıyız",
      "sağlıklı bir yaşam için çevremizi korumalıyız.",
      "sağlıklı bir hayat için çevremizi korumalıyız",
      "sağlıklı bir hayat için çevremizi korumalıyız."
    ],
    explanation: "Përmban fjalorin A2 ('çevre', 'yaşam') dhe detyrimin për 'biz' ('korumalıyız')."
  },
  {
    id: "w10",
    promptAlbanian: "Përktheni në turqisht: 'Unë zakonisht dëgjoj muzikë ndërsa shkruaj kod.'",
    correctAnswers: [
      "kod yazarken genellikle müzik dinlerim",
      "kod yazarken genellikle müzik dinlerim.",
      "ben genellikle kod yazarken müzik dinlerim",
      "ben genellikle kod yazarken müzik dinlerim."
    ],
    explanation: "Përdoret Aorist 'dinlerim' (dëgjoj), ndajfolja 'genellikle' (zakonisht), dhe struktura kohore 'yazarken' (ndërsa shkruaj)."
  }
];

// Helper to draw random elements from a list
function getRandomElements<T>(arr: T[], num: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

/**
 * Generates a randomized 25-question finishing test for Level A2.
 * composition:
 * - 1 Reading Section (contains exactly 5 Turkish questions)
 * - 5 general Multiple Choice Questions (from MCQ pool)
 * - 6 Suffix Builder questions (from Suffix pool)
 * - 6 Word Sort questions (from Sort pool)
 * - 3 Writing Console prompts (from Writing pool)
 */
export function generateRandomA2Test(): A2Test {
  // 1. Pick 1 random reading section
  const selectedReading = getRandomElements(A2_READING_SECTIONS, 1)[0];

  // 2. Pick 5 MCQ
  const selectedMCQ = getRandomElements(A2_MC_QUESTIONS, 5);

  // 3. Pick 6 Suffix Builders
  const selectedSuffix = getRandomElements(A2_SUFFIX_QUESTIONS, 6);

  // 4. Pick 6 Word Sorts
  const selectedSort = getRandomElements(A2_WORDSORT_QUESTIONS, 6);

  // 5. Pick 3 Writing Prompts
  const selectedWriting = getRandomElements(A2_WRITING_QUESTIONS, 3);

  return {
    readingSection: selectedReading,
    multipleChoice: selectedMCQ,
    suffixBuilder: selectedSuffix,
    wordSort: selectedSort,
    writing: selectedWriting
  };
}
