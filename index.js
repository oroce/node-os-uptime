'use strict';
if (process.platform === 'darwin') {
  module.exports = require('./darwin');
} else if (process.platform === 'linux') {
  module.exports = require('./linux');
} else {
  throw new Error('Only linux and darwin is supported, you have: ' + process.platform);
}
