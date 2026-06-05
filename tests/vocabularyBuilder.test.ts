import { describe, it, expect } from 'vitest';
import { a1VocabularyData } from '../src/infrastructure/db/a1Vocabulary';

describe('A1 Thematic Vocabulary Data Tests', () => {
  it('should contain exactly 300 vocabulary items', () => {
    expect(a1VocabularyData.length).toBe(300);
  });

  it('should have exactly 10 unique categories', () => {
    const categories = new Set(a1VocabularyData.map(item => item.category));
    expect(categories.size).toBe(10);
    
    const expectedCategories = [
      'greetings',
      'family',
      'home',
      'cooking',
      'weather',
      'shopping',
      'transport',
      'verbs',
      'adjectives',
      'health'
    ];
    
    expectedCategories.forEach(cat => {
      expect(categories.has(cat as any)).toBe(true);
    });
  });

  it('should contain exactly 30 words in each of the 10 categories', () => {
    const categoryCounts: Record<string, number> = {};
    
    a1VocabularyData.forEach(item => {
      categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
    });

    const expectedCategories = [
      'greetings',
      'family',
      'home',
      'cooking',
      'weather',
      'shopping',
      'transport',
      'verbs',
      'adjectives',
      'health'
    ];

    expectedCategories.forEach(cat => {
      expect(categoryCounts[cat]).toBe(30);
    });
  });

  it('should have a unique id for every vocabulary item', () => {
    const ids = new Set<string>();
    a1VocabularyData.forEach(item => {
      expect(ids.has(item.id)).toBe(false);
      ids.add(item.id);
    });
  });

  it('should conform to the A1VocabularyItem schema constraints', () => {
    a1VocabularyData.forEach(item => {
      // Required string properties
      expect(item.id).toBeDefined();
      expect(typeof item.id).toBe('string');
      expect(item.id.trim().length).toBeGreaterThan(0);

      expect(item.word).toBeDefined();
      expect(typeof item.word).toBe('string');
      expect(item.word.trim().length).toBeGreaterThan(0);

      expect(item.translation).toBeDefined();
      expect(typeof item.translation).toBe('string');
      expect(item.translation.trim().length).toBeGreaterThan(0);

      // Category check
      const validCategories = [
        'greetings',
        'family',
        'home',
        'cooking',
        'weather',
        'shopping',
        'transport',
        'verbs',
        'adjectives',
        'health'
      ];
      expect(validCategories).toContain(item.category);

      // Part of speech check
      const validPOS = ['emër', 'folje', 'mbiemër', 'ndajfolje', 'përemër', 'lidhëz', 'pasthirrmë', 'shprehje'];
      expect(validPOS).toContain(item.pos);

      // Optional balkan check
      if (item.is_balkan !== undefined) {
        expect(typeof item.is_balkan).toBe('boolean');
      }

      // Optional notes check
      if (item.notes !== undefined) {
        expect(typeof item.notes).toBe('string');
        expect(item.notes.trim().length).toBeGreaterThan(0);
      }

      // Optional examples list check
      if (item.examples !== undefined) {
        expect(Array.isArray(item.examples)).toBe(true);
        item.examples.forEach(ex => {
          expect(ex.source).toBeDefined();
          expect(typeof ex.source).toBe('string');
          expect(ex.source.trim().length).toBeGreaterThan(0);

          expect(ex.target).toBeDefined();
          expect(typeof ex.target).toBe('string');
          expect(ex.target.trim().length).toBeGreaterThan(0);
        });
      }

      // Optional derivatives list check
      if (item.derivatives !== undefined) {
        expect(Array.isArray(item.derivatives)).toBe(true);
        item.derivatives.forEach(deriv => {
          expect(deriv.word).toBeDefined();
          expect(typeof deriv.word).toBe('string');
          expect(deriv.word.trim().length).toBeGreaterThan(0);

          expect(deriv.translation).toBeDefined();
          expect(typeof deriv.translation).toBe('string');
          expect(deriv.translation.trim().length).toBeGreaterThan(0);

          expect(deriv.pos).toBeDefined();
          expect(typeof deriv.pos).toBe('string');
          expect(deriv.pos.trim().length).toBeGreaterThan(0);
        });
      }
    });
  });
});
