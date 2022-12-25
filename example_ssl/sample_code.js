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
### Sample 1:
