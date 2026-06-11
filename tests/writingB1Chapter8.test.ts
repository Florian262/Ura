import { describe, it, expect } from 'vitest';
import { evaluateWriting } from '../src/core/harmony/writingValidation';

describe('B1 Chapter 8 Writing Validation (Chapter ID 28)', () => {
  it('passes valid guided paragraph using relative participle and reflexive kendi', () => {
    // 135 characters (>= 60)
    const res = evaluateWriting(28, "Benim yazdığım otobiyografi çok ilginçti çünkü kendi hayatımı ve başarılarımı anlattım. Eğer çalışırsam Türkçeyi öğreneceğim.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni shkruar një autobiografi ose përmbledhje të saktë');
  });

  it('passes valid guided paragraph using relative participle and conditional form', () => {
    // 101 characters (>= 60)
    const res = evaluateWriting(28, "Türkçe öğrenmek için başladığım bu yolda her gün çalışırsam hedeflerimi kolayca başarabilirim.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni shkruar një autobiografi ose përmbledhje të saktë');
  });

  it('flags short inputs below 60 characters', () => {
    const res = evaluateWriting(28, "Yazdığım otobiyografi."); // < 60 chars
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('të paktën 60 karaktere');
  });

  it('flags missing relative participles', () => {
    // 88 characters (>= 60) but no relative participle
    const res = evaluateWriting(28, "Ben kendi hayatımı yazdım ve bu kursta çok çalıştım. Gelecekte başarılı olmak istiyorum.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Duhet të përdorni të paktën një pjesore relative');
  });

  it('flags missing passive/reflexive/conditional forms', () => {
    // 90 characters (>= 60) but only participles, no passive/reflexive/conditional
    const res = evaluateWriting(28, "Bizim gördüğümüz ve öğrendiğimiz konular çok kolaydı. Yarın yeni bir kitaba başlayacağız.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('përemër vetvetor (\'kendi\'), folje pasive/vetvetore');
  });
});
