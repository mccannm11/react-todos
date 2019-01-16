import * as actions from '../actions/actionTypes.js';

const defaultState = {
  todos: [],
  newTodo: ""
};

export default (state = defaultState, action) => {
  console.log("WORKSPACEREDUCER: ", action, state);

  switch (action.type) {

  case actions.FETCH_ALL_TODOS:
    return { ...state, loading: true }

  case actions.RECEIVE_ALL_TODOS:
    return { ...state, loading: false, todos: action.data }

  case actions.UPDATE_FIELD_NEW_TODO:
    return { ...state, newTodo: action.value }

  case actions.FETCH_CREATE_TODO:
    return { ...state, loading: true }

  case actions.RECEIVE_CREATE_TODO:
    return { ...state, todos: action.data }

  case actions.FETCH_DELETE_TODO:
    return state

  case actions.RECEIVE_DELETE_TODO:
    return { ...state, todos: action.data.todos }

  case actions.FETCH_EDIT_TODO:
    return state
 
  case actions.RECEIVE_EDIT_TODO:
    return { ...state, todos: action.data.todos }

  case actions.UPDATE_FIELD_EDIT_TODO:
    let updatedState = { ...state }
    updatedState.todos = state.todos.map(item => {
      if (item._id === action.id) {
        item.title = action.value
      }
      return item;
    });
    return updatedState

  case actions.FETCH_TOGGLE_TODO:
    return state

   case actions.RECEIVE_TOGGLE_TODO:
    return { ...state, todos: action.data.todos }

  default:
    return state;
  }
}