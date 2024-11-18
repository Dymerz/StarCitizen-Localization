// External modules
import { IniEntry } from '../../../src/shared/libs/ini-entry';
import assert       from 'assert';


describe('IniEntry.validateTildePlaceholders', () =>
{
  it('should return true when all tilde placeholders are present', () =>
  {
    const entry = new IniEntry('key1', 'value with ~name(parameter)', 'value with ~name(parameter)');
    entry['validateTildePlaceholders']();
    const result = entry.isValid();

    assert.ok(result, 'Expected to return true when all tilde placeholders are present');
  });

  it('should return false when a tilde placeholder is missing', () =>
  {
    const entry = new IniEntry('key1', 'value with ~name(parameter)', 'value without placeholder');
    entry['validateTildePlaceholders']();
    const result = entry.isValid();

    assert.ok(!result, 'Expected to return false when a tilde placeholder is missing');
  });

  it('should return true when there are no tilde placeholders', () =>
  {
    const entry = new IniEntry('key1', 'value without placeholder', 'value without placeholder');
    entry['validateTildePlaceholders']();
    const result = entry.isValid();

    assert.ok(result, 'Expected to return true when there are no tilde placeholders');
  });

  it('should return true when the key is missing in source data', () =>
  {
    const entry = new IniEntry('key1', 'value with ~name(parameter)', undefined);
    entry['validateTildePlaceholders']();
    const result = entry.isValid();

    assert.ok(result, 'Expected to return true when the key is missing in source data');
  });

  it('should return true when the key is missing in reference data', () =>
  {
    const entry = new IniEntry('key1', undefined, 'value with ~name(parameter)');
    entry['validateTildePlaceholders']();
    const result = entry.isValid();

    assert.ok(result, 'Expected to return true when the key is missing in reference data');
  });

  it('should return false when there is an invalid tilde placeholder', () =>
  {
    const entry = new IniEntry('key1', 'value with ~name(invalid)', 'value with ~name(]invalid)');
    entry['validateTildePlaceholders']();
    const result = entry.isValid();

    assert.ok(!result, 'Expected to return false when there is an invalid tilde placeholder');
  });

  it('should return true when multiple tilde placeholders are present', () =>
  {
    const entry = new IniEntry('key1', 'value with ~name(parameter) and ~name(another)', 'value with ~name(parameter) and ~name(another)');
    entry['validateTildePlaceholders']();
    const result = entry.isValid();

    assert.ok(result, 'Expected to return true when multiple tilde placeholders are present');
  });

  it('should return false when a tilde placeholder contains a percent placeholder', () =>
  {
    const entry = new IniEntry('key1', 'value with ~name(parameter)', 'value with %name(parameter)');
    entry['validateTildePlaceholders']();
    const result = entry.isValid();

    assert.ok(!result, 'Expected to return false when a tilde placeholder contains a percent placeholder');
  });

  it('should return true when a tilde placeholder contains a percent placeholder and a tilde placeholder', () =>
  {
    const entry = new IniEntry('key1', 'value with ~name(parameter) and %name', 'value with ~name(parameter) and %name');
    entry['validateTildePlaceholders']();
    const result = entry.isValid();

    assert.ok(result, 'Expected to return true when a tilde placeholder contains a percent placeholder and a tilde placeholder');
  });

  it('should return false when there is a typo in the source tilde placeholder', () =>
  {
    const entry = new IniEntry('key1', 'value with ~name(parameter)', 'value with ~name(parametr)');
    entry['validateTildePlaceholders']();
    const result = entry.isValid();

    assert.ok(!result, 'Expected to return false when there is a typo in the source tilde placeholder');
  });
});