class CountriesIntel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.countries.map((country, i) => <div key={i}>{country} {this.props.currentTurn === country ? 'Current Turn' : null}</div>)}
      </div>
    )
  }
}