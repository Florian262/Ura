import { describe, it, expect } from 'vitest';
import { FutureTenseStrategy } from '../src/core/harmony/strategies/FutureTenseStrategy';
import { a2Chapter2 } from '../src/infrastructure/db/lessons/a2_chapter2';
import { evaluateWriting } from '../src/core/harmony/writingValidation';

describe('FutureTenseStrategy Suffix Conjugation', () => {
  const strategy = new FutureTenseStrategy();

  it('handles standard consonant-ending roots with back vowels', () => {
    const res = strategy.apply('kal'); // to stay
    expect(res.result).toBe('kalacağım');
    expect(res.suffixApplied).toBe('acağım');
    expect(res.changes).toContain("Harmonia vokalore 2-she: Zanorja e fundit e rrënjës është 'a', prandaj përdoret prapashtesa e harmonisë përkatëse '-acağım'.");
  });

  it('handles standard consonant-ending roots with front vowels', () => {
    const res = strategy.apply('gel'); // to come
    expect(res.result).toBe('geleceğim');
    expect(res.suffixApplied).toBe('eceğim');
  });

  it('handles vowel-ending roots by inserting y buffer', () => {
    const resOku = strategy.apply('oku'); // to read
    expect(resOku.result).toBe('okuyacağım');
    expect(resOku.suffixApplied).toBe('yacağım');
    expect(resOku.changes.some(c => c.includes("ndërmjetësuese 'y'"))).toBe(true);

    const resYe = strategy.apply('ye'); // to eat
    expect(resYe.result).toBe('yiyeceğim');
    expect(resYe.suffixApplied).toBe('yeceğim');
  });

  it('applies KETÇAP root voicing for git and et', () => {
    const resGit = strategy.apply('git'); // to go
    expect(resGit.result).toBe('gideceğim');
    expect(resGit.changes.some(c => c.includes("git -> gid"))).toBe(true);

    const resEt = strategy.apply('et'); // to do/make
    expect(resEt.result).toBe('edeceğim');
  });
});

describe('A2 Chapter 2 Lesson Blueprint (ID 14)', () => {
  it('conforms to lesson schema constraints', () => {
    expect(a2Chapter2.id).toBe(14);
    expect(a2Chapter2.level).toBe('A2');
    expect(a2Chapter2.orderIndex).toBe(2);
    expect(a2Chapter2.title.turkish).toBe('Tatil Planları ve Gelecek Zaman');
    expect(a2Chapter2.reading.layoutStyle).toBe('dialogue');
    expect(a2Chapter2.reading.content.length).toBeGreaterThan(0);
    expect(a2Chapter2.vocabulary.length).toBeGreaterThan(0);
    expect(a2Chapter2.grammar.length).toBe(2);
    expect(a2Chapter2.exercises.length).toBe(5);
  });
});

describe('Writing Validation for A2 Chapter 2 (ID 14)', () => {
  it('passes valid future tense descriptions with proper indicators', () => {
    const res = evaluateWriting(14, "Gelecek yaz Antalya'ya gideceğim ve otelde kalacağım.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni përshkruar saktë planet tuaja');
  });

  it('fails inputs that are under 10 characters', () => {
    const res = evaluateWriting(14, "Gideceğim");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('shumë i shkurtër');
  });

  it('fails inputs missing a future temporal indicator', () => {
    const res = evaluateWriting(14, "Bugün kütüphanede ders çalışacağım.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Mungon një tregues i së ardhshmes');
  });

  it('fails inputs missing a future-tense conjugated verb', () => {
    const res = evaluateWriting(14, "Gelecek yaz Antalya'ya gidiyorum.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Nuk u gjet asnjë folje e zgjedhuar saktë');
  });
});
