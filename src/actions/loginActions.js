import * as types from './actionTypes';
import agent from '../agent';

export const fetchRegister = (name, email, password) =>
  dispatch => {
    dispatch({ type: types.FETCH_REGISTER_USER })
    agent.Auth.register(name,email,password)
      .then(data => {
        dispatch({ type: types.RECEIVE_REGISTER_USER, data })
      })
  }

export const performLogin = (email, pass) => 
  dispatch => {
    dispatch({ type: types.FETCH_LOGIN })
    return (
      agent.Auth.login(email, pass)
      .then(data => {
        dispatch({ type: types.RECEIVE_LOGIN, data})
      })
    )
  }
