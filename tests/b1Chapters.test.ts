import { describe, it, expect } from 'vitest';
import { b1Chapter1 } from '../src/infrastructure/db/lessons/b1_chapter1';
import { b1Chapter2 } from '../src/infrastructure/db/lessons/b1_chapter2';
import { b1Chapter3 } from '../src/infrastructure/db/lessons/b1_chapter3';
import { b1Chapter4 } from '../src/infrastructure/db/lessons/b1_chapter4';

describe('B1 Level Chapter 1 (Haberin Var Mı?) Content Integrity', () => {
  it('has valid metadata and order index', () => {
    expect(b1Chapter1.id).toBe(4);
    expect(b1Chapter1.level).toBe('B1');
    expect(b1Chapter1.orderIndex).toBe(1);
    expect(b1Chapter1.title.turkish).toBe('Haberin Var Mı?');
    expect(b1Chapter1.title.albanian).toBe('A ke ndonjë lajm?');
  });

  it('has expanded reading block with 5 paragraphs and 6 questions', () => {
    expect(b1Chapter1.reading.layoutStyle).toBe('blog_post');
    expect(b1Chapter1.reading.content.length).toBe(5);
    expect(b1Chapter1.reading.questions.length).toBe(6);
    b1Chapter1.reading.questions.forEach(q => {
      expect(q.options.length).toBeGreaterThanOrEqual(4);
      expect(q.correctIndex).toBeLessThan(q.options.length);
    });
  });

  it('has exactly 20 vocabulary items', () => {
    expect(b1Chapter1.vocabulary.length).toBe(20);
    b1Chapter1.vocabulary.forEach(v => {
      expect(v.turkishWord).toBeTruthy();
      expect(v.albanianWord).toBeTruthy();
      expect(v.category).toBeTruthy();
    });
  });

  it('has 3 grammar cards', () => {
    expect(b1Chapter1.grammar.length).toBe(3);
    expect(b1Chapter1.grammar[0].titleAlbanian).toBeTruthy();
    expect(b1Chapter1.grammar[1].interactiveExample?.strategy).toBe('yken');
  });

  it('has exactly 6 interactive exercises', () => {
    expect(b1Chapter1.exercises.length).toBe(6);
    expect(b1Chapter1.exercises.filter(e => e.type === 'MULTIPLE_CHOICE').length).toBe(2);
    expect(b1Chapter1.exercises.filter(e => e.type === 'WORD_SORT').length).toBe(2);
    expect(b1Chapter1.exercises.filter(e => e.type === 'SUFFIX_BUILDER').length).toBe(2);
  });
});

describe('B1 Level Chapter 2 (Yorumlar ve Görüşler) Content Integrity', () => {
  it('has valid metadata and order index', () => {
    expect(b1Chapter2.id).toBe(22);
    expect(b1Chapter2.level).toBe('B1');
    expect(b1Chapter2.orderIndex).toBe(2);
    expect(b1Chapter2.title.turkish).toBe('Yorumlar ve Görüşler');
    expect(b1Chapter2.title.albanian).toBe('Komente dhe opinione');
  });

  it('has expanded reading dialogue with 5 blocks and 6 questions', () => {
    expect(b1Chapter2.reading.layoutStyle).toBe('dialogue');
    expect(b1Chapter2.reading.content.length).toBe(5);
    expect(b1Chapter2.reading.questions.length).toBe(6);
    b1Chapter2.reading.questions.forEach(q => {
      expect(q.options.length).toBeGreaterThanOrEqual(4);
      expect(q.correctIndex).toBeLessThan(q.options.length);
    });
  });

  it('has exactly 20 vocabulary items', () => {
    expect(b1Chapter2.vocabulary.length).toBe(20);
  });

  it('has 3 grammar cards with interactive example for reciprocal voice', () => {
    expect(b1Chapter2.grammar.length).toBe(3);
    expect(b1Chapter2.grammar[1].interactiveExample?.strategy).toBe('is');
    expect(b1Chapter2.grammar[1].interactiveExample?.root).toBe('gör');
  });

  it('has exactly 6 interactive exercises', () => {
    expect(b1Chapter2.exercises.length).toBe(6);
    expect(b1Chapter2.exercises.filter(e => e.type === 'MULTIPLE_CHOICE').length).toBe(2);
    expect(b1Chapter2.exercises.filter(e => e.type === 'WORD_SORT').length).toBe(2);
    expect(b1Chapter2.exercises.filter(e => e.type === 'SUFFIX_BUILDER').length).toBe(2);
  });
});

