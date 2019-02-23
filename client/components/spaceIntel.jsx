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
    let spaceOwner = this.props.countries.filter(country => country.name === space.country)[0];
    let unit = this.props.units.filter(unit => unit.position === space.position)[0];
    return (
      <div>

        {unit ? <UnitIntel
          unit={unit}
          toggleUnitMove={this.props.toggleUnitMove}
          toggleUnitAttack={this.props.toggleUnitAttack}
          movingUnit={this.props.movingUnit}
        /> : null}

        <div className='space-intel-grid'>
          <div style={{gridColumn: 'span 2'}}>Terrain Info</div>
          <div>Terrain</div>
          <div>{space.terrain}</div>
          <div>Defense</div>
          <div>{space.defense}</div>
          {space.country ? <div>Owner</div> : null}
          {space.country ? <div>{space.country}</div> : null}
        </div>

        {space.canBuild && this.props.currentTurn === space.country ?
          (
            <div className='build-list-grid'>
              <div style={{gridColumn: 'span 2'}}>Build List</div>
              {space.unitList.map((unit, i) => (
                unit.cost <= spaceOwner.funds ? (
                  <React.Fragment key={i}>
                    <div
                      key={i}
                      onClick={() => {
                        this.props.actions.buildUnit(unit.name, space.country, space.position);
                        this.props.actions.decrementFunds(space.country, unit.cost);
                        this.props.toggleSpaceIntel();
                      }}
                    >
                      {unit.name}
                    </div>
                    <div>
                      {unit.cost}
                    </div>
                  </React.Fragment>
                ) : null
              ))}
            </div>
          )
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