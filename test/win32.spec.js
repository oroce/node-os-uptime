'use strict';
const proxyquire = require('proxyquire');
const assert = require('assert');

describe('win32', () => {
  it('should parse the date', () => {
    let win32 = proxyquire('../lib/win32', {
      'child_process': {
        execSync: (cmd) => {
          assert.equal(cmd, 'net statistics workstation', 'should call net statistics workstation command');
          return new Buffer('06.04.2017 23:22:11');
        }
      }
    });

    assert.equal(win32().toLocaleString(), '6/4/2017, 11:22:11 PM', 'should equal the date');
  });
});
