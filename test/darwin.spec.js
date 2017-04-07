'use strict';
const proxyquire = require('proxyquire');
const assert = require('assert');

describe('darwin', () => {
  it('should parse the date', () => {
    let darwin = proxyquire('../lib/darwin', {
      'child_process': {
        execSync: (cmd) => {
          assert.equal(cmd, 'sysctl -n kern.boottime', 'should call sysctl command');
          return new Buffer('{ sec = 1467288928, usec = 0 } Thu Jun 30 14:15:28 2016');
        }
      }
    });

    assert.equal(darwin().toLocaleString(), '6/30/2016, 2:15:28 PM', 'should equal the date');
  });
});
