function foo() {
	function bar() {
	return 3;
	}
	
	function bar() {
	return 8;
	}
	return bar();
}

console.log(foo());