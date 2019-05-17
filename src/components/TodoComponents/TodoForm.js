import React from 'react';
import styled from 'tachyons-components';

const TodoContainer = styled('div')`
  center
`;

const Title = styled('div')`
  flex justify-center items-center
  bg-near-black light-gray br3
  br--top f2 avenir h3
`;

const InputContainer = styled('div')`
  flex justify-center h3
`;

const AddTodoInput = styled('input')`
  input-reset w-100 bg-mid-gray light-gray
  bn f2 pl2
`;

const AddTodoButton = styled('button')`\
  f2 w3 light-gray bg-dark-gray bn
`;

const TodoListContainer = styled('div')`
  stripe-dark
`;

const TodoForm = ({
  children,
  value,
  newTodoHandler,
  todoListHandler,
  clearTodoHandler,
}) => (
  <TodoContainer>
    <Title>To-Do App</Title>
    <form onSubmit={todoListHandler}>
      <InputContainer>
        <AddTodoInput
          onChange={newTodoHandler}
          type="text"
          name="newTodo"
          value={value}
          placeholder="Enter a todo"
        />
        <AddTodoButton onClick={todoListHandler}>+</AddTodoButton>
      </InputContainer>
      <TodoListContainer>{children}</TodoListContainer>
      <button onClick={clearTodoHandler}>Clear Completed</button>
    </form>
  </TodoContainer>
);

export default TodoForm;
