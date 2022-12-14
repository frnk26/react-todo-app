import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ items, checkHandle, deleteHandle }) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          checkHandle={checkHandle}
          deleteHandle={deleteHandle}
        />
      ))}
    </ul>
  );
};

export default TodoList;
