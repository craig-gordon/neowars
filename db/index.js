const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  define: {
    freezeTableName: true
  },
  dialectOptions: {
    SSL_VERIFY_SERVER_CERT: '../amazon-rds-ca-cert.pem'
  },
  pool: {
    maxConnections: 5,
    maxIdleTime: 30
  },
  language: 'en'
});

sequelize.authenticate()
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// ~~~~~~~~~~ //
// Map Schema //
// ~~~~~~~~~~ //

const Map = sequelize.define('map', {
  name: { type: Sequelize.STRING, unique: true },
  height: { type: Sequelize.INTEGER, allowNull: false },
  width: { type: Sequelize.INTEGER, allowNull: false }
});

Map.sync({ force: false });

// ~~~~~~~~~~~ //
// Game Schema //
// ~~~~~~~~~~~ //

const Game = sequelize.define('game', {
  currentDay: { type: Sequelize.INTEGER, allowNull: false },
  currentTurn: { type: Sequelize.STRING, allowNull: false },
  countryOne: { type: Sequelize.STRING, allowNull: false },
  countryTwo: { type: Sequelize.STRING, allowNull: false },
  countryThree: Sequelize.STRING,
  countryFour: Sequelize.STRING,
});

Game.belongsTo(Map, {
  foreignKey: {
    allowNull: false
  }
});

Game.sync({ force: false });

// ~~~~~~~~~~~~ //
// Space Schema //
// ~~~~~~~~~~~~ //

const Space = sequelize.define('space', {
  row: { type: Sequelize.INTEGER, allowNull: false },
  col: { type: Sequelize.INTEGER, allowNull: false },
  terrain: { type: Sequelize.STRING, allowNull: false },
  country: Sequelize.STRING,
});

Space.belongsTo(Map, {
  foreignKey: {
    allowNull: false
  }
});

Space.sync({ force: false });

// ~~~~~~~~~~~ //
// Unit Schema //
// ~~~~~~~~~~~ //

const Unit = sequelize.define('unit', {
  type: { type: Sequelize.STRING, allowNull: false },
  country: { type: Sequelize.STRING, allowNull: false },
  currentHp: { type: Sequelize.INTEGER, allowNull: false },
});

Unit.belongsTo(Game, {
  foreignKey: {
    allowNull: false
  }
});

Unit.sync({ force: false });

// ~~~~~~~ //
// EXPORTS //
// ~~~~~~~ //

module.exports = {
  sequelize,
  Map,
  Game,
  Space,
  Unit
};

// ~~~~~~~~~~~~~~~~~~ //
// DATABASE HYDRATION //
// ~~~~~~~~~~~~~~~~~~ //

// Map.create({ name: "Sandalwood Plains", height: 5, width: 5 });
// Map.create({ name: "Folzor's Tundra", height: 10, width: 10 });
// Map.create({ name: "Relic", height: 20, width: 20 });

// Space.create({ row: 0, col: 0, terrain: 'plains', mapId: 1});
// Space.create({ row: 0, col: 1, terrain: 'plains', mapId: 1});
// Space.create({ row: 0, col: 2, terrain: 'plains', mapId: 1});
// Space.create({ row: 0, col: 3, terrain: 'base', country: 'Ranford', mapId: 1});
// Space.create({ row: 0, col: 4, terrain: 'base', country: 'Ranford', mapId: 1});
// Space.create({ row: 1, col: 0, terrain: 'plains', mapId: 1});
// Space.create({ row: 1, col: 1, terrain: 'plains', mapId: 1});
// Space.create({ row: 1, col: 2, terrain: 'plains', mapId: 1});
// Space.create({ row: 1, col: 3, terrain: 'plains', mapId: 1});
// Space.create({ row: 1, col: 4, terrain: 'base', country: 'Ranford', mapId: 1});
// Space.create({ row: 2, col: 0, terrain: 'plains', mapId: 1});
// Space.create({ row: 2, col: 1, terrain: 'plains', mapId: 1});
// Space.create({ row: 2, col: 2, terrain: 'plains', mapId: 1});
// Space.create({ row: 2, col: 3, terrain: 'plains', mapId: 1});
// Space.create({ row: 2, col: 4, terrain: 'plains', mapId: 1});
// Space.create({ row: 3, col: 0, terrain: 'base', country: 'Floria', mapId: 1});
// Space.create({ row: 3, col: 1, terrain: 'plains', mapId: 1});
// Space.create({ row: 3, col: 2, terrain: 'plains', mapId: 1});
// Space.create({ row: 3, col: 3, terrain: 'plains', mapId: 1});
// Space.create({ row: 3, col: 4, terrain: 'plains', mapId: 1});
// Space.create({ row: 4, col: 0, terrain: 'base', country: 'Floria', mapId: 1});
// Space.create({ row: 4, col: 1, terrain: 'base', country: 'Floria', mapId: 1});
// Space.create({ row: 4, col: 2, terrain: 'plains', mapId: 1});
// Space.create({ row: 4, col: 3, terrain: 'plains', mapId: 1});
// Space.create({ row: 4, col: 4, terrain: 'plains', mapId: 1});