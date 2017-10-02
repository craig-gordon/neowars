class CurrentGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spaceInFocus: false,
      clickedSpace: [],
      readyToMove: false
    }
    this.toggleSpaceIntel = this.toggleSpaceIntel.bind(this);
    this.toggleUnitMove = this.toggleUnitMove.bind(this);
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
    if (position === this.state.clickedSpace || position === undefined) {
      this.setState({spaceInFocus: false, clickedSpace: []});
    } else {
      this.setState({spaceInFocus: true, clickedSpace: position});
    }
  }

  toggleUnitMove() {
    this.setState({readyToMove: !this.state.readyToMove});
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
        <div className='board'>
          <GameBoard
            board={this.props.board}
            units={this.props.units}
            clickedSpace={this.state.clickedSpace}
            readyToMove={this.state.readyToMove}
            moveUnit={this.props.moveUnit}
            toggleSpaceIntel={this.toggleSpaceIntel}
            toggleUnitMove={this.toggleUnitMove}
          />
        <div/>
        <div className='countries'>
          <CountriesIntel
            countries={this.props.countries}
            currentTurn={this.props.currentTurn}
            toggleSpaceIntel={this.toggleSpaceIntel}
            changeCurrentTurn={this.props.changeCurrentTurn}
            makeUnitsActive={this.props.makeUnitsActive}
            receiveIncome={this.props.receiveIncome}
          />
        <div/>
        {this.state.spaceInFocus ? <SpaceIntel
          currentTurn={this.props.currentTurn}
          countries={this.props.countries}
          units={this.props.units}
          position={this.state.clickedSpace}
          space={this.props.board[this.state.clickedSpace[0]][this.state.clickedSpace[1]]}
          readyToMove={this.state.readyToMove}
          toggleUnitMove={this.toggleUnitMove}
          buildUnit={this.props.buildUnit}
          decrementFunds={this.props.decrementFunds}
        /> : null}
      </div>
    )
  }
}