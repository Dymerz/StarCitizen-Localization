// External modules
import { IniEntry }  from '../shared/libs/ini-entry';
import { Ini }       from '../shared/types/ini.type';

// Helpers
import { IniHelper } from '../shared/helpers/ini.helper';

export class ValidateCommand
{
	public static async run(reference : string, files: string[], options: { ci: boolean}): Promise<void>
  {
    console.log(`Reference file: ${reference}`);

    if(files.length === 0)
    {
      console.log('No files to validate');
      return;
    }

		// Load files
    console.log(`Loading reference file: ${reference}`);
		const referenceData = IniHelper.loadFile(reference);

    console.log(`Files to validate: ${files.length}`);
    console.log('Validating INI files...');
    let success = true;
    for (const file of files)
    {
      const sourceData = IniHelper.loadFile(file);

      // Validate all files
      console.log();
      console.log('==================================================');
      console.log(`File "${file}"...`);
      console.log('==================================================');
      if (!ValidateCommand.validateIni(referenceData, sourceData))
      {
        success = false;
        console.log();
        console.log(`File "${file}" is invalid 🔥`);
      }
      else
      {
        console.log();
        console.log(`File "${file}" is valid ✅`);
      }

      console.log('==================================================');
    }

    // Return error code if CI is enabled
    if(options.ci && !success)
      process.exit(1);
	}

  private static validateIni(referenceData: Ini, fileData: Ini): boolean
  {
    let success = true;

    const entries = Object.entries(referenceData.content)
      .map(([key, value]) => new IniEntry(key, value, fileData.content[key]));

    for (const entry of entries)
    {
      entry.validate();
      if(!entry.isValid())
      {
        console.log(`❌ "${entry.key}" is invalid:`);
        for (const error of entry.errors)
          console.log(`  - ${error.message}`);

        console.log();
        success = false;
      }
    }

    return success;
  }
}