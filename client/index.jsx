class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'landingPage'
    };
    this.createNewGame = this.createNewGame.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  createNewGame() {
    this.setState({currentView: 'createNewGame'});
  }

  startGame() {
    this.setState({currentView: 'gameInSession'});
  }

  render() {
    return (
      <div>
        <h1>Neo Wars</h1>
        {this.state.currentView === 'landingPage' && <LandingPage createNewGame={this.createNewGame} />}
        {this.state.currentView === 'createNewGame' && <CreateNewGame startGame={this.startGame} />}
        {this.state.currentView === 'gameInSession' && <CurrentGame />}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));