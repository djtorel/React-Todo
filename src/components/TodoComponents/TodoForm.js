import React from 'react';

const TodoForm = ({
  value,
  newTodoHandler,
  todoListHandler,
  clearTodoHandler,
}) => (
  <form onSubmit={todoListHandler}>
    <input
      onChange={newTodoHandler}
      type="text"
      name="newTodo"
      value={value}
      placeholder="Enter a todo"
    />
    <button onClick={todoListHandler}>Add Todo</button>
    <button onClick={clearTodoHandler}>Clear Completed</button>
  </form>
);

export default TodoForm;
