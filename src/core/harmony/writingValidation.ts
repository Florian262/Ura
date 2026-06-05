import { getVowelHarmony2, getVowelHarmony4, getLastVowel } from './vowelHarmony';

export interface EvaluationResult {
  status: 'success' | 'typo' | 'error';
  feedback: string;
  suggestions?: string[];
  matchedModelAnswer?: string;
}

export interface ValidationRule {
  type: 'required_keywords' | 'forbidden_pattern' | 'required_pattern' | 'origin_harmony' | 'reported_past_harmony' | 'conditional_harmony' | 'participle_harmony' | 'idiom_presence' | 'gittim_check' | 'okudum_check' | 'adverbial_ip_harmony' | 'since_harmony';
  keywords?: string[];
  regex?: string;
  feedback: string;
  idioms?: Array<{ name: string; keywords: string[] }>;
}

export interface WritingPrompt {
  chapterId: number;
  type: 'translation' | 'guided';
  promptAlbanian: string;
  grammarTipAlbanian: string;
  sampleAnswers?: string[];
  grammarLabel?: string;
  validationRules?: ValidationRule[];
}

// Prompt Configurations for all 7 chapters
export const WRITING_PROMPTS: Record<number, WritingPrompt> = {
  1: {
    chapterId: 1,
    type: 'guided', // Chapter 1 uses guided to allow names and various cities
    promptAlbanian: "Shkruani një përshëndetje dhe prezantim të thjeshtë në turqisht (p.sh. përshëndetni, tregoni emrin tuaj dhe nga cili qytet jeni, ashtu si Ahmeti dhe Valbona në dialog).",
    grammarTipAlbanian: "Rrjeti i fjalive duhet të përmbajë: një përshëndetje ('Merhaba' ose 'Selam'), strukturën e emrit ('Benim adım...' ose 'İsmim...'), dhe prapashtesën e prejardhjes/kombësisë '-lı/-li/-lu/-lü' + '-yım/-yim/-yum/-yüm' të bashkangjitur me emrin e qytetit tuaj (p.sh., Tiran + lı + yım = Tiranlıyım).",
    sampleAnswers: [
      "Merhaba! Benim adım Valbona. Tiranlıyım.",
      "Merhaba! Benim adım Ahmet. İstanbulluyum.",
      "Merhaba, benim adım Leyla. Kosovalıyım."
    ],
    grammarLabel: "Prezantimi & Origjina (-lı/yim)",
    validationRules: [
      {
        type: 'required_pattern',
        regex: 'merhaba|selam|iyi günler|iyi akşamlar|günaydın',
        feedback: "Mungon përshëndetja në fillim të fjalisë (p.sh., 'Merhaba' ose 'Selam')."
      },
      {
        type: 'required_pattern',
        regex: 'adım|ismim|adımın|ben\\s+[a-zA-ZçğışöüÇĞİŞÖÜ]+(y[ıi])?m',
        feedback: "Mungon struktura e prezantimit të emrit tuaj (p.sh., 'Benim adım ...' ose 'İsmim ...')."
      },
      {
        type: 'origin_harmony',
        feedback: "Mungon prapashtesa e origjinës ose kombësisë (p.sh., 'Tiranlıyım' ose 'Kosovalıyım'). Sigurohuni që keni shkruar emrin e vendit, të ndjekur nga '-lı/-li/-lu/-lü' dhe prapashtesa vetanake '-yım/-yim/-yum/-yüm'."
      }
    ]
  },
  2: {
    chapterId: 2,
    type: 'translation',
    promptAlbanian: "Përktheni fjalinë në turqisht: 'Libri është në tavolinë, fletorja është në çantë.'",
    grammarTipAlbanian: "Përdorni emrat 'kitap' (libër) dhe 'defter' (fletore). Për vendndodhjen 'në tavolinë' dhe 'në çantë', shtoni prapashtesën e rasës vendore '-da/-de' pas fjalëve 'masa' (tavolinë) dhe 'çanta' (çantë). Kujdes: masa + da = masada, çanta + da = çantada.",
    sampleAnswers: [
      "Kitap masada, defter çantada.",
      "Kitap masada ve defter çantada.",
      "Kitap masada, defter ise çantada.",
      "Kitap masadadır, defter çantadadır."
    ],
    grammarLabel: "Rasa Vendore (-da/-de)",
    validationRules: [
      {
        type: 'required_keywords',
        keywords: ['kitap'],
        feedback: "Mungon fjala 'kitap' (libër)."
      },
      {
        type: 'required_keywords',
        keywords: ['defter'],
        feedback: "Mungon fjala 'defter' (fletore)."
      },
      {
        type: 'forbidden_pattern',
        regex: 'masade',
        feedback: "Gabim Harmonie Vokalore: Fjala 'masa' ka zanore të prapme (a), prandaj prapashtesa duhet të jetë '-da' (masada, jo 'masade')."
      },
      {
        type: 'required_pattern',
        regex: 'masad[ae]',
        feedback: "Mungon rasa vendore për tavolinën ('masada')."
      },
      {
        type: 'forbidden_pattern',
        regex: 'çantade',
        feedback: "Gabim Harmonie Vokalore: Fjala 'çanta' ka zanore të prapme (a), prandaj prapashtesa duhet të jetë '-da' (çantada, jo 'çantade')."
      },
      {
        type: 'required_pattern',
        regex: '[çc]antad[ae]',
        feedback: "Mungon rasa vendore për çantën ('çantada')."
      }
    ]
  },
  3: {
    chapterId: 3,
    type: 'guided',
    promptAlbanian: "Shkruani 2-3 fjali në turqisht për fundjavën tuaj të kaluar duke përdorur kohën e shkuar (p.sh., tregoni ku shkuat, çfarë hëngrët, ose cilin takuat).",
    grammarTipAlbanian: "Fjalitë duhet të përdorin kohën e shkuar të drejtpërdrejtë ('-di/-ti' etj.) dhe tregues të kohës si 'dün' (dje) ose 'hafta sonu' (fundjavë). Përdorni folje si 'gittim' (shkova), 'yedim' (hëngra), 'okudum' (lexova) ose 'buluştuk' (u takuam).",
    sampleAnswers: [
      "Dün okula gittim ve kitap okudum.",
      "Hafta sonu arkadaşımla buluştum ve kahve içtim.",
      "Dün erken uyandım, güzel bir kahvaltı yaptım."
    ],
    grammarLabel: "Ditar i së Shkuarës (-dı)",
    validationRules: [
      {
        type: 'required_pattern',
        regex: 'dün|hafta sonu|geçen|sabah|akşam',
        feedback: "Mungon një tregues i kohës së shkuar ose pjesë e ditës (p.sh., 'dün', 'hafta sonu', 'geçen hafta', 'sabah', 'akşam')."
      },
      {
        type: 'required_pattern',
        regex: '(?:^|\\s)[a-zçğışöü]+(d[ıiuü]|t[ıiuü])(m|k)?(?=$|[\\s.,!?])',
        feedback: "Nuk u gjet asnjë folje e zgjedhuar saktë në kohën e shkuar të drejtpërdrejtë (p.sh., 'gittim', 'okudum', 'buluştuk', 'yedim')."
      }
    ]
  },
  8: {
    chapterId: 8,
    type: 'translation',
    promptAlbanian: "Përktheni fjalinë në turqisht: 'Dje shkova në shkollë dhe lexova një libër.'",
    grammarTipAlbanian: "Përdorni treguesin e kohës 'dün' (dje). Folja 'shkova' përkthehet si 'gittim' (nga gitmek, me prapashtesën e kohës së shkuar -di dhe vetës së parë -m) dhe kërkon drejtimin '-e/-a' te vendi (okula gittim). Folja 'lexova' përkthehet si 'okudum' (okumak + du + m).",
    sampleAnswers: [
      "Dün okula gittim ve bir kitap okudum.",
      "Dün okula gittim ve kitap okudum.",
      "Dün okula gidip bir kitap okudum.",
      "Dün okuluma gittim ve bir kitap okudum."
    ],
    grammarLabel: "Koha e Shkuar (-dı) & Drejtimi (-a)",
    validationRules: [
      {
        type: 'required_keywords',
        keywords: ['dün'],
        feedback: "Mungon treguesi i kohës së shkuar 'dün' (dje)."
      },
      {
        type: 'forbidden_pattern',
        regex: 'okule',
        feedback: "Gabim Harmonie: Fjala 'okul' ka zanoren e prapme 'u', prandaj drejtimi duhet të jetë '-a' (okula, jo 'okule')."
      },
      {
        type: 'required_pattern',
        regex: 'okul[ae]',
        feedback: "Mungon rasa e drejtimit për shkollën. Folja 'gitmek' kërkon prapashtesën '-a' (okula gittim)."
      },
      {
        type: 'gittim_check',
        feedback: ""
      },
      {
        type: 'okudum_check',
        feedback: ""
      }
    ]
  },
  9: {
    chapterId: 9,
    type: 'guided',
    promptAlbanian: "Shkruani një fjali në turqisht duke përdorur kohën e shkuar të pacaktuar (Mënyra Habitore '-miş / -mış / -muş / -müş') për të treguar një ngjarje që e keni dëgjuar nga të tjerët ose e keni kuptuar më vonë.",
    grammarTipAlbanian: "Prapashtesa e habitores është '-miş/-mış/-muş/-müş' dhe vendoset pas rrënjës së foljes sipas harmonisë vokalore 4-she (p.sh., gel -> gelmiş, yaz -> yazmış, oku -> okumuş, gör -> görmüş). Ju mund të shtoni edhe prapashtesa të vetës (p.sh., gelmişim, gitmişsin).",
    sampleAnswers: [
      "Dün Ankara'ya kar yağmış.",
      "Ahmet dün sinemaya gitmiş.",
      "O kitabı çok beğenmişsin."
    ],
    grammarLabel: "Mënyra Habitore (-miş)",
    validationRules: [
      {
        type: 'reported_past_harmony',
        feedback: "Gabim: Nuk u gjet asnjë folje e zgjedhuar në Mënyrën Habitore. Duhet të përdorni prapashtesën '-miş/-mış/-muş/-müş' pas rrënjës së foljes (p.sh., 'gitmiş', 'gelmiş', 'yağmış')."
      }
    ]
  },
  10: {
    chapterId: 10,
    type: 'guided',
    promptAlbanian: "Shkruani një fjali kushtore në turqisht duke përdorur prapashtesën e kushtit '-se / -sa' (p.sh., 'nëse shkon...', 'nëse bie shi...', 'nëse ka...').",
    grammarTipAlbanian: "Prapashtesa e kushtit është '-se/-sa' dhe ndjek harmoninë vokalore 2-she. Ajo mund të ngjitet pas një rrënje foljore (p.sh., gelse, yazsa) ose pas një kohe tjetër (p.sh., yağ-ar-sa -> nëse bie shi, git-er-se-m -> nëse unë shkoj). Mund ta përdorni edhe me 'var/yok' (p.sh., varsa -> nëse ka).",
    sampleAnswers: [
      "Eğer vaktim olursa geleceğim.",
      "Yağmur yağarsa evde kalacağız.",
      "Paran varsa bunu alabilirsin."
    ],
    grammarLabel: "Mënyra Kushtore (-se/-sa)",
    validationRules: [
      {
        type: 'conditional_harmony',
        feedback: "Gabim: Nuk u gjet asnjë strukturë kushtore në fjali. Duhet të përdorni prapashtesën e kushtit '-se/-sa' (p.sh., 'gidersen', 'yağarsa', 'varsa')."
      }
    ]
  },
  11: {
    chapterId: 11,
    type: 'guided',
    promptAlbanian: "Shkruani një fjali në turqisht duke përdorur një pjesore (sıfat-fiil) aktive me '-an / -en' (p.sh., 'njeriu që vjen') ose pasive me '-dık / -dik' + përemër pronor (p.sh., 'libri që kam lexuar').",
    grammarTipAlbanian: "Pjesorja aktive formohet me rrënjën e foljes + '-an/-en' (p.sh., gelen adam -> njeriu që vjen/erdhi). Pjesorja pasive/përcaktuese formohet me rrënjën + '-dık/-dik/-duk/-dük' + prapashtesën pronore (p.sh., okuduğum kitap -> libri që lexoj/kam lexuar, dëgjoni ndryshimin e k/ğ te 'okuduğum').",
    sampleAnswers: [
      "Dün gelen misafirleri gördün mü?",
      "En sevdiğim yemek köftedir.",
      "Yazdığın mektubu okudum."
    ],
    grammarLabel: "Pjesoret (Sıfat-Fiiller)",
    validationRules: [
      {
        type: 'participle_harmony',
        feedback: "Gabim: Nuk u gjet asnjë pjesore (sıfat-fiil) në fjali. Përdorni një folje me prapashtesën '-an/-en' (p.sh., 'gelen adam') ose '-dık/-dik' me prapashtesë pronore (p.sh., 'sevdiğim yemek')."
      }
    ]
  },
  12: {
    chapterId: 12,
    type: 'guided',
    promptAlbanian: "Shkruani një fjali në turqisht që përdor një idiomë turke (deyim) të cilën e ndajmë në kuptim ose strukturë edhe me gjuhën shqipe (p.sh., 'gözden düşmek', 'can atmak', 'kulak asmak', ose 'kafayı takmak').",
    grammarTipAlbanian: "Përdorimi i një idiome të përbashkët Ballkanike. Shembuj: 'Gözden düşmek' (të biesh nga sytë), 'Can atmak' (të dëshirosh me shpirt), 'Kulak asmak' (të vësh veshin/të dëgjosh), ose 'Kafayı takmak' (të fiksohesh pas diçkaje). Sigurohuni që idiomën ta integroni në një fjali të plotë.",
    sampleAnswers: [
      "O yaptığı hata yüzünden gözden düştü.",
      "Tatile gitmek için can atıyorum.",
      "Bu küçük soruna kafayı takma."
    ],
    grammarLabel: "Idiomat e Përbashkëta (Deyimler)",
    validationRules: [
      {
        type: 'idiom_presence',
        idioms: [
          { name: "gözden düşmek", keywords: ["göz", "düş"] },
          { name: "can atmak", keywords: ["can", "at"] },
          { name: "kulak asmak", keywords: ["kulak", "as"] },
          { name: "kafayı takmak", keywords: ["kafa", "tak"] }
        ],
        feedback: "Gabim: Nuk u gjet asnjë nga idiomat e kërkuara të përbashkëta (si 'gözden düşmek', 'can atmak', 'kulak asmak', ose 'kafayı takmak'). Sigurohuni që t'i shkruani saktë fjalët e idiomës."
      }
    ]
  },
  13: {
    chapterId: 13,
    type: 'translation',
    promptAlbanian: "Përktheni fjalinë në turqisht: 'A ka tre lapsa në çantë?'",
    grammarTipAlbanian: "Përdorni emrat 'çanta' (çantë) në rasën vendore ('çantada'), numrin 'üç' (tre), dhe emrin 'kalem' (laps) në njëjës. Për pyetjen 'A ka...?', përdorni fjalën 'var' dhe pjesëzën pyetëse 'mı' të shkruar veç: 'var mı?'.",
    sampleAnswers: [
      "Çantada üç kalem var mı?",
      "Çantada 3 kalem var mı?",
      "Çantanın içinde üç kalem var mı?"
    ],
    grammarLabel: "Ekzistencialet & Pyetjet",
    validationRules: [
      {
        type: 'required_keywords',
        keywords: ['var'],
        feedback: "Mungon fjala 'var' (ka)."
      },
      {
        type: 'required_keywords',
        keywords: ['kalem'],
        feedback: "Mungon fjala 'kalem' (laps)."
      },
      {
        type: 'required_pattern',
        regex: 'üç|3',
        feedback: "Mungon numri 'üç' ose '3' (tre)."
      },
      {
        type: 'required_pattern',
        regex: '[çc]antada',
        feedback: "Mungon rasa vendore për çantën ('çantada')."
      },
      {
        type: 'required_pattern',
        regex: 'var\\s+mı',
        feedback: "Mungon pjesëza pyetëse e harmonizuar saktë ('var mı?'). Kujdes: pjesëza duhet të shkruhet e ndarë me hapësirë pas fjalës 'var'."
      },
      {
        type: 'forbidden_pattern',
        regex: 'var\\s+mi|varmı|varmi',
        feedback: "Gabim Harmonie Vokalore ose Shkrimi: Fjala 'var' ka zanoren e prapme (a), prandaj kërkon pjesëzën pyetëse 'mı?' të shkruar veç ('var mı?', jo 'var mi?' ose 'varmı')."
      }
    ]
  },
  14: {
    chapterId: 14,
    type: 'guided',
    promptAlbanian: "Shkruani 2-3 fjali në turqisht për planet tuaja për verën e ardhshme duke përdorur kohën e ardhshme (p.sh., ku do të shkoni, çfarë do të vizitoni, ku do të qëndroni).",
    grammarTipAlbanian: "Fjalitë duhet të përdorin kohën e ardhshme të drejtpërdrejtë ('-acak/-ecek') të zgjedhuar për vetën e parë njëjës (p.sh., 'gideceğim', 'kalacağım', 'gezeceğim') dhe tregues si 'tatil' (pushime) ose 'yaz' (verë).",
    sampleAnswers: [
      "Gelecek yaz Antalya'ya gideceğim ve otelde kalacağım.",
      "Tatilde birçok müze gezeceğim ve fotoğraf çekeceğim."
    ],
    grammarLabel: "Koha e Ardhshme (-acak)",
    validationRules: [
      {
        type: 'required_pattern',
        regex: 'tatil|yaz|gelecek|haftaya|plan',
        feedback: "Mungon një tregues i së ardhshmes ose pushimeve (p.sh., 'tatil', 'yaz', 'gelecek yaz', 'haftaya', 'plan')."
      },
      {
        type: 'required_pattern',
        regex: '(?:^|\\s)[a-zçğışöü]+(ac|ec)a[ğg]ı[m].*(?=$|[\\s.,!?])',
        feedback: "Nuk u gjet asnjë folje e zgjedhuar saktë në kohën e ardhshme për vetën e parë njëjës (p.sh., 'gideceğim', 'kalacağım', 'okuyacağım')."
      }
    ]
  },
  15: {
    chapterId: 15,
    type: 'guided',
    promptAlbanian: "Shkruani 2-3 fjali në turqisht për rutinën tuaj të përditshme duke përdorur kohën e gjerë (Geniş Zaman, p.sh., tregoni kur zgjoheni, çfarë hani për mëngjes, ose si shkoni në punë/shkollë).",
    grammarTipAlbanian: "Fjalitë duhet të përdorin kohën e gjerë të zgjedhuar për vetën e parë njëjës (p.sh., 'uyanırım', 'yaparım', 'giderim') dhe tregues të frekuencës si 'genellikle' (zakonisht) ose 'her sabah' (çdo mëngjes).",
    sampleAnswers: [
      "Her sabah erken uyanırım ve kahve içerim.",
      "Genellikle saat sekizde işe giderim."
    ],
    grammarLabel: "Koha e Gjerë (-r)",
    validationRules: [
      {
        type: 'required_pattern',
        regex: 'genellikle|her sabah|her gün|bazen|her zaman|rutin',
        feedback: "Mungon një tregues i rutinës ose frekuencës (p.sh., 'genellikle', 'her sabah', 'her gün', 'bazen', 'her zaman', 'rutin')."
      },
      {
        type: 'required_pattern',
        regex: '(?:^|\\s)[a-zçğışöü]+(ı|i|u|ü|a|e)?r(ı|i)m.*(?=$|[\\s.,!?])',
        feedback: "Nuk u gjet asnjë folje e zgjedhuar saktë në kohën e gjerë për vetën e parë njëjës (p.sh., 'uyanırım', 'yaparım', 'giderim')."
      }
    ]
  },
  16: {
    chapterId: 16,
    type: 'guided',
    promptAlbanian: "Shkruani 2-3 fjali në turqisht për aftësitë tuaja (p.sh. çfarë mund të bëni ose cilat gjuhë mund të flisni) duke përdorur foljen e mundësisë (Yeterlilik Fiili, p.sh., tregoni nëse mund të flisni turqisht, të ngisni makinën ose të luani ndonjë instrument).",
    grammarTipAlbanian: "Fjalitë duhet të përdorin foljen e mundësisë në vetën e parë njëjës (p.sh., 'konuşabilirim', 'sürebilirim', 'çalabilirim' ose trajta negative si 'yapamam', 'yüzemem').",
    sampleAnswers: [
      "Ben Türkçe konuşabilirim ve araba sürebilirim.",
      "Çok iyi gitar çalabilirim ama piyano çalamam."
    ],
    grammarLabel: "Folja e Mundësisë (-abil)",
    validationRules: [
      {
        type: 'required_pattern',
        regex: 'konuş|sür|çal|yüz|yap|git|gel|oku|yaz|öğren|başar',
        feedback: "Sigurohuni që të përshkruani të paktën një aftësi ose veprim që mund të bëni (p.sh. duke përdorur folje si 'konuşmak', 'sürmek', 'çalmak', 'yüzmek' ose 'yapmak')."
      },
      {
        type: 'required_pattern',
        regex: '(?:\\s|^)[a-zçğışöü]+((a|e)bil(i)?r(i)?m|(a|e)m[ae]m)(?=$|[\\s.,!?])',
        feedback: "Nuk u gjet asnjë folje e zgjedhuar saktë në formën e mundësisë (Yeterlilik Fiili) për vetën e parë njëjës (p.sh., 'konuşabilirim', 'sürebilirim', ose trajta negative 'yapamam', 'yüzemem')."
      }
    ]
  },
  17: {
    chapterId: 17,
    type: 'guided',
    promptAlbanian: "Shkruani 2-3 fjali në turqisht për rregullat ose detyrimet tuaja të përditshme ose këshilla shëndetësore duke përdorur mënyrën detyrore (Gereklilik Kipi, p.sh., tregoni çfarë duhet të bëni për të qenë të shëndetshëm ose rregulla që duhet të ndiqni).",
    grammarTipAlbanian: "Fjalitë duhet të përdorin mënyrën detyrore me prapashtesën '-malı / -meli' (p.sh., 'yapmalıyım', 'yemeliyiz') ose strukturat nominale të nevojës si 'gerek', 'lazım' ose 'zorundayım'.",
    sampleAnswers: [
      "Sağlıklı olmak için her gün spor yapmalıyım.",
      "Erken uyumam gerek çünkü sabah erken kalkmalıyım."
    ],
    grammarLabel: "Mënyra Detyrore (-malı)",
    validationRules: [
      {
        type: 'required_pattern',
        regex: 'meli|malı|gerek|lazım|zorund',
        feedback: "Sigurohuni që të përdorni mënyrën detyrore (p.sh., me prapashtesat '-meli/-malı') ose strukturat nominale të nevojës si 'gerek' / 'lazım' ose 'zorunda olmak'."
      },
      {
        type: 'required_pattern',
        regex: '(?:\\s|^)[a-zçğışöü]+(mal|mel)[ıi][a-zçğışöü]*(?=$|[\\s.,!?])|gerek|lazım|zorund',
        feedback: "Nuk u gjet asnjë folje e zgjedhuar saktë në mënyrën detyrore (Gereklilik Kipi) ose strukturë e nevojës (p.sh., 'yapmalıyım', 'yemeliyiz', 'uyumam gerek', ose 'zorundayım')."
      }
    ]
  },
  18: {
    chapterId: 18,
    type: 'guided',
    promptAlbanian: "Shkruani 2-3 fjali në turqisht duke krahasuar dy qytete (p.sh., Tiranën dhe Stambollin, ose dy vende të tjera) ose dy produkte, duke përdorur fjalën krahasuese 'daha' dhe prapashtesën e rasës rrjedhore (-dan/-den).",
    grammarTipAlbanian: "Fjalitë e krahasimit duhet të përdorin strukturën: [Emri 1] + [Emri 2 në rasën rrjedhore '-dan/-den/-tan/-ten'] + 'daha' + [Mbiemër]. P.sh., 'Tiran İstanbul'dan daha sakin' (Tirana është më e qetë se Stambolli).",
    sampleAnswers: [
      "Tiran İstanbul'dan daha küçük.",
      "Masa sandalyeden daha büyük."
    ],
    grammarLabel: "Krahasimi & Rasa Rrjedhore",
    validationRules: [
      {
        type: 'required_pattern',
        regex: 'daha',
        feedback: "Mungon fjala krahasuese 'daha' (më)."
      },
      {
        type: 'required_pattern',
        regex: '[a-zçğışöüA-ZÇĞİÖŞÜ]+(?:\'|)?(dan|den|tan|ten)(?=$|[\\s.,!?])',
        feedback: "Nuk u gjet asnjë emër i zgjedhuar saktë në rasën rrjedhore (Ablative, p.sh., 'İstanbul'dan', 'Tiran'dan', ose 'sandalyeden')."
      }
    ]
  },
  19: {
    chapterId: 19,
    type: 'guided',
    promptAlbanian: "Shkruani 2-3 fjali në turqisht për fëmijërinë tuaj ose zakonet e vjetra duke përdorur kohën e shkuar të vazhdueshme (Şimdiki Zamanın Hikayesi, p.sh., tregoni ku jetonit, çfarë lojërash luanit ose çfarë bënit shpesh).",
    grammarTipAlbanian: "Fjalitë duhet të përdorin kohën e shkuar të vazhdueshme në vetën e parë (p.sh., 'yaşıyordum' - jetoja, 'oynuyorduk' - luanim) dhe tregues si 'eskiden' (dikur) ose 'çocukken' (kur isha fëmijë).",
    sampleAnswers: [
      "Eskiden çok kitap okuyordum.",
      "Çocukken her gün sokakta arkadaşlarımla oynuyordum."
    ],
    grammarLabel: "Koha e Shkuar e Vazhdueshme",
    validationRules: [
      {
        type: 'required_pattern',
        regex: 'eskiden|çocuk|küçük|yıllar|zaman',
        feedback: "Mungon një tregues i fëmijërisë ose i së shkuarës (p.sh., 'eskiden', 'çocukken', 'küçükken')."
      },
      {
        type: 'required_pattern',
        regex: '[a-zçğışöü]+(iyor|ıyor|uyor|üyor)du(m|k)?(?=$|[\\s.,!?])',
        feedback: "Nuk u gjet asnjë folje e zgjedhuar saktë në kohën e shkuar të vazhdueshme (p.sh., 'okuyordum', 'oynuyorduk', 'yaşıyordum')."
      }
    ]
  },
  20: {
    chapterId: 20,
    type: 'guided',
    promptAlbanian: "Shkruani 2-3 fjali në turqisht për ditën tuaj duke treguar veprime të lidhura me zarf-foljen '-ip' (p.sh., duke shkuar në një vend dhe duke bërë diçka) ose duke përdorur lidhëza si 'çünkü' ose 'bu yüzden' për të shpjeguar arsyet.",
    grammarTipAlbanian: "Fjalitë duhet të përdorin zarf-foljen me prapashtesën '-ip / -ıp / -up / -üp' (p.sh., 'gidip', 'yapıp') ose lidhëza si 'çünkü' (sepse), 'bu yüzden' (prandaj), 'ama' (por) për të lidhur mendimet.",
    sampleAnswers: [
      "Sabah uyanıp kahvaltı yaptım çünkü çok açtım.",
      "Kütüphaneye gidip ders çalıştım, bu yüzden çok yoruldum."
    ],
    grammarLabel: "Lidhëzat & Zarf-Foljet",
    validationRules: [
      {
        type: 'required_pattern',
        regex: 'çünkü|bu yüzden|veya|ama|ve|[a-zçğışöü]+(ıp|ip|up|üp)(?=$|[\\s.,!?])',
        feedback: "Sigurohuni që të përdorni të paktën një lidhëz (si 'çünkü', 'bu yüzden', 'ama') ose një folje me zarf-foljen '-ip' (si 'gidip', 'yapıp', 'okuyup')."
      },
      {
        type: 'adverbial_ip_harmony',
        feedback: "Gabim Harmonie: Zarf-folja e përdorur me prapashtesën '-ip' nuk respekton rregullat e harmonisë vokalore turke."
      }
    ]
  },
  21: {
    chapterId: 21,
    type: 'translation',
    promptAlbanian: "Përktheni në turqisht fjalinë e përshëndetjes: 'Mirëdita, si jeni?'",
    grammarTipAlbanian: "Përdorni 'İyi günler' (Mirëdita) dhe 'nasılsınız?' (si jeni?). Sigurohuni që t'i shkruani saktë shkronjat turke (ı, ü).",
    sampleAnswers: [
      "İyi günler, nasılsınız?",
      "İyi günler nasılsınız?",
      "İyi günler, nasılsınız"
    ],
    grammarLabel: "Përshëndetja & Alfabeti",
    validationRules: [
      {
        type: 'required_keywords',
        keywords: ['iyi'],
        feedback: "Mungon fjala 'İyi'."
      },
      {
        type: 'required_keywords',
        keywords: ['günler'],
        feedback: "Mungon fjala 'günler'."
      },
      {
        type: 'required_keywords',
        keywords: ['nasılsınız'],
        feedback: "Mungon fjala 'nasılsınız'."
      },
      {
        type: 'required_pattern',
        regex: 'iyi\\s+günler',
        feedback: "Sigurohuni që keni shkruar 'İyi günler' për përshëndetjen 'Mirëdita'."
      }
    ]
  },
  4: {
    chapterId: 4,
    type: 'guided',
    promptAlbanian: "Shkruani një paragraf të shkurtër në turqisht (të paktën 60 karaktere) ku përshkruani se si ndryshoi dita juaj kur ishit duke bërë diçka dhe morët një lajm (p.sh., 'Unë isha duke lexuar një libër kur erdhi një njoftim...'). Përdorni të paktën një lidhëz si 'fakat' ose 'oysa' dhe prapashtesën e së shkuarës së vazhdueshme '-iyordu' ose gerundin '-ken'.",
    grammarTipAlbanian: "Përdorni prapashtesat e kohës së shkuar të vazhdueshme '-iyordu' ose zarf-foljes '-ken' (p.sh., okuyorken, yapıyordum) dhe lidhëzat si 'fakat', 'oysa', 'ancak' ose 'bununla birlikte' për të lidhur fjalitë.",
    sampleAnswers: [
      "Ben kitap okuyorken telefonuma bir bildirim geldi. Çok heyecanlandım, fakat hemen cevap yazamadım.",
      "Yolda yürüyorken eski bir arkadaşımla karşılaştım. Oysa onu dün aramayı düşünüyordum.",
      "Kahve içiyorken haberleri televizyondan takip ediyordum. Birden elektrikler kesildi."
    ],
    grammarLabel: "E Shkuara e Vazhdueshme & Gerundi -ken",
    validationRules: [
      {
        type: 'required_pattern',
        regex: '(iyor|üyor|ıyor|eyor)du|(y)?ken',
        feedback: "Mungon përdorimi i kohës së shkuar të vazhdueshme (-iyordu) ose zarf-foljes (-ken)."
      },
      {
        type: 'required_pattern',
        regex: '\\b(fakat|oysa|ancak|bununla birlikte|ama)\\b',
        feedback: "Mungon një nga lidhëzat e B1 (p.sh., 'fakat', 'oysa', 'ancak', 'bununla birlikte')."
      }
    ]
  },
  22: {
    chapterId: 22,
    type: 'guided',
    promptAlbanian: "Shkruani një paragraf të shkurtër në turqisht (të paktën 60 karaktere) duke përshkruar një takim ose komunikim pune apo studimi me një mik ose koleg. Përdorni të paktën dy folje reciproke (si buluşmak, görüşmek, yazışmak, anlaşmak, paylaşmak).",
    grammarTipAlbanian: "Përdorni prapashtesën reciproke '-(I)ş' për të formuar folje si 'buluşmak', 'görüşmek', 'yazışmak', 'anlaşmak' ose 'paylaşmak' për të treguar veprime të ndërsjella ose të përbashkëta.",
    sampleAnswers: [
      "Biz dün kafede buluştuk ve yeni projeyi görüştük. Her konuda anlaştık ve fikirlerimizi paylaştık.",
      "Arkadaşımla her gün e-posta ile yazışıyoruz. Hafta sonu buluşmak için karar verdik.",
      "Mülakattan sonra müdürle görüştüm. İş detaylarını paylaştık ve ortak bir noktada anlaştık."
    ],
    grammarLabel: "Foljet Reciproke (-(I)ş)",
    validationRules: [
      {
        type: 'required_pattern',
        regex: 'buluş|görüş|yazış|anlaş|paylaş|tanış|tartış',
        feedback: "Mungon përdorimi i foljeve reciproke me prapashtesën '-(I)ş' (si buluşmak, görüşmek, yazışmak, anlaşmak, paylaşmak)."
      }
    ]
  },
  23: {
    chapterId: 23,
    type: 'guided',
    promptAlbanian: "Shkruani një paragraf të shkurtër në turqisht (të paktën 60 karaktere) rreth rëndësisë së edukimit, librave ose mësimit të gjuhëve të huaja. Përdorni të paktën një strukturë kushtore me '-se/-sa' ose formën e së shkuarës dëshirore '-seydi/-saydı' (p.sh. 'eğer kitap okursak...', 'keşke Türkçe öğrenseydim...').",
    grammarTipAlbanian: "Përdorni prapashtesën kushtore '-se / -sa' (p.sh. 'varsa' - nëse ka, 'okursak' - nëse lexojmë) ose dëshiroren e së shkuarës '-seydi / -saydı' (p.sh. 'öğrenseydim' - sikur të kisha mësuar). Mund të përdorni fjalët 'eğer' (nëse) ose 'keşke' (sikur/ah sikur) për të përforcuar fjalinë.",
    sampleAnswers: [
      "Eğer her gün yeni kelimeler öğrenirsem, Türkçe konuşmam kolaylaşır. Kitap okumak da çok faydalıdır.",
      "Keşke gençken daha fazla yabancı dil öğrenseydim. Dil öğrenmek insanı geliştirir ve yeni kapılar açar.",
      "Kitap okursak ufkumuz genişler. Eğer vaktim olursa her gün en az otuz sayfa kitap okumak isterim."
    ],
    grammarLabel: "Kushtorja & Dëshirorja (-se / -seydi)",
    validationRules: [
      {
        type: 'conditional_harmony',
        feedback: "Gabim: Nuk u gjet asnjë strukturë kushtore ose dëshirore në fjali. Duhet të përdorni prapashtesën e kushtit ose dëshirës '-se/-sa' ose '-seydi/-saydı' (p.sh., 'varsa', 'okursak', 'öğrenseydim')."
      }
    ]
  },
  24: {
    chapterId: 24,
    type: 'guided',
    promptAlbanian: "Shkruani një paragraf të shkurtër në turqisht (të paktën 60 karaktere) ku përshkruani përvojën tuaj të mësimit të turqishtes ose rregullat në shtëpinë tuaj të re. Përdorni të paktën një folje me prapashtesën e detyrimit '-malı/-meli' ose prapashtesën e kohëzgjatjes '-diğinden beri' (p.sh., 'Türkçe çalıştığımdan beri...', 'daha çok pratik yapmalıyım').",
    grammarTipAlbanian: "Përdorni prapashtesën detyrore '-malı / -meli' (p.sh. 'yapmalıyım' - duhet të bëj) ose strukturën e kohëzgjatjes '-diğinden beri / -dığından beri' (p.sh. 'öğrenmeye başladığımdan beri' - që kur fillova të mësoj).",
    sampleAnswers: [
      "Türkçe öğrenmeye başladığımdan beri her gün yeni kelimeler çalışıyorum. Daha çok pratik yapmalıyım.",
      "Yeni evime geçen hafta taşındım. Evde çok gürültü yapmamalıyız çünkü komşular rahatsız olabilir."
    ],
    grammarLabel: "Detyrimi (-malı) & Që kur (-diğinden beri)",
    validationRules: [
      {
        type: 'required_pattern',
        regex: '(malı|meli|[a-zçğışöü]+(d|t)(ı|i|u|ü)ğ(ı|i|u|ü)(m|n|miz|niz)?(dan|den)\\s+beri)',
        feedback: "Gabim: Duhet të përdorni të paktën një prapashtesë detyrimi '-malı/-meli' (p.sh., 'yapmalıyım') ose prapashtesën e kohëzgjatjes '-diğinden beri' (p.sh., 'başladığımdan beri')."
      },
      {
        type: 'since_harmony',
        feedback: "Gabim Harmonie te prapashtesa '-diğinden beri': Kontrolloni zbutjen ose harmoninë vokalore."
      }
    ]
  }
};

