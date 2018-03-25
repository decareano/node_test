firstName = "peter",
console.log (typeof firstName === "number");
lastName = "Ally";

function showFullName () {
	console.log(this.firstName + " " + this.lastName);
}

showFullName ();

var person = {
	firstName: "Penelope",
	lastName: "Barrymore",
	showFullName: function () {
		console.log(this.firstName + " " + this.lastName);
	}
}

person.showFullName();

var anotherPerson = {
	firstName: "Marcelo",
	lastName: "Gobelli"
};

person.showFullName.apply(anotherPerson);