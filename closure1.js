var assert = require('assert');

function celebrityID() {
	var celebrityID = 888;
	return {
		getID: function () {
			return celebrityID;
		},
		setID: function (theNewID) {
			celebrityID = theNewID;
		}
	}
}

var testName = celebrityID();

console.log(testName.getID());
testName.setID(111);
console.log(testName.getID());


function init() {
	var name = 'mozilla';
	function displayName() {
		console.log(name)
	}
	displayName();
}
init();

function stealthCheck() {
	console.log(true, 'ok');
	function stealth() {
		return true;
	}
}

stealthCheck();
//console.log(stealthCheck());

function yell(n){ 
  return n > 0 ? yell(n-1) + "a" : "hiy"; 
} 
console.log( yell(4) == "hiyaaaa", "Calling the function by itself comes naturally." );

