// Relational database types matching the SQL schemas

export interface Chapter {
  id: number;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  order_index: number;
  title_albanian: string;
  title_turkish: string;
}

export interface ReadingBlock {
  id: number;
  chapter_id: number;
  layout_style: 'dialogue' | 'narrative' | 'blog_post';
  content_turkish: string; // JSON string of dialogue items or single block of text
  content_albanian: string; // JSON string of dialogue items or single block of text
  audio_asset_stub: string | null;
}

export interface ReadingQuestion {
  id: number;
  reading_block_id: number;
  question_turkish: string;
  question_albanian: string;
  options: string[]; // Decoded JSON
  correct_index: number;
}

export interface Vocabulary {
  id: number;
  chapter_id: number;
  turkish_word: string;
  albanian_word: string;
  is_shared_balkan_word: number; // 0 or 1
  notes_albanian: string | null;
  audio_asset_stub: string | null;
}

export interface GrammarCard {
  id: number;
  chapter_id: number;
  step_order: number;
  title_albanian: string;
  rule_concept_turkish: string;
  explanation_albanian: string;
  interactive_example_json: string | null; // e.g. {"root": "kitap", "strategy": "plural"}
}

export interface Exercise {
  id: number;
  chapter_id: number;
  exercise_type: 'MULTIPLE_CHOICE' | 'WORD_SORT' | 'SUFFIX_BUILDER';
  prompt_albanian: string;
  source_payload_json: string; // Dynamic based on exercise type
  validation_target_json: string; // Solution target
}

// Global Static Seed Data representing an offline SQL-like database
export const SEED_CHAPTERS: Chapter[] = [
  { id: 1, level: 'A1', order_index: 1, title_albanian: 'Përshëndetjet & Shumësi', title_turkish: 'Tanışma ve Çoğul Eki' },
  { id: 2, level: 'A1', order_index: 2, title_albanian: 'Ku është? (Rasa Vendore)', title_turkish: 'Nerede? (Bulunma Durumu)' },
  { id: 3, level: 'A2', order_index: 1, title_albanian: 'Koha e Shkuar e Drejtpërdrejtë', title_turkish: 'Belirli Geçmiş Zaman (-dı)' },
  { id: 4, level: 'B1', order_index: 1, title_albanian: 'Mënyra Habitore (E shkuara e pacaktuar)', title_turkish: 'Belirsiz Geçmiş Zaman (-miş)' },
  { id: 5, level: 'B2', order_index: 1, title_albanian: 'Fjalia Kushtore', title_turkish: 'Dilek-Şart Kipi (-se)' },
  { id: 6, level: 'C1', order_index: 1, title_albanian: 'Pjesoret & Strukturat Letrare', title_turkish: 'Sıfat-Fiiller (Anası mezar dikecekmiş)' },
  { id: 7, level: 'C2', order_index: 1, title_albanian: 'Idiomat & Shprehjet e Urta Balkanike', title_turkish: 'Deyimler ve Ortak Balkan Atasözleri' }
];

export const SEED_READING_BLOCKS: ReadingBlock[] = [
  {
    id: 1,
    chapter_id: 1,
    layout_style: 'dialogue',
    // Dialogue represented as JSON arrays for structured visual layout
    content_turkish: JSON.stringify([
      { speaker: 'Ahmet', text: 'Merhaba! Benim adım Ahmet. Senin adın ne?' },
      { speaker: 'Valbona', text: 'Merhaba Ahmet! Benim adım Valbona.' },
      { speaker: 'Ahmet', text: 'Memnun oldum Valbona. Nasılsın?' },
      { speaker: 'Valbona', text: 'Ben de memnun oldum. İyiyim, teşekkür ederim. Sen nasılsın?' },
      { speaker: 'Ahmet', text: 'Teşekkürler, ben de iyiyim. Nerelisin?' },
      { speaker: 'Valbona', text: 'Arnavutum, Tiranlıyım. Sen nerelisin?' },
      { speaker: 'Ahmet', text: 'Ben Türküm, İstanbulluyum. Görüşmek üzere!' },
      { speaker: 'Valbona', text: 'Görüşürüz! Kendine iyi bak.' }
    ]),
    content_albanian: JSON.stringify([
      { speaker: 'Ahmet', text: 'Tungjatjeta! Emri im është Ahmet. Si është emri yt?' },
      { speaker: 'Valbona', text: 'Tungjatjeta Ahmet! Emri im është Valbona.' },
      { speaker: 'Ahmet', text: 'Kënaqem që u njohëm Valbona. Si je?' },
      { speaker: 'Valbona', text: 'Edhe unë kënaqem që u njohëm. Jam mirë, faleminderit. Po ti si je?' },
      { speaker: 'Ahmet', text: 'Faleminderit, edhe unë jam mirë. Nga je?' },
      { speaker: 'Valbona', text: 'Jam shqiptare, jam nga Tirana. Po ti nga je?' },
      { speaker: 'Ahmet', text: 'Jam turk, jam nga Stambolli. Shihemi së shpejti!' },
      { speaker: 'Valbona', text: 'Mirupafshim! Kujdesu për veten.' }
    ]),
    audio_asset_stub: 'audio/chapter1_reading.mp3'
  }
];

