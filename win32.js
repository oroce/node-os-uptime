'use strict';
const execSync = require('child_process').execSync;
module.exports = () => {
  const output = execSync('net statistics workstation').toString();
  const date = output.split('\r')[3].replace('\nStatistics since ').trim();
  return new Date(date);
};
