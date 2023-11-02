// Interfaces
import { Ini }         from '../shared/interfaces/ini.interface';
import { Placeholder } from '../shared/interfaces/placeholder.interface';

// Helpers
import { IniHelper }   from '../shared/helpers/ini.helper';


export class ValidateCommand
{
	public static async run(
    source : string,
    files  : string[],
    options: { ci: boolean}
  ){
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
      console.log('Validating placeholders...');

      const result = ValidateCommand.checkPlaceholders(referenceData, fileData);
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
    const referenceKeys = Object.keys(referenceData);
    const sourceKeys    = Object.keys(sourceData);

    // Check if all keys from reference are present in source
    const missingKeys = referenceKeys.filter(key => !sourceKeys.includes(key));
    if (missingKeys.length > 0)
    {
      console.log('  - Missing entries in file:\n');
      for (const key of missingKeys)
        console.log(`  - ${key}`);
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
    const placeholderRegex = /(~(?<name>\w+)\((?<parameter>.*?)\))/g; // match ~name(parameter)
    let isValid = true;

    const referencePlaceholders = new Map<string, Placeholder[]>();

    // Find all placeholders in reference file
    for (const [key, value] of Object.entries(referenceData.content))
    {
      let match: RegExpExecArray | null
      
      if(value === undefined)
      {
        console.log(`  - Unable to find key "${key}" in reference file`);
        isValid = false;
        continue;    
      }

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

      if(sourceValue === undefined)
      {
        console.log(`  - Unable to find key "${key}" in source file`);
        isValid = false;
        continue;
      }

      // Check if value contains all placeholders
      if (placeholders)
      {
        for (const placeholder of placeholders)
        {
          if (sourceValue.indexOf(`~${placeholder.name}(${placeholder.parameter})`) === -1)
          {
            console.log(`  - Unable to find placeholder "${placeholder.name}(${placeholder.parameter})" in "${key}"`);
            isValid = false;
          }
        }
      }
    }

    return isValid;
  }
}