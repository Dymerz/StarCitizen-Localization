// External modules
import { IniEntry }         from '../../../src/shared/libs/ini-entry';
import { TildePlaceholder } from '../../../src/shared/libs/tilde-placeholder';

import assert               from 'assert';

const groupPlaceholders = IniEntry['groupTildePlaceholders'];

describe('IniEntry.groupTildePlaceholders', () =>
{
  it('should group placeholders correctly', () =>
  {
    const placeholders = [
      new TildePlaceholder({ name: 'placeholder1', parameter: 'param1' }),
      new TildePlaceholder({ name: 'placeholder1', parameter: 'param1' }),
      new TildePlaceholder({ name: 'placeholder2', parameter: 'param2' })
    ];

    const result = groupPlaceholders(placeholders);

    assert.strictEqual(result.length, 2);
    assert.strictEqual(result[0].placeholder.getValue(), '~placeholder1(param1)');
    assert.strictEqual(result[0].count, 2);
    assert.strictEqual(result[1].placeholder.getValue(), '~placeholder2(param2)');
    assert.strictEqual(result[1].count, 1);
  });

  it('should return an empty array when no placeholders are provided', () =>
  {
    const placeholders: TildePlaceholder[] = [];

    const result = groupPlaceholders(placeholders);

    assert.strictEqual(result.length, 0);
  });

  it('should handle placeholders with different parameters correctly', () =>
  {
    const placeholders = [
      new TildePlaceholder({ name: 'placeholder1', parameter: 'param1' }),
      new TildePlaceholder({ name: 'placeholder1', parameter: 'param2' }),
      new TildePlaceholder({ name: 'placeholder2', parameter: 'param1' })
    ];

    const result = groupPlaceholders(placeholders);

    assert.strictEqual(result.length, 3);
    assert.strictEqual(result[0].placeholder.getValue(), '~placeholder1(param1)');
    assert.strictEqual(result[0].count, 1);
    assert.strictEqual(result[1].placeholder.getValue(), '~placeholder1(param2)');
    assert.strictEqual(result[1].count, 1);
    assert.strictEqual(result[2].placeholder.getValue(), '~placeholder2(param1)');
    assert.strictEqual(result[2].count, 1);
  });
});