import React from 'react';

const Todo = ({ todo: { task } }) => (
  <div>
    <h2>{task}</h2>
  </div>
);

export default Todo;
