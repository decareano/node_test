var models = [9,9,111,2,3,4,4,5,7];
var test = [];

for(var i = 0; i < models.length; i++) {
	
    if(models.indexOf(models[i]) === i) {
  		test.push(models[i]);
        console.log("The new array value: " + models[i]);
    }
}	
console.log("Old array values: "  + models);





// var models = [10, 12, 4, 2, 5, 16, 17, 18, 201, 2, 10, 17];
// var test = [];

// var uniqueProducts = models.filter(function(elem, i, array) {
//         return test.indexOf(elem) === i;
//     }
// );

// console.log(uniqueProducts);