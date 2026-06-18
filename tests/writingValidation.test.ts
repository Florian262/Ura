import { describe, it, expect } from 'vitest';
import { 
  getLevenshteinDistance, 
  normalizeText, 
  evaluateWriting, 
  findTypoDetails 
} from '../src/core/harmony/writingValidation';

describe('Writing Validation Utilities', () => {
  it('getLevenshteinDistance calculates edit distance correctly', () => {
    expect(getLevenshteinDistance('gittim', 'gittim')).toBe(0);
    expect(getLevenshteinDistance('gittim', 'gitim')).toBe(1); // 1 deletion
    expect(getLevenshteinDistance('gittim', 'gittin')).toBe(1); // 1 substitution
    expect(getLevenshteinDistance('gittim', 'gittimi')).toBe(1); // 1 insertion
    expect(getLevenshteinDistance('gittim', 'gitinm')).toBe(2); // 1 deletion + 1 insertion
  });

  it('normalizeText cleans input strings', () => {
    expect(normalizeText('  Merhaba! Benim adim Valbona.  ')).toBe('merhaba benim adim valbona');
    expect(normalizeText('Kitap masada, defter çantada.')).toBe('kitap masada defter çantada');
  });

  it('findTypoDetails identifies specific word spelling mistakes', () => {
    const feedback = findTypoDetails('kitap masada defter cantade', 'kitap masada defter çantada');
    expect(feedback).toContain('cantade');
    expect(feedback).toContain('çantada');
  });
});

describe('Writing Grading Engine - Chapter Evaluations', () => {
  // CHAPTER 1 (Guided Intro)
  it('Chapter 1 passes valid introductions', () => {
    const res = evaluateWriting(1, "Merhaba! Benim adım Valbona. Tiranlıyım.");
    expect(res.status).toBe('success');
  });

  it('Chapter 1 flags missing greetings or names', () => {
    const res = evaluateWriting(1, "Benim adım Valbona. Tiranlıyım."); // Missing greeting
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Mungon përshëndetja');
  });

  it('Chapter 1 flags vowel harmony issues in origin suffix', () => {
    const res = evaluateWriting(1, "Merhaba. Benim adım Valbona. Tiranliyim."); // should be Tiranlıyım
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Gabim Harmonie te origjina');
  });

  // CHAPTER 2 (Translation - Locative)
  it('Chapter 2 passes perfect translations', () => {
    const res = evaluateWriting(2, "Kitap masada, defter çantada.");
    expect(res.status).toBe('success');
  });

  it('Chapter 2 flags spelling typos', () => {
    const res = evaluateWriting(2, "Kitap masada, defter cantada."); // c -> ç typo
    expect(res.status).toBe('typo');
    expect(res.feedback).toContain('gabime të vogla gërmëzimi');
  });

  it('Chapter 2 flags locative vowel harmony errors', () => {
    const res = evaluateWriting(2, "Kitap masade, defter çantada."); // masade instead of masada
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Gabim Harmonie Vokalore');
  });

  // CHAPTER 3 (Translation - Past Tense, ID 8)
  it('Chapter 3 (ID 8) passes perfect translations', () => {
    const res = evaluateWriting(3, "Dün okula gittim ve bir kitap okudum.");
    expect(res.status).toBe('success');
  });

  it('Chapter 3 (ID 8) flags incorrect conjugations or person errors', () => {
    const res = evaluateWriting(3, "Dün okula gitti ve bir kitap okudu."); // 3rd person instead of 1st person
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('gittim');
  });

  // CHAPTER 4 (Guided - Habitore -miş, ID 9)
  it('Chapter 4 (ID 9) checks habitore suffix harmony', () => {
    const resOk = evaluateWriting(4, "Ahmet dün okula gitmiş.");
    expect(resOk.status).toBe('success');

    const resErr = evaluateWriting(4, "Ahmet dün okula gitmış."); // harmony error: git + mış
    expect(resErr.status).toBe('error');
    expect(resErr.feedback).toContain('Gabim Harmonie Vokalore');
  });

  // CHAPTER 5 (Guided - Conditional -se, ID 10)
  it('Chapter 5 (ID 10) checks conditional suffix harmony', () => {
    const resOk = evaluateWriting(5, "Yağmur yağarsa evde kalırız.");
    expect(resOk.status).toBe('success');

    const resErr = evaluateWriting(5, "Yağmur yağerse evde kalırız."); // harmony error
    expect(resErr.status).toBe('error');
  });

  // CHAPTER 6 (Guided - Participles, ID 11)
  it('Chapter 6 (ID 11) checks participle structures', () => {
    const resOk = evaluateWriting(6, "Dün gelen adamı gördüm.");
    expect(resOk.status).toBe('success');
  });

  // CHAPTER 7 (Guided - Balkan Idioms, ID 12)
  it('Chapter 7 (ID 12) checks shared idioms presence', () => {
    const resOk = evaluateWriting(7, "Öğretmenin gözünden düşmek istemiyorum.");
    expect(resOk.status).toBe('success');

    const resErr = evaluateWriting(7, "Okula gitmek istiyorum."); // no idiom
    expect(resErr.status).toBe('error');
    expect(resErr.feedback).toContain('Nuk u gjet asnjë nga idiomat');
  });

  // CHAPTER 8 (Translation - Sayılar, Var/Yok & Pyetjet, ID 13)
  it('Chapter 8 (ID 13) passes perfect translations', () => {
    const res = evaluateWriting(8, "Çantada üç kalem var mı?");
    expect(res.status).toBe('success');
  });

  it('Chapter 8 (ID 13) flags spelling/translation typos', () => {
    const res = evaluateWriting(8, "Cantada üç kalem var mı?"); // typo c instead of ç
    expect(res.status).toBe('typo');
  });

  it('Chapter 8 (ID 13) flags missing keywords or structure errors', () => {
    const res = evaluateWriting(8, "Çantada üç kalem var."); // missing question mı?
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('Mungon pjesëza pyetëse');
  });

  // B1 CHAPTER 1 (ID 4 - Past Continuous / -ken & Conjunctions)
  describe('B1 Chapter 1 (ID 4) Writing Validation', () => {
    it('passes valid guided paragraph', () => {
      const res = evaluateWriting(17, "Ben kitap okuyorken telefonuma bir bildirim geldi. Çok heyecanlandım, fakat hemen cevap yazamadım.");
      expect(res.status).toBe('success');
    });

    it('flags short inputs below 60 characters', () => {
      const res = evaluateWriting(17, "Ben okuyordum fakat telefon geldi."); // < 60 chars
      expect(res.status).toBe('error');
      expect(res.feedback).toContain('shkruani të paktën 60 karaktere');
    });

    it('flags missing past continuous or -ken patterns', () => {
      const res = evaluateWriting(17, "Ben kitap okudum. Telefonuma bir bildirim geldi. Çok heyecanlandım fakat cevap yazamadım."); // okudum is simple past, missing okuyorken/okuyordum
      expect(res.status).toBe('error');
      expect(res.feedback).toContain('Mungon përdorimi i kohës së shkuar të vazhdueshme');
    });

    it('flags missing B1 conjunctions', () => {
      const res = evaluateWriting(17, "Ben kitap okuyorken telefonuma bir bildirim geldi. Çok heyecanlandım. Hemen cevap yazamadım."); // missing fakat/oysa/ama
      expect(res.status).toBe('error');
      expect(res.feedback).toContain('Mungon një nga lidhëzat');
    });
  });

  // B1 CHAPTER 2 (ID 22 - Reciprocal Voice)
  describe('B1 Chapter 2 (ID 22) Writing Validation', () => {
    it('passes valid reciprocal dialogue description', () => {
      const res = evaluateWriting(18, "Biz dün kafede buluştuk ve yeni projeyi görüştük. Her konuda anlaştık ve fikirlerimizi paylaştık.");
      expect(res.status).toBe('success');
    });

    it('flags short inputs below 60 characters', () => {
      const res = evaluateWriting(18, "Biz buluştuk ve görüştük."); // < 60 chars
      expect(res.status).toBe('error');
      expect(res.feedback).toContain('shkruani të paktën 60 karaktere');
    });

    it('flags missing reciprocal voice verbs', () => {
      const res = evaluateWriting(18, "Biz dün kafede kahve içtik ve yeni proje hakkında konuştuk. Her fikir hakkında karar verdik."); // no buluşmak, görüşmek etc.
      expect(res.status).toBe('error');
      expect(res.feedback).toContain('Mungon përdorimi i foljeve reciproke');
    });
  });

  // B2 CHAPTER 2 (ID 26 - Env & -DIK nominalization)
  describe('B2 Chapter 2 (ID 26) Writing Validation', () => {
    it('passes valid environmental description', () => {
      const res = evaluateWriting(26, "Günümüzde küresel ısınmanın doğa üzerindeki yıkıcı etkilerini yakından hissediyoruz. Çevreyi korumak için acil önlemler alınması gerektiğini düşünüyorum.");
      expect(res.status).toBe('success');
    });

    it('flags missing -DIK nominalization', () => {
      const res = evaluateWriting(26, "Günümüzde küresel ısınmanın doğa üzerindeki yıkıcı etkilerini yakından hissediyoruz. Çevreyi korumak için acil önlemler almalıyız.");
      expect(res.status).toBe('error');
      expect(res.feedback).toContain("Mungon përdorimi i nominalizimit me prapashtesën");
    });

    it('flags missing environment keywords', () => {
      const res = evaluateWriting(26, "Bizim çok çalıştığımızı biliyorlar çünkü sınavı kazandık. Yarın sinemaya gideceğimizi söylediler ama biz gitmek istemiyoruz çünkü çok yorgunuz.");
      expect(res.status).toBe('error');
      expect(res.feedback).toContain("Mungon përdorimi i fjalëve kyçe të mjedisit");
    });
  });
});
