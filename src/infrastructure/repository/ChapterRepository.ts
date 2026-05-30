import {
  SEED_CHAPTERS,
  SEED_READING_BLOCKS,
  SEED_READING_QUESTIONS,
  SEED_VOCABULARY,
  SEED_GRAMMAR_CARDS,
  SEED_EXERCISES
} from '../db/seedData';
import type {
  Chapter,
  ReadingBlock,
  ReadingQuestion,
  Vocabulary,
  GrammarCard,
  Exercise
} from '../db/seedData';


/**
 * Decoupled ChapterRepository to query the database.
 * This can be swapped for a real SQLCipher/SQLite WASM adapter in Tauri/Electron
 * without changing a single line of UI presentation code.
 */
export class ChapterRepository {
  /**
   * Fetch all chapters across all difficulty tiers (A1-C2).
   */
  static getAllChapters(): Chapter[] {
    return [...SEED_CHAPTERS].sort((a, b) => {
      // Sort by level A1 -> A2 -> B1 -> B2 -> C1 -> C2, then by order_index
      const levelOrder: Record<string, number> = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 6 };
      if (a.level !== b.level) {
        return levelOrder[a.level] - levelOrder[b.level];
      }
      return a.order_index - b.order_index;
    });
  }

  /**
   * Fetch a single chapter by ID.
   */
  static getChapterById(id: number): Chapter | null {
    const chapter = SEED_CHAPTERS.find(c => c.id === id);
    return chapter ? { ...chapter } : null;
  }

  /**
   * Fetch reading blocks associated with a chapter.
   */
  static getReadingBlockForChapter(chapterId: number): ReadingBlock | null {
    const block = SEED_READING_BLOCKS.find(rb => rb.chapter_id === chapterId);
    return block ? { ...block } : null;
  }

  /**
   * Fetch reading comprehension questions for a specific reading block.
   */
  static getReadingQuestions(readingBlockId: number): ReadingQuestion[] {
    return SEED_READING_QUESTIONS.filter(rq => rq.reading_block_id === readingBlockId)
      .map(rq => ({ ...rq }));
  }

  /**
   * Fetch vocabulary matrix records associated with a chapter.
   */
  static getVocabularyForChapter(chapterId: number): Vocabulary[] {
    return SEED_VOCABULARY.filter(v => v.chapter_id === chapterId)
      .map(v => ({ ...v }));
  }

  /**
   * Fetch grammar step cards associated with a chapter.
   */
  static getGrammarCardsForChapter(chapterId: number): GrammarCard[] {
    return SEED_GRAMMAR_CARDS.filter(gc => gc.chapter_id === chapterId)
      .map(gc => ({ ...gc }))
      .sort((a, b) => a.step_order - b.step_order);
  }

  /**
   * Fetch exercise templates associated with a chapter.
   */
  static getExercisesForChapter(chapterId: number): Exercise[] {
    return SEED_EXERCISES.filter(e => e.chapter_id === chapterId)
      .map(e => ({ ...e }));
  }
}
