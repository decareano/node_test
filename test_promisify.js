const errors = require('internal/errors');

function promisify(original) {
  if (typeof original !== 'function')
    throw new errors.TypeError('ERR_INVALID_ARG_TYPE', 'original', 'Function');

}
promisify();
