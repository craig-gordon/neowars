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
        <GameBoard board={this.props.board} />
      </div>
    )
  }
}