const fs = require("fs");

fs.readFile('package.json', function(err, data) {
	if (err) 
		try {
			var json = JSON.parse(data);
			render(json);

		}
		catch (e) {console.log ("missed it")};
	if (data)
		try {
			console.log(data.toString());
		}
		catch (e) {console.log("yay ...better understanding")};  //this catch is a meaningful error on exit
});