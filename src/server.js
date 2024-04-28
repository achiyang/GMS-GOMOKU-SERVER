const WebSocket = require('ws');

const server = new WebSocket.Server({
    port: process.env.PORT || 8000
});

server.on('connection', (ws) => {
    ws.on('message', (msg) => {
        let message = msg.toString();
        let response = { message: message, length: message.length };
        ws.send(JSON.stringify(response));
    });
});

console.log(`server listen PORT: ${ process.env.PORT || 8000 }`);
