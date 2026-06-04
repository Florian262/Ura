import { PluralStrategy } from './pluralStrategy';
import { HabitoreStrategy } from './habitoreStrategy';
import { LocativeStrategy } from './LocativeStrategy';
import { CopulaStrategy } from './CopulaStrategy';
import { PresentContinuousStrategy } from './PresentContinuousStrategy';
import { DativeStrategy } from './DativeStrategy';
import { PossessiveStrategy } from './PossessiveStrategy';
import { AccusativeStrategy } from './AccusativeStrategy';
import type { SuffixStrategy } from './suffixStrategy';

/**
 * StrategyRegistry maps dynamic configuration keys (e.g. from JSON database records)
 * to their corresponding strategy class instances.
 */
export const SuffixRegistry: Record<string, new () => SuffixStrategy> = {
  plural: PluralStrategy,
  habitore: HabitoreStrategy,
  locative: LocativeStrategy,
  copula: CopulaStrategy,
  present_continuous: PresentContinuousStrategy,
  dative: DativeStrategy,
  possessive: PossessiveStrategy,
  accusative: AccusativeStrategy
};
