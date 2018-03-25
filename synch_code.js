// let result = sendMessage('thunter', 'hi');
// console.log(result);

// function sendMessage(userId, message) {
// 	let user = getUser(userId);
// 	let able = canSend(user);
// 	if (!able) return false
// 	return writeMessage(user, message)
// }



try {
  var result = sendMessage('tlhunter', 'hi')
} catch (err) {
  return console.log(result)
  
}
console.log(result)

function sendMessage(userId, message) {
  throw new Error('Bad Stuff')
}