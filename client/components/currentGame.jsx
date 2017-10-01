class CurrentGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spaceInFocus: false,
      clickedSpace: [0, 0]
    }
    this.toggleSpaceIntel = this.toggleSpaceIntel.bind(this);
  }

  componentDidMount() {
    store.dispatch(this.props.changeCurrentTurn(this.props.countries[0].name));
  }

  toggleSpaceIntel(position) {
    this.setState({spaceInFocus: true, clickedSpace: position});
    console.log(this.props.board[this.state.clickedSpace[0]][this.state.clickedSpace[1]]);
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h3>{this.props.gameName}</h3>
        Map: {this.props.map}<br/>
        Day: {this.props.day}<br/><br/>
        <GameBoard
          board={this.props.board}
          units={this.props.units}
          toggleSpaceIntel={this.toggleSpaceIntel}
        /><br/>
        <CountriesIntel
          countries={this.props.countries}
          currentTurn={this.props.currentTurn}
        /><br/>
        {this.state.spaceInFocus ? <SpaceIntel
          position={this.state.clickedSpace}
          space={this.props.board[this.state.clickedSpace[0]][this.state.clickedSpace[1]]}
        /> : null}
      </div>
    )
  }
}