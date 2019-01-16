import React, {Component} from 'react';
import Login from './Login';
import Register from './Register';

class LoginRegister extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: 'login'
    }
  }

  handleHeaderClick(event){
    let action = event.target.getAttribute('data-action');
    this.setState({view: action});
  }

  render(){
    return (
      <div className="login-register">
        <header className="login-register-header">
          <button 
            className="login-register-button"
            onClick={this.handleHeaderClick.bind(this)}
            data-action="login"
            >
            Login
          </button>
          <button 
            className="login-register-button"
            onClick={this.handleHeaderClick.bind(this)}
            data-action="register"
            >
            Register
          </button>
        </header>
        <div className="login-register-container">
          { this.state.view == 'login' && <Login /> }
          { this.state.view == 'register' && <Register /> }
        </div>
      </div>
      );
  }
}


export default LoginRegister;
