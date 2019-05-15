import React from 'react';

import Todo from './Todo';

const renderTodos = todoList => {
  if (todoList.length > 0) {
    return todoList.map(todo => <Todo todo={todo} key={todo.id} />);
  } else {
    return <h2>There are no Todos, please enter one below!</h2>;
  }
};

const TodoList = ({ todoList }) => renderTodos(todoList);

export default TodoList;
