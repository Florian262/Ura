import { describe, it, expect } from 'vitest';
import { getLastVowel, isBackVowel, isFrontException, getVowelHarmony2, getVowelHarmony4 } from '../src/core/harmony/vowelHarmony';
import { endsWithKetcap, applyConsonantMutation } from '../src/core/harmony/consonantMutation';
import { PluralStrategy } from '../src/core/harmony/strategies/pluralStrategy';
import { HabitoreStrategy } from '../src/core/harmony/strategies/habitoreStrategy';

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
});
