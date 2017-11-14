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
    let country = this.props.countries.filter(country => country.name === this.props.space.country)[0];
    let unit = this.props.units.filter(unit => unit.position === this.props.space.position);
    return (
      <div>

        {unit.length ? <UnitIntel
          unit={unit[0]}
          toggleUnitMove={this.props.toggleUnitMove}
          readyToMove={this.props.readyToMove}
        /> : null}

        Terrain: {this.props.space.terrain}<br/>

        Defense: {this.props.space.defense}<br/>

        {this.props.space.country ? `Owner: ${this.props.space.country}` : null}<br/>

        {this.props.space.canBuild && this.props.currentTurn === this.props.space.country && unit.length === 0 ?
          (<ul>
            {this.props.space.canBuild.map((unitTuple, i) => (
              unitTuple[1] <= country.funds ? 
                <li
                  key={i}
                  onClick={() => {
                    this.props.buildUnit.call(null, unitTuple[0], this.props.space.country, this.props.space.position);
                    this.props.decrementFunds.call(null, country.name, unitTuple[1]);
                  }}
                >
                  {unitTuple[0]} | {unitTuple[1]}
                </li>
              : null
            ))}
          </ul>)
        : null}
        
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