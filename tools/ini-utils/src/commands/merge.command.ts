// Helpers
import { IniHelper } from '../shared/helpers/ini.helper';


export class MergeCommand
{
	public static async run(referenceFilePath: string, sourceFilePath: string, replacementFilePath: string, outputFilePath: string)
	{
		console.log('Loading INI files...');

		// Load files
		const referenceData   = IniHelper.loadFile(referenceFilePath);
		const sourceData      = IniHelper.loadFile(sourceFilePath);
		const replacementData = IniHelper.loadFile(replacementFilePath);

		console.log('Merging INI files...');

		// Merge files
		const mergedData = MergeCommand.mergeIniFiles(referenceData.content, sourceData.content, replacementData.content);

		console.log('Writing merged INI file...');

		// Write merged file
		IniHelper.writeFile({
      path   : outputFilePath,
      content: mergedData
    });

		console.log('Done.');
	}


  /**
   * Merge two INI files
   * @param referenceData
   * @param sourceData
   * @param replacementData
   * @returns
   */
  private static mergeIniFiles(referenceData: Record<string, string|undefined>, sourceData: Record<string, string|undefined>, replacementData: Record<string, string|undefined>): Record<string, string|undefined>
  {
    const mergedData: Record<string, string|undefined> = {};

    for (const key in sourceData)
    {
      if (referenceData[key] && referenceData[key] === sourceData[key])
      {
        // Key is present in reference file and has the same value in source file
        mergedData[key] = replacementData[key] || sourceData[key];
      }
      else
      {
        mergedData[key] = sourceData[key];
      }
    }

    // Add missing keys from the reference file
    for (const key in referenceData)
    {
      if (!sourceData[key])
      {
        mergedData[key] = referenceData[key];
      }
    }

    return mergedData;
  }
}