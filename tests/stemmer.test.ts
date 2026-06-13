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

  it('should handle nested multi-layered recursive suffix stripping', () => {
    // odalarımda -> odalarım -> odalar -> oda
    const match = lookupWord('odalarımda');
    expect(match).not.toBeNull();
    expect(match?.word.toLowerCase()).toBe('oda');

    // evlerimizden -> evlerimiz -> evler -> ev
    const match2 = lookupWord('evlerimizden');
    expect(match2).not.toBeNull();
    expect(match2?.word.toLowerCase()).toBe('ev');

    // özgeçmişimi -> özgeçmişim -> özgeçmiş (B1 vocab)
    const match3 = lookupWord('özgeçmişimi');
    expect(match3).not.toBeNull();
    expect(match3?.word.toLowerCase()).toBe('özgeçmiş');
  });

  it('should resolve basic grammar structural vocabulary', () => {
    // ben -> ben
    const match = lookupWord('ben');
    expect(match).not.toBeNull();
    expect(match?.word.toLowerCase()).toBe('ben');

    // ve -> ve
    const match2 = lookupWord('ve');
    expect(match2).not.toBeNull();
    expect(match2?.word.toLowerCase()).toBe('ve');

    // ne -> ne
    const match3 = lookupWord('ne');
    expect(match3).not.toBeNull();
    expect(match3?.word.toLowerCase()).toBe('ne');
  });

  it('should resolve proper nouns with apostrophe suffixes correctly', () => {
    // Ahmet'in -> Ahmetin -> Ahmet (grammar vocab)
    const match = lookupWord("Ahmet'in");
    expect(match).not.toBeNull();
    expect(match?.word.toLowerCase()).toBe('ahmet');

    // Arnavut'um -> Arnavutum -> Arnavut (A1 vocab)
    const match2 = lookupWord("Arnavut'um");
    expect(match2).not.toBeNull();
    expect(match2?.word.toLowerCase()).toBe('arnavut');
  });

  it('should handle verb infinitive fallback mapping and complex verb suffixes', () => {
    // paylaşılıyor -> paylaşıl -> paylaş -> Paylaşmak (B1 vocab)
    const match = lookupWord('paylaşılıyor');
    expect(match).not.toBeNull();
    expect(match?.word.toLowerCase()).toBe('paylaşmak');

    // öğrenebiliyoruz -> öğrenebilir -> öğrenebil -> öğren -> Öğrenmek (A1 vocab)
    const match2 = lookupWord('öğrenebiliyoruz');
    expect(match2).not.toBeNull();
    expect(match2?.word.toLowerCase()).toBe('öğrenmek');

    // karşılaştığımız -> karşılaştığı -> karşılaştığ -> karşılaş -> Karşılaşmak (A2 vocab)
    const match3 = lookupWord('karşılaştığımız');
    expect(match3).not.toBeNull();
    expect(match3?.word.toLowerCase()).toBe('karşılaşmak');
  });

  it('should resolve newly added common structural words and degree adverbs', () => {
    // için -> için
    const match = lookupWord('için');
    expect(match).not.toBeNull();
    expect(cleanTurkishWord(match?.word)).toBe('için');

    // en -> en
    const match2 = lookupWord('en');
    expect(match2).not.toBeNull();
    expect(cleanTurkishWord(match2?.word)).toBe('en');

    // daha -> daha
    const match3 = lookupWord('daha');
    expect(match3).not.toBeNull();
    expect(cleanTurkishWord(match3?.word)).toBe('daha');

    // gibi -> gibi
    const match4 = lookupWord('gibi');
    expect(match4).not.toBeNull();
    expect(cleanTurkishWord(match4?.word)).toBe('gibi');

    // birçok -> birçok
    const match5 = lookupWord('birçok');
    expect(match5).not.toBeNull();
    expect(cleanTurkishWord(match5?.word)).toBe('birçok');
  });
});
