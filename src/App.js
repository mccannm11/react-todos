import React, { Component } from 'react';
import TodoList from './TodoList.js';

import './App.scss';

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

  handleAddTodo(){
    let newTodo = this.state.newTodo;
    if (newTodo) {
      let newArray = [...this.state.todos, {name: newTodo, done: false} ];
      this.setState({todos: newArray, newTodo: ""});
    }
  }

  handleChangeInput(event){
    this.setState({newTodo: event.target.value})
  }

  handleOnKeyPress(event){
    if (event.key === 'Enter') {
      this.handleAddTodo();
    }
  }

  handleTodoEvent(event){
    event.stopPropagation();
    let action = event.target.getAttribute('data-action');
    let index = event.target.getAttribute('data-index');
    let newTodos = this.state.todos.slice();

    switch (action) {
      case "complete":
        newTodos[index].done = !newTodos[index].done;
        break;
      case "name":
        newTodos[index].name = newTodos[index].value;
        break;
      case "delete":
        newTodos.splice(index, 1)
        break;
    }
    this.setState({todos: newTodos});
  }

  render() {
    return (
      <div className="app">
        <div className="todo-list-input">
          <input 
            value={this.state.newTodo} 
            onChange={this.handleChangeInput.bind(this)} 
            onKeyPress={this.handleOnKeyPress.bind(this)}
            type="text"
            placeholder="What do you need to do?"
             />
          <button 
            onClick={this.handleAddTodo.bind(this)}> 
            + 
          </button>
        </div>
        <TodoList todos={this.state.todos} handleTodoEvent={this.handleTodoEvent.bind(this)}/>
      </div>
    );
  }
}

export default App;