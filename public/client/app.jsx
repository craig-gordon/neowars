class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapList: [],
      board: null,
      gameName: null,
      map: null
    };
    this.getMapList = this.getMapList.bind(this);
    this.startGame = this.startGame.bind(this);
    this.assembleBoard = this.assembleBoard.bind(this);
  }

  getMapList() {
    axios.get('http://localhost:8000/maps')
      .then(res => {
        let mapList = res.data.map(map => map.name);
        console.log('mapList:', mapList);
        this.setState({mapList});
      })
      .catch(err => {
        console.log('Server error:', err);
      });
  }

  startGame(gameName, map) {
    axios.post('http://localhost:8000/board', {map})
      .then(res => {
        let board = this.assembleBoard(res.data);
        this.setState({
          board,
          gameName,
          map
        });
      });
  }

  assembleBoard(dbArray) {
    return dbArray.reduce((matrix, space) => {
      if (space.col_no === 0) {
        matrix[space.row_no] = [space.terrain];
      } else {
        matrix[space.row_no].push(space.terrain);
      }
      return matrix;
    }, []);
  }

  render() {
    return (
      <div>
        <Banner />
        <Main 
          mapList={this.state.mapList}
          gameName={this.state.gameName}
          map={this.state.map}
          board={this.state.board}
          getMapList={this.getMapList}
          startGame={this.startGame}
        />
      </div>
    )
  }
}