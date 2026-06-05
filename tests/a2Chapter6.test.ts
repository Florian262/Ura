import { describe, it, expect } from 'vitest';
import { AblativeStrategy } from '../src/core/harmony/strategies/AblativeStrategy';
import { a2Chapter6 } from '../src/infrastructure/db/lessons/a2_chapter6';
import { evaluateWriting } from '../src/core/harmony/writingValidation';

describe('AblativeStrategy Rasa Rrjedhore Conjugation', () => {
  const strategy = new AblativeStrategy();

  it('handles regular common nouns with -dan / -den', () => {
    expect(strategy.apply('ev').result).toBe('evden');
    expect(strategy.apply('oda').result).toBe('odadan');
  });

  it('handles voiceless consonant-ending roots with -tan / -ten', () => {
    expect(strategy.apply('sokak').result).toBe('sokaktan');
    expect(strategy.apply('sınıf').result).toBe('sınıftan');
  });

  it('handles proper nouns by adding an apostrophe', () => {
    expect(strategy.apply('Tiran').result).toBe("Tiran'dan");
    expect(strategy.apply('İstanbul').result).toBe("İstanbul'dan");
    expect(strategy.apply('Ahmet').result).toBe("Ahmet'ten");
  });
});

describe('A2 Chapter 6 Lesson Blueprint (ID 18)', () => {
  it('conforms to lesson schema constraints', () => {
    expect(a2Chapter6.id).toBe(18);
    expect(a2Chapter6.level).toBe('A2');
    expect(a2Chapter6.orderIndex).toBe(6);
    expect(a2Chapter6.title.turkish).toBe('Karşılaştırma ve Özellikler');
    expect(a2Chapter6.reading.layoutStyle).toBe('blog_post');
    expect(a2Chapter6.vocabulary.length).toBe(12);
    expect(a2Chapter6.grammar.length).toBe(2);
    expect(a2Chapter6.exercises.length).toBe(5);
  });

  it('contains exactly 100 words in the Turkish reading block', () => {
    const totalWordCount = a2Chapter6.reading.content
      .map(p => p.text.trim().split(/\s+/).length)
      .reduce((a, b) => a + b, 0);
    expect(totalWordCount).toBe(100);
  });
});

describe('Writing Validation for A2 Chapter 6 (ID 18)', () => {
  it('passes valid comparative descriptions', () => {
    const res = evaluateWriting(18, "Tiran İstanbul'dan daha sakin.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni shkruar saktë krahasimin');
  });

  it('passes valid common noun comparative descriptions', () => {
    const res = evaluateWriting(18, "Masa sandalyeden daha büyük.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni shkruar saktë krahasimin');
  });

  it('fails inputs that are under 10 characters', () => {
    const res = evaluateWriting(18, "Daha");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('shumë i shkurtër');
  });

  it('fails inputs missing comparative keyword daha', () => {
    const res = evaluateWriting(18, "Tiran İstanbul'dan sakin.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain("Mungon fjala krahasuese 'daha'");
  });

  it('fails inputs missing ablative suffix', () => {
    const res = evaluateWriting(18, "Tiran İstanbul daha sakin.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Nuk u gjet asnjë emër i zgjedhuar saktë në rasën rrjedhore');
  });
});
