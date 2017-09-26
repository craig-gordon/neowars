class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.createNewGame}>Create New Game</button>
      </div>
    )
  }
}