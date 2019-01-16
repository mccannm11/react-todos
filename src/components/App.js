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
    return this.props.auth ? (<Workspace />) : (<LoginRegister/>) 
  }
}

const mapStateToProps = state => ({
    auth: state.auth.auth,
    token: state.auth.token
})

const mapDispatchToProps = dispatch => ({

})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
