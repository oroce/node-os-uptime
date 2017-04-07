'use strict';
const execSync = require('child_process').execSync;

module.exports = () => {
  let output = execSync('net statistics workstation').toString(),
    date = output.match(/((\d{2}\.){2}\d{4}){1} ((\d{2}:){2}\d{2}){1}/gm),
    split = date[0].split(' '),
    format = split[0].split('.'),
    formatedDate = `${format[1]}-${format[0]}-${format[2]} ${split[1]}`;

  return new Date(formatedDate);
};
