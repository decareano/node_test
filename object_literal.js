// function createPerson(firstName, lastName) {
// 	return {
// 		  firstName,
// 		  lastName,
// 			getFullName: function() {
// 				console.log (this.firstName + " " + this.lastName);

// 			},
// 			greet: function(person) {
// 				console.log("hello " + person.getFullName() + ". I m " + this.getFullName());
// 			}
// 	};
// }

// var johnDoe = createPerson("john", "doe");
// var janeDoe = createPerson("jane", "doe");

// johnDoe.greet(janeDoe);

// var server = require('net').createServer();
// var port = 4001;

// server.on('listening', function() {
// 	console.log('server is listening on port ', port);
// });

// server.on('connection', function(socket) {
// 	console.log('server has a new connection');
// 	socket.end();
// 	server.close();
// });

// server.on('close', function() {
// 	console.log('server is now closed');
// });

// server.on('error', function(err) {
// 	console.log('error ocurred', err.message);
// });

// server.listen(port);

var server = require('net').createServer(function(socket) {
	console.log('new connection');

	socket.setEncoding('utf8');
	socket.write("Hello you can start typing. type 'quit' to exit.\n");
	socket.on('data', function(data) {
		console.log('got:', data.toString())
		if (data.trim().toLowerCase() === 'quit') {
			socket.write('bye bye');
			return socket.end();
		}
		socket.write(data);
	});

	socket.on('end', function() {
		console.log('client connection ended');
	});
}).listen(4001);

