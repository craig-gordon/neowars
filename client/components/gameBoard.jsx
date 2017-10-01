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
              return <BoardSpace key={y} terrain={space} position={[x, y]} />
            })}</tr>
          })}
        </tbody>
      </table>
    )
  }
}