
// module.exports = {


// 	sayHelloEnglish: function() {
// 		return "hello";
// 	},

// 	sayHelloSpanish: function() {
// 		return "hola";
// 	}
 
// };
// different ways of writing the code
// greetings.js
//var exports = module.exports = {};

module.exports.sayHelloInEnglish = function() {
  return "HELLO";
};

module.exports.sayHelloInSpanish = function() {
  return "Hola";
};

/* 

this line of code re-assigns  

module.exports
*/
//module.exports = "Bonjour";

