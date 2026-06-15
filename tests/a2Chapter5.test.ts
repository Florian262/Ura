import { describe, it, expect } from 'vitest';
import { NecessityStrategy } from '../src/core/harmony/strategies/NecessityStrategy';
import { a2Chapter5 } from '../src/infrastructure/db/lessons/a2_chapter5';
import { evaluateWriting } from '../src/core/harmony/writingValidation';

describe('NecessityStrategy Gereklilik Kipi Conjugation', () => {
  const strategy = new NecessityStrategy();

  it('handles regular back-harmony roots with -malı', () => {
    expect(strategy.apply('yap').result).toBe('yapmalı');
    expect(strategy.apply('oku').result).toBe('okumalı');
  });

  it('handles regular front-harmony roots with -meli', () => {
    expect(strategy.apply('gel').result).toBe('gelmeli');
    expect(strategy.apply('git').result).toBe('gitmeli');
  });
});

describe('A2 Chapter 5 Lesson Blueprint (ID 17)', () => {
  it('conforms to lesson schema constraints', () => {
    expect(a2Chapter5.id).toBe(13);
    expect(a2Chapter5.level).toBe('A2');
    expect(a2Chapter5.orderIndex).toBe(5);
    expect(a2Chapter5.title.turkish).toBe('Gereklilik Kipi ve İhtiyaç');
    expect(a2Chapter5.reading.layoutStyle).toBe('blog_post');
    expect(a2Chapter5.vocabulary.length).toBe(12);
    expect(a2Chapter5.grammar.length).toBe(2);
    expect(a2Chapter5.exercises.length).toBe(5);
  });

  it('contains exactly 100 words in the Turkish reading block', () => {
    const totalWordCount = a2Chapter5.reading.content
      .map(p => p.text.trim().split(/\s+/).length)
      .reduce((a, b) => a + b, 0);
    expect(totalWordCount).toBe(100);
  });
});

describe('Writing Validation for A2 Chapter 5 (ID 17)', () => {
  it('passes valid necessity descriptions (verb form)', () => {
    const res = evaluateWriting(13, "Sağlıklı olmak için her gün spor yapmalıyım ve sebze yemeliyim.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni shkruar saktë për detyrimet');
  });

  it('passes valid necessity descriptions (nominal gerek form)', () => {
    const res = evaluateWriting(13, "Erken uyumam gerek çünkü sabah erken kalkmalıyım.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni shkruar saktë për detyrimet');
  });

  it('fails inputs that are under 10 characters', () => {
    const res = evaluateWriting(13, "Gerek");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('shumë i shkurtër');
  });

  it('fails inputs missing obligation indicators', () => {
    const res = evaluateWriting(13, "Ben Türkçe konuşabilirim ve araba sürebilirim.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Sigurohuni që të përdorni mënyrën detyrore');
  });
});
