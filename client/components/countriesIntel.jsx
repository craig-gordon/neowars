class CountriesIntel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Country   Funds   Income
        {this.props.countries.map((country, i) => (
          <div key={i}>
            {country.name} {country.funds} {country.income} {this.props.currentTurn === country.name ? (<div onClick={this.props.changeCurrentTurn.bind(null, this.props.countries)}>End Turn</div>) : null}
          </div>
        ))}
      </div>
    )
  }
}