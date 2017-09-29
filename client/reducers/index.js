const incrementDay = (state = 1, action) => {
  switch (action.type) {
    case 'INCREMENT_DAY':
      return ++state;
    default:
      return state;
  }
}

const changeCurrentTurn = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_TURN':
      return 
  }
}











window.actionTypes = {
  INCREMENT_DAY: 'INCREMENT_DAY',
  CHANGE_CURRENT_TURN: 'CHANGE_CURRENT_TURN',
  GENERATE_INCOME: 'GENERATE_INCOME',

  BUILD_UNIT: 'BUILD_UNIT',
  SELECT_UNIT: 'SELECT_UNIT',
  MOVE_UNIT: 'MOVE_UNIT',
  FIRE_ON_UNIT: 'FIRE_ON_UNIT',
  DECREMENT_AMMO: 'DECREMENT_AMMO',
  DECREMENT_FUEL: 'DECREMENT_FUEL',
  RESTOCK: 'RESTOCK',
  CAPTURE_PROPERTY: 'CAPTURE_PROPERTY',
  INCREMENT_INCOME: 'INCREMENT_INCOME',
  JOIN_UNITS: 'JOIN_UNITS'
};