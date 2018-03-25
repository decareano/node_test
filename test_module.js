

module.exports = function () {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'world';
  var context = arguments[1];
  var callback = arguments[2];

  callback(null, 'hello ' + name);
};


module.exports();