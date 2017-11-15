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
      <div className="board">
        <table>
          <tbody>
            {this.props.currentBoard.map((row, x) => {
              return <tr className='row' key={x}>{row.map((space, y) => {
                return (
                  <BoardSpace
                    key={y}
                    space={space}
                    clickedSpace={this.props.clickedSpace}
                    clickedUnit={this.props.clickedUnit}
                    movingUnit={this.props.movingUnit}
                    attackingUnit={this.props.attackingUnit}
                    toggleSpaceIntel={this.props.toggleSpaceIntel}
                    toggleUnitMove={this.props.toggleUnitMove}
                    toggleUnitAttack={this.props.toggleUnitAttack}
                  />
                )
              })}</tr>
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentBoard: state.currentBoard,
  units: state.units,
  router: state.router
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);