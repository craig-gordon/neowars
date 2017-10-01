const incrementDay = (day) => ({
  type: actionTypes.INCREMENT_DAY,
  day
});

const changeCurrentTurn = (countryName) => ({
  type: actionTypes.CHANGE_CURRENT_TURN,
  countryName
});

const generateIncome = (income) => ({
  type: actionTypes.GENERATE_INCOME,
  income
});

const buildUnit = (unitType) => ({
  type: actionTypes.BUILD_UNIT,
  unitType
});

const destroyUnit = (index) => ({
  type: actionTypes.DESTROY_UNIT,
  index
})

const moveUnit = (position) => ({
  type: actionTypes.MOVE_UNIT,
  position
});

const incrementHp = (gain) => ({
  type: actionTypes.INCREMENT_HP,
  gain
});

const decrementHp = (loss) => ({
  type: actionTypes.DECREMENT_HP,
  loss
});

const incrementAmmo = (gain) => ({
  type: actionTypes.INCREMENT_AMMO,
  gain
})

const decrementAmmo = (loss) => ({
  type: actionTypes.DECREMENT_AMMO,
  loss
});

const incrementFuel = (gain) => ({
  type: actionTypes.INCREMENT_FUEL,
  gain
});

const decrementFuel = (loss) => ({
  type: actionTypes.DECREMENT_FUEL,
  loss
});

const incrementIncome = (gain) => ({
  type: actionTypes.INCREMENT_INCOME,
  gain
});

const decrementIncome = (loss) => ({
  type: actionTypes.DECREMENT_INCOME,
  loss
});

const captureProperty = (unitHp) => ({
  type: actionTypes.CAPTURE_PROPERTY,
  unitHp
});

window.actionCreators = {
  incrementDay,
  changeCurrentTurn,
  generateIncome,
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
}