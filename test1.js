// function setLocation(city) {
// 	var country = "france";


// function printLocation() {
// 	console.log("u r in " + city + ", " + country);
	
// }

// printLocation("malea");
// }

// setLocation("paris");

'use strict';                                                          // 1
const common = require('common');                                   // 2

// This test ensures that the http-parser can handle UTF-8 characters  // 4
// in the http header.                                                 // 5

const assert = require('assert');                                      // 7
const http = require('http');                                          // 8

const server = http.createServer(function(req, res)  {       // 10
  res.end('ok');                                                       // 11
});                                                                   // 12
server.listen(8000, () => {                                               // 13
  http.get({                                                           // 14
    port: server.address().port,                                       // 15
    headers: { 'Test': 'Düsseldorf' }                                  // 16
  }, function(res) {                                        // 17
    assert.strictEqual(res.statusCode, 200);                           // 18
    //server.close();                                                    // 19
  });                                                                 // 20
});                       

// 'use strict';
// require('common');
// const assert = require('assert');
// const http = require('http');

// let request = 0;
// let response = 0;
// process.on('exit', function() {
//   var pinga = assert.equal(request, 1, 'http server "request" callback was not called');
//   var pinga1 = assert.equal(response, 1, 'http request "response" callback was not called');
//   //console.log(pinga1);
  
  
// });

// const server = http.createServer(function(req, res) {
//   request++;
//   res.end();
// }).listen(0, function() {
//   const options = {
//     agent: null,
//     port: this.address().port
//   };
//   http.get(options, function(res) {
//     response++;
//     res.resume();
//     server.close();
//   });
// });