import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('/maps')
      .then(res => {
        let mapList = res.data.map(map => map.name);
        this.props.actions.populateMapList(mapList);
      })
      .catch(err => {
        console.log('Server error:', err);
      });
  }

  render() {
    return (
      <div>
        <Link to='/new'>
          <button onClick={this.props.getMapList}>
            Create New Game
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
)(LandingPage);