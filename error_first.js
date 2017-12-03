var fs = require('fs');

fs.readFile('input.txt', function(err, data) {
	if(err) {
	console.log("what error are you talking about");
	return
	}
	
	console.log(data.toString());
});