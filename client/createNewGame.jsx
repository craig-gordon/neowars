class CreateNewGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: '',
      map: null
    }
    this.updateName = this.updateName.bind(this);
    this.updateMap = this.updateMap.bind(this);
  }

  updateName(e) {
    this.setState({gameName: e.target.value});
  }

  updateMap(e) {
    this.setState({map: e.target.value});
  }

  render() {
    return (
      <div>
        <h3>Create Game</h3>
        Game Name: <input type="text" value={this.state.gameName} onChange={this.updateName}></input><br/>
        Select Map: <select name="Map" onChange={this.props.updateMap}>
          <option>select...</option>
          <option>Sandalwood Plains</option>
          <option>Folzor's Tundra</option>
          <option>Relic</option>
        </select><br/>
        <br/><br/>
        <button onClick={this.props.startGame.bind(null, this.state.gameName, this.state.map)}>Start Game</button>
      </div>
    )
  }
}