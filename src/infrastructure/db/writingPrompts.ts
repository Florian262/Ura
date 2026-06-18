import type { WritingPrompt } from '../../core/harmony/writingValidation';

// Prompt Configurations for all chapters
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
  9: {
    chapterId: 9,
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
  3: {
    chapterId: 3,
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
  4: {
    chapterId: 4,
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
  5: {
    chapterId: 5,
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
  6: {
    chapterId: 6,
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
  7: {
    chapterId: 7,
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
  8: {
    chapterId: 8,
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
  10: {
    chapterId: 10,
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
  11: {
    chapterId: 11,
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
  12: {
    chapterId: 12,
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
  13: {
    chapterId: 13,
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
  14: {
    chapterId: 14,
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
  15: {
    chapterId: 15,
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
  16: {
    chapterId: 16,
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
  0: {
    chapterId: 0,
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
  17: {
    chapterId: 17,
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
        feedback: "Mungon një nga lidhëzat (p.sh., 'fakat', 'oysa', 'ancak', 'bununla birlikte')."
      }
    ]
  },
  18: {
    chapterId: 18,
    type: 'guided',
    promptAlbanian: "Shkruani një paragraf të shkurtër në turqisht (të paktën 60 karaktere) duke përshkruar një takim ose komunikim pune apo studimi me një mik ose koleg. Përdorni të paktën dy folje reciproke (si buluşmak, görüşmek, yazışmak, anlaşmak, paylaşmak).",
    grammarTipAlbanian: "Përdorni prapashtesën reciproke '-(I)ş' për të formuar folje si 'buluşmak', 'görüşmek', 'yazışmak', 'anlaşmak' ose 'paylaşmak' për to treguar veprime të ndërsjella ose të përbashkëta.",
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
  19: {
    chapterId: 19,
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
  20: {
    chapterId: 20,
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
  },
  21: {
    chapterId: 21,
    type: 'guided',
    promptAlbanian: "Shkruani një paragraf të shkurtër në turqisht (të paktën 60 karaktere) rreth një sfide ose qëllimi jetësor, duke treguar se si i kapërceni pengesat. Përdorni përemrin vetvetor 'kendi' (p.sh., kendim, kendisi) ose një folje vetvetore (si hazırlanmak, giyinmek, sevinmek) Edhe të paktën një strukturë detyrimi si '-mak zorunda kalmak' ose '-mak lazım'.",
    grammarTipAlbanian: "Përdorni përemrin 'kendi' të zgjedhuar për vetën përkatëse (p.sh., 'kendim' - unë vetë, 'kendimiz' - ne vetë) ose foljet vetvetore me prapashtesën '-n / -ın / -in / -un / -ün' (p.sh., 'hazırlanmak' - përgatitem, 'sevinmek' - gëzohem). Kombinoni këto me struktura detyrimi si 'çalışmak zorunda kaldım' (u detyrova të punoj) ose 'pes etmemek lazım' (nuk duhet të dorëzohemi).",
    sampleAnswers: [
      "Hayatta başarılı olmak için kendime güveniyorum. Engelleri aşmak için her gün çok çalışmak lazım.",
      "Zor zamanlarda pes etmemek ve kendi yolunu çizmek gerekir. Bazen çok sabretmek zorunda kalıyorum.",
      "Sınava hazırlanmak için kendime yeni bir plan yaptım. Başarılı olmak için bu kurallara uymak lazım."
    ],
    grammarLabel: "Vetvetorja & Zinxhiri i Detyrimit",
    validationRules: [
      {
        type: 'required_pattern',
        regex: '\\b(kendi|hazırlan|giyin|sevin|yıkan|taran|süslen|görün|bulun|korun)',
        feedback: "Gabim: Duhet të përdorni përemrin vetvetor 'kendi' (p.sh., kendim, kendi) ose të paktën një folje vetvetore (p.sh., hazırlanmak, giyinmek, sevinmek)."
      },
      {
        type: 'required_pattern',
        regex: '\\b[a-zçğışöü]+(mak|mek)\\s+(lazım|zorunda)',
        feedback: "Gabim: Duhet të përdorni të paktën një strukturë detyrimi si '-mak lazım' ose '-mak zorunda kalmak'."
      }
    ]
  },
  22: {
    chapterId: 22,
    type: 'guided',
    promptAlbanian: "Shkruani një paragraf të shkurtër në turqisht (të paktën 60 karaktere) rreth një filmi, libri ose raporti lajmesh. Përdorni të paktën dy folje në formën pasive (si yazılmak, yapılmak, çekilmek, yayınlanmak, izlenmek, seçilmek).",
    grammarTipAlbanian: "Foljet pasive në turqisht formohen me prapashtesat '-il' ose '-in' (p.sh., 'yazıldı' - u shkrua, 'yapıldı' - u bë, 'çekildi' - u xhirua, 'izlendi' - u ndoq/shikua, 'yayınlandı' - u transmetua). Përdorni të paktën dy folje në këtë formë.",
    sampleAnswers: [
      "Geçen yıl harika bir film çekildi ve televizyonda yayınlandı. Bu yapım çok beğenildi.",
      "Bu roman ünlü bir yazar tarafından yazıldı. Kitap çok izlenen bir film haline getirildi.",
      "Festivalde en iyi filmler seçildi ve ödüller kazanan sanatçılara törenle verildi."
    ],
    grammarLabel: "Trajta Pasive (-il / -in)",
    validationRules: [
      {
        type: 'required_pattern',
        regex: '(?:^|\\s)(yazıl|yapıl|çekil|yayınlan|izlen|seçil|bilin|okun|söylen|kazanıl|hazırlan|sunul)[a-zçğışöü]*\\s+.*(?:^|\\s)(yazıl|yapıl|çekil|yayınlan|izlen|seçil|bilin|okun|söylen|kazanıl|hazırlan|sunul)[a-zçğışöü]*(?=$|[\\s.,!?])',
        feedback: "Gabim: Duhet të përdorni të paktën dy folje në formën pasive (p.sh., 'yazıldı', 'yapıldı', 'çekildi', 'yayınlandı', 'izlendi', 'seçildi')."
      }
    ]
  },
  23: {
    chapterId: 23,
    type: 'guided',
    promptAlbanian: "Shkruani një paragraf të shkurtër në turqisht (të paktën 60 karaktere) rreth një festimi, feste ose tradite dasme që keni marrë pjesë ose e njihni. Përdorni të paktën dy pjesore relative (si -an/-en, -dığım/-diğim, ose -acağımı/-eceğimi).",
    grammarTipAlbanian: "Pjesoret relative (Sıfat-Fiil) në turqisht formohen me prapashtesat '-an/-en' (p.sh., 'katılan' - që merr pjesë), '-dık' (p.sh., 'katıldığım' - ku unë morra pjesë), ose '-acak' (p.sh., 'yapacağımız' - që ne do të bëjmë). Përdorni të paktën dy të tilla.",
    sampleAnswers: [
      "Dün katıldığım düğün çok güzeldi. Evlenen çift çok mutlu görünüyordu.",
      "Gelecek hafta yapacağımız kutlama için hazırlıklar tamamlandı. Gelen misafirler çok eğlenecek.",
      "En sevdiğim bayram Cumhuriyet Bayramı'dır. Bu özel günde yapılan törenleri izlemeyi çok severim."
    ],
    grammarLabel: "Pjesoret Relative (Sıfat-Fiiller)",
    validationRules: [
      {
        type: 'required_pattern',
        regex: '(?:^|\\s)(?:katıl|evlen|yapıl|düzenlen|gel|git|oyna|giy|izle|oku|yap|ol|gör|sev|kutla|eğlen|başla|söyle|bağla|ver|ye|çek|yaşa|hatırla|sağla|tüket|düzenle|paylaş|hazırla)(?:an|en|yan|yen|dığ|diğ|duğ|düğ|tığ|tiğ|tuğ|tüğ|acağ|eceğ|yacağ|yeceğ)[a-zçğışöü]*\\s+.*(?:^|\\s)(?:katıl|evlen|yapıl|düzenlen|gel|git|oyna|giy|izle|oku|yap|ol|gör|sev|kutla|eğlen|başla|söyle|bağla|ver|ye|çek|yaşa|hatırla|sağla|tüket|düzenle|paylaş|hazırla)(?:an|en|yan|yen|dığ|diğ|duğ|düğ|tığ|tiğ|tuğ|tüğ|acağ|eceğ|yacağ|yeceğ)[a-zçğışöü]*(?=$|[\\s.,!?])',
        feedback: "Gabim: Duhet të përdorni të paktën dy pjesore relative (p.sh., 'katılan', 'gittiğim', 'yapacağımız', 'evlenen')."
      }
    ]
  },
  24: {
    chapterId: 24,
    type: 'guided',
    promptAlbanian: "Shkruani një paragraf të shkurtër në turqisht (të paktën 60 karaktere) rreth jetës suaj (autobiografi) ose rreth përvojës suaj të mësimit të turqishtes. Përdorni të paktën një pjesore relative (si -an/-en, -dığım/-diğim) DHE të paktën një formë pasive, vetvetore (si kendi, hazırlanmak, yazılmak) ose kushtore (-se/-seydi).",
    grammarTipAlbanian: "Ky është një kapitull përmbledhës. Ju duhet të përdorni të paktën një pjesore relative (p.sh., 'öğrendiğim Türkçe' - turqishtja që kam mësuar, 'çalışan insan' - njeriu që punon) dhe të paktën një formë tjetër si përemri vetvetor 'kendi' / folje pasive (p.sh., 'hazırlandım', 'yazıldı') ose kushtore (p.sh., 'çalışırsam' - nëse punoj, 'öğrenseydim' - sikur të kisha mësuar).",
    sampleAnswers: [
      "Benim yazdığım otobiyografi çok ilginçti çünkü kendi hayatımı ve başarılarımı anlattım. Eğer çalışırsam Türkçe'yi daha iyi konuşacağım.",
      "Türkçe öğrenmek için başladığım bu yolculukta kendimi çok geliştirdim. Kurs boyunca çok güzel şeyler öğrendiğimi düşünüyorum."
    ],
    grammarLabel: "Përmbledhje B1 & Autoportreti",
    validationRules: [
      {
        type: 'required_pattern',
        regex: '(?:^|\\s)(?:katıl|evlen|yapıl|düzenlen|gel|git|oyna|giy|izle|oku|yap|ol|gör|sev|kutla|eğlen|başla|söyle|bağla|ver|ye|çek|yaşa|hatırla|sağla|tüket|düzenle|paylaş|hazırla|çalış|başar|öğren)(?:an|en|yan|yen|dığ|diğ|duğ|düğ|tığ|tiğ|tuğ|tüğ|acağ|eceğ|yacağ|yeceğ)[a-zçğışöü]*(?=$|[\\s.,!?])',
        feedback: "Gabim: Duhet të përdorni të paktën një pjesore relative (p.sh., 'öğrendiğim', 'başardığım', 'giden', 'yapan')."
      },
      {
        type: 'required_pattern',
        regex: '(?:^|\\s)(?:kendi|yazıl|yapıl|yayınlan|seçil|izlen|giyin|hazırlan|sevin|okun|bilin|denil)[a-zçğışöü]*(?=$|[\\s.,!?])|(?:^|\\s)[a-zçğışöü]+s(?:a|e)(?:m|n|k|niz|ler|yd[ıi][a-zçğışöü]*)?(?=$|[\\s.,!?])',
        feedback: "Gabim: Duhet të përdorni të paktën një përemër vetvetor ('kendi'), folje pasive/vetvetore (p.sh., 'hazırlanmak', 'yazılmak'), ose një strukturë kushtore/dëshirore (p.sh., '-se', '-seydi')."
      }
    ]
  },
  25: {
    chapterId: 25,
    type: 'guided',
    promptAlbanian: "Shkruani një tekst përshkrues (80-120 fjalë) rreth një eksperience udhëtimi ose një vendi historik që keni vizituar ose dëshironi të vizitoni (p.sh., Kulla e Galatës ose Shtëpia e Shën Mërisë). Përdorni foljet vetvetore (p.sh., hazırlanmak, arınmak) ose reciproke (p.sh., karşılaşmak, kucaklaşmak) dhe të paktën një lidhëz shtuese (üstelik, bunun yanı sıra, dahası).",
    grammarTipAlbanian: "Sigurohuni që teksti të ndjekë strukturën me tre paragrafe (Giriş, Gelişme, Sonuç). Përdorni të paktën një folje vetvetore (p.sh., 'hazırlandım') ose reciproke (p.sh., 'karşılaştım') dhe të paktën një lidhëz shtuese si 'üstelik', 'bunun yanı sıra', ose 'dahası'.",
    sampleAnswers: [
      "İstanbul'a gittiğimde Galata Kulesi'ni ziyaret ettim. Ziyaretçiler orada tarihin derinlikleriyle karşılaşırlar. Üstelik kulenin tepesinden manzara harikadır. Bunun yanı sıra, seyahat hazırlığı yaparken kendimi çok heyecanlı hissettim. İnsanlar geçmişin izleriyle kucaklaşırlar; dahası, seyahat etmek insanı tazeler."
    ],
    grammarLabel: "Seyahat ve Keşif (Morfologjia B2)",
    validationRules: [
      {
        type: 'required_pattern',
        regex: 'üstelik|bunun yanı sıra|dahası',
        feedback: "Mungon një nga lidhëzat shtuese të kërkuara ('üstelik', 'bunun yanı sıra', ose 'dahası')."
      },
      {
        type: 'required_pattern',
        regex: 'karşılaş|kucaklaş|arın|bulun|hazırlan|buluş|görüş',
        feedback: "Mungon përdorimi i foljeve vetvetore ose reciproke të kërkuara (p.sh., 'karşılaşmak', 'kucaklaşmak', 'arınmak', 'bulunmak', 'hazırlanmak')."
      }
    ]
  },
  26: {
    chapterId: 26,
    type: 'guided',
    promptAlbanian: "Shkruani një tekst argumentues (80-120 fjalë) rreth çështjeve të mjedisit dhe rëndësisë së zhvillimit të qëndrueshëm (p.sh., ngrohja globale, burimet e rinovueshme ose detyrimet tona individuale). Përdorni nominalizimin me '-DIK' (p.sh., olduğunu, yaptığımızı, yöneldiğini) dhe fjalë kyçe të mjedisit si 'çevre', 'doğa', 'küresel ısınma' ose 'sürdürülebilirlik'.",
    grammarTipAlbanian: "Sigurohuni që teksti të ndjekë strukturën me tre paragrafe (Giriş, Gelişme, Sonuç). Përdorni nominalizimin me prapashtesën '-DIK' (p.sh., 'olduğunu', 'yaptığımızı', 'korumamız gerektiğini') për të shprehur fakte apo mendime, dhe përfshini fjalë kyçe nga fjalori i kapitullit.",
    sampleAnswers: [
      "Günümüzde küresel ısınmanın doğa üzerindeki yıkıcı etkilerini yakından hissediyoruz. Atmosferdeki karbondioksit miktarının arttığını bilmek hepimizi endişelendiriyor. Çevreyi korumak için acil önlemler alınması gerektiğini düşünüyorum. Birçok ülkenin yenilenebilir enerji kaynaklarına yöneldiğini görüyoruz. Bireysel olarak ise su tüketimini azaltmanın ve plastik kullanımını sınırlandırmanın çevreye olan borcumuz olduğunu unutmamalıyız. Doğayı korumanın gelecek nesillere daha yaşanabilir bir dünya bırakmanın tek yolu olduğu gerçektir."
    ],
    grammarLabel: "Çevre ve Sürdürülebilirlik (Nominalizimi -DIK)",
    validationRules: [
      {
        type: 'required_pattern',
        regex: '[a-zçğışöü]+(?:dığ|diğ|duğ|düğ|tığ|tiğ|tuğ|tüğ|dık|dik|duk|dük|tık|tik|tuk|tük)[a-zçğışöü]*',
        feedback: "Mungon përdorimi i nominalizimit me prapashtesën '-DIK' (p.sh., 'olduğunu', 'yaptığımızı', 'yöneldiğini')."
      },
      {
        type: 'required_pattern',
        regex: 'çevre|doğa|küresel|ısınma|sürdürülebilirlik|yenilenebilir|tüketim',
        feedback: "Mungon përdorimi i fjalëve kyçe të mjedisit (p.sh., 'çevre', 'doğa', 'küresel ısınma', 'sürdürülebilirlik')."
      }
    ]
  }
};
