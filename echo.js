//echo.js

const {promisify} = require('util');

const fs = require('fs');
const readFileAsync = promisify(fs.readFile); // (A)

const filePath = process.argv[2];

readFileAsync(filePath, {encoding: 'utf8'})
  .then((text) => {
      console.log('CONTENT:', text);
  })
  .catch((err) => {
      console.log('ERROR:', err);
  });



// const util = require('util');
// const fs = require('fs');

// const stat = util.promisify(fs.stat);
// stat('.').then((stats) => {
//  console.log("success");
// }).catch((error) => {
//   console.log("sorry");
// });


// const util = require('util');

// function doSomething(foo, callback) {
//   // ...
// }

// doSomething[util.promisify.custom] = function(foo) {
//   return getPromiseSomehow();
// };

// const promisified = util.promisify(doSomething);
// console.log(promisified === doSomething[util.promisify.custom]);
// prints 'true'

// const util = require('util');

// async function test() {
//   return await Promise.resolve('null');
// }
// const callbackFunction = util.callbackify(test);


// callbackFunction((err, ret) => {
//   if (err) throw err;
//   console.log(ret);
// });