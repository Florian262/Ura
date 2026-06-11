import type { UnifiedLesson } from './a1_chapter1';

export const a1Chapter5: UnifiedLesson = {
  id: 10,
  level: 'A1',
  orderIndex: 5,
  title: {
    turkish: 'Yönler ve Hareketler',
    albanian: 'Drejtimet dhe Lëvizjet'
  },
  reading: {
    layoutStyle: 'dialogue',
    audioAssetStub: 'audio/chapter5_reading.wav',
    content: [
      { speaker: 'Valbona', text: 'Ahmet, bugün nereye gidiyorsun?', translation: 'Ahmet, ku po shkon sot?' },
      { speaker: 'Ahmet', text: 'Bugün kütüphaneye gidiyorum. Oradan da markete geçeceğim. Sen nereye gidiyorsun?', translation: 'Sot po shkoj në bibliotekë. Prej aty do të kaloj në market. Po ti ku po shkon?' },
      { speaker: 'Valbona', text: 'Ben de evden çıkıyorum, üniversiteye gidiyorum.', translation: 'Edhe unë po dal nga shtëpia, po shkoj në universitet.' },
      { speaker: 'Ahmet', text: 'Harika! Akşam sinemaya gidelim mi?', translation: 'E mrekullueshme! A shkojmë në kinema në mbrëmje?' },
      { speaker: 'Valbona', text: 'Evet, çok iyi fikir. Sinemada görüşürüz!', translation: 'Po, ide shumë e mirë. Shihemi në kinema!' }
    ],
    questions: [
      {
        questionTurkish: 'Ahmet bugün nereye gidiyor?',
        questionAlbanian: 'Ku po shkon Ahmeti sot?',
        options: [
          'Evde',
          'Kütüphaneye',
          'Ofise',
          'Parka'
        ],
        correctIndex: 1
      },
      {
        questionTurkish: 'Valbona nereden çıkıyor?',
        questionAlbanian: 'Nga po del Valbona?',
        options: [
          'Kütüphaneden',
          'Evden',
          'Üniversiteden',
          'Marketten'
        ],
        correctIndex: 1
      }
    ]
  },
  vocabulary: [
    {
      turkishWord: 'Kütüphane',
      albanianWord: 'Bibliotekë',
      category: 'emër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Fjalë me origjinë persiane dhe arabe (kütüp - libra, hane - shtëpi).',
      audioAssetStub: 'audio/vocab_kutuphane.mp3'
    },
    {
      turkishWord: 'Üniversite',
      albanianWord: 'Universitet',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë ndërkombëtare e përbashkët.',
      audioAssetStub: 'audio/vocab_universite.mp3'
    },
    {
      turkishWord: 'Sinema',
      albanianWord: 'Kinema',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Huazim ndërkombëtar.',
      audioAssetStub: 'audio/vocab_sinema.mp3'
    },
    {
      turkishWord: 'Market',
      albanianWord: 'Market / Ushqimore',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Përdoret në të dyja vendet për dyqane të vogla ushqimore.',
      audioAssetStub: 'audio/vocab_market.mp3'
    },
    {
      turkishWord: 'Park',
      albanianWord: 'Park',
      category: 'emër',
      isSharedBalkanWord: true,
      notesAlbanian: 'Fjalë e përbashkët ndërkombëtare.',
      audioAssetStub: 'audio/vocab_park.mp3'
    },
    {
      turkishWord: 'Nereye?',
      albanianWord: 'Ku? / Drejt ku?',
      category: 'përemër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Pyetje drejtimi e krijuar nga "nere" + prapashtesa dhanore "ye".',
      audioAssetStub: 'audio/vocab_nereye.mp3'
    },
    {
      turkishWord: 'Nereden?',
      albanianWord: 'Nga? / Prej ku?',
      category: 'përemër',
      isSharedBalkanWord: false,
      notesAlbanian: 'Pyetje prejardhjeje e krijuar nga "nere" + prapashtesa rrjedhore "den".',
      audioAssetStub: 'audio/vocab_nereden.mp3'
    },
    {
      turkishWord: 'Çıkmak',
      albanianWord: 'Dal / Largohem',
      category: 'folje',
      isSharedBalkanWord: false,
      notesAlbanian: 'Shoqërohet gjithmonë me rasën rrjedhore (-dan/-den) për të treguar vendin nga po dalim.',
      audioAssetStub: 'audio/vocab_cikmak.mp3'
    }
  ],
  grammar: [
    {
      titleAlbanian: 'Rasa Dhanore (Yönelme Durumu)',
      ruleConceptTurkish: '-a / -e (-ya / -ye)',
      explanationAlbanian: 'Rasa dhanore në turqisht tregon drejtim ose lëvizje drejt një lokacioni dhe i përgjigjet pyetjes **Nereye? (Drejt ku?)**. Ajo formohet me prapashtesat `-a` ose `-e` pas rrënjës së fjalës sipas harmonisë vokalore 2-she:\n\n1. **Zanoret e Prapme (a, ı, o, u):** marrin **-a** (p.sh., *Okul* -> *Okula* / në shkollë).\n2. **Zanoret e Përparme (e, i, ö, ü):** marrin **-e** (p.sh., *Ev* -> *Eve* / në shtëpi).\n\n*Vini Re:* Nëse rrënja mbaron me zanore, shtohet bashkëtingëllorja ndërmjetësuese **y** (p.sh., *Sinema* -> *Sinemaya* / në kinema).',
      interactiveExample: {
        root: 'okul',
        strategy: 'dative',
        sampleWords: [
          { turkish: 'okul', albanian: 'shkollë' },
          { turkish: 'ev', albanian: 'shtëpi' },
          { turkish: 'sinema', albanian: 'kinema' },
          { turkish: 'ofis', albanian: 'zyrë' },
          { turkish: 'sokak', albanian: 'rrugë' },
          { turkish: 'Tiran', albanian: 'Tiranë' }
        ]
      }
    },
    {
      titleAlbanian: 'Rasa Rrjedhore (Uzaklaşma Durumu)',
      ruleConceptTurkish: '-dan / -den (-tan / -ten)',
      explanationAlbanian: 'Rasa rrjedhore tregon prejardhje apo pikënisjen e një lëvizjeje (\'nga\', \'prej\') dhe i përgjigjet pyetjes **Nereden? (Prej ku?)**. Formohet duke shtuar:\n\n*   **-dan / -den** pas bashkëtingëlloreve të zëshme ose zanoreve (p.sh. *Ev* -> *Evden* / nga shtëpia, *Okul* -> *Okuldan* / nga shkolla).\n*   **-tan / -ten** pas bashkëtingëlloreve të shurdhëta sipas rregullit \'Fıstıkçı Şahap\' (p.sh. *Sınıf* -> *Sınıftan* / nga klasa, *Market* -> *Marketten* / nga marketi).',
      interactiveExample: null
    }
  ],
  exercises: [
    {
      type: 'MULTIPLE_CHOICE',
      promptAlbanian: "Zgjidhni formën e saktë të prapashtesës dhanore (dative) për fjalën 'sinema' (po shkoj në kinema):",
      payload: {
        word: 'sinema',
        options: ['sinemaa', 'sinemaya', 'sinemada', 'sinemaye']
      },
      validation: {
        correct_answer: 'sinemaya',
        msg_success: 'E saktë! Rrënja "sinema" mbaron me zanore, prandaj shtohet "y" ndërmjetësuese dhe zanorja e prapme "a": "sinemaya".',
        msg_failure: 'E pasaktë. Rishikoni përdorimin e shkronjës ndërmjetësuese "y" pas zanoreve.'
      }
    },
    {
      type: 'WORD_SORT',
      promptAlbanian: "Renditni fjalët për të formuar fjalinë 'Unë po shkoj nga shtëpia në shkollë':",
      payload: {
        words: ['gidiyorum', 'okula', 'Ben', 'evden']
      },
      validation: {
        correct_sequence: ['Ben', 'evden', 'okula', 'gidiyorum'],
        msg_success: 'E saktë! Subjekti vendoset në fillim, ndjekur nga lokacioni i nisjes (Ablative), destinacioni (Dative) dhe folja në fund.',
        msg_failure: 'E pasaktë. Mbani mend: Subjekti + Prej ku (Ablative) + Drejt ku (Dative) + Folja.'
      }
    },
    {
      type: 'SUFFIX_BUILDER',
      promptAlbanian: "Tërhiqni dhe bashkoni prapashtesën e duhur dhanore (dative) për fjalën 'Tiran' (kryeqyteti i Shqipërisë):",
      payload: {
        root: 'Tiran',
        suffixes: ["'a", "'e", "a", "e"]
      },
      validation: {
        correct_suffix: "'a",
        result: "Tiran'a",
        msg_success: 'E saktë! "Tiran" është emër i përveçëm, prandaj përdoret apostrofi dhe prapashtesa e harmonisë së prapme "-a" (për shkak të zanores "a" në rrënjë).',
        msg_failure: 'E pasaktë. Kujdes: Tiran është emër i përveçëm, prandaj nevojitet apostrofi para prapashtesës.'
      }
    }
  ],
  listening: {
    audioAssetStub: 'audio/chapter5_listening.wav',
    text: "Ardit: Afedersiniz, kütüphane nerede? Selin: Kütüphane çok yakın. Bu caddeden düz gidin, sonra sağa dönün. Kütüphane marketin karşısında. Ardit: Anladım. Peki, sinema da kütüphaneye yakın mı? Selin: Evet, sinema da kütüphanenin yanındadır. Kütüphaneden sola döneceksiniz. Ardit: Çok teşekkür ederim, iyi günler! Selin: Rica ederim, iyi günler!",
    translation: "Ardit: Më falni, ku është biblioteka? Selin: Biblioteka është shumë afër. Shkoni drejt në këtë rrugë, pastaj kthehuni djathtas. Biblioteka është përballë marketit. Ardit: E kuptova. Po kinemaja, a është gjithashtu afër bibliotekës? Selin: Po, edhe kinemaja është pranë bibliotekës. Do të ktheheni majtas nga biblioteka. Ardit: Faleminderit shumë, ditë të mirë! Selin: Ju lutem, ditë të mirë!",
    questions: [
      {
        questionTurkish: "Kütüphane nerededir?",
        questionAlbanian: "Ku është biblioteka?",
        options: ["Marketin karşısında", "Parkın içinde", "Sinemanın çok uzağında", "Evde"],
        correctIndex: 0
      },
      {
        questionTurkish: "Sinemaya gitmek için kütüphaneden nereye dönmek gerekir?",
        questionAlbanian: "Nga duhet të kthehesh nga biblioteka për të shkuar në kinema?",
        options: ["Sağa", "Sola", "Düz", "Geri"],
        correctIndex: 1
      }
    ]
  }
};
