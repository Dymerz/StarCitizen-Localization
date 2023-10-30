// Interfaces
import { Ini }         from '../shared/interfaces/ini.interface';
import { Placeholder } from '../shared/interfaces/placeholder.interface';

// Helpers
import { IniHelper }   from '../shared/helpers/ini.helper';


export class ValidateCommand
{
	public static async run(referenceFilePath: string, filePaths: string[], ci: boolean)
	{
    console.log('Validating INI files...');
    console.log('Preparing...');

		// Load files
		const referenceData = IniHelper.loadFile(referenceFilePath);
    const files = filePaths
      .filter(IniHelper.exists)
      .map(filePath => IniHelper.loadFile(filePath));

    let success = true;

    // Validate all files
    for (const file of files)
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
    if(ci && !success) process.exit(1);
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
        console.error('  => One or more keys are missing in source file');
        success = false;
      }
      else
        console.log('  => All keys are present in the file');
    }

    console.log();

    // NOTE Check if all variable placeholders are present in source
    {
      console.log('Validating placeholders...');

      const result = ValidateCommand.checkPlaceholders(referenceData, fileData);
      if (!result)
      {
        console.error('  => One or more placeholders are missing in source file');
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
    const referenceKeys = Object.keys(referenceData);
    const sourceKeys    = Object.keys(sourceData);

    // Check if all keys from reference are present in source
    const missingKeys = referenceKeys.filter(key => !sourceKeys.includes(key));
    if (missingKeys.length > 0)
    {
      console.error('  - Missing entries in file:\n');
      for (const key of missingKeys)
        console.error(`  - ${key}`);
      return false;
    }

    return true;
  }

  /**
   * Check if all placeholders from reference are present in source
   * @param referenceData
   * @param sourceData
   * @returns
   */
  private static checkPlaceholders(referenceData: Ini, sourceData: Ini): boolean
  {
    const placeholderRegex = /(~(?<name>\w+)\((?<parameter>\w+)\))/g; // match ~name(parameter)
    let isValid = true;

    const referencePlaceholders = new Map<string, Placeholder[]>();

    // Find all placeholders in reference file
    for (const [key, value] of Object.entries(referenceData.content))
    {
      let match: RegExpExecArray | null
      do
      {
        match = placeholderRegex.exec(value);
        if (match && match.groups)
        {
          // Extract placeholder name and parameter
          const name = match.groups.name;
          const parameter = match.groups.parameter;

          // Add new or append to existing entries
          const placeholder: Placeholder = { name, parameter };
          const placeholders = referencePlaceholders.get(key);
          if (placeholders)
            placeholders.push(placeholder);
          else
            referencePlaceholders.set(key, [placeholder]);
        }
      } while(match)
    }

    // Check if all placeholders are present in source file
    for (const key of referencePlaceholders.keys())
    {
      const placeholders = referencePlaceholders.get(key);
      const sourceValue = sourceData.content[key];

      // Check if value contains all placeholders
      if (placeholders)
      {
        for (const placeholder of placeholders)
        {
          const regex = new RegExp(`~${placeholder.name}\\\(${placeholder.parameter}\\\)`, 'g');
          if (!regex.test(sourceValue))
          {
            console.error(`  - Unable to find placeholder "${placeholder.name}(${placeholder.parameter})" in "${key}"`);
            isValid = false;
          }
        }
      }
    }

    return isValid;
  }
}