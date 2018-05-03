function solution(X, A) {
    var a = [1,3,1,4,2,3,5,4];
    var x = 5;
    var leaves = [];

    var i = 0;
    var result = -1;
    
    for(i=0; i<a.length; i++) {
        if(typeof leaves[a[i]] == 'undefined') {
            leaves[a[i]] = i;
        }
    }
    
    if(leaves.length <= x) {
        return -1;
    }
    
    for(i=1; i<=x; i++) {
        if(typeof leaves[i] == 'undefined') {
            
                        return -1;
        } else {
            result = Math.max(result, leaves[i]);
            console.log(result, leaves[i]);
        }
    }
    
    return result;
}

solution();