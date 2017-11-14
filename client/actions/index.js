const POPULATE_MAP_LIST = 'POPULATE_MAP_LIST';
const SET_CURRENT_GAME_NAME = 'SET_CURRENT_GAME_NAME';
const SET_CURRENT_MAP = 'SET_CURRENT_MAP';
const SET_CURRENT_BOARD = 'SET_CURRENT_BOARD';
const INCREMENT_CURRENT_DAY = 'INCREMENT_CURRENT_DAY';
const CHANGE_CURRENT_TURN = 'CHANGE_CURRENT_TURN';
const RECEIVE_INCOME = 'RECEIVE_INCOME';
const DECREMENT_FUNDS = 'DECREMENT_FUNDS';
const BUILD_UNIT = 'BUILD_UNIT';
const DESTROY_UNIT = 'DESTROY_UNIT';
const MAKE_UNITS_ACTIVE = 'MAKE_UNITS_ACTIVE';
const MOVE_UNIT = 'MOVE_UNIT';
const CHECK_TARGETS_IN_RANGE = 'CHECK_TARGETS_IN_RANGE';
const INCREMENT_HP = 'INCREMENT_HP';
const DECREMENT_HP = 'DECREMENT_HP';
const INCREMENT_AMMO = 'INCREMENT_AMMO';
const DECREMENT_AMMO = 'DECREMENT_AMMO';
const INCREMENT_FUEL = 'INCREMENT_FUEL';
const DECREMENT_FUEL = 'DECREMENT_FUEL';
const INCREMENT_INCOME = 'INCREMENT_INCOME';
const DECREMENT_INCOME = 'DECREMENT_INCOME';
const CAPTURE_PROPERTY = 'CAPTURE_PROPERTY';

export const populateMapList = (maps) => ({
  type: POPULATE_MAP_LIST,
  maps
});

export const setCurrentGameName = (gameName) => ({
  type: SET_CURRENT_GAME_NAME,
  gameName
});

export const setCurrentMap = (map) => ({
  type: SET_CURRENT_MAP,
  map
});

export const setCurrentBoard = (board) => ({
  type: SET_CURRENT_BOARD,
  board
});

export const incrementCurrentDay = (day) => ({
  type: INCREMENT_CURRENT_DAY,
  day
});

export const changeCurrentTurn = (countries) => ({
  type: CHANGE_CURRENT_TURN,
  countries
});

export const receiveIncome = (countryName) => ({
  type: RECEIVE_INCOME,
  countryName
});

export const decrementFunds = (countryName, loss) => ({
  type: DECREMENT_FUNDS,
  countryName,
  loss
});

export const buildUnit = (unitType, countryName, position) => ({
  type: BUILD_UNIT,
  unitType,
  countryName,
  position
});

export const destroyUnit = (idx) => ({
  type: DESTROY_UNIT,
  idx
});

export const makeUnitsActive = () => ({
  type: MAKE_UNITS_ACTIVE
});

export const moveUnit = (from, to) => ({
  type: MOVE_UNIT,
  from,
  to
});

export const checkTargetsInRange = (idx) => ({
  type: CHECK_TARGETS_IN_RANGE,
  idx
});

export const incrementHp = (gain) => ({
  type: INCREMENT_HP,
  gain
});

export const decrementHp = (loss) => ({
  type: DECREMENT_HP,
  loss
});

export const incrementAmmo = (gain) => ({
  type: INCREMENT_AMMO,
  gain
})

export const decrementAmmo = (loss) => ({
  type: DECREMENT_AMMO,
  loss
});

export const incrementFuel = (gain) => ({
  type: INCREMENT_FUEL,
  gain
});

export const decrementFuel = (loss) => ({
  type: DECREMENT_FUEL,
  loss
});

export const incrementIncome = (countryIdx, gain) => ({
  type: INCREMENT_INCOME,
  countryIdx,
  gain
});

export const decrementIncome = (loss) => ({
  type: DECREMENT_INCOME,
  loss
});

export const captureProperty = (unitHp) => ({
  type: CAPTURE_PROPERTY,
  unitHp
});