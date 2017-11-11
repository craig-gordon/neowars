const MAP_LIST_POPULATE = 'MAP_LIST_POPULATE';
const GAME_NAME_SET = 'GAME_NAME_SET';
const MAP_SET = 'MAP_SET';
const BOARD_SET = 'BOARD_SET';
const DAY_INCREMENT = 'DAY_INCREMENT';
const CURRENT_TURN_CHANGE = 'CURRENT_TURN_CHANGE';
const INCOME_RECEIVE = 'INCOME_RECEIVE';
const FUNDS_DECREMENT = 'FUNDS_DECREMENT';
const UNIT_BUILD = 'UNIT_BUILD';
const UNIT_DESTROY = 'UNIT_DESTROY';
const UNITS_MAKE_ACTIVE = 'UNITS_MAKE_ACTIVE';
const UNIT_MOVE = 'UNIT_MOVE';
const HP_INCREMENT = 'HP_INCREMENT';
const HP_DECREMENT = 'HP_DECREMENT';
const AMMO_INCREMENT = 'AMMO_INCREMENT';
const AMMO_DECREMENT = 'AMMO_DECREMENT';
const FUEL_INCREMENT = 'FUEL_INCREMENT';
const FUEL_DECREMENT = 'FUEL_DECREMENT';
const INCOME_INCREMENT = 'INCOME_INCREMENT';
const INCOME_DECREMENT = 'INCOME_DECREMENT';
const PROPERTY_CAPTURE = 'PROPERTY_CAPTURE';

export const populateMapList = (maps) => ({
  type: MAP_LIST_POPULATE,
  maps
});

export const setGameName = (gameName) => ({
  type: GAME_NAME_SET,
  gameName
});

export const setMap = (map) => ({
  type: MAP_SET,
  map
});

export const setBoard = (board) => ({
  type: BOARD_SET,
  board
});

export const incrementDay = (day) => ({
  type: DAY_INCREMENT,
  day
});

export const changeCurrentTurn = (countries) => ({
  type: CURRENT_TURN_CHANGE,
  countries
});

export const receiveIncome = (countryName) => ({
  type: INCOME_RECEIVE,
  countryName
});

export const decrementFunds = (countryName, loss) => ({
  type: FUNDS_DECREMENT,
  countryName,
  loss
});

export const buildUnit = (unitType, countryName, position) => ({
  type: UNIT_BUILD,
  unitType,
  countryName,
  position
});

export const destroyUnit = (index) => ({
  type: UNIT_DESTROY,
  index
});

export const makeUnitsActive = () => ({
  type: UNITS_MAKE_ACTIVE
});

export const moveUnit = (from, to) => ({
  type: UNIT_MOVE,
  from,
  to
});

export const incrementHp = (gain) => ({
  type: HP_INCREMENT,
  gain
});

export const decrementHp = (loss) => ({
  type: HP_DECREMENT,
  loss
});

export const incrementAmmo = (gain) => ({
  type: AMMO_INCREMENT,
  gain
})

export const decrementAmmo = (loss) => ({
  type: AMMO_DECREMENT,
  loss
});

export const incrementFuel = (gain) => ({
  type: FUEL_INCREMENT,
  gain
});

export const decrementFuel = (loss) => ({
  type: FUEL_DECREMENT,
  loss
});

export const incrementIncome = (countryIndex, gain) => ({
  type: INCOME_INCREMENT,
  countryIndex,
  gain
});

export const decrementIncome = (loss) => ({
  type: INCOME_DECREMENT,
  loss
});

export const captureProperty = (unitHp) => ({
  type: PROPERTY_CAPTURE,
  unitHp
});