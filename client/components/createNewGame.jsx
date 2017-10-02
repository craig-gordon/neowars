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
        <h2>Create Game</h2>
        <div className='gameName'>Game Name: <input type="text" value={this.state.gameName} onChange={this.updateName}></input></div>
        <div className='map'>Select Map: <select name="map" onChange={this.updateMap}>
          <option>select...</option>
          {this.props.mapList.map((map, i) => <option key={i}>{map}</option>)}
        </select></div>
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