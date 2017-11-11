import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import setTerrain from '../gameData/terrainTypes';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

class CreateNewGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: '',
      map: null
    }
    this.updateName = this.updateName.bind(this);
    this.updateMap = this.updateMap.bind(this);
    this.setNameAndMap = this.setNameAndMap.bind(this);
    this.assembleBoard = this.assembleBoard.bind(this);
  }

  updateName(e) {
    this.setState({gameName: e.target.value});
  }

  updateMap(e) {
    this.setState({map: e.target.value});
  }

  setNameAndMap(gameName, map) {
    axios.post('/board', {map})
      .then(res => {
        let board = this.assembleBoard(res.data);
        this.props.actions.setGameName(gameName);
        this.props.actions.setMap(map);
        this.props.actions.setBoard(board);
      });
  }

  assembleBoard(dbArray) {
    return dbArray.reduce((matrix, space) => {
      if (space.col_no === 0) {
        matrix[space.row_no] = [new setTerrain[space.terrain](space.row_no, space.col_no, space.country)];
      } else {
        matrix[space.row_no].push(new setTerrain[space.terrain](space.row_no, space.col_no, space.country));
      }
      return matrix;
    }, []);
  }

  render() {
    return (
      <div>
      
        <h2> Create Game </h2>

        <div className='gameName'>Game Name:
          <input type="text" value={this.state.gameName} onChange={this.updateName}></input>
        </div>

        <div className='map'>Select Map:
          <select name="map" onChange={this.updateMap}>
            <option>select...</option>
            {this.props.mapList.map((map, i) => <option key={i}>{map}</option>)}
          </select>
        </div>

        <br/><br/>

        <Link to='/game'>
          <button onClick={this.setNameAndMap.bind(null, this.state.gameName, this.state.map)}>
            Start Game
          </button>
        </Link>

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewGame);