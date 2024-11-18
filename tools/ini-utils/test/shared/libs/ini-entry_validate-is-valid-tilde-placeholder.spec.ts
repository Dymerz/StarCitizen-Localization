// External modules
import { IniEntry }         from '../../../src/shared/libs/ini-entry';
import { TildePlaceholder } from '../../../src/shared/libs/tilde-placeholder';

import assert               from 'assert'

const isValidTildePlaceholder = IniEntry['isValidTildePlaceholder'];

describe('IniEntry.isValidTildePlaceholder', () =>
{
  it('should return true for a valid placeholder without bad tokens', () =>
  {
    const placeholder = new TildePlaceholder({ name: 'test', parameter: 'validParameter' });
    const result = isValidTildePlaceholder(placeholder);

    assert.ok(result, 'valid placeholder should return true');
  });

  it('should return true for a placeholder with no parameters', () =>
  {
    const placeholder = new TildePlaceholder({ name: 'test', parameter: '' });
    const result = isValidTildePlaceholder(placeholder);

    assert.ok(result);
  });

  it('should return false for a placeholder with a bad token "("', () =>
  {
    const placeholder = new TildePlaceholder({ name: 'test', parameter: 'invalid(Parameter' });
    const result = isValidTildePlaceholder(placeholder);

    assert.ok(!result, 'placeholder with bad token "(" should return false');
  });

  it('should return false for a placeholder with a bad token ")"', () =>
  {
    const placeholder = new TildePlaceholder({ name: 'test', parameter: 'invalid)Parameter' });
    const result = isValidTildePlaceholder(placeholder);

    assert.ok(!result, 'placeholder with bad token ")" should return false');
  });

  it('should return false for a placeholder with a bad token "~"', () =>
  {
    const placeholder = new TildePlaceholder({ name: 'test', parameter: 'invalid~Parameter' });
    const result = isValidTildePlaceholder(placeholder);

    assert.ok(!result, 'placeholder with bad token "~" should return false');
  });

  it('should return false for a placeholder with a bad token "]"', () =>
  {
    const placeholder = new TildePlaceholder({ name: 'test', parameter: 'invalid]Parameter' });
    const result = isValidTildePlaceholder(placeholder);

    assert.ok(!result, 'placeholder with bad token "]" should return false');
  });

  it('should return false for a placeholder with a bad token "\\n"', () =>
  {
    const placeholder = new TildePlaceholder({ name: 'test', parameter: 'invalid\\nParameter' });
    const result = isValidTildePlaceholder(placeholder);

    assert.ok(!result, 'placeholder with bad token "\\n" should return false');
  });

  it('should return false for a placeholder with multiple bad tokens', () =>
  {
    const placeholder = new TildePlaceholder({ name: 'test', parameter: 'invalid(Parameter)' });
    const result = isValidTildePlaceholder(placeholder);

    assert.ok(!result, 'placeholder with multiple bad tokens should return false');
  });
});