export const SEED_READING_QUESTIONS: ReadingQuestion[] = [
  {
    id: 1,
    reading_block_id: 1,
    question_turkish: 'Valbona nerelidir ve aslen kimdir?',
    question_albanian: 'Nga është Valbona dhe kush është ajo nga kombësia?',
    options: [
      'Valbona İstanbulludur ve Türktür.',
      'Valbona Tiranlıdır ve Arnavuttur.',
      'Valbona Kosovalıdır ve Almandır.',
      'Valbona İzmirli ve Yunanlıdır.'
    ],
    correct_index: 1
  },
  {
    id: 2,
    reading_block_id: 1,
    question_turkish: 'Ahmet nereden gelmektedir?',
    question_albanian: 'Nga vjen Ahmeti?',
    options: [
      'Ahmet Ankaralıdır.',
      'Ahmet Tiranlıdır.',
      'Ahmet İstanbulludur.',
      'Ahmet Üsküplüdür.'
    ],
    correct_index: 2
  }
];

export const SEED_VOCABULARY: Vocabulary[] = [
  { id: 1, chapter_id: 1, turkish_word: 'Merhaba', albanian_word: 'Tungjatjeta / Përshëndetje', is_shared_balkan_word: 0, notes_albanian: 'Përshëndetja më e përdorur në turqisht.', audio_asset_stub: 'audio/vocab_merhaba.mp3' },
  { id: 2, chapter_id: 1, turkish_word: 'Nasılsın?', albanian_word: 'Si je?', is_shared_balkan_word: 0, notes_albanian: 'Formë bisedore e pyetjes për gjendjen.', audio_asset_stub: 'audio/vocab_nasilsin.mp3' },
  { id: 3, chapter_id: 1, turkish_word: 'Dollap', albanian_word: 'Dollap', is_shared_balkan_word: 1, notes_albanian: 'Fjalë e përbashkët Ballkanike. Huazim i drejtpërdrejtë nga turqishtja osmane dolap.', audio_asset_stub: 'audio/vocab_dollap.mp3' },
  { id: 4, chapter_id: 1, turkish_word: 'Xham', albanian_word: 'Xham', is_shared_balkan_word: 1, notes_albanian: 'Fjalë e përbashkët Ballkanike. Nga turqishtja cam.', audio_asset_stub: 'audio/vocab_xham.mp3' },
  { id: 5, chapter_id: 1, turkish_word: 'Çorap', albanian_word: 'Çorape', is_shared_balkan_word: 1, notes_albanian: 'Fjalë e përbashkët Ballkanike. Nga turqishtja çorap.', audio_asset_stub: 'audio/vocab_corap.mp3' },
  { id: 6, chapter_id: 1, turkish_word: 'Kuti', albanian_word: 'Kuti', is_shared_balkan_word: 1, notes_albanian: 'Fjalë e përbashkët Ballkanike. Nga turqishtja kutu.', audio_asset_stub: 'audio/vocab_kuti.mp3' },
  { id: 7, chapter_id: 1, turkish_word: 'Bela', albanian_word: 'Bela (telash)', is_shared_balkan_word: 1, notes_albanian: 'Shpesh e përdorur në gjuhën shqipe popullore për telash ose fatkeqësi.', audio_asset_stub: 'audio/vocab_bela.mp3' },
  { id: 8, chapter_id: 1, turkish_word: 'Teşekkür ederim', albanian_word: 'Faleminderit (shumë)', is_shared_balkan_word: 0, notes_albanian: 'Shprehje formale e mirënjohjes.', audio_asset_stub: 'audio/vocab_tesekkur.mp3' }
];

