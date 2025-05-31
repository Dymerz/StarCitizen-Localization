import { strict as assert } from 'assert';
import { afterEach, beforeEach, describe, it } from 'mocha';
import * as sinon from 'sinon';
import { IniEntry } from '../../../src/shared/libs/ini-entry';
import { CIOutputStrategy } from '../../../src/shared/strategies/ci-output-strategy';
import { StandardOutputStrategy } from '../../../src/shared/strategies/standard-output-strategy';

describe('Output Strategies', () =>
{
  let consoleLogStub: sinon.SinonStub;

  beforeEach(() =>
  {
    // Stub console.log to capture output
    consoleLogStub = sinon.stub(console, 'log');
  });

  afterEach(() =>
  {
    // Restore console.log
    consoleLogStub.restore();
  });

  describe('StandardOutputStrategy', () =>
  {
    let strategy: StandardOutputStrategy;

    beforeEach(() =>
    {
      strategy = new StandardOutputStrategy();
    });

    it('should initialize validation with file count', () =>
    {
      strategy.initValidation(5);

      assert.ok(consoleLogStub.calledWith('Files to validate: 5'));
      assert.ok(consoleLogStub.calledWith('Validating INI files...'));
    });

    it('should format file validation results correctly', () =>
    {
      strategy.reportFileResult('test.ini', true, 0);

      assert.ok(consoleLogStub.calledWith('File "test.ini" is valid ✅'));

      consoleLogStub.resetHistory();

      strategy.reportFileResult('test.ini', false, 3);

      assert.ok(consoleLogStub.calledWith('File "test.ini" is invalid 🔥'));
    });
  });

  describe('CIOutputStrategy', () =>
  {
    let strategy: CIOutputStrategy;

    beforeEach(() =>
    {
      strategy = new CIOutputStrategy();
    });

    it('should initialize validation with group annotation', () =>
    {
      strategy.initValidation(5);

      assert.ok(consoleLogStub.calledWith('::group::INI Validation - 5 files'));
    });

    it('should format file validation results with error annotations', () =>
    {
      strategy.reportFileResult('test.ini', true, 0);

      // Should not log anything for successful files
      assert.ok(!consoleLogStub.called);

      consoleLogStub.resetHistory();

      strategy.reportFileResult('test.ini', false, 3);

      assert.ok(consoleLogStub.calledWith('::error file=test.ini::Found 3 validation errors'));
    });

    it('should format summary with appropriate annotations', () =>
    {
      strategy.finishValidation(true, 5, 0, 0);

      assert.ok(consoleLogStub.calledWith('::endgroup::'));
      assert.ok(consoleLogStub.calledWith('::notice::All 5 files passed validation successfully'));

      consoleLogStub.resetHistory();

      strategy.finishValidation(false, 5, 2, 7);

      assert.ok(consoleLogStub.calledWith('::endgroup::'));
      assert.ok(consoleLogStub.calledWith('::error::Validation failed with 7 errors in 2 files'));
    });

    it('should log begin file validation', () =>
    {
      strategy.beginFileValidation('test.ini');

      assert.ok(consoleLogStub.calledWith('Validating: test.ini'));
    });

    it('should report invalid entries with error annotations', () =>
    {
      const entry = new IniEntry('test_key', 'reference value', 'source value');
      entry['addError']('key-missing', 'Error 1');
      entry['addError']('key-missing', 'Error 2');

      strategy.reportInvalidEntry(entry);

      assert.ok(consoleLogStub.calledWith('::error title=test_key::Error 1'));
      assert.ok(consoleLogStub.calledWith('::error title=test_key::Error 2'));
    });

    it('should log reference file loading', () =>
    {
      strategy.logReferenceFileLoading('test/reference.ini');

      assert.ok(consoleLogStub.calledWith('Loading reference file: test/reference.ini'));
    });
  });
});
