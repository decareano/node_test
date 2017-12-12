function myAsyncFunction(url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open ("Get", url);
		xhr.onload = () => resolve(xhr.responseText);
		xhr.onerror = () => reject(xhr.statusText);
		xhr.send();
	});
}














// const myFirstPromise = new Promise((resolve, reject)) => {
// 	setTimeout(function(){
// 		resolve("success");
// 	}, 2000);
// });

// myFirstPromise.then((successMessage) => {
// 	console.log("yay"  + successMessage);
// 	});

// myFirstPromise();
