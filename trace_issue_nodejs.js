function deprecate(test, test1, code) {
  // Allow for deprecating things in the process of starting up.
  // if (global.process === undefined) {
  //   return function(...args) {
  //      return deprecate(fn, msg).apply(this, args);
      
  //   };
  // }
  

  // if (process.noDeprecation === true) {
  //    return fn;
  // }

  if (code !== undefined && typeof code !== 'string') {
    //console.log(code);
    //throw new errors.TypeError('ERR_INVALID_ARG_TYPE', 'code', 'string');
    throw "error pinga pinga";
  }
  console.log(code);
    
}

deprecate("hi", 2, "ho");

//ho is not equal to undefined: true
//ho is not equal to string: false

