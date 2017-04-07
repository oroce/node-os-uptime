'use strict';

if (process.platform === 'darwin') {
  module.exports = require('./platform/darwin');
} else if (process.platform === 'linux') {
  module.exports = require('./platform/linux');
} else if (process.platform === 'win32') {
  module.exports = require('./platform/win32');
} else {
  throw new Error('Only linux, darwin and win32 are supported, you have: ' + process.platform);
}
