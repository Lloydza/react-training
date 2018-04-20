import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from '../../content/styles/components/home/index.css';

import { 
  changeRoute
} from '../../store/actions';

class Home extends Component {
  handleChangeRoute = (e) => {
    e.preventDefault();
    this.props.onchangeRoute("/other");
  }

  render() {
    return (
      <div className="home">
        <div>
          <h1>This is the Home Page.</h1>
        </div>
        <div className="button" onClick={this.handleChangeRoute}>Go to the other page</div>
      </div>
    );
  }
};

var mapStateToProps = function(state) {
  return {
  }
};

var mapDispatchToProps = (dispatch) => {
  return {
    onchangeRoute: (route) => {
      dispatch(changeRoute(route));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);