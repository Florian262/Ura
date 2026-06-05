import { describe, it, expect } from 'vitest';
import { AdverbialIpStrategy } from '../src/core/harmony/strategies/AdverbialIpStrategy';
import { a2Chapter8 } from '../src/infrastructure/db/lessons/a2_chapter8';
import { evaluateWriting } from '../src/core/harmony/writingValidation';

describe('AdverbialIpStrategy Conjugation (-ip / -ıp / -up / -üp)', () => {
  const strategy = new AdverbialIpStrategy();

  it('handles regular consonant-ending roots', () => {
    expect(strategy.apply('yap').result).toBe('yapıp');
    expect(strategy.apply('gel').result).toBe('gelip');
    expect(strategy.apply('gör').result).toBe('görüp');
    expect(strategy.apply('koş').result).toBe('koşup');
  });

  it('handles vowel-ending roots by inserting y buffer', () => {
    expect(strategy.apply('oku').result).toBe('okuyup');
    expect(strategy.apply('yürü').result).toBe('yürüyüp');
    expect(strategy.apply('oyna').result).toBe('oynayıp');
    expect(strategy.apply('dinle').result).toBe('dinleyip');
  });

  it('applies KETÇAP voicing mutation for git and et', () => {
    expect(strategy.apply('git').result).toBe('gidip');
    expect(strategy.apply('et').result).toBe('edip');
  });
});

describe('A2 Chapter 8 Lesson Blueprint (ID 20)', () => {
  it('conforms to lesson schema constraints', () => {
    expect(a2Chapter8.id).toBe(20);
    expect(a2Chapter8.level).toBe('A2');
    expect(a2Chapter8.orderIndex).toBe(8);
    expect(a2Chapter8.title.turkish).toBe('Bağlaçlar ve Kolay Zarf-Fiiller');
    expect(a2Chapter8.reading.layoutStyle).toBe('blog_post');
    expect(a2Chapter8.vocabulary.length).toBe(12);
    expect(a2Chapter8.grammar.length).toBe(2);
    expect(a2Chapter8.exercises.length).toBe(5);
  });

  it('contains exactly 100 words in the Turkish reading block', () => {
    const totalWordCount = a2Chapter8.reading.content
      .map(p => p.text.trim().split(/\s+/).length)
      .reduce((a, b) => a + b, 0);
    expect(totalWordCount).toBe(100);
  });
});

describe('Writing Validation for A2 Chapter 8 (ID 20)', () => {
  it('passes valid sentences containing connectors', () => {
    const res = evaluateWriting(20, "Sabah uyanıp kahvaltı yaptım çünkü çok açtım.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni përshkruar saktë veprimet dhe arsyet');
  });

  it('passes valid sentences using -ip adverbials and other connectors', () => {
    const res = evaluateWriting(20, "Kütüphaneye gidip ders çalıştım, bu yüzden yoruldum.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni përshkruar saktë veprimet dhe arsyet');
  });

  it('fails inputs that are under 10 characters', () => {
    const res = evaluateWriting(20, "Gidip");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('shumë i shkurtër');
  });

  it('fails inputs missing both connectors and -ip forms', () => {
    const res = evaluateWriting(20, "Ben bugün evde ders çalıştım.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain("Sigurohuni që të përdorni të paktën një lidhëz");
  });

  it('fails inputs with voicing violations (gitip instead of gidip)', () => {
    const res = evaluateWriting(20, "Dün markete gitip meyve aldım.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain("Gabim Zbutjeje: Bashkëtingëllorja 't' e foljes 'git' duhet të zbutet në 'd'");
  });

  it('fails inputs with vowel harmony violations in the -ip suffix', () => {
    const res = evaluateWriting(20, "Bugün eve gelıp dinlendim.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain("Gabim Harmonie: Rrënja 'gel' kërkon prapashtesën '-ip'");
  });
});
