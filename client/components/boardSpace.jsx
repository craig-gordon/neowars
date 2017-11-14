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
    let unit = this.props.units.filter(unit => unit.position === space.position);
    return (
      <td className={`${space.terrain}_${space.country}`} onClick={() => {
        if (this.props.readyToMove) {
          if (Math.abs(this.props.clickedSpace[0] - space.position[0]) + Math.abs(this.props.clickedSpace[1] - space.position[1]) <= 3) {
            this.props.actions.moveUnit(this.props.clickedSpace, space.position);
            this.props.toggleUnitMove();
          }
        }
        this.props.toggleSpaceIntel(space.position);
      }}>
        {unit.length ? <img src={`assets/images/${unit[0].type}_${unit[0].country}.png`} /> : null}
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