// Computes the Levenshtein Distance between two strings
export function getLevenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= a.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= b.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1) // substitution
      );
    }
  }

  return matrix[a.length][b.length];
}

// Normalizes text for comparison (lowercasing, cleaning punctuation, removing double spaces)
export function normalizeText(text: string): string {
  return text
    .replace(/İ/g, 'i')
    .replace(/I/g, 'ı')
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, '') // remove punctuation
    .replace(/\s+/g, ' ') // collapse multiple spaces
    .trim();
}

// Checks if a verb base has vowel harmony violations.
// Verbs with progressive -iyor are allowed to mix, others are not.
export function isValidVerbBase(base: string): boolean {
  const clean = base.trim().toLowerCase();
  if (clean.includes('iyor') || clean.includes('uyor') || clean.includes('üyor') || clean.includes('ıyor')) {
    return true; // progressive tenses mix vowels (e.g. geliyor)
  }

  // Count front and back vowels
  const backCount = (clean.match(/[aıou]/g) || []).length;
  const frontCount = (clean.match(/[eiöü]/g) || []).length;

  // If it mixes both, it's invalid (unless it's a known loanword exception, but verb bases in these exercises aren't loanwords)
  if (backCount > 0 && frontCount > 0) {
    return false;
  }
  return true;
}

