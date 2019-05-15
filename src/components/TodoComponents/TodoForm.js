import React from 'react';

const TodoForm = ({ value, newTodoHandler, todoListHandler }) => (
  <form onSubmit={todoListHandler}>
    <input
      onChange={newTodoHandler}
      type="text"
      name="newTodo"
      value={value}
      placeholder="Enter a todo"
    />
    <button onClick={todoListHandler}>Add Todo</button>
    <button>Clear Completed</button>
  </form>
);

export default TodoForm;
