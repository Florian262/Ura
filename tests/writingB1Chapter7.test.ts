import { describe, it, expect } from 'vitest';
import { evaluateWriting } from '../src/core/harmony/writingValidation';

describe('B1 Chapter 7 Writing Validation (Chapter ID 27)', () => {
  it('passes valid guided paragraph using two relative participles (katıldığım, evlenen)', () => {
    // 101 characters (>= 60)
    const res = evaluateWriting(23, "Dün katıldığım düğün çok güzeldi. Evlenen çift çok mutlu görünüyordu ve herkes doyasıya eğlendi.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni shkruar një paragraf të saktë');
  });

  it('passes valid guided paragraph using other relative participles (yapacağımız, gelen)', () => {
    // 98 characters (>= 60)
    const res = evaluateWriting(23, "Gelecek hafta yapacağımız kutlama için hazırlıklar tamamlandı. Gelen tüm misafirler çok eğlenecek.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni shkruar një paragraf të saktë');
  });

  it('flags short inputs below 60 characters', () => {
    const res = evaluateWriting(23, "Katıldığım düğün güzeldi."); // < 60 chars
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('të paktën 60 karaktere');
  });

  it('flags missing relative participles (zero participles)', () => {
    // 81 characters (>= 60) but no participles
    const res = evaluateWriting(23, "Dün bir düğün vardı ve biz oraya gittik. Herkes dans etti ve yemek yedi, çok eğlendik.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Duhet të përdorni të paktën dy pjesore relative');
  });

  it('flags inputs with only one relative participle', () => {
    // 82 characters (>= 60) but only one relative participle (katıldığım)
    const res = evaluateWriting(23, "Dün katıldığım tören çok eğlenceli geçti. Herkes dans etti, yemek yedi ve müzik dinledi.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Duhet të përdorni të paktën dy pjesore relative');
  });
});
