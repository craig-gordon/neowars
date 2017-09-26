class CurrentGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: 1,
      currentTurn: 'floria'
    };
  }

  render() {
    return (
      <div>
        Day: {this.state.currentDay}
        <GameBoard length={10}/>
      </div>
    )
  }
}