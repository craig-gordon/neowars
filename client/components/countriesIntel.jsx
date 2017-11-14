import React from 'react';

import { withRouter } from 'react-router-dom';
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
      <div className="countries">
        <div>
          Country   Funds   Income

          {this.props.countries.map((country, i) => (
            <div className={`country${i}`} key={i}>

              {country.name} {country.funds} {country.income} {this.props.currentTurn === country.name ? (

                <div onClick={() => {
                  this.props.actions.changeCurrentTurn(this.props.countries);
                  this.props.actions.makeUnitsActive();
                  this.props.toggleSpaceIntel();
                }}> End Turn </div>

              ) : null}

            </div>
          ))}

        </div>
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