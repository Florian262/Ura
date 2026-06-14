export interface BasicGrammarVocabularyItem {
  id: string;
  word: string;
  translation: string;
  pos: 'përemër' | 'lidhëz' | 'pasthirrmë' | 'shprehje' | 'emër' | 'ndajfolje' | 'folje' | 'mbiemër';
  notes?: string;
  examples?: Array<{ source: string; target: string }>;
  derivatives?: Array<{ word: string; translation: string; pos: string }>;
  is_balkan?: boolean;
}

export const basicGrammarVocabularyData: BasicGrammarVocabularyItem[] = [
  // Personal Pronouns
  {
    id: "g-pron-1",
    word: "Ben",
    translation: "Unë",
    pos: "përemër",
    notes: "Përemër vetor i vetës së parë njëjës.",
    examples: [{ source: "Ben öğretmenim.", target: "Unë jam mësues." }]
  },
  {
    id: "g-pron-2",
    word: "Sen",
    translation: "Ti",
    pos: "përemër",
    notes: "Përemër vetor i vetës së dytë njëjës.",
    examples: [{ source: "Sen nasılsın?", target: "Si je ti?" }]
  },
  {
    id: "g-pron-3",
    word: "O",
    translation: "Ai / Ajo",
    pos: "përemër",
    notes: "Përemër vetor i vetës së tretë njëjës. Në turqisht nuk ka gjini gramatikore.",
    examples: [{ source: "O çok iyi bir insan.", target: "Ai/Ajo është një njeri shumë i mirë." }]
  },
  {
    id: "g-pron-4",
    word: "Biz",
    translation: "Ne",
    pos: "përemër",
    notes: "Përemër vetor i vetës së parë shumës.",
    examples: [{ source: "Biz hazırız.", target: "Ne jemi gati." }]
  },
  {
    id: "g-pron-5",
    word: "Siz",
    translation: "Ju",
    pos: "përemër",
    notes: "Përemër vetor i vetës së dytë shumës, përdoret edhe për mirësjellje (Ju formal).",
    examples: [{ source: "Siz nasılsınız?", target: "Si jeni Ju?" }]
  },
  {
    id: "g-pron-6",
    word: "Onlar",
    translation: "Ata / Ato",
    pos: "përemër",
    notes: "Përemër vetor i vetës së tretë shumës.",
    examples: [{ source: "Onlar öğrenci.", target: "Ata/Ato janë studentë." }]
  },
  // Basic Question Words
  {
    id: "g-quest-1",
    word: "Ne",
    translation: "Çfarë / Ç'",
    pos: "përemër",
    notes: "Përemër pyetës.",
    examples: [{ source: "Bu ne?", target: "Çfarë është kjo?" }]
  },
  {
    id: "g-quest-2",
    word: "Kim",
    translation: "Kush",
    pos: "përemër",
    notes: "Përemër pyetës për njerëz.",
    examples: [{ source: "O kim?", target: "Kush është ai/ajo?" }]
  },
  {
    id: "g-quest-3",
    word: "Nasıl",
    translation: "Si",
    pos: "ndajfolje",
    notes: "Ndajfolje pyetëse.",
    examples: [{ source: "Nasılsın?", target: "Si je?" }]
  },
  {
    id: "g-quest-4",
    word: "Nerede",
    translation: "Ku",
    pos: "ndajfolje",
    notes: "Përemër pyetës vendor.",
    examples: [{ source: "Kitap nerede?", target: "Ku është libri?" }]
  },
  {
    id: "g-quest-5",
    word: "Neden",
    translation: "Pse",
    pos: "ndajfolje",
    notes: "Ndajfolje pyetëse shkakore.",
    examples: [{ source: "Neden geldin?", target: "Pse erdhe?" }]
  },
  // Conjunctions / Particles
  {
    id: "g-conj-1",
    word: "Ve",
    translation: "Dhe / Edhe",
    pos: "lidhëz",
    notes: "Lidhëz shtuese standarde.",
    examples: [{ source: "Kitap ve defter.", target: "Libri dhe fletorja." }]
  },
  {
    id: "g-conj-2",
    word: "De",
    translation: "Gjithashtu / Edhe",
    pos: "lidhëz",
    notes: "Pjesëz/lidhëz shtuese (shkruhet veçmas). Pason harmoninë vokalike (de/da).",
    examples: [{ source: "Ben de iyiyim.", target: "Edhe unë jam mirë." }]
  },
  {
    id: "g-conj-3",
    word: "Da",
    translation: "Gjithashtu / Edhe",
    pos: "lidhëz",
    notes: "Variant i 'de' pas zanoreve të trashë.",
    examples: [{ source: "O da geliyor.", target: "Edhe ai/ajo po vjen." }]
  },
  {
    id: "g-conj-4",
    word: "Ama",
    translation: "Por",
    pos: "lidhëz",
    notes: "Lidhëz kundërshtore.",
    examples: [{ source: "Çok soğuk ama güzel.", target: "Është shumë ftohtë por bukur." }]
  },
  {
    id: "g-conj-5",
    word: "Çünkü",
    translation: "Sepse / Pasi",
    pos: "lidhëz",
    notes: "Lidhëz shkakore.",
    examples: [{ source: "Gelemedim çünkü hastaydım.", target: "Nuk erdha dot sepse isha i sëmurë." }]
  },
  {
    id: "g-conj-6",
    word: "İle",
    translation: "Me",
    pos: "lidhëz",
    notes: "Parafjalë / lidhëz shoqëruese.",
    examples: [{ source: "Ahmet ile Mehmet.", target: "Ahmeti me Mehmetin." }]
  },
  // Dialogue Proper Names
  {
    id: "g-name-1",
    word: "Ahmet",
    translation: "Ahmeti (Emër mashkullor)",
    pos: "emër",
    notes: "Emër i përveçëm mashkullor turk."
  },
  {
    id: "g-name-2",
    word: "Valbona",
    translation: "Valbona (Emër femëror)",
    pos: "emër",
    notes: "Emër i përveçëm femëror shqiptar."
  },
  {
    id: "g-name-3",
    word: "Arnavut",
    translation: "Shqiptar / Shqiptare",
    pos: "emër",
    notes: "Kombësia shqiptare në gjuhën turke."
  },
  {
    id: "g-name-4",
    word: "Tiran",
    translation: "Tirana",
    pos: "emër",
    notes: "Kryeqyteti i Shqipërisë."
  },
  // Yes/No/Existential
  {
    id: "g-ext-1",
    word: "Evet",
    translation: "Po",
    pos: "pasthirrmë",
    notes: "Shprehje pohimi.",
    examples: [{ source: "Evet, hazırım.", target: "Po, jam gati." }]
  },
  {
    id: "g-ext-2",
    word: "Hayır",
    translation: "Jo",
    pos: "pasthirrmë",
    notes: "Shprehje mohimi.",
    examples: [{ source: "Hayır, henüz değil.", target: "Jo, jo ende." }]
  },
  {
    id: "g-ext-3",
    word: "Var",
    translation: "Ka / Ekziston",
    pos: "mbiemër",
    notes: "Përdoret për të shprehur ekzistencën e diçkaje.",
    examples: [{ source: "Sınıfta öğrenciler var.", target: "Në klasë ka nxënës." }]
  },
  {
    id: "g-ext-4",
    word: "Yok",
    translation: "Nuk ka / Nuk ekziston",
    pos: "mbiemër",
    notes: "Mohimi i 'var'. Shpreh mosekzistencë.",
    examples: [{ source: "Zamanım yok.", target: "Nuk kam kohë." }]
  },
  // Basic Determiners, Pronouns, and Degree Adverbs
  {
    id: "g-struct-1",
    word: "Bu",
    translation: "Kjo / Ky",
    pos: "përemër",
    notes: "Përemër dëftor për afër."
  },
  {
    id: "g-struct-2",
    word: "Çok",
    translation: "Shumë",
    pos: "ndajfolje",
    notes: "Ndajfolje sasie ose intensiteti."
  },
  {
    id: "g-struct-3",
    word: "İyi",
    translation: "Mirë / I mirë",
    pos: "mbiemër",
    notes: "Mbiemër ose ndajfolje e zakonshme."
  },
  {
    id: "g-struct-4",
    word: "İçin",
    translation: "Për",
    pos: "lidhëz",
    notes: "Parafjalë që tregon qëllim, përfitues ose shkak."
  },
  {
    id: "g-struct-5",
    word: "Kendi",
    translation: "Vetë / Vete",
    pos: "përemër",
    notes: "Përemër vetvetor (kendi, kendim, kendine, etc.)."
  },
  {
    id: "g-struct-6",
    word: "En",
    translation: "Më (superlativ)",
    pos: "ndajfolje",
    notes: "Përdoret për të formuar shkallën sipërore (p.sh. en iyi = më i miri)."
  },
  {
    id: "g-struct-7",
    word: "Daha",
    translation: "Më / Ende",
    pos: "ndajfolje",
    notes: "Përdoret për krahasim (më) ose për kohë (ende)."
  },
  {
    id: "g-struct-8",
    word: "Her",
    translation: "Çdo",
    pos: "mbiemër",
    notes: "Përcaktues i pacaktuar (çdo)."
  },
  {
    id: "g-struct-9",
    word: "Gibi",
    translation: "Si / Sikur",
    pos: "lidhëz",
    notes: "Parafjalë krahasuese."
  },
  {
    id: "g-struct-10",
    word: "Kadar",
    translation: "Sa / Deri",
    pos: "ndajfolje",
    notes: "Tregon sasi, përafërsi ose kufi kohor/hapësinor."
  },
  {
    id: "g-struct-11",
    word: "Sonra",
    translation: "Pastaj / Pas",
    pos: "ndajfolje",
    notes: "Tregon kohë ose rend."
  },
  {
    id: "g-struct-12",
    word: "Önce",
    translation: "Para / Së pari",
    pos: "ndajfolje",
    notes: "Tregon kohë ose përparësi."
  },
  {
    id: "g-struct-13",
    word: "Şimdi",
    translation: "Tani",
    pos: "ndajfolje",
    notes: "Tregon kohën e tashme."
  },
  {
    id: "g-struct-14",
    word: "Herkes",
    translation: "Të gjithë / Çdokush",
    pos: "përemër",
    notes: "Përemër i pacaktuar për njerëz."
  },
  {
    id: "g-struct-15",
    word: "Hiçbir",
    translation: "Asnjë",
    pos: "mbiemër",
    notes: "Përcaktues mohues (shoqërohet me folje mohuese)."
  },
  {
    id: "g-struct-16",
    word: "Biri",
    translation: "Njëri / Dikush",
    pos: "përemër",
    notes: "Përemër i pacaktuar (një nga ata/dikush)."
  },
  {
    id: "g-struct-17",
    word: "Bazı",
    translation: "Disa",
    pos: "mbiemër",
    notes: "Përcaktues i pacaktuar."
  },
  {
    id: "g-struct-18",
    word: "Hiç",
    translation: "Fare / Asnjëherë",
    pos: "ndajfolje",
    notes: "Përdoret në fjali mohuese."
  },
  {
    id: "g-struct-19",
    word: "Böyle",
    translation: "Kështu / I tillë",
    pos: "ndajfolje",
    notes: "Tregon mënyrë ose cilësi (kështu)."
  },
  {
    id: "g-struct-20",
    word: "Şöyle",
    translation: "Ashtu / Kështu",
    pos: "ndajfolje",
    notes: "Tregon mënyrë (në atë mënyrë)."
  },
  {
    id: "g-struct-21",
    word: "Öyle",
    translation: "Ashtu",
    pos: "ndajfolje",
    notes: "Tregon mënyrë (ashtu)."
  },
  {
    id: "g-struct-22",
    word: "Tek",
    translation: "Vetëm / I vetëm / Tek",
    pos: "mbiemër",
    notes: "Mbiemër ose ndajfolje (i vetëm / një)."
  },
  {
    id: "g-struct-23",
    word: "Tüm",
    translation: "Të gjithë / I tërë",
    pos: "mbiemër",
    notes: "Përcaktues tërësie."
  },
  {
    id: "g-struct-24",
    word: "Bütün",
    translation: "Të gjithë / I tërë",
    pos: "mbiemër",
    notes: "Përcaktues tërësie."
  },
  {
    id: "g-struct-25",
    word: "Hep",
    translation: "Gjithmonë / Të gjithë",
    pos: "ndajfolje",
    notes: "Ndajfolje kohe ose përgjithësuese."
  },
  {
    id: "g-struct-26",
    word: "Veya",
    translation: "Ose",
    pos: "lidhëz",
    notes: "Lidhëz veçuese."
  },
  {
    id: "g-struct-27",
    word: "Ya",
    translation: "Ose / Po / Oh",
    pos: "lidhëz",
    notes: "Lidhëz ose pjesëz (ya... ya... = ose... ose...)."
  },
  {
    id: "g-struct-28",
    word: "Ki",
    translation: "Që",
    pos: "lidhëz",
    notes: "Lidhëz lidhëse (ki)."
  },
  {
    id: "g-struct-29",
    word: "Ise",
    translation: "Kurse / Nëse",
    pos: "lidhëz",
    notes: "Pjesëz krahasuese (kurse) ose kushtore (nëse)."
  },
  {
    id: "g-struct-30",
    word: "Fakat",
    translation: "Por",
    pos: "lidhëz",
    notes: "Lidhëz kundërshtore."
  },
  {
    id: "g-struct-31",
    word: "Lakin",
    translation: "Por",
    pos: "lidhëz",
    notes: "Lidhëz kundërshtore (e stilit të vjetër)."
  },
  {
    id: "g-struct-32",
    word: "Ancak",
    translation: "Vetëm / Por / Megjithatë",
    pos: "lidhëz",
    notes: "Lidhëz kundërshtore ose ndajfolje kufizuese."
  },
  {
    id: "g-struct-33",
    word: "Belki",
    translation: "Ndoshta",
    pos: "ndajfolje",
    notes: "Tregon mundësi (ndoshta)."
  },
  {
    id: "g-struct-34",
    word: "Henüz",
    translation: "Ende / Sapo",
    pos: "ndajfolje",
    notes: "Tregon kohë (ende)."
  },
  {
    id: "g-struct-35",
    word: "Sadece",
    translation: "Vetëm",
    pos: "ndajfolje",
    notes: "Tregon kufizim (vetëm)."
  },
  {
    id: "g-struct-36",
    word: "Yalnız",
    translation: "Vetëm / I vetëm / Por",
    pos: "mbiemër",
    notes: "Mbiemër, ndajfolje ose lidhëz kundërshtore."
  },
  {
    id: "g-struct-37",
    word: "Bile",
    translation: "Madje / Edhe",
    pos: "lidhëz",
    notes: "Pjesëz shtuese e vendosur pas fjalës."
  },
  {
    id: "g-struct-38",
    word: "Hemen",
    translation: "Menjëherë",
    pos: "ndajfolje",
    notes: "Tregon kohë të menjëhershme."
  },
  {
    id: "g-struct-39",
    word: "Neyse",
    translation: "Sidoqoftë / Sido që të jetë",
    pos: "shprehje",
    notes: "Shprehje e përdorur për të ndryshuar temën."
  },
  {
    id: "g-struct-40",
    word: "Yani",
    translation: "Domethënë / Pra",
    pos: "shprehje",
    notes: "Përdoret për të shpjeguar ose saktësuar diçka."
  },
  {
    id: "g-struct-41",
    word: "Göre",
    translation: "Sipas / Ndaj",
    pos: "lidhëz",
    notes: "Parafjalë (kërkon dative: -e göre)."
  },
  {
    id: "g-struct-42",
    word: "Karşı",
    translation: "Kundër / Ndaj",
    pos: "mbiemër",
    notes: "Mbiemër, ndajfolje ose parafjalë (kërkon dative)."
  },
  {
    id: "g-struct-43",
    word: "Doğru",
    translation: "E saktë / Drejt",
    pos: "mbiemër",
    notes: "Mbiemër ose parafjalë (kërkon dative)."
  },
  {
    id: "g-struct-44",
    word: "Başka",
    translation: "Tjetër",
    pos: "mbiemër",
    notes: "Mbiemër ose parafjalë (kërkon ablative)."
  },
  {
    id: "g-struct-45",
    word: "Beri",
    translation: "Që nga",
    pos: "lidhëz",
    notes: "Parafjalë kohore (kërkon ablative: -den beri)."
  },
  {
    id: "g-struct-46",
    word: "Itibaren",
    translation: "Duke filluar nga",
    pos: "lidhëz",
    notes: "Parafjalë kohore (kërkon ablative: -den itibaren)."
  },
  {
    id: "g-struct-47",
    word: "Rağmen",
    translation: "Pavarësisht / Megjithëse",
    pos: "lidhëz",
    notes: "Parafjalë (kërkon dative: -e rağmen)."
  },
  {
    id: "g-struct-48",
    word: "Dolayı",
    translation: "Për shkak të",
    pos: "lidhëz",
    notes: "Parafjalë shkakore (kërkon ablative: -den dolayı)."
  },
  {
    id: "g-struct-49",
    word: "Ötürü",
    translation: "Për shkak të",
    pos: "lidhëz",
    notes: "Parafjalë shkakore (kërkon ablative: -den ötürü)."
  },
  {
    id: "g-struct-50",
    word: "Birlikte",
    translation: "Së bashku / Me",
    pos: "ndajfolje",
    notes: "Tregon bashkëpunim ose shoqërim."
  },
  {
    id: "g-struct-51",
    word: "Beraber",
    translation: "Së bashku / Me",
    pos: "ndajfolje",
    notes: "Tregon bashkësi."
  },
  {
    id: "g-struct-52",
    word: "Birçok",
    translation: "Shumë / Mjaft",
    pos: "mbiemër",
    notes: "Përcaktues sasie."
  },
  {
    id: "g-struct-53",
    word: "Diye",
    translation: "Duke thënë / Për të / Sepse",
    pos: "lidhëz",
    notes: "Përdoret për qëllim ose shpjegim."
  },
  {
    id: "g-struct-54",
    word: "Gerek",
    translation: "Duhet / E nevojshme",
    pos: "mbiemër",
    notes: "Mbiemër ose emër."
  },
  {
    id: "g-struct-55",
    word: "Hazır",
    translation: "Gati / I përgatitur",
    pos: "mbiemër",
    notes: "Mbiemër."
  },
  {
    id: "g-struct-56",
    word: "Tabii",
    translation: "Natyrisht / Sigurisht",
    pos: "ndajfolje",
    notes: "Pjesëz pohuese."
  },
  {
    id: "g-struct-57",
    word: "Yoksa",
    translation: "Përndryshe / Ose",
    pos: "lidhëz",
    notes: "Lidhëz kushtore ose veçuese."
  },
  {
    id: "g-struct-58",
    word: "Zira",
    translation: "Sepse / Pasi që",
    pos: "lidhëz",
    notes: "Lidhëz shkakore."
  },
  {
    id: "g-struct-59",
    word: "Hem",
    translation: "Edhe / Gjithashtu",
    pos: "lidhëz",
    notes: "Lidhëz shtuese (hem... hem... = edhe... edhe...)."
  },
  {
    id: "g-struct-60",
    word: "Hangi",
    translation: "Cili / Cila",
    pos: "përemër",
    notes: "Përemër pyetës."
  },
  {
    id: "g-struct-61",
    word: "Kaç",
    translation: "Sa",
    pos: "përemër",
    notes: "Përemër pyetës sasior."
  },
  {
    id: "g-struct-62",
    word: "Niçin",
    translation: "Përse / Pse",
    pos: "ndajfolje",
    notes: "Ndajfolje pyetëse shkakore."
  },
  {
    id: "g-struct-63",
    word: "Gençken",
    translation: "Kur isha i ri / e re",
    pos: "ndajfolje",
    notes: "Genç (i ri) + ken (kur)."
  },
  // Common Turkish Verbs
  {
    id: "g-verb-1",
    word: "Karşılaşmak",
    translation: "Përballem / Ndeshem / Takohem",
    pos: "folje",
    notes: "Takohem me dikë ose ndeshem me një problem."
  },
  {
    id: "g-verb-2",
    word: "Yazmak",
    translation: "Shkruaj",
    pos: "folje",
    notes: "Folje standarde."
  },
  {
    id: "g-verb-3",
    word: "Yaşamak",
    translation: "Jetoj / Banoj",
    pos: "folje",
    notes: "Jetoj në një vend ose përjetoj diçka."
  },
  {
    id: "g-verb-4",
    word: "Söylemek",
    translation: "Them / Këndoj",
    pos: "folje",
    notes: "Them diçka ose këndoj një këngë."
  },
  {
    id: "g-verb-5",
    word: "Anlatmak",
    translation: "Tregoj / Shpjegoj",
    pos: "folje",
    notes: "Tregoj një ngjarje ose shpjegoj një koncept."
  },
  {
    id: "g-verb-6",
    word: "Değişmek",
    translation: "Ndryshoj",
    pos: "folje",
    notes: "Ndryshoj vetë."
  },
  {
    id: "g-verb-7",
    word: "Değiştirmek",
    translation: "Ndryshoj (diçka)",
    pos: "folje",
    notes: "Bëj që diçka të ndryshojë."
  },
  {
    id: "g-verb-8",
    word: "Unutmak",
    translation: "Harroj",
    pos: "folje",
    notes: "Harroj diçka ose dikë."
  },
  {
    id: "g-verb-9",
    word: "İnanmak",
    translation: "Besoj",
    pos: "folje",
    notes: "Besoj në diçka ose besoj dikë."
  },
  {
    id: "g-verb-10",
    word: "Gerekmek",
    translation: "Duhet / Nevojitet",
    pos: "folje",
    notes: "Folje që shpreh nevojë ose detyrim."
  },
  {
    id: "g-verb-11",
    word: "Hissetmek",
    translation: "Ndjej / Ndihem",
    pos: "folje",
    notes: "Ndjej një emocion ose gjendje fizike."
  },
  {
    id: "g-verb-12",
    word: "Kutlamak",
    translation: "Festoj / Uroj",
    pos: "folje",
    notes: "Festoj një festë ose uroj dikë."
  },
  {
    id: "g-verb-13",
    word: "Yönetmek",
    translation: "Drejtoj / Udhëheq / Menaxhoj",
    pos: "folje",
    notes: "Drejtoj një film, kompani ose shtet."
  },
  {
    id: "g-verb-14",
    word: "Durmak",
    translation: "Ndaloj / Qëndroj / Pushoj",
    pos: "folje",
    notes: "Ndaloj lëvizjen ose qëndroj në këmbë."
  },
  {
    id: "g-verb-15",
    word: "Taşımak",
    translation: "Mbaj / Mbart / Transportoj",
    pos: "folje",
    notes: "Mbaj një peshë ose transportoj diçka."
  },
  {
    id: "g-verb-16",
    word: "Paylaşmak",
    translation: "Ndaj / Shpërndaj",
    pos: "folje",
    notes: "Ndaj me të tjerët."
  },
  {
    id: "g-verb-17",
    word: "Etmek",
    translation: "Bëj / Kryej",
    pos: "folje",
    notes: "Përdoret kryesisht si folje ndihmëse (p.sh. yardım etmek)."
  },
  {
    id: "g-verb-18",
    word: "Olmak",
    translation: "Bëhem / Ekzistoj / Ndodh",
    pos: "folje",
    notes: "Folje kryesore ose ndihmëse."
  },
  {
    id: "g-verb-19",
    word: "Bulmak",
    translation: "Gjej",
    pos: "folje",
    notes: "Gjej diçka ose zbuloj."
  },
  {
    id: "g-verb-20",
    word: "Vermek",
    translation: "Jap",
    pos: "folje",
    notes: "Jap diçka."
  },
  {
    id: "g-verb-21",
    word: "Almak",
    translation: "Marr / Blej",
    pos: "folje",
    notes: "Marr diçka ose blej."
  },
  {
    id: "g-verb-22",
    word: "Gelmek",
    translation: "Vij",
    pos: "folje",
    notes: "Vij në një vend."
  },
  {
    id: "g-verb-23",
    word: "Gitmek",
    translation: "Shkoj",
    pos: "folje",
    notes: "Shkoj në një vend."
  },
  {
    id: "g-verb-24",
    word: "Okumak",
    translation: "Lexoj / Studioj",
    pos: "folje",
    notes: "Lexoj një libër ose studioj në universitet."
  },
  {
    id: "g-verb-25",
    word: "Yürümek",
    translation: "Eci / Shëtis",
    pos: "folje",
    notes: "Eci në këmbë."
  },
  {
    id: "g-verb-26",
    word: "Gelişmek",
    translation: "Zhvillohem / Përparoj",
    pos: "folje",
    notes: "Zhvillohem ose rritem."
  },
  {
    id: "g-verb-27",
    word: "Kazanmak",
    translation: "Fitoj",
    pos: "folje",
    notes: "Fitoj një garë, para ose përvojë."
  },
  {
    id: "g-verb-28",
    word: "İzlemek",
    translation: "Shikoj / Ndjek / Vëzhgoj",
    pos: "folje",
    notes: "Shikoj televizor ose ndjek një rrugë."
  },
  {
    id: "g-verb-29",
    word: "Çekmek",
    translation: "Tërheq / Xhiroj / Pësoj",
    pos: "folje",
    notes: "Tërheq një litar, xhiroj një film ose pësoj dhimbje."
  },
  {
    id: "g-verb-30",
    word: "Görmek",
    translation: "Shoh / Shikoj / Vizitoj",
    pos: "folje",
    notes: "Shoh me sy ose vizitoj një vend."
  },
  {
    id: "g-verb-31",
    word: "Bilmek",
    translation: "Di / Njoh",
    pos: "folje",
    notes: "Di një informacion ose njoh një temë."
  },
  {
    id: "g-verb-32",
    word: "Tanımak",
    translation: "Njoh / Identifikoj",
    pos: "folje",
    notes: "Njoh një person."
  },
  {
    id: "g-verb-33",
    word: "Çalışmak",
    translation: "Punoj / Përpiqem / Studioj",
    pos: "folje",
    notes: "Punoj në një punë ose përpiqem të bëj diçka."
  },
  {
    id: "g-verb-34",
    word: "Başlamak",
    translation: "Filloj / Nis",
    pos: "folje",
    notes: "Filloj një aktivitet."
  },
  {
    id: "g-verb-35",
    word: "İstemek",
    translation: "Dua / Kërkoj / Dëshiroj",
    pos: "folje",
    notes: "Dëshiroj diçka."
  },
  {
    id: "g-verb-36",
    word: "Aramak",
    translation: "Kërkoj / Thërras (në telefon)",
    pos: "folje",
    notes: "Kërkoj diçka ose thërras dikë në telefon."
  },
  {
    id: "g-verb-37",
    word: "Duymak",
    translation: "Dëgjoj / Ndjej",
    pos: "folje",
    notes: "Dëgjoj një zë ose ndjej një emocion."
  },
  {
    id: "g-verb-38",
    word: "Etkilemek",
    translation: "Ndikoj / Ndikoj tek",
    pos: "folje",
    notes: "Ndikoj në mendimin ose gjendjen e dikujt."
  },
  {
    id: "g-verb-39",
    word: "Yaymak",
    translation: "Përhap",
    pos: "folje",
    notes: "Përhap një lajm ose diçka fizike."
  },
  {
    id: "g-verb-40",
    word: "Seçmek",
    translation: "Zgjedh",
    pos: "folje",
    notes: "Zgjedh diçka ose dikë."
  },
  {
    id: "g-verb-41",
    word: "Bağlamak",
    translation: "Lidh",
    pos: "folje",
    notes: "Lidh dy gjëra ose lidh veten."
  },
  {
    id: "g-verb-42",
    word: "Çıkmak",
    translation: "Dal / Ngjitem",
    pos: "folje",
    notes: "Dal jashtë ose ngjitem lart."
  },
  {
    id: "g-verb-43",
    word: "Girmek",
    translation: "Hyj / Futem",
    pos: "folje",
    notes: "Hyj brenda në një vend."
  },
  {
    id: "g-verb-44",
    word: "Hatırlamak",
    translation: "Kujtoj / Mbaj mend",
    pos: "folje",
    notes: "Kujtoj diçka nga e kaluara."
  },
  {
    id: "g-verb-45",
    word: "Simgelemek",
    translation: "Simbolizoj / Përfaqësoj",
    pos: "folje",
    notes: "Shërben si simbol për diçka."
  },
  {
    id: "g-verb-46",
    word: "Doğrulamak",
    translation: "Verifikoj / Konfirmoj / Vërtetoj",
    pos: "folje",
    notes: "Konfirmoj nëse diçka është e saktë."
  },
  {
    id: "g-verb-47",
    word: "Davranmak",
    translation: "Sillem / Veproj",
    pos: "folje",
    notes: "Sillem ndaj dikujt në një mënyrë të caktuar."
  },
  {
    id: "g-verb-48",
    word: "Beğenmek",
    translation: "Pëlqej",
    pos: "folje",
    notes: "Pëlqej diçka ose dikë."
  },
  {
    id: "g-verb-49",
    word: "Geçmek",
    translation: "Kaloj",
    pos: "folje",
    notes: "Kaloj një provim, një kohë ose një vend."
  },
  {
    id: "g-verb-50",
    word: "Dinlemek",
    translation: "Dëgjoj / Ndjek",
    pos: "folje",
    notes: "Dëgjoj muzikë ose këshillat e dikujt."
  },
  // Common Nouns and Adjectives
  {
    id: "g-noun-1",
    word: "Adım",
    translation: "Hap / Emri im",
    pos: "emër",
    notes: "Hap (në ecje) ose ad (emër) + ım (im)."
  },
  {
    id: "g-noun-2",
    word: "Altın",
    translation: "Ar / Flori",
    pos: "emër",
    notes: "Metal i çmuar."
  },
  {
    id: "g-noun-3",
    word: "Alt",
    translation: "Nën / Poshtë / Pjesa e poshtme",
    pos: "emër",
    notes: "Pozicion i poshtëm."
  },
  {
    id: "g-noun-4",
    word: "An",
    translation: "Momenti / Çast",
    pos: "emër",
    notes: "Një çast kohor."
  },
  {
    id: "g-noun-5",
    word: "Anı",
    translation: "Kujtim",
    pos: "emër",
    notes: "Kujtim nga e kaluara."
  },
  {
    id: "g-noun-6",
    word: "Apartman",
    translation: "Apartament / Pallat",
    pos: "emër",
    notes: "Ndërtesë banimi shumëkatëshe."
  },
  {
    id: "g-noun-7",
    word: "Aşk",
    translation: "Dashuri",
    pos: "emër",
    notes: "Ndjenjë e fortë dashurie."
  },
  {
    id: "g-noun-8",
    word: "Dostluk",
    translation: "Miqësi",
    pos: "emër",
    notes: "Marrëdhënie miqësore."
  },
  {
    id: "g-noun-9",
    word: "Engel",
    translation: "Pengesë / Vështirësi",
    pos: "emër",
    notes: "Diçka që pengon përparimin."
  },
  {
    id: "g-noun-10",
    word: "Hikaye",
    translation: "Tregim / Histori / Rrëfenjë",
    pos: "emër",
    notes: "Tregim ose histori e treguar."
  },
  {
    id: "g-noun-11",
    word: "Yolculuk",
    translation: "Udhëtim",
    pos: "emër",
    notes: "Veprimi i udhëtimit."
  },
  {
    id: "g-noun-12",
    word: "Tarih",
    translation: "Histori / Datë",
    pos: "emër",
    notes: "Shkenca e historisë ose një datë specifike."
  },
  {
    id: "g-noun-13",
    word: "Başarılı",
    translation: "I suksesshëm",
    pos: "mbiemër",
    notes: "Që ka sukses."
  },
  {
    id: "g-noun-14",
    word: "Dolu",
    translation: "I mbushur / Plot / Breshër",
    pos: "mbiemër",
    notes: "I mbushur plot ose breshër (mot)."
  },
  {
    id: "g-noun-15",
    word: "Gençlik",
    translation: "Rini / Koha e rinisë",
    pos: "emër",
    notes: "Periudha e jetës kur je i ri."
  },
  {
    id: "g-noun-16",
    word: "Kamuoyu",
    translation: "Opinioni publik",
    pos: "emër",
    notes: "Mendimi i përbashkët i shoqërisë."
  },
  {
    id: "g-noun-17",
    word: "Şahit",
    translation: "Dëshmitar",
    pos: "emër",
    notes: "Personi që dëshmon një ngjarje."
  },
  {
    id: "g-noun-18",
    word: "Defter",
    translation: "Fletore",
    pos: "emër",
    notes: "Fletore për të shkruar."
  },
  {
    id: "g-noun-19",
    word: "Kitap",
    translation: "Libër",
    pos: "emër",
    notes: "Libër për të lexuar."
  },
  {
    id: "g-noun-20",
    word: "Fırsat",
    translation: "Mundësi / Rast i mirë",
    pos: "emër",
    notes: "Rrethanë e përshtatshme."
  },
  {
    id: "g-noun-21",
    word: "Karar",
    translation: "Vendim",
    pos: "emër",
    notes: "Vendim i marrë."
  },
  {
    id: "g-noun-22",
    word: "Öykü",
    translation: "Tregim / Histori",
    pos: "emër",
    notes: "Tregim tregues."
  },
  {
    id: "g-noun-23",
    word: "Biyografi",
    translation: "Biografi",
    pos: "emër",
    notes: "Jeta e shkruar e një personi."
  },
  {
    id: "g-noun-24",
    word: "Otobiyografi",
    translation: "Autobiografi",
    pos: "emër",
    notes: "Jeta e shkruar nga vetë personi."
  },
  {
    id: "g-noun-25",
    word: "Efsane",
    translation: "Legendë / Efsane",
    pos: "emër",
    notes: "Histori fantastike popullore."
  },
  {
    id: "g-noun-26",
    word: "Fedakarlık",
    translation: "Sakrificë / Vetëmohim",
    pos: "emër",
    notes: "Veprim vetëmohues."
  },
  {
    id: "g-noun-27",
    word: "Şiir",
    translation: "Poezi / Vjershë",
    pos: "emër",
    notes: "Poezi e shkruar."
  },
  {
    id: "g-noun-28",
    word: "Roman",
    translation: "Roman",
    pos: "emër",
    notes: "Vepër letrare në prozë."
  },
  {
    id: "g-noun-29",
    word: "Miras",
    translation: "Trashëgimi",
    pos: "emër",
    notes: "Pasuri ose kulturë e lënë nga të tjerët."
  },
  {
    id: "g-noun-30",
    word: "Film",
    translation: "Film",
    pos: "emër",
    notes: "Film kinematografik."
  },
  {
    id: "g-noun-31",
    word: "Senaryo",
    translation: "Skenar",
    pos: "emër",
    notes: "Skenari i një filmi."
  },
  {
    id: "g-noun-32",
    word: "Yönetmen",
    translation: "Regjisor / Regjisore",
    pos: "emër",
    notes: "Personi që drejton një film."
  },
  {
    id: "g-noun-33",
    word: "Ödül",
    translation: "Çmim / Shpërblim",
    pos: "emër",
    notes: "Çmim i fituar."
  },
  {
    id: "g-noun-34",
    word: "Festival",
    translation: "Festival",
    pos: "emër",
    notes: "Festa kulturore."
  },
  {
    id: "g-noun-35",
    word: "Sanat",
    translation: "Art",
    pos: "emër",
    notes: "Krijimtari artistike."
  },
  {
    id: "g-noun-36",
    word: "Sanatçı",
    translation: "Artist / Artiste",
    pos: "emër",
    notes: "Personi që merret me art."
  },
  {
    id: "g-noun-37",
    word: "Türkü",
    translation: "Këngë popullore (turke)",
    pos: "emër",
    notes: "Këngë tradicionale popullore."
  },
  {
    id: "g-noun-38",
    word: "Saz",
    translation: "Sazë / Saz (instrument)",
    pos: "emër",
    notes: "Instrument muzikor tradicional me tela."
  },
  {
    id: "g-noun-39",
    word: "Usta",
    translation: "Mjeshtër / Ustë",
    pos: "emër",
    notes: "Person i kualifikuar."
  },
  {
    id: "g-noun-40",
    word: "Dost",
    translation: "Mik / Shok i ngushtë",
    pos: "emër",
    notes: "Mik besnik."
  },
  {
    id: "g-noun-41",
    word: "Halk",
    translation: "Popull / Publik",
    pos: "emër",
    notes: "Njerëzit e një vendi."
  },
  {
    id: "g-noun-42",
    word: "Düşünce",
    translation: "Mendim / Ide",
    pos: "emër",
    notes: "Produkt i të menduarit."
  },
  {
    id: "g-noun-43",
    word: "Çaba",
    translation: "Përpjekje / Mundim",
    pos: "emër",
    notes: "Përpjekje për të arritur diçka."
  },
  {
    id: "g-noun-44",
    word: "Misafir",
    translation: "Mysafir / I ftuar",
    pos: "emër",
    notes: "Vizitor në shtëpi."
  },
  {
    id: "g-noun-45",
    word: "Davetli",
    translation: "I ftuar / Mysafir",
    pos: "emër",
    notes: "Person i ftuar në një ceremoni."
  },
  {
    id: "g-noun-46",
    word: "İkram",
    translation: "Qerasje / Mikpritje / Oferte",
    pos: "emër",
    notes: "Ushqim ose pije që u ofrohet mysafirëve."
  },
  {
    id: "g-noun-47",
    word: "Damat",
    translation: "Dhëndër",
    pos: "emër",
    notes: "Dhëndër në dasmë."
  },
  {
    id: "g-noun-48",
    word: "Gelin",
    translation: "Nuse",
    pos: "emër",
    notes: "Nuse në dasmë."
  },
  {
    id: "g-noun-49",
    word: "Düğün",
    translation: "Dasmë",
    pos: "emër",
    notes: "Ceremonia e martesës."
  },
  {
    id: "g-noun-50",
    word: "Kına",
    translation: "Këna / Këna e nuses",
    pos: "emër",
    notes: "Pluhur tradicional për ngjyrosje ose nata e kënës."
  },
  {
    id: "g-noun-51",
    word: "Nikah",
    translation: "Martesë (ligjore) / Celebrim",
    pos: "emër",
    notes: "Nënshkrimi ligjor i martesës."
  },
  {
    id: "g-noun-52",
    word: "Cüzdan",
    translation: "Portofol / Libreze",
    pos: "emër",
    notes: "Portofol ose librezë (p.sh. evlilik cüzdanı)."
  },
  {
    id: "g-noun-53",
    word: "Davul",
    translation: "Tupan / Daulle",
    pos: "emër",
    notes: "Instrument muzikor me goditje."
  },
  {
    id: "g-noun-54",
    word: "Zurna",
    translation: "Zurnë / Surle",
    pos: "emër",
    notes: "Instrument muzikor tradicional frymor."
  },
  // Basic Pronoun Inflections and Crucial Particles
  {
    id: "g-struct-64",
    word: "Değil",
    translation: "Nuk është / Jo",
    pos: "lidhëz",
    notes: "Përdoret për mohim emëror ose foljor."
  },
  {
    id: "g-struct-65",
    word: "Bana",
    translation: "Më / Mua / Tek unë",
    pos: "përemër",
    notes: "Dativi i 'ben' (unë)."
  },
  {
    id: "g-struct-66",
    word: "Sana",
    translation: "Të / Ty / Tek ti",
    pos: "përemër",
    notes: "Dativi i 'sen' (ti)."
  },
  {
    id: "g-struct-67",
    word: "Ona",
    translation: "Atij / Asaj / Tek ai/ajo",
    pos: "përemër",
    notes: "Dativi i 'o' (ai/ajo)."
  },
  {
    id: "g-struct-68",
    word: "Bunu",
    translation: "Këtë",
    pos: "përemër",
    notes: "Akuzativi i 'bu' (kjo/ky)."
  },
  {
    id: "g-struct-69",
    word: "Şunu",
    translation: "Atë (afër) / Këtë",
    pos: "përemër",
    notes: "Akuzativi i 'şu'."
  },
  {
    id: "g-struct-70",
    word: "Onu",
    translation: "Atë",
    pos: "përemër",
    notes: "Akuzativi i 'o'."
  },
  {
    id: "g-struct-71",
    word: "Buna",
    translation: "Kësaj / Këtij / Tek kjo/ky",
    pos: "përemër",
    notes: "Dativi i 'bu' (kjo/ky)."
  },
  {
    id: "g-struct-72",
    word: "Şuna",
    translation: "Asaj / Atij / Tek ajo/ai",
    pos: "përemër",
    notes: "Dativi i 'şu'."
  },
  {
    id: "g-struct-73",
    word: "Bunda",
    translation: "Në këtë / Tek kjo/ky",
    pos: "përemër",
    notes: "Lokativi i 'bu'."
  },
  {
    id: "g-struct-74",
    word: "Onda",
    translation: "Në të / Tek ai/ajo",
    pos: "përemër",
    notes: "Lokativi i 'o'."
  },
  {
    id: "g-struct-75",
    word: "Bundan",
    translation: "Nga kjo / Prej kësaj/këtij",
    pos: "përemër",
    notes: "Ablativi i 'bu'."
  },
  {
    id: "g-struct-76",
    word: "Ondan",
    translation: "Nga ajo / Prej tij/saj",
    pos: "përemër",
    notes: "Ablativi i 'o'."
  },
  {
    id: "g-struct-77",
    word: "Bunun",
    translation: "I/e kësaj / këtij",
    pos: "përemër",
    notes: "Gjenitivi i 'bu'."
  },
  {
    id: "g-struct-78",
    word: "Onun",
    translation: "I/e atij / asaj",
    pos: "përemër",
    notes: "Gjenitivi i 'o'."
  },
  {
    id: "g-struct-79",
    word: "Benim",
    translation: "Im / E imja",
    pos: "përemër",
    notes: "Përemër pronor (veti i parë njëjës)."
  },
  {
    id: "g-struct-80",
    word: "Senin",
    translation: "Yt / E jotja",
    pos: "përemër",
    notes: "Përemër pronor (veti i dytë njëjës)."
  },
  {
    id: "g-struct-81",
    word: "Bizim",
    translation: "Ynë / Jona",
    pos: "përemër",
    notes: "Përemër pronor (veti i parë shumës)."
  },
  {
    id: "g-struct-82",
    word: "Sizin",
    translation: "Juaj / Juaja",
    pos: "përemër",
    notes: "Përemër pronor (veti i dytë shumës)."
  },
  {
    id: "g-struct-83",
    word: "Bence",
    translation: "Sipas meje / Për mendimin tim",
    pos: "ndajfolje",
    notes: "Sipas mendimit tim."
  },
  {
    id: "g-struct-84",
    word: "Sence",
    translation: "Sipas teje / Për mendimin tënd",
    pos: "ndajfolje",
    notes: "Sipas mendimit tënd."
  },
  {
    id: "g-struct-85",
    word: "Sizce",
    translation: "Sipas jush / Për mendimin tuaj",
    pos: "ndajfolje",
    notes: "Sipas mendimit tuaj (formal ose shumës)."
  },
  {
    id: "g-struct-86",
    word: "Artık",
    translation: "Tashmë / Më / Tani e tutje",
    pos: "ndajfolje",
    notes: "Shënon ndryshim të gjendjes ose kohës."
  },
  {
    id: "g-struct-87",
    word: "Dek",
    translation: "Deri / Gjer (kërkon dative)",
    pos: "lidhëz",
    notes: "Përdoret për kufi kohor ose hapësinor (p.sh. sonsuza dek)."
  },
  {
    id: "g-struct-88",
    word: "Eğer",
    translation: "Nëse / Po qe se",
    pos: "lidhëz",
    notes: "Lidhëz kushtore."
  },
  {
    id: "g-struct-89",
    word: "Farklı",
    translation: "I ndryshëm",
    pos: "mbiemër",
    notes: "Mbiemër cilësor."
  },
  {
    id: "g-struct-90",
    word: "Fazla",
    translation: "Më shumë / Tepër",
    pos: "ndajfolje",
    notes: "Tregon sasi më të madhe se norma."
  },
  {
    id: "g-struct-91",
    word: "Harika",
    translation: "E mrekullueshme / Shkëlqyeshëm",
    pos: "mbiemër",
    notes: "Cilësi ose përshkrim shumë pozitiv."
  },
  {
    id: "g-struct-92",
    word: "Hakkında",
    translation: "Rreth / Në lidhje me / Për",
    pos: "lidhëz",
    notes: "Prepozicion që vendoset pas emrit."
  },
  {
    id: "g-struct-93",
    word: "Kalem",
    translation: "Laps / Stilolaps",
    pos: "emër",
    notes: "Mjet shkrimi."
  },
  {
    id: "g-struct-94",
    word: "Peki",
    translation: "Atëherë / Epo / Mirë",
    pos: "shprehje",
    notes: "Përdoret për të pranuar diçka ose për të kaluar te një ide tjetër."
  },
  {
    id: "g-struct-95",
    word: "Vakit",
    translation: "Kohë",
    pos: "emër",
    notes: "Sinonim i fjalës 'zaman' (kohë)."
  },
  {
    id: "g-struct-96",
    word: "Ora",
    translation: "Atje / Ajo pjesë",
    pos: "përemër",
    notes: "Tregon një vend larg folësit dhe dëgjuesit."
  },
  {
    id: "g-struct-97",
    word: "Bura",
    translation: "Këtu / Kjo pjesë",
    pos: "përemër",
    notes: "Tregon një vend afër folësit."
  },
  {
    id: "g-struct-98",
    word: "Şura",
    translation: "Atje (afër) / Ajo pjesë",
    pos: "përemër",
    notes: "Tregon një vend pak më larg folësit, por afër dëgjuesit."
  },
  {
    id: "g-struct-99",
    word: "Aracı",
    translation: "Ndërmjetës / Ndërmjetësues",
    pos: "emër",
    notes: "Person ose mjet që shërben si urë lidhëse."
  },
  {
    id: "g-struct-100",
    word: "Toplumsal",
    translation: "Shoqëror",
    pos: "mbiemër",
    notes: "Që ka të bëjë me shoqërinë (sosyal)."
  },
  {
    id: "g-struct-101",
    word: "Gerçek",
    translation: "Realitet / E vërtetë",
    pos: "emër",
    notes: "Diçka që ekziston me të vërtetë (real)."
  },
  {
    id: "g-struct-102",
    word: "Yansıtmak",
    translation: "Të pasqyrosh / pasqyroj",
    pos: "folje",
    notes: "Të tregosh diçka si në pasqyrë ose të shfaqësh."
  },
  {
    id: "g-struct-103",
    word: "Dal",
    translation: "Degë / Fushë",
    pos: "emër",
    notes: "Degë e një peme ose fushë studimi/profesioni."
  },
  {
    id: "g-struct-104",
    word: "Mı",
    translation: "A (pjesëz pyetëse)",
    pos: "shprehje",
    notes: "Pjesëz pyetëse e turqishtes (mı/mi/mu/mü)."
  },
  {
    id: "g-struct-105",
    word: "Mi",
    translation: "A (pjesëz pyetëse)",
    pos: "shprehje",
    notes: "Pjesëz pyetëse e turqishtes (mı/mi/mu/mü)."
  },
  {
    id: "g-struct-106",
    word: "Şu",
    translation: "Ky / Kjo (pak më larg) / Ai / Ajo",
    pos: "përemër",
    notes: "Përemër dëftor për gjëra pak më larg se 'bu'."
  },
  {
    id: "g-struct-107",
    word: "Teşekkür",
    translation: "Falënderim",
    pos: "emër",
    notes: "Shprehje falënderimi (Teşekkür etmek)."
  },
  {
    id: "g-struct-108",
    word: "Memnun",
    translation: "I kënaqur",
    pos: "mbiemër",
    notes: "I kënaqur me diçka ose nga një takim (Memnun olmak)."
  },
  {
    id: "g-struct-109",
    word: "Dil",
    translation: "Gjuhë",
    pos: "emër",
    notes: "Gjuha si organ ose gjuha e folur (gjuhësi)."
  },
  {
    id: "g-struct-110",
    word: "Kafe",
    translation: "Kafe / Kafene",
    pos: "emër",
    notes: "Pije kafe ose vend ku pihet kafe."
  },
  {
    id: "g-struct-111",
    word: "Dondurma",
    translation: "Akullore",
    pos: "emër",
    notes: "Ëmbëlsirë e ngrirë prej qumështi."
  },
  {
    id: "g-struct-112",
    word: "Biraz",
    translation: "Pak / Pakëz",
    pos: "ndajfolje",
    notes: "Në sasi të vogël."
  },
  {
    id: "g-struct-113",
    word: "Yorulmak",
    translation: "Të lodhesh / lodhem",
    pos: "folje",
    notes: "Humbje e fuqisë pas një pune."
  },
  {
    id: "g-struct-114",
    word: "Sohbet",
    translation: "Bisedë",
    pos: "emër",
    notes: "Bisedë e lirë miqësore (Sohbet etmek)."
  },
  {
    id: "g-struct-115",
    word: "Dönmek",
    translation: "Të kthehesh / kthehem / rrotullohem",
    pos: "folje",
    notes: "Kthim në vendin e nisjes ose rrotullim."
  },
  {
    id: "g-struct-116",
    word: "Uyumak",
    translation: "Të flesh / fle",
    pos: "folje",
    notes: "Fjetje, gjendje qetësie e trupit."
  },
  {
    id: "g-struct-117",
    word: "Aramak",
    translation: "Të kërkosh / kërkoj / thërras (në telefon)",
    pos: "folje",
    notes: "Kthim ose thirrje telefonike."
  },
  {
    id: "g-struct-118",
    word: "Saatlerce",
    translation: "Me orë të tëra",
    pos: "ndajfolje",
    notes: "Kohëzgjatje e matur me orë."
  },
  {
    id: "g-struct-119",
    word: "Kenar",
    translation: "Anë / Buzë",
    pos: "emër",
    notes: "Pjesa anësore e diçkaje (p.sh. deniz kenarı)."
  },
  {
    id: "g-struct-120",
    word: "Bol",
    translation: "Shumë / Boll / Gjerë",
    pos: "mbiemër",
    notes: "Në sasi të madhe ose rrobë e gjerë."
  },
  {
    id: "g-struct-121",
    word: "Plan",
    translation: "Plan",
    pos: "emër",
    notes: "Planifikim ose skicë."
  },
  {
    id: "g-struct-122",
    word: "Şey",
    translation: "Gjë",
    pos: "emër",
    notes: "Fjalë e përgjithshme për sende ose koncepte."
  },
  {
    id: "g-struct-123",
    word: "Halletmek",
    translation: "Të zgjidhësh / zgjidh / kryej",
    pos: "folje",
    notes: "Përfundimi ose zgjidhja e një pune/problemi."
  },
  {
    id: "g-struct-124",
    word: "Uyanmak",
    translation: "Të zgjohesh / zgjohem",
    pos: "folje",
    notes: "Zgjimi nga gjumi."
  },
  {
    id: "g-struct-125",
    word: "Hazırlamak",
    translation: "Të përgatitësh / përgatis",
    pos: "folje",
    notes: "Bërja gati e diçkaje."
  },
  {
    id: "g-struct-126",
    word: "Türk",
    translation: "Turk",
    pos: "emër",
    notes: "Kombësia ose populli turk."
  },
  {
    id: "g-struct-127",
    word: "Türkçe",
    translation: "Turqisht",
    pos: "emër",
    notes: "Gjuha turke."
  },
  {
    id: "g-struct-128",
    word: "İstanbul",
    translation: "Stamboll",
    pos: "emër",
    notes: "Qyteti më i madh i Turqisë."
  },
  {
    id: "g-struct-129",
    word: "İş",
    translation: "Punë",
    pos: "emër",
    notes: "Aktivitet, profesion ose detyrë."
  },
  {
    id: "g-struct-130",
    word: "Spor",
    translation: "Sport",
    pos: "emër",
    notes: "Aktivitet fizik."
  },
  {
    id: "g-struct-131",
    word: "Televizyon",
    translation: "Televizion",
    pos: "emër",
    notes: "Mjet komunikimi dhe transmetimi."
  },
  {
    id: "g-struct-132",
    word: "Lezzetli",
    translation: "I shijshëm",
    pos: "mbiemër",
    notes: "Që ka shije të mirë."
  },
  {
    id: "g-struct-133",
    word: "Sağlık",
    translation: "Shëndet",
    pos: "emër",
    notes: "Gjendje e mirë fizike dhe mendore."
  },
  {
    id: "g-struct-134",
    word: "Sağlıklı",
    translation: "I shëndetshëm",
    pos: "mbiemër",
    notes: "Që gëzon shëndet të mirë."
  },
  {
    id: "g-struct-135",
    word: "Hak",
    translation: "E drejtë",
    pos: "emër",
    notes: "E drejta ligjore ose morale."
  },
  {
    id: "g-struct-136",
    word: "Haklı",
    translation: "I drejtë / Ka të drejtë",
    pos: "mbiemër",
    notes: "Që ka të drejtë në një opinion ose veprim."
  },
  {
    id: "g-struct-137",
    word: "Önem",
    translation: "Rëndësi",
    pos: "emër",
    notes: "Vlera ose pesha e diçkaje."
  },
  {
    id: "g-struct-138",
    word: "Önemli",
    translation: "I rëndësishëm",
    pos: "mbiemër",
    notes: "Që ka rëndësi të madhe."
  },
  {
    id: "g-struct-139",
    word: "Aktif",
    translation: "Aktiv",
    pos: "mbiemër",
    notes: "Veprues, jo pasiv."
  },
  {
    id: "g-struct-140",
    word: "Planlı",
    translation: "I planifikuar",
    pos: "mbiemër",
    notes: "Që bëhet me plan."
  },
  {
    id: "g-struct-141",
    word: "Zihin",
    translation: "Mendje / Zotësi mendore",
    pos: "emër",
    notes: "Kapaciteti për të menduar."
  },
  {
    id: "g-struct-142",
    word: "Keyif",
    translation: "Kënaqësi / Qejf",
    pos: "emër",
    notes: "Gjendje e mirë shpirtërore ose kënaqësi (qejf)."
  },
  {
    id: "g-struct-143",
    word: "Keyifli",
    translation: "I këndshëm / Me qejf",
    pos: "mbiemër",
    notes: "Që jep kënaqësi ose është i gëzuar."
  },
  {
    id: "g-struct-144",
    word: "Sevgili",
    translation: "I dashur / E dashur",
    pos: "emër",
    notes: "Personi i zemrës ose i dashur."
  },
  {
    id: "g-struct-145",
    word: "Yüksek",
    translation: "I lartë",
    pos: "mbiemër",
    notes: "Që ndodhet lart ose ka vlerë të madhe."
  },
  {
    id: "g-struct-146",
    word: "Ağaç",
    translation: "Pemë",
    pos: "emër",
    notes: "Bimë drunore shumëvjeçare."
  },
  {
    id: "g-struct-147",
    word: "Saf",
    translation: "I pastër / Naiv",
    pos: "mbiemër",
    notes: "I pastër, i papërzier, ose person shumë besues."
  },
  {
    id: "g-struct-148",
    word: "Unutulmaz",
    translation: "I paharrueshëm",
    pos: "mbiemër",
    notes: "Që nuk mund të harrohet."
  },
  {
    id: "g-struct-149",
    word: "Hata",
    translation: "Gabim",
    pos: "emër",
    notes: "Gabim i bërë pa qëllim."
  },
  {
    id: "g-struct-150",
    word: "Emin",
    translation: "I sigurt",
    pos: "mbiemër",
    notes: "Që nuk ka dyshime për diçka."
  },
  {
    id: "g-struct-151",
    word: "Benzersiz",
    translation: "Unik / I papërsëritshëm",
    pos: "mbiemër",
    notes: "Që nuk ka të ngjashëm."
  },
  {
    id: "g-struct-152",
    word: "Süreç",
    translation: "Proces",
    pos: "emër",
    notes: "Rrjedhë e ngjarjeve ose zhvillimeve."
  },
  {
    id: "g-struct-153",
    word: "İlham",
    translation: "Inspirim / Frymëzim",
    pos: "emër",
    notes: "Frymëzim për krijim ose veprim."
  },
  {
    id: "g-struct-154",
    word: "Kararlı",
    translation: "I vendosur",
    pos: "mbiemër",
    notes: "Që nuk lëkundet në vendimet e tij."
  },
  {
    id: "g-struct-155",
    word: "Hayal",
    translation: "Ëndërr / Imagjinatë",
    pos: "emër",
    notes: "Ëndërr ose diçka e imagjinuar."
  },
  {
    id: "g-struct-156",
    word: "Yapmak",
    translation: "Të bësh / bëj / krijoj",
    pos: "folje",
    notes: "Bëj një aktivitet ose krijoj diçka."
  },
  {
    id: "g-struct-157",
    word: "Girmek",
    translation: "Të hysh / hyj",
    pos: "folje",
    notes: "Hyrje brenda një vendi."
  },
  {
    id: "g-struct-158",
    word: "Çıkmak",
    translation: "Të dalësh / dal",
    pos: "folje",
    notes: "Dalje jashtë ose ngjitje."
  },
  {
    id: "g-struct-159",
    word: "Kalmak",
    translation: "Të qëndrosh / qëndroj / ngel",
    pos: "folje",
    notes: "Qëndrimi në një vend ose ngelja (p.sh. në klasë)."
  },
  {
    id: "g-struct-160",
    word: "Bilmek",
    translation: "Të dish / di / njoh",
    pos: "folje",
    notes: "Të kesh dijeni ose njohuri për diçka."
  },
  {
    id: "g-struct-161",
    word: "Söylemek",
    translation: "Të thuash / them / tregoj",
    pos: "folje",
    notes: "Shprehja e diçkaje me fjalë."
  },
  {
    id: "g-struct-162",
    word: "İstemek",
    translation: "Të duash / dua / kërkoj",
    pos: "folje",
    notes: "Dëshira për të pasur ose bërë diçka."
  },
  {
    id: "g-struct-163",
    word: "Demek",
    translation: "Të thuash / them / do të thotë",
    pos: "folje",
    notes: "Shprehje ose kuptim i një fjale."
  },
  {
    id: "g-struct-164",
    word: "Yıkamak",
    translation: "Të lash / laj",
    pos: "folje",
    notes: "Pastrimi i diçkaje me ujë."
  },
  {
    id: "g-struct-165",
    word: "Fırçalamak",
    translation: "Të pastrosh me furçë / pastroj / fërkoj",
    pos: "folje",
    notes: "Pastrimi i dhëmbëve ose flokëve me furçë."
  },
  {
    id: "g-struct-166",
    word: "Koşmak",
    translation: "Të vraposh / vrapoj",
    pos: "folje",
    notes: "Vrapim, lëvizje e shpejtë me këmbë."
  },
  {
    id: "g-struct-167",
    word: "Tırmanmak",
    translation: "Të ngjitesh / ngjitem / hipi",
    pos: "folje",
    notes: "Ngjitje në pemë, mal ose lartësi."
  },
  {
    id: "g-struct-168",
    word: "Bulmak",
    translation: "Të gjesh / gjej",
    pos: "folje",
    notes: "Gjetja e diçkaje të humbur ose të re."
  },
  {
    id: "g-struct-169",
    word: "Özel",
    translation: "I veçantë / Special",
    pos: "mbiemër",
    notes: "Që ka karakteristika të veçanta ose dalluese."
  },
  {
    id: "g-struct-170",
    word: "Son",
    translation: "Fund / I fundit",
    pos: "emër",
    notes: "Pika ku mbaron diçka ose elementi i fundit."
  },
  {
    id: "g-struct-171",
    word: "Çift",
    translation: "Çift",
    pos: "emër",
    notes: "Dy gjëra të të njëjtit lloj ose dy njerëz bashkë."
  },
  {
    id: "g-struct-172",
    word: "Renk",
    translation: "Ngjyrë",
    pos: "emër",
    notes: "Cilësi vizuale e objekteve (e kuqe, e verdhë, etj.)."
  },
  {
    id: "g-struct-173",
    word: "Elbise",
    translation: "Rrobë / Fustan / Veshje",
    pos: "emër",
    notes: "Veshje që mbulon trupin."
  },
  {
    id: "g-struct-174",
    word: "İse",
    translation: "Kurse / Ndërsa / Nëse",
    pos: "lidhëz",
    notes: "Lidhëz që përdoret për krahasim ose kusht."
  },
  {
    id: "g-struct-175",
    word: "Giymek",
    translation: "Të veshësh / vesh",
    pos: "folje",
    notes: "Vendosja e rrobave në trup."
  },
  {
    id: "g-struct-176",
    word: "Yakmak",
    translation: "Të ndezësh / ndez / djeg",
    pos: "folje",
    notes: "Ndezja e zjarrit ose dritës; shkaktimi i djegies."
  },
  {
    id: "g-struct-177",
    word: "Eşlik",
    translation: "Shoqërim / Shoqëri",
    pos: "emër",
    notes: "Të shkosh ose të jesh së bashku me dikë."
  },
  {
    id: "g-struct-178",
    word: "Barındırmak",
    translation: "Të strehosh / strehoj / përmbaj",
    pos: "folje",
    notes: "T'i japësh strehë dikujt ose të kesh diçka brenda vetes."
  },
  {
    id: "g-struct-179",
    word: "Kamaştırıcı",
    translation: "Verbues / Shkëlqyes",
    pos: "mbiemër",
    notes: "Që shkëlqen shumë dhe verbon sytë."
  },
  {
    id: "g-struct-180",
    word: "Aracı",
    translation: "Ndërmjetës / Mjet / Ndërmjetësues",
    pos: "emër",
    notes: "Person ose gjë që shërben për të lidhur dy palë ose për të arritur një qëllim."
  },
  {
    id: "g-struct-181",
    word: "Toplumsal",
    translation: "Shoqëror / Social",
    pos: "mbiemër",
    notes: "Që ka të bëjë me shoqërinë."
  },
  {
    id: "g-struct-182",
    word: "Gerçek",
    translation: "E vërtetë / Real",
    pos: "mbiemër",
    notes: "Që ekziston vërtet dhe nuk është i imagjinuar."
  },
  {
    id: "g-struct-183",
    word: "Yansıtmak",
    translation: "Të pasqyrosh / pasqyroj",
    pos: "folje",
    notes: "Dërgimi i dritës ose imazhit mbrapsht si pasqyrë; shfaqja e një gjendjeje."
  },
  {
    id: "g-struct-184",
    word: "Dal",
    translation: "Degë / Sektor / Fushë",
    pos: "emër",
    notes: "Degë e pemës; fushë ose sektor i shkencës, artit etj."
  },
  {
    id: "g-struct-185",
    word: "Taraf",
    translation: "Anë / Palë / Drejtim",
    pos: "emër",
    notes: "Njëra nga anët ose pjesëmarrësit në një marrëdhënie."
  },
  {
    id: "g-struct-186",
    word: "Bel",
    translation: "Bel / Mes",
    pos: "emër",
    notes: "Pjesa e mesit të trupit të njeriut."
  },
  {
    id: "g-struct-187",
    word: "Başlangıç",
    translation: "Fillim / Nisje",
    pos: "emër",
    notes: "Pika ose koha e nisjes së diçkaje."
  },
  {
    id: "g-struct-188",
    word: "Salon",
    translation: "Sallë / Sallon",
    pos: "emër",
    notes: "Dhomë e madhe për mysafirë ose për shfaqje e mbledhje."
  },
  {
    id: "g-struct-189",
    word: "Atmak",
    translation: "Të hedhësh / hedh / nënshkruash",
    pos: "folje",
    notes: "Largimi i diçkaje me forcë nga dora; hedhja e një nënshkrimi (imza atmak)."
  },
  {
    id: "g-struct-190",
    word: "Evlilik",
    translation: "Martesë",
    pos: "emër",
    notes: "Lidhja ligjore dhe shoqërore midis dy bashkëshortëve."
  },
  {
    id: "g-struct-191",
    word: "Takmak",
    translation: "Të vendosësh / vendos / var / vesh (bizhuteri)",
    pos: "folje",
    notes: "Vendosja ose varja e diçkaje në trup (p.sh. unazë, ar, syze)."
  },
  {
    id: "g-struct-192",
    word: "Maddi",
    translation: "Material / Financiar / Lendor",
    pos: "mbiemër",
    notes: "Që ka të bëjë me paranë ose lëndën konkrete."
  },
  {
    id: "g-struct-193",
    word: "Güçlendirmek",
    translation: "Të forcosh / forcoj",
    pos: "folje",
    notes: "Bërja e diçkaje më të fortë ose më rezistente."
  },
  {
    id: "g-struct-194",
    word: "Kültürel",
    translation: "Kulturor",
    pos: "mbiemër",
    notes: "Që ka të bëjë me kulturën."
  },
  {
    id: "g-struct-195",
    word: "Fotoğraf",
    translation: "Foto / Fotografi",
    pos: "emër",
    notes: "Imazh i fiksuar me aparat fotografik."
  },
  {
    id: "g-struct-196",
    word: "Boy",
    translation: "Gjatësi / Trup / Shtat / Jetëgjatësi",
    pos: "emër",
    notes: "Lartësia e trupit të njeriut; gjatësia e diçkaje (ömür boyu = gjatë gjithë jetës)."
  },
  {
    id: "g-struct-197",
    word: "Sağlamak",
    translation: "Të sigurosh / siguroj / mundësoj",
    pos: "folje",
    notes: "Mundësimi ose sigurimi i realizimit të diçkaje."
  },
  {
    id: "g-struct-198",
    word: "Alfabe",
    translation: "Alfabet",
    pos: "emër",
    notes: "Tërësia e shkronjave të një gjuhe të renditura sipas një rregulli."
  },
  {
    id: "g-struct-199",
    word: "Harf",
    translation: "Shkronjë",
    pos: "emër",
    notes: "Shenjë grafike që përfaqëson një tingull."
  },
  {
    id: "g-struct-200",
    word: "Ünlü",
    translation: "Zanore / I famshëm",
    pos: "emër",
    notes: "Tingull zanor; person i njohur dhe i famshëm."
  },
  {
    id: "g-struct-201",
    word: "Ünsüz",
    translation: "Bashkëtingëllore / I panjohur",
    pos: "emër",
    notes: "Tingull bashkëtingëllor."
  },
  {
    id: "g-struct-202",
    word: "Kelime",
    translation: "Fjalë",
    pos: "emër",
    notes: "Njësi kuptimplote e gjuhës."
  },
  {
    id: "g-struct-203",
    word: "Telaffuz",
    translation: "Shqiptim",
    pos: "emër",
    notes: "Mënyra se si nxirren tingujt e një fjalë me gojë."
  },
  {
    id: "g-struct-204",
    word: "Özgü",
    translation: "I veçantë për / Karakteristik",
    pos: "mbiemër",
    notes: "Që i përket vetëm një personi, vendi ose gjëje."
  },
  {
    id: "g-struct-205",
    word: "İnce",
    translation: "I hollë / I imët / I edukuar",
    pos: "mbiemër",
    notes: "Që ka trashësi të vogël; zanore e hollë (e, i, ö, ü)."
  },
  {
    id: "g-struct-206",
    word: "Grup",
    translation: "Grup",
    pos: "emër",
    notes: "Tërësi njerëzish ose gjërash të bashkuara për një qëllim."
  },
  {
    id: "g-struct-207",
    word: "Vokal",
    translation: "Vokal / Zanor / Zanore",
    pos: "emër",
    notes: "Tingull zanor ose që lidhet me zërin."
  },
  {
    id: "g-struct-208",
    word: "Dilbilgisi",
    translation: "Gramatikë",
    pos: "emër",
    notes: "Rregullat e strukturës dhe përdorimit të një gjuhe."
  },
  {
    id: "g-struct-209",
    word: "Temel",
    translation: "Bazë / Themel / Themelor",
    pos: "mbiemër",
    notes: "Pjesa më e rëndësishme ose fillestare e diçkaje."
  },
  {
    id: "g-struct-210",
    word: "Ses",
    translation: "Zë / Tingull / Zhurmë",
    pos: "emër",
    notes: "Dridhje akustike që dëgjohet nga veshi."
  },
  {
    id: "g-struct-211",
    word: "Akıcı",
    translation: "Rrjedhshëm / Rrjedhës",
    pos: "mbiemër",
    notes: "Që flet ose lexon pa ndalesa e vështirësi."
  },
  {
    id: "g-struct-212",
    word: "Kendi",
    translation: "Vetë / Vetvete",
    pos: "përemër",
    notes: "Përemër vetvetor që tregon të njëjtin person."
  },
  {
    id: "g-struct-213",
    word: "Aşık",
    translation: "I dashuruar / Dashnor / Bard (këngëtar popullor)",
    pos: "mbiemër",
    notes: "Dikush që ndjen dashuri të madhe; poet e këngëtar popullor turk (Aşık Veysel)."
  },
  {
    id: "g-struct-214",
    word: "Edebiyat",
    translation: "Letërsi / Edebiyat",
    pos: "emër",
    notes: "Arti i fjalës së shkruar artistike."
  },
  {
    id: "g-struct-215",
    word: "Temsilci",
    translation: "Përfaqësues",
    pos: "emër",
    notes: "Person që përfaqëson një grup, shtet ose lëvizje."
  },
  {
    id: "g-struct-216",
    word: "Çiçek",
    translation: "Lule / Sëmundja e luleve (lija)",
    pos: "emër",
    notes: "Pjesa e bukur me ngjyra e bimës; lija (sëmundje infektive: çiçek hastalığı)."
  },
  {
    id: "g-struct-217",
    word: "Hastalık",
    translation: "Sëmundje",
    pos: "emër",
    notes: "Prishje e shëndetit të trupit."
  },
  {
    id: "g-struct-218",
    word: "İfade",
    translation: "Shprehje / Deklaratë",
    pos: "emër",
    notes: "Mënyra e shprehjes së mendimit me fjalë ose mimikë."
  },
  {
    id: "g-struct-219",
    word: "İlk",
    translation: "I parë / Fillestar",
    pos: "mbiemër",
    notes: "Që ndodhet në fillim të një vargu ose kohe."
  },
  {
    id: "g-struct-220",
    word: "Pratik",
    translation: "Praktikë / Praktik",
    pos: "mbiemër",
    notes: "Zbatimi i njohurive në punë; i shpejtë dhe i lehtë."
  },
  {
    id: "g-struct-221",
    word: "Ölüm",
    translation: "Vdekje",
    pos: "emër",
    notes: "Mbarimi i jetës."
  },
  {
    id: "g-struct-222",
    word: "Tema",
    translation: "Temë",
    pos: "emër",
    notes: "Mendimi kryesor ose subjekti i një vepre."
  },
  {
    id: "g-struct-223",
    word: "Sürekli",
    translation: "Vazhdimisht / I vazhdueshëm / Pa ndërprerje",
    pos: "ndajfolje",
    notes: "Që zgjat shumë kohë pa u ndërprerë."
  },
  {
    id: "g-struct-224",
    word: "Doğum",
    translation: "Lindje",
    pos: "emër",
    notes: "Ardhja në jetë e një qenieje."
  },
  {
    id: "g-struct-225",
    word: "Devam",
    translation: "Vazhdim / Vazhdimësi",
    pos: "emër",
    notes: "Qëndrimi në të njëjtën gjendje ose punë (devam etmek = vazhdoj)."
  },
  {
    id: "g-struct-226",
    word: "Lazım",
    translation: "I nevojshëm / Duhet",
    pos: "mbiemër",
    notes: "Diçka që është e nevojshme (lazım olmak = duhet)."
  },
  {
    id: "g-struct-227",
    word: "Fiziksel",
    translation: "Fizik",
    pos: "mbiemër",
    notes: "Që ka të bëjë me trupin ose fizikën."
  },
  {
    id: "g-struct-228",
    word: "İbaret",
    translation: "I përbërë prej / Vetëm",
    pos: "mbiemër",
    notes: "Që përbëhet vetëm nga një gjë e caktuar."
  },
  {
    id: "g-struct-229",
    word: "Ruh",
    translation: "Shpirt / Ruh",
    pos: "emër",
    notes: "Pjesa jomateriale dhe e pavdekshme e njeriut; gjendje shpirtërore."
  },
  {
    id: "g-struct-230",
    word: "Güç",
    translation: "Forcë / Fuqi / Vështirësi",
    pos: "emër",
    notes: "Aftësi fizike ose mendore për të bërë diçka; i vështirë."
  },
  {
    id: "g-struct-231",
    word: "Portakal",
    translation: "Portokall",
    pos: "emër",
    notes: "Frut agrume me lëkurë portokalli."
  },
  {
    id: "g-struct-232",
    word: "Etkinlik",
    translation: "Aktivitet / Ngjarje / Veprimtari",
    pos: "emër",
    notes: "Veprimtari e organizuar (p.sh. festival, lojë)."
  },
  {
    id: "g-struct-233",
    word: "İlgi",
    translation: "Interes / Lidhje / Kujdes",
    pos: "emër",
    notes: "Dëshirë për t'i kushtuar vëmendje diçkaje."
  },
  {
    id: "g-struct-234",
    word: "Sinemasever",
    translation: "Adhurues i kinemasë / Filmdashës",
    pos: "emër",
    notes: "Person që e do shumë kinemanë dhe filmat."
  },
  {
    id: "g-struct-235",
    word: "Güzellik",
    translation: "Bukuri",
    pos: "emër",
    notes: "Cilësi e asaj që është e bukur."
  },
  {
    id: "g-struct-236",
    word: "Aktarmak",
    translation: "Të transferosh / transferoj / kaloj / përcjell",
    pos: "folje",
    notes: "Kalimi i diçkaje nga një vend te tjetri ose nga një gjuhë te tjetra."
  },
  {
    id: "g-struct-237",
    word: "Sarf",
    translation: "Shpenzim / Harxhim / Përdorim",
    pos: "emër",
    notes: "Përdorimi i energjisë, kohës ose parave (sarf etmek = shpenzoj)."
  },
  {
    id: "g-struct-238",
    word: "Özen",
    translation: "Kujdes / Përkushtim / Vëmendje",
    pos: "emër",
    notes: "Kujdesi i madh për të bërë diçka sa më mirë."
  },
  {
    id: "g-struct-239",
    word: "Coşku",
    translation: "Entuziazëm / Eksitim / Hovin",
    pos: "emër",
    notes: "Gjendje gëzimi dhe eksitimi të madh shpirtëror."
  },
  {
    id: "g-struct-240",
    word: "Milyon",
    translation: "Milion",
    pos: "emër",
    notes: "Numri 1,000,000."
  },
  {
    id: "g-struct-241",
    word: "Kişi",
    translation: "Person / Njeri / Vete",
    pos: "emër",
    notes: "Qenie njerëzore; përdoret edhe si njësi numërimi për njerëzit."
  },
  {
    id: "g-struct-242",
    word: "Takdim",
    translation: "Prezantim / Prezantoj",
    pos: "emër",
    notes: "Njoftimi i dikujt ose diçkaje para një publiku."
  },
  {
    id: "g-struct-243",
    word: "Nesil",
    translation: "Gjeneratë / Brez",
    pos: "emër",
    notes: "Njerëzit e lindur në të njëjtën periudhë kohore."
  },
  {
    id: "g-struct-244",
    word: "İniş",
    translation: "Zbritje / Tatëpjetë / Pjerrësi",
    pos: "emër",
    notes: "Lëvizje nga lart poshtë."
  },
  {
    id: "g-struct-245",
    word: "Çıkış",
    translation: "Dalje / Ngjitje / Përpjetë",
    pos: "emër",
    notes: "Lëvizje nga poshtë lart ose vendi nga ku dalim."
  },
  {
    id: "g-struct-246",
    word: "İz",
    translation: "Gjurmë / Shenjë",
    pos: "emër",
    notes: "Shenjë e lënë nga një këmbë ose objekt në tokë."
  },
  {
    id: "g-struct-247",
    word: "Bırakmak",
    translation: "Të lesh / lë / braktisësh",
    pos: "folje",
    notes: "Mosmarrja e diçkaje me vete; heqja dorë."
  },
  {
    id: "g-struct-248",
    word: "Pes",
    translation: "Dorëzim / Ulët",
    pos: "emër",
    notes: "Tingull i ulët; pranim i disfatës (pes etmek = dorëzohem)."
  },
  {
    id: "g-struct-249",
    word: "Peş",
    translation: "Pas / Prapa / Ndjekje",
    pos: "emër",
    notes: "Hapësira prapa dikujt (peşinden gitmek = shkoj pas tij/saj)."
  },
  {
    id: "g-struct-250",
    word: "Gerçekleştirmek",
    translation: "Të realizosh / realizoj / përmbush",
    pos: "folje",
    notes: "Kthimi i një ideje apo plani në realitet."
  },
  {
    id: "g-struct-251",
    word: "Sayfa",
    translation: "Faqe",
    pos: "emër",
    notes: "Njëra anë e fletës së librit apo fletores."
  },
  {
    id: "g-struct-252",
    word: "Oluşturmak",
    translation: "Të krijosh / krijoj / formoj",
    pos: "folje",
    notes: "Bashkimi i pjesëve për të krijuar një të tërë."
  },
  {
    id: "g-struct-253",
    word: "Yüzyıl",
    translation: "Shekull / 100 vjet",
    pos: "emër",
    notes: "Periudhë prej njëqind vjetësh."
  },
  {
    id: "g-struct-254",
    word: "Aracılık",
    translation: "Ndërmjetësim",
    pos: "emër",
    notes: "Roli i ndërmjetësit midis dy palëve."
  },
  {
    id: "g-struct-255",
    word: "Sonsuz",
    translation: "I pakufishëm / I pafund / Përjetësi",
    pos: "mbiemër",
    notes: "Që nuk ka fund ose kufi."
  },
  {
    id: "g-struct-256",
    word: "Doğmak",
    translation: "Të lindësh / lind / lindë (dielli)",
    pos: "folje",
    notes: "Ardhja në jetë; shfaqja e diellit ose hënës në horizont."
  },
  {
    id: "g-struct-257",
    word: "Yürümek",
    translation: "Të ecësh / eci",
    pos: "folje",
    notes: "Lëvizje me këmbë duke hedhur hapa."
  },
  {
    id: "g-struct-258",
    word: "Doldurmak",
    translation: "Të mbushësh / mbush",
    pos: "folje",
    notes: "Mbushja e një hapësire të zbrazët."
  },
  {
    id: "g-struct-259",
    word: "Uzun",
    translation: "I gjatë / Tall",
    pos: "mbiemër",
    notes: "Që ka gjatësi të madhe ose shtat të lartë."
  },
  {
    id: "g-struct-260",
    word: "Bugün",
    translation: "Sot",
    pos: "ndajfolje",
    notes: "Dita në të cilën jemi aktualisht."
  },
  {
    id: "g-struct-261",
    word: "Oyun",
    translation: "Lojë / Shfaqje",
    pos: "emër",
    notes: "Aktivitet argëtues; shfaqje teatri."
  },
  {
    id: "g-struct-262",
    word: "Boyunca",
    translation: "Gjatë / Përgjatë / Gjatë gjithë",
    pos: "ndajfolje",
    notes: "Përgjatë një vije ose gjatë gjithë një periudhe kohore (ömür boyunca = gjatë gjithë jetës)."
  },
  {
    id: "g-struct-263",
    word: "Satın",
    translation: "Blerje",
    pos: "ndajfolje",
    notes: "Përdoret në shprehjen 'satın almak' (të blesh)."
  },
  {
    id: "g-struct-264",
    word: "Eşya",
    translation: "Send / Gjë / Mobilje / Pajisje",
    pos: "emër",
    notes: "Pajisje shtëpiake ose sende (beyaz eşya = pajisje elektroshtëpiake)."
  },
  {
    id: "g-struct-265",
    word: "Garanti",
    translation: "Garanci / Siguri",
    pos: "emër",
    notes: "Dokument ose premtim që garanton cilësinë e diçkaje."
  },
  {
    id: "g-struct-266",
    word: "Az",
    translation: "Pak / Më pak / Pakica",
    pos: "ndajfolje",
    notes: "Sasi e vogël; jo shumë."
  },
  {
    id: "g-struct-267",
    word: "Alışmak",
    translation: "Të mësohesh / mësohem / familjarizohem",
    pos: "folje",
    notes: "Përshtatja me një vend, person ose situatë të re."
  },
  {
    id: "g-struct-268",
    word: "Herhangi",
    translation: "Çfarëdo / Ndonjë",
    pos: "mbiemër",
    notes: "Ndonjë prej tyre pa bërë përzgjedhje (herhangi bir şey = çfarëdo gjëje)."
  },
  {
    id: "g-struct-269",
    word: "Şey",
    translation: "Gjë / Send",
    pos: "emër",
    notes: "Përemër i pacaktuar që tregon një objekt, veprim ose koncept."
  },
  {
    id: "g-struct-270",
    word: "İhtiyaç",
    translation: "Nevojë",
    pos: "emër",
    notes: "Kërkesa ose nevoja e domosdoshme për diçka."
  },
  {
    id: "g-struct-271",
    word: "Yavaş yavaş",
    translation: "Ngadalë-ngadalë / Shkallë-shkallë / Avash-avash",
    pos: "ndajfolje",
    notes: "Lëvizje ose proces që ndodh me shpejtësi të vogël."
  },
  {
    id: "g-struct-272",
    word: "Çamaşır makinesi",
    translation: "Lavatriçe / Makinë larëse",
    pos: "emër",
    notes: "Makinë elektrike që shërben për larjen e rrobave."
  },
  {
    id: "g-struct-273",
    word: "Kolay gelsin",
    translation: "Punë e mbarë / Paçit lehtësi",
    pos: "shprehje",
    notes: "Shprehje urimi për dikë që është duke punuar ose duke filluar një punë."
  },
  {
    id: "g-struct-274",
    word: "Dikkat etmek",
    translation: "Të bësh kujdes / kujdesem / kushtoj vëmendje",
    pos: "folje",
    notes: "Kushtimi i vëmendjes ose kujdesit ndaj diçkaje."
  },
  {
    id: "g-struct-275",
    word: "Satın almak",
    translation: "Të blesh / blej",
    pos: "folje",
    notes: "Marrja e një malli ose shërbimi në shkëmbim të parave."
  }
];
