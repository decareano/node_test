function myResult(p1, pinga) {
	console.log("I passed.\n\nI scored: " + p1);
	//pinga();
	if (pinga && typeof(pinga) === "function") {
		pinga();
	}//
}

myResult('92', function() {
	console.log('yeah');
});


var fs = require('fs');
fs.stat('/etc/passwd', function(err, stats){
	if (err) {throw err;}
	console.log(stats);
});

var fs = require('fs');
fs.open('./Rakefile', 'r', function opened(err, fd){
	if (err) {throw err}
	var readBuffer = new Buffer(50),
		
		bufferOffset = 0,
		bufferLength = readBuffer.length,

		filePosition = 10;
	fs.read(fd,
			readBuffer,
			bufferOffset,
			bufferLength,
			filePosition,
			function read(err, readBytes) {
				if (err) {throw err;}
				console.log('just read ' + readBytes + ' bytes');
				if (readBytes > 0) {
					console.log(readBuffer.slice(0, readBytes));

				}
			});
});

var buf = new Buffer(52);
//console.log(buf.length);
	for(var i = 0; i < buf.length; i++) {
		buf[i] = i;

	}
console.log(buf);