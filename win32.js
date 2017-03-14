'use strict';
const execSync = require('child_process').execSync;
module.exports = () => {
  const output = execSync('net statistics workstation').toString();
  const date = output.replace(/{[ ,=\w]+} /g, '').trim();
  return new Date(date);
};
