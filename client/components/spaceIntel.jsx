import React from 'react';
import UnitIntel from './UnitIntel.jsx';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

class SpaceIntel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let space = this.props.space;
    let spaceOwner = this.props.countries.filter(country => country.name === space.countryName)[0];
    let unit = this.props.units.filter(unit => unit.position === space.position)[0];
    return (
      <div>

        {unit ? <UnitIntel
          unit={unit}
          toggleUnitMove={this.props.toggleUnitMove}
          toggleUnitAttack={this.props.toggleUnitAttack}
          movingUnit={this.props.movingUnit}
        /> : null}

        Terrain: {space.terrain}<br/>
        Defense: {space.defense}<br/>

        {space.countryName ? <div>Owner: {space.countryName}</div> : null}<br/>

        {space.canBuild && this.props.currentTurn === space.countryName ?
          (<div>

            {space.unitList.map((unit, i) => (
              unit.cost <= spaceOwner.funds ? (
                <div
                  key={i}
                  onClick={() => {
                    this.props.actions.buildUnit(unit.name, space.countryName, space.position);
                    this.props.actions.decrementFunds(space.countryName, unit.cost);
                    this.props.toggleSpaceIntel();
                  }}
                > {unit.name} | {unit.cost} </div>
              ) : null
            ))}

          </div>)
        :
          null}

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentTurn: state.currentTurn,
  countries: state.countries,
  units: state.units,
  router: state.router
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpaceIntel);