export interface UnifiedLesson {
  id: number;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  orderIndex: number;
  title: {
    turkish: string;
    albanian: string;
  };
  reading: {
    layoutStyle: 'dialogue' | 'narrative' | 'blog_post';
    audioAssetStub: string | null;
    content: Array<{
      speaker?: string;
      text: string;
      translation: string;
    }>;
    questions: Array<{
      questionTurkish: string;
      questionAlbanian: string;
      options: string[];
      correctIndex: number;
    }>;
  };
  vocabulary: Array<{
    turkishWord: string;
    albanianWord: string;
    category: 'emër' | 'folje' | 'mbiemër' | 'ndajfolje' | 'përemër' | 'lidhëz' | 'pasthirrmë' | 'shprehje';
    isSharedBalkanWord: boolean;
    notesAlbanian: string | null;
    audioAssetStub: string | null;
  }>;
  grammar: Array<{
    titleAlbanian: string;
    ruleConceptTurkish: string;
    explanationAlbanian: string;
    interactiveExample: {
      root: string;
      strategy: 'plural' | 'habitore' | string;
      sampleWords?: Array<{
        turkish: string;
        albanian: string;
        isException?: boolean;
      }>;
    } | null;
  }>;
  exercises: Array<{
    type: 'MULTIPLE_CHOICE' | 'WORD_SORT' | 'SUFFIX_BUILDER' | 'CLOZE' | 'ERROR_CORRECTION' | 'CONNECTOR_MATCHING';
    promptAlbanian: string;
    payload: any;
    validation: any;
  }>;
}

/**
 * EMPTY Blue-Print Template for Creating New Chapters.
 * Duplicate this file, rename it (e.g., 'a1_chapter2.ts'), fill in the content,
 * and wire it inside 'index.ts' under 'ALL_UNIFIED_LESSONS'.
 */
export const lessonTemplate: UnifiedLesson = {
  id: 0, // Unique sequential numeric ID (e.g. 8)
  level: 'A1', // 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'
  orderIndex: 0, // Order of the chapter inside that specific level
  title: {
    turkish: '', // Turkish Chapter Title
    albanian: '' // Albanian Chapter Title Translation
  },
  reading: {
    layoutStyle: 'dialogue', // 'dialogue' | 'narrative' | 'blog_post'
    audioAssetStub: null, // Path to mp3 audio (e.g., 'audio/chapter2_reading.mp3' or null)
    content: [
      /* Example dialogue bubble line:
      { speaker: 'Ahmet', text: 'Merhaba!', translation: 'Tungjatjeta!' }
      */
      /* Example narrative prose line:
      { text: 'Bir gün Ahmet...', translation: 'Një ditë Ahmeti...' }
      */
    ],
    questions: [
      /* Example comprehension question:
      {
        questionTurkish: 'Soru nedir?',
        questionAlbanian: 'Çfarë është pyetja?',
        options: ['Opsioni A', 'Opsioni B', 'Opsioni C', 'Opsioni D'],
        correctIndex: 0 // Index of the correct option (0-indexed)
      }
      */
    ]
  },
  vocabulary: [
    /* Example vocabulary word card:
    {
      turkishWord: 'Kalem',
      albanianWord: 'Laps / Stilograf',
      isSharedBalkanWord: false,
      notesAlbanian: 'Huazuar nga arabishtja.',
      audioAssetStub: null
    }
    */
  ],
  grammar: [
    /* Example grammar concept card:
    {
      titleAlbanian: 'Rregulla: Koha e Tashme',
      ruleConceptTurkish: 'Şimdiki Zaman (-iyor)',
      explanationAlbanian: 'Koha e tashme formohet me prapashtesën...',
      interactiveExample: {
        root: 'oku',
        strategy: 'present_tense', // Plural, Present Tense, etc.
        sampleWords: [
          { turkish: 'gel', albanian: 'vjen', isException: false }
        ]
      } // Or set to null if there is no interactive harmonizer tool on this card
    }
    */
  ],
  exercises: [
    /* Example Exercise A (Multiple Choice):
    {
      type: 'MULTIPLE_CHOICE',
      promptAlbanian: 'Zgjidhni formën e duhur...',
      payload: {
        word: 'kitap',
        options: ['kitaplar', 'kitapler']
      },
      validation: {
        correct_answer: 'kitaplar',
        msg_success: 'Saktë!',
        msg_failure: 'Gabim!'
      }
    }
    */
    /* Example Exercise B (Word Sorting):
    {
      type: 'WORD_SORT',
      promptAlbanian: 'Renditni fjalët për të ndërtuar fjalinë...',
      payload: {
        words: ['adım', 'Ahmet', 'Benim']
      },
      validation: {
        correct_sequence: ['Benim', 'adım', 'Ahmet'],
        msg_success: 'Saktë!',
        msg_failure: 'Gabim!'
      }
    }
    */
    /* Example Exercise C (Suffix Builder):
    {
      type: 'SUFFIX_BUILDER',
      promptAlbanian: 'Bashkoni prapashtesën e duhur...',
      payload: {
        root: 'ev',
        suffixes: ['lar', 'ler']
      },
      validation: {
        correct_suffix: 'ler',
        result: 'evler',
        msg_success: 'Saktë!',
        msg_failure: 'Gabim!'
      }
    }
    */
  ]
};
