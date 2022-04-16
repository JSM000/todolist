import React from "react";
import styled from "styled-components";
import Todoitem from "./Todoitem";
const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <Todoitem />
    </TodoListBlock>
  );
}

export default TodoList;
