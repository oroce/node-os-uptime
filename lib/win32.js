'use strict';
const execSync = require('child_process').execSync;

module.exports = () => {
  let output = execSync('net statistics workstation').toString();
  let date = output.match(/((\d{2}\.){2}\d{4}){1} ((\d{2}:){2}\d{2}){1}/gm);

  return new Date(date[0]);
};
