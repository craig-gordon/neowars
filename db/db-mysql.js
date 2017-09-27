const mysql = require('mysql2/promise');
const config = require('./config.js');

const getAllMaps = async () => {
  try {
    const connection = await mysql.createConnection(config);
    let [maps, fields] = await connection.query(`SELECT * FROM maps`);
    connection.end();
    return maps;
  } catch(err) {
    return err;
  }
}

const getBoard = async (map) => {
  try {
    const connection = await mysql.createConnection(config);
    let [board, fields] = await connection.query(`SELECT * FROM spaces WHERE map_id=(SELECT id FROM maps WHERE name='${map}')`);
    connection.end();
    return board;
  } catch(err) {
    return err;
  }
}

module.exports = {
  getAllMaps,
  getBoard
}