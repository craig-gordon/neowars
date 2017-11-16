import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

class GameHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.currentGameName}</h3>
        <div>Map: {this.props.currentMap.name}</div>
        <div>Day: {this.props.currentDay}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentGameName: state.currentGameName,
  currentMap: state.currentMap,
  currentDay: state.currentDay
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameHeader);