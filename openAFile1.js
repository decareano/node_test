var fs = require('fs');



fs.readFile('./models/serialize_one.js', 'utf8', (err, fd) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error('does not exist');
      return;
    } else {
      throw err;
    }
  } else {
    console.log(fd);
    //readMyData(data);
  }
});

// fs.readFile('./models/serialize_one.js', 'utf8', (err, data) => {
//   // TODO: Error Handling Still Needed!
//   console.log(data);
// });

var foo = ['a', 'ab', 'abc'];

var bar = foo.map(f => f.length);

console.log(bar); // 1,2,3

var a = [
  "We're up all night 'til the sun",
  "We're up all night to get some",
  "We're up all night for good fun",
  "We're up all night to get lucky"
];

// These two assignments are equivalent:

// Old-school:
var a2 = a.map(function(s){ return s.length });

// ECMAscript 6 using arrow functions
var a3 = a.map( s => s.length );
console.log(a2);
console.log(a3);

// both a2 and a3 will be equal to [31, 30, 31, 31]