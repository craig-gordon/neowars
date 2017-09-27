class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'landingPage',
      mapList: null,
      board: null,
      gameName: null,
      map: null
    };
    this.createNewGame = this.createNewGame.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  createNewGame() {
    axios.get('http://localhost:8000/maps')
      .then(res => {
        let mapList = res.data.map(map => map.name);
        this.setState({
          currentView: 'createNewGame',
          mapList
        });
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
          currentView: 'gameInSession',
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
        <h1>Neo Wars</h1>
        {this.state.currentView === 'landingPage' && <LandingPage createNewGame={this.createNewGame} />}
        {this.state.currentView === 'createNewGame' && <CreateNewGame maps={this.state.mapList} setGameName={this.setgameName} setMap={this.setMap} startGame={this.startGame} />}
        {this.state.currentView === 'gameInSession' && <CurrentGame gameName={this.state.gameName} map={this.state.map} board={this.state.board}/>}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));