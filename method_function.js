// var foo = function () {
// 	console.log(this);
// }

// foo();

var foo1 = {};
foo1.someMethod = function() {
	console.log(this);
}


foo1();