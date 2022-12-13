import React from 'react';
// import react icons
import { FaTrashAlt } from 'react-icons/fa';
const TodoItem = (items) => {
  return (
    <div>
      {items.map((item) => (
        <li>
          <input type="checkbox" checked={item.checked} />
          <label htmlFor="">{item.item}</label>
          <FaTrashAlt role="button" tabIndex="0" />
        </li>
      ))}
    </div>
  );
};

export default TodoItem;
