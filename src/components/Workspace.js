import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from './TodoList/TodoList';
import TodoListFooter from './TodoList/TodoListFooter'
import agent from '../agent';
import './Workspace.scss';

import {
  FETCH_ALL_TODOS,
  RECEIVE_ALL_TODOS,
  UPDATE_FIELD_NEW_TODO,
  FETCH_CREATE_TODO,
  RECEIVE_CREATE_TODO
} from '../actions/actionTypes';


import {
  createTodoAction,
  fetchTodosAction
} from '../actions/todoActions';

const mapStateToProps = state => ({ 
  todos: state.workspace.todos,
  newTodo: state.workspace.newTodo,
});

const mapDispatchToProps = dispatch => {
  return {
    onChangeNewTodo: value =>
      dispatch({type: UPDATE_FIELD_NEW_TODO, value }),
    onAddNewTodo: (value) =>
      dispatch(createTodoAction(value)),
    onLoad: _ => 
      dispatch(fetchTodosAction())
  }
}

class Workspace extends Component {
  constructor(){
    super();
    this.changeNewTodo = e => this.props.onChangeNewTodo(e.target.value);
    this.addNewTodo = e => this.props.onAddNewTodo(this.props.newTodo)
  } 

  componentDidMount(){
    this.props.onLoad(this.props.token);
  }

  render() {
    return (
      <div className="app">
        <div className="todo-list-input">
          <input 
            value={this.props.newTodo} 
            type="text"
            placeholder="What do you need to do?"
            onChange={this.changeNewTodo}
             />
          <button 
            onClick={this.addNewTodo}> 
            + 
          </button>
        </div>
        <TodoList />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);