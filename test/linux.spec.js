'use strict';
const proxyquire = require('proxyquire');
const assert = require('assert');

describe('linux', () => {
  it('should parse the date', () => {
    let linux = proxyquire('../lib/linux', {
      'child_process': {
        execSync: (cmd) => {
          assert.equal(cmd, 'uptime -s', 'should call uptime command');
          return new Buffer('2016-07-12 19:12:50');
        }
      }
    });

    assert.equal(linux().toLocaleString(), '7/12/2016, 7:12:50 PM', 'should equal the date');
  });
});
