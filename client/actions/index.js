const incrementDay = () => ({
  type: actionTypes.INCREMENT_DAY,
  day: ++day
});

const changeCurrentTurn = (countryName) => ({
  type: actionTypes.CHANGE_CURRENT_TURN,
  countryName
});

const generateIncome = (income, funds) => ({
  type: actionTypes.GENERATE_INCOME,
  income,
  funds
});

const buildUnit = (unitType) => ({
  type: actionTypes.BUILD_UNIT,
  unitType
});

const selectUnit = (unit) => ({
  type: actionTypes.SELECT_UNIT,
  unit
});

const moveUnit = (position) => ({
  type: actionTypes.MOVE_UNIT,
  position
});

const fireOnUnit = (aUnit, dUnit) => ({
  type: actionTypes.FIRE_ON_UNIT,
  aUnit,
  dUnit
});

const decrementAmmo = (ammo) => ({
  type: actionTypes.DECREMENT_AMMO,
  ammo
});

const decrementFuel = (fuel, amount) => ({
  type: actionTypes.DECREMENT_FUEL,
  fuel,
  amount
});

const restock = (fuel, ammo) => ({
  type: actionTypes.RESTOCK,
  fuel,
  ammo
});

const captureProperty = (unit, space) => ({
  type: actionTypes.CAPTURE_PROPERTY,
  unit,
  space
});

const incrementIncome = (income) => ({
  type: actionTypes.INCREMENT_INCOME,
  income
});

const joinUnits = (unit1, unit2) => ({
  type: actionTypes.JOIN_UNITS,
  unit1,
  unit2,
});