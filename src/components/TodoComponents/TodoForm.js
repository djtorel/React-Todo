import React from 'react';
import styled from 'tachyons-components';

const TodoContainer = styled('div')`
  center
`;

const Title = styled('div')`
  flex justify-center items-center
  bg-near-black moon-gray br3
  br--top f2 avenir h3
`;

const InputContainer = styled('div')`
  flex justify-center h3
`;

const InputWrapper = styled('div')`
  pa1 w-100 h3 bg-dark-gray
`;

const AddTodoInput = styled('input')`
  input-reset w-100 bg-gray light-gray
  bn f3 pl2 h-100
`;

const AddTodoButton = styled('button')`
  f2 w3 light-gray bg-mid-gray bn
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
        <InputWrapper>
          <AddTodoInput
            onChange={newTodoHandler}
            type="text"
            name="newTodo"
            value={value}
            placeholder="Enter a todo"
          />
        </InputWrapper>
        <AddTodoButton onClick={todoListHandler}>+</AddTodoButton>
      </InputContainer>
      <TodoListContainer>{children}</TodoListContainer>
      <button onClick={clearTodoHandler}>Clear Completed</button>
    </form>
  </TodoContainer>
);

export default TodoForm;
