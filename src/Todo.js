import React, { Component } from 'react';

const Todo = ({todo, handleTodoEvent, index}) => {
  return (
    <li 
      className={'todo-item ' + (todo.done ? 'done' : '') }
      data-index={index}
      onClick={handleTodoEvent}
      >
      <button 
        className="complete" 
        onClick={handleTodoEvent} 
        data-index={index}
        >
        <i className={ (todo.done ? "done" : "not-done") + " status-icon"}/>
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
        <i className="trash" />
      </button>
    </li>
    )
}

export default Todo;