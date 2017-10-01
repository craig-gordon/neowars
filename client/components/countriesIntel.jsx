class CountriesIntel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.countries.map((country, i) => <div key={i}>{country.name} {this.props.currentTurn === country.name ? 'Current Turn' : null}</div>)}
      </div>
    )
  }
}