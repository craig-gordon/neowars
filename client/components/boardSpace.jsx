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
    let unit = this.props.units.filter(unit => unit.position === this.props.space.position);
    return (
      <td className={`${this.props.space.terrain}_${this.props.space.country}`} onClick={() => {
        if (this.props.readyToMove) {
          if (Math.abs(this.props.clickedSpace[0] - this.props.space.position[0]) + Math.abs(this.props.clickedSpace[1] - this.props.space.position[1]) <= 3) {
            this.props.moveUnit(this.props.clickedSpace, this.props.space.position);
            this.props.toggleUnitMove();
          }
        }
        this.props.toggleSpaceIntel(this.props.space.position);
      }}>
        {unit.length ? <img src={`assets/${unit[0].type}_${unit[0].country}.png`} /> : null}
      </td>
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

export default connect(withRouter(
  mapStateToProps,
  mapDispatchToProps
))(BoardSpace);