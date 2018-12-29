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
    let className = event.target.className;
    let index = event.target.getAttribute('data-index');
    let newTodos = this.state.todos.slice();

    if (className.includes('complete')){
      newTodos[index].done = !newTodos[index].done;
      
    } else if (className.includes('name')){
      newTodos[index].name = newTodos[index].value;
    
    } else if (className.includes('delete')){
      newTodos.splice(index, 1)

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

const TodoList = ({todos, handleTodoEvent}) => {
  return (      
    <div className="todo-list">
      <ul>
        {todos.map((todo, index) => {
          return (
            <Todo 
              key={index}
              index={index}
              todo={todo}
              handleTodoEvent={handleTodoEvent} 
            />
            )
        })}
      </ul>
    </div>
  )
}

const Todo = ({todo, handleTodoEvent, index}) => {
  return (
    <li 
      className={'todo-item ' + (todo.done ? 'done' : '') }
      data-index={index}
      onClick={handleTodoEvent}
      >
      <button
        data-index={index}
        className="complete"
        onClick={handleTodoEvent}
      >
        Complete
      </button>
      <input
        data-index={index}
        className="name"
        onClick={handleTodoEvent}
        value={todo.name}
      />
            
      <button
        data-index={index}
        className="delete"
        onClick={handleTodoEvent} 
        >
        Delete
      </button>
    </li>
    )
}

export default App;
