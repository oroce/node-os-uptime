'use strict';
const proxyquire = require('proxyquire');
const assert = require('assert');

describe('win32', () => {
  it('should parse the date', () => {
    const win32 = proxyquire('./win32', {
      'child_process': {
        execSync: (cmd) => {
          assert.equal(cmd, 'net statistics workstation', 'should call net statistics workstation command');
          return new Buffer('06.04.2017 23:22:11');
        }
      }
    });

    assert.equal(win32().toLocaleString(), '4/6/2017, 11:22:11 PM', 'should equal the date');
  });
  it('should parse the date in another format', () => {
    const win32 = proxyquire('./win32', {
      'child_process': {
        execSync: (cmd) => {
          assert.equal(cmd, 'net statistics workstation', 'should call net statistics workstation command');
          return new Buffer('06.04.2017 23.22.11');
        }
      }
    });

    assert.equal(win32().toLocaleString(), '4/6/2017, 11:22:11 PM', 'should equal the date');
  });
  it('revert to inoptimal result if format is not known and avoid crash', () => {
    const win32 = proxyquire('./win32', {
      'child_process': {
        execSync: (cmd) => {
          assert.equal(cmd, 'net statistics workstation', 'should call net statistics workstation command');
          return new Buffer('06.04.2017 23#22#11');
        }
      }
    });

    assert.equal(win32() instanceof Date, true, 'should be the date');
  });
});
