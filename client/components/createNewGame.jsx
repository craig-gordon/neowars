import React from 'react';
import _ from 'lodash';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { terrainTypes as Terrain } from '../gameData/terrainTypes';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

export class CreateNewGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: '',
      map: {}
    }
    this.updateTypedName = this.updateTypedName.bind(this);
    this.updateSelectedMap = this.updateSelectedMap.bind(this);
    this.setNameAndMap = this.setNameAndMap.bind(this);
    this.assembleBoard = this.assembleBoard.bind(this);
  }

  updateTypedName(e) {
    this.setState({gameName: e.target.value});
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
        this.props.actions.setCurrentGameName(gameName);
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
      
        <h2> Create Game </h2>

        <div className="gameName">
          <input
            type="text"
            placeholder="Enter game name"
            value={this.state.gameName}
            onChange={this.updateTypedName}
          ></input>
        </div>

        <div className="map">
          <select name="map" onChange={this.updateSelectedMap}>
            <option>Select Map...</option>
            {_.map(this.props.mapList, (map, i) => <option key={i}> {map.name} </option>)}
          </select>
        </div>

        <br/><br/>

        <button
          className="primaryButton"
          onClick={this.setNameAndMap.bind(null, this.state.gameName, this.state.map)}
        > Start Game </button>

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
)(CreateNewGame);