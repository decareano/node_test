var myObject = {
      egg: "plant",
      func: function() {
            var that = this;   //local variable remains in scope
            console.log("outer func: this.egg = " + this.egg);
            console.log("outer func: that.egg = " + that.egg);
           (function() {
            console.log("inner func: this.egg = " + this.egg);//no scope here
            console.log("inner func: that.egg = " + that.egg);
            }());
       }
};
myObject.func();

function myFirstObject(){
    var _this = this;
    this.name = "myFirstObject";
    this.getName = function(){
       console.log("_this.name = " + _this.name + " this.name = " + this.name);  
    }
}

function mySecondObject(){
    var _this = this;
    this.name = "mySecondObject";
    var firstObject = new myFirstObject();
    this.getName = firstObject.getName
}

var secondObject = new mySecondObject();
secondObject.getName();