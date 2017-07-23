



function myResult(p1, test) {
	console.log("I passed.\n\nI scored: " + p1);
	//test();
	if (test && typeof(test) === "function") {
		test();
	}//
}

myResult('92', function() {
	console.log('yeah');
});

function mySandwich(param1, param2, file) {
	console.log('eating sandwich.\n\nIt has: ' + param1 + ', ' + param2);
	if (file && typeof(file) === "function") {
		file();
	}
}

mySandwich('ham', 'cheese', 'vegetables');









var fs = require('fs');
fs.open('./Rakefile', 'r', function (err, fd){
	if (err) {throw err}
	var readBuffer = new Buffer(1024),
		
		bufferOffset = 0,
		bufferLength = readBuffer.length,
		filePosition = 250;
	fs.read(fd,
			readBuffer,
			bufferOffset,
			bufferLength,
			filePosition,
			function (err, readBytes) {
				if (err) {throw err;}
				console.log('just read ' + readBytes + ' bytes');
				if (readBytes > 0) {
					console.log('hello ' + readBuffer.slice(0, readBytes));

				}
			});
});


fs.readFile('./Rakefile', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// var fs = require('fs');
// fs.open('./Rakefile', 'a', function opened(err, fd){
// 	if (err) {throw err}
// 	var writeBuffer = new Buffer("I am adding a line of text to my buffer"),
		
// 		bufferOffset = 0,
// 		bufferLength = writeBuffer.length, filePosition = null;
// 		filePosition = 10;
// 	fs.write(fd,
// 			writeBuffer,
// 			bufferOffset,
// 			bufferLength,
// 			filePosition,
// 			function wrote(err, writtenBytes) {
// 				if (err) {throw err;}
// 				console.log('wrote ' + writtenBytes + ' bytes');
				

				
// 			});
// });
