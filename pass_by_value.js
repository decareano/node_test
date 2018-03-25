var x = 10;
var y = 'abc';
var z = null;

var a = x;    //we copied 10 to a
var b = y;		//we copied 'abc' to b

console.log(x, y, a, b);   //these are separate....only values are copied....changing one
//does not change the other

a = 5;
b = 'def';

x = 15;
y = 'ghi';

var a = x;
var b = x + y;

console.log(x, y, a, b);

//PASS BY REFERENCE.....variables dont have a value. reference is an address in memory

var reference = [1];
console.log(typeof reference);
var refCopy = reference;

reference.push(3);
console.log(reference, refCopy);


var hundred = 100;
var two =2;

function multiply(x, y) {
	//
	return x * y
}

var twoHundred = multiply(hundred, two);
console.log(twoHundred);

