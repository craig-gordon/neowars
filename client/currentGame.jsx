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
        <h3>{this.props.gameName}</h3>
        Map: {this.props.map}<br/>
        Day: {this.state.currentDay}<br/>
        <GameBoard board={this.props.board} />
      </div>
    )
  }
}