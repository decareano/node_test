const fs = require('fs');
const isJSON = require('is-json');
var good_json = `{
	"Version":2,
	"TaxiStation":6072,
	"TaxiLicense":"EM9543",
	"System_ID":910 }`;

var bad_json =  `{
	"Version":2,
	"TaxiStation":6072,
	"TaxiLicense":"EM9543",
	"System_ID":910 }`;


console.log(isJSON(good_json));
console.log(isJSON(bad_json));

function readJSONSync(filename) {
	return JSON.parse(fs.readFileSync(filename, 'utf8'));
}


readJSONSync('input.txt');
console.log(readJSONSync('input.txt'));
console.log(typeof readJSONSync('input.txt') === 'object');