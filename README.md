os-uptime
=====

Get operating system's uptime as a date.

It depends on `uptime -s` on linux and `sysctl -n kern.boottime` on darwin

# Install

```
npm install os-uptime
```

# Usage

```
const uptime = require('os-uptime');

console.log('System was started at: %s', uptime().toLocaleString()).
```

# LICENSE

MIT
