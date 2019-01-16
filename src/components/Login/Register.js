import React, { Component} from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import {
  FETCH_REGISTER_USER,
  RECEIVE_REGISTER_USER
} from '../../actions/actionTypes';




const fetchRegister = (name, email, password) =>
  dispatch => {
    dispatch({ type: FETCH_REGISTER_USER })
    agent.Auth.register(name,email,password)
      .then(data => {
        dispatch({ type: RECEIVE_REGISTER_USER, data })
      })
  }

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  onRegister: (name, email, password) =>
    dispatch(fetchRegister(name, email, password))
})


class Register extends Component {
  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleInputChange(event){
    let target = event.target;
    this.setState({[target.name]: target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onRegister(
      this.state.email, 
      this.state.password, 
      this.state.name
      );
  }

  render(){
    return (
        <div className="register-view">
          <form 
            onSubmit={this.handleSubmit.bind(this)}
            className="register-form">
            <input 
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleInputChange}
              />
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.handleInputChange}
              />
            <input
              type="text"
              name="password"
              placeholder="Password"
              onChange={this.handleInputChange}
              />
            <button 
              className="register-button"
              >
                Register
              </button>
          </form>
        </div>
        )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);