function PrintStuff (myDocuments) {
  this.documents = myDocuments;
  //console.log(myDocuments);
}

PrintStuff.prototype.print = function () {
  console.log("I want to say: " + this.documents);
}

var newObj = new PrintStuff("I am a node developer");
newObj.print();








