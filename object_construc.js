function myFriend (first, last, age, eye) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eye;
}

//var myFriend = new Person("John", "Doe", 50, "blue");

var pinga = myFriend("john", "Doe", 50, "blue");
console.log(pinga);