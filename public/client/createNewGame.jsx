const Link = ReactRouterDOM.Link;

class CreateNewGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: '',
      map: null
    }
    this.updateName = this.updateName.bind(this);
    this.updateMap = this.updateMap.bind(this);
    console.log('this.props:', this.props);
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
        Select Map: <select name="Map" onChange={this.updateMap}>
          <option>select...</option>
          {this.props.mapList.map((map, i) => <option key={i}>{map}</option>)}
        </select><br/>
        <br/><br/>
        <Link to='/game'>
          <button onClick={this.props.setNameAndMap.bind(null, this.state.gameName, this.state.map)}>
            Start Game
          </button>
        </Link>
      </div>
    )
  }
}