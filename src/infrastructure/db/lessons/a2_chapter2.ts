import type { UnifiedLesson } from './a1_chapter1';

export const a2Chapter2: UnifiedLesson = {
  id: 14,
  level: 'A2',
  orderIndex: 2,
  title: {
    turkish: 'Tatil Planları ve Gelecek Zaman',
    albanian: 'Planet e Pushimeve & Koha e Ardhshme'
  },
  reading: {
    layoutStyle: 'dialogue',
    audioAssetStub: null,
    content: [
      { speaker: 'Ahmet', text: 'Gelecek yaz ne yapacaksın, Valbona? Bir planın var mı?', translation: 'Çfarë do të bësh verën e ardhshme, Valbona? A ke ndonjë plan?' },
      { speaker: 'Valbona', text: 'Evet, gelecek yaz Antalya\'ya gideceğim. Orada güzel bir otelde kalacağım.', translation: 'Po, verën e ardhshme do të shkoj në Antalia. Atje do të qëndroj në një hotel të bukur.' },
      { speaker: 'Ahmet', text: 'Harika! Ben de Bodrum\'a gideceğim. Deniz kenarında dinleneceğim ve güneşleneceğim.', translation: 'Mrekullueshëm! Edhe unë do të shkoj në Bodrum. Do të pushoj buzë detit dhe do të marr rreze dielli.' },
      { speaker: 'Valbona', text: 'Çok güzel! Tatilde bol bol yüzeceğim, yeni yerler gezeceğim ve kitap okuyacağım.', translation: 'Shumë bukur! Në pushime do të notoj shumë, do të vizitoj vende të reja dhe do të lexoj libra.' },
      { speaker: 'Ahmet', text: 'Uçak bileti aldın mı? Rezervasyon yaptın mı?', translation: 'A e bleve biletën e avionit? A bëre rezervim?' },
      { speaker: 'Valbona', text: 'Evet, her şeyi dün internetten hallettim. Çok heyecanlıyım!', translation: 'Po, i rregullova të gjitha dje nëpërmjet internetit. Jam shumë e emocionuar!' }
    ],
    questions: [
      {
        questionTurkish: 'Valbona gelecek yaz nereye gidecek?',
        questionAlbanian: 'Ku do të shkojë Valbona verën e ardhshme?',
        options: [
          'Bodrum\'a',
          'Tiran\'a',
          'Antalya\'ya',
          'İstanbul\'a'
        ],
        correctIndex: 2
      },
      {
        questionTurkish: 'Ahmet tatilde ne yapacak?',
        questionAlbanian: 'Çfarë do të bëjë Ahmeti në pushime?',
        options: [
          'Evde kalacak ve çalışacak.',
          'Bodrum\'a gidecek ve deniz kenarında dinlenecek.',
          'Valbona ile kütüphanede buluşacak.',
          'Uçak bileti satacak.'
        ],
        correctIndex: 1
      }
    ]
  },
  vocabulary: [
    {
      turkishWord: 'tatil',
      albanianWord: 'pushime',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Përdoret gjerësisht për pushimet shkollore ose verore.',
      audioAssetStub: null
    },
    {
      turkishWord: 'gelecek',
      albanianWord: 'e ardhmja / i ardhshëm',
      category: 'mbiemër',
      isSharedBalkanWord: false,
      notesAlbanian: 'P.sh., gelecek yaz = vera e ardhshme.',
      audioAssetStub: null
    },
    {
      turkishWord: 'otel',
      albanianWord: 'hotel',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: null,
      audioAssetStub: null
    },
    {
      turkishWord: 'bilet',
      albanianWord: 'biletë',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë ndërkombëtare e përdorur njësoj në të dyja gjuhët.',
      audioAssetStub: null
    },
    {
      turkishWord: 'rezervasyon',
      albanianWord: 'rezervim',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: null,
      audioAssetStub: null
    },
    {
      turkishWord: 'deniz',
      albanianWord: 'det',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: null,
      audioAssetStub: null
    },
    {
      turkishWord: 'uçak',
      albanianWord: 'aeroplan',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: null,
      audioAssetStub: null
    },
    {
      turkishWord: 'dinlenmek',
      albanianWord: 'pushoj',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Rrënja foljore: dinlen.',
      audioAssetStub: null
    },
    {
      turkishWord: 'girişim',
      albanianWord: 'ndërmarrje / plan',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: null,
      audioAssetStub: null
    },
    {
      turkishWord: 'yüzmek',
      albanianWord: 'notoj',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Rrënja foljore: yüz.',
      audioAssetStub: null
    },
    {
      turkishWord: 'gezmek',
      albanianWord: 'shëtis / vizitoj',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Rrënja foljore: gez.',
      audioAssetStub: null
    },
    {
      turkishWord: 'heyecanlı',
      albanianWord: 'i emocionuar / i ekzaltuar',
      category: 'mbiemër',
      isSharedBalkanWord: false,
      notesAlbanian: null,
      audioAssetStub: null
    }
  ],
  grammar: [
    {
      titleAlbanian: 'Koha e Ardhshme',
      ruleConceptTurkish: 'Gelecek Zaman (-acak / -ecek)',
      explanationAlbanian: 'Koha e ardhshme në turqisht përdoret për të shprehur veprime që pritet të ndodhin në të ardhmen. Ajo formohet duke shtuar prapashtesën `-acak` ose `-ecek` pas rrënjës së foljes.\n\nKujdesuni për rregullat e mëposhtme fonetike:\n\n1. **Harmonia Vokalore 2-she**: Përdorim `-acak` nëse zanorja e fundit e rrënjës është e prapme (`a, ı, o, u`) dhe `-ecek` nëse është e përparme (`e, i, ö, ü`).\n2. **Shkronja Ndërmjetësuese (y)**: Nëse rrënja e foljes përfundon me një zanore (p.sh. *oku*, *hazırla*), shtohet një `y` ndërmjetësuese para prapashtesës (`-yacak / -yecek`).\n3. **Zbutja e Bashkëtingëlloreve (k -> ğ)**: Për vetën e parë njëjës (ben) dhe vetën e parë shumës (biz), prapashtesa ndiqet nga një zanore, duke bërë që shkronja `k` të kthehet në `ğ` (p.sh. *gideceğim* - unë do të shkoj, *gideceğiz* - ne do të shkojmë).\n4. **Zbutja e Foljes (git/et)**: Rrënjët e foljeve *gitmek* (shkoj) dhe *etmek* (bëj) zbuten nga `t` në `d` para zanores së së ardhshmes (*gideceğim*, *edeceğim*).',
      interactiveExample: null
    },
    {
      titleAlbanian: 'Zgjidhimi Ndërveprues i së Ardhshmes',
      ruleConceptTurkish: 'Gelecek Zaman Çekimi (Ben)',
      explanationAlbanian: 'Përdorni mjetin ndërveprues më poshtë për të parë se si ndryshon prapashtesa e së ardhshmes për vetën e parë njëjës ("Ben" - Unë do të...) për rrënjë të ndryshme foljore turke.',
      interactiveExample: {
        root: 'oku',
        strategy: 'future_tense',
        sampleWords: [
          { turkish: 'oku', albanian: 'do të lexoj' },
          { turkish: 'git', albanian: 'do të shkoj' },
          { turkish: 'gel', albanian: 'do të vij' },
          { turkish: 'kal', albanian: 'do të qëndroj' },
          { turkish: 'yap', albanian: 'do të bëj' },
          { turkish: 'ye', albanian: 'do të haj' }
        ]
      }
    }
  ],
  exercises: [
    {
      type: 'MULTIPLE_CHOICE',
      promptAlbanian: "Zgjidhni formën e saktë të së ardhshmes për foljen 'oku' (lexoj) për vetën e parë njëjës (Ben - Unë do të lexoj):",
      payload: {
        word: 'oku',
        options: ['okuyacağım', 'okuyacağim', 'okueceğim', 'okuyacağım']
      },
      validation: {
        correct_answer: 'okuyacağım',
        msg_success: 'E saktë! Rrënja "oku" përfundon me zanore (prandaj merr ndërmjetësuesen "y"), zanorja e fundit është "u" (prandaj merr "-acak" që zbutet në "-acağım"). Rezultati: "okuyacağım".',
        msg_failure: 'E pasaktë. Rishikoni zanoren ndërmjetësuese dhe zbutjen e "k" -> "ğ" për "oku".'
      }
    },
    {
      type: 'WORD_SORT',
      promptAlbanian: "Renditni fjalët për të formuar fjalinë 'Verën e ardhshme do të shkoj në pushime':",
      payload: {
        words: ['gideceğim', 'Gelecek', 'tatile', 'yaz']
      },
      validation: {
        correct_sequence: ['Gelecek', 'yaz', 'tatile', 'gideceğim'],
        msg_success: 'E saktë! Koha e përcaktuar (Gelecek yaz) shkon në fillim, drejtimi (tatile) në mes, dhe folja e zgjedhuar (gideceğim) në fund të fjalisë.',
        msg_failure: 'E pasaktë. Renditja e saktë është: Gelecek + yaz + tatile + gideceğim.'
      }
    },
    {
      type: 'SUFFIX_BUILDER',
      promptAlbanian: "Tërhiqni dhe vendosni prapashtesën e duhur të së ardhshmes (vetëm prapashtesën e thjeshtë pa prapashtesën vetore) për foljen 'kal' (qëndroj):",
      payload: {
        root: 'kal',
        suffixes: ['acak', 'ecek', 'yacak', 'yecek']
      },
      validation: {
        correct_suffix: 'acak',
        result: 'kalacak',
        msg_success: 'E saktë! Folja "kal" përfundon me bashkëtingëllore dhe zanorja e fundit është "a" (zanore e prapme), prandaj merr prapashtesën "-acak". Rezultati: "kalacak" (do të qëndrojë).',
        msg_failure: 'E pasaktë. Rishikoni harmoninë 2-she për foljen "kal".'
      }
    },
    {
      type: 'SUFFIX_BUILDER',
      promptAlbanian: "Tërhiqni dhe vendosni prapashtesën e duhur të së ardhshmes për foljen 'gel' (vij) për vetën e parë shumës (biz - ne do të vijmë):",
      payload: {
        root: 'gel',
        suffixes: ['eceğiz', 'eceğizler', 'acağız', 'yeceğiz']
      },
      validation: {
        correct_suffix: 'eceğiz',
        result: 'geleceğiz',
        msg_success: 'E saktë! Rrënja "gel" ka zanoren "e" (përparme -> "-ecek") dhe përfundon me bashkëtingëllore. Për vetën e parë shumës "biz", zbutet "k" -> "ğ" duke formuar "-eceğiz". Rezultati: "geleceğiz".',
        msg_failure: 'E pasaktë. Kontrolloni harmoninë 2-she dhe prapashtesën vetore të së ardhshmes për "biz".'
      }
    },
    {
      type: 'MULTIPLE_CHOICE',
      promptAlbanian: "Zgjidhni formën e saktë të së ardhshmes për foljen 'yap' (bëj) për vetën e tretë njëjës (o - ai/ajo do të bëjë):",
      payload: {
        word: 'yap',
        options: ['yapacaksın', 'yapacak', 'yapecek', 'yapacağım']
      },
      validation: {
        correct_answer: 'yapacak',
        msg_success: 'E saktë! Veta e tretë njëjës nuk ka prapashtesë vetore. Rrënja "yap" merr vetëm prapashtesën e së ardhshmes "-acak" për shkak të harmonisë vokalore të prapme. Rezultati: "yapacak".',
        msg_failure: 'E pasaktë. Kontrolloni harmoninë vokalore dhe mos shtoni prapashtesa vetore për vetën e tretë.'
      }
    }
  ]
};
