
var allUserData = [];
var generalNickName = "ike";

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

	if (typeof callback === "function") {
	callback ( generalNickName);
	//console.log(generalNickName);
	}
}

getInput(generalNickName, logStuff);


var clientData = {
	id: 094567,
	fullName: "Not Set",
	setUserName: function(firstName, lastName) {
		this.fullName = firstName + " " + lastName;
	}
}

function getUserInput(firstName, lastName, callback, callback1) {
	callback.apply(callback1, [firstName, lastName]);
}



getUserInput("mike", "limer", clientData.setUserName, clientData);
console.log(clientData.fullName);

// if (typeof callback1 === "function") {
// 	callback1 (firstName);
// 	console.log(callback1);
// }

function myResult(p1, callback) {
	console.log('I passed ' + p1);
	callback();
}

myResult(95, function() {
	console.log('got 1st division');
});






