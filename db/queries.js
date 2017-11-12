const sequelize = require('./index').sequelize;
const Map = require('./index').Map;
const Space = require('./index').Space;

const getAllMaps = () => {
  return Map.findAll()
    .then(data => {
      return data.map(mapEntry => mapEntry.dataValues);
    })
    .catch(err => {
      return err;
    });
}

const getBoard = (mapId) => {
  return Space.findAll({
    where: {
      mapId
    }
  })
    .then(data => {
      console.log('data:', data);
      return data[0]
    })
    .catch(err => {
      return err;
    });
}

module.exports = {
  getAllMaps,
  getBoard
}