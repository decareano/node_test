
var num = 10;
var numbers = [0,1,2,5,10];
var cube = numbers.map(function(x) {
	return x * x * x;

});
console.log(cube);

function square(number) {
	return number * number;
}

//console.log(square(5));
square(5);




function myFunc(theObject) {
	theObject.make = 'Toyota';
}

var mycar = {make: 'honda', model: 'accord', year: 1998};
var x, y;

x = mycar.make;
console.log(x);


myFunc(mycar);

y = mycar.make;
console.log(y);


var result = multiplyTwoNumber(5,10)
console.log(result);







// var myFunc;

// if (num === 0) {
// 	myFunc = function(theObject) {
// 		theObject.make = 'Toyota';
// 	}
// 	return theObject;

// }

