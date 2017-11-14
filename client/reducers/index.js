import _ from 'lodash';
import * as Unit from '../gameData/unitTypes';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const mapList = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_MAP_LIST':
      return action.maps;
    default:
      return state;
  }
};

const currentGameName = (state = '', action) => {
  switch (action.type) {
    case 'SET_CURRENT_GAME_NAME':
      return action.gameName;
    default:
      return state;
  }
};

const currentMap = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_MAP':
      return action.map;
    default:
      return state;
  }
};

const currentBoard = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_BOARD':
      return action.board;
    default:
      return state;
  }
};

const currentDay = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_CURRENT_DAY':
      return state + 1;
    default:
      return state;
  }
};

const currentTurn = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_TURN':
      let idx = _.reduce(action.countries, (acc, country, i) => country.name === acc ? i : acc, state);
      return idx === '' ? action.countries[0].name : action.countries[(idx + 1) % action.countries.length].name;
    default:
      return state;
  }
};

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
  let newState = [...state];
  let countryIdx = _.reduce(state, (acc, country, i) => country.name === action.countryName ? i : acc, null);
  switch (action.type) {
    case 'RECEIVE_INCOME': // state = [{'Floria'}, {'Ranford'}]
      newState[countryIdx].funds += newState[countryIdx].income;
      return newState;
    case 'DECREMENT_FUNDS':
      newState[countryIdx].funds -= action.loss;
      return newState;
    case 'INCREMENT_INCOME':
      newState[action.countryIdx].income += action.gain;
      return newState;
    default:
      return state;
  }
};

const units = (state = [], action) => {
  switch (action.type) {
    case 'BUILD_UNIT':
      return [...state, new Unit[action.unitType](action.countryName, action.position)];
    case 'DESTROY_UNIT':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    case 'MAKE_UNITS_ACTIVE':
      return state.map(unit => _.assign(unit, {canMove: true}));
    case 'MOVE_UNIT':
      console.log('state:', state);
      let idx = state.reduce((acc, unit, i) => action.from === unit.position ? i : acc, null);
      let movingUnit = state[idx];
      movingUnit.position = action.to;
      let newState = [...state.slice(0, idx), movingUnit, ...state.slice(idx + 1)];
      console.log('newState:', newState);
      return newState;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  mapList,
  currentGameName,
  currentMap,
  currentBoard,
  currentDay,
  currentTurn,
  countries,
  units,
  router: routerReducer
});

export default rootReducer;