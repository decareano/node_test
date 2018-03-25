var allUserData = [];
//var generalNickName = "ike";

function logStuff (userData) {
	if (typeof userData === "string")
	{
		console.log(userData);
	}
	else if ( typeof userData === "object")
	{
		for (var item in userData) {
			console.log(item + ": " + userData[item]);
		}
	}
}

function getInput(options) {
	return new Promise (function(resolve, reject) {
		if (options != undefined) {
			resolve(options);
		}else{reject("try again")}
			

	})

}

getInput({soccerTeam: "boca"})
	.then(logStuff)
	.catch(function(err) {
		console.log(err);
	});

getInput()
	.then(logStuff)
	.catch(function(err) {
		console.log(err);
	});


// function getInput (options, callback) {
// 	//allUserData.push (options);
// 	//if (typeof callback === "function") {
// 	callback(options);
// 	//console.log(callback);
// 	//}
// }
//getInput({soccerTeam: "boca"}, logStuff);


// getInput(123456, logStuff, function (err){
// 	if (err) {
// 		console.log("sorry try again");
// 	};
// });


//{name:"marcelo", specialty:"javascript", age:28}