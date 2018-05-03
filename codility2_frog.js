// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
var v = 5;
var A = [[0]=1;[1]=3;];

function solution(X, A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var steps = [];
    var i = 0;
    
    for(i=0; i<X; i++) {
        steps.push(i+1);
    }
    
    while(steps.length > 0 && i<A.length) {
        var pos = steps.indexOf(A[i]);
        if(pos >= 0) {
            steps.splice(pos, 1);
        }
        i++;
    }
    
    if(steps.length === 0) {
        return i-1;
    } else {
        return -1;
    }

}

console.log(solution());