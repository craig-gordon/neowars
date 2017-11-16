import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

class CountriesIntel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentTurn && nextProps.currentTurn !== this.props.currentTurn) {
      this.props.actions.receiveIncome(nextProps.currentTurn);
    }
  }

  render() {
    return (
      <div className="countriesIntel">
        <div className="countriesIntelTitleContainer">
          <div>
            Countries
          </div>
        </div>
        <div className="countriesIntelHeaders">
          <div className="countriesNameHeader">Country</div>
          <div className="countriesFundsHeader">Funds</div>
          <div className="countriesIncomeHeader">Income</div>
          <div className="countriesOptionsHeader">Options</div>
        </div>

        {this.props.countries.map((country, i) => (
          <div className={`country${i}Intel`} key={i}>
            <div className="countryName">
              <div>
                {country.name}
              </div>
            </div>
            <div className="countryFunds">
              <div>
                {country.funds}
              </div>
            </div>
            <div className="countryIncome">
              <div>
                {country.income}
              </div>
            </div>
            <div className="countryOptions">
              {this.props.currentTurn === country.name ? (
                <div className="endTurn" onClick={() => {
                  this.props.actions.changeCurrentTurn(this.props.countries);
                  this.props.actions.makeUnitsActive();
                  this.props.toggleSpaceIntel();
                }}> End Turn </div>
              ) : null}
            </div>
          </div>
        ))}

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentTurn: state.currentTurn,
  countries: state.countries,
  router: state.router
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesIntel);