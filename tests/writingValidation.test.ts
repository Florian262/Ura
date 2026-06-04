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

  // CHAPTER 3 (Translation - Past Tense)
  it('Chapter 3 passes perfect translations', () => {
    const res = evaluateWriting(3, "Dün okula gittim ve bir kitap okudum.");
    expect(res.status).toBe('success');
  });

  it('Chapter 3 flags incorrect conjugations or person errors', () => {
    const res = evaluateWriting(3, "Dün okula gitti ve bir kitap okudu."); // 3rd person instead of 1st person
    expect(res.status).toBe('error');
    expect(res.feedback).toContain('gittim');
  });

  // CHAPTER 4 (Guided - Habitore -miş)
  it('Chapter 4 checks habitore suffix harmony', () => {
    const resOk = evaluateWriting(4, "Ahmet dün okula gitmiş.");
    expect(resOk.status).toBe('success');

    const resErr = evaluateWriting(4, "Ahmet dün okula gitmış."); // harmony error: git + mış
    expect(resErr.status).toBe('error');
    expect(resErr.feedback).toContain('Gabim Harmonie Vokalore');
  });

  // CHAPTER 5 (Guided - Conditional -se)
  it('Chapter 5 checks conditional suffix harmony', () => {
    const resOk = evaluateWriting(5, "Yağmur yağarsa evde kalırız.");
    expect(resOk.status).toBe('success');

    const resErr = evaluateWriting(5, "Yağmur yağerse evde kalırız."); // harmony error
    expect(resErr.status).toBe('error');
  });

  // CHAPTER 6 (Guided - Participles)
  it('Chapter 6 checks participle structures', () => {
    const resOk = evaluateWriting(6, "Dün gelen adamı gördüm.");
    expect(resOk.status).toBe('success');
  });

  // CHAPTER 7 (Guided - Balkan Idioms)
  it('Chapter 7 checks shared idioms presence', () => {
    const resOk = evaluateWriting(7, "Öğretmenin gözünden düşmek istemiyorum.");
    expect(resOk.status).toBe('success');

    const resErr = evaluateWriting(7, "Okula gitmek istiyorum."); // no idiom
    expect(resErr.status).toBe('error');
    expect(resErr.feedback).toContain('Nuk u gjet asnjë nga idiomat');
  });
});
