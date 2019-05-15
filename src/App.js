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

  changeInput = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  render() {
    const {
      state: { todoList, newTodo },
      changeInput,
    } = this;
    return (
      <div>
        <TodoList todoList={todoList} />
        <TodoForm value={newTodo} handleInputChange={changeInput} />
      </div>
    );
  }
}

export default App;