// Find if there is a word-level typo and return helpful correction feedback in Albanian
export function findTypoDetails(userInput: string, modelAnswer: string): string {
  const userWords = userInput.split(' ');
  const modelWords = modelAnswer.split(' ');
  
  const typoFeedbacks: string[] = [];

  for (let i = 0; i < modelWords.length; i++) {
    const targetWord = modelWords[i];
    // Check if the exact word exists in user's input
    if (!userWords.includes(targetWord)) {
      // Find the closest user word that isn't already a perfect match for something else
      let closestWord = '';
      let minDistance = 999;
      
      for (const userWord of userWords) {
        // If it's a close distance (1 or 2 edits)
        const dist = getLevenshteinDistance(userWord, targetWord);
        if (dist > 0 && dist <= 2 && dist < minDistance) {
          minDistance = dist;
          closestWord = userWord;
        }
      }

      if (closestWord) {
        typoFeedbacks.push(`Keni shkruar "${closestWord}", por fjala e saktë është "${targetWord}".`);
      }
    }
  }

  if (typoFeedbacks.length > 0) {
    return typoFeedbacks.join(' ');
  }

  return `Keni një gabim të vogël në gërmëzim krahasuar me fjalinë model: "${modelAnswer}".`;
}

// Helper to evaluate a single declarative validation rule
function runRule(rule: ValidationRule, normalizedInput: string): string | null {
  switch (rule.type) {
    case 'required_keywords': {
      if (!rule.keywords) return null;
      for (const kw of rule.keywords) {
        if (!normalizedInput.includes(kw)) {
          return rule.feedback;
        }
      }
      return null;
    }
    case 'required_pattern': {
      if (!rule.regex) return null;
      const re = new RegExp(rule.regex, 'i');
      if (!re.test(normalizedInput)) {
        return rule.feedback;
      }
      return null;
    }
    case 'forbidden_pattern': {
      if (!rule.regex) return null;
      const re = new RegExp(rule.regex, 'i');
      if (re.test(normalizedInput)) {
        return rule.feedback;
      }
      return null;
    }
    case 'origin_harmony': {
      const words = normalizedInput.split(' ');
      let originMatch = null;
      let cityRoot = '';
      let liSuffix = '';
      let yimSuffix = '';

      for (const w of words) {
        const match = w.match(/^([a-zçğışöü]+)(l[ıilu])(y[ıiu]m)$/);
        if (match) {
          originMatch = match;
          cityRoot = match[1];
          liSuffix = match[2];
          yimSuffix = match[3];
          break;
        }
      }

      if (!originMatch) {
        return rule.feedback;
      }

      // Check vowel harmony of the origin suffix
      const correctVowel = getVowelHarmony4(cityRoot);
      const expectedLi = `l${correctVowel}`;
      const expectedYim = `y${correctVowel}m`;

      if (liSuffix !== expectedLi || yimSuffix !== expectedYim) {
        return `Gabim Harmonie te origjina: Qyteti '${cityRoot}' ka zanoren e fundit '${getLastVowel(cityRoot)}', prandaj prapashtesat duhet të jenë '-${expectedLi}' dhe '-${expectedYim}' → '${cityRoot}${expectedLi}${expectedYim}' (ju keni shkruar '${cityRoot}${liSuffix}${yimSuffix}').`;
      }
      return null;
    }
    case 'reported_past_harmony': {
      const words = normalizedInput.split(' ');
      let habitoreMatch = null;
      let verbRoot = '';
      let misSuffix = '';

      for (const w of words) {
        const match = w.match(/^([a-zçğışöü]+)(miş|mış|muş|müş)(im|sin|miş|ik|iniz|ler)?$/);
        if (match) {
          habitoreMatch = match;
          verbRoot = match[1];
          misSuffix = match[2];
          break;
        }
      }

      if (!habitoreMatch) {
        return rule.feedback;
      }

      if (!isValidVerbBase(verbRoot)) {
        return `Gabim: Baza ose rrënja e foljes '${verbRoot}' ka gabim të harmonisë vokalike (kombinim i pasaktë i zanoreve para prapashtesës).`;
      }

      const expectedVowel = getVowelHarmony4(verbRoot);
      const expectedSuffix = `m${expectedVowel}ş`;

      if (misSuffix !== expectedSuffix) {
        return `Gabim Harmonie Vokalore: Rrënja e foljes '${verbRoot}' ka zanoren e fundit '${getLastVowel(verbRoot)}', prandaj prapashtesa e habitores duhet të jetë '-${expectedSuffix}' → '${verbRoot}${expectedSuffix}' (ju keni shkruar '${verbRoot}${misSuffix}').`;
      }
      return null;
    }
    case 'conditional_harmony': {
      const words = normalizedInput.split(' ');
      let condMatch = null;
      let base = '';
      let suffix = '';
      const hasVarYokCond = /\b(varsa|yoksa)\b/.test(normalizedInput);

      const EXCLUDED_PREFIXES = ['herkes', 'kimse', 'elbise', 'lise', 'kilise', 'hadise', 'masa', 'kasa', 'yasa', 'arsa', 'bursa', 'pırasa'];
      const EXCLUDED_EXACT = new Set(['tas', 'yas', 'pas', 'has', 'tasa', 'kese', 'kase']);

      for (const w of words) {
        if (EXCLUDED_EXACT.has(w) || EXCLUDED_PREFIXES.some(p => w.startsWith(p))) {
          continue;
        }
        const match = w.match(/^([a-zçğışöü]+)(se|sa)(?:yd[ıi])?(m|n|k|niz|ler)?$/);
        if (match) {
          condMatch = match;
          base = match[1];
          suffix = match[2];
          break;
        }
      }

      if (!condMatch && !hasVarYokCond) {
        return rule.feedback;
      }

      if (condMatch && !hasVarYokCond) {
        if (!isValidVerbBase(base)) {
          return `Gabim: Baza e foljes '${base}' ka gabim të harmonisë vokalike (kombinim i pasaktë i zanoreve para prapashtesës).`;
        }

        const expectedHarmony = getVowelHarmony2(base);
        const expectedSuffix = `s${expectedHarmony}`;

        if (suffix !== expectedSuffix) {
          return `Gabim Harmonie Vokalore: Rrënja/baza '${base}' kërkon prapashtesën e kushtit '-${expectedSuffix}' (2-she), por keni shkruar '-${suffix}' → '${base}${expectedSuffix}' (jo '${base}${suffix}').`;
        }
      }
      return null;
    }
    case 'participle_harmony': {
      const words = normalizedInput.split(' ');
      let activeMatch = null;
      let passiveMatch = null;

      for (const w of words) {
        const matchA = w.match(/^([a-zçğışöü]+)(en|an)$/);
        if (matchA) {
          const root = matchA[1];
          if (root.length >= 2 && !['b', 's', 'o'].includes(root)) {
            activeMatch = matchA;
            break;
          }
        }
        const matchP = w.match(/^([a-zçğışöü]+)(diğ|dığ|duğ|düğ|dik|dık|duk|dük)(i|im|in|imiz|iniz|i|leri)?$/);
        if (matchP) {
          passiveMatch = matchP;
          break;
        }
      }

      if (!activeMatch && !passiveMatch) {
        return rule.feedback;
      }

      if (activeMatch) {
        const root = activeMatch[1];
        const suffix = activeMatch[2];
        
        if (!isValidVerbBase(root)) {
          return `Gabim: Rrënja e foljes '${root}' ka gabim të harmonisë vokalike.`;
        }

        const expected = getVowelHarmony2(root);
        const expectedSuffix = `${expected}n`;

        if (suffix !== expectedSuffix) {
          return `Gabim Harmonie te pjesorja: Rrënja '${root}' duhet të ketë prapashtesën '-${expectedSuffix}' → '${root}${expectedSuffix}' (ju shkruat '${root}${suffix}').`;
        }
      }

      if (passiveMatch) {
        const root = passiveMatch[1];
        const suffix = passiveMatch[2];

        if (!isValidVerbBase(root)) {
          return `Gabim: Rrënja e foljes '${root}' ka gabim të harmonisë vokalike.`;
        }

        const expectedVowel = getVowelHarmony4(root);
        const lastChar = root.slice(-1);
        const isVoiceless = 'çfhkpsştÇFHKPSŞT'.includes(lastChar);
        const expectedD = isVoiceless ? 't' : 'd';
        const expectedSuffixStart = `${expectedD}${expectedVowel}`;
        
        if (!suffix.startsWith(expectedSuffixStart)) {
          return `Gabim Harmonie/Mutacioni: Pjesorja pasive për '${root}' kërkon prapashtesën që fillon me '${expectedSuffixStart}' (p.sh., '${root}${expectedSuffixStart}ğ...'), por ju shkruat '${root}${suffix}'.`;
        }
      }
      return null;
    }
    case 'idiom_presence': {
      if (!rule.idioms) return null;
      let foundIdiom = '';
      for (const idm of rule.idioms) {
        const matchAll = idm.keywords.every(kw => normalizedInput.includes(kw));
        if (matchAll) {
          foundIdiom = idm.name;
          break;
        }
      }
      if (!foundIdiom) {
        return rule.feedback;
      }
      return null;
    }
    case 'gittim_check': {
      const hasGittim = /git(ti|tı|tü|tu)[mndk]?/.test(normalizedInput);
      if (hasGittim) {
        const match = normalizedInput.match(/git(ti|tı|tü|tu)([mndk]?)/);
        if (match && match[2] !== 'm') {
          return `Keni shkruar foljen 'gitmek' në vetën e gabuar. Për 'shkova' duhet veta e parë njëjës: 'gittim' (jo 'gitti' apo 'gittin').`;
        } else if (match && match[1] !== 'ti') {
          return "Gabim Harmonie: Zgjedhimi i shkuar i 'gitmek' duhet të jetë 'gittim' (jo 'gittım' ose 'gittum').";
        }
      } else if (normalizedInput.includes('gitmek') || normalizedInput.includes('git')) {
        return "Folja 'gitmek' duhet të zgjedhohet në kohën e shkuar vetanake: 'gittim'.";
      } else {
        return "Mungon folja 'shkova' (gittim) në fjali.";
      }
      return null;
    }
    case 'okudum_check': {
      const hasOkudum = /oku(du|dı|di|dü)[mndk]?/.test(normalizedInput);
      if (hasOkudum) {
        const match = normalizedInput.match(/oku(du|dı|di|dü)([mndk]?)/);
        if (match && match[2] !== 'm') {
          return `Keni shkruar foljen 'okumak' në vetën e gabuar. Për 'lexova' duhet 'okudum'.`;
        } else if (match && match[1] !== 'du') {
          return "Gabim Harmonie: Zgjedhimi i shkuar i 'okumak' është 'okudum' (pas zanores 'u' vjen 'u', jo 'okudim' apo 'okudım').";
        }
      } else if (normalizedInput.includes('okumak') || normalizedInput.includes('oku')) {
        return "Folja 'okumak' duhet të zgjedhohet në kohën e shkuar: 'okudum'.";
      } else {
        return "Mungon folja 'lexova' (okudum) në fjali.";
      }
      return null;
    }
    case 'adverbial_ip_harmony': {
      const words = normalizedInput.split(' ');
      let ipMatch = null;
      let verbRoot = '';
      let ipSuffix = '';

      for (const w of words) {
        const match = w.match(/^([a-zçğışöü]+)(yıp|yip|yup|yüp|ıp|ip|up|üp)$/);
        if (match) {
          ipMatch = match;
          verbRoot = match[1];
          ipSuffix = match[2];
          break;
        }
      }

      if (!ipMatch) {
        return rule.feedback;
      }

      if (verbRoot === 'git' || verbRoot === 'et') {
        const voicedRoot = verbRoot === 'git' ? 'gid' : 'ed';
        return `Gabim Zbutjeje: Bashkëtingëllorja 't' e foljes '${verbRoot}' duhet të zbutet në 'd' sepse pasohet nga një zanore → '${voicedRoot}${ipSuffix}' (jo '${verbRoot}${ipSuffix}').`;
      }

      if (!isValidVerbBase(verbRoot)) {
        return `Gabim: Rrënja e foljes '${verbRoot}' ka gabim të harmonisë vokalike.`;
      }

      const lastChar = verbRoot.slice(-1);
      const endsWithVowel = new Set(['a', 'ı', 'o', 'u', 'e', 'i', 'ö', 'ü']).has(lastChar);
      const expectedVowel = getVowelHarmony4(verbRoot);
      const expectedSuffix = endsWithVowel ? `y${expectedVowel}p` : `${expectedVowel}p`;

      if (ipSuffix !== expectedSuffix) {
        return `Gabim Harmonie: Rrënja '${verbRoot}' kërkon prapashtesën '-${expectedSuffix}', por ju keni shkruar '-${ipSuffix}' → '${verbRoot}${expectedSuffix}' (jo '${verbRoot}${ipSuffix}').`;
      }
      return null;
    }
    case 'since_harmony': {
      const match = normalizedInput.match(/\b([a-zçğışöü]+)(d|t)(ı|i|u|ü)ğ(ı|i|u|ü)(m|n|miz|niz)?(dan|den)\s+beri\b/);
      if (!match) {
        return null;
      }

      const base = match[1];
      const dt = match[2];
      const v1 = match[3];
      const v2 = match[4];
      const danden = match[6];

      if (!isValidVerbBase(base)) {
        return `Gabim: Rrënja e foljes '${base}' ka gabim të harmonisë vokalike.`;
      }

      const lastChar = base.slice(-1);
      const isVoiceless = 'çfhkpsştÇFHKPSŞT'.includes(lastChar);
      const expectedDt = isVoiceless ? 't' : 'd';
      if (dt !== expectedDt) {
        return `Gabim Mutacioni: Rrënja '${base}' përfundon me bashkëtingëllore ${isVoiceless ? 'të shurdhët' : 'të zëshme'}, prandaj prapashtesa duhet të fillojë me '${expectedDt}' (jo '${dt}').`;
      }

      const expectedV4 = getVowelHarmony4(base);
      if (v1 !== expectedV4 || v2 !== expectedV4) {
        return `Gabim Harmonie Vokalore: Rrënja '${base}' kërkon zanoren e harmonizuar 4-she '${expectedV4}' te prapashtesa (ju shkruat '${v1}' dhe '${v2}').`;
      }

      const expectedV2 = getVowelHarmony2(base);
      const expectedDanden = expectedV2 === 'a' ? 'dan' : 'den';
      if (danden !== expectedDanden) {
        return `Gabim Harmonie Vokalore: Rasa rrjedhore pas '${base}' duhet të jetë '-${expectedDanden}' (jo '-${danden}').`;
      }

      return null;
    }
    default:
      return null;
  }
}

