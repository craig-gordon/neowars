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
      <div className='unit-intel-grid'>
        <div style={{gridColumn: 'span 2'}}>Unit Intel</div>
        <div>Unit</div>
        <div>{unit.type}</div>
        <div>Country</div>
        <div>{unit.country}</div>
        <div>HP</div>
        <div>{Math.ceil(unit.hp / 10)}</div>
        <div>Move</div>
        <div>{unit.moveRange}</div>
        <div>Fuel</div>
        <div>{unit.fuel}</div>
        <div>{unit.weapons[0].ammo ? 'Ammo' : null}</div>
        <div>{unit.weapons[0].ammo ? unit.weapons[0].ammo : null}</div>
        {unit.canMove ? (
          <div onClick={this.props.toggleUnitMove.bind(null, unit)}> Move Unit </div>
        ) : null}
        {unit.canAttack && unit.targetsInRange.length ? (
          <div onClick={this.props.toggleUnitAttack.bind(null, unit)}> Fire </div>
        ) : null}
        {this.props.movingUnit ? <div>to...</div> : null}
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
)(UnitIntel);