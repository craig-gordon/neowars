class CreateNewGame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Create Game</h3>
        Game Name: <input type="text"></input><br/>
        Select Map: <select name="Map">
          <option>select...</option>
          <option>Sandalwood Plains</option>
          <option>Folzor's Tundra</option>
          <option>Relic</option>
        </select><br/>
        Select Country: <select name="Country">
          <option>Floria</option>
          <option>Ranford</option>
        </select>
        <br/><br/>
        <button onClick={this.props.startGame}>Start Game</button>
      </div>
    )
  }
}