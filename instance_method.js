var MyObject = function () {}

MyObject.prototype.whoamI = function() {
	console.log(this === process ? "window" : "MyObj");
};



var newObj = new MyObject();

var whoamI = newObj.whoamI;
//console.log(whoamI);

newObj.whoamI();
whoamI();