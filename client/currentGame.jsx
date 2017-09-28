class CurrentGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: 1,
      countries: ['Floria', 'Ranford'],
      currentTurn: 'Floria'
    };
  }

  render() {
    return (
      <div>
        <h3>{this.props.gameName}</h3>
        Map: {this.props.map}<br/>
        Day: {this.state.currentDay}<br/><br/>
        <GameBoard board={this.props.board} /><br/>
        <CountriesIntel countries={this.state.countries} currentTurn={this.state.currentTurn} />
      </div>
    )
  }
}