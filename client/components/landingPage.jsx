import React from 'react';
import _ from 'lodash';
import axios from 'axios';
import { terrainTypes as Terrain } from '../gameData/terrainTypes';
import GameBoard from './gameBoard.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: {}
    };
    this.updateSelectedMap = this.updateSelectedMap.bind(this);
    this.setNameAndMap = this.setNameAndMap.bind(this);
    this.assembleBoard = this.assembleBoard.bind(this);
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

  updateSelectedMap(e) {
    let map = _.filter(this.props.mapList, (map, i) => map.name === e.target.value)[0];
    this.setState({ map });
  }

  setNameAndMap(gameName, map) {
    axios.post('/board', {
      mapId: map.id
    })
      .then(res => {
        console.log('res.data:', res.data);
        let board = this.assembleBoard(res.data);
        this.props.actions.setCurrentMap(map);
        this.props.actions.setCurrentBoard(board);
        this.props.history.push('/game');
      })
      .catch(err => {
        console.log('Error fetching board data from database:', err);
      });
  }

  assembleBoard(spaces) {
    return _.reduce(spaces, (matrix, space) => {
      if (space.col === 0) {
        matrix[space.row] = [new Terrain[space.terrain](space.row, space.col, space.country)];
      } else {
        matrix[space.row].push(new Terrain[space.terrain](space.row, space.col, space.country));
      }
      return matrix;
    }, []);
  }

  render() {
    return (
      <div>
        <h3>Welcome to Neowars!</h3>
        <div>Neowars is a browser simulation <a className='wiki-link' href="https://en.wikipedia.org/wiki/Advance_Wars">Advance Wars</a>, a series
        of turn-based strategy games developed by Intelligent Systems and published by Nintendo.</div>
        <div className="map-grid">
          {_.map(this.props.mapList, (map) => map.board ? <GameBoard key={map.name} displayBoard={map.board} /> : null)}
        </div>
        <button
          className="primaryButton"
          onClick={this.setNameAndMap.bind(null, this.state.gameName, this.state.map)}
        >
          Start Game
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  mapList: state.mapList,
  router: state.router
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);