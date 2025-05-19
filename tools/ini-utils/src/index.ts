#!/usr/bin/env node
import { program } from 'commander';
import { MergeCommand } from './commands/merge.command';
import { ValidateCommand } from './commands/validate.command';

// Read package.json for version
const packageJson = require('../package.json');

program
  .name('ini-utils')
  .description('A utility for working with Star Citizen INI localization files')
  .version(packageJson.version);

program
  .command('merge <referenceFilePath> <sourceFilePath> <replacementFilePath> <outputFilePath>')
  .description('Merge ini files')
  .action(MergeCommand.run);

program
  .command('validate <source> [files...]')
  .option('--ci', 'Run in CI mode')
  .description('Check if all entries from reference file are present in other files')
  .action(ValidateCommand.run);

program.parse();
