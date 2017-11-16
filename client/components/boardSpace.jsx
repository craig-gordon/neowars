import React from 'react';
import equal from 'deep-equal';
import { Link } from 'react-router-dom';
import { countTilesBetweenUnits, calculateDamage } from '../gameData/calculations';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

export class BoardSpace extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let space = this.props.space;
    let occupyingUnit = this.props.units.filter(unit => unit.position === space.position)[0];
    let movingUnit = this.props.movingUnit;
    let attackingUnit = this.props.attackingUnit;
    let clickedPosition = this.props.clickedSpace.position;
    return (
      <td
        className={`${space.terrain}_${space.countryName}`}
        onClick={() => {
          if (movingUnit) {
            if (!occupyingUnit && countTilesBetweenUnits(clickedPosition, space.position) <= movingUnit.moveRange) {
              this.props.actions.moveUnit(clickedPosition, space.position);
              this.props.actions.updateTargetsInRange(space.position);
              this.props.toggleUnitMove();
            }
          } else if (attackingUnit) {
            let occupyingInAttackRange = attackingUnit.targetsInRange.some(target => (
              equal(target.position, space.position)
            ));
            if (occupyingInAttackRange) {
              let damageValues = calculateDamage(attackingUnit, occupyingUnit, this.props.clickedSpace.defense, space.defense);
              this.props.actions.decrementHp(occupyingUnit.position, damageValues[0]);
              if (damageValues[1]) this.props.actions.decrementHp(attackingUnit.position, damageValues[1]);
              this.props.toggleUnitAttack();
            }
          }
          this.props.toggleSpaceIntel(space);
        }}
      >
        {occupyingUnit ? <img src={`assets/images/${occupyingUnit.type}_${occupyingUnit.countryName}.png`} /> : null}
      </td>
    )
  }
}

const mapStateToProps = (state) => ({
  units: state.units,
  router: state.router
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardSpace);