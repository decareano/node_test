//This array will have a time complexity of O(n) or a linear algorithm. 
//It has to go through all the iterations to find value we are looking for. 

var models = [9,9,111,2,3,4,4,5,7];
var sort_arr = models.sort();


for(var i = 0; i < sort_arr.length; i++) {
    if(sort_arr.indexOf(sort_arr[i]) === i) {
    	//if value is first instance
        //in array, it will match index. checking for dups

    	// index 0 value 111
    	// index 1 value 2 
    	// index 2 value 3
    	// index 3 value 4
    	// index 4 value 4 repeated  //no go on new array
    	// index 5 value 5
    	// index 6 value 7
    	// index 7 value 9
    	// index 8 value 9 repeated //no go on new array
      
        models.push(sort_arr[i]);
        console.log("The new array has this unique values: " + sort_arr[i]);
        // push 111
        // push 2
        // push 3
        // push 4
        // push 5
        // push 7 
        // push 9
	}
}

//console.log(models);