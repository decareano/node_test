// var stream = require("stream");
// var echoStream = new stream.Readable('./input.txt');
// console.log(echoStream);
// //var readable = 'my name is marcelo';
// require('http').createServer(function (req, res) {
// 	req.on('data' , function (data) {
// 		//echoStream._read(data);
// 		//console.log("got it: ", data);
// 		res.end();
// 	});

// }).listen(4000);

// echoStream._read =  function(data) {
// 	console.log('got this data:', data)
// };
//.listen(8000);

// const readable = getReadableStreamSomehow();
// readable.on('data', (chunk) => {
//   console.log(`Received ${chunk.length} bytes of data.`);
// });

// var readable = ...

// readable stream2.setEncoding('utf8');

// readable stream2.on('data', function(data) {
// 	console.log('got this data:', data)
// });

// var fs = require('fs');
// var wstream = fs.createWriteStream('myOutput.txt');
// wstream.write('Hello world!\n');
// wstream.write('Another line\n');
// wstream.end();

// var fs = require('fs');
// fs.readFile('./test_videoSFMARA.mp4', function(err, err){
//   if (err) {
//     return console.log(err);
//   }
//   console.log('test file is loaded:\n', data);
// });

var fs = require('fs');
var stream = fs.createReadStream('./test.mp4');
stream.on('data', function(data) {
  console.log('loaded part of the file');
});
stream.on('end', function() {
  console.log('all parts is loaded');
});
stream.on('error', function(err) {
  console.log('something is wrong :( ');
});