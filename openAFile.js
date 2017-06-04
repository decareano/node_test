const fs = require('fs');

fs.unlink('pinga.txt', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});