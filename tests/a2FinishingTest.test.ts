import { describe, it, expect } from 'vitest';
import {
  A2_READING_SECTIONS,
  A2_MC_QUESTIONS,
  A2_SUFFIX_QUESTIONS,
  A2_WORDSORT_QUESTIONS,
  A2_WRITING_QUESTIONS,
  generateRandomA2Test
} from '../src/infrastructure/db/a2TestPool';

describe('Level A2 Comprehensive Finishing Test Pool & Generator', () => {
  
  it('should have a correctly sized database pool matching specifications', () => {
    // Reading pool: 4 sections
    expect(A2_READING_SECTIONS).toHaveLength(4);
    
    // Each reading section must have exactly 5 questions
    A2_READING_SECTIONS.forEach(sec => {
      expect(sec.questions).toHaveLength(5);
    });

    // MCQ pool: 30 questions
    expect(A2_MC_QUESTIONS).toHaveLength(30);

    // Suffix pool: 25 questions
    expect(A2_SUFFIX_QUESTIONS).toHaveLength(25);

    // Word Sort pool: 25 questions
    expect(A2_WORDSORT_QUESTIONS).toHaveLength(25);

    // Writing pool: 10 questions
    expect(A2_WRITING_QUESTIONS).toHaveLength(10);
  });

  it('should ensure all multiple choice questions have correct answers present in options', () => {
    // Check general MCQs
    A2_MC_QUESTIONS.forEach(q => {
      expect(q.options).toContain(q.correctAnswer);
      expect(q.options.length).toBeGreaterThanOrEqual(4);
    });

    // Check reading MCQs
    A2_READING_SECTIONS.forEach(sec => {
      sec.questions.forEach(q => {
        expect(q.options).toContain(q.correctAnswer);
        expect(q.options.length).toBeGreaterThanOrEqual(4);
      });
    });
  });

  it('should ensure all suffix builder questions have the correct suffix present in options', () => {
    A2_SUFFIX_QUESTIONS.forEach(q => {
      expect(q.suffixes).toContain(q.correctSuffix);
    });
  });

  it('should ensure all word sorts have non-empty prompt, words, and correct sequences', () => {
    A2_WORDSORT_QUESTIONS.forEach(q => {
      expect(q.promptAlbanian.length).toBeGreaterThan(0);
      expect(q.words.length).toBeGreaterThan(0);
      expect(q.correctSequence.length).toBe(q.words.length);
      
      // All sorted words must exist in the pool
      q.correctSequence.forEach(word => {
        expect(q.words).toContain(word);
      });
    });
  });

  it('should ensure all writing console prompts have at least one target translation', () => {
    A2_WRITING_QUESTIONS.forEach(q => {
      expect(q.promptAlbanian.length).toBeGreaterThan(0);
      expect(q.correctAnswers.length).toBeGreaterThan(0);
    });
  });

  it('should randomly generate a balanced 25-question finishing test', () => {
    const test = generateRandomA2Test();

    // Check structure of test
    expect(test.readingSection).toBeDefined();
    expect(test.readingSection.questions).toHaveLength(5);
    expect(test.multipleChoice).toHaveLength(5);
    expect(test.suffixBuilder).toHaveLength(6);
    expect(test.wordSort).toHaveLength(6);
    expect(test.writing).toHaveLength(3);

    // Total questions in test = 5 (reading) + 5 (mcq) + 6 (suffix) + 6 (sort) + 3 (writing) = 25
    const totalQuestions = 5 + test.multipleChoice.length + test.suffixBuilder.length + test.wordSort.length + test.writing.length;
    expect(totalQuestions).toBe(25);
  });

});
