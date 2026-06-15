import { describe, it, expect } from 'vitest';
import { evaluateWriting } from '../src/core/harmony/writingValidation';

describe('B1 Chapter 6 Writing Validation (Chapter ID 26)', () => {
  it('passes valid guided paragraph using two passive verbs', () => {
    // 101 characters (>= 60)
    const res = evaluateWriting(22, "Geçen yıl harika bir film çekildi ve televizyonda yayınlandı. Herkes bu yapımı büyük bir ilgiyle izledi.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni shkruar një paragraf të saktë');
  });

  it('passes valid guided paragraph using other passive verbs', () => {
    // 98 characters (>= 60)
    const res = evaluateWriting(22, "Bu roman ünlü yazar tarafından yazıldı. Kitap çok izlenen bir film projesi haline getirildi.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni shkruar një paragraf të saktë');
  });

  it('flags short inputs below 60 characters', () => {
    const res = evaluateWriting(22, "Film çekildi."); // < 60 chars
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('të paktën 60 karaktere');
  });

  it('flags missing passive verbs (zero passive verbs)', () => {
    // 84 characters (>= 60) but no passive verbs
    const res = evaluateWriting(22, "Ben dün sinemaya gittim ve güzel bir film izledim. Yeni romanı hemen satın aldım.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Duhet të përdorni të paktën dy folje në formën pasive');
  });

  it('flags inputs with only one passive verb', () => {
    // 86 characters (>= 60) but only one passive verb (yazıldı)
    const res = evaluateWriting(22, "Bu roman ünlü bir yazar tarafından yazıldı. Ben kitabı dün kütüphanede okumaya başladım.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Duhet të përdorni të paktën dy folje në formën pasive');
  });
});
