class GameBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <tbody>
          {this.props.board.map((row, x) => {
            return <tr key={x}>{row.map((space, y) => {
              return (
                <BoardSpace
                  key={y}
                  space={space}
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