export const SEED_GRAMMAR_CARDS: GrammarCard[] = [
  {
    id: 1,
    chapter_id: 1,
    step_order: 1,
    title_albanian: 'Hyrje: Shumësi në Turqisht',
    rule_concept_turkish: '-lar / -ler',
    explanation_albanian: 'Në shqip shumësi formohet me shumë prapashtesa të ndryshme (-t, -at, -ë, -et). Në turqisht, shumësi është jashtëzakonisht i thjeshtë dhe ka vetëm dy trajta: **-lar** dhe **-ler**. Përzgjedhja mes tyre varet plotësisht nga zanorja e fundit e fjalës (Harmonia Vokalore).',
    interactive_example_json: JSON.stringify({ root: 'okul', strategy: 'plural' })
  },
  {
    id: 2,
    chapter_id: 1,
    step_order: 2,
    title_albanian: 'Harmonia Vokalore 2-she',
    rule_concept_turkish: 'Zanore e Prapme vs. Zanore e Përparme',
    explanation_albanian: '1. **Zanoret e Prapme (a, ı, o, u):** Nëse zanorja e fundit e rrënjës është një nga këto, shtohet **-lar**.\n   *Shembull:* Kit**a**p $\\rightarrow$ Kitap**lar** (Libër -> Libra)\n\n2. **Zanoret e Përparme (e, i, ö, ü):** Nëse zanorja e fundit e rrënjës është një nga këto, shtohet **-ler**.\n   *Shembull:* Ev $\\rightarrow$ Ev**ler** (Shtëpi -> Shtëpi / Shtëpitë)\n\n*Vini Re:* Ndryshe nga shqipja, nuk ka ndryshim gjinie apo lakime të ndërlikuara!',
    interactive_example_json: JSON.stringify({ root: 'ev', strategy: 'plural' })
  },
  {
    id: 3,
    chapter_id: 1,
    step_order: 3,
    title_albanian: 'Lidhja Shqip-Turqisht: Prapashtesat',
    rule_concept_turkish: 'Krahasim Strukturor',
    explanation_albanian: 'Meqenëse si shqipja, ashtu edhe turqishtja janë gjuhë që përdorin prapashtesat për të ndryshme kuptime, struktura është shumë e ngjashme:\n\n*   **Shkollë** (rrënja) $\\rightarrow$ **Shkollat** (shumësi i shquar)\n*   **Okul** (rrënja) $\\rightarrow$ **Okullar** (shumësi turk)\n\nKjo e bën procesin e mësimit të prapashtesave të natyrshëm për shqipfolësit!',
    interactive_example_json: JSON.stringify({ root: 'saat', strategy: 'plural' })
  }
];

export const SEED_EXERCISES: Exercise[] = [
  {
    id: 1,
    chapter_id: 1,
    exercise_type: 'MULTIPLE_CHOICE',
    prompt_albanian: "Zgjidhni formën e saktë të shumësit për fjalën 'oda' (dhomë) bazuar në harmoninë vokalore:",
    source_payload_json: JSON.stringify({
      word: 'oda',
      options: ['odaler', 'odalar', 'odas', 'odaları']
    }),
    validation_target_json: JSON.stringify({
      correct_answer: 'odalar'
    })
  },
  {
    id: 2,
    chapter_id: 1,
    exercise_type: 'WORD_SORT',
    prompt_albanian: "Renditni fjalët e mëposhtme në turqisht për të formuar fjalinë 'Emri im është Valbona':",
    source_payload_json: JSON.stringify({
      words: ['adım', 'Valbona', 'Benim']
    }),
    validation_target_json: JSON.stringify({
      correct_sequence: ['Benim', 'adım', 'Valbona']
    })
  },
  {
    id: 3,
    chapter_id: 1,
    exercise_type: 'SUFFIX_BUILDER',
    prompt_albanian: "Tërhiqni dhe bashkoni prapashtesën e duhur të shumësit për rrënjën 'göz' (sy):",
    source_payload_json: JSON.stringify({
      root: 'göz',
      suffixes: ['lar', 'ler', 'dir', 'in']
    }),
    validation_target_json: JSON.stringify({
      correct_suffix: 'ler',
      result: 'gözler'
    })
  }
];
