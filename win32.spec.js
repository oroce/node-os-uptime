'use strict';
const proxyquire = require('proxyquire');
const assert = require('assert');
describe('win32', () => {
  it('should parse the date', () => {
    const win32 = proxyquire('./win32', {
      'child_process': {
        execSync: (cmd) => {
          assert.equal(cmd, 'net statistics workstation', 'should call net statistics workstation command');
          return new Buffer('{ sec = 1467288928, usec = 0 } Thu Jun 30 14:15:28 2016');
        }
      }
    });
    assert.equal(win32().toLocaleString(), '6/30/2016, 2:15:28 PM', 'should equal the date');
  });
});
