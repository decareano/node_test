

let myFirstPromise = new Promise((resolve, reject) => {
	setTimeout(function(){
	 resolve("you hire me. !!!");
	}, 250);
});

myFirstPromise.then((successMessage) => {
	console.log("yay " + successMessage)
});