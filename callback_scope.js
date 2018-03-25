var array = ['apple', 'orange', 'pear']; // An array with some objects 
for( var i = 0; i < array.length; ++i ) 
{ 
  $.doSthWithCallbacks( function() { 
    array[i].something = 42; }); 
}
