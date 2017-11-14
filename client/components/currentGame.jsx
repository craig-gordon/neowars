import React from 'react';
import _ from 'lodash';
import GameBoard from './GameBoard.jsx';
import CountriesIntel from './CountriesIntel.jsx';
import SpaceIntel from './SpaceIntel.jsx';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

class CurrentGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spaceInFocus: false,
      clickedSpace: {},
      clickedPosition: [],
      readyToMove: false
    }
    this.toggleSpaceIntel = this.toggleSpaceIntel.bind(this);
    this.toggleUnitMove = this.toggleUnitMove.bind(this);
    this.calculateInitialIncome = this.calculateInitialIncome.bind(this);
  }

  componentDidMount() {
    this.props.actions.incrementCurrentDay();
    this.props.actions.changeCurrentTurn(this.props.countries);
    _.each(this.props.countries, (country, i) => {
      let amount = this.calculateInitialIncome(country.name);
      this.props.actions.incrementIncome(i, amount);
    })
    this.props.actions.receiveIncome(this.props.countries[0].name)
  }

  toggleSpaceIntel(space) {
    if (space.position === this.state.clickedPosition) this.setState({spaceInFocus: false, clickedSpace: {}});
    else this.setState({spaceInFocus: true, clickedSpace: space});
  }

  toggleUnitMove() {
    this.setState({readyToMove: !this.state.readyToMove});
  }

  calculateInitialIncome(countryName) {
    return _.reduce(this.props.currentBoard, (sum, row) => {
      return sum + _.reduce(row, (total, space) => {
        return total + (space.countryName === countryName ? 1000 : 0);
      }, 0);
    }, 0);
  }

  render() {
    return (
      <div>
        <h3>{this.props.currentGameName}</h3>
        <div>Map: {this.props.currentMap.name}</div>
        <div>Day: {this.props.currentDay}</div><br/>
        <GameBoard
          clickedSpace={this.state.clickedSpace}
          readyToMove={this.state.readyToMove}
          toggleSpaceIntel={this.toggleSpaceIntel}
          toggleUnitMove={this.toggleUnitMove}
        />
        <CountriesIntel
          toggleSpaceIntel={this.toggleSpaceIntel}
        />
        {this.state.spaceInFocus ? <SpaceIntel
          space={this.state.clickedSpace}
          readyToMove={this.state.readyToMove}
          toggleUnitMove={this.toggleUnitMove}
        /> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentGameName: state.currentGameName,
  currentMap: state.currentMap,
  currentBoard: state.currentBoard,
  currentDay: state.currentDay,
  currentTurn: state.currentTurn,
  countries: state.countries,
  units: state.units,
  router: state.router
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentGame);