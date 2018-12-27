import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';

var TODOS = [
        {name: "testing 123", done: false },
        {name: "cook dinner", done: true },
        {name: "play trumpet", done: true}
]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newTodo: "",
      todos: TODOS
    }
  }

  handleAddTodo(event){
    let newArray = [...this.state.todos, {name: this.state.newTodo, done: false} ];
    this.setState({todos: newArray, newTodo: ""});
  }

  handleChangeInput(event){
    this.setState({newTodo: event.target.value})
  }

  handleTodoChecked(event){
    let index = event.target.getAttribute('data-index');
    let newTodos = this.state.todos.slice();
    newTodos[index].done = !newTodos[index].done;
    this.setState({todos: newTodos});
  }

  render() {
    return (
      <div className="app">
        <div className="todo-list-input">
          <input 
            value={this.state.newTodo} 
            onChange={this.handleChangeInput.bind(this)} 
            type="text" />
          <button 
            onClick={this.handleAddTodo.bind(this)}> 
            Add 
          </button>
        </div>
        <TodoList todos={this.state.todos} handleTodoChecked={this.handleTodoChecked.bind(this)}/>
      </div>
    );
  }
}

const TodoList = ({todos, handleTodoChecked}) => {
  return (      
    <div className="todo-list">
      <ul>
        {todos.map((todo, index) => {
          return (
            <Todo 
              key={index}
              index={index}
              todo={todo}
              handleTodoChecked={handleTodoChecked} 
            />
            )
        })}
      </ul>
    </div>
  )
}

const Todo = ({todo, handleTodoChecked, index}) => {
  return (
    <li className="todo-item">
      <div className="name">
        {todo.name}
      </div>
      <input 
        data-index={index} 
        onChange={handleTodoChecked} 
        type="checkbox" 
        checked={todo.done ? "checked" : ""} 
        />
    </li>
    )
}

export default App;
