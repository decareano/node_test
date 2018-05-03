function solution(x, a) {
var x = 2;
var a = [1,3,1,4,2,3,5,4];
var leaves = [];
var i = 0;
var result = -1;

	for (i=0; i < a.length; i++) {
		if (!leaves[a[i]]) {	//does the value of the current index in
			//A exist in leaves
			leaves[a[i]] = i; //If it does not exists, add the current index
			//value as the new index to leaves
			// so leaves =[1,2,3,4]
			console.log(leaves[a[i]]=i);
			// this is like reversing the array index and values so we 
			// the sequence of how the leaves fall into the river as an index
			// and then we can make calculations based on that.
		}
		
console.log("a, leaves, length: " + a , leaves.length);
	}
	
	if (leaves.length <= x) {

		return -1
	}

	for(i=1; i<=x; i++) {
		//console.log(leaves[i]);
        
		if(!leaves[i]) {
			return -1;
		}else {
			result = Math.max(result, leaves[i]);
			//console.log(leaves[i]);
		
		}
	return result;
	
	};

};



solution();




