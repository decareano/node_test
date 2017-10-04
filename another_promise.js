// function successCallback(result) {
//   //console.log("It succeeded with " + result);
// }

// function failureCallback(error) {
//   //console.log("It failed with " + error);
// }

// var goodBoy = true;

// const promise = new Promise((resolve, reject) =>  {

//         if (goodBoy) {
//             var phone = {
//                 brand: 'iphone10',
//                 color: 'gray'
//             };
//             resolve(phone);
//         } else {
//             var reason = new Error ('No iphone for you');
//             reject(reason);
//         }
//         //resolve(successCallback);
//         //reject(failureCallback);

// });

// promise.then(successCallback, failureCallback);

// var testingPromise = function () {
//     promise
//     .then(function (resolve) {
//         console.log(resolve);
//     })
//     .catch(function (reject) {
//         console.log(reject.message);
//     });

// };

// // function myFunction (test, test1) {
// // 	blablabla;
// // }

// // var myFunction = (test, test1) => test + test1 //in one line you dont need the curly braces
// // var myFunction = (test, test1) => {			//same way to write the function
// // 	test + test1
// // }
// //synchronous version:

// function readFile (filename) {
// 	var fs = require('fs');
// 	var fileContents = fs.readFileSync(filename).toString('utf8');
// 	console.log(fileContents);
// 	return fileContents;
// }

// function readJSON(filename){
//   return new Promise(function (fulfill, reject) {
//   	var string = readFile(filename);
//   	var obj = JSON.parse(string);
//     fulfill(obj);
      
//   });
// }


// readJSON('input.txt') 
// .then((res) => {
// 	console.log(res);
// 	res.newVariable = "hello world";//fulfill(JSON.parse(input.txt));
// 	console.log(res);
// })
// //.catch((err) => {})
// .catch(function(err) {
// 	console.log(err)
// })

//Asynchronous version:

function readFile (filename) {
	return new Promise(function (fulfill, reject) {
		var fs = require('fs');
		fs.readFile(filename, function (err, file) {
			if (err) return reject(err);
			console.log(file.toString('utf8'));
			fulfill(file.toString('utf8'))
		});
	})
	
	
}

function readJSON(string){
  return new Promise(function (fulfill, reject) {
  	string = "sometext";
  	console.log(string);
  	try {
  		var obj = JSON.parse(string);
  	}catch (err) {
  		reject (err);
  	}
  	fulfill(obj);
  });
}


readFile('input.txt') 
.then(readJSON)
.then((res) => {
	console.log(res);
	res.newVariable = "hello world";//fulfill(JSON.parse(input.txt));
	console.log(res);
})
//.catch((err) => {})
.catch(function(err) {
	console.log('caught error', err)
})

