//Also time complexity O(n)

//Here we have a variation of the for_loop with less code. Filter
//traverses array from left to right invoking a callback function
//on each element. New array is returned. Cleaner code.

var models = [10, 12, 4, 2, 5, 16, 17, 18, 201, 2, 10, 17];


var uniqueProducts = models.filter(function(elem, i, array) {
        var test = [];
        return models.indexOf(elem) === i;
    }
);

console.log(uniqueProducts);
console.log(models);




