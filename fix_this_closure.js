var user = {
	tournament: "the masters",
	data: [
		{name: "t. woods ", age: 37},
		{name: "p. mickelson ", age: 43}


	],
	clickHandler: function (event) {
		var that = this;
		this.data.forEach(function (person) {
		 	console.log("what is this referring to? " + that);
		 	console.log(person.name + "is playing at " + that.tournament);
		})
	}
}

user.clickHandler();

