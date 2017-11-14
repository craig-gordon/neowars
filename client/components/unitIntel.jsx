import React from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

class UnitIntel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let unit = this.props.unit;
    return (
      <div>
        <div> Unit: {unit.type} </div>
        <div> Country: {unit.countryName} </div>
        <div> HP: {Math.ceil(unit.hp / 10)} </div>
        <div> Move: {unit.moveRange} </div>
        <div> Fuel: {unit.fuel} </div>
        <div> {unit.weapons[0].ammo ? `Ammo: ${unit.weapons[0].ammo}` : null} </div>
        {unit.canMove ? (
          <div onClick={this.props.toggleUnitMove.bind(null, unit)}> Move Unit </div>
        ) : null}
        {this.props.canAttack && unit.targetsInRange.length ? (
          <div onClick={this.props.toggleAttacking.bind(null, unit)}> Fire </div>
        ) : null}
        {this.props.movingUnit ? `to...` : null}<br/><br/>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnitIntel);