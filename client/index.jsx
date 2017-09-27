class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'landingPage',
      board: [[0, 1, 2, 3, 4], [1, 2, 3, 4, 5], [2, 3, 4, 5, 6], [3, 4, 5, 6, 7], [4, 5, 6, 7, 8]],
      gameName: null,
      map: null
    };
    this.createNewGame = this.createNewGame.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  createNewGame() {
    this.setState({currentView: 'createNewGame'});
  }

  startGame(gameName, map) {
    this.setState({currentView: 'gameInSession', gameName, map});
  }

  render() {
    return (
      <div>
        <h1>Neo Wars</h1>
        {this.state.currentView === 'landingPage' && <LandingPage createNewGame={this.createNewGame} />}
        {this.state.currentView === 'createNewGame' && <CreateNewGame setGameName={this.setgameName} setMap={this.setMap} startGame={this.startGame} />}
        {this.state.currentView === 'gameInSession' && <CurrentGame gameName={this.state.gameName} map={this.state.map} board={this.state.board}/>}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));