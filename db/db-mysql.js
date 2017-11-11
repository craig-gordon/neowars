const mysql = require('mysql2/promise');
const config = require('./config.js');

const getAllMaps = () => {
  return mysql.createConnection(config)
    .then(connection => {
      return connection.query(`SELECT * FROM maps`);
    })
    .then(data => {
      return data[0]
    })
  connection.end();
}

const getBoard = (map) => {
  return mysql.createConnection(config)
    .then(connection => {
      return connection.query(`SELECT * FROM spaces WHERE map_id=(SELECT id FROM maps WHERE name='${map}')`)
    })
    .then(data => {
      return data[0]
    })
  connection.end();
}

module.exports = {
  getAllMaps,
  getBoard
}