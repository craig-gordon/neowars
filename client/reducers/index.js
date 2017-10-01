const mapList = (state = [], action) => {
  switch (action.type) {
    case 'MAP_LIST_POPULATE':
      return action.maps;
    default:
      return state;
  }
}

const gameName = (state = null, action) => {
  switch (action.type) {
    case 'GAME_NAME_SET':
      return action.gameName;
    default:
      return state;
  }
}

const day = (state = 1, action) => {
  switch (action.type) {
    case 'DAY_INCREMENT':
      return ++state;
    default:
      return state;
  }
}

const map = (state = '', action) => {
  switch (action.type) {
    case 'MAP_SELECT':
      return action.map;
    default:
      return state;
  }
}

const currentTurn = (state = 'Floria', action) => {
  switch (action.type) {
    case 'CURRENT_TURN_CHANGE':
      return action.country;
    default:
      return state;
  }
}

const funds = (state = 0, action) => {
  switch (action.type) {
    case 'INCOME_RECEIVE':
      return state + action.income;
    default:
      return state;
  }
}

const build = (state = [], action) => {
  switch (action.type) {
    case 'UNIT_BUILD':
      return state.slice().push(action.unit);
    default:
      return state;
  }
}

const destroy = (state = [], action) => {
  switch (action.type) {
    case 'UNIT_DESTROY':
      return [...state.slice(0, i), ...state.slice(i + 1)];
    default:
      return state;
  }
}

const move = (state = {}, action) => {
  switch (action.type) {
    case 'UNIT_MOVE':
      return [state[0] + action.position[0], state[1] + action.position[1]];
    default:
      return state;
  }
}

const hp = (state = 100, action) => {
  switch (action.type) {
    case 'HP_INCREMENT':
      return state + action.gain;
    case 'HP_DECREMENT':
      return state - action.loss;
    default:
      return state;
  }
}

const ammo = (state = 9, action) => {
  switch (action.type) {
    case 'AMMO_INCREMENT':
      return state + action.gain;
    case 'AMMO_DECREMENT':
      return state - action.loss;
    default:
      return state;
  }
}

const fuel = (state = 99, action) => {
  switch (action.type) {
    case 'FUEL_INCREMENT':
      return state + action.gain;
    case 'FUEL_DECREMENT':
      return state - action.loss;
    default:
      return state;
  }
}

const income = (state = 0, action) => {
  switch (action.type) {
    case 'INCOME_INCREMENT':
      return state + 1000;
    case 'INCOME_DECREMENT':
      return state - 1000;
    default:
      return state;
  }
}

const capture = (state = 20, action) => {
  switch (action.type) {
    case 'PROPERTY_CAPTURE':
      return Math.max(state - action.unitHp, 0);
    default:
      return state;
  }
}

const rootReducer = Redux.combineReducers({
  mapList,
  gameName,
  day,
  currentTurn,
  funds,
  build,
  destroy,
  move,
  hp,
  ammo,
  fuel,
  income,
  capture
});

window.rootReducer = rootReducer;