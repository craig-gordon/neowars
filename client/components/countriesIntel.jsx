import React from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

class CountriesIntel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Country   Funds   Income
        {this.props.countries.map((country, i) => (
          <div className={`country${i}`} key={i}>
            {country.name} {country.funds} {country.income} {this.props.currentTurn === country.name ? (<div onClick={() => {
              this.props.changeCurrentTurn(this.props.countries);
              this.props.makeUnitsActive();
              this.props.toggleSpaceIntel();
              setTimeout(() => {
                this.props.receiveIncome(this.props.currentTurn);
              }, 5);
            }}>End Turn</div>) : null}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  mapList: state.mapList,
  gameName: state.gameName,
  map: state.map,
  day: state.day,
  currentTurn: state.currentTurn,
  board: state.board,
  countries: state.countries,
  units: state.units,
  router: state.router
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(withRouter(
  mapStateToProps,
  mapDispatchToProps
))(CountriesIntel);