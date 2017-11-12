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
    case 'SET_GAME_NAME':
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

const currentBoard = (state = [[]], action) => {
  switch (action.type) {
    case 'SET_BOARD':
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
      let indexOfCurrent = _.reduce(action.countries, (memo, country, i) => country.name === memo ? i : memo, state);
      return indexOfCurrent === '' ? action.countries[0].name : action.countries[(indexOfCurrent + 1) % action.countries.length].name;
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
  let newState = Object.assign([], state);
  switch (action.type) {
    case 'RECEIVE_INCOME': // state = [{'Floria'}, {'Ranford'}]
      var countryIdx = _.reduce(state, (memo, country, i) => country.name === action.countryName ? i : memo, null);
      newState[countryIdx].funds += newState[countryIdx].income;
      return newState;
    case 'DECREMENT_FUNDS':
      var countryIdx = _.reduce(state, (memo, country, i) => country.name === action.countryName ? i : memo, null);
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
      return state.concat([new Unit[action.unitType](action.countryName, action.position)]);
    case 'DESTROY_UNIT':
      return state.slice(0, action.index).concat(state.slice(action.index + 1));
    case 'MAKE_UNITS_ACTIVE':
      return state.map(unit => Object.assign(unit, {canMove: true}));
    case 'MOVE_UNIT':
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