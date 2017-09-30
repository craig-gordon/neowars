const rootReducer = Redux.combineReducers({
  incrementDay,
  changeCurrentTurn,
  generateIncome,
  buildUnit,
  destroyUnit,
  moveUnit,
  hp,
  ammo,
  fuel,
  income,
  captureProperty
});

const incrementDay = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_DAY':
      return ++state;
    default:
      return state;
  }
}

const changeCurrentTurn = (state, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_TURN':
      return 
  }
}

const generateIncome = (state, action) => {
  switch (action.type) {
    case 'GENERATE_INCOME':
      return state + action.income;
    default:
      return state;
  }
}

const buildUnit = (state, action) => {
  switch (action.type) {
    case 'BUILD_UNIT':
      return state.slice().push(action.unit);
    default:
      return state;
  }
}

const destroyUnit = (state, action) => {
  switch (action.type) {
    case 'DESTROY_UNIT':
      return [...state.slice(0, i), ...state.slice(i + 1)];
    default:
      return state;
  }
}

const moveUnit = (state, action) => {
  switch (action.type) {
    case 'MOVE_UNIT':
      return [state[0] + action.position[0], state[1] + action.position[1]];
    default:
      return state;
  }
}

const hp = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_HP':
      return state + action.gain;
    case 'DECREMENT_HP':
      return state - action.loss;
    default:
      return state;
  }
}

const ammo = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_AMMO':
      return state + action.gain;
    case 'DECREMENT_AMMO':
      return state - action.loss;
    default:
      return state;
  }
}

const fuel = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_FUEL':
      return state + action.gain;
    case 'DECREMENT_FUEL':
      return state - action.loss;
    default:
      return state;
  }
}

const income = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_INCOME':
      return state + 1000;
    case 'DECREMENT_INCOME':
      return state - 1000;
    default:
      return state;
  }
}

const captureProperty = (state, action) => {
  switch (action.type) {
    case 'CAPTURE_PROPERTY':
      return Math.max(state - action.unitHp, 0);
    default:
      return state;
  }
}