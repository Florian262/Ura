import { describe, it, expect } from 'vitest';
import { getLastVowel, isBackVowel, isFrontException, getVowelHarmony2, getVowelHarmony4 } from '../src/core/harmony/vowelHarmony';
import { endsWithKetcap, applyConsonantMutation } from '../src/core/harmony/consonantMutation';
import { PluralStrategy } from '../src/core/harmony/strategies/pluralStrategy';
import { HabitoreStrategy } from '../src/core/harmony/strategies/habitoreStrategy';
import { LocativeStrategy } from '../src/core/harmony/strategies/LocativeStrategy';
import { CopulaStrategy } from '../src/core/harmony/strategies/CopulaStrategy';
import { PresentContinuousStrategy } from '../src/core/harmony/strategies/PresentContinuousStrategy';
import { DativeStrategy } from '../src/core/harmony/strategies/DativeStrategy';
import { PossessiveStrategy } from '../src/core/harmony/strategies/PossessiveStrategy';
import { AccusativeStrategy } from '../src/core/harmony/strategies/AccusativeStrategy';
import { QuestionStrategy } from '../src/core/harmony/strategies/QuestionStrategy';

describe('Vowel Harmony Logic', () => {
  it('getLastVowel extracts last vowel correctly', () => {
    expect(getLastVowel('kitap')).toBe('a');
    expect(getLastVowel('renk')).toBe('e');
    expect(getLastVowel('köprü')).toBe('ü');
    expect(getLastVowel('saat')).toBe('a');
  });

  it('isBackVowel resolves correctly', () => {
    expect(isBackVowel('a')).toBe(true);
    expect(isBackVowel('ı')).toBe(true);
    expect(isBackVowel('e')).toBe(false);
    expect(isBackVowel('ü')).toBe(false);
  });

  it('isFrontException identifies loanword exceptions', () => {
    expect(isFrontException('saat')).toBe(true);
    expect(isFrontException('alkol')).toBe(true);
    expect(isFrontException('okul')).toBe(false);
  });

  it('getVowelHarmony2 resolves 2-way harmony', () => {
    expect(getVowelHarmony2('okul')).toBe('a'); // back vowel -> a
    expect(getVowelHarmony2('ev')).toBe('e'); // front vowel -> e
    expect(getVowelHarmony2('saat')).toBe('e'); // exception -> e
  });

  it('getVowelHarmony4 resolves 4-way harmony', () => {
    expect(getVowelHarmony4('kitap')).toBe('ı'); // a,ı -> ı
    expect(getVowelHarmony4('ev')).toBe('i'); // e,i -> i
    expect(getVowelHarmony4('okul')).toBe('u'); // o,u -> u
    expect(getVowelHarmony4('gör')).toBe('ü'); // ö,ü -> ü
    expect(getVowelHarmony4('saat')).toBe('i'); // exception -> i
  });
});

describe('Consonant Mutation Logic', () => {
  it('endsWithKetcap checks letters p, ç, t, k', () => {
    expect(endsWithKetcap('kitap')).toBe(true);
    expect(endsWithKetcap('saç')).toBe(true);
    expect(endsWithKetcap('okul')).toBe(false);
  });

  it('applyConsonantMutation voices correct consonants', () => {
    expect(applyConsonantMutation('kitap')).toBe('kitab');
    expect(applyConsonantMutation('köpek')).toBe('köpeğ');
    expect(applyConsonantMutation('renk')).toBe('reng'); // nk -> ng exception
  });

  it('applyConsonantMutation skips exceptions', () => {
    expect(applyConsonantMutation('süt')).toBe('süt');
    expect(applyConsonantMutation('üç')).toBe('üç');
  });

  it('applyConsonantMutation mutates special single syllables', () => {
    expect(applyConsonantMutation('git')).toBe('gid');
    expect(applyConsonantMutation('tat')).toBe('tad');
  });
});

