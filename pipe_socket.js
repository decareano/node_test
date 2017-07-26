var net = require('net');

// var server = net.createServer(function (socket) {
// 	socket.write('echo server\r\n');
// 	socket.pipe(socket);
// });


net.createServer(function (socket) {
  socket.write('Echo server\r\n');
  socket.on('data', function(chunk) {
    socket.write(chunk);
  });
  socket.on('end', socket.end);
});



