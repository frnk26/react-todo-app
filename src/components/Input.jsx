import React from 'react';
// import icons
import { FaPlus } from 'react-icons/fa';
const Input = ({ setNewItem, newItem, submitHandle }) => {
  return (
    <form onSubmit={submitHandle}>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" aria-label="add item">
        <FaPlus />
      </button>
    </form>
  );
};

export default Input;
