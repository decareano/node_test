var std_obj = {
  options : { rows: 0, cols: 0 },
  activeEffect : "fadeOut",
  displayMe : function() {       //outer function

    // the 'this' pointer is referring to the std_obj
    if (this.activeEffect=="fadeOut") { 

        console.log(this);
    }

    var doSomeEffects = function() {   //inner function

      // the 'this' pointer is referring to the window obj, why?
      if (this.activeEffect=="fade") { 
        console.log("no can do");
      }

    }

    doSomeEffects();   
  }
};

std_obj.displayMe();
std_obj.doSomeEffects();
