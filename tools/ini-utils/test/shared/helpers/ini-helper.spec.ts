// External modules
import assert       from 'assert';
import os           from 'os';

// External modules
import { Ini }       from '../../../src/shared/types/ini.type';
import sinon         from 'sinon';

// Helpers
import { IniHelper } from '../../../src/shared/helpers/ini.helper';


describe('IniHelper.writeFile', () =>
{
  let writeFileSyncStub: sinon.SinonStub;

  beforeEach(() =>
  {
    writeFileSyncStub = sinon.stub(IniHelper, 'writeFileSync').callsFake(() => { });
  });

  afterEach(() =>
  {
    writeFileSyncStub.restore();
  });

  it('should write the INI file with UTF-8 BOM', () =>
  {
    const eol = os.EOL;
    const sampleIni: Ini = {
      path: 'test.ini',
      content: { key: 'value' }
    };

    IniHelper.writeFile(sampleIni);

    assert.ok((writeFileSyncStub).calledOnce, 'writeFileSync should be called once');
    assert.ok(writeFileSyncStub.calledWith(
      'test.ini',
      '\ufeffkey=value' + eol,
      { encoding: 'utf-8' }
    ), 'writeFileSync should be called with correct arguments');
  });
});