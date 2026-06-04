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
  category: 'emër' | 'folje' | 'mbiemër' | 'ndajfolje' | 'përemër' | 'lidhëz' | 'pasthirrmë' | 'shprehje';
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

import { ALL_UNIFIED_LESSONS } from './lessons';

// Global Static Seed Data representing an offline SQL-like database mapped dynamically from the blueprints
export const SEED_CHAPTERS: Chapter[] = ALL_UNIFIED_LESSONS.map(l => ({
  id: l.id,
  level: l.level,
  order_index: l.orderIndex,
  title_albanian: l.title.albanian,
  title_turkish: l.title.turkish
}));

export const SEED_READING_BLOCKS: ReadingBlock[] = ALL_UNIFIED_LESSONS
  .filter(l => l.reading.content.length > 0)
  .map(l => ({
    id: l.id,
    chapter_id: l.id,
    layout_style: l.reading.layoutStyle,
    content_turkish: JSON.stringify(l.reading.content.map(c => ({ speaker: c.speaker, text: c.text }))),
    content_albanian: JSON.stringify(l.reading.content.map(c => ({ speaker: c.speaker, text: c.translation }))),
    audio_asset_stub: l.reading.audioAssetStub
  }));

export const SEED_READING_QUESTIONS: ReadingQuestion[] = ALL_UNIFIED_LESSONS.flatMap(l => 
  l.reading.questions.map((q, index) => ({
    id: l.id * 100 + index + 1,
    reading_block_id: l.id,
    question_turkish: q.questionTurkish,
    question_albanian: q.questionAlbanian,
    options: q.options,
    correct_index: q.correctIndex
  }))
);

export const SEED_VOCABULARY: Vocabulary[] = ALL_UNIFIED_LESSONS.flatMap(l => 
  l.vocabulary.map((v, index) => ({
    id: l.id * 1000 + index + 1,
    chapter_id: l.id,
    turkish_word: v.turkishWord,
    albanian_word: v.albanianWord,
    category: v.category,
    is_shared_balkan_word: v.isSharedBalkanWord ? 1 : 0,
    notes_albanian: v.notesAlbanian,
    audio_asset_stub: v.audioAssetStub
  }))
);

export const SEED_GRAMMAR_CARDS: GrammarCard[] = ALL_UNIFIED_LESSONS.flatMap(l => 
  l.grammar.map((g, index) => ({
    id: l.id * 100 + index + 1,
    chapter_id: l.id,
    step_order: index + 1,
    title_albanian: g.titleAlbanian,
    rule_concept_turkish: g.ruleConceptTurkish,
    explanation_albanian: g.explanationAlbanian,
    interactive_example_json: g.interactiveExample ? JSON.stringify(g.interactiveExample) : null
  }))
);

export const SEED_EXERCISES: Exercise[] = ALL_UNIFIED_LESSONS.flatMap(l => 
  l.exercises.map((e, index) => ({
    id: l.id * 100 + index + 1,
    chapter_id: l.id,
    exercise_type: e.type,
    prompt_albanian: e.promptAlbanian,
    source_payload_json: JSON.stringify(e.payload),
    validation_target_json: JSON.stringify(e.validation)
  }))
);
