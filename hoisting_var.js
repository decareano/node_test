//console.log(noSuchVariable);
var declaredLater;
console.log(declaredLater);

declaredLater = "now define";

console.log(declaredLater);


var name = "Baggins";

(function () {
    // Outputs: "Original name was undefined"
    console.trace("Original name was " + name);

    var name = "Underhill";

    // Outputs: "New name is Underhill"
    console.trace("New name is " + name);
})();

function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();

