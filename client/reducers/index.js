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

const map = (state = '', action) => {
  switch (action.type) {
    case 'MAP_SELECT':
      return action.map;
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

const currentTurn = (state = 'Floria', action) => {
  switch (action.type) {
    case 'CURRENT_TURN_CHANGE':
      return action.country;
    default:
      return state;
  }
}

const board = (state = [], action) => {
  switch (action.type) {
    case 'BOARD_SET':
      return action.board.map(row => row.slice());
    default:
      return state;
  }
}

const countries = (state = (
  {
    Floria: {
      funds: 0,
      income: 0,
      units: []
    }
  },
  {
    Ranford: {
      funds: 0,
      income: 0,
      units: []
    }
  }
), action) => {
  switch (action.type) {
    case 'INCOME_RECEIVE':
      let newState = Object.assign({}, state);
      newState[action.country].funds += state[action.country].income;
      return newState;
    default:
      return state;
  }
}

const units = (state = [], action) => {
  switch (action.type) {
    case 'UNIT_BUILD':
      let newState = state.push(new createUnit[action.unitType])
      return newState;
    default:
      return state;
  }
}

const rootReducer = Redux.combineReducers({
  mapList,
  gameName,
  map,
  day,
  currentTurn,
  board,
  countries,
  units
});

window.rootReducer = rootReducer;