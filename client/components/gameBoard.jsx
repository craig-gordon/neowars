import React from 'react';
import BoardSpace from './BoardSpace.jsx';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <tbody>
          {this.props.board.map((row, x) => {
            return <tr className='row' key={x}>{row.map((space, y) => {
              return (
                <BoardSpace
                  key={y}
                  space={space}
                  units={this.props.units}
                  clickedSpace={this.props.clickedSpace}
                  readyToMove={this.props.readyToMove}
                  moveUnit={this.props.moveUnit}
                  toggleSpaceIntel={this.props.toggleSpaceIntel}
                  toggleUnitMove={this.props.toggleUnitMove}
                />
              )
            })}</tr>
          })}
        </tbody>
      </table>
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
))(GameBoard);