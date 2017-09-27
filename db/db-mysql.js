const mysql = require('promise-mysql');
const config = require('./config.js');

const connection = mysql.createConnection(config);

const getAllMaps = async () => {
  try {
    return await connection.query(`SELECT * FROM 'maps'`);
  } catch(err) {
    return err;
  }
}

module.exports = {
  getAllMaps
}