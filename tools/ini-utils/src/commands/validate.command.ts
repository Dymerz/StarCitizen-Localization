import { IniHelper } from '../shared/helpers/ini.helper';
import { IniEntry } from '../shared/libs/ini-entry';
import { OutputStrategy, OutputStrategyFactory } from '../shared/strategies';
import { Ini } from '../shared/types/ini.type';

export type ValidateCommandOptionsLocal = {
  /** The source type for the reference file, either 'github' or 'local'. */
  referenceType: 'local';

  /** The path to the local reference file, used when referenceType is 'local'. */
  localPath: string;
};

export type ValidateCommandOptionsGithub = {
  /** The source type for the reference file, either 'github' or 'local'. */
  referenceType: 'github';

  /** The branch of the GitHub repository to use as reference. */
  githubBranch: string;

  /** The GitHub repository path, used when referenceType is 'github'. */
  githubRepository: string;

  /** The path to the file within the GitHub repository, used when referenceType is 'github'. */
  githubFilePath: string;
};

export type ValidateCommandOptions = {
  /** Indicates whether the command is running in CI environment. */
  ci: boolean;

  /** Determines if the command should exit with a non-zero code when validation errors are found. */
  failOnError: boolean;
} & (ValidateCommandOptionsGithub | ValidateCommandOptionsLocal);

export class ValidateCommand
{
  public static async run(files: string[], options: Partial<ValidateCommandOptions>): Promise<void>
  {
    // Validate options
    const validatedOptions = ValidateCommand.validateOptions(options);

    // Create the appropriate output strategy
    const outputStrategy = OutputStrategyFactory.createStrategy(validatedOptions.ci);

    // Load files
    const referenceData = await ValidateCommand.getFile(validatedOptions, outputStrategy);

    // Initialize validation
    outputStrategy.initValidation(files.length);

    let success = true;
    let totalErrors = 0;
    let filesWithErrors = 0;

    for (const file of files)
    {
      const sourceData = IniHelper.loadFile(file);

      // Begin validation for this file
      outputStrategy.beginFileValidation(file);

      // Validate file
      const fileResults = ValidateCommand.validateIni(referenceData, sourceData, outputStrategy);

      if (!fileResults.success)
      {
        success = false;
        filesWithErrors++;
        totalErrors += fileResults.errorCount;
      }

      // Report file validation result
      outputStrategy.reportFileResult(file, fileResults.success, fileResults.errorCount);
    }

    // Finish validation and report summary
    outputStrategy.finishValidation(success, files.length, filesWithErrors, totalErrors);

    // Exit with non-zero code if validation failed and failOnError is true
    if (!success && validatedOptions.failOnError)
    {
      process.exit(1);
    }
  }

  /**
   * Validates the options provided to the command.
   * Throws an error if any required option is missing or invalid.
   * @param options - The options provided to the command.
   * @throws {Error} If the options are invalid.
   */
  private static validateOptions(options: Partial<ValidateCommandOptions>): ValidateCommandOptions
  {
    if (options.ci === undefined)
    {
      // Check if running in CI environment
      const isCI = process.env.CI === 'true' || process.env.CI === '1' || undefined;

      options.ci = isCI ?? false; // Default to false if not provided
    }

    if (options.failOnError === undefined)
    {
      options.failOnError = false; // Default to false if not provided
    }

    if (options.referenceType === 'local')
    {
      if (!options.localPath)
        throw new Error('Local reference file path is required when using local source');
    }

    else if (options.referenceType === 'github')
    {
      if (!options.githubRepository)
        throw new Error('GitHub repository path is required when using GitHub source');

      if (!options.githubBranch)
        throw new Error('GitHub branch is required when using GitHub source');

      if (!options.githubFilePath)
        throw new Error('GitHub file path is required when using GitHub source');
    }

    return options as ValidateCommandOptions;
  }

  private static validateIni(referenceData: Ini, fileData: Ini, outputStrategy?: OutputStrategy): { success: boolean, errorCount: number; }
  {
    let success = true;
    let errorCount = 0;

    const entries = Object.entries(referenceData.content)
      .map(([key, value]) => new IniEntry(key, value, fileData.content[key]));

    for (const entry of entries)
    {
      entry.validate();
      if (!entry.isValid())
      {
        // Report invalid entry using strategy
        outputStrategy?.reportInvalidEntry(entry, fileData.path);

        success = false;
        errorCount += entry.errors.length;
      }
    }

    return { success, errorCount };
  }

  /**
   * Retrieves an Ini file based on the provided options.
   *
   * @param options - Command options specifying the source and reference details
   * @param outputStrategy - The output strategy to use for logging
   * @returns A Promise resolving to an Ini object representing the file content
   */
  private static async getFile(options: ValidateCommandOptions, outputStrategy?: OutputStrategy): Promise<Ini>
  {
    if (options.referenceType === 'local')
    {
      return ValidateCommand.getFileFromPath(options.localPath, outputStrategy);
    }
    else
    {
      return await ValidateCommand.getFileFromRepository(
        options.githubRepository,
        options.githubBranch,
        options.githubFilePath,
        outputStrategy
      );
    }
  }

  /**
   * Loads an Ini file from a local path.
   *
   * @param filePath - The path to the local Ini file
   * @param outputStrategy - The output strategy to use for logging
   * @returns An Ini object containing the file content
   */
  private static getFileFromPath(filePath: string, outputStrategy?: OutputStrategy): Ini
  {
    outputStrategy?.logReferenceFileLoading(filePath);
    return IniHelper.loadFile(filePath);
  }

  /**
   * Fetches an Ini file from a GitHub repository.
   *
   * @param repository - The GitHub repository in the format 'owner/repo'
   * @param branch - The branch of the repository to fetch the file from
   * @param filePath - The path to the file within the repository
   * @param outputStrategy - The output strategy to use for logging
   * @returns A Promise resolving to an Ini object containing the file content
   */
  private static async getFileFromRepository(repository: string, branch: string, filePath: string, outputStrategy?: OutputStrategy): Promise<Ini>
  {
    const source = `${filePath} from repository ${repository} on branch ${branch}`;
    outputStrategy?.logReferenceFileLoading(source);

    const repositoryBaseUrl = new URL(`https://raw.githubusercontent.com/${repository}/${branch}/`);
    const resourceUrl = new URL(filePath, repositoryBaseUrl);

    const response = await fetch(resourceUrl.toString());
    if (!response.ok)
    {
      console.error(`Failed to fetch file from ${resourceUrl.toString()}: ${response.statusText}`);
      throw new Error(`Failed to fetch file from ${resourceUrl.toString()}`);
    }
    const content = await response.text();
    return {
      path: resourceUrl.toString(),
      content: IniHelper.parse(content)
    };
  }
}