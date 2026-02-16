import { IniEntry } from '../libs/ini-entry';

/**
 * Interface for output formatting strategies
 */
export interface OutputStrategy
{
  /**
   * Initialize validation process
   * @param fileCount Number of files to validate
   */
  initValidation(fileCount: number): void;

  /**
   * Begin validation for a specific file
   * @param filePath Path to the file being validated
   */
  beginFileValidation(filePath: string): void;

  /**
   * Report an invalid entry
   * @param entry The INI entry that failed validation
   */
  reportInvalidEntry(entry: IniEntry, filePath: string): void;

  /**
   * Report validation result for a file
   * @param filePath Path to the file
   * @param success Whether validation was successful
   * @param errorCount Number of errors found
   */
  reportFileResult(filePath: string, success: boolean, errorCount: number): void;

  /**
   * End validation for all files and report summary
   * @param success Overall validation success
   * @param totalFiles Total number of files processed
   * @param filesWithErrors Number of files with validation errors
   * @param totalErrors Total number of errors across all files
   */
  finishValidation(success: boolean, totalFiles: number, filesWithErrors: number, totalErrors: number): void;

  /**
   * Log loading of a reference file
   * @param source Source information (path or URL)
   */
  logReferenceFileLoading(source: string): void;
}
