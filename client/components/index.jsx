const BrowserRouter = ReactRouterDOM.BrowserRouter;
const Provider = ReactRedux.Provider;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);