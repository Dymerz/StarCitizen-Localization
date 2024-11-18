// External modules
import { ValidateCommand } from '../../src/commands/validate.command';
import assert              from 'assert';
import sinon               from 'sinon'

// Helpers
import { IniHelper }       from '../../src/shared/helpers/ini.helper';


describe('ValidateCommand.run', () =>
{
  let consoleLogStub: sinon.SinonStub;
  let loadFileStub: sinon.SinonStub;

  // Disable console.log
  beforeEach(() =>
  {
    consoleLogStub = sinon.stub(console, 'log').callsFake(() => {});
    loadFileStub = sinon.stub(IniHelper, 'loadFile');
  });

  afterEach(() =>
  {
    consoleLogStub.restore();
    loadFileStub.restore();
  });

  it('should log "No files to validate" when no files are provided', async () =>
  {
    await ValidateCommand.run('reference.ini', [], { ci: false });

    assert.ok(consoleLogStub.calledWith('No files to validate'), 'Expected log message not found');
  });

  it('should validate files successfully', async () =>
  {
    loadFileStub.onFirstCall().returns({ content: { key1: 'value1' } });
    loadFileStub.onSecondCall().returns({ content: { key1: 'value1' } });

    await ValidateCommand.run('reference.ini', ['file1.ini'], { ci: false });
    assert.ok(consoleLogStub.calledWith('File "file1.ini" is valid ✅'), 'Expected valid file log message not found');
  });

  it('should detect invalid files', async () =>
  {
    loadFileStub.onFirstCall().returns({ content: { key1: 'valid placeholder ~name(parameter)' } });
    loadFileStub.onSecondCall().returns({ content: { key1: 'missing placeholder' } });

    await ValidateCommand.run('reference.ini', ['file1.ini'], { ci: false });
    assert.ok(consoleLogStub.calledWith('File "file1.ini" is invalid 🔥'), 'Expected invalid file log message not found');
  });

  it('should exit with code 1 in CI mode when files are invalid', async () =>
  {
    loadFileStub.onFirstCall().returns({ content: { key1: 'valid placeholder ~name(parameter)' } });
    loadFileStub.onSecondCall().returns({ content: { key1: 'missing placeholder' } });

    const processExitStub = sinon.stub(process, 'exit');
    try
    {
      await ValidateCommand.run('reference.ini', ['file1.ini'], { ci: true });
    } catch (e)
    {
      // process.exit will throw an error in the test environment
    }
    assert.ok(processExitStub.calledWith(1), 'Expected process.exit with code 1');
    processExitStub.restore();
  });
});