function solution(A) {
    var A = [2,3,1,5];// write your code in JavaScript (Node.js 4.0.0)
    A.sort(function(a, b) {
        return a - b;
    });
    
    var next = 1;
    var i=0;  //zero means the first value of i which equals 1
    while(next === A[i]) {
        //console.log(next);
        console.log(A[i]);
        next++;
        i++;

        if (next !== A[i]) {
            console.log("this is your number: " + next);
        }

    }
    
    return next;


}

solution();

// const solution = A => {
//     const array = A.sort((a,b) => a-b);
//     let value = array.length+1;
//     for (i = 0; i < array.length; i++) { 
//         if(array[i] !== i+1){
//             value = i+1;
//             break;
//         }
//     }
//     return value;
// }

// solution();