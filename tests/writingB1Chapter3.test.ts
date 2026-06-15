import { describe, it, expect } from 'vitest';
import { evaluateWriting } from '../src/core/harmony/writingValidation';

describe('B1 Chapter 3 Writing Validation (Chapter ID 23)', () => {
  it('passes valid guided paragraph using simple conditional', () => {
    const res = evaluateWriting(19, "Eğer her gün yeni kelimeler öğrenirsem, Türkçe konuşmam kolaylaşır. Kitap okumak da çok faydalıdır.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni shkruar një paragraf të saktë');
  });

  it('passes valid guided paragraph using past conditional', () => {
    const res = evaluateWriting(19, "Keşke gençken daha fazla yabancı dil öğrenseydim. Dil öğrenmek insanı geliştirir ve yeni kapılar açar.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni shkruar një paragraf të saktë');
  });

  it('passes valid guided paragraph using varsa/yoksa', () => {
    const res = evaluateWriting(19, "Kitap okursak ufkumuz genişler. Eğer vaktim varsa her gün en az otuz sayfa kitap okumak isterim.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni shkruar një paragraf të saktë');
  });

  it('flags short inputs below 60 characters', () => {
    const res = evaluateWriting(19, "Keşke çalışsaydım."); // < 60 chars
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('të paktën 60 karaktere');
  });

  it('flags missing conditional/wish structures', () => {
    const res = evaluateWriting(19, "Türkçe öğrenmek çok güzel bir şey. Kitap okumayı ve yeni diller öğrenmeyi çok seviyorum. Herkese tavsiye ederim."); // >= 60 chars, but no conditional
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Nuk u gjet asnjë strukturë kushtore ose dëshirore');
  });
});
