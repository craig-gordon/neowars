const populateMapList = (maps) => ({
  type: actionTypes.MAP_LIST_POPULATE,
  maps
});

const setGameName = (gameName) => ({
  type: actionTypes.GAME_NAME_SET,
  gameName
});

const setMap = (map) => ({
  type: actionTypes.MAP_SET,
  map
});

const setBoard = (board) => ({
  type: actionTypes.BOARD_SET,
  board
});

const incrementDay = (day) => ({
  type: actionTypes.DAY_INCREMENT,
  day
});

const changeCurrentTurn = (countries) => ({
  type: actionTypes.CURRENT_TURN_CHANGE,
  countries
});

const receiveIncome = (countryIndex) => ({
  type: actionTypes.INCOME_RECEIVE,
  countryIndex
});

const decrementFunds = (countryName, loss) => ({
  type: actionTypes.FUNDS_DECREMENT,
  countryName,
  loss
});

const buildUnit = (unitType, countryName, position) => ({
  type: actionTypes.UNIT_BUILD,
  unitType,
  countryName,
  position
});

const destroyUnit = (index) => ({
  type: actionTypes.UNIT_DESTROY,
  index
})

const moveUnit = (position) => ({
  type: actionTypes.UNIT_MOVE,
  position
});

const incrementHp = (gain) => ({
  type: actionTypes.HP_INCREMENT,
  gain
});

const decrementHp = (loss) => ({
  type: actionTypes.HP_DECREMENT,
  loss
});

const incrementAmmo = (gain) => ({
  type: actionTypes.AMMO_INCREMENT,
  gain
})

const decrementAmmo = (loss) => ({
  type: actionTypes.AMMO_DECREMENT,
  loss
});

const incrementFuel = (gain) => ({
  type: actionTypes.FUEL_INCREMENT,
  gain
});

const decrementFuel = (loss) => ({
  type: actionTypes.FUEL_DECREMENT,
  loss
});

const incrementIncome = (countryIndex, gain) => ({
  type: actionTypes.INCOME_INCREMENT,
  countryIndex,
  gain
});

const decrementIncome = (loss) => ({
  type: actionTypes.INCOME_DECREMENT,
  loss
});

const captureProperty = (unitHp) => ({
  type: actionTypes.PROPERTY_CAPTURE,
  unitHp
});

window.actionCreators = {
  populateMapList,
  setGameName,
  setMap,
  setBoard,
  incrementDay,
  changeCurrentTurn,
  receiveIncome,
  decrementFunds,
  buildUnit,
  destroyUnit,
  moveUnit,
  incrementHp,
  decrementHp,
  incrementAmmo,
  decrementAmmo,
  incrementFuel,
  decrementFuel,
  incrementIncome,
  decrementIncome,
  captureProperty
};