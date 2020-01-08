const app = require('express')()
const http = require('http').createServer(app)
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('message', message => {
    console.log(message);
    io.emit('message', message);
  })
});

http.listen(3000, () => console.log('the app is running on localhost:3000'))
