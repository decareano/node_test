
var allUserData = [];

function logStuff (userData) {
	if (typeof userData === "string")
	{
		console.log(userData);
	}
	else if ( typeof userData === "object")
	{
		for (var item in userData) {
			console.log(item + ": " + userData[item]);
		}
	}
}

function getInput (options, callback) {
	allUserData.push (options);
	callback (options);

}

getInput(("rich", "pinga"), logStuff);

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









// var fs = require('fs');
// fs.open('./Rakefile', 'r', function (err, fd){
// 	if (err) {throw err}
// <<<<<<< HEAD
// 	var readBuffer = new Buffer(50),
		
// 		bufferOffset = 0,
// 		bufferLength = readBuffer.length,

// 		filePosition = 10;
// =======
// 	var readBuffer = new Buffer(1024),
		
// 		bufferOffset = 0,
// 		bufferLength = readBuffer.length,
// 		filePosition = 250;
// >>>>>>> d62550c4d481dcdda380d4c17b7eef42a77d5363
// 	fs.read(fd,
// 			readBuffer,
// 			bufferOffset,
// 			bufferLength,
// 			filePosition,
// 			function (err, readBytes) {
// 				if (err) {throw err;}
// 				console.log('just read ' + readBytes + ' bytes');
// 				if (readBytes > 0) {
// <<<<<<< HEAD
// 					console.log(readBuffer.slice(0, readBytes));
// =======
// 					console.log('hello ' + readBuffer.slice(0, readBytes));
// >>>>>>> d62550c4d481dcdda380d4c17b7eef42a77d5363

// 				}
// 			});
// });

// <<<<<<< HEAD
// var buf = new Buffer(52);
// //console.log(buf.length);
// 	for(var i = 0; i < buf.length; i++) {
// 		buf[i] = i;

// 	}
// console.log(buf);
// =======

// fs.readFile('./Rakefile', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // var fs = require('fs');
// // fs.open('./Rakefile', 'a', function opened(err, fd){
// // 	if (err) {throw err}
// // 	var writeBuffer = new Buffer("I am adding a line of text to my buffer"),
		
// // 		bufferOffset = 0,
// // 		bufferLength = writeBuffer.length, filePosition = null;
// // 		filePosition = 10;
// // 	fs.write(fd,
// // 			writeBuffer,
// // 			bufferOffset,
// // 			bufferLength,
// // 			filePosition,
// // 			function wrote(err, writtenBytes) {
// // 				if (err) {throw err;}
// // 				console.log('wrote ' + writtenBytes + ' bytes');
				

				
// // 			});
// // });
// >>>>>>> d62550c4d481dcdda380d4c17b7eef42a77d5363
