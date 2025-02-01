// External modules
import { ValidateCommand } from '../../src/commands/validate.command';
import assert              from 'assert';

// Helpers
import { IniHelper }       from '../../src/shared/helpers/ini.helper';
import { makeIniFromKey }  from '../utils';

const validateIni = ValidateCommand['validateIni'];

describe('ValidateCommand.runInternal', () =>
{
  // Disable console.log
  beforeEach(() =>
  {
    console.log = (_) => {};
  });

  const reference = IniHelper.loadFile('./test/fixtures/reference.ini');
  const source = IniHelper.loadFile('./test/fixtures/source.ini');

  it('should validate ignore commented key', () =>
  {
    const referenceData = makeIniFromKey(reference, 'simple');
    const sourceData = makeIniFromKey(source, 'simple');

    const result = validateIni(referenceData, sourceData);
    assert.ok(result, 'ignore commented key should be valid');
  });

  it('should validate percent placeholder', () =>
  {
    const referenceData = makeIniFromKey(reference, 'good_percent_placeholder');
    const sourceData = makeIniFromKey(source, 'good_percent_placeholder');

    const result = validateIni(referenceData, sourceData);
    assert.ok(result, 'percent placeholder should be valid');
  });

  it('should validate tilde placeholder', () =>
  {
    const referenceData = makeIniFromKey(reference, 'good_placeholder');
    const sourceData = makeIniFromKey(source, 'good_placeholder');

    const result = validateIni(referenceData, sourceData);
    assert.ok(result, 'tilde placeholder should be valid');
  });

  it('should validate multiple placeholders', () =>
  {
    const referenceData = makeIniFromKey(reference, 'good_multiple_placeholder');
    const sourceData = makeIniFromKey(source, 'good_multiple_placeholder');

    const result = validateIni(referenceData, sourceData);
    assert.ok(result, 'multiple placeholders in value should be valid');
  });

  it('should validate case insensitive placeholders', () =>
  {
    const referenceData = makeIniFromKey(reference, 'good_placeholder_case_insensitive');
    const sourceData = makeIniFromKey(source, 'good_placeholder_case_insensitive');

    const result = validateIni(referenceData, sourceData);
    assert.ok(result, 'placeholder case insensitive should be valid');
  });

  it('should validate pipe placeholder', () =>
  {
    const referenceData = makeIniFromKey(reference, 'good_pipe_placeholder');
    const sourceData = makeIniFromKey(source, 'good_pipe_placeholder');

    const result = validateIni(referenceData, sourceData);
    assert.ok(result, 'multiple parameters in placeholder should be valid');
  });

  it('should validate value with semi-colon', () =>
  {
    const referenceData = makeIniFromKey(reference, 'good_semi_colon');
    const sourceData = makeIniFromKey(source, 'good_semi_colon');

    const result = validateIni(referenceData, sourceData);
    assert.ok(result, 'semi-colon in value should be escaped');
  });

  it('should validate value with double semi-colon', () =>
  {
    const referenceData = makeIniFromKey(reference, 'good_double_semi_colon');
    const sourceData = makeIniFromKey(source, 'good_double_semi_colon');

    const result = validateIni(referenceData, sourceData);
    assert.ok(result, 'double semi-colon in value should be escaped');
  });

  it('should validate value with semi-colon escaped', () =>
  {
    const referenceData = makeIniFromKey(reference, 'good_semi_colon_escaped');
    const sourceData = makeIniFromKey(source, 'good_semi_colon_escaped');

    const result = validateIni(referenceData, sourceData);
    assert.ok(result, 'escaped semi-colon in value should be escaped');
  });

  it('should validate value with hash', () =>
  {
    const referenceData = makeIniFromKey(reference, 'good_hash');
    const sourceData = makeIniFromKey(source, 'good_hash');

    const result = validateIni(referenceData, sourceData);
    assert.ok(result, 'hash in value should be escaped');
  });

  it('should validate value with double hash', () =>
    {
      const referenceData = makeIniFromKey(reference, 'good_double_hash');
      const sourceData = makeIniFromKey(source, 'good_double_hash');

      const result = validateIni(referenceData, sourceData);
      assert.ok(result, 'double hash in value should be escaped');
    });

  it('should validate value with hash escaped', () =>
  {
    const referenceData = makeIniFromKey(reference, 'good_hash_escaped');
    const sourceData = makeIniFromKey(source, 'good_hash_escaped');

    const result = validateIni(referenceData, sourceData);
    assert.ok(result, 'escaped hash in value should be escaped');
  });

  it('should not validate misspelled percent placeholder', () =>
  {
    const referenceData = makeIniFromKey(reference, 'bad_percent_placeholder1');
    const sourceData = makeIniFromKey(source, 'bad_percent_placeholder1');

    const result = validateIni(referenceData, sourceData);
    assert.ok(!result, 'misspelled percent placeholder should not be valid');
  });

  it('should not validate missing percent placeholder', () =>
  {
    const referenceData = makeIniFromKey(reference, 'bad_percent_placeholder2');
    const sourceData = makeIniFromKey(source, 'bad_percent_placeholder2');

    const result = validateIni(referenceData, sourceData);
    assert.ok(!result, 'missing percent placeholder should not be valid');
  });

  it('should not validate bad percent placeholder', () =>
  {
    const referenceData = makeIniFromKey(reference, 'bad_percent_placeholder2');
    const sourceData = makeIniFromKey(source, 'bad_percent_placeholder2');

    const result = validateIni(referenceData, sourceData);
    assert.ok(!result, 'bad percent placeholder should not be valid');
  });

  it('should not validate bad multiple placeholders', () =>
  {
    const referenceData = makeIniFromKey(reference, 'bad_multiple_placeholder');
    const sourceData = makeIniFromKey(source, 'bad_multiple_placeholder');

    const result = validateIni(referenceData, sourceData);
    assert.ok(!result, 'bad multiple placeholders should not be valid');
  });

  it('should not validate bad pipe placeholder', () =>
  {
    const referenceData = makeIniFromKey(reference, 'bad_pipe_placeholder');
    const sourceData = makeIniFromKey(source, 'bad_pipe_placeholder');

    const result = validateIni(referenceData, sourceData);
    assert.ok(!result, 'bad pipe placeholder should not be valid');
  });

  it('should not validate bad closing placeholder', () =>
  {
    const referenceData = makeIniFromKey(reference, 'bad_closing_placeholder');
    const sourceData = makeIniFromKey(source, 'bad_closing_placeholder');

    const result = validateIni(referenceData, sourceData);
    assert.ok(!result, 'bad closing placeholder should not be valid');
  });

  it('should not validate bad key', () =>
  {
    const referenceData = makeIniFromKey(reference, 'bad_key');
    const sourceData = makeIniFromKey(source, 'mauvaise_cle');

    const result = validateIni(referenceData, sourceData);
    assert.ok(!result, 'bad key should not be valid');
  });

  it('should not validate bad extra placeholder', () =>
  {
    const referenceData = makeIniFromKey(reference, 'bad_extra_placeholder');
    const sourceData = makeIniFromKey(source, 'bad_extra_placeholder');

    const result = validateIni(referenceData, sourceData);
    assert.ok(!result, 'bad extra placeholder should not be valid');
  });
});