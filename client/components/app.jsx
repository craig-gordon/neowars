import React from 'react';
import Banner from './Banner.jsx';
import LandingPage from './LandingPage.jsx';
import CreateNewGame from './CreateNewGame.jsx';
import CurrentGame from './CurrentGame.jsx';

import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Banner />
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/new' component={CreateNewGame}/>
          <Route path='/game' component={CurrentGame}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  mapList: state.mapList,
  gameName: state.gameName,
  map: state.map,
  day: state.day,
  currentTurn: state.currentTurn,
  board: state.board,
  countries: state.countries,
  units: state.units,
  router: state.router
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));