import { PercentPlaceholderType } from '../types/percent-placeholder.type'

export class PercentPlaceholder implements PercentPlaceholderType
{
  name: string;

  constructor(placeholder: PercentPlaceholderType)
  {
    this.name      = placeholder.name;
  }

  public getValue(): string
  {
    return `%${this.name}`;
  }

  public equals(placeholder: PercentPlaceholder): boolean
  {
    return this.name === placeholder.name;
  }
}