const BrowserRouter = ReactRouterDOM.BrowserRouter;
const Provider = ReactRedux.Provider;

const store = Redux.createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);