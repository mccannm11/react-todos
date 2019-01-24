import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../actions/loginActions';
import { LOGIN } from '../actions/actionTypes';
import React, { Component } from 'react';
import Workspace from './Workspace.js';
import LoginRegister from './Login/LoginRegister.js';


class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const auth = this.props.auth;
    return auth ? (<Workspace />) : (<LoginRegister/>) 
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.auth,
    token: state.auth.token
  };
}

export default connect(
  mapStateToProps,
  _ => {}
)(App);