const util = require('util');

const waitAsync = util.promisify(wait);

waitAsync(1000)
  .then(data => console.log(data))
  .catch(err => console.error(`[Error]: ${err}`));