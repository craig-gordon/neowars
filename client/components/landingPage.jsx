import React from 'react';
import _ from 'lodash';
import axios from 'axios';
import { terrainTypes as Terrain } from '../gameData/terrainTypes';
import DisplayMap from './displayMap.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.setMap = this.setMap.bind(this);
  }

  componentDidMount() {
    axios.get('/maps')
      .then(res => {
        console.log('res:', res);
        this.props.actions.populateMapList(res.data);
        console.log('this.props.mapList:', this.props.mapList);
      })
      .catch(err => {
        console.log('Error retrieving map list from database:', err);
      });
  }

  setMap() {
    if (!this.props.selectedMap.hasOwnProperty('name')) return;
    let board = this.props.selectedMap.board;
    let constructedBoard = _.map(board, (row, x) => {
      return _.map(row, (space, y) => {
        return new Terrain[space.terrain](x, y, space.country);
      });
    });
    console.log('constructedBoard:', constructedBoard);
    this.props.actions.setCurrentMap(this.props.selectedMap);
    this.props.actions.setCurrentBoard(constructedBoard);
    this.props.history.push('/game');
    this.props.actions.setSelectedMap({});
  }

  render() {
    return (
      <div>
        <h3>Welcome to Neowars!</h3>
        <div className='tagline'>Neowars is a browser simulation <a className='wiki-link' href="https://en.wikipedia.org/wiki/Advance_Wars">Advance Wars</a>, a series
        of turn-based strategy games developed by Intelligent Systems and published by Nintendo.</div>
        <h4>Click to select a map</h4>
        <div className="map-grid">
          {_.map(this.props.mapList, (map) => (
            map.board
              ? <DisplayMap
                  key={map.name}
                  map={map}
                  setSelectedMap={this.props.actions.setSelectedMap}
                  selected={this.props.selectedMap.name === map.name}
                />
              : null
          ))}
        </div>
        <button
          className={this.props.selectedMap.hasOwnProperty('name') ? 'primary-button' : 'primary-button-disabled'}
          onClick={this.setMap}
        >
          Start Game
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  mapList: state.mapList,
  selectedMap: state.selectedMap,
  router: state.router
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);