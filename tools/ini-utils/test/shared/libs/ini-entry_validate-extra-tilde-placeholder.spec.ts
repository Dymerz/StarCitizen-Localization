// External modules
import { IniEntry } from '../../../src/shared/libs/ini-entry';

import assert       from 'assert';

describe('IniEntry.validateExtraTildePlaceholder', () =>
{
  it('should return true if reference value is undefined', () =>
  {
    const entry = new IniEntry('key1', undefined, 'some value with ~name(parameter)');
    entry['validateExtraTildePlaceholder']();
    const result = entry.isValid();

    assert.ok(result, 'undefined reference value should be valid');
  });

  it('should return true if source value is undefined', () =>
  {
    const entry = new IniEntry('key1', 'some value with ~name(parameter)', undefined);
    entry['validateExtraTildePlaceholder']();
    const result = entry.isValid();

    assert.ok(result, 'undefined source value should be valid');
  });

  it('should return true if reference and source value is undefined', () =>
  {
    const entry = new IniEntry('key1', undefined, undefined);
    entry['validateExtraTildePlaceholder']();
    const result = entry.isValid();

    assert.ok(result, 'undefined source value should be valid');
  });

  it('should return true if placeholders match', () =>
  {
    const entry = new IniEntry('key1', 'some value with ~name(parameter)', 'some value with ~name(parameter)');
    entry['validateExtraTildePlaceholder']();
    const result = entry.isValid();

    assert.ok(result, 'placeholders should match');
  });

  it('should return false if source has extra placeholders', () =>
  {
    const entry = new IniEntry('key1', 'some value with ~name(parameter)', 'some value with ~name(parameter) ~name(parameter)');
    entry['validateExtraTildePlaceholder']();
    const result = entry.isValid();

    assert.ok(!result, 'extra placeholders in source should not be valid');
  });

  it('should return false if source has fewer placeholders', () =>
  {
    const entry = new IniEntry('key1', 'some value with ~name(parameter) ~name(parameter)', 'some value with ~name(parameter)');
    entry['validateExtraTildePlaceholder']();
    const result = entry.isValid();

    assert.ok(!result, 'fewer placeholders in source should not be valid');
  });

  it('should handle case-insensitive placeholder comparison', () =>
  {
    const entry = new IniEntry('key1', 'some value with ~name(parameter)', 'some value with ~NAME(parameter)');
    entry['validateExtraTildePlaceholder']();
    const result = entry.isValid();

    assert.ok(result, 'case-insensitive placeholders should match');
  });
});