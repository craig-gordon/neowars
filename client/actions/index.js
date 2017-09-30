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

const destroyUnit = (unit) => ({
  type: actionTypes.DESTROY_UNIT,
  unit
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

const incrementIncome = (income) => ({
  type: actionTypes.INCREMENT_INCOME,
  income
});

const decrementIncome = (income) => ({
  type: actionTypes.DECREMENT_INCOME,
  income
});

const captureProperty = (unit, space) => ({
  type: actionTypes.CAPTURE_PROPERTY,
  unitHp
});