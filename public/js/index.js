var socket = io();

socket.on('connect', function (){
  console.log('connected to server');

  socket.emit('createMessage', {
    from: 'Luis',
    text: 'Hey, this is luis'
  });
});

socket.on('disconnect', function () {
  console.log('disconnected to server');
});

socket.on('newMessage', (message) => {
  console.log('newMessage', message);
});
