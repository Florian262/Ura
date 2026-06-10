import { describe, it, expect, beforeEach } from 'vitest';
import { ChapterRepository } from '../src/infrastructure/repository/ChapterRepository';
import { ProgressRepository } from '../src/infrastructure/repository/ProgressRepository';
import type { Chapter } from '../src/infrastructure/db/seedData';

// Mock localStorage for the node test environment
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    length: 0,
    key: (index: number) => null
  };
})();

if (typeof window === 'undefined') {
  global.localStorage = localStorageMock as any;
}

describe('JourneyDashboard Data & Progress Logic', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should correctly partition all chapters into level groupings', () => {
    const chapters = ChapterRepository.getAllChapters();
    expect(chapters).toBeInstanceOf(Array);
    expect(chapters.length).toBeGreaterThan(0);

    const levels: Record<string, Chapter[]> = {
      A1: [],
      A2: [],
      B1: [],
      B2: [],
      C1: [],
      C2: []
    };

    chapters.forEach(ch => {
      if (levels[ch.level]) {
        levels[ch.level].push(ch);
      }
    });

    // Verify each registered level contains valid chapters and proper level assignment
    Object.entries(levels).forEach(([levelKey, chapterList]) => {
      chapterList.forEach(ch => {
        expect(ch.level).toBe(levelKey);
      });
    });

    // Check that we have chapters populated in at least A1, A2, B1 (based on curriculum seed)
    expect(levels.A1.length).toBeGreaterThan(0);
    expect(levels.A2.length).toBeGreaterThan(0);
    expect(levels.B1.length).toBeGreaterThan(0);
  });

  it('should accurately calculate level progress percentages based on ProgressRepository', () => {
    const chapters = ChapterRepository.getAllChapters();
    const levels: Record<string, Chapter[]> = {
      A1: [], A2: [], B1: [], B2: [], C1: [], C2: []
    };
    chapters.forEach(ch => {
      if (levels[ch.level]) {
        levels[ch.level].push(ch);
      }
    });

    const level = 'A1';
    const chapterList = levels[level];
    expect(chapterList.length).toBeGreaterThan(1);

    // Helper progress logic identical to JourneyDashboard.tsx
    const getLevelProgress = (lvl: string) => {
      const list = levels[lvl] || [];
      if (list.length === 0) return { completed: 0, total: 0, percentage: 0 };
      const completedCount = list.filter(ch => {
        const progress = ProgressRepository.getChapterProgress(ch.id);
        return progress?.is_completed === true;
      }).length;
      const percentage = Math.round((completedCount / list.length) * 100);
      return { completed: completedCount, total: list.length, percentage };
    };

    // 1. Initial State: 0% progress
    let progress = getLevelProgress(level);
    expect(progress.completed).toBe(0);
    expect(progress.total).toBe(chapterList.length);
    expect(progress.percentage).toBe(0);

    // 2. Midpoint State: Mark first chapter as completed
    const firstChapter = chapterList[0];
    ProgressRepository.saveChapterProgress({
      chapter_id: firstChapter.id,
      is_completed: true,
      last_viewed_section: 'reading',
      carousel_grammar_step: 0,
      writing_validation_preference: 'self_check'
    });

    progress = getLevelProgress(level);
    expect(progress.completed).toBe(1);
    expect(progress.percentage).toBe(Math.round((1 / chapterList.length) * 100));

    // 3. Complete State: Mark all chapters in level completed
    chapterList.forEach(ch => {
      ProgressRepository.saveChapterProgress({
        chapter_id: ch.id,
        is_completed: true,
        last_viewed_section: 'reading',
        carousel_grammar_step: 0,
        writing_validation_preference: 'self_check'
      });
    });

    progress = getLevelProgress(level);
    expect(progress.completed).toBe(chapterList.length);
    expect(progress.percentage).toBe(100);
  });

  it('should handle empty level arrays gracefully without division by zero', () => {
    const getLevelProgress = (list: Chapter[]) => {
      if (list.length === 0) return { completed: 0, total: 0, percentage: 0 };
      const completedCount = list.filter(ch => {
        const progress = ProgressRepository.getChapterProgress(ch.id);
        return progress?.is_completed === true;
      }).length;
      const percentage = Math.round((completedCount / list.length) * 100);
      return { completed: completedCount, total: list.length, percentage };
    };

    const emptyProgress = getLevelProgress([]);
    expect(emptyProgress.completed).toBe(0);
    expect(emptyProgress.total).toBe(0);
    expect(emptyProgress.percentage).toBe(0);
  });
});
