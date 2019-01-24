import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo.js';

import { 
  FETCH_DELETE_TODO,
  RECEIVE_DELETE_TODO,
  FETCH_EDIT_TODO,
  RECEIVE_EDIT_TODO,
  UPDATE_FIELD_EDIT_TODO,
  FETCH_TOGGLE_TODO,
  RECEIVE_TOGGLE_TODO
} from '../../actions/actionTypes';

import {
  fetchEditTodo,
  fetchToggleTodo,
  fetchDeleteTodo
} from '../../actions/todoActions';

const mapStateToProps = state => ({ 
  todos: state.workspace.todos
});

const mapDispatchToProps = dispatch => ({
    onBlurTodo: (id, title, completed) =>
      dispatch(fetchEditTodo(id, title, completed)),
    onToggleTodo: (id, title, completed) =>
      dispatch(fetchToggleTodo(id, title, completed)),
    onDeleteTodo: id =>
      dispatch(fetchDeleteTodo(id)),
    onChangeTodo: (id, title) =>
      dispatch({ type: UPDATE_FIELD_EDIT_TODO, id, title})  
})


class TodoList extends Component {
  constructor(props){
    super();
  }

  handleTodoEvent(event){
    let parentNode  = event.target.parentNode;
    let action      = event.target.getAttribute('data-action');
    let id          = parentNode.getAttribute('data-id');
    let completed   = parentNode.getAttribute('data-state') == 'completed';
    let value       = parentNode.getAttribute('data-value');

    switch (action) {
      case 'complete':
        this.props.onToggleTodo(id, value, !completed);   
      case 'rename':
        if (event.type === 'change'){
          this.props.onChangeTodo(id, event.target.value, completed);
        } else if (event.type === 'blur') {
          this.props.onBlurTodo(id, event.target.value, completed);
        }
        return
      case 'delete':
        this.props.onDeleteTodo(id);
    }
  }

  render(){
    return (
      <div className="todo-list">
        <ul>
          {this.props.todos.map( todo => {
            return (
              <Todo 
                data-id={todo._id}
                key={todo._id}
                todo={todo}
                handleTodoEvent={this.handleTodoEvent.bind(this)} />
              )
          })}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);