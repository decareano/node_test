var Game = {};


// Game.prototype.restart = function () {
// 	this.clearLocalStorage();
// 	var self = this;
// 	this.timer = setTimeout(function () {
// 	 self.clearBoard();
// 	 }, 0);



Game.prototype.restart = function () {
  this.clearLocalStorage();
  this.timer = setTimeout(this.reset.bind(this), 0);  // bind to 'this'
};

Game.prototype.reset = function(){
    this.clearBoard();    // ahhh, back in the context of the right 'this'!
};