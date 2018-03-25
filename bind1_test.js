var user = {
	data: [
	{name: "t woods", age: 37},
	{name: "p mickelson", age: 43}
	],
	clickHandler: function(test) {
		var randomNum = ((Math.random () * 2 | 0) + 1) -1;
		$("input").val(this.data[randomNum].name + "" + 
		this.data[randomNum].age);
	}
}

$("button").click(user.clickHandler);