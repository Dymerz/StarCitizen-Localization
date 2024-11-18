// External modules
import { IniEntry } from '../../../src/shared/libs/ini-entry';

import assert       from 'assert';

describe('IniEntry.checkMissingKey', () =>
{
  it('should return true when all values are present', () =>
  {
    const entry = new IniEntry('key1', 'value1', 'value1');
    entry['checkMissingKey']();
    const result = entry.isValid();

    assert.ok(result, 'Expected to return true when all keys are present');
  });

  it('should return false when source value is missing', () =>
  {
    const entry = new IniEntry('key1', 'value1', undefined);
    entry['checkMissingKey']();
    const result = entry.isValid();

    assert.ok(!result, 'Expected to return false when source value is missing');
  });

  it('should return true when reference value is missing', () =>
  {
    const entry = new IniEntry('key1', undefined, 'value1');
    entry['checkMissingKey']();
    const result = entry.isValid();

    assert.ok(result, 'Expected to return true when reference value is missing');
  });

  it('should return false when source value is missing', () =>
  {
    const entry = new IniEntry('key1', 'value1', undefined);
    entry['checkMissingKey']();
    const result = entry.isValid();

    assert.ok(!result, 'Expected to return false when no keys are present in source data');
  });

  it('should return true when both reference and source values are empty', () =>
  {
    const entry = new IniEntry('key1', undefined, undefined);
    entry['checkMissingKey']();
    const result = entry.isValid();

    assert.ok(result, 'Expected to return true when both reference and source values are empty');
  });
});