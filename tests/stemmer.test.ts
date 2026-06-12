import { describe, it, expect } from 'vitest';
import { cleanTurkishWord, findMatchInDictionary, lookupWord } from '../src/core/harmony/stemmer';

describe('Turkish Agglutinative Suffix Stemmer Tests', () => {
  it('should clean Turkish words correctly', () => {
    expect(cleanTurkishWord('Merhaba!')).toBe('merhaba');
    expect(cleanTurkishWord("Ahmet'in")).toBe('ahmetin');
    expect(cleanTurkishWord('   Türkçe   ')).toBe('türkçe');
    expect(cleanTurkishWord('dağ.')).toBe('dağ');
  });

  it('should resolve base words directly', () => {
    const match = lookupWord('Merhaba');
    expect(match).not.toBeNull();
    expect(match?.word.toLowerCase()).toBe('merhaba');
  });

  it('should resolve plural forms to their singular roots', () => {
    // arabalar -> araba
    const match = lookupWord('arabalar');
    expect(match).not.toBeNull();
    expect(match?.word.toLowerCase()).toBe('araba');
  });

  it('should resolve locative cases to base roots', () => {
    // odada -> oda
    const match = lookupWord('odada');
    expect(match).not.toBeNull();
    expect(match?.word.toLowerCase()).toBe('oda');
  });

  it('should resolve dative/accusative cases to base roots', () => {
    // odaya -> oda
    const match = lookupWord('odaya');
    expect(match).not.toBeNull();
    expect(match?.word.toLowerCase()).toBe('oda');
  });

  it('should resolve possessives with suffix stripping', () => {
    // arkadaşım -> arkadaş
    const match = lookupWord('arkadaşım');
    expect(match).not.toBeNull();
    expect(match?.word.toLowerCase()).toBe('arkadaş');
  });

  it('should handle consonant softening reversals', () => {
    // mesleğin -> meslek (ğ -> k softening reversal)
    const match = lookupWord('mesleğin');
    expect(match).not.toBeNull();
    expect(match?.word.toLowerCase()).toBe('meslek');
    
    // dolabım -> dolap (b -> p softening reversal)
    const match2 = lookupWord('dolabım');
    expect(match2).not.toBeNull();
    expect(match2?.word.toLowerCase()).toBe('dolap');
  });
});
