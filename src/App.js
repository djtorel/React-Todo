import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      newTodo: '',
    };
  }

  changeNewTodo = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  render() {
    const {
      state: { todoList, newTodo },
      changeNewTodo,
    } = this;
    return (
      <div>
        <TodoList todoList={todoList} />
        <TodoForm value={newTodo} newTodoHandler={changeNewTodo} />
      </div>
    );
  }
}

export default App;
