const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../db/db-mysql.js');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.get('/maps', (req, res) => {
  db.getAllMaps()
    .then(maps => res.send(maps));
});

module.exports = app;