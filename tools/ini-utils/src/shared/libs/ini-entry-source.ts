// External modules
import { PercentPlaceholder } from './percent-placeholder';
import { TildePlaceholder }   from './tilde-placeholder';

// Helpers
import { StringHelper }       from '../helpers/string.helper';

export const PLACEHOLDER_REGEX_TILDE = /(~(?<name>\w+)\((?<parameter>.*?)\))/g; // match ~name(parameter)
export const PLACEHOLDER_REGEX_PERCENT = /%(?<name>\w+)/g; // match %name

export class IniEntrySource
{

  value: string|undefined
  tildePlaceholders: TildePlaceholder[]
  percentPlaceholders: PercentPlaceholder[]

  constructor(value: string|undefined)
  {
    this.value = value
    this.tildePlaceholders = this.getPlaceholders(PLACEHOLDER_REGEX_TILDE, TildePlaceholder)
    this.percentPlaceholders = this.getPlaceholders(PLACEHOLDER_REGEX_PERCENT, PercentPlaceholder)
  }

  private getPlaceholders<I extends Record<string, string>, O>(regex: RegExp, PlaceholderClass: new (match: I) => O): O[]
  {
    if (typeof this.value !== 'string') return [];

    const matches = StringHelper.getAllMatchesGroups<I>(this.value, regex).map(match => new PlaceholderClass(match));
    return matches;
  }
}
