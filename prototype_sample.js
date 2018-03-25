function PrintStuff (myDocuments) {
 documents = myDocuments;
  //console.log(myDocuments);
}

PrintStuff.prototype.print = function () {
  console.log("I want to say: " + documents);
}

var newObj = new PrintStuff("I am a node developer");
newObj.print();








