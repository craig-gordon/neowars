import React from 'react';
import _ from 'lodash';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.getMapList = this.getMapList.bind(this);
  }

  getMapList() {
    axios.get('/maps')
      .then(res => {
        this.props.actions.populateMapList(res.data);
        this.props.history.push('/new');
      })
      .catch(err => {
        console.log('Error retrieving map list from database:', err);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.getMapList}>
          Create New Game
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  router: state.router
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);