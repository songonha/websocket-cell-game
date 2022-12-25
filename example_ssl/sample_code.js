### Sample 1:
const WebSocket = require("ws").Server;
const HttpsServer = require('https').createServer;
const fs = require("fs");

server = HttpsServer({
  cert: fs.readFileSync(config.ssl_cert_path),
  key: fs.readFileSync(config.ssl_key_path)
})

socket = new WebSocket({
  server: server
});

socket.on(...);
server.listen(config.port);

============================================================================
### Sample 2:
// app.js
'use strict'
const https = require('https');
const fs = require('fs');
const ws = require('ws');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const index = fs.readFileSync('./index.html');

let server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end(index);
});
server.addListener('upgrade', (req, res, head) => console.log('UPGRADE:', req.url));
server.on('error', (err) => console.error(err));
server.listen(8000, () => console.log('Https running on port 8000'));

const wss = new ws.Server({server, path: '/echo'});
wss.on('connection', function connection(ws) {
    ws.send('Hello');   
    ws.on('message', (data) => ws.send('Receive: ' + data));
});

// index.html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
</head>
<body>
<script>
    var socket = new WebSocket('wss://127.0.0.1:8000/echo');
    socket.onopen = () => console.log('Connected') || setInterval(() => socket.send(new Date().toLocaleString()), 1000);    
    socket.onclose = (event) =>  console.log((event.wasClean) ? 'Disconnected' :  'Connection break: ' + (event.reason || event.code)); 
    socket.onmessage = (event) => console.log('DATA', event.data);
    socket.onerror = (err) => console.error(err.message);
</script>
Press F12 to open console...
</body>
</html>
