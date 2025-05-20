#!/usr/bin/env node
import { program } from 'commander';
import { version } from '../package.json';
import { MergeCommand } from './commands/merge.command';
import { ValidateCommand } from './commands/validate.command';

function parseSource(value: string, previous: string): string
{
  const validSources = ['github', 'local'];

  // If previous is defined, it should be one of the valid sources
  if (previous && !validSources.includes(previous))
    throw new Error(`Invalid source type: ${previous}. Expected "github" or "local".`);

  // If value is not provided, throw an error
  if (!value)
    throw new Error('Source type is required. Expected "github" or "local".');

  // If value is provided, it should be one of the valid sources
  if (!validSources.includes(value))
    throw new Error(`Invalid source type: ${value}. Expected "github" or "local".`);
  return value;
}


program
  .name('ini-utils')
  .description('A utility for working with Star Citizen INI localization files')
  .version(version);

program
  .command('merge <referenceFilePath> <sourceFilePath> <replacementFilePath> <outputFilePath>')
  .description('Merge ini files')
  .action(MergeCommand.run);

program
  .command('validate')
  .argument('<files...>', 'Files to validate')
  .description('Check if all entries in files are present and valid in the source file')
  .option('--reference-type <type>', 'Type of reference: "github" or "local"', parseSource, 'github')
  .option('--github-branch <branch>', 'GitHub branch to use as reference (main, ptu, etc.)', 'main')
  .option('--github-repository <repository>', 'GitHub repository path', 'Dymerz/StarCitizen-Localization')
  .option('--github-file-path <path>', 'Path to file within repository', 'data/Localization/english/global.ini')
  .option('--local-path <path>', 'Path to local reference file')
  .option('--ci', 'Run in CI mode with machine-readable output format and GitHub Actions annotations. Returns exit code 1 on validation failure.', false)
  .action(ValidateCommand.run);

program.parse();