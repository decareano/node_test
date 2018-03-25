function app() {
	function doSomething() {
	 var a = 1;
	 var b = 2;

	 console.log(sumFunction(a,b));

	}
	function sumFunction(a, b){
		console.trace("our first trace");
		return (a + b);
	}
	doSomething();
}

app();