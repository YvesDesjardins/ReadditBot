require('dotenv').config();
const express = require('express');
const snoo = require('./src/snooStuff.js');
const PORT = 3001; //hard-coded for simplicity
const WebSocket = require('ws');

const app = express()
  .use(express.static('public'))
  .listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
const wss = new WebSocket.Server({ server: app });

wss.on('connection', (ws) => {
  if (wss.clients.size === 1 && !snoo.checkConnection()) {
    snoo.startConnection();
  }

  setInterval(async () => {
    if (wss.clients.size >= 1 && snoo.checkConnection()) {
      const test = await snoo.allComments();
      wss.broadcast(JSON.stringify(test));
    }
  }, 2000);

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
