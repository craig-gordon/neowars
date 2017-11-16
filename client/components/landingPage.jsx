import React from 'react';
import axios from 'axios';
// import 'antd/lib/button/style/css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.getMapList = this.getMapList.bind(this);
  }

  getMapList() {
    axios.get('/maps')
      .then(res => {
        this.props.actions.populateMapList(res.data);
        this.props.history.push('/new');
      })
      .catch(err => {
        console.log('Error retrieving map list from database:', err);
      });
  }

  render() {
    return (
      <div>
        <h3>Welcome to Neo Wars!</h3>
        <div>Neo Wars is the premiere site to play Advance Wars online.</div>
        <div><a href="https://en.wikipedia.org/wiki/Advance_Wars">Advance Wars</a> is a series
        of turn-based strategy games developed by Intelligent Systems and published by Nintendo.</div>
        <div>Neo Wars takes elements from Advance Wars 1, 2, and Dual Strike.</div><br/>
        <button className="primaryButton" onClick={this.getMapList}>
          Create New Game
        </button>
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
)(LandingPage);