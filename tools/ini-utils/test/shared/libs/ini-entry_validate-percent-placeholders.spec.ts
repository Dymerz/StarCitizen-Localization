// External modules
import { IniEntry } from '../../../src/shared/libs/ini-entry';

import assert              from 'assert';

describe('IniEntry.validatePercentPlaceholders', () =>
{
  it('should return true when all percent placeholders are present', () =>
  {
    const entry = new IniEntry('key1', 'value with %placeholder', 'value with %placeholder');
    entry['validatePercentPlaceholders']();
    const result = entry.isValid();

    assert.ok(result);
  });

  it('should return false when a percent placeholder is missing', () =>
  {
    const entry = new IniEntry('key1', 'value with %placeholder', 'value without placeholder');
    entry['validatePercentPlaceholders']();
    const result = entry.isValid();

    assert.ok(!result);
  });

  it('should return true when there are no percent placeholders', () =>
  {
    const entry = new IniEntry('key1', 'value without placeholder', 'value without placeholder');
    entry['validatePercentPlaceholders']();
    const result = entry.isValid();

    assert.ok(result);
  });

  it('should return true when the key is missing in source data', () =>
  {
    const entry = new IniEntry('key1', 'value with %placeholder', undefined);
    entry['validatePercentPlaceholders']();
    const result = entry.isValid();

    assert.ok(result);
  });

  it('should return true when the key is missing in reference data', () =>
  {
    const entry = new IniEntry('key1', undefined, 'value with %placeholder');
    entry['validatePercentPlaceholders']();
    const result = entry.isValid();

    assert.ok(result);
  });
});