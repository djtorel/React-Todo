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

  render() {
    const { todoList } = this.state;
    return (
      <div>
        <TodoList todoList={todoList} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
