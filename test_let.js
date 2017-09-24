function testPromise() {
    return new Promise((resolve, reject) => {
        reject(10);
    });
}

function newNode() {
    console.log(1);

    called = async () => {
        try {
            console.log(await testPromise())
        } catch (err) {
            console.log('err' + err);
        }
    }
    console.log(2);
    called();
}


//const doSomething = function() {};


function successCallback(result) {
  //console.log("It succeeded with " + result);
}

function failureCallback(error) {
  //console.log("It failed with " + error);
}

var goodBoy = true;

const promise = new Promise((resolve, reject) =>  {
        
        if (goodBoy) {
            var phone = {
                brand: 'iphone10',
                color: 'gray'
            };
            resolve(phone);
        } else {
            var reason = new Error ('No iphone for you');
            reject(reason);
        }
        //resolve(successCallback);
        //reject(failureCallback);

});

promise.then(successCallback, failureCallback);

var testingPromise = function () {
    promise
    .then(function (resolve) {
        console.log(resolve);
    })
    .catch(function (reject) {
        console.log(reject.message);
    });

};

testingPromise();