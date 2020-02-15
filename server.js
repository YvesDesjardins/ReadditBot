require('dotenv').config();
const express = require('express');
const snoo = require('./src/snooStuff.js');
const PORT = process.env.PORT;
const WebSocket = require('ws');

const app = express()
  .use(express.static('public'))
  .listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
const wss = new WebSocket.Server({ server: app });

let postsBuffer = {};

wss.on('connection', (ws) => {
  if (wss.clients.size === 1 && !snoo.checkConnection()) {
    snoo.startConnection();
  }

  ws.send(JSON.stringify(postsBuffer));

  setInterval(async () => {
    if (wss.clients.size >= 1 && snoo.checkConnection()) {
      const temp = await snoo.getPosts();
      postsBuffer = { ...temp, ...postsBuffer};
      wss.broadcast(JSON.stringify(postsBuffer));
    }
  }, 5000);

  ws.on('close', () => {
    if (wss.clients.size <= 0 && snoo.checkConnection) {
      snoo.killConnection();
    }
  });
});

// broadcast helper to send to all connected clients
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};
