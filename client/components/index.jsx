const BrowserRouter = ReactRouterDOM.BrowserRouter;
const Provider = ReactRedux.Provider;

console.log(window.store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);