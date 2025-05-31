import { strict as assert } from 'assert';
import { describe, it } from 'mocha';
import { OutputStrategyFactory } from '../../../src/shared/strategies';
import { CIOutputStrategy } from '../../../src/shared/strategies/ci-output-strategy';
import { StandardOutputStrategy } from '../../../src/shared/strategies/standard-output-strategy';

describe('OutputStrategyFactory', () =>
{
  it('should create StandardOutputStrategy when CI mode is false', () =>
  {
    const strategy = OutputStrategyFactory.createStrategy(false);
    assert.ok(strategy instanceof StandardOutputStrategy);
  });

  it('should create CIOutputStrategy when CI mode is true', () =>
  {
    const strategy = OutputStrategyFactory.createStrategy(true);
    assert.ok(strategy instanceof CIOutputStrategy);
  });
});
