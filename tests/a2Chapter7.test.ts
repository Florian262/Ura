import { describe, it, expect } from 'vitest';
import { PastContinuousStrategy } from '../src/core/harmony/strategies/PastContinuousStrategy';
import { a2Chapter7 } from '../src/infrastructure/db/lessons/a2_chapter7';
import { evaluateWriting } from '../src/core/harmony/writingValidation';

describe('PastContinuousStrategy Şimdiki Zamanın Hikayesi Conjugation', () => {
  const strategy = new PastContinuousStrategy();

  it('handles regular consonant-ending roots with connecting vowels', () => {
    expect(strategy.apply('yap').result).toBe('yapıyordu');
    expect(strategy.apply('gel').result).toBe('geliyordu');
    expect(strategy.apply('yaz').result).toBe('yazıyordu');
  });

  it('handles vowel-drop narrowing for -a / -e ending roots', () => {
    expect(strategy.apply('dinle').result).toBe('dinliyordu');
    expect(strategy.apply('oyna').result).toBe('oynuyordu');
  });

  it('handles roots ending in high vowels directly', () => {
    expect(strategy.apply('oku').result).toBe('okuyordu');
    expect(strategy.apply('yürü').result).toBe('yürüyordu');
  });

  it('applies KETÇAP voicing mutation for git and et', () => {
    expect(strategy.apply('git').result).toBe('gidiyordu');
    expect(strategy.apply('et').result).toBe('ediyordu');
  });
});

describe('A2 Chapter 7 Lesson Blueprint (ID 19)', () => {
  it('conforms to lesson schema constraints', () => {
    expect(a2Chapter7.id).toBe(19);
    expect(a2Chapter7.level).toBe('A2');
    expect(a2Chapter7.orderIndex).toBe(7);
    expect(a2Chapter7.title.turkish).toBe('Şimdiki Zamanın Hikayesi');
    expect(a2Chapter7.reading.layoutStyle).toBe('blog_post');
    expect(a2Chapter7.vocabulary.length).toBe(12);
    expect(a2Chapter7.grammar.length).toBe(2);
    expect(a2Chapter7.exercises.length).toBe(5);
  });

  it('contains exactly 100 words in the Turkish reading block', () => {
    const totalWordCount = a2Chapter7.reading.content
      .map(p => p.text.trim().split(/\s+/).length)
      .reduce((a, b) => a + b, 0);
    expect(totalWordCount).toBe(100);
  });
});

describe('Writing Validation for A2 Chapter 7 (ID 19)', () => {
  it('passes valid childhood and past habit descriptions', () => {
    const res = evaluateWriting(19, "Eskiden çok kitap okuyordum.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni përshkruar saktë fëmijërinë');
  });

  it('passes plural past continuous descriptions', () => {
    const res = evaluateWriting(19, "Çocukken her gün sokakta arkadaşlarımla oynuyorduk.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni përshkruar saktë fëmijërinë');
  });

  it('fails inputs that are under 10 characters', () => {
    const res = evaluateWriting(19, "Okuyordum");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('shumë i shkurtër');
  });

  it('fails inputs missing past indicators', () => {
    const res = evaluateWriting(19, "Her gün Türkçe çalışıyorum.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain("Mungon një tregues i fëmijërisë");
  });

  it('fails inputs missing past continuous verb forms', () => {
    const res = evaluateWriting(19, "Eskiden her gün Türkçe çalıştım.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain("Nuk u gjet asnjë folje e zgjedhuar saktë në kohën e shkuar të vazhdueshme");
  });
});
