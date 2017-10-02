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
            {country.name} {country.funds} {country.income} {this.props.currentTurn === country.name ? (<div onClick={() => {
              console.log(this.props.currentTurn);              
              this.props.changeCurrentTurn.call(null, this.props.countries);
              this.props.makeUnitsActive();
              setTimeout(() => {
                this.props.receiveIncome.call(null, this.props.currentTurn);
              }, 5);
            }}>End Turn</div>) : null}
          </div>
        ))}
      </div>
    )
  }
}