describe('Grammar Suffix Strategies', () => {
  it('PluralStrategy applies -lar/-ler based on 2-way harmony', () => {
    const strategy = new PluralStrategy();
    expect(strategy.apply('okul').result).toBe('okullar');
    expect(strategy.apply('ev').result).toBe('evler');
    expect(strategy.apply('saat').result).toBe('saatler'); // Loanword exception
  });

  it('HabitoreStrategy applies -miş/-müş/-müş/-miş based on 4-way harmony', () => {
    const strategy = new HabitoreStrategy();
    expect(strategy.apply('gel').result).toBe('gelmiş');
    expect(strategy.apply('yaz').result).toBe('yazmış');
    expect(strategy.apply('oku').result).toBe('okumuş');
    expect(strategy.apply('gör').result).toBe('görmüş');
  });

  it('LocativeStrategy applies -da/-de/-ta/-te based on vowel harmony and voiceless consonants', () => {
    const strategy = new LocativeStrategy();
    expect(strategy.apply('okul').result).toBe('okulda');
    expect(strategy.apply('ev').result).toBe('evde');
    expect(strategy.apply('sınıf').result).toBe('sınıfta');
    expect(strategy.apply('ofis').result).toBe('ofiste');
    expect(strategy.apply('saat').result).toBe('saatte');
  });

  it('CopulaStrategy applies first-person singular copula with 4-way harmony and buffer consonants', () => {
    const strategy = new CopulaStrategy();
    expect(strategy.apply('öğretmen').result).toBe('öğretmenim');
    expect(strategy.apply('öğrenci').result).toBe('öğrenciyim');
    expect(strategy.apply('doktor').result).toBe('doktorum');
    expect(strategy.apply('baba').result).toBe('babayım');
    expect(strategy.apply('Türk').result).toBe("Türk'üm");
    expect(strategy.apply('Arnavut').result).toBe("Arnavut'um");
  });

  it('PresentContinuousStrategy applies first-person singular present continuous with narrowing and mutation', () => {
    const strategy = new PresentContinuousStrategy();
    // Regular consonants
    expect(strategy.apply('gel').result).toBe('geliyorum');
    expect(strategy.apply('yaz').result).toBe('yazıyorum');
    expect(strategy.apply('koş').result).toBe('koşuyorum');
    expect(strategy.apply('gör').result).toBe('görüyorum');
    // High vowels
    expect(strategy.apply('oku').result).toBe('okuyorum');
    expect(strategy.apply('yürü').result).toBe('yürüyorum');
    // Vowel narrowing
    expect(strategy.apply('dinle').result).toBe('dinliyorum');
    expect(strategy.apply('başla').result).toBe('başlıyorum');
    expect(strategy.apply('özle').result).toBe('özlüyorum');
    expect(strategy.apply('ara').result).toBe('arıyorum');
    // Consonant mutation
    expect(strategy.apply('git').result).toBe('gidiyorum');
    expect(strategy.apply('et').result).toBe('ediyorum');
  });

  it('DativeStrategy applies dative case -a/-e with buffer consonant and proper noun apostrophes', () => {
    const strategy = new DativeStrategy();
    expect(strategy.apply('okul').result).toBe('okula');
    expect(strategy.apply('ev').result).toBe('eve');
    expect(strategy.apply('sinema').result).toBe('sinemaya');
    expect(strategy.apply('ofis').result).toBe('ofise');
    // Proper nouns
    expect(strategy.apply('Tiran').result).toBe("Tiran'a");
    expect(strategy.apply('İstanbul').result).toBe("İstanbul'a");
    expect(strategy.apply('Kosova').result).toBe("Kosova'ya");
    // Loanword exception
    expect(strategy.apply('saat').result).toBe('saate');
  });

  it('PossessiveStrategy applies Benim first-person singular possessive -m/-im/-ım/-um/-üm', () => {
    const strategy = new PossessiveStrategy();
    expect(strategy.apply('ev').result).toBe('evim');
    expect(strategy.apply('baba').result).toBe('babam');
    expect(strategy.apply('anne').result).toBe('annem');
    expect(strategy.apply('doktor').result).toBe('doktorum');
    expect(strategy.apply('çanta').result).toBe('çantam');
    expect(strategy.apply('defter').result).toBe('defterim');
    expect(strategy.apply('göz').result).toBe('gözüm');
  });

  it('AccusativeStrategy applies accusative case -i/-ı/-u/-ü with buffer consonant, KETÇAP mutations, and proper noun preservation', () => {
    const strategy = new AccusativeStrategy();
    expect(strategy.apply('ev').result).toBe('evi');
    expect(strategy.apply('elma').result).toBe('elmayı');
    expect(strategy.apply('çanta').result).toBe('çantayı');
    expect(strategy.apply('göz').result).toBe('gözü');
    // Common noun KETÇAP mutation
    expect(strategy.apply('kitap').result).toBe('kitabı');
    expect(strategy.apply('çilek').result).toBe('çileği');
    expect(strategy.apply('renk').result).toBe('rengi');
    // Proper noun spelling preservation with apostrophe
    expect(strategy.apply('Ahmet').result).toBe("Ahmet'i");
    expect(strategy.apply('Kosova').result).toBe("Kosova'yı");
    // Loanword exception
    expect(strategy.apply('saat').result).toBe('saati');
  });

  it('QuestionStrategy applies question particle mı/mi/mu/mü with space separation', () => {
    const strategy = new QuestionStrategy();
    expect(strategy.apply('ev').result).toBe('ev mi?');
    expect(strategy.apply('kitap').result).toBe('kitap mı?');
    expect(strategy.apply('okul').result).toBe('okul mu?');
    expect(strategy.apply('süt').result).toBe('süt mü?');
  });
});
