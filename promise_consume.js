// function successCallback(result) {
//   console.log("It succeeded with " + result);
// }

// function failureCallback(error) {
//   console.log("It failed with " + error);
// }

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

//promise.then(successCallback, failureCallback);
//consuming the promise(s)

var testingPromise = function () {
    console.log("before checking with mom");
    promise
    .then(showPhone)                    //async call here
    .then(function (resolve) {          //async call here
        console.log(resolve);
    })
    .catch(function (reject) {
        console.log(reject.message);
    });
    console.log("after checking with mom");
};

var showPhone = function (phone) {
    return new Promise(
        function (resolve, reject) {
            var message = "This is what my mom bought me, " +
            "a " + phone.color + ' ' + phone.brand + ' phone';
            resolve(message);
        }
    );
};


testingPromise();