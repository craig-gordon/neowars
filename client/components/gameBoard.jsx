class GameBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <tbody>
          {this.props.board.map((row, x) => {
            return <tr key={x}>{row.map((terrainType, y) => {
              return <BoardSpace key={y} space={new setTerrain[terrainType](x, y)} />
            })}</tr>
          })}
        </tbody>
      </table>
    )
  }
}