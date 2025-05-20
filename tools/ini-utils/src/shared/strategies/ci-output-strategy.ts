import { IniEntry } from '../libs/ini-entry';
import { OutputStrategy } from './output-strategy';

/**
 * CI-friendly output formatting with GitHub Actions annotations
 */
export class CIOutputStrategy implements OutputStrategy
{
  initValidation(fileCount: number): void
  {
    console.log(`::group::INI Validation - ${fileCount} files`);
  }

  beginFileValidation(filePath: string): void
  {
    console.log(`Validating: ${filePath}`);
  }

  reportInvalidEntry(entry: IniEntry): void
  {
    for (const error of entry.errors)
    {
      console.log(`::error title=${entry.key}::${error.message}`);
    }
  }

  reportFileResult(filePath: string, success: boolean, errorCount: number): void
  {
    if (!success)
    {
      console.log(`::error file=${filePath}::Found ${errorCount} validation errors`);
    }
  }

  finishValidation(success: boolean, totalFiles: number, filesWithErrors: number, totalErrors: number): void
  {
    console.log(`::endgroup::`);

    if (!success)
    {
      console.log(`::error::Validation failed with ${totalErrors} errors in ${filesWithErrors} files`);
    } else
    {
      console.log(`::notice::All ${totalFiles} files passed validation successfully`);
    }
  }

  logReferenceFileLoading(source: string): void
  {
    console.log(`Loading reference file: ${source}`);
  }
}
