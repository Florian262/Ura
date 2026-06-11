import { describe, it, expect } from 'vitest';
import { evaluateWriting } from '../src/core/harmony/writingValidation';

describe('B1 Chapter 5 Writing Validation (Chapter ID 25)', () => {
  it('passes valid guided paragraph using reflexive kendi and obligation chain -mak lazım', () => {
    // 101 characters (>= 60)
    const res = evaluateWriting(25, "Hayatta başarılı olmak için kendime güveniyorum. Engelleri aşmak için her gün çok çalışmak lazım.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni shkruar një paragraf të saktë');
  });

  it('passes valid guided paragraph using reflexive verb giyinmek and obligation chain -mak zorunda kalmak', () => {
    // 104 characters (>= 60)
    const res = evaluateWriting(25, "Tiyatro sahnesine çıkmadan önce hızlıca giyinmek zorundaydım. Zaman azdı ama kendime çok güveniyordum.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni shkruar një paragraf të saktë');
  });

  it('flags short inputs below 60 characters', () => {
    const res = evaluateWriting(25, "Kendime inanmak lazım."); // < 60 chars
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('të paktën 60 karaktere');
  });

  it('flags missing reflexive grammar structures (kendi or reflexive verbs)', () => {
    // 97 characters (>= 60) but no kendi or giyin, süslen, hazırlan, etc.
    const res = evaluateWriting(25, "Hayatın her alanında başarılı olmak için durmadan çalışmak ve engeller karşısında pes etmemek lazım.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Duhet të përdorni përemrin vetvetor');
  });

  it('flags missing obligation chain structures (-mak lazım / -mak zorunda)', () => {
    // 98 characters (>= 60) and has kendi, but no -mak lazım or -mak zorunda
    const res = evaluateWriting(25, "Ben her gün kendimi geliştirmeye çalışıyorum. Kitap okuyorum ve yeni yabancı diller öğreniyorum.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Duhet të përdorni të paktën një strukturë detyrimi');
  });
});