// Evaluates a Turkish writing input offline using a generic validation rule engine
export function evaluateWriting(chapterId: number, input: string): EvaluationResult {
  const prompt = WRITING_PROMPTS[chapterId];
  if (!prompt) {
    return { status: 'error', feedback: 'Gabim: Ky kapitull nuk ka një detyrë shkrimi të konfiguruar.' };
  }

  const cleanInput = input.trim();
  const b1Chapters = [4, 22, 23, 24];
  const minLength = b1Chapters.includes(chapterId) ? 60 : 10;
  if (cleanInput.length < minLength) {
    return { 
      status: 'error', 
      feedback: `Teksti juaj është shumë i shkurtër. Ju lutemi shkruani të paktën ${minLength} karaktere për të lejuar kontrollin.` 
    };
  }

  const normalizedInput = normalizeText(cleanInput);

  // 1. Run the declarative validation rules if they exist
  if (prompt.validationRules && prompt.validationRules.length > 0) {
    const errors: string[] = [];
    for (const rule of prompt.validationRules) {
      const error = runRule(rule, normalizedInput);
      if (error) {
        errors.push(error);
      }
    }
    if (errors.length > 0) {
      return {
        status: 'error',
        feedback: `${prompt.type === 'translation' ? 'Përkthimi ka probleme gramatikore. Ju lutemi rregulloni:' : 'Prezantimi ka disa gabime gramatikore:'}\n${errors.map(e => `• ${e}`).join('\n')}`,
        suggestions: prompt.sampleAnswers
      };
    }
  }

  // 2. Perform fuzzy string matching for translation types
  if (prompt.type === 'translation' && prompt.sampleAnswers) {
    let bestMatchAnswer = '';
    let minDistance = 999;

    for (const sample of prompt.sampleAnswers) {
      const normalizedSample = normalizeText(sample);
      const dist = getLevenshteinDistance(normalizedInput, normalizedSample);
      if (dist < minDistance) {
        minDistance = dist;
        bestMatchAnswer = sample;
      }
    }

    // Perfect Match
    if (minDistance === 0) {
      return {
        status: 'success',
        feedback: 'Urime! Përkthimi juaj është krejtësisht i saktë dhe i përputhur me modelin.',
        matchedModelAnswer: bestMatchAnswer
      };
    }

    // Small Typo Match (Allow up to 3 edits depending on length)
    const allowedEdits = Math.min(3, Math.floor(bestMatchAnswer.length * 0.15) + 1);
    if (minDistance <= allowedEdits) {
      const typoExplanation = findTypoDetails(normalizedInput, normalizeText(bestMatchAnswer));
      return {
        status: 'typo',
        feedback: `Përkthimi është i kuptueshëm, por përmban gabime të vogla gërmëzimi (typos). ${typoExplanation}`,
        suggestions: [bestMatchAnswer],
        matchedModelAnswer: bestMatchAnswer
      };
    }

    // General Fallback for Translation failures
    return {
      status: 'error',
      feedback: 'Përkthimi juaj ndryshon dukshëm nga fjalitë model. Sigurohuni që keni përdorur fjalët dhe gramatikën e saktë sipas udhëzimeve.',
      suggestions: prompt.sampleAnswers
    };
  }

  // 3. For guided types (which passed validationRules), return success feedback depending on chapter or generic
  let successFeedback = 'Shkëlqyeshëm! Detyra e shkrimit u përfundua me sukses.';
  if (chapterId === 1) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar një përshëndetje të saktë, keni prezantuar emrin tuaj dhe keni vendosur prapashtesat e duhura të harmonizuara për origjinën.';
  } else if (chapterId === 3) {
    successFeedback = 'Shkëlqyeshëm! Keni përshkruar fundjavën tuaj duke përdorur saktë kohën e shkuar të drejtpërdrejtë dhe treguesit kohorë.';
  } else if (chapterId === 14) {
    successFeedback = 'Shkëlqyeshëm! Keni përshkruar saktë planet tuaja të së ardhshmes duke përdorur kohën e ardhshme dhe harmonizuar prapashtesat.';
  } else if (chapterId === 15) {
    successFeedback = 'Shkëlqyeshëm! Keni përshkruar saktë rutinën tuaj të përditshme duke përdorur kohën e gjerë dhe treguesit e frekuencës.';
  } else if (chapterId === 16) {
    successFeedback = 'Shkëlqyeshëm! Keni përshkruar saktë aftësitë tuaja duke përdorur foljen e mundësisë (Yeterlilik Fiili) në trajtën e duhur.';
  } else if (chapterId === 17) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar saktë për detyrimet ose nevojat tuaja duke përdorur mënyrën detyrore (Gereklilik Kipi) ose strukturat e nevojës.';
  } else if (chapterId === 18) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar saktë krahasimin duke përdorur fjalën \'daha\' dhe rasën rrjedhore (-dan/-den).';
  } else if (chapterId === 19) {
    successFeedback = 'Shkëlqyeshëm! Keni përshkruar saktë fëmijërinë dhe zakonet tuaja të kaluara duke përdorur kohën e shkuar të vazhdueshme.';
  } else if (chapterId === 20) {
    successFeedback = 'Shkëlqyeshëm! Keni përshkruar saktë veprimet dhe arsyet e ditës suaj duke përdorur saktë lidhëzat dhe zarf-foljet.';
  } else if (chapterId === 21) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar saktë përshëndetjen tuaj të parë në turqisht duke përdorur shkronjat dhe shqiptimin e duhur.';
  } else if (chapterId === 4) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar një paragraf duke përdorur saktë kohën e shkuar të vazhdueshme ose zarf-foljen \'-ken\' dhe lidhëzat përkatëse.';
  } else if (chapterId === 22) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar një përshkrim të saktë duke përdorur foljet reciproke në formën e duhur.';
  } else if (chapterId === 23) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar një paragraf të saktë duke përdorur strukturën kushtore ose dëshirore për të përshkruar rëndësinë e edukimit.';
  } else if (chapterId === 24) {
    successFeedback = 'Shkëlqyeshëm! Keni shkruar një paragraf të saktë duke përdorur prapashtesat e detyrimit dhe kohëzgjatjes për të përshkruar shtëpinë ose mësimin e gjuhës.';
  } else if (chapterId === 5) {
    successFeedback = 'Shkëlqyeshëm! Fjali kushtore e saktë me përdorim të rregullt të prapashtesës së kushtit (-se/-sa).';
  } else if (chapterId === 6) {
    successFeedback = 'Shkëlqyeshëm! Keni krijuar një fjali të saktë duke përdorur strukturën e pjesoreve (sıfat-fiil).';
  } else if (chapterId === 7) {
    successFeedback = 'Shkëlqyeshëm! Keni përdorur me sukses idiomën e kërkuar në fjalinë tuaj.';
  }

  return {
    status: 'success',
    feedback: successFeedback
  };
}
