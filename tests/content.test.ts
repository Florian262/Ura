import { describe, it, expect } from 'vitest';
import { ALL_UNIFIED_LESSONS } from '../src/infrastructure/db/lessons';

describe('Unified Lesson Blueprints Content Integrity', () => {
  it('should validate overall structure and metadata for all lessons', () => {
    expect(ALL_UNIFIED_LESSONS).toBeInstanceOf(Array);
    expect(ALL_UNIFIED_LESSONS.length).toBeGreaterThan(0);

    ALL_UNIFIED_LESSONS.forEach((lesson) => {
      // Root metadata
      expect(lesson.id).toBeTypeOf('number');
      expect(lesson.id).toBeGreaterThan(0);
      expect(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']).toContain(lesson.level);
      expect(lesson.orderIndex).toBeTypeOf('number');
      expect(lesson.orderIndex).toBeGreaterThanOrEqual(0);

      // Title
      expect(lesson.title).toBeTypeOf('object');
      expect(lesson.title.turkish).toBeTypeOf('string');
      expect(lesson.title.turkish.trim().length).toBeGreaterThan(0);
      expect(lesson.title.albanian).toBeTypeOf('string');
      expect(lesson.title.albanian.trim().length).toBeGreaterThan(0);

      // Reading Structure
      expect(lesson.reading).toBeTypeOf('object');
      expect(['dialogue', 'narrative', 'blog_post']).toContain(lesson.reading.layoutStyle);
      if (lesson.reading.audioAssetStub !== null) {
        expect(lesson.reading.audioAssetStub).toBeTypeOf('string');
        expect(lesson.reading.audioAssetStub.trim().length).toBeGreaterThan(0);
      }
    });
  });

  it('should validate reading dialogue/narrative entries when present', () => {
    ALL_UNIFIED_LESSONS.forEach((lesson) => {
      lesson.reading.content.forEach((block, idx) => {
        expect(block.text, `Lesson ${lesson.id} reading content index ${idx} Turkish text`).toBeTypeOf('string');
        expect(block.text.trim().length).toBeGreaterThan(0);
        expect(block.translation, `Lesson ${lesson.id} reading content index ${idx} Albanian translation`).toBeTypeOf('string');
        expect(block.translation.trim().length).toBeGreaterThan(0);
        if (lesson.reading.layoutStyle === 'dialogue') {
          expect(block.speaker, `Lesson ${lesson.id} dialogue speaker at index ${idx}`).toBeTypeOf('string');
          expect(block.speaker?.trim().length).toBeGreaterThan(0);
        }
      });
    });
  });

  it('should validate reading questions and correct index bounds', () => {
    ALL_UNIFIED_LESSONS.forEach((lesson) => {
      lesson.reading.questions.forEach((q, idx) => {
        expect(q.questionTurkish, `Lesson ${lesson.id} question ${idx} Turkish text`).toBeTypeOf('string');
        expect(q.questionTurkish.trim().length).toBeGreaterThan(0);
        
        expect(q.questionAlbanian, `Lesson ${lesson.id} question ${idx} Albanian text`).toBeTypeOf('string');
        expect(q.questionAlbanian.trim().length).toBeGreaterThan(0);

        expect(q.options, `Lesson ${lesson.id} question ${idx} options`).toBeInstanceOf(Array);
        expect(q.options.length).toBeGreaterThanOrEqual(2);

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

  it('should validate vocabulary integrity', () => {
    ALL_UNIFIED_LESSONS.forEach((lesson) => {
      lesson.vocabulary.forEach((v, idx) => {
        expect(v.turkishWord, `Lesson ${lesson.id} vocab ${idx} Turkish`).toBeTypeOf('string');
        expect(v.turkishWord.trim().length).toBeGreaterThan(0);

        expect(v.albanianWord, `Lesson ${lesson.id} vocab ${idx} Albanian`).toBeTypeOf('string');
        expect(v.albanianWord.trim().length).toBeGreaterThan(0);

        expect(v.category, `Lesson ${lesson.id} vocab ${idx} category`).toBeTypeOf('string');
        expect(['emër', 'folje', 'mbiemër', 'ndajfolje', 'përemër', 'lidhëz', 'pasthirrmë', 'shprehje']).toContain(v.category);

        expect(v.isSharedBalkanWord, `Lesson ${lesson.id} vocab ${idx} isSharedBalkanWord`).toBeTypeOf('boolean');

        if (v.notesAlbanian !== null) {
          expect(v.notesAlbanian, `Lesson ${lesson.id} vocab ${idx} notes`).toBeTypeOf('string');
          expect(v.notesAlbanian.trim().length).toBeGreaterThan(0);
        }

        if (v.audioAssetStub !== null) {
          expect(v.audioAssetStub, `Lesson ${lesson.id} vocab ${idx} audio asset`).toBeTypeOf('string');
          expect(v.audioAssetStub.trim().length).toBeGreaterThan(0);
        }
      });
    });
  });

  it('should validate grammar cards logic', () => {
    ALL_UNIFIED_LESSONS.forEach((lesson) => {
      lesson.grammar.forEach((g, idx) => {
        expect(g.titleAlbanian, `Lesson ${lesson.id} grammar card ${idx} Albanian title`).toBeTypeOf('string');
        expect(g.titleAlbanian.trim().length).toBeGreaterThan(0);

        expect(g.ruleConceptTurkish, `Lesson ${lesson.id} grammar card ${idx} Turkish rule concept`).toBeTypeOf('string');
        expect(g.ruleConceptTurkish.trim().length).toBeGreaterThan(0);

        expect(g.explanationAlbanian, `Lesson ${lesson.id} grammar card ${idx} Albanian explanation`).toBeTypeOf('string');
        expect(g.explanationAlbanian.trim().length).toBeGreaterThan(0);

        if (g.interactiveExample !== null) {
          expect(g.interactiveExample, `Lesson ${lesson.id} grammar card ${idx} interactive example`).toBeTypeOf('object');
          expect(g.interactiveExample.root, `Lesson ${lesson.id} grammar card ${idx} interactive root`).toBeTypeOf('string');
          expect(g.interactiveExample.root.trim().length).toBeGreaterThan(0);
          expect(g.interactiveExample.strategy, `Lesson ${lesson.id} grammar card ${idx} interactive strategy`).toBeTypeOf('string');
          expect(g.interactiveExample.strategy.trim().length).toBeGreaterThan(0);
        }
      });
    });
  });

  it('should validate lesson exercises format and targets', () => {
    ALL_UNIFIED_LESSONS.forEach((lesson) => {
      lesson.exercises.forEach((ex, idx) => {
        expect(ex.promptAlbanian, `Lesson ${lesson.id} exercise ${idx} prompt`).toBeTypeOf('string');
        expect(ex.promptAlbanian.trim().length).toBeGreaterThan(0);
        expect(['MULTIPLE_CHOICE', 'WORD_SORT', 'SUFFIX_BUILDER']).toContain(ex.type);

        if (ex.type === 'MULTIPLE_CHOICE') {
          expect(ex.payload, `Lesson ${lesson.id} exercise ${idx} multiple choice payload`).toBeTypeOf('object');
          expect(ex.payload.word, `Lesson ${lesson.id} exercise ${idx} multiple choice root word`).toBeTypeOf('string');
          expect(ex.payload.word.trim().length).toBeGreaterThan(0);
          expect(ex.payload.options, `Lesson ${lesson.id} exercise ${idx} multiple choice options`).toBeInstanceOf(Array);
          expect(ex.payload.options.length).toBeGreaterThanOrEqual(2);
          
          ex.payload.options.forEach((opt: any, optIdx: number) => {
            expect(opt, `Lesson ${lesson.id} exercise ${idx} option ${optIdx}`).toBeTypeOf('string');
            expect(opt.trim().length).toBeGreaterThan(0);
          });

          expect(ex.validation, `Lesson ${lesson.id} exercise ${idx} multiple choice validation`).toBeTypeOf('object');
          expect(ex.validation.correct_answer, `Lesson ${lesson.id} exercise ${idx} correct answer`).toBeTypeOf('string');
          expect(ex.payload.options).toContain(ex.validation.correct_answer);
        }

        if (ex.type === 'WORD_SORT') {
          expect(ex.payload, `Lesson ${lesson.id} exercise ${idx} word sort payload`).toBeTypeOf('object');
          expect(ex.payload.words, `Lesson ${lesson.id} exercise ${idx} word sort input words`).toBeInstanceOf(Array);
          expect(ex.payload.words.length).toBeGreaterThanOrEqual(1);

          expect(ex.validation, `Lesson ${lesson.id} exercise ${idx} word sort validation`).toBeTypeOf('object');
          expect(ex.validation.correct_sequence, `Lesson ${lesson.id} exercise ${idx} correct sequence`).toBeInstanceOf(Array);

          // Verify sequence matches exactly the list of words (just in a different order)
          const sortedWords = [...ex.payload.words].sort();
          const sortedSeq = [...ex.validation.correct_sequence].sort();
          expect(sortedSeq, `Lesson ${lesson.id} exercise ${idx} correct sequence words mismatch`).toEqual(sortedWords);
        }

        if (ex.type === 'SUFFIX_BUILDER') {
          expect(ex.payload, `Lesson ${lesson.id} exercise ${idx} suffix builder payload`).toBeTypeOf('object');
          expect(ex.payload.root, `Lesson ${lesson.id} exercise ${idx} suffix builder root`).toBeTypeOf('string');
          expect(ex.payload.root.trim().length).toBeGreaterThan(0);
          expect(ex.payload.suffixes, `Lesson ${lesson.id} exercise ${idx} suffix builder options`).toBeInstanceOf(Array);
          expect(ex.payload.suffixes.length).toBeGreaterThanOrEqual(2);

          expect(ex.validation, `Lesson ${lesson.id} exercise ${idx} suffix builder validation`).toBeTypeOf('object');
          expect(ex.validation.correct_suffix, `Lesson ${lesson.id} exercise ${idx} correct suffix`).toBeTypeOf('string');
          expect(ex.payload.suffixes).toContain(ex.validation.correct_suffix);
          expect(ex.validation.result, `Lesson ${lesson.id} exercise ${idx} expected resulting word`).toBeTypeOf('string');
          expect(ex.validation.result).toBe(ex.payload.root + ex.validation.correct_suffix);
        }
      });
    });
  });
});
