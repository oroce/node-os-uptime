'use strict';

if (process.platform === 'darwin') {
  module.exports = require('./lib/darwin');
} else if (process.platform === 'linux') {
  module.exports = require('./lib/linux');
} else if (process.platform === 'win32') {
  module.exports = require('./lib/win32');
} else {
  throw new Error('Only linux, darwin and win32 are supported, you have: ' + process.platform);
}
