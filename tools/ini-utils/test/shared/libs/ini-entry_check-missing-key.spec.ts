// External modules
import { IniEntry } from '../../../src/shared/libs/ini-entry';

import assert       from 'assert';

describe('IniEntry.checkMissingKey', () =>
{
  it('should be valid when all keys are present', () =>
  {
    const entry = new IniEntry('key1', 'value1', 'value1');
    entry['checkMissingKey']();
    const result = entry.isValid();

    assert.ok(result, 'Expected to return true when all keys are present');
  });

  it('should not be valid when source value is missing', () =>
  {
    const entry = new IniEntry('key1', 'value1', undefined);
    entry['checkMissingKey']();
    const result = entry.isValid();

    assert.ok(!result, 'Expected to return false when source value is missing');

    const error = entry.hasError('key-missing');
    assert.ok(error, 'Expected to have key-missing error');
  });

  it('should be valid when reference value is missing', () =>
  {
    const entry = new IniEntry('key1', undefined, 'value1');
    entry['checkMissingKey']();
    const result = entry.isValid();

    assert.ok(result, 'Expected to be valid when reference value is missing');
  });

  it('should be valid when both reference and source values are empty', () =>
  {
    const entry = new IniEntry('key1', undefined, undefined);
    entry['checkMissingKey']();
    const result = entry.isValid();

    assert.ok(result, 'Expected to be valid when both reference and source values are empty');
  });
});