BaseObject = function(name) {
	if(typeof name !== "undefined") {
		this.name = name;
	}else {
		this.name = "default"
	}
};

var pinga = new BaseObject();
//console.log(pinga);
var pinga1 = new BaseObject("marcelo");

console.log(pinga.name);
console.log(pinga1.name);

delete pinga1.name;   //undefined below
console.log(pinga1.name);

BaseObject.prototype.name = "default";  //magic happens here
console.log(BaseObject.prototype);
// var pinga1 = new BaseObject("marcelo");
// console.log(pinga1.name);

delete pinga1.name;
console.log(pinga1.name);

