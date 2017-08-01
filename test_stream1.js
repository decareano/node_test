var fs = require('fs');
var request = require('request');
var stream = request('http://imgur.com/qA5xGKU.jpg');
var writeStream = fs.createWriteStream('test_inno.jpg')

require('http').createServer(function(stream){



stream.on('data', function(data) {
  writeStream.write(data);
  console.log(data);
});
stream.on('end', function() {
  writeStream.end();
});
stream.on('error', function(err) {
  console.log('something is wrong :( ');
  writeStream.close();
});

}).listen(4000);