const express = require('express');

const { sayHello } = require('./lib/strings');

const port = 3000;

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

module.exports = app;
