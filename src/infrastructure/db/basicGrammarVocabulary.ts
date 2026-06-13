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
  }
];
