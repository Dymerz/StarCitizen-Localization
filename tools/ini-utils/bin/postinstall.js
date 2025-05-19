#!/usr/bin/env node

console.log('📦 Installing @dymerz/starcitizen-ini-utils...');
const { spawnSync } = require('child_process');

try
{
  console.log('🔨 Building TypeScript code...');
  const result = spawnSync('npm', ['run', 'build'], { stdio: 'inherit', shell: true });

  if (result.error)
  {
    console.error('❌ Build failed:', result.error);
    process.exit(1);
  }

  if (result.status !== 0)
  {
    console.error(`❌ Build process exited with code ${result.status}`);
    process.exit(result.status);
  }

  console.log('✅ Build completed successfully!');
  console.log('🚀 You can now use the tool with: npx @dymerz/starcitizen-ini-utils');
} catch (error)
{
  console.error('❌ An error occurred during installation:', error);
  process.exit(1);
}
