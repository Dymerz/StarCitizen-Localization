#!/usr/bin/env node
// External modules
import * as packageJson    from '../package.json';
import { ValidateCommand } from './commands/validate.command';
import { MergeCommand }    from './commands/merge.command';
import { program }         from 'commander';


program
  .name('ini-utils')
  .description('A utils for working with ini files')
  .version(packageJson.version);

program
  .command('merge <referenceFilePath> <sourceFilePath> <replacementFilePath> <outputFilePath>')
  .description('Merge ini files')
  .action(MergeCommand.run);

program
  .command('validate')
  .option('--source <path>', 'Reference file path')
  .option('--files <path...>', 'Files to validate')
  .option('--ci', 'Run in CI mode')
  .description('Check if all entries from reference file are present in other files')
  .action(ValidateCommand.run);

program.parse();
