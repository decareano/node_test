var num1 = 20;
num2 = 3;
name = "susie";

function multiply() {
	return num1 * num2;
}

//var test = multiply();
console.log(num1 * num2);

function getScore() {
	var num1 = 2;
	num2 = 3;
	

	function add() {
		return name + ' scored ' + (num1 + num2);
	}

	return add();
}

var test = getScore();
console.log(getScore());

var a = "A";   //a variable....anything
(function(){				//self executing function
  var a = "B"                //a is being instantiaded and in scope 
  console.log(a) //B
})()

console.log(a); //this just prints a in the global scope. unrelated.


var z = "A";  //another variable
(function(){
  a = "B"	//a is not instantiated.setup in global scope. bad practice
  console.log(a) //B
})()

console.log(a) //B
console.log(z) //A

var a = 'world';
myfunction = function() {
	a = "mundo";
	console.log("hola, "  + a)
}

myfunction();
console.log(a);

function sum(xPromise, yPromise) {
	return Promise.all([xPromise, yPromise])
	.then(function(values){
		return values[0] + values[1];
	});
}

function fetchX() {
	return value = 4;
}

function fetchY() {
	return value = 5;;
}

sum(fetchX(), fetchY())
	.then(function(sum) {
		console.log(sum);
	},
	function(err) {
		console.log(err);
	}
);




