import { describe, it, expect } from 'vitest';
import { evaluateWriting } from '../src/core/harmony/writingValidation';

describe('B1 Chapter 4 Writing Validation (Chapter ID 24)', () => {
  it('passes valid guided paragraph using necessity (-meli/-malı)', () => {
    const res = evaluateWriting(20, "Yeni evime geçen hafta taşındım. Evde çok gürültü yapmamalıyız çünkü komşular rahatsız olabilir.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni shkruar një paragraf të saktë');
  });

  it('passes valid guided paragraph using temporal since (-diğinden beri)', () => {
    const res = evaluateWriting(20, "Türkçe öğrenmeye başladığımdan beri her gün yeni kelimeler çalışıyorum. Daha çok pratik yapmalıyım.");
    expect(res.status).toBe('success');
    expect(res.feedback).toContain('Keni shkruar një paragraf të saktë');
  });

  it('flags short inputs below 60 characters', () => {
    const res = evaluateWriting(20, "Çok çalışmalıyım."); // < 60 chars
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('të paktën 60 karaktere');
  });

  it('flags missing required grammar structures', () => {
    const res = evaluateWriting(20, "Yeni bir ev kiraladım. Komşularımla tanıştım ve apartman kurallarını hemen öğrendim. Her şey harika."); // >= 60 chars but no -meli or -diğinden beri
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Duhet të përdorni të paktën një prapashtesë detyrimi');
  });

  it('flags vowel harmony violations in temporal since suffix', () => {
    // geldiğından beri (should be geldiğinden beri)
    const res = evaluateWriting(20, "Buraya geldiğından beri her gün yeni kelimeler çalışıyorum ve derslerimi tekrar ediyorum.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Gabim Harmonie Vokalore');
  });

  it('flags consonant mutation violations in temporal since suffix', () => {
    // yapdığımdan beri (should be yaptığımdan beri)
    const res = evaluateWriting(20, "Temizlik yapdığımdan beri ev tertemiz duruyor. Herkes çok dikkatli davranmalı.");
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Gabim Mutacioni');
  });
});
