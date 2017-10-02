class CurrentGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spaceInFocus: false,
      clickedSpace: [0, 0]
    }
    this.toggleSpaceIntel = this.toggleSpaceIntel.bind(this);
    this.calculateInitialIncome = this.calculateInitialIncome.bind(this);
  }

  componentDidMount() {
    this.props.incrementDay();
    this.props.changeCurrentTurn(this.props.countries);
    setTimeout(() => {
      this.props.countries.forEach((country, i) => {
        let amount = this.calculateInitialIncome(country.name);
        this.props.incrementIncome(i, amount);
      })
      this.props.receiveIncome(this.props.countries[0].name);
    }, 20);
  }

  toggleSpaceIntel(position) {
    this.setState({spaceInFocus: true, clickedSpace: position});
  }

  calculateInitialIncome(countryName) {
    return this.props.board.reduce((sum, row) => {
      return sum + row.reduce((total, space) => {
        return total + (space.country === countryName ? 1000 : 0);
      }, 0);
    }, 0);
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
          changeCurrentTurn={this.props.changeCurrentTurn}
          makeUnitsActive={this.props.makeUnitsActive}
          receiveIncome={this.props.receiveIncome}
        /><br/>
        {this.state.spaceInFocus ? <SpaceIntel
          countries={this.props.countries}
          units={this.props.units}
          position={this.state.clickedSpace}
          space={this.props.board[this.state.clickedSpace[0]][this.state.clickedSpace[1]]}
          buildUnit={this.props.buildUnit}
          decrementFunds={this.props.decrementFunds}
        /> : null}
      </div>
    )
  }
}