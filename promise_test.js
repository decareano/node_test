let resultA, resultB, resultC;


function addAsync(num1, num2) {
    // return new Promise("http://www.example.com?num1=${num1}&num2=${num2}")
    //     .then(x => x.json());
    
    return new Promise (function(success, failure) {
        if ((num1+num2) != '0') {
            success(num1+num2);
        }else{failure("try again my friend")}

    });
       
}

addAsync(1, 2)
    .then(success => {
        resultA = success;
        return resultA;
    })
    .then(success => addAsync(success, 3))
    .then(success => {
        resultB = success;
        return resultB;
    })
    .then(success => addAsync(success, 4))
    .then(success => {
        resultC = success;
        return resultC;
    })
    .then(success => {
        console.log('total: ' + success)
        console.log(resultA, resultB, resultC)
    });

addAsync(0, 0)
    .then(failure => {
        console.log(failure)
    });
