var user = {
	data: [
		{name: "mike mike", age:37},
		console.log(name),
		{name: "dave dave", age:40}
		],
		clickHandler:function(event){
			var randomNum = ((Math.random() * 2 | 0) + 1) - 1;
			$("input").val(this.data[randomNum].name + "" + this.data[randomNum].age);
		}
}

$("button").click(user.clickHandler.bind(user));

