import { PercentPlaceholderType } from '../types/percent-placeholder.type';

export class PercentPlaceholder implements PercentPlaceholderType
{
  name: string;

  constructor(placeholder: PercentPlaceholderType)
  {
    this.name = placeholder.name;
  }

  public getValue(): string
  {
    return `%${this.name}`;
  }

  public equals(placeholder: PercentPlaceholder): boolean
  {
    // If the names are exactly the same, they are equal
    if (this.name === placeholder.name)
    {
      return true;
    }

    // For language-specific translations, check if both have the same first character
    // Both placeholders must have non-empty names
    if (this.name.length === 0 || placeholder.name.length === 0)
    {
      return false;
    }

    // Compare the first character of both placeholder names
    return this.name[0] === placeholder.name[0];
  }
}