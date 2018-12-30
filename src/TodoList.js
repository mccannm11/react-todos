import React, { Component } from 'react';
import Todo from './Todo.js';

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

export default TodoList