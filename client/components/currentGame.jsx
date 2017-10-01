class CurrentGame extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(this.props.changeCurrentTurn(this.props.countries[0].name));
  }

  render() {
    return (
      <div>
        <h3>{this.props.gameName}</h3>
        Map: {this.props.map}<br/>
        Day: {this.props.currentDay}<br/><br/>
        <GameBoard board={this.props.board} units={this.props.units} /><br/>
        <CountriesIntel countries={this.props.countries} currentTurn={this.props.currentTurn} />
      </div>
    )
  }
}