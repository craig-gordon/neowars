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
      clickedSpace: [],
      readyToMove: false
    }
    this.toggleSpaceIntel = this.toggleSpaceIntel.bind(this);
    this.toggleUnitMove = this.toggleUnitMove.bind(this);
    this.calculateInitialIncome = this.calculateInitialIncome.bind(this);
  }

  componentDidMount() {
    this.props.actions.incrementCurrentDay();
    this.props.actions.changeCurrentTurn(this.props.countries);
    setTimeout(() => {
      _.each(this.props.countries, (country, i) => {
        let amount = this.calculateInitialIncome(country.name);
        this.props.actions.incrementIncome(i, amount);
      })
      this.props.actions.receiveIncome(this.props.countries[0].name);
    }, 20);
  }

  toggleSpaceIntel(position) {
    if (position === this.state.clickedSpace || position === undefined) {
      this.setState({spaceInFocus: false, clickedSpace: []});
    } else {
      this.setState({spaceInFocus: true, clickedSpace: position});
    }
  }

  toggleUnitMove() {
    this.setState({readyToMove: !this.state.readyToMove});
  }

  calculateInitialIncome(countryName) {
    return _.reduce(this.props.board, (sum, row) => {
      return sum + _.reduce(row, (total, space) => {
        return total + (space.country === countryName ? 1000 : 0);
      }, 0);
    }, 0);
  }

  render() {
    return (
      <div>
        <h3>{this.props.currentGameName}</h3>
        Map: {this.props.currentMap.name}<br/>
        Day: {this.props.currentDay}<br/><br/>
        <div className="board">
          <GameBoard
            clickedSpace={this.state.clickedSpace}
            readyToMove={this.state.readyToMove}
            moveUnit={this.props.moveUnit}
            toggleSpaceIntel={this.toggleSpaceIntel}
            toggleUnitMove={this.toggleUnitMove}
          />
        </div>
        <div className="countries">
          <CountriesIntel
            toggleSpaceIntel={this.toggleSpaceIntel}
          />
        </div>
        {this.state.spaceInFocus ? <SpaceIntel
          currentTurn={this.props.currentTurn}
          countries={this.props.countries}
          units={this.props.units}
          position={this.state.clickedSpace}
          space={this.props.board[this.state.clickedSpace[0]][this.state.clickedSpace[1]]}
          readyToMove={this.state.readyToMove}
          toggleUnitMove={this.toggleUnitMove}
          buildUnit={this.props.buildUnit}
          decrementFunds={this.props.decrementFunds}
        /> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  mapList: state.mapList,
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