import _ from 'lodash';
import equal from 'deep-equal';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { unitTypes as Unit } from '../gameData/unitTypes';
import { countTilesBetweenUnits, findAllTargetsInRange } from '../gameData/calculations';

const mapList = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_MAP_LIST':
      return action.maps;
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
      var idx = _.reduce(action.countries, (acc, country, i) => country.name === acc ? i : acc, state);
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
  switch (action.type) {
    case 'RECEIVE_INCOME': // state = [{'Floria'}, {'Ranford'}]
      var newState = [...state.map(country => _.assign({}, country))];
      var idx = _.reduce(newState, (acc, country, i) => country.name === action.countryName ? i : acc, null);
      newState[idx].funds += newState[idx].income;
      return newState;
    case 'DECREMENT_FUNDS':
      var newState = [...state.map(country => _.assign({}, country))];
      var idx = _.reduce(newState, (acc, country, i) => country.name === action.countryName ? i : acc, null);
      newState[idx].funds -= action.loss;
      return newState;
    case 'INCREMENT_INCOME':
      var newState = [...state.map(country => _.assign({}, country))];
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
      return [...state.slice(0, action.idx), ...state.slice(action.idx + 1)];
    case 'MAKE_UNITS_ACTIVE':
      return state.map(unit => _.assign(unit, {canMove: true, canAttack: true}));
    case 'MOVE_UNIT':
      var idx = _.reduce(state, (acc, unit, i) => equal(action.from, unit.position) ? i : acc, null);
      var unit = state[idx];
      unit.position = action.to;
      unit.canMove = false;
      return [...state.slice(0, idx), unit, ...state.slice(idx + 1)];
    case 'UPDATE_TARGETS_IN_RANGE':
      var idx = _.reduce(state, (acc, unit, i) => equal(action.position, unit.position) ? i : acc, null);
      var unit = state[idx];
      unit.targetsInRange = findAllTargetsInRange(idx, state.slice());
      return [...state.slice(0, idx), unit, ...state.slice(idx + 1)];
    case 'DECREMENT_HP':
      console.log('enter DECREMENT HP');
      var idx = _.reduce(state, (acc, unit, i) => equal(action.position, unit.position) ? i : acc, null);
      var unit = state[idx];
      console.log('unit.hp before:', unit.hp);
      unit.hp -= action.loss;
      console.log('unit.hp after:', unit.hp);
      return [...state.slice(0, idx), unit, ...state.slice(idx + 1)];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  mapList,
  currentMap,
  currentBoard,
  currentDay,
  currentTurn,
  countries,
  units,
  router: routerReducer
});

export default rootReducer;