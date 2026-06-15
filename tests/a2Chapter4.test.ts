import { describe, it, expect } from 'vitest';
import { PotentialStrategy } from '../src/core/harmony/strategies/PotentialStrategy';
import { a2Chapter4 } from '../src/infrastructure/db/lessons/a2_chapter4';
import { evaluateWriting } from '../src/core/harmony/writingValidation';

describe('PotentialStrategy Yeterlilik Fiili Conjugation', () => {
  const strategy = new PotentialStrategy();

  it('handles roots ending in a vowel by attaching -yebilir / -yabilir', () => {
    expect(strategy.apply('oku').result).toBe('okuyabilir');
    expect(strategy.apply('söyle').result).toBe('söyleyebilir');
  });

  it('handles regular consonant-ending roots with -ebilir / -abilir', () => {
    expect(strategy.apply('yap').result).toBe('yapabilir');
    expect(strategy.apply('gel').result).toBe('gelebilir');
    expect(strategy.apply('konuş').result).toBe('konuşabilir');
  });

  it('applies KETÇAP voicing mutation for git and et', () => {
    expect(strategy.apply('git').result).toBe('gidebilir');
    expect(strategy.apply('et').result).toBe('edebilir');
  });

  it('applies vowel narrowing for ye and de', () => {
    expect(strategy.apply('ye').result).toBe('yiyebilir');
    expect(strategy.apply('de').result).toBe('diyebilir');
  });
});

describe('A2 Chapter 4 Lesson Blueprint (ID 16)', () => {
  it('conforms to lesson schema constraints', () => {
    expect(a2Chapter4.id).toBe(12);
    expect(a2Chapter4.level).toBe('A2');
    expect(a2Chapter4.orderIndex).toBe(4);
    expect(a2Chapter4.title.turkish).toBe('Yeterlilik Fiili (-abil / -ebil)');
    expect(a2Chapter4.reading.layoutStyle).toBe('blog_post');
    expect(a2Chapter4.vocabulary.length).toBe(12);
    expect(a2Chapter4.grammar.length).toBe(2);
    expect(a2Chapter4.exercises.length).toBe(5);
  });

  it('contains exactly 100 words in the Turkish reading block', () => {
    const totalWordCount = a2Chapter4.reading.content
      .map(p => p.text.trim().split(/\s+/).length)
      .reduce((a, b) => a + b, 0);
    expect(totalWordCount).toBe(100);
  });
});

describe('Writing Validation for A2 Chapter 4 (ID 16)', () => {
  it('passes valid potential ability descriptions (positive)', () => {
    const res = evaluateWriting(12, "Ben Türkçe konuşabilirim ve araba sürebilirim.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni përshkruar saktë aftësitë tuaja');
  });

  it('passes valid potential ability descriptions (negative)', () => {
    const res = evaluateWriting(12, "Çok iyi gitar çalabilirim ama yüzemem.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni përshkruar saktë aftësitë tuaja');
  });

  it('fails inputs that are under 10 characters', () => {
    const res = evaluateWriting(12, "Yaparım");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('shumë i shkurtër');
  });

  it('fails inputs missing ability/potential verbs', () => {
    const res = evaluateWriting(12, "Dün okula gittim ve bir kitap okudum.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Nuk u gjet asnjë folje e zgjedhuar saktë në formën e mundësisë');
  });
});
