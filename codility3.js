function solution(X, A) {
    // write your code in JavaScript (Node.js 4.0.0)

    var X = 5;
    var A = [0,1,2,3,4,5,6,7];
    var leavesInPlace = Array(X);
    var numberOfLeavesInPlace = 0;
     
    var second = 0;   
    while (!enoughLeaves() && !outOfLeaves()) {
        var leafThisSecond = A[second];
        if (!leavesInPlace[leafThisSecond]) {
            leavesInPlace[leafThisSecond] = true;
            numberOfLeavesInPlace++;
        }
        
        second++;
    }
    return enoughLeaves() ? second-1 : -1;
    
    
    function enoughLeaves() {
        return numberOfLeavesInPlace >= X;
    }
    function outOfLeaves() {
        return second >= A.length;
    }



}

solution();