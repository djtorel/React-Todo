import React from 'react';

import Todo from './Todo';

const TodoList = ({ todoList, toggleCompletedHandler }) =>
  todoList.length > 0 ? (
    todoList.map(todo => (
      <Todo
        todo={todo}
        key={todo.id}
        toggleCompletedHandler={toggleCompletedHandler}
      />
    ))
  ) : (
    <h2>There are no Todos, please enter one below!</h2>
  );

export default TodoList;
