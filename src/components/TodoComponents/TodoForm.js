import React from 'react';

const TodoForm = ({ value, handleInputChange }) => (
  <form>
    <input
      onChange={handleInputChange}
      type="text"
      name="newTodo"
      value={value}
      placeholder="Enter a todo"
    />
    <button>Add Todo</button>
    <button>Clear Completed</button>
  </form>
);

export default TodoForm;
