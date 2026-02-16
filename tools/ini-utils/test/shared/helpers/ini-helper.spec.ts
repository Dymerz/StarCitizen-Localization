// External modules
import assert  from 'assert';
import fs      from 'fs';
import mockFs  from 'mock-fs';
import os      from 'os';
import { Ini } from '../../../src/shared/types/ini.type';

// Helpers
import { IniHelper } from '../../../src/shared/helpers/ini.helper';


describe('IniHelper.writeFile', () =>
{
  beforeEach(() =>
  {
    mockFs({});
  });

  afterEach(() =>
  {
    mockFs.restore();
  });

  it('should write the INI file with UTF-8 BOM', () =>
  {
    const eol = os.EOL;
    const sampleIni: Ini = {
      path: 'test.ini',
      content: { key: 'value' }
    };

    IniHelper.writeFile(sampleIni);

    // Read the file that was written
    const writtenContent = fs.readFileSync('test.ini', 'utf-8');

    // Check that it contains the BOM and correct content
    assert.strictEqual(writtenContent.charCodeAt(0), 0xFEFF, 'File should start with BOM');
    assert.strictEqual(writtenContent.slice(1), `key=value${eol}`, 'File content should be correct');
  });
});
