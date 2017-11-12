import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import App from './components/App.jsx';
import rootReducer from './reducers';

const appHistory = createHistory();
const historyMiddleware = routerMiddleware(appHistory);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(historyMiddleware),
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  )
);

render(
  <Provider store={store}>
    <ConnectedRouter history={appHistory}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);