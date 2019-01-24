import React, { Component } from 'react';

const Todo = ({todo, handleTodoEvent}) => {
  return (
    <li 
      className={'todo-item ' + (todo.completed ? 'completed' : '') }
      data-state={(todo.completed ? 'completed' : '')}
      data-value={todo.title}
      data-id={todo._id}
      >
      <button 
        className="complete"
        data-action="complete"
        onClick={handleTodoEvent}
        data-id={todo._id}
        >
        <i className={ (todo.completed ? "completed" : "not-completed") + " status-icon"}/>
      </button>  
      <input
        className="title"
        data-action="rename"
        data-state={todo.completed}
        onClick={handleTodoEvent}
        onBlur={handleTodoEvent}
        onChange={handleTodoEvent}
        value={todo.title}
        data-id={todo._id}
      />
      <button
        className="delete"
        data-action="delete"
        onClick={handleTodoEvent} 
        data-id={todo._id}
        >
        <i className="trash" />
      </button>
    </li>
    )
}

export default Todo;