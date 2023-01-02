import { useState } from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';
// import globalStyle
import GlobalStyle from './GlobalStyle';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('listTodos')) || []
  );
  // useState for new items
  const [newItem, setNewItem] = useState('');

  // even listners
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('listTodos', JSON.stringify(newItems));
  };
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };
  const checkHandle = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };
  const deleteHandle = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem(' ');
  };
  return (
    <div className="App">
      <GlobalStyle />
      <Input
        newItem={newItem}
        setNewItem={setNewItem}
        submitHandle={submitHandle}
      />
      <TodoList
        items={items}
        checkHandle={checkHandle}
        deleteHandle={deleteHandle}
      />
      <h2>wqepoiqweq</h2>
    </div>
  );
}

export default App;
