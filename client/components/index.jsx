const Provider = ReactRedux.Provider;
const ConnectedRouter = ReactRouterRedux.ConnectedRouter;
const BrowserRouter = ReactRouterDOM.BrowserRouter;

const rootReducer = Redux.combineReducers(Object.assign({}, reducers, {router: ReactRouterRedux.routerReducer}));

const appHistory = History.createBrowserHistory();

const middleware = ReactRouterRedux.routerMiddleware(appHistory);

const store = Redux.createStore(rootReducer, Redux.applyMiddleware(middleware));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={appHistory}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);