require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', function (req, res) {
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
