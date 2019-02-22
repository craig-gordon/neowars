// const sequelize = require('./index').sequelize;
// const Map = require('./index').Map;
// const Space = require('./index').Space;

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
      return data.map(spaceEntry => spaceEntry.dataValues);
    })
    .catch(err => {
      return err;
    });
}

module.exports = {
  getAllMaps,
  getBoard
}