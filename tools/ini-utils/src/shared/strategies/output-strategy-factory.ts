import { CIOutputStrategy } from './ci-output-strategy';
import { OutputStrategy } from './output-strategy';
import { StandardOutputStrategy } from './standard-output-strategy';

/**
 * Factory for creating output strategies
 */
export class OutputStrategyFactory
{
  /**
   * Create an output strategy based on CI mode
   * @param isCiMode Whether running in CI mode
   * @returns The appropriate output strategy
   */
  static createStrategy(isCiMode: boolean): OutputStrategy
  {
    return isCiMode ? new CIOutputStrategy() : new StandardOutputStrategy();
  }
}
