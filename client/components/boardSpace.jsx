import React from 'react';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

class BoardSpace extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let space = this.props.space;
    let occupyingUnit = this.props.units.filter(unit => unit.position === space.position)[0];
    let movingUnit = this.props.movingUnit;
    let clickedPos = this.props.clickedSpace.position;
    return (
      <td
        className={`${space.terrain}_${space.countryName}`}
        onClick={() => {
          if (this.props.movingUnit) {
            if (!occupyingUnit && Math.abs(clickedPos[0] - space.position[0]) + Math.abs(clickedPos[1] - space.position[1]) <= movingUnit.moveRange) {
              this.props.actions.moveUnit(clickedPos, space.position);
              this.props.toggleUnitMove();
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