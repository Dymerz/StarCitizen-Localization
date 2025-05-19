import { IniHelper } from '../shared/helpers/ini.helper';
import { IniEntry } from '../shared/libs/ini-entry';
import { Ini } from '../shared/types/ini.type';

export type ValidateCommandOptions = {
  /** Indicates whether the command is running in CI environment. */
  ci: boolean;

  /** The source type for the reference file, either 'remote' or 'local'. */
  source: 'remote' | 'local';

  /** The branch of the remote repository to use as reference. */
  remoteBranch: string;

  /** The remote repository path, used when source is 'remote'. */
  remoteRepository: string;

  /** The path to the local reference file, used when source is 'local'. */
  localReference?: string;
} & {
  /** The source type for the reference file, either 'remote' or 'local'. */
  source: 'local';

  /** The path to the local reference file, used when source is 'local'. */
  localReference: string;
};

export class ValidateCommand
{
  public static async run(files: string[], options: ValidateCommandOptions): Promise<void>
  {

    // Validate options
    ValidateCommand.validateOptions(options);

    // Load files

    console.log(`Loading reference file...`);
    const referenceData = await ValidateCommand.getFile(options);

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
    if (options.ci && !success)
      process.exit(1);
  }

  /**
   * Validates the options provided to the command.
   * Throws an error if any required option is missing or invalid.
   * @param options - The options provided to the command.
   * @throws {Error} If the options are invalid.
   */
  private static validateOptions(options: ValidateCommandOptions): void
  {
    if (options.source === 'local' && !options.localReference)
    {
      throw new Error('Local reference file path is required when using local source');
    }
  }

  private static validateIni(referenceData: Ini, fileData: Ini): boolean
  {
    let success = true;

    const entries = Object.entries(referenceData.content)
      .map(([key, value]) => new IniEntry(key, value, fileData.content[key]));

    for (const entry of entries)
    {
      entry.validate();
      if (!entry.isValid())
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

  /**
   * Retrieves an Ini file based on the provided options.
   *
   * @param options - Command options specifying the source and reference details
   * @returns A Promise resolving to an Ini object representing the file content
   */
  private static async getFile(options: ValidateCommandOptions): Promise<Ini>
  {
    if (options.source === 'local')
    {
      return ValidateCommand.getFileFromPath(options.localReference);
    }
    else
    {
      return await ValidateCommand.getFileFromRepository(
        options.remoteRepository,
        options.remoteBranch,
        'data/Localization/french_(france)/global.ini'
      );
    }
  }

  /**
   * Loads an Ini file from a local path.
   *
   * @param filePath - The path to the local Ini file
   * @returns An Ini object containing the file content
   */
  private static getFileFromPath(filePath: string): Ini
  {
    console.log(`Loading reference file: ${filePath}`);
    return IniHelper.loadFile(filePath);
  }

  /**
   * Fetches an Ini file from a remote repository.
   *
   * @param repositoryUrl - The URL of the remote repository
   * @param branch - The branch of the repository to fetch the file from
   * @param filePath - The path to the file within the repository
   * @returns A Promise resolving to an Ini object containing the file content
   */
  private static async getFileFromRepository(repositoryUrl: string, branch: string, filePath: string): Promise<Ini>
  {
    console.log(`Loading reference file: ${filePath} from repository ${repositoryUrl} on branch ${branch}`);
    const root = new URL(`https://raw.githubusercontent.com/${repositoryUrl}/${branch}/`);
    const url = new URL(filePath, root);

    const response = await fetch(url.toString());
    if (!response.ok)
    {
      console.error(`Failed to fetch file from ${url.toString()}: ${response.statusText}`);
      throw new Error(`Failed to fetch file from ${url.toString()}`);
    }
    const content = await response.text();
    return {
      path: url.toString(),
      content: IniHelper.parse(content)
    };
  }
}