import { IniEntry } from '../libs/ini-entry';
import { OutputStrategy } from './output-strategy';

/**
 * Standard output formatting for interactive use
 */
export class StandardOutputStrategy implements OutputStrategy
{
  initValidation(fileCount: number): void
  {
    console.log(`Files to validate: ${fileCount}`);
    console.log('Validating INI files...');
  }

  beginFileValidation(filePath: string): void
  {
    console.log();
    console.log('==================================================');
    console.log(`File "${filePath}"...`);
  }

  reportInvalidEntry(entry: IniEntry, _filePath: string): void
  {
    console.log(`❌ "${entry.key}" is invalid:`);
    for (const error of entry.errors)
    {
      console.log(`  - ${error.message}`);
    }
    console.log();
  }

  reportFileResult(filePath: string, success: boolean, errorCount: number): void
  {
    console.log();
    if (success)
    {
      console.log(`File "${filePath}" is valid ✅`);
    } else
    {
      console.log(`File "${filePath}" is invalid 🔥`);
    }
    console.log('==================================================');
  }

  finishValidation(success: boolean, totalFiles: number, filesWithErrors: number, totalErrors: number): void
  {
    console.log();
    console.log(`Validation ${success ? 'succeeded ✅' : 'failed ❌'}`);
    if (!success)
    {
      console.log(`Found ${totalErrors} errors in ${filesWithErrors} out of ${totalFiles} files`);
    }
  }

  logReferenceFileLoading(source: string): void
  {
    console.log(`Loading reference file: ${source}`);
  }
}
