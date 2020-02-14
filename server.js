require('dotenv').config();
const express = require('express');
const snoo = require('./src/snooStuff.js');
const PORT = 3000; //hard-coded for simplicity
const WebSocket = require('ws');

const app = express();
const wss = new WebSocket.Server({ server: app })

app.get('/', function (req, res) {
  res.send(snoo.latestComment());
});
app.get('/all', function (req, res) {
  res.send(snoo.allComments());
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

wss.on('connection', (ws) => {
  ws.send('hello world!');
  // ws.on('message', (data) => {
  // });

  // ws.on('close', () => {
  // });
});
