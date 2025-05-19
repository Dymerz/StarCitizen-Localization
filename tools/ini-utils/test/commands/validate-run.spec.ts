import assert from 'assert';
import sinon from 'sinon';
import { ValidateCommand } from '../../src/commands/validate.command';
import { IniHelper } from '../../src/shared/helpers/ini.helper';


describe('ValidateCommand.run', () =>
{
  let consoleLogStub: sinon.SinonStub;
  let loadFileStub: sinon.SinonStub;

  // Disable console.log
  beforeEach(() =>
  {
    consoleLogStub = sinon.stub(console, 'log').callsFake(() => { });
    loadFileStub = sinon.stub(IniHelper, 'loadFile');
  });

  afterEach(() =>
  {
    consoleLogStub.restore();
    loadFileStub.restore();
  });

  it('should validate files successfully', async () =>
  {
    loadFileStub.onFirstCall().returns({ content: { key1: 'value1' } });
    loadFileStub.onSecondCall().returns({ content: { key1: 'value1' } });

    await ValidateCommand.run(['file1.ini'], {
      ci: false,
      referenceType: 'local',
      localPath: 'reference.ini'
    });
    assert.ok(consoleLogStub.calledWith('File "file1.ini" is valid ✅'), 'Expected valid file log message not found');
  });

  it('should detect invalid files', async () =>
  {
    loadFileStub.onFirstCall().returns({ content: { key1: 'valid placeholder ~name(parameter)' } });
    loadFileStub.onSecondCall().returns({ content: { key1: 'missing placeholder' } });

    await ValidateCommand.run(['file1.ini'], {
      ci: false,
      referenceType: 'local',
      localPath: 'reference.ini'
    });
    assert.ok(consoleLogStub.calledWith('File "file1.ini" is invalid 🔥'), 'Expected invalid file log message not found');
  });

  it('should exit with code 1 in CI mode when files are invalid', async () =>
  {
    loadFileStub.onFirstCall().returns({ content: { key1: 'valid placeholder ~name(parameter)' } });
    loadFileStub.onSecondCall().returns({ content: { key1: 'missing placeholder' } });

    const processExitStub = sinon.stub(process, 'exit');

    await ValidateCommand.run(['file1.ini'], {
      ci: true,
      referenceType: 'local',
      localPath: 'reference.ini'
    });

    assert.ok(processExitStub.calledWith(1), 'Expected process.exit with code 1');
    processExitStub.restore();
  });

  it('should handle invalid reference type', async () =>
  {
    assert.rejects(async () =>
    {
      await ValidateCommand.run(['file1.ini'], {
        ci: false,
        referenceType: 'invalid' as any
      });
    }, Error);
  });

  it('should handle missing ci option', async () =>
  {
    assert.rejects(async () =>
    {
      await ValidateCommand.run(['file1.ini'], {
        referenceType: 'local',
        localPath: 'reference.ini'
      });
    }, Error);
  });

  it('should handle missing required options for local reference', async () =>
  {
    assert.rejects(async () =>
    {
      await ValidateCommand.run(['file1.ini'], {
        ci: false,
        referenceType: 'local'
        // localPath missing
      });
    }, Error);
  });

  it('should handle missing required options for github reference', async () =>
  {
    assert.rejects(async () =>
    {
      await ValidateCommand.run(['file1.ini'], {
        ci: false,
        referenceType: 'github'
        // Missing 'githubRepository' options
      });
    }, Error);

    assert.rejects(async () =>
    {
      await ValidateCommand.run(['file1.ini'], {
        ci: false,
        referenceType: 'github',
        githubRepository: 'owner/repo'
        // Missing 'githubBranch' options
      });
    }, Error);

    assert.rejects(async () =>
    {
      await ValidateCommand.run(['file1.ini'], {
        ci: false,
        referenceType: 'github',
        githubRepository: 'owner/repo',
        githubBranch: 'main'
        // Missing 'githubFilePath' options
      });
    }, Error);
  });
});