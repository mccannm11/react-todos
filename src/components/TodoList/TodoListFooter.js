import React from 'react';

const TodoListFooter = ({doneTodos, allTodos, handleFooterEvent}) => {
  return (
    <div className="todo-footer">
      <div className="stats">
        {doneTodos} of {allTodos} completed
      </div>

      <a 
      className="delete-completed" 
      data-action="delete-completed"
      onClick={handleFooterEvent}
      >
        delete completed
      </a>
    </div>
    )
}

export default TodoListFooter;