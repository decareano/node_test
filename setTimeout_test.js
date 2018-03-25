var highValue = 200;
var constantVal = 2;
var myObj = {
	highValue: 20,
	constantVal: 5,
	calculateIt: function() {
		//var that = this;

		setTimeout(function() {
			
			console.log(this.constantVal * this.highValue);
		}, 3000);

	}

}

myObj.calculateIt();
