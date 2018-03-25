



function myCounter() {
	
    this.i = 0;

    this.init();
}

myCounter.prototype.init = function() {
	var _that = this;
    //setInterval(_that.countUp,500); // fails
    setInterval(function() { _that.countUp(); }, 500); // also fails, this is in a different scope
};

myCounter.prototype.countUp = function() {
    this.i++;
    document.getElementById('counter').innerHTML = this.i;
    console.log(counter);
};

var counter = new myCounter();
console.log(counter);

