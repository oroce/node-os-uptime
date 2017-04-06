'use strict';
const execSync = require('child_process').execSync;
module.exports = () => {
  const output = execSync('net statistics workstation').toString();
  const date = output.match(/\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}:\d{2}/gm);
  return new Date(date[0]);
};
