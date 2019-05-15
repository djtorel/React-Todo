import React from 'react';

const Todo = ({ todo: { task, id, completed }, toggleCompletedHandler }) => (
  <div>
    <h2
      onClick={() => toggleCompletedHandler(id)}
      style={completed === true ? { textDecoration: 'line-through' } : null}
    >
      {task}
    </h2>
  </div>
);

export default Todo;
