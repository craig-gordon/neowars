import React from 'react';
import Banner from './Banner.jsx';
import LandingPage from './LandingPage.jsx';
import CreateNewGame from './CreateNewGame.jsx';
import CurrentGame from './CurrentGame.jsx';
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Banner />
        <div className="siteBody">
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/new" component={CreateNewGame}/>
            <Route path="/game" component={CurrentGame}/>
          </Switch>
        </div>
      </div>
    )
  }
}

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