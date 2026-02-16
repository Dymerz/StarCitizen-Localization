// External modules
import assert                     from 'assert';
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

  it('should consider placeholders equal if they have the same first character (for language-specific translations)', () =>
  {
    const percentPlaceholder1 = new PercentPlaceholder({ name: 'id' }); // d for day
    const percentPlaceholder2 = new PercentPlaceholder({ name: 'ij' }); // translated as j for "jour" in french
    const result = percentPlaceholder1.equals(percentPlaceholder2);

    assert.ok(result, 'placeholders with same first character should be equal');
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

  it('should not consider placeholders equal if one or both have empty names', () =>
  {
    // Test with first placeholder having empty name
    const emptyFirst = new PercentPlaceholder({ name: '' });
    const normalSecond = new PercentPlaceholder({ name: 'test' });
    assert.ok(!emptyFirst.equals(normalSecond), 'empty first name should not equal non-empty name');

    // Test with second placeholder having empty name
    const normalFirst = new PercentPlaceholder({ name: 'test' });
    const emptySecond = new PercentPlaceholder({ name: '' });
    assert.ok(!normalFirst.equals(emptySecond), 'non-empty name should not equal empty second name');

    // Test with both placeholders having empty names
    const emptyBoth1 = new PercentPlaceholder({ name: '' });
    const emptyBoth2 = new PercentPlaceholder({ name: '' });
    assert.ok(emptyBoth1.equals(emptyBoth2), 'empty names should be equal to each other');
  });
});