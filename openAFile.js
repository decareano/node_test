// const fs = require('fs');

// fs.unlink('pinga.txt', (err) => {
//   if (err) throw err;
//   console.log('successfully deleted /tmp/hello');
// });
//A
var fs = require("fs");

// fs.readFile('input.txt', function (err, data) {
// 	if (err) {
// 		return console.error(err);
// 	}
// 	console.log("a read: " + data.toString());
// });

//S
var data = fs.readFileSync('input.txt');
console.log("s read: " + data.toString());
console.log("end");


// console.log("going to open file");
// fs.open('input.txt', 'r+', function (err, fd) {
// 	if (err) {
// 		return console.error(err);
// 	}
// 	console.log("file opened");
// });

console.log("going to get file info")
fs.stat('input.txt', function (err, stats) {
	if (err) {
		return console.error(err);
	}
	console.log(stats);
	console.log("Got file info")

	console.log("isFile ? " + stats.isFile());
	console.log("isDirectory ? " + stats.isDirectory());
});


