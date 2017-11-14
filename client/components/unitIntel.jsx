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
    return (
      <div>
        Unit: {this.props.unit.type}<br/>
        Country: {this.props.unit.country}<br/>
        HP: {Math.ceil(this.props.unit.hp / 10)}<br/>
        Move: {this.props.unit.moveRange}<br/>
        Fuel: {this.props.unit.fuel}<br/>
        {this.props.unit.weapons[0].ammo ? `Ammo: ${this.props.unit.weapons[0].ammo}` : null}<br/>
        {this.props.unit.canMove ? <div onClick={this.props.toggleUnitMove.bind(null, this.props.unit)}>Move Unit</div> : null}
        {this.props.readyToMove ? `to...` : null}<br/><br/>
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