import { PluralStrategy } from './pluralStrategy';
import { HabitoreStrategy } from './habitoreStrategy';
import { LocativeStrategy } from './LocativeStrategy';
import { CopulaStrategy } from './CopulaStrategy';
import { PresentContinuousStrategy } from './PresentContinuousStrategy';
import { DativeStrategy } from './DativeStrategy';
import { PossessiveStrategy } from './PossessiveStrategy';
import { AccusativeStrategy } from './AccusativeStrategy';
import { QuestionStrategy } from './QuestionStrategy';
import { PastTenseStrategy } from './PastTenseStrategy';
import { FutureTenseStrategy } from './FutureTenseStrategy';
import { AoristStrategy } from './AoristStrategy';
import { PotentialStrategy } from './PotentialStrategy';
import { NecessityStrategy } from './NecessityStrategy';
import { AblativeStrategy } from './AblativeStrategy';
import { PastContinuousStrategy } from './PastContinuousStrategy';
import { AdverbialIpStrategy } from './AdverbialIpStrategy';
import { ConditionalStrategy } from './ConditionalStrategy';
import { SinceStrategy } from './SinceStrategy';
import { ReflexiveStrategy } from './ReflexiveStrategy';
import { PassiveStrategy } from './PassiveStrategy';
import { ParticipleStrategy } from './ParticipleStrategy';
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
  accusative: AccusativeStrategy,
  question: QuestionStrategy,
  past_tense: PastTenseStrategy,
  future_tense: FutureTenseStrategy,
  aorist: AoristStrategy,
  potential: PotentialStrategy,
  necessity: NecessityStrategy,
  ablative: AblativeStrategy,
  past_continuous: PastContinuousStrategy,
  adverbial_ip: AdverbialIpStrategy,
  conditional: ConditionalStrategy,
  since: SinceStrategy,
  reflexive: ReflexiveStrategy,
  passive: PassiveStrategy,
  participle: ParticipleStrategy
};
