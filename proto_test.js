var alien = {
	kind: 'alien'
}
console.log(alien.prototype);


var person = {
	kind: 'person'
}

var zach = {};

zach.__proto__ = alien;
console.log(zach.kind);

zach.__proto__ = person;

console.log(zach.kind);
console.log(person.isPrototypeOf(zach))