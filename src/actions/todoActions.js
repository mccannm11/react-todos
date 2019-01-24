import * as types from './actionTypes';
import agent from '../agent';

export const fetchEditTodo = (id, title, completed) =>
  dispatch => {
    dispatch({ type: types.FETCH_EDIT_TODO, id } )
      return (
        agent.Todos.updateTodo(id, title, completed)
          .then( data => {
            dispatch({ type: types.RECEIVE_EDIT_TODO , data })
          })
        )
  }

export const fetchToggleTodo = (id, title, completed) =>
  dispatch => {
    dispatch({ type: types.FETCH_TOGGLE_TODO, id } )
      return (
        agent.Todos.updateTodo(id, title, completed)
          .then( data => {
            dispatch({ type: types.RECEIVE_TOGGLE_TODO , data })
          })
        )
  }

export const fetchDeleteTodo = (id) =>
  dispatch => {
    dispatch({ type: types.FETCH_DELETE_TODO, id } )
      return (
        agent.Todos.deleteTodo(id)
          .then( data => {
            dispatch({ type: types.RECEIVE_DELETE_TODO , data })
          })
        )
  }