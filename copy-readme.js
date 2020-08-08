const fs = require('fs');

fs.copyFile('./README.md', './my-node-module/README.md', (err) => {
  if (err) {
    throw err;
  }
  console.log('README copied to theme ok!');
});
