import type { UnifiedLesson } from './a1_chapter1';

export const a2Chapter1: UnifiedLesson = {
  id: 3,
  level: 'A2',
  orderIndex: 1,
  title: {
    turkish: 'Geçmiş Zaman ve Hafta Sonu',
    albanian: 'Koha e Shkuar & Fundjava'
  },
  reading: {
    layoutStyle: 'blog_post',
    audioAssetStub: null,
    content: [
      { text: 'Dün çok güzel bir gündü. Sabah erken uyandım. Güzel bir kahvaltı hazırladım ve yedim.', translation: 'Dje ishte një ditë shumë e bukur. U zgjova herët në mëngjes. Përgatita një mëngjes të mirë dhe e hëngra.' },
      { text: 'Sonra arkadaşım Valbona\'yı aradım. Onunla kütüphanede buluştuk. Saatlerce Türkçe çalıştık.', translation: 'Pastaj thirra shoqen time Valbonën. U takuam me të në bibliotekë. Mësuam turqisht për orë të tëra.' },
      { text: 'Kütüphaneden sonra küçük bir kafeye gittik. Orada Türk kahvesi içtik ve sohbet ettik. Hava çok sıcaktı, bu yüzden dondurma da yedik.', translation: 'Pas bibliotekës shkuam në një kafe të vogël. Atje pimë kafe turke dhe biseduam. Koha ishte shumë e ngrohtë, prandaj hëngrëm edhe akullore.' },
      { text: 'Akşam eve döndüm, biraz kitap okudum. Çok yoruldum ve erken uyudum. Günümüz harika geçti!', translation: 'Mbrëmë u ktheva në shtëpi, lexova pak libër. U lodha shumë dhe fjeta herët. Dita jonë kaloi mrekullueshëm!' }
    ],
    questions: [
      {
        questionTurkish: 'Valbona ve arkadaşı nerede buluştular?',
        questionAlbanian: 'Ku u takuan Valbona dhe shoku i saj?',
        options: [
          'Okulda',
          'Kütüphanede',
          'Parkta',
          'Kafede'
        ],
        correctIndex: 1
      },
      {
        questionTurkish: 'Metne göre, yazar akşam ne yaptı?',
        questionAlbanian: 'Çfarë bëri autori në mbrëmje sipas tekstit?',
        options: [
          'Televizyon izledi ve uyudu.',
          'Valbona ile sinemaya gitti.',
          'Kitap okudu, yoruldu ve erken uyudu.',
          'Yemek pişirdi.'
        ],
        correctIndex: 2
      }
    ]
  },
  vocabulary: [
    {
      turkishWord: 'dün',
      albanianWord: 'dje',
      category: 'ndajfolje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Tregon kohën e shkuar.',
      audioAssetStub: null
    },
    {
      turkishWord: 'hafta sonu',
      albanianWord: 'fundjavë',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: null,
      audioAssetStub: null
    },
    {
      turkishWord: 'erken',
      albanianWord: 'herët',
      category: 'ndajfolje',
      isSharedBalkanWord: false,
      notesAlbanian: null,
      audioAssetStub: null
    },
    {
      turkishWord: 'geç',
      albanianWord: 'vonë',
      category: 'ndajfolje',
      isSharedBalkanWord: false,
      notesAlbanian: null,
      audioAssetStub: null
    },
    {
      turkishWord: 'uyanmak',
      albanianWord: 'zgjohem',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Rrënja foljore: uyan.',
      audioAssetStub: null
    },
    {
      turkishWord: 'hazırlamak',
      albanianWord: 'përgatis',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Rrënja foljore: hazırla.',
      audioAssetStub: null
    },
    {
      turkishWord: 'buluşmak',
      albanianWord: 'takohem',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Rrënja foljore: buluş.',
      audioAssetStub: null
    },
    {
      turkishWord: 'çalışmak',
      albanianWord: 'punoj / mësoj',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Rrënja foljore: çalış.',
      audioAssetStub: null
    },
    {
      turkishWord: 'dönmek',
      albanianWord: 'kthehem',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Rrënja foljore: dön.',
      audioAssetStub: null
    },
    {
      turkishWord: 'uyumak',
      albanianWord: 'fle',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Rrënja foljore: uyu.',
      audioAssetStub: null
    },
    {
      turkishWord: 'okumak',
      albanianWord: 'lexoj',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Rrënja foljore: oku.',
      audioAssetStub: null
    },
    {
      turkishWord: 'yorulmak',
      albanianWord: 'lodhem',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Rrënja foljore: yorul.',
      audioAssetStub: null
    },
    {
      turkishWord: 'kütüphane',
      albanianWord: 'bibliotekë',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Fjalë me origjinë persiane-arabe (Kütüp + Hane).',
      audioAssetStub: null
    },
    {
      turkishWord: 'sabah',
      albanianWord: 'mëngjes',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Huazim ballkanik (Sabah) në të folurën e përditshme.',
      audioAssetStub: null
    },
    {
      turkishWord: 'akşam',
      albanianWord: 'mbrëmje',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Huazim ballkanik (Aksham) në të folurën e përditshme.',
      audioAssetStub: null
    }
  ],
  grammar: [
    {
      titleAlbanian: 'Koha e Shkuar e Drejtpërdrejtë',
      ruleConceptTurkish: 'Belirli Geçmiş Zaman (-dı)',
      explanationAlbanian: 'Koha e shkuar e drejtpërdrejtë në turqisht përdoret për të shprehur veprime të kryera në të shkuarën që janë vëzhguar ose dëshmuar direkt nga folësi. Prapashtesa ndjek dy rregulla kryesore:\n\n1. **Harmoninë Vokalore 4-she**: zanorja e prapashtesës mund të jetë **ı, i, u, ü** në varësi të zanores së fundit të rrënjës.\n2. **Zëshmërinë e Bashkëtingëlloreve**: nëse rrënja përfundon me bashkëtingëllore të shurdhët (Fıstıkçı Şahap: **f, s, t, k, ç, ş, h, p**), prapashtesa fillon me **t** (p.sh. *gitti*, *yaptı*). Përndryshe fillon me **d** (p.sh. *geldi*, *okudu*).\n\nPrapashtesat vetore për kohën e shkuar janë:\n* **ben**: -m (gittim)\n* **sen**: -n (gittin)\n* **o**: (nuk ka prapashtesë) (gitti)\n* **biz**: -k (gittik)\n* **siz**: -niz/-nız/-nüz/-nuz (gittiniz)\n* **onlar**: -ler/-lar (gittiler)',
      interactiveExample: null
    },
    {
      titleAlbanian: 'Zgjidhimi i Foljeve në të Shkuarën',
      ruleConceptTurkish: 'Geçmiş Zaman Çekimi',
      explanationAlbanian: 'Përdorni mjetin ndërveprues më poshtë për të parë se si ndryshon prapashtesa e së shkuarës për rrënjë të ndryshme foljore turke sipas harmonisë zanore dhe mutacionit të bashkëtingëlloreve.',
      interactiveExample: {
        root: 'gel',
        strategy: 'past_tense',
        sampleWords: [
          { turkish: 'gel', albanian: 'erdhi' },
          { turkish: 'git', albanian: 'shkoi' },
          { turkish: 'oku', albanian: 'lexoi' },
          { turkish: 'yaz', albanian: 'shkroi' },
          { turkish: 'yap', albanian: 'bëri' },
          { turkish: 'gör', albanian: 'pa' }
        ]
      }
    }
  ],
  exercises: [
    {
      type: 'MULTIPLE_CHOICE',
      promptAlbanian: "Zgjidhni formën e saktë të kohës së shkuar për foljen 'yap' (bëri) për vetën e tretë njëjës (o):",
      payload: {
        word: 'yap',
        options: ['yapti', 'yapdı', 'yaptı', 'yapdi']
      },
      validation: {
        correct_answer: 'yaptı',
        msg_success: 'E saktë! Fjala "yap" përfundon me bashkëtingëlloren e shurdhët "p" (prandaj fillon me "t") dhe zanorja e fundit është "a" (prandaj merr "ı"). Rezultati: "yaptı".',
        msg_failure: 'E pasaktë. Rishikoni harmoninë 4-she dhe rregullin Fıstıkçı Şahap për fjalën "yap".'
      }
    },
    {
      type: 'WORD_SORT',
      promptAlbanian: "Renditni fjalët për të formuar fjalinë 'Dje shkova në shkollë':",
      payload: {
        words: ['gittim', 'Dün', 'okula']
      },
      validation: {
        correct_sequence: ['Dün', 'okula', 'gittim'],
        msg_success: 'E saktë! Në turqisht folja vendoset në fund të fjalisë (gittim) dhe treguesi i kohës (Dün) në fillim.',
        msg_failure: 'E pasaktë. Renditja e duhur është: Treguesi i kohës (Dün) + drejtimi (okula) + folja (gittim).'
      }
    },
    {
      type: 'SUFFIX_BUILDER',
      promptAlbanian: "Tërhiqni dhe bashkoni prapashtesën e duhur të së shkuarës për foljen 'oku' (lexoj) për vetën e tretë njëjës (o):",
      payload: {
        root: 'oku',
        suffixes: ['du', 'dü', 'tu', 'di']
      },
      validation: {
        correct_suffix: 'du',
        result: 'okudu',
        msg_success: 'E saktë! Zanorja e fundit e rrënjës "oku" është "u", prandaj prapashtesa e së shkuarës është "-du". Rezultati: "okudu" (lexoi).',
        msg_failure: 'E pasaktë. Kontrolloni harmoninë 4-she për zanoren "u".'
      }
    },
    {
      type: 'SUFFIX_BUILDER',
      promptAlbanian: "Tërhiqni dhe vendosni prapashtesën e duhur të së shkuarës për foljen 'git' (shkoj) për vetën e parë njëjës (Ben - Unë shkova):",
      payload: {
        root: 'git',
        suffixes: ['tim', 'dim', 'timi', 'dum']
      },
      validation: {
        correct_suffix: 'tim',
        result: 'gittim',
        msg_success: 'E saktë! Rrënja "git" përfundon me bashkëtingëllore të shurdhët "t" (prandaj fillon me "t") dhe zanorja e fundit është "i" (prandaj merr "i") + "m" për vetën e parë singular. Rezultati: "gittim".',
        msg_failure: 'E pasaktë. Kujdes zëshmërinë e shurdhët dhe prapashtesën vetore të vetës së parë për foljen "git".'
      }
    },
    {
      type: 'MULTIPLE_CHOICE',
      promptAlbanian: "Zgjidhni formën e saktë të së shkuarës për foljen 'buluş' (u takuam) për vetën e parë shumës (biz - ne u takuam):",
      payload: {
        word: 'buluş',
        options: ['buluştuk', 'buluşduk', 'buluştum', 'buluştunuz']
      },
      validation: {
        correct_answer: 'buluştuk',
        msg_success: 'E saktë! Rrënja "buluş" përfundon me "ş" (e shurdhët -> "t"), zanorja është "u" -> "-tuk". Rezultati: "buluştuk".',
        msg_failure: 'E pasaktë. Zgjedhimi për "biz" (ne) kërkon prapashtesën "-k" dhe zbatim të rregullës së bashkëtingëlloreve të shurdhëta.'
      }
    }
  ]
};
