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
    pos: "ndajfolje",
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
  },
  {
    id: "g-struct-276",
    word: "mıydı",
    translation: "a ishte? / a kishit?",
    pos: "shprehje",
    notes: "Pjesëza pyetëse (mı/mi/mu/mü) e ndjekur nga koha e shkuar (-ydı/-ydi)."
  },
  {
    id: "g-struct-277",
    word: "musunuz",
    translation: "a jeni ju? / a dëshironi ju?",
    pos: "shprehje",
    notes: "Pjesëza pyetëse (mı/mi/mu/mü) e kombinuar me vetën e dytë shumës (sunuz/sünüz)."
  },
  {
    id: "g-struct-278",
    word: "hoş",
    translation: "I këndshëm / mirë",
    pos: "mbiemër",
    notes: "Përdoret në shprehje si 'hoş geldiniz'."
  },
  {
    id: "g-struct-279",
    word: "borç",
    translation: "Borxh",
    pos: "emër",
    is_balkan: true,
    notes: "Detyrim financiar ose moral."
  },
  {
    id: "g-struct-280",
    word: "toplam",
    translation: "Gjithsej / total",
    pos: "emër",
    notes: "Shuma e të gjitha pjesëve."
  },
  {
    id: "g-struct-281",
    word: "fincan",
    translation: "Filxhan",
    pos: "emër",
    is_balkan: true,
    notes: "Enë e vogël për të pirë kafe ose çaj."
  },
  {
    id: "g-struct-282",
    word: "sade",
    translation: "E thjeshtë / pa sheqer",
    pos: "mbiemër",
    is_balkan: true,
    notes: "Pa shtesa, pa zbukurime ose pa sheqer (për kafenë)."
  },
  {
    id: "g-struct-283",
    word: "orta",
    translation: "Mesatare / e mesme",
    pos: "mbiemër",
    notes: "Në mes të dy skajeve; me pak sheqer (për kafenë)."
  },
  {
    id: "g-struct-284",
    word: "getirmek",
    translation: "Të sjellësh",
    pos: "folje",
    notes: "Marrja e diçkaje dhe dërgimi i saj në një vend tjetër."
  },
  {
    id: "g-struct-285",
    word: "istek",
    translation: "Dëshirë / kërkesë",
    pos: "emër",
    notes: "Ajo që dëshiron ose kërkon dikush."
  },
  {
    id: "g-struct-286",
    word: "afiyet",
    translation: "Shëndet / oreks",
    pos: "emër",
    notes: "Përdoret kryesisht në shprehjen 'Afiyet olsun' (Ju bëftë mirë)."
  },
  {
    id: "g-struct-287",
    word: "trafik",
    translation: "Trafik",
    pos: "emër",
    notes: "Lëvizja e automjeteve ose këmbësorëve në rrugë."
  },
  {
    id: "g-struct-288",
    word: "ücret",
    translation: "Pagesë / tarifë / çmim",
    pos: "emër",
    notes: "Sasia e parave që paguhet për një shërbim ose punë."
  },
  {
    id: "g-struct-289",
    word: "tutmak",
    translation: "Të kushtojë / të mbash",
    pos: "folje",
    notes: "Përdoret edhe për të shprehur koston totale (p.sh. 'ne kadar tutar')."
  },
  {
    id: "g-struct-290",
    word: "kemer",
    translation: "Rrip",
    pos: "emër",
    notes: "Rrip që përdoret për siguri ose për të mbajtur rrobat."
  },
  {
    id: "g-struct-291",
    word: "Kosovalı",
    translation: "Kosovar",
    pos: "mbiemër",
    notes: "Person ose diçka që vjen nga Kosova."
  },
  {
    id: "g-struct-292",
    word: "üzere",
    translation: "Për / me qëllim që",
    pos: "lidhëz",
    notes: "Përdoret në shprehje si 'Görüşmek üzere' (Shihemi së shpejti)."
  },
  {
    id: "g-struct-293",
    word: "hanım",
    translation: "Zonjë / grua",
    pos: "emër",
    notes: "Përdoret si titull respekti për femrat ose për të treguar bashkëshorten."
  },
  {
    id: "g-struct-294",
    word: "lise",
    translation: "Shkollë e mesme",
    pos: "emër",
    notes: "Institucion arsimor pas shkollës fillore."
  },
  {
    id: "g-struct-295",
    word: "piknik",
    translation: "Piknik",
    pos: "emër",
    notes: "Ngrënie dhe argëtim në natyrë."
  },
  {
    id: "g-struct-296",
    word: "balkon",
    translation: "Ballkon",
    pos: "emër",
    notes: "Pjesë e jashtme e hapur e një ndërtese."
  },
  {
    id: "g-struct-297",
    word: "mahalle",
    translation: "Lagje",
    pos: "emër",
    is_balkan: true,
    notes: "Ndarje territoriale e një qyteti ose fshati."
  },
  {
    id: "g-struct-298",
    word: "hareketli",
    translation: "I gjallë / aktiv",
    pos: "mbiemër",
    notes: "Që ka shumë lëvizje ose aktivitet."
  },
  {
    id: "g-struct-299",
    word: "yan",
    translation: "Anë / pranë",
    pos: "emër",
    notes: "Pjesa anësore ose hapësira afër diçkaje."
  },
  {
    id: "g-struct-300",
    word: "fırın",
    translation: "Furrë / furrë buke",
    pos: "emër",
    is_balkan: true,
    notes: "Vendi ku piqet buka ose pajisje gatimi."
  },
  {
    id: "g-struct-301",
    word: "dışarı",
    translation: "Jashtë",
    pos: "ndajfolje",
    notes: "Hapësira jashtë një ndërtese ose vendi."
  },
  {
    id: "g-struct-302",
    word: "yiyoruz",
    translation: "Po hamë",
    pos: "folje",
    notes: "Veta e parë shumës e foljes 'yemek' në kohën e tashme."
  },
  {
    id: "g-struct-303",
    word: "yiyorlar",
    translation: "Po hanë",
    pos: "folje",
    notes: "Veta e tretë shumës e foljes 'yemek' në kohën e tashme."
  },
  {
    id: "g-struct-304",
    word: "yarın",
    translation: "Nesër",
    pos: "ndajfolje",
    notes: "Dita pas ditës së sotme."
  },
  {
    id: "g-struct-305",
    word: "Şikayet",
    translation: "Ankesë",
    pos: "emër",
    notes: "Shprehje e pakënaqësisë ose dhimbjes."
  },
  {
    id: "g-struct-306",
    word: "Halsiz",
    translation: "I pafuqishëm / pa fuqi",
    pos: "mbiemër",
    notes: "Ndjenja e lodhjes ose mungesës së energjisë."
  },
  {
    id: "g-struct-307",
    word: "Öksürmek",
    translation: "Të kollitesh",
    pos: "folje",
    notes: "Nxjerrja e ajrit me zhurmë nga mushkëritë."
  },
  {
    id: "g-struct-308",
    word: "Ölçmek",
    translation: "Të masësh",
    pos: "folje",
    notes: "Përcaktimi i madhësisë, peshës ose temperaturës."
  },
  {
    id: "g-struct-309",
    word: "Boğaz",
    translation: "Fyt / grykë",
    pos: "emër",
    notes: "Pjesa e brendshme e qafës."
  },
  {
    id: "g-struct-310",
    word: "Ciddi",
    translation: "Serioz",
    pos: "mbiemër",
    notes: "Që ka rëndësi; jo shaka."
  },
  {
    id: "g-struct-311",
    word: "Bey",
    translation: "Zotëri / zoti",
    pos: "emër",
    notes: "Titull mirësjelljeje që vendoset pas emrit të meshkujve."
  },
  {
    id: "g-struct-312",
    word: "Kullanmak",
    translation: "Të përdorësh / të ngasësh",
    pos: "folje",
    notes: "Vënia në punë e një mjeti ose zbatimi i një metode."
  },
  {
    id: "g-struct-313",
    word: "Kesici",
    translation: "Prerës / ndalues",
    pos: "mbiemër",
    notes: "Përdoret në 'ağrı kesici' (kundërdhembje / analgjezik)."
  },
  {
    id: "g-struct-314",
    word: "Defa",
    translation: "Herë / radhë",
    pos: "emër",
    notes: "Përsëritja e një veprimi."
  },
  {
    id: "g-struct-315",
    word: "Tok",
    translation: "I ngopur",
    pos: "mbiemër",
    notes: "Që nuk ka uri; barku i plotë."
  },
  {
    id: "g-struct-316",
    word: "Rica",
    translation: "Lutje",
    pos: "emër",
    notes: "Kërkesë e sjellshme (p.sh. 'Rica ederim' - Ju lutem / s'ka përse)."
  },
  {
    id: "g-struct-317",
    word: "Tekrar",
    translation: "Përsëri / sërish",
    pos: "ndajfolje",
    notes: "Edhe një herë tjetër."
  },
  {
    id: "g-struct-318",
    word: "Beyefendi",
    translation: "Zotëri",
    pos: "emër",
    notes: "Mënyrë shumë e sjellshme për t'iu drejtuar një mashkulli."
  },
  {
    id: "g-struct-319",
    word: "Gecelik",
    translation: "Për natë / nate",
    pos: "mbiemër",
    notes: "Që lidhet me natën ose koston për një natë."
  },
  {
    id: "g-struct-320",
    word: "Kontrol",
    translation: "Kontroll / verifikim",
    pos: "emër",
    notes: "Mbikëqyrja ose verifikimi i diçkaje."
  },
  {
    id: "g-struct-321",
    word: "Kişilik",
    translation: "Për persona",
    pos: "mbiemër",
    notes: "Që i përshtatet një numri të caktuar njerëzish (p.sh. tek kişilik = për një person)."
  },
  {
    id: "g-struct-322",
    word: "Kimlik",
    translation: "Letërnjoftim / ID / identitet",
    pos: "emër",
    notes: "Dokument zyrtar që vërteton identitetin e një personi."
  },
  {
    id: "g-struct-323",
    word: "Kat",
    translation: "Kat",
    pos: "emër",
    notes: "Ndarje horizontale e një ndërtese."
  },
  {
    id: "g-struct-324",
    word: "Servis",
    translation: "Shërbim / servis",
    pos: "emër",
    notes: "Shërbimi i ushqimit, pijeve ose transportit."
  },
  {
    id: "g-struct-325",
    word: "Ücretsiz",
    translation: "Pa pagesë / falas",
    pos: "mbiemër",
    notes: "Që nuk kushton para."
  },
  {
    id: "g-struct-326",
    word: "Kağıt",
    translation: "Letër",
    pos: "emër",
    is_balkan: true,
    notes: "Material i hollë mbi të cilin shkruhet."
  },
  {
    id: "g-struct-327",
    word: "Anahtar",
    translation: "Çelës",
    pos: "emër",
    is_balkan: true,
    notes: "Mjet për të hapur ose mbyllur bravën."
  },
  {
    id: "g-struct-328",
    word: "Dördüncü",
    translation: "I katërti",
    pos: "mbiemër",
    notes: "Numri rreshtor që vjen pas të tretit."
  },
  {
    id: "g-struct-329",
    word: "Numara",
    translation: "Numër",
    pos: "emër",
    is_balkan: true,
    notes: "Shenjë ose fjalë që tregon sasi ose radhë."
  },
  {
    id: "g-struct-330",
    word: "Yardımcı",
    translation: "Ndihmës / ndihmues",
    pos: "mbiemër",
    notes: "Që jep ndihmë ose shërben si asistent."
  },
  {
    id: "g-struct-331",
    word: "Masmavi",
    translation: "I kaltër i kulluar",
    pos: "mbiemër",
    notes: "Krejtësisht i kaltër (intensifikim i ngjyrës mavi)."
  },
  {
    id: "g-struct-332",
    word: "Yöre",
    translation: "Zonë / rajon",
    pos: "emër",
    notes: "Rrethinë ose zonë e caktuar gjeografike."
  },
  {
    id: "g-struct-333",
    word: "Tur",
    translation: "Xhiro / tur / udhëtim",
    pos: "emër",
    is_balkan: true,
    notes: "Udhëtim i shkurtër shëtitës."
  },
  {
    id: "g-struct-334",
    word: "Koy",
    translation: "Gjiri / gji detar",
    pos: "emër",
    notes: "Gji i vogël dhe i mbrojtur detar."
  },
  {
    id: "g-struct-335",
    word: "Enerjik",
    translation: "Energjik",
    pos: "mbiemër",
    notes: "Që ka shumë energji ose gjallëri."
  },
  {
    id: "g-struct-336",
    word: "Mezun",
    translation: "I diplomuar / mezun",
    pos: "mbiemër",
    notes: "Person që ka përfunduar studimet."
  },
  {
    id: "g-struct-337",
    word: "Kattaki",
    translation: "në katin",
    pos: "mbiemër",
    notes: "Që ndodhet në një kat të caktuar."
  },
  {
    id: "g-struct-338",
    word: "Yöresel",
    translation: "lokale / rajonale",
    pos: "mbiemër",
    notes: "Që i përket një yöre (zone/rajoni) të caktuar."
  },
  {
    id: "g-struct-339",
    word: "Günlük",
    translation: "E përditshme / e ditës / ditar",
    pos: "mbiemër",
    notes: "Që ka të bëjë me jetën e përditshme ose tarifën ditore."
  },
  {
    id: "g-struct-340",
    word: "Ekonomik",
    translation: "Ekonomik",
    pos: "mbiemër",
    notes: "Që kushton pak ose ka të bëjë me ekonominë."
  },
  {
    id: "g-struct-341",
    word: "Kiralamak",
    translation: "Marr ose jap me qira",
    pos: "folje",
    notes: "Veprimi i marrjes ose dhënies së diçkaje me qira."
  },
  {
    id: "g-struct-342",
    word: "Sigorta",
    translation: "Sigurim / siguracion",
    pos: "emër",
    notes: "Mbrojtje financiare ndaj rreziqeve."
  },
  {
    id: "g-struct-343",
    word: "Dahil",
    translation: "I përfshirë / duka përfshirë",
    pos: "mbiemër",
    notes: "Që është brenda ose pjesë e diçkaje."
  },
  {
    id: "g-struct-344",
    word: "Yıllık",
    translation: "Vjetor / -vjeçar",
    pos: "mbiemër",
    notes: "Që zgjat një vit ose lidhet me vjetërsinë."
  },
  {
    id: "g-struct-345",
    word: "Benzinli",
    translation: "Me benzinë",
    pos: "mbiemër",
    notes: "Mjet që funksionon me karburant benzinë."
  },
  {
    id: "g-struct-346",
    word: "Dizel",
    translation: "Dizel / naftë",
    pos: "emër",
    notes: "Karburant nafte ose motor dizel."
  },
  {
    id: "g-struct-347",
    word: "Manuel",
    translation: "Manual / me dorë",
    pos: "mbiemër",
    notes: "Që bëhet ose drejtohet me dorë."
  },
  {
    id: "g-struct-348",
    word: "Vitesli",
    translation: "Me ndërrues shpejtësie / me marsha",
    pos: "mbiemër",
    notes: "Mjet që ka ndërrues shpejtësie (vites)."
  },
  {
    id: "g-struct-349",
    word: "Depo",
    translation: "Depo / rezervuar",
    pos: "emër",
    notes: "Vendi ku ruhen mallrat ose karburanti."
  },
  {
    id: "g-struct-350",
    word: "Geri",
    translation: "Prapa / mbrapsht",
    pos: "ndajfolje",
    notes: "Në drejtim të kundërt ose prapa."
  },
  {
    id: "g-struct-351",
    word: "Ödeme",
    translation: "Pagesë",
    pos: "emër",
    notes: "Veprimi i dhënies së parave për diçka."
  },
  {
    id: "g-struct-352",
    word: "Kredi",
    translation: "Kredi / besim",
    pos: "emër",
    notes: "Sasi parash e marrë hua ose kredi bankare."
  },
  {
    id: "g-struct-353",
    word: "Göstermek",
    translation: "Tregoj / shfaq",
    pos: "folje",
    notes: "Bëj të dukshme diçka për të tjerët."
  },
  {
    id: "g-struct-354",
    word: "Teslim",
    translation: "Dorëzim / teslim",
    pos: "emër",
    notes: "Veprimi i dhënies së diçkaje në duart e tjetrit."
  },
  {
    id: "g-struct-355",
    word: "Otopark",
    translation: "Otopark / vendparkim",
    pos: "emër",
    notes: "Hapësirë e rezervuar për parkimin e makinave."
  },
  {
    id: "g-struct-356",
    word: "Garson",
    translation: "Kamarier",
    pos: "emër",
    notes: "Shërbyes në restorant ose kafene."
  },
  {
    id: "g-struct-357",
    word: "Maalesef",
    translation: "Fatkeqësisht",
    pos: "ndajfolje",
    notes: "Për fat të keq."
  },
  {
    id: "g-struct-358",
    word: "Özür",
    translation: "Ndjesë / kërkim falje / defekt",
    pos: "emër",
    notes: "Kërkesë për falje pas një gabimi."
  },
  {
    id: "g-struct-359",
    word: "İletmek",
    translation: "Përcjell / dërgoj / transmetoj",
    pos: "folje",
    notes: "Kaloj një mesazh ose gjë te dikush tjetër."
  },
  {
    id: "g-struct-360",
    word: "Yiyelim",
    translation: "Le të hamë",
    pos: "folje",
    notes: "Forma e dëshirore/urdhërore e vetës së parë shumës të foljes yemek (të hamë)."
  },
  {
    id: "g-struct-361",
    word: "Müessese",
    translation: "Institucion / lokal / ndërmarrje",
    pos: "emër",
    notes: "Ndërmarrje, firmë ose lokal tregtar."
  },
  {
    id: "g-struct-362",
    word: "Naziklik",
    translation: "Mirësjellje / mirësi / nazikllëk",
    pos: "emër",
    notes: "Cilësia e të qenit i sjellshëm ose i kujdesshëm."
  },
  {
    id: "g-struct-363",
    word: "Uçmak",
    translation: "Fluturoj",
    pos: "folje",
    notes: "Lëviz nëpër ajër si shpendët ose aeroplanët."
  },
  {
    id: "g-struct-364",
    word: "Yorucu",
    translation: "I lodhshëm",
    pos: "mbiemër",
    notes: "Që të lodh ose kërkon shumë sforcim."
  },
  {
    id: "g-struct-365",
    word: "Video",
    translation: "Video",
    pos: "emër",
    notes: "Regjistrim pamjesh të lëvizshme."
  },
  {
    id: "g-struct-366",
    word: "Kısa",
    translation: "I shkurtër",
    pos: "mbiemër",
    notes: "Që ka gjatësi ose kohëzgjatje të vogël."
  },
  {
    id: "g-struct-367",
    word: "Banka",
    translation: "Bankë",
    pos: "emër",
    notes: "Institucion financiar ku depozitohen dhe huazohen para."
  },
  {
    id: "g-struct-368",
    word: "Avro",
    translation: "Euro",
    pos: "emër",
    notes: "Valuta zyrtare e Bashkimit Evropian."
  },
  {
    id: "g-struct-369",
    word: "Vade",
    translation: "Afat / afat kohor",
    pos: "emër",
    notes: "Koha e caktuar për kryerjen e një detyrimi ose pagese."
  },
  {
    id: "g-struct-370",
    word: "Vadesiz",
    translation: "Pa afat / rrjedhëse (për llogarinë)",
    pos: "mbiemër",
    notes: "Llogari bankare nga e cila mund të tërhiqen para në çdo kohë."
  },
  {
    id: "g-struct-371",
    word: "Mevduat",
    translation: "Depozitë",
    pos: "emër",
    notes: "Para të vendosura në një llogari bankare."
  },
  {
    id: "g-struct-372",
    word: "Hesap",
    translation: "Llogari / llogaritje",
    pos: "emër",
    notes: "Regjistrim financiar ose veprim matematik."
  },
  {
    id: "g-struct-373",
    word: "İkametgah",
    translation: "Vendbanim / ikametgah",
    pos: "emër",
    notes: "Vendi ku banon ligjërisht një person."
  },
  {
    id: "g-struct-374",
    word: "Belge",
    translation: "Dokument / dëshmi",
    pos: "emër",
    notes: "Shkresë zyrtare që vërteton diçka."
  },
  {
    id: "g-struct-375",
    word: "Üzeri",
    translation: "Sipërfaqe / pjesa e sipërme / mbi",
    pos: "emër",
    notes: "Pjesa e sipërme e diçkaje."
  },
  {
    id: "g-struct-376",
    word: "Bireysel",
    translation: "Individual / personal",
    pos: "mbiemër",
    notes: "Që i përket një personi të vetëm."
  },
  {
    id: "g-struct-377",
    word: "Kesmek",
    translation: "Pres / ndal / ndërpres",
    pos: "folje",
    notes: "Ndarja e diçkaje me një mjet të mprehtë ose ndalimi i një pagese."
  },
  {
    id: "g-struct-378",
    word: "Mobil",
    translation: "Celular / mobil / lëvizës",
    pos: "mbiemër",
    notes: "Që lëviz ose lidhet me telefonat celularë."
  },
  {
    id: "g-struct-379",
    word: "Bankacılık",
    translation: "Veprimtari bankare / bankim",
    pos: "emër",
    notes: "Profesioni ose veprimtaria që lidhet med bankat."
  },
  {
    id: "g-struct-380",
    word: "EFT",
    translation: "EFT (transfertë ndërbankare)",
    pos: "emër",
    notes: "Transfertë elektronike e fondeve midis bankave të ndryshme."
  },
  {
    id: "g-struct-381",
    word: "Talep",
    translation: "Kërkesë / kërkesë tregtare",
    pos: "emër",
    notes: "Dëshira ose kërkesa zyrtare për diçka."
  },
  {
    id: "g-struct-382",
    word: "Sistem",
    translation: "Sistem",
    pos: "emër",
    notes: "Tërësi elementesh të lidhura organikisht mes vete."
  },
  {
    id: "g-struct-383",
    word: "Geçici",
    translation: "I përkohshëm",
    pos: "mbiemër",
    notes: "Që zgjat për një kohë të shkurtër."
  },
  {
    id: "g-struct-384",
    word: "Göndermek",
    translation: "Dërgoj",
    pos: "folje",
    notes: "Veprimi i nisjes së diçkaje drejt një destinacioni."
  },
  {
    id: "g-struct-385",
    word: "Giriş",
    translation: "Hyrje / hyrja",
    pos: "emër",
    notes: "Vendi ose veprimi i hyrjes në një ndërtesë ose sistem."
  },
  {
    id: "g-struct-386",
    word: "Yardım",
    translation: "Ndihmë",
    pos: "emër",
    notes: "Mbështetje ose asistencë e dhënë dikujt."
  },
  {
    id: "g-struct-387",
    word: "Oldukça",
    translation: "Mjaft / relativisht",
    pos: "ndajfolje",
    notes: "Përdoret për të treguar një shkallë të lartë."
  },
  {
    id: "g-struct-388",
    word: "Yenilikçi",
    translation: "Inovativ / novator",
    pos: "mbiemër",
    notes: "Që sjell risi ose ide të reja."
  },
  {
    id: "g-struct-389",
    word: "Web",
    translation: "Ueb / rrjet",
    pos: "emër",
    notes: "Rrjeti botëror i informacionit."
  },
  {
    id: "g-struct-390",
    word: "Teknik",
    translation: "Teknik",
    pos: "mbiemër",
    notes: "Që lidhet me shkencën e zbatuar ose metodat e punës."
  },
  {
    id: "g-struct-391",
    word: "Bahsetmek",
    translation: "Flas / përmend / bëj fjalë",
    pos: "folje",
    notes: "Të flasësh rreth një teme ose personi."
  },
  {
    id: "g-struct-392",
    word: "Sorumlu",
    translation: "Përgjegjës",
    pos: "mbiemër",
    notes: "Personi që mban përgjegjësi për diçka."
  },
  {
    id: "g-struct-393",
    word: "Stres",
    translation: "Stres",
    pos: "emër",
    notes: "Gjendje tensioni nervor ose psikologjik."
  },
  {
    id: "g-struct-394",
    word: "Birlik",
    translation: "Bashkim / unitet / bashkëpunim",
    pos: "emër",
    notes: "Gjendja e të qenit të bashkuar."
  },
  {
    id: "g-struct-395",
    word: "Katkı",
    translation: "Kontribut / shtesë",
    pos: "emër",
    notes: "Ndihma ose pjesa që jepet për të arritur një qëllim."
  },
  {
    id: "g-struct-396",
    word: "Stresli",
    translation: "I stresuar / stresues",
    pos: "mbiemër",
    notes: "Që shkakton ose ndjen stres."
  },
  {
    id: "g-struct-397",
    word: "Sıra",
    translation: "Radhë / bangë / radha",
    pos: "emër",
    notes: "Rresht i rregullt ose bankë shkollore."
  },
  {
    id: "g-struct-398",
    word: "Bölmek",
    translation: "Ndaj / pjesëtoj / copëtoj",
    pos: "folje",
    notes: "Ndarja e një tërësie në disa pjesë."
  },
  {
    id: "g-struct-399",
    word: "Ekip",
    translation: "Ekip / skuadër",
    pos: "emër",
    notes: "Grup njerëzish që punojnë së bashku."
  },
  {
    id: "g-struct-400",
    word: "Çözmek",
    translation: "Zgjidh",
    pos: "folje",
    notes: "Gjetja e përgjigjes për një problem ose nyjë."
  },
  {
    id: "g-struct-401",
    word: "Model",
    translation: "Model",
    pos: "emër",
    notes: "Shembull për t'u ndjekur ose model pune."
  },
  {
    id: "g-struct-402",
    word: "Hibrit",
    translation: "Hibrit",
    pos: "mbiemër",
    notes: "Përzierje e dy elementeve të ndryshme (p.sh. punë nga shtëpia dhe nga zyra)."
  },
  {
    id: "g-struct-403",
    word: "Uygun",
    translation: "I përshtatshëm / i harmonishëm",
    pos: "mbiemër",
    notes: "Që i përshtatet rrethanave ose kushteve."
  },
  {
    id: "g-struct-404",
    word: "Bitmek",
    translation: "Mbaroj / përfundoj",
    pos: "folje",
    notes: "Arritja në fund të një procesi ose pune."
  },
  {
    id: "g-struct-405",
    word: "Nitelik",
    translation: "Cilësi / kualifikim / veçori",
    pos: "emër",
    notes: "Karakteristikë ose aftësi e një personi ose gjëje."
  },
  {
    id: "g-struct-406",
    word: "Dönüş",
    translation: "Kthim / kthim përgjigje",
    pos: "emër",
    notes: "Veprimi i kthimit prapa ose përgjigjja e një mesazhi."
  },
  {
    id: "g-struct-407",
    word: "Daire",
    translation: "Banesë / apartament / rreth",
    pos: "emër",
    notes: "Njësi banimi në një ndërtesë shumëkatëshe."
  },
  {
    id: "g-struct-408",
    word: "Satılık",
    translation: "Në shitje / për shitje",
    pos: "mbiemër",
    notes: "Gjë që ofrohet për t'u blerë me para."
  },
  {
    id: "g-struct-409",
    word: "Tam",
    translation: "I plotë / plotësisht / saktësisht",
    pos: "mbiemër",
    notes: "Pa asnjë mungesë ose pikërisht."
  },
  {
    id: "g-struct-410",
    word: "Mesafe",
    translation: "Distancë / largësi",
    pos: "emër",
    notes: "Hapësira midis du pikave."
  },
  {
    id: "g-struct-411",
    word: "Doğalgaz",
    translation: "Gaz natyror",
    pos: "emër",
    notes: "Lëndë djegëse e gaztë natyrore."
  },
  {
    id: "g-struct-412",
    word: "Doğalgazlı",
    translation: "Me gaz natyror",
    pos: "mbiemër",
    notes: "Banesë që përdor gazin natyror për ngrohje."
  },
  {
    id: "g-struct-413",
    word: "Kombi",
    translation: "Kombi / ngrohje qendrore",
    pos: "emër",
    notes: "Pajisje individuale për ngrohjen e ujit dhe banesës."
  },
  {
    id: "g-struct-414",
    word: "Kombili",
    translation: "Me ngrohje qendrore individuale",
    pos: "mbiemër",
    notes: "Që ka të instaluar pajisjen kombi."
  },
  {
    id: "g-struct-415",
    word: "Asansör",
    translation: "Ashensor",
    pos: "emër",
    notes: "Mjet për ngjitjen dhe zbritjen e njerëzve në kate."
  },
  {
    id: "g-struct-416",
    word: "Aidat",
    translation: "Pagesë mirëmbajtjeje / kuotë",
    pos: "emër",
    notes: "Pagesë mujore e detyrueshme për shërbimet e përbashkëta të pallatit."
  },
  {
    id: "g-struct-417",
    word: "Bedel",
    translation: "Kosto / vlerë / çmim",
    pos: "emër",
    notes: "Vlera në para e diçkaje."
  },
  {
    id: "g-struct-418",
    word: "Mevcut",
    translation: "I pranishëm / ekzistues",
    pos: "mbiemër",
    notes: "Që ndodhet ose gjendet në një vend."
  },
  {
    id: "g-struct-419",
    word: "Sahip",
    translation: "Pronar / zotërues",
    pos: "emër",
    notes: "Personi që zotëron diçka."
  },
  {
    id: "g-struct-420",
    word: "Kontrat",
    translation: "Kontratë",
    pos: "emër",
    notes: "Marrëveshje me shkrim midis dy palëve."
  },
  {
    id: "g-struct-421",
    word: "Kira",
    translation: "Qira",
    pos: "emër",
    notes: "Pagesa për përdorimin e përkohshëm të një prone."
  },
  {
    id: "g-struct-422",
    word: "Standart",
    translation: "Standard",
    pos: "mbiemër",
    notes: "Që ndedh një rregull ose normë të caktuar."
  },
  {
    id: "g-struct-423",
    word: "Artış",
    translation: "Rritje",
    pos: "emër",
    notes: "Shtimi në sasi, madhësi ose vlerë."
  },
  {
    id: "g-struct-424",
    word: "Makul",
    translation: "I arsyeshëm",
    pos: "mbiemër",
    notes: "Që pranohet nga arsyeja, i përshtatshëm."
  },
  {
    id: "g-struct-425",
    word: "Kiracı",
    translation: "Qiramarrës",
    pos: "emër",
    notes: "Personi që merr një pronë me qira."
  },
  {
    id: "g-struct-426",
    word: "Dizüstü",
    translation: "Laptop / dizüstü",
    pos: "mbiemër",
    notes: "Kompjuter i vogël portativ."
  },
  {
    id: "g-struct-427",
    word: "Isınmak",
    translation: "Ngrohem / nxehem",
    pos: "folje",
    notes: "Rritja e temperaturës së diçkaje."
  },
  {
    id: "g-struct-428",
    word: "Kapanmak",
    translation: "Mbyllem / fikem",
    pos: "folje",
    notes: "Ndërprerja e funksionimit ose mbyllja."
  },
  {
    id: "g-struct-429",
    word: "Çizgi",
    translation: "Vijë / vizë",
    pos: "emër",
    notes: "Gjurmë e hollë dhe e gjatë në një sipërfaqe."
  },
  {
    id: "g-struct-430",
    word: "Fan",
    translation: "Ventilator / fan",
    pos: "emër",
    notes: "Pajisje që rrotullohet për të krijuar rrymë ajri."
  },
  {
    id: "g-struct-431",
    word: "Tıkanıklık",
    translation: "Bllokim",
    pos: "emër",
    notes: "Gjendje e bllokuar e një tubi ose rruge ajri."
  },
  {
    id: "g-struct-432",
    word: "Termal",
    translation: "Termal",
    pos: "mbiemër",
    notes: "Që ka të bëjë me nxehtësinë."
  },
  {
    id: "g-struct-433",
    word: "Macun",
    translation: "Pastë / mastikë",
    pos: "emër",
    notes: "Përbërje e butë dhe ngjitëse."
  },
  {
    id: "g-struct-434",
    word: "Cihaz",
    translation: "Pajisje / aparat / cihaz",
    pos: "emër",
    notes: "Mjet teknik i ndërtuar për një qëllim të caktuar."
  },
  {
    id: "g-struct-435",
    word: "Kapsam",
    translation: "Shtrirje / fushëveprim / kornizë",
    pos: "emër",
    notes: "Kufijtë brenda të cilëve shtrihet diçka."
  },
  {
    id: "g-struct-436",
    word: "Sıvı",
    translation: "Lëng / i lëngshëm",
    pos: "emër",
    notes: "Gjendje e lëndës që rrjedh dhe merr formën e enës."
  },
  {
    id: "g-struct-437",
    word: "Düşme",
    translation: "Rënie / rrëzim",
    pos: "emër",
    notes: "Lëvizje e shpejtë nga lart poshtë."
  },
  {
    id: "g-struct-438",
    word: "Hasar",
    translation: "Dëm / dëmtim",
    pos: "emër",
    notes: "Humbje ose dëmtim material."
  },
  {
    id: "g-struct-439",
    word: "Düşürmek",
    translation: "Rrëzoj / lëshoj / rrëzoj poshtë",
    pos: "folje",
    notes: "Bëj që diçka të bjerë nga lart."
  },
  {
    id: "g-struct-440",
    word: "Dökülmek",
    translation: "Derdhem / më derdhet",
    pos: "folje",
    notes: "Rrjedhja e një lëngu ose rënia e shumë gjërave."
  },
  {
    id: "g-struct-441",
    word: "Tespit",
    translation: "Përcaktim / identifikim / konstatim",
    pos: "emër",
    notes: "Gjetja ose konstatimi i saktë i diçkaje."
  },
  {
    id: "g-struct-442",
    word: "Yedek",
    translation: "Rezervë / backup",
    pos: "mbiemër",
    notes: "Që mbahet për raste nevoje ose si kopje."
  },
  {
    id: "g-struct-443",
    word: "Parça",
    translation: "Pjesë / copë",
    pos: "emër",
    notes: "Një nga elementet që përbëjnë një tërësi."
  },
  {
    id: "g-struct-444",
    word: "Disk",
    translation: "Disk",
    pos: "emër",
    notes: "Pllakë e rrumbullakët për ruajtjen e të dhënave."
  },
  {
    id: "g-struct-445",
    word: "Form",
    translation: "Formular / formë",
    notes: "Fletë me rubrika që duhen plotësuar.",
    pos: "emër"
  },
  {
    id: "g-struct-446",
    word: "Ajans",
    translation: "Agjenci",
    pos: "emër",
    notes: "Ndërmarrje që kryen shërbime të caktuara."
  },
  {
    id: "g-struct-447",
    word: "Finansal",
    translation: "Financiar",
    pos: "mbiemër",
    notes: "Që ka të bëjë me financat ose paratë."
  },
  {
    id: "g-struct-448",
    word: "Risk",
    translation: "Rrezik",
    pos: "emër",
    notes: "Mundësia e një humbjeje ose dëmi."
  },
  {
    id: "g-struct-449",
    word: "Şok",
    translation: "Shok / tronditje",
    pos: "emër",
    notes: "Tronditje e fortë emocionale ose fizike."
  },
  {
    id: "g-struct-450",
    word: "Bariyer",
    translation: "Barrierë / pengesë",
    pos: "emër",
    notes: "Pengesë që bllokon kalimin."
  },
  {
    id: "g-struct-451",
    word: "İnanılmaz",
    translation: "I pabesueshëm / i jashtëzakonshëm",
    pos: "mbiemër",
    notes: "Që është shumë i vështirë për t'u besuar."
  },
  {
    id: "g-struct-452",
    word: "Misafirperverlik",
    translation: "Mikpritje",
    pos: "emër",
    notes: "Sellers e mirë dhe bujare ndaj mysafirëve."
  },
  {
    id: "g-struct-453",
    word: "Sayesinde",
    translation: "Falë / me ndihmën e",
    pos: "ndajfolje",
    notes: "Përdoret për të treguar ndikimin pozitiv të dikujt/diçkaje."
  },
  {
    id: "g-struct-454",
    word: "Yavaş",
    translation: "Ngadalë / i ngadaltë",
    pos: "mbiemër",
    notes: "Që nuk lëviz shpejt."
  },
  {
    id: "g-struct-455",
    word: "Yerel",
    translation: "Lokal / vendor",
    pos: "mbiemër",
    notes: "Që i përket një vendi ose zone të caktuar."
  },
  {
    id: "g-struct-456",
    word: "Hazine",
    translation: "Thesar / hazine",
    pos: "emër",
    notes: "Grumbull gjërash me vlerë të madhe."
  },
  {
    id: "g-struct-457",
    word: "Hal",
    translation: "Gjendje / rast / rrethanë",
    pos: "emër",
    notes: "Situata ose gjendja në të cilën ndodhet dikush."
  },
  {
    id: "g-struct-458",
    word: "Hareketsiz",
    translation: "Pa lëvizje / pasiv / sedentar",
    pos: "mbiemër",
    notes: "Që nuk lëviz ose bën pak aktivitet fizik."
  },
  {
    id: "g-struct-459",
    word: "Tarz",
    translation: "Stil / mënyrë / tarz",
    pos: "emër",
    notes: "Mënyra e të vepruarit ose të veshurit."
  },
  {
    id: "g-struct-460",
    word: "Beslenme",
    translation: "Ushqyerje / ushqim / dietë",
    pos: "emër",
    notes: "Marrja e lëndëve ushqyese për trupin."
  },
  {
    id: "g-struct-461",
    word: "Organik",
    translation: "Organik",
    pos: "mbiemër",
    notes: "Që prodhohet në mënyrë natyrale, pa kimikate."
  },
  {
    id: "g-struct-462",
    word: "Gıda",
    translation: "Ushqim / artikull ushqimor",
    pos: "emër",
    notes: "Çdo lëndë që shërben si ushqim."
  },
  {
    id: "g-struct-463",
    word: "Azaltmak",
    translation: "Reduktoj / pakësoj",
    pos: "folje",
    notes: "Zvogëlimi i sasisë ose shkallës së diçkaje."
  },
  {
    id: "g-struct-464",
    word: "Birkaç",
    translation: "Pak / disa",
    pos: "mbiemër",
    notes: "Një numër i vogël dhe i pacaktuar."
  },
  {
    id: "g-struct-465",
    word: "Zihinsel",
    translation: "Mendor",
    pos: "mbiemër",
    notes: "Që lidhet me mendjen ose trurin."
  },
  {
    id: "g-struct-466",
    word: "Odaklanma",
    translation: "Përqendrim / fokusim",
    pos: "emër",
    notes: "Drejtimi i gjithë vëmendjes te një pikë."
  },
  {
    id: "g-struct-467",
    word: "Yükselmek",
    translation: "Ngrihem / rritem / ngjitem",
    pos: "folje",
    notes: "Lëvizja drejt një niveli më të lartë."
  },
  {
    id: "g-struct-468",
    word: "Üye",
    translation: "Anëtar",
    pos: "emër",
    notes: "Person që bën pjesë në një grup ose shoqëri."
  },
  {
    id: "g-struct-469",
    word: "Antrenman",
    translation: "Stërvitje / ushtrim",
    pos: "emër",
    notes: "Stërvitje fizike ose sportive."
  },
  {
    id: "g-struct-470",
    word: "Aylık",
    translation: "Mujor / rrogë mujore",
    pos: "mbiemër",
    notes: "Që përsëritet ose paguhet çdo muaj."
  },
  {
    id: "g-struct-471",
    word: "Bilinç",
    translation: "Ndërgjegje / vetëdije",
    pos: "emër",
    notes: "Aftësia për të kuptuar mjedisin dhe veten."
  },
  {
    id: "g-struct-472",
    word: "Amaç",
    translation: "Qëllim / synim",
    pos: "emër",
    notes: "Objektivi që synohet të arrihet."
  },
  {
    id: "g-struct-473",
    word: "Ekolojik",
    translation: "Ekologjik",
    pos: "mbiemër",
    notes: "Që lidhet me mjedisin dhe ekologjinë."
  },
  {
    id: "g-struct-474",
    word: "Toplamak",
    translation: "Mbledh / grumbulloj / pastroj",
    pos: "folje",
    notes: "Veprimi i mbledhjes së gjërave në një vend."
  },
  {
    id: "g-struct-475",
    word: "Dönüşüm",
    translation: "Transformim / kthim / dönüşüm",
    pos: "emër",
    notes: "Ndryshimi i formës ose gjendjes së diçkaje."
  },
  {
    id: "g-struct-476",
    word: "Arazi",
    translation: "Tokë / truall / terren",
    pos: "emër",
    notes: "Sipërfaqe toke e zbrazët ose e punueshme."
  },
  {
    id: "g-struct-477",
    word: "Fidan",
    translation: "Fidan / pemë e re",
    pos: "emër",
    notes: "Pemë e vogël dhe e re gati për t'u mbjellë."
  },
  {
    id: "g-struct-478",
    word: "Dikmek",
    translation: "Mbjell / qep",
    pos: "folje",
    notes: "Veprimi i vendosjes së fidanit në tokë ose i qepjes së rrobave."
  },
  {
    id: "g-struct-479",
    word: "Plastik",
    translation: "Plastikë / plastik",
    pos: "emër",
    notes: "Material sintetik i përdorur gjerësisht."
  },
  {
    id: "g-struct-480",
    word: "Düzenlemek",
    translation: "Organizoj / rregulloj",
    pos: "folje",
    notes: "Veprimi i vënies në rregull ose organizimit të një aktiviteti."
  },
  {
    id: "g-struct-481",
    word: "Psikoloji",
    translation: "Psikologji",
    pos: "emër",
    notes: "Huazim nga frëngjishtja."
  },
  {
    id: "g-struct-482",
    word: "Zekâ",
    translation: "Inteligjencë / zotësi / mençuri",
    pos: "emër",
    notes: "Arapça kökenli."
  },
  {
    id: "g-struct-483",
    word: "Renk",
    translation: "Ngjyrë",
    pos: "emër",
    notes: "Farsça kökenli."
  },
  {
    id: "g-struct-484",
    word: "Atış",
    translation: "Rrahje (p.sh. e zemrës) / hedhje",
    pos: "emër",
    notes: "Atmak fiilinden türetilmiştir."
  },
  {
    id: "g-struct-485",
    word: "Hareket",
    translation: "Lëvizje / veprim / sjellje",
    pos: "emër",
    notes: "Arapça kökenli."
  },
  {
    id: "g-struct-486",
    word: "Oysaki",
    translation: "ndërsa / kurse / ndërkohë që",
    pos: "lidhëz",
    notes: "Karşıtlık bağlacı."
  },
  {
    id: "g-struct-487",
    word: "Estetik",
    translation: "Estetik / i bukur",
    pos: "mbiemër",
    notes: "Fransızca kökenli."
  },
  {
    id: "g-struct-488",
    word: "Motivasyon",
    translation: "Motivim",
    pos: "emër",
    notes: "Fransızca kökenli."
  },
  {
    id: "g-struct-489",
    word: "Neşe",
    translation: "Gëzim / hare",
    pos: "emër",
    notes: "Arapça kökenli."
  },
  {
    id: "g-struct-490",
    word: "Aksine",
    translation: "përkundrazi / në të kundërt",
    pos: "lidhëz",
    notes: "Karşıtlık bağlacı."
  },
  {
    id: "g-struct-491",
    word: "Gri",
    translation: "Gri / e hirtë",
    pos: "mbiemër",
    notes: "Fransızca kökenli."
  },
  {
    id: "g-struct-492",
    word: "Ön",
    translation: "Para / përpara / ballë",
    pos: "emër",
    notes: "Arka kelimesinin zıttı."
  },
  {
    id: "g-struct-493",
    word: "Duygu",
    translation: "Ndjenjë / emocion",
    pos: "emër",
    notes: "Duymak fiilinden türetilmiştir."
  },
  {
    id: "g-struct-494",
    word: "Kasaba",
    translation: "Qytezë / kasaba",
    pos: "emër",
    notes: "Arapça kökenli."
  },
  {
    id: "g-struct-495",
    word: "Sallanmak",
    translation: "Lëkundem / sallanem",
    pos: "folje",
    notes: "Sallamak fiilinin edilgen/dönüşlü şekli."
  },
  {
    id: "g-struct-496",
    word: "Batmak",
    translation: "Perëndoj / zhytem / mbytet",
    pos: "folje",
    notes: "Güneşin batması veya bir şeyin suya gömülmesi."
  },
  {
    id: "g-struct-497",
    word: "Tarifsiz",
    translation: "I papërshkrueshëm",
    pos: "mbiemër",
    notes: "Tarif (përshkrim) + siz (pa)."
  },
  {
    id: "g-struct-498",
    word: "İhtiyar",
    translation: "I moshuar / plak",
    pos: "mbiemër",
    notes: "Yaşlı kimse."
  },
  {
    id: "g-struct-499",
    word: "Ezber",
    translation: "Përmendësh / ezber",
    pos: "ndajfolje",
    notes: "Arapça kökenli."
  },
  {
    id: "g-struct-500",
    word: "Deyiş",
    translation: "Thënie / shprehje",
    pos: "emër",
    notes: "Demek fiilinden türetilmiştir."
  },
  {
    id: "g-struct-501",
    word: "Dalga",
    translation: "Valë / dallgë",
    pos: "emër",
    notes: "Deniz dalgası."
  },
  {
    id: "g-struct-502",
    word: "Sert",
    translation: "I fortë / i ashpër / i rreptë",
    pos: "mbiemër",
    notes: "Farsça kökenli."
  },
  {
    id: "g-struct-503",
    word: "Esmek",
    translation: "Fryn (era)",
    pos: "folje",
    notes: "Rüzgarın esmesi."
  },
  {
    id: "g-struct-504",
    word: "Fener",
    translation: "Far / fener",
    pos: "emër",
    notes: "Rumca kökenli."
  },
  {
    id: "g-struct-505",
    word: "Işık",
    translation: "Dritë",
    pos: "emër",
    notes: "Işımak fiilinden türetilmiştir."
  },
  {
    id: "g-struct-506",
    word: "Nitekim",
    translation: "siç u tha / kështu / vërtet",
    pos: "lidhëz",
    notes: "Açıklama bağlacı."
  },
  {
    id: "g-struct-507",
    word: "Öpmek",
    translation: "Puth",
    pos: "folje",
    notes: "Sevgi veya saygı gösterisi."
  },
  {
    id: "g-struct-508",
    word: "Öpülmek",
    translation: "Puthem / të puthet",
    pos: "folje",
    notes: "Öpmek fiilinin edilgen şekli."
  },
  {
    id: "g-struct-509",
    word: "Biçim",
    translation: "Formë / mënyrë / stil",
    pos: "emër",
    notes: "Biçmek fiilinden türetilmiştir."
  },
  {
    id: "g-struct-510",
    word: "Kaybolmak",
    translation: "Zhdukem / humbas",
    pos: "folje",
    notes: "Kayıp + olmak."
  },
  {
    id: "g-struct-511",
    word: "Akıl",
    translation: "Mendje / intelekt",
    pos: "emër",
    notes: "Arapça kökenli."
  },
  {
    id: "g-struct-512",
    word: "Koku",
    translation: "Aromë / erë / koku",
    pos: "emër",
    notes: "Kokmak fiilinden türetilmiştir."
  },
  {
    id: "g-struct-513",
    word: "Zeka",
    translation: "Inteligjencë / zotësi / mençuri",
    pos: "emër",
    notes: "Circumflex-free spelling variant."
  },
  {
    id: "g-struct-514",
    word: "gibiydi",
    translation: "ishte si / ngjante si",
    pos: "shprehje",
    notes: "Gibi (si) + idi (ishte)."
  },
  {
    id: "g-struct-515",
    word: "Aslında",
    translation: "në fakt / realisht",
    pos: "lidhëz",
    notes: "Vurgu bağlacı."
  },
  {
    id: "g-struct-516",
    word: "Özellikle",
    translation: "veçanërisht",
    pos: "lidhëz",
    notes: "Vurgu bağlacı."
  },
  {
    id: "g-struct-517",
    word: "Doğrusu",
    translation: "të them të drejtën / sinqerisht",
    pos: "lidhëz",
    notes: "Vurgu bağlacı."
  },
  {
    id: "g-struct-518",
    word: "Gerçekleşmek",
    translation: "ndodh / realizohet",
    pos: "folje",
    notes: "Gerçek kelimesinden türetilmiştir."
  },
  {
    id: "g-struct-519",
    word: "İmkan",
    translation: "mundësia / shansi",
    pos: "emër",
    notes: "Arapça kökenli."
  },
  {
    id: "g-struct-520",
    word: "Terk",
    translation: "braktisje / terk",
    pos: "emër",
    notes: "Terk etmek birleşik fiilinin ilk öğesi."
  },
  {
    id: "g-struct-521",
    word: "değildi",
    translation: "nuk ishte",
    pos: "shprehje",
    notes: "Değil + idi."
  },
  {
    id: "g-struct-522",
    word: "Düzey",
    translation: "niveli",
    pos: "emër",
    notes: "Düz kökünden türetilmiştir."
  },
  {
    id: "g-struct-523",
    word: "Sanayileşme",
    translation: "industrializimi",
    pos: "emër",
    notes: "Sanayileşmek fiilinden türetilmiştir."
  },
  {
    id: "g-struct-524",
    word: "Bölge",
    translation: "rajoni / zona",
    pos: "emër",
    notes: "Bölmek fiilinden türetilmiştir."
  },
  {
    id: "g-struct-525",
    word: "Dengesiz",
    translation: "i paekuilibruar / i pabarabartë",
    pos: "mbiemër",
    notes: "Denge + siz."
  },
  {
    id: "g-struct-526",
    word: "Sosyal",
    translation: "social / shoqëror",
    pos: "mbiemër",
    notes: "Fransızca kökenli."
  },
  {
    id: "g-struct-527",
    word: "Kent",
    translation: "qyteti",
    pos: "emër",
    notes: "Soğdca kökenli."
  },
  {
    id: "g-struct-528",
    word: "Bugünkü",
    translation: "i sotëm",
    pos: "mbiemër",
    notes: "Bugün + ki."
  },
  {
    id: "g-struct-529",
    word: "Dinamik",
    translation: "dinamik",
    pos: "mbiemër",
    notes: "Fransızca kökenli."
  },
  {
    id: "g-struct-530",
    word: "Kapsamak",
    translation: "përfshin / përmban",
    pos: "folje",
    notes: "Kapmak fiilinden türetilmiştir."
  },
  {
    id: "g-struct-531",
    word: "Dengeli",
    translation: "i ekuilibruar / i balancuar",
    pos: "mbiemër",
    notes: "Denge + li."
  },
  {
    id: "g-struct-532",
    word: "Tasarlanmak",
    translation: "projektohet / dizajnohet",
    pos: "folje",
    notes: "Tasarlamak fiilinin edilgen şekli."
  },
  {
    id: "g-struct-533",
    word: "Program",
    translation: "programi",
    pos: "emër",
    notes: "Fransızca kökenli."
  },
  {
    id: "g-struct-534",
    word: "Uluslararası",
    translation: "ndërkombëtar",
    pos: "mbiemër",
    notes: "Ulus + lar + arası."
  },
  {
    id: "g-struct-535",
    word: "Coğrafya",
    translation: "gjeografi",
    pos: "emër",
    notes: "Arapça kökenli."
  },
  {
    id: "g-struct-536",
    word: "Oluşmak",
    translation: "formohem / krijohem / lind",
    pos: "folje",
    notes: "Olmak fiilinden türetilmiştir."
  },
  {
    id: "g-struct-537",
    word: "Lider",
    translation: "udhëheqës / lider",
    pos: "emër",
    notes: "İngilizce kökenli."
  },
  {
    id: "g-struct-538",
    word: "Figür",
    translation: "figurë / personazh",
    pos: "emër",
    notes: "Fransızca kökenli."
  },
  {
    id: "g-struct-539",
    word: "Sami",
    translation: "Sami",
    pos: "emër",
    notes: "Özel isim."
  },
  {
    id: "g-struct-540",
    word: "Şemseddin",
    translation: "Shemsedin",
    pos: "emër",
    notes: "Özel isim."
  },
  {
    id: "g-struct-541",
    word: "Naim",
    translation: "Naim",
    pos: "emër",
    notes: "Özel isim."
  },
  {
    id: "g-struct-542",
    word: "Ansiklopedi",
    translation: "enciklopedi",
    pos: "emër",
    notes: "Fransızca kökenli."
  },
  {
    id: "g-struct-543",
    word: "Uyanış",
    translation: "zgjim / zgjim kulturor",
    pos: "emër",
    notes: "Uyanmak fiilinden türetilmiştir."
  },
  {
    id: "g-struct-544",
    word: "Mektup",
    translation: "letër / mesazh",
    pos: "emër",
    notes: "Arapça kökenli."
  },
  {
    id: "g-struct-545",
    word: "Entelektüel",
    translation: "intelektual",
    pos: "mbiemër",
    notes: "Fransızca kökenli."
  },
  {
    id: "g-struct-546",
    word: "Geniş",
    translation: "i gjerë / gjerë",
    pos: "mbiemër",
    notes: "Eski Türkçe kökenli."
  },
  {
    id: "g-struct-547",
    word: "Sentezlemek",
    translation: "sintetizoj",
    pos: "folje",
    notes: "Sentez kelimesinden türetilmiştir."
  },
  {
    id: "g-struct-548",
    word: "Tanık",
    translation: "dëshmitar",
    pos: "emër",
    notes: "Tanımak fiilinden türetilmiştir."
  },
  {
    id: "g-struct-549",
    word: "Vizyoner",
    translation: "vizionar",
    pos: "mbiemër",
    notes: "Fransızca kökenli."
  },
  {
    id: "g-struct-550",
    word: "Cumhuriyet",
    translation: "republikë",
    pos: "emër",
    notes: "Arapça kökenli."
  },
  {
    id: "g-struct-551",
    word: "Atatürk",
    translation: "Atatürk",
    pos: "emër",
    notes: "Özel isim."
  },
  {
    id: "g-struct-552",
    word: "Tarihsel",
    translation: "historik",
    pos: "mbiemër",
    notes: "Tarih + sel."
  },
  {
    id: "g-struct-553",
    word: "Beslenmek",
    translation: "ushqehem",
    pos: "folje",
    notes: "Beslemek fiilinin edilgen/dönüşlü şekli."
  },
  {
    id: "g-struct-554",
    word: "Ritim",
    translation: "ritëm",
    pos: "emër",
    notes: "Fransızca kökenli."
  },
  {
    id: "g-struct-555",
    word: "Asır",
    translation: "shekull",
    pos: "emër",
    notes: "Arapça kökenli."
  },
  {
    id: "g-struct-556",
    word: "Panayır",
    translation: "panair",
    pos: "emër",
    notes: "Rumca kökenli."
  },
  {
    id: "g-struct-557",
    word: "Rol",
    translation: "rol",
    pos: "emër",
    notes: "Fransızca kökenli."
  },
  {
    id: "g-struct-558",
    word: "Modernleşme",
    translation: "modernizim / modernizim",
    pos: "emër",
    notes: "Modern + leş + me."
  },
  {
    id: "g-struct-559",
    word: "Tehlike",
    translation: "rrezik / kërcënim",
    pos: "emër",
    notes: "Arapça kökenli."
  },
  {
    id: "g-struct-560",
    word: "Özünde",
    translation: "në thelb",
    pos: "shprehje",
    notes: "Öz + ü + n + de."
  },
  {
    id: "g-struct-561",
    word: "Sanatsal",
    translation: "artistik",
    pos: "mbiemër",
    notes: "Sanat + sal."
  },
  {
    id: "g-struct-562",
    word: "Konak",
    translation: "konak / rezidencë guri / vilë",
    pos: "emër",
    notes: "Konmak fiilinden türetilmiştir."
  },
  {
    id: "g-struct-563",
    word: "Ressam",
    translation: "piktor",
    pos: "emër",
    notes: "Arapça kökenli."
  },
  {
    id: "g-struct-564",
    word: "Sözün kısası",
    translation: "shkurt e shqip / shkurtimisht",
    pos: "shprehje",
    notes: "Özetleme bağlacı."
  },
  {
    id: "g-struct-565",
    word: "Sınır",
    translation: "kufi",
    pos: "emër",
    notes: "Rumca kökenli."
  },
  {
    id: "g-struct-566",
    word: "Birleştirmek",
    translation: "bashkoj",
    pos: "folje",
    notes: "Birleşmek fiilinin ettirgen şekli."
  },
  {
    id: "g-struct-567",
    word: "Evrensel",
    translation: "universal / botëror",
    pos: "mbiemër",
    notes: "Evren + sel."
  },
  {
    id: "g-struct-568",
    word: "Tam tersine",
    translation: "krejt e kundërta / përkundrazi",
    pos: "shprehje",
    notes: "Karşıtlık bağlacı."
  },
  {
    id: "g-struct-569",
    word: "Ezgi",
    translation: "melodi / këngë",
    pos: "emër",
    notes: "Eski Türkçe kökenli."
  },
  {
    id: "g-struct-570",
    word: "Birleşmek",
    translation: "bashkohem",
    pos: "folje",
    notes: "Bir + leş + mek."
  }
];

