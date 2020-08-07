const { info, Console } = require('console');

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const port = process.env.PORT || 3000

app.get('/',(req,res) => res.send('Hola Mundo'));

io.on('connection', (socket) => {
    console.log('un usuario conectado');
    socket.on('message', (msg) => {
        console.log(msg);
        socket.broadcast.emit('message-broadcast', msg);
    }); 
});

http.listen(port, () => {
    console.log('Escuchando el puerto *:' + port);
});