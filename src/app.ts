

import { WebSocketServer } from 'ws';

//wss websocket server
const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {
    console.log('client connected');

    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log('desde el cliente', data);
    });

    ws.send('hola desde el servidor');

    ws.on('close', () => {
        console.log('client disconnected');
    });
});

console.log('server running on port http://localhost:3000');