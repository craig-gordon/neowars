import React from 'react';
import _ from 'lodash';
import GameBoard from './GameBoard.jsx';
import CountriesIntel from './CountriesIntel.jsx';
import SpaceIntel from './SpaceIntel.jsx';
import { terrainTypes as Terrain } from '../gameData/terrainTypes';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

class CurrentGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spaceInFocus: false,
      clickedSpace: {},
      movingUnit: null,
      attackingUnit: null
    }
    this.toggleSpaceIntel = this.toggleSpaceIntel.bind(this);
    this.toggleUnitMove = this.toggleUnitMove.bind(this);
    this.toggleUnitAttack = this.toggleUnitAttack.bind(this);
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

  toggleSpaceIntel(space = {}) {
    if (space.position === this.state.clickedPosition) this.setState({spaceInFocus: false, clickedSpace: {}});
    else this.setState({spaceInFocus: true, clickedSpace: space});
  }

  toggleUnitMove(unit) {
    this.setState({movingUnit: unit ? unit : null});
  }

  toggleUnitAttack(unit) {
    this.setState({attackingUnit: unit ? unit : null});
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
        <div>
          <div>Map: {this.state.currentMap.name}</div>
          <div>Day: {this.state.currentDay}</div>
        </div>
        <GameBoard
          clickedSpace={this.state.clickedSpace}
          clickedUnit={this.state.clickedUnit}
          movingUnit={this.state.movingUnit}
          attackingUnit={this.state.attackingUnit}
          toggleSpaceIntel={this.toggleSpaceIntel}
          toggleUnitMove={this.toggleUnitMove}
          toggleUnitAttack={this.toggleUnitAttack}
        />
        <CountriesIntel
          toggleSpaceIntel={this.toggleSpaceIntel}
        />
        {
          this.state.spaceInFocus
            ? <SpaceIntel
                space={this.state.clickedSpace}
                movingUnit={this.state.movingUnit}
                toggleSpaceIntel={this.toggleSpaceIntel}
                toggleUnitMove={this.toggleUnitMove}
                toggleUnitAttack={this.toggleUnitAttack}
              />
            : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
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