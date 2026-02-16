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

    console.log(`File ${outputFilePath} has been created successfully.`);
		console.log('Done.');
	}


  /**
   * Merge two INI dictionaries
   * @param referenceData The original INI data
   * @param sourceData The data to take the values from
   * @param replacementData The data to take the values from if the key is not present in the source data
   * @returns
   */
  private static mergeIniFiles(referenceData: Record<string, string|undefined>, sourceData: Record<string, string|undefined>, replacementData: Record<string, string|undefined>): Record<string, string|undefined>
  {
    const mergedData: Record<string, string|undefined> = {};

    for (const key in sourceData)
    {
      const referenceValue   = referenceData[key];
      const sourceValue      = sourceData[key];
      const replacementValue = replacementData[key];
      mergedData[key] = sourceValue || replacementValue || referenceValue;
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