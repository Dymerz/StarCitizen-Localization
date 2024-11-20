// External modules
import { IniEntrySource }   from './ini-entry-source';
import { TildePlaceholder } from './tilde-placeholder';

export type IniEntryErrorType = 'key-missing'
  | 'extra-tilde-placeholder-in-source'
  | 'missing-percent-placeholder-in-source'
  | 'missing-tilde-placeholder-in-source'
  | 'invalid-tilde-placeholder-in-reference';

export type IniEntryErrors =
{
  type: IniEntryErrorType
  message: string
}
export class IniEntry
{
  private static readonly BAD_TOKENS = ['(', ')', '~', ']', '[', '\\n']; // Invalid tokens

  public readonly key: string;
  public readonly reference: IniEntrySource;
  public readonly source: IniEntrySource;

  public readonly errors: IniEntryErrors[] = [];

  constructor(key: string, referenceValue: string|undefined, sourceValue: string|undefined)
  {
    this.key = key;

    this.reference = new IniEntrySource(referenceValue);
    this.source = new IniEntrySource(sourceValue);
  }

//region Public Methods

  public isValid(): boolean
  {
    return this.errors.length === 0;
  }

  public hasError(type: IniEntryErrorType): boolean
  {
    return this.errors.find(e => e.type === type) !== undefined;
  }

  public validate(): void
  {
    this.checkMissingKey();

    this.validateTildePlaceholders();
    this.validatePercentPlaceholders();

    // Check if there are extra placeholders in source if there are no errors
    if(this.isValid())
    {
      this.validateExtraTildePlaceholder();
    }
  }

//endregion

//region Validation Methods

  /**
   * Check if all entries from reference are present in source
   * @param referenceData
   * @param sourceData
   * @returns
   */
  private checkMissingKey(): void
  {
    if(this.reference.value !== undefined && this.source.value === undefined)
    {
      this.addError('key-missing', `Missing in source`);
    }
  }

  /**
   * Check if all "~name(parameter)" placeholders from reference are present in source
   * @param referenceData
   * @param sourceData
   * @returns
   */
  private validateTildePlaceholders(): void
  {
    const sourceValue = this.source.value;
    if(sourceValue === undefined)
      return;

    // Validate each placeholder
    for (const placeholder of this.reference.tildePlaceholders)
    {
      // Check if placeholder is valid
      if(!IniEntry.isValidTildePlaceholder(placeholder))
      {
        this.addError('invalid-tilde-placeholder-in-reference', `Invalid placeholder: "${placeholder.parameter}" in reference`);
        continue;
      }

      // Check if placeholder from reference are present in source
      const toSearch = placeholder.getValue().toLocaleLowerCase();
      if (!sourceValue.toLocaleLowerCase().includes(toSearch))
      {
        this.addError('missing-tilde-placeholder-in-source', `Missing placeholder "${toSearch}"`);
      }
    }
  }

  /**
   * Check if all "%name" placeholders from reference are present in source
   * @param referenceData
   * @param sourceData
   * @returns
   */
  private validatePercentPlaceholders(): void
  {
    const sourceValue = this.source.value;
    if(sourceValue === undefined)
      return;

    // Check if values from reference are present in source
    for (const placeholder of this.reference.percentPlaceholders)
    {
      if (!this.source.percentPlaceholders.find(p => p.equals(placeholder)))
      {
        this.addError('missing-percent-placeholder-in-source', `Missing placeholder "${placeholder.getValue()}"`);
      }
    }
  }

  private validateExtraTildePlaceholder(): void
  {
    if(this.reference.value === undefined || this.source.value === undefined)
      return;

    const groupedReferencePlaceholders = IniEntry.groupTildePlaceholders(this.reference.tildePlaceholders);
    const groupedSourcePlaceholders = IniEntry.groupTildePlaceholders(this.source.tildePlaceholders);

    for (const sourceGroup of groupedSourcePlaceholders)
    {
      const referenceGroup = groupedReferencePlaceholders
        .find(p => p.placeholder.equals(sourceGroup.placeholder));

      if(sourceGroup.count !== referenceGroup?.count)
      {
        this.addError('extra-tilde-placeholder-in-source', `Has ${sourceGroup.count} placeholder(s) "${sourceGroup.placeholder.getValue()}" but should have ${referenceGroup?.count ?? 0}`);
      }
    }
  }

//endregion

//region Helpers

  private addError(type: IniEntryErrorType, message: string)
  {
    this.errors.push({type, message});
  }

  /**
   * Check if placeholder is valid
   * @param placeholder
   * @returns
   */
  private static isValidTildePlaceholder(placeholder: TildePlaceholder): boolean
  {
    return !IniEntry.BAD_TOKENS.some(token => placeholder.parameter.indexOf(token) !== -1)
  }

  private static groupTildePlaceholders(placeholders: TildePlaceholder[]): {placeholder: TildePlaceholder, count: number}[]
  {
    return placeholders.reduce((acc, placeholder) =>
    {
      const foundPlaceholder = acc.find(p => p.placeholder.equals(placeholder))
      if(foundPlaceholder)
        foundPlaceholder.count++;
      else
        acc.push({placeholder, count: 1});

      return acc;
    }, [] as {placeholder: TildePlaceholder, count: number}[]);
  }
//endregion
}