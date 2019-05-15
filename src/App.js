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
    let { todoList, newTodo } = this.state;
    newTodo = newTodo.trim();
    if (newTodo.length > 0) {
      const todo = { task: newTodo, completed: false, id: Date.now() };
      this.setState({
        todoList: [...todoList, todo],
      });
    }

    this.setState({
      newTodo: '',
    });
  };

  toggleCompleted = id => {
    const todoList = this.state.todoList.reduce(
      (acc, value) =>
        value.id !== id
          ? [...acc, value]
      toggleCompleted,
          : [...acc, { ...value, completed: !value.completed }],
      []
        <TodoList
          todoList={todoList}
          toggleCompletedHandler={toggleCompleted}
        />
    this.setState({ todoList });
  };

  clearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter(todo => !todo.completed),
    });
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

export default App;
