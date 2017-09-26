class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: []
    }
    this.generateBoard = this.generateBoard.bind(this);
    this.renderBoard = this.renderBoard.bind(this);
  }

  generateBoard() {
    let board = [];
    for (var x = 0; x < 10; x++) {
      board[x] = [];
      for (var y = 0; y < 10; y++) {
        board[x][y] = 'O';
      }
    }
    this.setState({board});
    console.log('this.state.board:', this.state.board);
  }

  renderBoard() {
    let htmlBoard = this.state.board.map(row => {
      return (<tr>
        {row.map(space => {
          return <td>{space}</td>
        })}
      </tr>)
    })
    console.log(htmlBoard);
  }

  componentDidMount() {
    setTimeout(this.generateBoard, 1);
    setTimeout(this.renderBoard, 5);
  }

  render() {
    return (
      <div>
        <table id="GameBoard">
        </table>
      </div>
    )
  }
}