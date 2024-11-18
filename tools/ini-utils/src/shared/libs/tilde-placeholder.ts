import { TildePlaceholderType } from '../types/tilde-placeholder.type'

export class TildePlaceholder implements TildePlaceholderType
{
  name     : string;
  parameter: string;

  constructor(placeholder: TildePlaceholderType)
  {
    this.name      = placeholder.name;
    this.parameter = placeholder.parameter;
  }

  public getValue(): string
  {
    return `~${this.name}(${this.parameter})`;
  }

  public equals(placeholder: TildePlaceholder): boolean
  {
    return this.name.toLocaleLowerCase() === placeholder.name.toLocaleLowerCase()
      && this.parameter.toLocaleLowerCase() === placeholder.parameter.toLocaleLowerCase();
  }
}