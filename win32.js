'use strict';
const {uptime} = require('os');
const {execSync} = require('child_process');

module.exports = () => {
  const output = execSync('net statistics workstation').toString();
  const formats = [
    {
      regex: /((\d{2}\.){2}\d{4}){1} ((\d{2}:){2}\d{2}){1}/gm,
      parser: (match) => {
        const split = match[0].split(' ');
        const format = split[0].split('.');
        return `${format[1]}-${format[0]}-${format[2]} ${split[1]}`;
      }
    },
    {
      regex: /((\d{1,2}\.){2}\d{4}){1} ((\d{1,2}\.){2}(\d{1,2}))/gm,
      parser: (match) => {
        const split = match[0].split(' ');
        const format = split[0].split('.');
        const time = split[1].split('.').join(':');
        return `${format[1]}-${format[0]}-${format[2]} ${time}`;
      }
    },
    {
      regex: /.*/,
      parser: () => new Date(new Date() - uptime())
    }
  ];
  const format = formats.find((candidate) => output.match(candidate.regex));
  const formatedDate = format.parser(output.match(format.regex));
  return new Date(formatedDate);
};
