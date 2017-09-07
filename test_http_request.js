// var http = require('http');
// var options = {
// 	host: "www.google.com",
// 	port: 80,
// 	path: "/index.html"
// };

// http.get(options, function(res) {
// 	console.log('got response:' + res.statusCode);
// });

'use strict';                                                          // 1
//const common = require('../common');                                   // 2

// This test ensures that the http-parser can handle UTF-8 characters  // 4
// in the http header.                                                 // 5

const assert = require('assert');                                      // 7
const http = require('http');                                          // 8

const server = http.createServer(function(req, res)  {       // 10
  res.end('ok');                                                       // 11
});                                                                   // 12
server.listen(0, () => {                                               // 13
  http.get({                                                           // 14
    port: server.address().port,                                       // 15
    headers: { 'Test': 'Düsseldorf' }                                  // 16
  }, function(res)  {                                        // 17
    assert.strictEqual(res.statusCode, 200);                           // 18
    server.close(); 
    console.log(res);                                                     // 19
  }); 
                                                                // 20
}); 
