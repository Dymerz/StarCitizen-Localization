// External modules
import { IniEntrySource }            from '../../../src/shared/libs/ini-entry-source';
import { PLACEHOLDER_REGEX_PERCENT } from '../../../src/shared/libs/ini-entry-source';
import { PLACEHOLDER_REGEX_TILDE }   from '../../../src/shared/libs/ini-entry-source';
import { PercentPlaceholder }        from '../../../src/shared/libs/percent-placeholder';
import { TildePlaceholder }          from '../../../src/shared/libs/tilde-placeholder';

import assert                        from 'assert';

describe('ValidateCommand.extractPlaceholders: "~name(parameter)"', () =>
{
  it('should return an empty array if the key does not exist in the data', () =>
  {
    const entrySource = new IniEntrySource('some value');
    const result = entrySource['getPlaceholders'](PLACEHOLDER_REGEX_TILDE, TildePlaceholder);

    assert.deepStrictEqual(result, []);
  });

  it('should return an empty array if the value for the key is empty', () =>
  {
    const entrySource = new IniEntrySource('');
    const result = entrySource['getPlaceholders'](PLACEHOLDER_REGEX_TILDE, TildePlaceholder);

    assert.deepStrictEqual(result, []);
  });

  it('should return an empty array if the value for the key does not contain any placeholders', () =>
  {
    const entrySource = new IniEntrySource('some value');
    const result = entrySource['getPlaceholders'](PLACEHOLDER_REGEX_TILDE, TildePlaceholder);

    assert.deepStrictEqual(result, []);
  });

  it('should return an array of placeholders with correct parameters and values', () =>
  {
    const entrySource = new IniEntrySource('~name(param1) ~name(param2)');
    const result = entrySource['getPlaceholders'](PLACEHOLDER_REGEX_TILDE, TildePlaceholder);

    assert.strictEqual(result[0].name, 'name');
    assert.strictEqual(result[0].parameter, 'param1');
    assert.strictEqual(result[1].name, 'name');
    assert.strictEqual(result[1].parameter, 'param2');
  });

  it('should return an array of placeholders that match the regex', () =>
  {
    const entrySource = new IniEntrySource('~name(param1) ~name(param2)');
    const result = entrySource['getPlaceholders'](PLACEHOLDER_REGEX_TILDE, TildePlaceholder);

    assert.strictEqual(result.length, 2);
    assert.strictEqual(result[0].getValue(), '~name(param1)');
    assert.strictEqual(result[1].getValue(), '~name(param2)');
  });

  it('should handle multiple different placeholders correctly', () =>
  {
    const entrySource = new IniEntrySource('~name1(param1) ~name2(param2)');
    const result = entrySource['getPlaceholders'](PLACEHOLDER_REGEX_TILDE, TildePlaceholder);

    assert.strictEqual(result.length, 2);
    assert.strictEqual(result[0].getValue(), '~name1(param1)');
    assert.strictEqual(result[1].getValue(), '~name2(param2)');
  });
});

describe('ValidateCommand.extractPlaceholders: "%name"', () =>
{
  it('should return an empty array if the key does not exist in the data', () =>
  {
    const entrySource = new IniEntrySource('some value');
    const result = entrySource['getPlaceholders'](PLACEHOLDER_REGEX_PERCENT, PercentPlaceholder);

    assert.deepStrictEqual(result, []);
  });

  it('should return an empty array if the value for the key is empty', () =>
  {
    const entrySource = new IniEntrySource('');
    const result = entrySource['getPlaceholders'](PLACEHOLDER_REGEX_PERCENT, PercentPlaceholder);

    assert.deepStrictEqual(result, []);
  });

  it('should return an empty array if the value for the key does not contain any placeholders', () =>
  {
    const entrySource = new IniEntrySource('some value');
    const result = entrySource['getPlaceholders'](PLACEHOLDER_REGEX_PERCENT, PercentPlaceholder);

    assert.deepStrictEqual(result, []);
  });

  it('should return an array of placeholders with correct parameters and values', () =>
  {
    const entrySource = new IniEntrySource('%name1 %name2');
    const result = entrySource['getPlaceholders'](PLACEHOLDER_REGEX_PERCENT, PercentPlaceholder);

    assert.strictEqual(result[0].name, 'name1');
    assert.strictEqual(result[1].name, 'name2');
  });

  it('should return an array of placeholders that match the regex', () =>
  {
    const entrySource = new IniEntrySource('%name1 %name2');
    const result = entrySource['getPlaceholders'](PLACEHOLDER_REGEX_PERCENT, PercentPlaceholder);

    assert.strictEqual(result.length, 2);
    assert.strictEqual(result[0].getValue(), '%name1');
    assert.strictEqual(result[1].getValue(), '%name2');
  });

  it('should handle numeric values in name correctly', () =>
  {
    const entrySource = new IniEntrySource('%name123');
    const result = entrySource['getPlaceholders'](PLACEHOLDER_REGEX_PERCENT, PercentPlaceholder);

    assert.strictEqual(result[0].name, 'name123');
    assert.strictEqual(result[0].getValue(), '%name123');
  });

  it('should not include special characters in the name', () =>
  {
    const entrySource = new IniEntrySource('%name!@#$');
    const result = entrySource['getPlaceholders'](PLACEHOLDER_REGEX_PERCENT, PercentPlaceholder);

    assert.strictEqual(result[0].name, 'name');
    assert.strictEqual(result[0].getValue(), '%name');
  });
});