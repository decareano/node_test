function myFunc(theObject) {
	theObject.make = 'toyota';

}

var mycar = { make: 'honda', model: 'accord', year: 1998};
var x, y, t;

x = mycar.make; //should be honda
console.log(x);

myFunc(mycar);

y = mycar.make; //should be toyota cuz the make property was changed by 
				//the function
console.log(y);

var theObject1 = { make: 'nissan'};
t = theObject1.make;
myFunc(theObject1);


console.log(t);


var person = {firstName: "john", lastName: "smith", age: 50, eyeColor:"blue"}
var x = person;

console.log(person.firstName + " is " + person.age + " years old");