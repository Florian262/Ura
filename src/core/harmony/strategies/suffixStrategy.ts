/**
 * SuffixStrategy interface representing the Strategy Design Pattern
 * for applying interchangeable grammar rules to Turkish words.
 */

export interface SuffixResult {
  result: string;         // The final combined word (e.g. "okullar")
  suffixApplied: string;  // The actual suffix attached (e.g. "lar")
  changes: string[];      // Array of grammatical explanations (e.g. ["2-way vowel harmony for 'u' -> 'lar'"])
}

export interface SuffixStrategy {
  apply(root: string): SuffixResult;
}
