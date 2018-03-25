var bar = null;
console.log(typeof bar === "object");

console.log((bar !== null) && (typeof bar === 'object'));


(function() {
	var a = b = 3;

})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof a !== 'undefined'));