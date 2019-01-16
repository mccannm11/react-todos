import * as actions from '../actions/actionTypes.js';

export default (state = {}, action) => {
  switch (action.type) {
  case actions.FETCH_LOGIN:
    return { ...state, loading: true }
  case actions.RECEIVE_LOGIN:
    window.localStorage.setItem('token', action.data.token)
    return { ...state, auth: action.data.auth , loading: false }
  case actions.UPDATE_FIELD_AUTH:
    return { ...state, [action.key]: action.value };
  case actions.FETCH_REGISTER_USER:
    return state
  case actions.RECEIVE_REGISTER_USER:
    window.localStorage.setItem('token', action.data.token)
    return {...state, ...action.data }
  default:
    return state;
  }
}