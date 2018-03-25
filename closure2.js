function closureExample() {

    var i = 0;
    console.log("hi");

    for (i = 0; i < 3 ;i++) {    
        setTimeout(function() {
            console.log('counter value is ' + i);
        }, 1000);
    }
    console.log("bye");
}
// call the example function
closureExample();  

function closureExample1(counter) {
	setTimeout(function() {
		console.log('counter value is ' + counter);
	}, 2000);
}

function closureExample2() {
	var i = 0;
	for (i = 0; i < 3; i++) {
		closureExample1(i);
	}
}

closureExample2();


// function makeAdder(x) {
// 	return function(y) {
// 		return x + y;
// 	};
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2));
// console.log(add10(2));