import { describe, it, expect } from 'vitest';
import { ALL_UNIFIED_LESSONS } from '../src/infrastructure/db/lessons';

describe('Level A1 Listening Comprehension Seeds Integrity', () => {
  it('should verify listening section for A1 chapters 1 to 8, excluding chapter 0 (id 21)', () => {
    const a1Lessons = ALL_UNIFIED_LESSONS.filter(l => l.level === 'A1');
    
    // Check chapter 0 (id 21) has no listening
    const ch0 = a1Lessons.find(l => l.id === 21);
    expect(ch0).toBeDefined();
    expect(ch0?.listening).toBeUndefined();

    // Check chapters 1 to 8 have listening
    const activeLessons = a1Lessons.filter(l => l.id !== 21);
    expect(activeLessons.length).toBe(8);

    activeLessons.forEach((lesson) => {
      expect(lesson.listening, `Lesson ${lesson.id} is missing listening section`).toBeDefined();
      const listening = lesson.listening!;

      // Text and Translation
      expect(listening.text, `Lesson ${lesson.id} listening text`).toBeTypeOf('string');
      expect(listening.text.trim().length).toBeGreaterThan(0);
      expect(listening.translation, `Lesson ${lesson.id} listening translation`).toBeTypeOf('string');
      expect(listening.translation.trim().length).toBeGreaterThan(0);

      // Questions (Exactly 2 multiple choice)
      expect(listening.questions, `Lesson ${lesson.id} listening questions`).toBeInstanceOf(Array);
      expect(listening.questions.length).toBe(2);

      listening.questions.forEach((q, idx) => {
        expect(q.questionTurkish, `Lesson ${lesson.id} question ${idx} Turkish text`).toBeTypeOf('string');
        expect(q.questionTurkish.trim().length).toBeGreaterThan(0);
        
        expect(q.questionAlbanian, `Lesson ${lesson.id} question ${idx} Albanian text`).toBeTypeOf('string');
        expect(q.questionAlbanian.trim().length).toBeGreaterThan(0);

        expect(q.options, `Lesson ${lesson.id} question ${idx} options`).toBeInstanceOf(Array);
        expect(q.options.length).toBeGreaterThanOrEqual(4);

        q.options.forEach((opt, optIdx) => {
          expect(opt, `Lesson ${lesson.id} question ${idx} option ${optIdx}`).toBeTypeOf('string');
          expect(opt.trim().length).toBeGreaterThan(0);
        });

        expect(q.correctIndex, `Lesson ${lesson.id} question ${idx} correct index`).toBeTypeOf('number');
        expect(q.correctIndex).toBeGreaterThanOrEqual(0);
        expect(q.correctIndex).toBeLessThan(q.options.length);
      });
    });
  });
});
