



function finder(records, cb) {
    setTimeout(function () {
        records.push(3, 4);
        cb(records);
    }, 1000);
}



function processor(records, cb) {
    setTimeout(function () {
        records.push(5, 6);
        cb(records);
    }, 1000);
}


finder([1, 2], function (records) {
    processor(records, function(records) {
      console.log(records);
    });
});


function mySandwich(param1, param2, callback) {
    console.log('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);
    callback();
}

mySandwich('ham', 'cheese', function() {
    console.log('Finished eating my sandwich.');
});


function foo() {
	function bar() {
		return 3;
	}
	return bar();
	// function bar() {
	// 	return 8;
	// }
}
console.log(foo());



  



