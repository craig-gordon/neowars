const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
// const query = require('../db/queries.js');
const app = express();

const maps = require('../db/maps.js');

app.use(bodyParser.json());
app.use(cors());
app.use(compression());

app.use(express.static(path.join(__dirname + '/../client/')));

app.get('/maps', (req, res) => {
  res.send(maps);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/index.html'));
})

module.exports = app;