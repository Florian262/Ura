import { describe, it, expect } from 'vitest';
import { AoristStrategy } from '../src/core/harmony/strategies/AoristStrategy';
import { a2Chapter3 } from '../src/infrastructure/db/lessons/a2_chapter3';
import { evaluateWriting } from '../src/core/harmony/writingValidation';

describe('AoristStrategy Geniş Zaman Conjugation', () => {
  const strategy = new AoristStrategy();

  it('handles roots ending in a vowel by attaching -r', () => {
    expect(strategy.apply('oku').result).toBe('okur');
    expect(strategy.apply('söyle').result).toBe('söyler');
  });

  it('handles regular monosyllabic consonant-ending roots with -ar / -er', () => {
    expect(strategy.apply('sev').result).toBe('sever');
    expect(strategy.apply('yap').result).toBe('yapar');
  });

  it('handles exception monosyllabic consonant-ending roots with -ır / -ir / -ur / -ür', () => {
    expect(strategy.apply('gel').result).toBe('gelir');
    expect(strategy.apply('kal').result).toBe('kalır');
    expect(strategy.apply('gör').result).toBe('görür');
    expect(strategy.apply('ol').result).toBe('olur');
  });

  it('handles polysyllabic consonant-ending roots with -ır / -ir / -ur / -ür', () => {
    expect(strategy.apply('çalış').result).toBe('çalışır');
    expect(strategy.apply('konuş').result).toBe('konuşur');
  });

  it('applies KETÇAP voicing mutation for git and et', () => {
    expect(strategy.apply('git').result).toBe('gider');
    expect(strategy.apply('et').result).toBe('eder');
  });
});

describe('A2 Chapter 3 Lesson Blueprint (ID 15)', () => {
  it('conforms to lesson schema constraints', () => {
    expect(a2Chapter3.id).toBe(11);
    expect(a2Chapter3.level).toBe('A2');
    expect(a2Chapter3.orderIndex).toBe(3);
    expect(a2Chapter3.title.turkish).toBe('Zakonet dhe Koha e Gjerë');
    expect(a2Chapter3.reading.layoutStyle).toBe('blog_post');
    expect(a2Chapter3.vocabulary.length).toBe(12);
    expect(a2Chapter3.grammar.length).toBe(2);
    expect(a2Chapter3.exercises.length).toBe(5);
  });

  it('contains exactly 100 words in the Turkish reading block', () => {
    const totalWordCount = a2Chapter3.reading.content
      .map(p => p.text.trim().split(/\s+/).length)
      .reduce((a, b) => a + b, 0);
    expect(totalWordCount).toBe(100);
  });
});

describe('Writing Validation for A2 Chapter 3 (ID 15)', () => {
  it('passes valid Geniş Zaman routine descriptions with proper indicators', () => {
    const res = evaluateWriting(11, "Genellikle sabah erken uyanırım ve taze çay içerim.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni përshkruar saktë rutinën tuaj');
  });

  it('fails inputs that are under 10 characters', () => {
    const res = evaluateWriting(11, "Uyanırım");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('shumë i shkurtër');
  });

  it('fails inputs missing a frequency or routine indicator', () => {
    const res = evaluateWriting(11, "Sabah yataktan kalkarım ve yüzümü yıkarım.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Mungon një tregues i rutinës');
  });

  it('fails inputs missing a Geniş Zaman conjugated verb', () => {
    const res = evaluateWriting(11, "Genellikle sabah erken uyanıyorum.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Nuk u gjet asnjë folje e zgjedhuar saktë');
  });
});
