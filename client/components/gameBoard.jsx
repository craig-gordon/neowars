import React from 'react';
import BoardSpace from './BoardSpace.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.props.currentBoard.length > 0 ? this.props.currentBoard : this.props.displayBoard
    };
  }

  render() {
    return (
      <div className="board">
        <table>
          <tbody>
            {this.state.board ? this.state.board.map((row, x) => {
              return <tr className='row' key={x}>{row.map((space, y) => {
                return (
                  <BoardSpace
                    display={!!this.props.displayBoard}
                    key={y}
                    space={space}
                    clickedSpace={this.props.clickedSpace || null}
                    clickedUnit={this.props.clickedUnit || null}
                    movingUnit={this.props.movingUnit || null}
                    attackingUnit={this.props.attackingUnit || null}
                    toggleSpaceIntel={this.props.toggleSpaceIntel || null}
                    toggleUnitMove={this.props.toggleUnitMove || null}
                    toggleUnitAttack={this.props.toggleUnitAttack || null}
                  />
                )
              })}</tr>
            }) : null}
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