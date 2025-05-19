#!/usr/bin/env node

// This is a simple wrapper to ensure the compiled JavaScript version is executed
try
{
  require('../dist/src/index.js');
} catch (error)
{
  console.error('Error running ini-utils:', error.message);
  console.log('Make sure you have built the project using "npm run build" before running.');
  process.exit(1);
}
