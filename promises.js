const fs = require('fs');
//const isJSON = require('is-json');
// var good_json = `{
// 	"Version":2,
// 	"TaxiStation":6072,
// 	"TaxiLicense":"EM9543",
// 	"System_ID":910 }`;

// var bad_json =  `{
// 	"Version":2,
// 	"TaxiStation":6072,
// 	"TaxiLicense":"EM9543",
// 	"System_ID":910 }`;


// console.log(isJSON(good_json));
// console.log(isJSON(bad_json));

function readJSONSync(test) {
	return JSON.parse(fs.readFileSync(test, 'utf8'));
}


readJSONSync('input.txt');
console.log(readJSONSync('input.txt'));
console.log(typeof readJSONSync('input.txt') === 'object');


// function readJSON(filename, callback){
//   fs.readFile(filename, 'utf8', function (err, res){
//     if (err) return callback(err);
//     callback(null, JSON.parse(res));
//   });
// }

// readJSON('input.txt');

var isJSON = require('is-json');

  var good_json = '{"a":"obja","b":[0,1,2],"c":{"d":"some object"}}';
  var bad_json = '{"a":"obja""b":[0,1,2],"c":{"d":"some object"}}';
  var str_number = '121212';


  console.log(isJSON(good_json)); // true
  console.log(isJSON(bad_json)); // false
  console.log(isJSON(str_number)); // false



  // check is an object

  var object = {a: 12, b: [1,2,3]};

  console.log(isJSON(object, true)); // true

// can use isJSON.strict (uses try/catch) if wants something more robust

console.log(isJSON.strict('{\n "config": 123,\n "test": "abcde" \n}')); // true