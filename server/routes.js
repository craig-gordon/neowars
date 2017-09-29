const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../db/db-mysql.js');
const app = express();

app.use(bodyParser.json());
app.use(cors());

console.log(__dirname);

app.use(express.static(path.join(__dirname + '/../public')));

app.get('/maps', (req, res) => {
  db.getAllMaps()
    .then(maps => {
      console.log('maps:', maps);
      res.send(maps);
    })
    .catch(err => res.send(err));
});

app.post('/board', (req, res) => {
  db.getBoard(req.body.map)
    .then(board => {
      res.send(board);
    })
    .catch(err => res.send(err));
});

module.exports = app;