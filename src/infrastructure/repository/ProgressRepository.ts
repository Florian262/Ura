export interface UserProgress {
  chapter_id: number;
  is_completed: boolean;
  last_accessed_timestamp: number;
  last_viewed_section: string; // 'reading' | 'vocab' | 'grammar' | 'writing' | 'exercises'
  carousel_grammar_step: number;
  writing_validation_preference: 'self_check' | 'strict';
}

const STORAGE_KEY = 'ura_user_progress';

/**
 * ProgressRepository manages serialization and saving of active session coordinates.
 * Preserves the exact SQL progress engine layout:
 * [chapter_id, is_completed, last_accessed_timestamp, last_viewed_section, carousel_grammar_step, writing_validation_preference]
 */
export class ProgressRepository {
  /**
   * Fetch complete progress map.
   */
  static getProgressMap(): Record<number, UserProgress> {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return {};
      return JSON.parse(data);
    } catch (e) {
      console.error('Gabim gjatë leximit të progresit nga LocalStorage', e);
      return {};
    }
  }

  /**
   * Fetch progress for a single chapter.
   */
  static getChapterProgress(chapterId: number): UserProgress | null {
    const map = this.getProgressMap();
    return map[chapterId] || null;
  }

  /**
   * Save progress coordinates for a specific chapter.
   */
  static saveChapterProgress(progress: Omit<UserProgress, 'last_accessed_timestamp'>): UserProgress {
    const map = this.getProgressMap();
    const updated: UserProgress = {
      ...progress,
      last_accessed_timestamp: Date.now()
    };
    map[progress.chapter_id] = updated;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    return updated;
  }

  /**
   * Fetch the last accessed chapter based on timestamp.
   * Enables the Pristine Session Restore Engine.
   */
  static getLastAccessedProgress(): UserProgress | null {
    const map = this.getProgressMap();
    const items = Object.values(map);
    if (items.length === 0) return null;
    
    // Sort descending by timestamp
    return items.sort((a, b) => b.last_accessed_timestamp - a.last_accessed_timestamp)[0];
  }

  /**
   * Mark a chapter as completed.
   */
  static markChapterCompleted(chapterId: number): void {
    const progress = this.getChapterProgress(chapterId);
    this.saveChapterProgress({
      chapter_id: chapterId,
      is_completed: true,
      last_viewed_section: progress?.last_viewed_section || 'reading',
      carousel_grammar_step: progress?.carousel_grammar_step || 0,
      writing_validation_preference: progress?.writing_validation_preference || 'self_check'
    });
  }
}
