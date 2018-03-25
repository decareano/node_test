let resultA, resultB, resultC;

function addSync (num1, num2, callback) {
	// use the famous jQuery getJSON callback API
// return $.getJSON({
// 		num1: num1,
//  		num2: num2
//  	}, callback);
    const cb = $.Callbacks();
    cb.add(callback);
    cb.fire(num1+num2);
};

addSync(1, 2, success => {
	// callback 1
	resultA = success; // you get result = 3 here
  
	addSync(resultA, 3, success => {
		// callback 2
		resultB = success; // you get result = 6 here

		addSync(resultB, 4, success => {
			// callback 3
			resultC = success; // you get result = 10 here
            
            console.log('total ' + resultC);
            console.log(resultA, resultB, resultC);
        });
	});
});




