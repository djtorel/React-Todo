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

  changeTodoList = e => {
    e.preventDefault();
    const { todoList, newTodo } = this.state;
    if (newTodo.length > 0) {
      const todo = { task: newTodo, completed: false, id: Date.now() };
      this.setState({
        todoList: [...todoList, todo],
        newTodo: '',
      });
    }
  };

  render() {
    const {
      state: { todoList, newTodo },
      changeNewTodo,
      changeTodoList,
    } = this;
    return (
      <div>
        <TodoList todoList={todoList} />
        <TodoForm
          value={newTodo}
          newTodoHandler={changeNewTodo}
          todoListHandler={changeTodoList}
        />
      </div>
    );
  }
}

// MVP day one completed
export default App;
