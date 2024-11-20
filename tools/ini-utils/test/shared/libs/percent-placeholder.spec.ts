// External modules
import assert                     from 'assert'
import { PercentPlaceholder }     from '../../../src/shared/libs/percent-placeholder';
import { PercentPlaceholderType } from '../../../src/shared/types/percent-placeholder.type';

describe('PercentPlaceholder', () =>
{
  it('should create an instance with the correct name', () =>
  {
    const placeholder: PercentPlaceholderType = { name: 'test' };
    const percentPlaceholder = new PercentPlaceholder(placeholder);

    assert.strictEqual(percentPlaceholder.name, 'test');
  });

  it('should return the correct value with getValue()', () =>
  {
    const placeholder: PercentPlaceholderType = { name: 'test' };
    const percentPlaceholder = new PercentPlaceholder(placeholder);

    assert.strictEqual(percentPlaceholder.getValue(), '%test');
  });

  it('should handle empty name correctly', () =>
  {
    const placeholder: PercentPlaceholderType = { name: '' };
    const percentPlaceholder = new PercentPlaceholder(placeholder);

    assert.strictEqual(percentPlaceholder.getValue(), '%');
  });

  it('should handle special characters in name', () =>
  {
    const placeholder: PercentPlaceholderType = { name: 'test@123' };
    const percentPlaceholder = new PercentPlaceholder(placeholder);

    assert.strictEqual(percentPlaceholder.getValue(), '%test@123');
  });

  it('should equal another placeholder with the same name', () =>
  {
    const percentPlaceholder1 = new PercentPlaceholder({ name: 'test' });
    const percentPlaceholder2 = new PercentPlaceholder({ name: 'test' });
    const result = percentPlaceholder1.equals(percentPlaceholder2);

    assert.ok(result, 'same name should be equal');
  });

  it('should not equal another placeholder with a different name', () =>
  {
    const percentPlaceholder1 = new PercentPlaceholder({ name: 'test' });
    const percentPlaceholder2 = new PercentPlaceholder({ name: 'different' });
    const result = percentPlaceholder1.equals(percentPlaceholder2);

    assert.ok(!result, 'different names should not be equal');
  });

  it('should not placeholders with different case-sensitive names', () =>
  {
    const percentPlaceholder1 = new PercentPlaceholder({ name: 'Test' });
    const percentPlaceholder2 = new PercentPlaceholder({ name: 'test' });
    const result = percentPlaceholder1.equals(percentPlaceholder2);

    assert.ok(!result, 'case-sensitive names should not be equal');
  });
});