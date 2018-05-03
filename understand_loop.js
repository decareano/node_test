var array = [3, 6, 2, 56, 32, 5, 89, 32];
console.log(array.length);
var i = 0;
var largest = 0;
// Write your code below!
for ( i = 0; i < array.length; i++){
  //yes: 8 < 8; true continue on
  
  if (array[i] > largest) {
    //32 > 89 no
    largest = array[i];
    //largest after fourth run is equal to 89
    //
}
}
console.log(largest);

//remember that array[i] refers to the actual value of the array....!!!!