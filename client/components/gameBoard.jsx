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