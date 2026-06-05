import { describe, it, expect } from 'vitest';
import { a1Chapter0 } from '../src/infrastructure/db/lessons/a1_chapter0';
import { evaluateWriting } from '../src/core/harmony/writingValidation';

describe('A1 Chapter 0 Lesson Blueprint (ID 21)', () => {
  it('conforms to lesson schema constraints', () => {
    expect(a1Chapter0.id).toBe(21);
    expect(a1Chapter0.level).toBe('A1');
    expect(a1Chapter0.orderIndex).toBe(0);
    expect(a1Chapter0.title.turkish).toBe('Türk Alfabesi ve Telaffuz');
    expect(a1Chapter0.reading.layoutStyle).toBe('blog_post');
    expect(a1Chapter0.vocabulary.length).toBe(0);
    expect(a1Chapter0.grammar.length).toBe(0);
    expect(a1Chapter0.exercises.length).toBe(0);
  });

  it('contains exactly 100 words in the Turkish reading block', () => {
    const totalWordCount = a1Chapter0.reading.content
      .map(p => p.text.trim().split(/\s+/).length)
      .reduce((a, b) => a + b, 0);
    expect(totalWordCount).toBe(100);
  });
});

describe('Writing Validation for A1 Chapter 0 (ID 21)', () => {
  it('passes perfect translation of "Mirëdita, si jeni?"', () => {
    const res = evaluateWriting(21, "İyi günler, nasılsınız?");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Urime! Përkthimi juaj është krejtësisht i saktë');
  });

  it('passes translation without punctuation', () => {
    const res = evaluateWriting(21, "İyi günler nasılsınız");
    expect(res.status).toBe('success');
  });

  it('fails inputs that are under 10 characters', () => {
    const res = evaluateWriting(21, "İyi");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('shumë i shkurtër');
  });

  it('fails inputs missing the greeting "İyi"', () => {
    const res = evaluateWriting(21, "Güzel günler nasılsınız?");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Mungon fjala \'İyi\'');
  });

  it('fails inputs missing the word "günler"', () => {
    const res = evaluateWriting(21, "İyi akşamlar nasılsınız?");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Mungon fjala \'günler\'');
  });

  it('fails inputs missing the pyetje "nasılsınız"', () => {
    const res = evaluateWriting(21, "İyi günler nasılsın?");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Mungon fjala \'nasılsınız\'');
  });

  it('fails inputs missing proper pattern matching', () => {
    const res = evaluateWriting(21, "İyi nasılsınız günler?");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Sigurohuni që keni shkruar \'İyi günler\'');
  });
});
