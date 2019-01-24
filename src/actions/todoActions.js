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

export const fetchTodosAction = _ => 
  dispatch => {
    dispatch({ type: types.FETCH_ALL_TODOS })
    return (
      agent.Todos.fetchAll()
        .then( data => dispatch({ type: types.RECEIVE_ALL_TODOS, data }))
    )
  }

export  const createTodoAction = (value) =>
  dispatch => {
    dispatch({ type: types.FETCH_CREATE_TODO })
    return (
      agent.Todos.createTodo(value)
        .then( data => dispatch({ type: types.RECEIVE_CREATE_TODO, data }))
      )
  }