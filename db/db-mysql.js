const mysql = require('mysql2/promise');
const config = require('./config.js');

const getAllMaps = async () => {
  try {
    const connection = await mysql.createConnection(config);
    let [maps, fields] = await connection.query(`SELECT * FROM maps`);
    return maps;
  } catch(err) {
    return err;
  }
}

module.exports = {
  getAllMaps
}