const mapList = (state = [], action) => {
  switch (action.type) {
    case 'MAP_LIST_POPULATE':
      return action.maps;
    default:
      return state;
  }
}

const gameName = (state = '', action) => {
  switch (action.type) {
    case 'GAME_NAME_SET':
      return action.gameName;
    default:
      return state;
  }
}

const map = (state = '', action) => {
  switch (action.type) {
    case 'MAP_SET':
      return action.map;
    default:
      return state;
  }
}

const board = (state = [[]], action) => {
  switch (action.type) {
    case 'BOARD_SET':
      return action.board;
    default:
      return state;
  }
}

const day = (state = 0, action) => {
  switch (action.type) {
    case 'DAY_INCREMENT':
      let newState = state + 1;
      return newState;
    default:
      return state;
  }
}

const currentTurn = (state = '', action) => {
  switch (action.type) {
    case 'CURRENT_TURN_CHANGE':
      let indexOfCurrent = action.countries.reduce((memo, country, i) => country.name === memo ? i : memo, state);
      return indexOfCurrent === '' ? action.countries[0].name : action.countries[(indexOfCurrent + 1) % action.countries.length].name;
    default:
      return state;
  }
}

const countries = (state = (
  [
    {
      name: 'Floria',
      funds: 0,
      income: 0,
    },
    {
      name: 'Ranford',
      funds: 0,
      income: 0,
    }
  ]
), action) => {
  let newState = Object.assign([], state);
  switch (action.type) {
    case 'INCOME_RECEIVE': // state = [{'Floria'}, {'Ranford'}]
      var countryIndex = state.reduce((memo, country, i) => country.name === action.countryName ? i : memo, null);
      newState[countryIndex].funds += newState[countryIndex].income;
      return newState;
    case 'FUNDS_DECREMENT':
      var countryIndex = state.reduce((memo, country, i) => country.name === action.countryName ? i : memo, null);
      newState[countryIndex].funds -= action.loss;
      return newState;
    case 'INCOME_INCREMENT':
      newState[action.countryIndex].income += action.gain;
      return newState;
    default:
      return state;
  }
}

const units = (state = [], action) => {
  switch (action.type) {
    case 'UNIT_BUILD':
      return state.concat([new createUnit[action.unitType](action.countryName, action.position)]);
    case 'UNIT_DESTROY':
      return state.slice(0, action.index).concat(state.slice(action.index + 1));
    case 'UNITS_MAKE_ACTIVE':
      return state.map(unit => Object.assign(unit, {canMove: true}));
    case 'UNIT_MOVE':
      console.log('state:', state);
      let unitIndex = state.reduce((memo, unit, i) => action.from === unit.position ? i : memo, null);
      let movingUnit = state[unitIndex];
      movingUnit.position = action.to;
      let newState = [...state.slice(0, unitIndex), movingUnit, ...state.slice(unitIndex + 1)];
      console.log('newState:', newState);
      return newState;
    default:
      return state;
  }
}

window.reducers = {
  mapList,
  gameName,
  map,
  board,
  day,
  currentTurn,
  countries,
  units
};