describe('B1 Level Chapter 3 (Eğitim) Content Integrity', () => {
  it('has valid metadata and order index', () => {
    expect(b1Chapter3.id).toBe(23);
    expect(b1Chapter3.level).toBe('B1');
    expect(b1Chapter3.orderIndex).toBe(3);
    expect(b1Chapter3.title.turkish).toBe('Eğitim');
    expect(b1Chapter3.title.albanian).toBe('Edukimi & Arsimi');
  });

  it('has expanded reading blog post with 5 paragraphs and 6 questions', () => {
    expect(b1Chapter3.reading.layoutStyle).toBe('blog_post');
    expect(b1Chapter3.reading.content.length).toBe(5);
    expect(b1Chapter3.reading.questions.length).toBe(6);
    b1Chapter3.reading.questions.forEach(q => {
      expect(q.options.length).toBeGreaterThanOrEqual(4);
      expect(q.correctIndex).toBeLessThan(q.options.length);
    });
  });

  it('has exactly 20 vocabulary items', () => {
    expect(b1Chapter3.vocabulary.length).toBe(20);
    b1Chapter3.vocabulary.forEach(v => {
      expect(v.turkishWord).toBeTruthy();
      expect(v.albanianWord).toBeTruthy();
      expect(v.category).toBeTruthy();
    });
  });

  it('has 3 grammar cards with interactive example for past conditional', () => {
    expect(b1Chapter3.grammar.length).toBe(3);
    expect(b1Chapter3.grammar[1].interactiveExample?.strategy).toBe('conditional');
    expect(b1Chapter3.grammar[1].interactiveExample?.root).toBe('gel');
  });

  it('has exactly 6 interactive exercises', () => {
    expect(b1Chapter3.exercises.length).toBe(6);
    expect(b1Chapter3.exercises.filter(e => e.type === 'MULTIPLE_CHOICE').length).toBe(2);
    expect(b1Chapter3.exercises.filter(e => e.type === 'WORD_SORT').length).toBe(2);
    expect(b1Chapter3.exercises.filter(e => e.type === 'SUFFIX_BUILDER').length).toBe(2);
  });
});

describe('B1 Level Chapter 4 (Gelin Tanış Olalım) Content Integrity', () => {
  it('has valid metadata and order index', () => {
    expect(b1Chapter4.id).toBe(24);
    expect(b1Chapter4.level).toBe('B1');
    expect(b1Chapter4.orderIndex).toBe(4);
    expect(b1Chapter4.title.turkish).toBe('Gelin Tanış Olalım');
    expect(b1Chapter4.title.albanian).toBe('Ejani të njihemi');
  });

  it('has expanded reading dialogue with 5 entries and 6 questions', () => {
    expect(b1Chapter4.reading.layoutStyle).toBe('dialogue');
    expect(b1Chapter4.reading.content.length).toBe(5);
    expect(b1Chapter4.reading.questions.length).toBe(6);
    b1Chapter4.reading.questions.forEach(q => {
      expect(q.options.length).toBeGreaterThanOrEqual(4);
      expect(q.correctIndex).toBeLessThan(q.options.length);
    });
  });

  it('has exactly 20 vocabulary items', () => {
    expect(b1Chapter4.vocabulary.length).toBe(20);
    b1Chapter4.vocabulary.forEach(v => {
      expect(v.turkishWord).toBeTruthy();
      expect(v.albanianWord).toBeTruthy();
      expect(v.category).toBeTruthy();
    });
  });

  it('has 3 grammar cards with interactive example for since/ever since strategy', () => {
    expect(b1Chapter4.grammar.length).toBe(3);
    expect(b1Chapter4.grammar[1].interactiveExample?.strategy).toBe('since');
    expect(b1Chapter4.grammar[1].interactiveExample?.root).toBe('gel');
  });

  it('has exactly 6 interactive exercises', () => {
    expect(b1Chapter4.exercises.length).toBe(6);
    expect(b1Chapter4.exercises.filter(e => e.type === 'MULTIPLE_CHOICE').length).toBe(2);
    expect(b1Chapter4.exercises.filter(e => e.type === 'WORD_SORT').length).toBe(2);
    expect(b1Chapter4.exercises.filter(e => e.type === 'SUFFIX_BUILDER').length).toBe(2);
  });
});
