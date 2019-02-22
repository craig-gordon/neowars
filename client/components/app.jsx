import React from 'react';
import LandingPage from './LandingPage.jsx';
import CurrentGame from './CurrentGame.jsx';
import { Switch, Route, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

const App = () => (
  <div>
    <div className="siteBanner">
      <Link to="/" className="siteName">
        Neowars
      </Link>
    </div>
    <div className="siteBody">
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/game" component={CurrentGame}/>
      </Switch>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  router: state.router
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);