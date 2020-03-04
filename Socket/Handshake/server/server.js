const express = require('express');
const app = express();

const port = 8000;
const server = app.listen(port, () => console.log(`Server is up and listening on port ${port}`));

const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log(`// 1:`);
    console.log(`Established socket connection: ${socket.id}`);
    console.log(`Shakehand`);

    socket.on('welcome', data => {
        console.log(`// 2:`);
        console.log(`Received data from client: ${data}`);

        socket.broadcast.emit('// 3: Send data to all other clients', data);
    })
});
