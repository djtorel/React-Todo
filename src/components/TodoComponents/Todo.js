import React from 'react';
import styled from 'tachyons-components';

const TodoContainer = styled('div')`
  flex justify-center items-center f2 h3 fs-normal sans-serif
  ${props => (props.index % 2 === 0 ? 'bg-gray' : 'bg-silver')}
`;

const Todo = ({
  todo: { task, id, completed },
  toggleCompletedHandler,
  index,
}) => (
  <TodoContainer
    index={index}
    onClick={() => toggleCompletedHandler(id)}
    style={completed === true ? { textDecoration: 'line-through' } : null}
  >
    {task}
  </TodoContainer>
);

export default Todo;
