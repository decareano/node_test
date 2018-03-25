function getInput (options, callback) {
	allUserData.push (options);

	if (typeof callback === "function") {
	callback(options);
	console.log(callback);
	}
}