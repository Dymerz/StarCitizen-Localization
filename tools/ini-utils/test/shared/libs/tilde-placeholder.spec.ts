// External modules
import assert                   from 'assert'
import { TildePlaceholder }     from '../../../src/shared/libs/tilde-placeholder';
import { TildePlaceholderType } from '../../../src/shared/types/tilde-placeholder.type';

describe('TildePlaceholder', () =>
{
  it('should correctly initialize with given placeholder values', () =>
  {
    const placeholderData: TildePlaceholderType = { name: 'testName', parameter: 'testParam' };
    const placeholder = new TildePlaceholder(placeholderData);

    assert.strictEqual(placeholder.name, 'testName');
    assert.strictEqual(placeholder.parameter, 'testParam');
  });

  it('should return the correct value from getValue method', () =>
  {
    const placeholderData: TildePlaceholderType = { name: 'testName', parameter: 'testParam' };
    const placeholder = new TildePlaceholder(placeholderData);

    const expectedValue = '~testName(testParam)';
    assert.strictEqual(placeholder.getValue(), expectedValue);
  });

  it('should handle empty name and parameter correctly', () =>
  {
    const placeholderData: TildePlaceholderType = { name: '', parameter: '' };
    const placeholder = new TildePlaceholder(placeholderData);

    const expectedValue = '~()';
    assert.strictEqual(placeholder.getValue(), expectedValue);
  });

  it('should handle special characters in name and parameter', () =>
  {
    const placeholderData: TildePlaceholderType = { name: 'name!@#$', parameter: 'param%^&*' };
    const placeholder = new TildePlaceholder(placeholderData);

    const expectedValue = '~name!@#$(param%^&*)';
    assert.strictEqual(placeholder.getValue(), expectedValue);
  });

  it('should handle numeric values in name and parameter', () =>
  {
    const placeholderData: TildePlaceholderType = { name: 'name123', parameter: 'param456' };
    const placeholder = new TildePlaceholder(placeholderData);

    const expectedValue = '~name123(param456)';
    assert.strictEqual(placeholder.getValue(), expectedValue);
  });

  it('should handle pipe character in parameter', () =>
  {
    const placeholderData: TildePlaceholderType = { name: 'testName', parameter: 'param|with|pipes' };
    const placeholder = new TildePlaceholder(placeholderData);

    const expectedValue = '~testName(param|with|pipes)';
    assert.strictEqual(placeholder.getValue(), expectedValue);
  });

  it('should equal another placeholder with the same name and parameter', () =>
  {
    const placeholder1 = new TildePlaceholder({ name: 'testName', parameter: 'testParam' });
    const placeholder2 = new TildePlaceholder({ name: 'testName', parameter: 'testParam' });
    const result = placeholder1.equals(placeholder2);

    assert.ok(result, 'same name and parameter should be equal');
  });

  it('should not equal another placeholder with a different name', () =>
  {
    const placeholder1 = new TildePlaceholder({ name: 'testName', parameter: 'testParam' });
    const placeholder2 = new TildePlaceholder({ name: 'testName2', parameter: 'testParam' });
    const result = placeholder1.equals(placeholder2);

    assert.ok(!result, 'different name should not be equal');
  });

  it('should not equal another placeholder with a different parameter', () =>
  {
    const placeholder1 = new TildePlaceholder({ name: 'testName', parameter: 'testParam' });
    const placeholder2 = new TildePlaceholder({ name: 'testName', parameter: 'testParam2' });
    const result = placeholder1.equals(placeholder2);

    assert.ok(!result, 'different parameter should not be equal');
  });

  it('should not equal another placeholder with a different name and parameter', () =>
  {
    const placeholder1 = new TildePlaceholder({ name: 'testName', parameter: 'testParam' });
    const placeholder2 = new TildePlaceholder({ name: 'testName2', parameter: 'testParam2' });
    const result = placeholder1.equals(placeholder2);

    assert.ok(!result, 'different name and parameter should not be equal');
  });

  it('should equal case-insensitive placeholders', () =>
  {
    const placeholder1 = new TildePlaceholder({ name: 'testName', parameter: 'testParam' });
    const placeholder2 = new TildePlaceholder({ name: 'TESTNAME', parameter: 'TESTPARAM' });
    const result = placeholder1.equals(placeholder2);

    assert.ok(result, 'case-insensitive placeholders should be equal');
  });
});