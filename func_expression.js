console.log(square(5));


function square (number) {
	return number * number;
}

var square = function(number) {return number * number; };
var x = square(4); 


console.log(x);





function map(f, a) {
	var result = [],
	i;
	for (i = 0; i != a.length; i++) 
	result[i] = f(a[i]);
	return result;
}

var numbers = [0,1,2,5,10];
var cube = numbers.map(function(x) {
	
	return x * x * x;
});
console.log(cube);
var num = 5;

var myFunc;
	if (num === 0) {
	myFunc = function(theObject) {
		theObject.make = 'toyota';
	}
	
}
var num1 = 20,
 num2 = 3,
name = "chamak";

function multiply() {
	return num1 * num2;
}

multiply();
console.log(multiply());

function getScore() {
	var num1 = 2,
		num2 = 5;


	function add() {
		return name  + 'scored'  + (num1 + num2);
	}
	return add();
}

getScore();
console.log(getScore());

function addSquares(a, b) {
	function square(x) {
		return x * x;
	}
	return square(a) + square(b);
}

test = addSquares(2,3);
test1 = addSquares(3,4);
test2 = addSquares(4,5);

console.log(test);

let object = {
	aNumber: 0,
	valueOf() {
		return this.aNumber;
	}
};

object.aNumber = '5';
console.log(object + 3);

function mmm() {
	let b = 3;
	if (true) {
		 let b = 4;
		console.log(b);
	}
	console.log(b);
}

mmm();

function letTest(ifBool) {
	let x = 1;
	if (ifBool) {
		let x = 4;
		console.log(x);
	}
	console.log(x);
}

letTest();

