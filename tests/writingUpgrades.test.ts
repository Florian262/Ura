import { describe, it, expect } from 'vitest';
import { evaluateWriting } from '../src/core/harmony/writingValidation';

describe('A2 Chapter 1 Past Tense Writing Validation (Chapter ID 3)', () => {
  it('passes valid past-tense descriptions with temporal indicators', () => {
    // Test Case 1: Standard past tense with 'dün' and 'gittim'
    const res1 = evaluateWriting(3, "Dün okula gittim.");
    expect(res1.status).toBe('success');
    expect(res1.feedback).toContain('Keni përshkruar fundjavën tuaj');

    // Test Case 2: Past tense plural with 'hafta sonu' and 'buluştuk'
    const res2 = evaluateWriting(3, "Hafta sonu arkadaşımla buluştuk.");
    expect(res2.status).toBe('success');

    // Test Case 3: Multiple actions with 'geçen' and past-tense verbs
    const res3 = evaluateWriting(3, "Geçen hafta güzel bir kitap okudum.");
    expect(res3.status).toBe('success');
  });

  it('fails inputs that are under 10 characters', () => {
    const res = evaluateWriting(3, "Dün gitt.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('shumë i shkurtër');
  });

  it('fails inputs missing a past-tense temporal indicator', () => {
    // Missing 'dün', 'hafta sonu', etc.
    const res = evaluateWriting(3, "Kütüphanede buluştuk.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Mungon një tregues i kohës së shkuar');
  });

  it('fails inputs missing a past-tense verb conjugation', () => {
    // Has temporal indicator but verb is in present continuous
    const res = evaluateWriting(3, "Dün kütüphanede buluşuyoruz.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Nuk u gjet asnjë folje e zgjedhuar saktë');
  });

  it('fails inputs that are completely off-topic or in present tense', () => {
    const res = evaluateWriting(3, "Bugün okula gidiyorum ve ders çalışıyorum.");
    expect(res.status).toBe('error');
  });
});
