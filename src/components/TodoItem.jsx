import React from 'react';
// import react icons
import { FaTrashAlt } from 'react-icons/fa';
const TodoItem = ({ item, checkHandle, deleteHandle }) => {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => checkHandle(item.id)}
        checked={item.checked}
      />
      <label htmlFor="">{item.item}</label>
      <FaTrashAlt
        onClick={() => deleteHandle(item.id)}
        role="button"
        tabIndex="0"
      />
    </li>
  );
};

export default TodoItem;
