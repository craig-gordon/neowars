const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const query = require('../db/queries.js');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(compression());

app.use(express.static(path.join(__dirname + '/../')));

app.get('/maps', (req, res) => {
  query.getAllMaps()
    .then(maps => {
      console.log('maps:', maps);
      res.send(maps);
    })
    .catch(err => {
      res.send(err);
    });
});

app.post('/board', (req, res) => {
  query.getBoard(req.body.mapId)
    .then(board => {
      res.send(board);
    })
    .catch(err => {
      res.send(err);
    });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../index.html'));
})

module.exports = app;