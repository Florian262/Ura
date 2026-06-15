import { describe, it, expect } from 'vitest';
import { PastTenseStrategy } from '../src/core/harmony/strategies/PastTenseStrategy';
import { a2Chapter1 } from '../src/infrastructure/db/lessons/a2_chapter1';

describe('A2 Level Chapter 1 Suffix Strategy', () => {
  it('PastTenseStrategy applies past tense suffix correctly based on 4-way harmony and consonant zëshmëri', () => {
    const strategy = new PastTenseStrategy();

    // Consonant zëshme (ends with vowel or zëshme consonant)
    expect(strategy.apply('gel').result).toBe('geldi');
    expect(strategy.apply('oku').result).toBe('okudu');
    expect(strategy.apply('yaz').result).toBe('yazdı');
    expect(strategy.apply('gör').result).toBe('gördü');
    expect(strategy.apply('uyu').result).toBe('uyudu');

    // Consonant e shurdhët (ends with f, s, t, k, ç, ş, h, p)
    expect(strategy.apply('git').result).toBe('gitti');
    expect(strategy.apply('yap').result).toBe('yaptı');
    expect(strategy.apply('konuş').result).toBe('konuştu');
    expect(strategy.apply('seç').result).toBe('seçti');
    expect(strategy.apply('bak').result).toBe('baktı');
  });

  it('PastTenseStrategy returns correct changes explanations in Albanian', () => {
    const strategy = new PastTenseStrategy();
    const result = strategy.apply('git');
    expect(result.changes).toContain("Bashkëtingëllore e shurdhët (Fıstıkçı Şahap): Rrënja përfundon me shkronjën 't' (e shurdhët), prandaj prapashtesa fillon me 't' në vend të 'd'.");
    expect(result.changes).toContain("Harmonia vokalore 4-she: Zanorja e fundit e rrënjës është 'i', prandaj zanorja e prapashtesës është 'i'.");
    expect(result.changes).toContain("Përfundimi: Shtohet prapashtesa e kohës së shkuar '-ti'.");
  });
});

describe('A2 Level Chapter 1 Seed Data Validation', () => {
  it('has valid metadata and order index', () => {
    expect(a2Chapter1.id).toBe(9);
    expect(a2Chapter1.level).toBe('A2');
    expect(a2Chapter1.orderIndex).toBe(1);
    expect(a2Chapter1.title.turkish).toBe('Geçmiş Zaman ve Hafta Sonu');
    expect(a2Chapter1.title.albanian).toBe('Koha e Shkuar & Fundjava');
  });

  it('has valid reading blog post block', () => {
    expect(a2Chapter1.reading.layoutStyle).toBe('blog_post');
    expect(a2Chapter1.reading.content.length).toBeGreaterThan(0);
    expect(a2Chapter1.reading.questions.length).toBe(2);
    expect(a2Chapter1.reading.questions[0].correctIndex).toBe(1);
  });

  it('has 15 vocabulary items', () => {
    expect(a2Chapter1.vocabulary.length).toBe(15);
    a2Chapter1.vocabulary.forEach(v => {
      expect(v.turkishWord).toBeTruthy();
      expect(v.albanianWord).toBeTruthy();
      expect(v.category).toBeTruthy();
    });
  });

  it('has interactive grammar example with strategy past_tense', () => {
    expect(a2Chapter1.grammar.length).toBe(2);
    expect(a2Chapter1.grammar[1].interactiveExample?.strategy).toBe('past_tense');
    expect(a2Chapter1.grammar[1].interactiveExample?.root).toBe('gel');
  });

  it('has exercises of standard types', () => {
    expect(a2Chapter1.exercises.length).toBe(5);
    expect(a2Chapter1.exercises[0].type).toBe('MULTIPLE_CHOICE');
    expect(a2Chapter1.exercises[1].type).toBe('WORD_SORT');
    expect(a2Chapter1.exercises[2].type).toBe('SUFFIX_BUILDER');
  });
});
