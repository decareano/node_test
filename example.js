// function myFunc(theObject) {
// 	theObject.make = 'Toyota';

// }

// var mycar = { make: 'honda', model: 'Accord', year: 1998};

// //var x , y;

// mycar.make;
// console.log(mycar.make);


// myFunc(mycar);

// console.log(mycar.make);



// function pinga (number) {
//   return number * number;
// };

// pinga(4);


// console.log(pinga);

function letTest() {
let x = 'test';
if (true) {
let x = 2; // different variable
console.log(x); // 2
}
console.log(x); // 1
}

letTest();


class MyString extends String {
  constructor (mahString) {
    super(mahString);
    this.myValue = mahString;
  }
}

myString = new MyString('Old Yeller');
myString.myValue;
console.log(myString.myValue);

if (0) {
	console.log('no way')
}

function counter() {
  	for (var count = 1; ; count++) {  // infinite loop
    	console.log(count + 'A'); // until 5
      if (count === 5) {          
        return;
      }
      console.log(count + 'B');  // until 4
    }
  console.log(count + 'C');  // never appears
}

counter();

function magic(x) {
	return function calc(x) {return x * 5; };
} 

var answer = magic();
answer(12); //works in browser console....but not here...
//anwconsole.log(answer);

function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function    
  }
  displayName();    
}
init();

let p = {}
p = new Proxy(p, {
      get (that, key) {
        if (Reflect.has(that, key)) {
          return that[key]
        }
        return function () {
          return key
        }
      }
    })

var highValue = 200;
var constantVal = 2;
var myObj = { 
	highValue: 20, 
	constantVal: 5, 
	calculateIt: function () { 
		setTimeout (function () { 
			console.log(this.constantVal * this.highValue);
		
    }, 2000);
    }
}
myObj.calculateIt();





