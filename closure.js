function celebrityName (firstName) {
	var nameIntro = " This celebrity is ";
		function lastName (theLastName) {
			return nameIntro + firstName + " " + theLastName;
		}
		return lastName;
}

var testName = celebrityName("Michael")
console.log(testName("Jackson"));

