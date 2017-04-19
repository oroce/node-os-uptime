'use strict';
const execSync = require('child_process').execSync;

module.exports = () => {
  let output = execSync('sysctl -n kern.boottime').toString(),
    date = output.replace(/{[ ,=\w]+} /g, '').trim();

  return new Date(date);
};