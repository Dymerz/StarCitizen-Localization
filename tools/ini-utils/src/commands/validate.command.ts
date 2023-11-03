// Interfaces
import { Ini }                from '../shared/types/ini.type';
import { PercentPlaceholder } from '../shared/types/percent-placeholder.type';
import { TildPlaceholder }    from '../shared/types/tild-placeholder.type';

// Helpers
import { IniHelper }          from '../shared/helpers/ini.helper';
import { StringHelper }       from '../shared/helpers/string.helper';


export class ValidateCommand
{
	public static async run(source : string, files  : string[], options: { ci: boolean})
  {
    console.log('Validating INI files...');

		// Load files
		const referenceData = IniHelper.loadFile(source);
    console.log(`Reference file: ${referenceData.path}`);

    const iniFiles = files
      .filter(file => IniHelper.exists(file))
      .map(filePath => IniHelper.loadFile(filePath));
    console.log(`Files to validate: ${iniFiles.length}`);

    if(files.length === 0)
    {
      console.log('No files to validate');
      return;
    }

    let success = true;

    // Validate all files
    for (const file of iniFiles)
    {
      console.log();
      console.log('==================================================');
      console.log(`File "${file.path}"...`);
      console.log('==================================================');
      const isValid = ValidateCommand.validateIni(referenceData, file);
      if (!isValid)
      {
        success = false;
        console.log();
        console.log(`File "${file.path}" is invalid`);
      }

      console.log('==================================================');
    }

    // Return error code if CI is enabled
    if(options.ci && !success) process.exit(1);
	}

  private static validateIni(referenceData: Ini, fileData: Ini): boolean
  {
    let success = true;

    // NOTE Check if all keys from reference are present in source
    {
      console.log('Validating keys...');

      const result = ValidateCommand.checkMissingKeys(referenceData, fileData);
      if (!result)
      {
        console.log('  => One or more keys are missing in source file');
        success = false;
      }
      else
        console.log('  => All keys are present in the file');
    }

    console.log();

    // NOTE Check if all variable placeholders are present in source
    {
      console.log('Validating "~name(parameter)" placeholders...');

      const result = ValidateCommand.validateTildPlaceholders(referenceData, fileData);
      if (!result)
      {
        console.log('  => One or more placeholders are missing in source file');
        success = false;
      }
      else
        console.log('  => All placeholders are present in source file');
    }

    console.log();

    // NOTE Check if all variable placeholders are present in source
    {
      console.log('Validating "%name" placeholders...');

      const result = ValidateCommand.validatePercentPlaceholders(referenceData, fileData);
      if (!result)
      {
        console.log('  => One or more placeholders are missing in source file');
        success = false;
      }
      else
        console.log('  => All placeholders are present in source file');
    }

    return success;
  }

  /**
   * Check if all entries from reference are present in source
   * @param referenceData
   * @param sourceData
   * @returns
   */
  private static checkMissingKeys(referenceData: Ini, sourceData: Ini): boolean
  {
    const referenceKeys = Object.keys(referenceData.content);
    const sourceKeys    = Object.keys(sourceData.content);

    // Check if all keys from reference are present in source
    const missingKeys = referenceKeys.filter(key => !sourceKeys.includes(key));
    if (missingKeys.length > 0)
    {
      for (const key of missingKeys)
        console.log(`  - Unable to find key "${key}"`);
      return false;
    }

    return true;
  }

  /**
   * Check if all "~name(parameter)" placeholders from reference are present in source
   * @param referenceData
   * @param sourceData
   * @returns
   */
  private static validateTildPlaceholders(referenceData: Ini, sourceData: Ini): boolean
  {
    const placeholderRegex = /(~(?<name>\w+)\((?<parameter>.*?)\))/g; // match ~name(parameter)
    let isValid = true;

    const referencePlaceholders = new Map<string, TildPlaceholder[]>();

    // Find all placeholders in reference file
    for (const [key, value] of Object.entries(referenceData.content))
    {
      if(value === undefined)
      {
        console.log(`  - Unable to find key "${key}" in reference file`);
        isValid = false;
        continue;    
      }

      const matches = StringHelper.getAllMatchesGroups<TildPlaceholder>(value, placeholderRegex);

      // Check if placeholders of this key is valid
      for (const match of matches) 
      {
        if(!ValidateCommand.isValidTildPlaceholder(match))
        {
          console.log(`  - Invalid placeholder "${match.name}(${match.parameter})" in "${key}"`);
          isValid = false;
          continue;
        }
      }

      referencePlaceholders.set(key, matches);
    }

    // Check if all placeholders are present in source file
    for (const key of referencePlaceholders.keys())
    {
      const placeholders = referencePlaceholders.get(key);
      const sourceValue = sourceData.content[key]?.toLocaleLowerCase();

      if (sourceValue === undefined)
      {
        console.log(`  - Unable to find key "${key}" in source file`);
        isValid = false;
        continue;
      }

      if (placeholders === undefined)
        continue;

      // Check if value contains all placeholders
      for (const placeholder of placeholders)
      {
        const toSearch = `~${placeholder.name.toLocaleLowerCase()}(${placeholder.parameter.toLocaleLowerCase()})`;
        if (sourceValue.indexOf(toSearch) === -1)
        {
          console.log(`  - Unable to find placeholder "${placeholder.name}(${placeholder.parameter})" in "${key}"`);
          isValid = false;
        }
      }
    }

    return isValid;
  }

  /**
   * Check if all "%name" placeholders from reference are present in source
   * @param referenceData
   * @param sourceData
   * @returns
   */
  private static validatePercentPlaceholders(referenceData: Ini, sourceData: Ini): boolean 
  {
    const placeholderRegex = /%(?<name>\w+)/g; // match %name
    let isValid = true;

    const referencePlaceholders = new Map<string, string[]>();
    const sourcePlaceholders = new Map<string, string[]>();

    // Find all placeholders in reference file
    for (const [key, value] of Object.entries(referenceData.content))
    {
      if(value === undefined)
      {
        console.log(`  - Unable to find key "${key}" in reference file`);
        isValid = false;
        continue;    
      }

      const matches = StringHelper.getAllMatchesGroups<PercentPlaceholder>(value, placeholderRegex);
      const names = matches.map(match => match.name);

      referencePlaceholders.set(key, names);
    }

    // Find all placeholders in source file
    for (const [key, value] of Object.entries(sourceData.content))
    {
      if(value === undefined)
      {
        console.log(`  - Unable to find key "${key}" in source file`);
        isValid = false;
        continue;    
      }

      const matches = StringHelper.getAllMatchesGroups<PercentPlaceholder>(value, placeholderRegex);
      const names = matches.map(match => match.name);

      sourcePlaceholders.set(key, names);
    }

    // Check if all placeholders are present in source file
    for (const key of referencePlaceholders.keys())
    {
      const referenceValues = referencePlaceholders.get(key);
      const sourceValues = sourcePlaceholders.get(key);

      if(referenceValues === undefined)
      {
        console.log(`  - Unable to find key "${key}" in reference file`);
        isValid = false;
        continue;
      }

      if(sourceValues === undefined)
      {
        console.log(`  - Unable to find key "${key}" in source file`);
        isValid = false;
        continue;
      }
      

      // Check if values from reference are present in source
      for (const referenceValue of referenceValues)
      {
        if(!sourceValues.includes(referenceValue))
        {
          console.log(`  - Unable to find placeholder "%${referenceValue}" in "${key}"`);
          isValid = false;
        }
      }
    }

    return isValid;
  }

  /**
   * Check if placeholder is valid
   * @param key The key of the entry
   * @param match The match result
   * @returns 
   */
  private static isValidTildPlaceholder(placeholder: TildPlaceholder): boolean 
  {
    const parameter = placeholder.parameter;
    
    // Check if parameter contains opening parenthesis, which means that it is not a valid placeholder
    const badTokens = ['(', ')', '~', ']', '\\n'];
    return !badTokens.some(token => parameter.indexOf(token) !== -1)
  }
}