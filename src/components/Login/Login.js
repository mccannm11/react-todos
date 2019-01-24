import React, { Component } from 'react';
import fetchLogin from '../../actions/loginActions'
import { UPDATE_FIELD_AUTH, FETCH_LOGIN, RECEIVE_LOGIN } from '../../actions/actionTypes';
import { connect } from 'react-redux';
import agent from '../../agent';

import { performLogin } from '../../actions/loginActions';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => {
  return {
    onChangeEmail: value =>
      dispatch({type: UPDATE_FIELD_AUTH, key: 'email', value }),
    onChangePassword: value =>
      dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
    onSubmit: (email, pass) => 
      dispatch(performLogin(email, pass))
  }
}

class Login extends Component {
  constructor(){
    super();
    this.changeEmail = e => this.props.onChangeEmail(e.target.value);
    this.changePassword = e => this.props.onChangePassword(e.target.value);
    this.submitForm = ev => {
      ev.preventDefault();
      this.props.onSubmit(this.props.email, this.props.password);
    }
  }

  render(){
    return (
      <div className="login-view">
        <form onSubmit={this.submitForm} className="register-form">
          <input 
            type="text"
            name="email"
            value={this.props.email}
            placeholder="Email"
            onChange={this.changeEmail}
            />
          <input 
            type="text"
            name="password"
            value={this.props.password}
            placeholder="Password"
            onChange={this.changePassword}
            />
          <button
            className="register-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);