import * as fs from 'fs';
import * as ini from 'ini';

type Ini = Record<string, string>;

/**
 * Load an INI file and return its content as an object
 * @param filePath
 * @returns
 */
function loadIniFile(filePath: string): Ini
{
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return ini.parse(fileContent);
}

/**
 * Merge two INI files
 * @param referenceData
 * @param sourceData
 * @param replacementData
 * @returns
 */
function mergeIniFiles(referenceData: Ini, sourceData: Ini, replacementData: Ini): Ini
{
  const mergedData: Ini = {};

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

/**
 * Write merged INI file
 * @param filePath
 * @param data
 */
function writeMergedIniFile(filePath: string, data: Ini): void
{
  fs.writeFileSync(filePath, '\ufeff'+ini.stringify(data), { encoding: 'utf-8' });
  console.log(`File ${filePath} has been created successfully.`);
}

// Get command line arguments
const [, , referenceFilePath, sourceFilePath, replacementFilePath, outputFilePath] = process.argv;

if (!referenceFilePath || !sourceFilePath || !replacementFilePath)
{
  console.error('Usage: node merge-ini.ts <referenceFilePath> <sourceFilePath> <replacementFilePath>');
  process.exit(1);
}

console.log('Loading INI files...');

// Load files
const referenceData = loadIniFile(referenceFilePath);
const sourceData = loadIniFile(sourceFilePath);
const replacementData = loadIniFile(replacementFilePath);

console.log('Merging INI files...');

// Merge files
const mergedData = mergeIniFiles(referenceData, sourceData, replacementData);

console.log('Writing merged INI file...');

// Write merged file
writeMergedIniFile(outputFilePath, mergedData);

console.log('Done.');
