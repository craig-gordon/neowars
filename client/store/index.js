// const defaultState = {
//   mapList: [],
//   gameName: '',
//   map: '',
//   day: 1,
//   currentTurn: 'Floria',
//   board: [],
//   countries: [
//     {
//       name: 'Floria',
//       funds: 0,
//       income: 0,
//       units: [],
//     },
//     {
//       name: 'Ranford',
//       funds: 0,
//       income: 0,
//       units: []
//     }
//   ]
// };

const store = Redux.createStore(rootReducer);

window.store = store;