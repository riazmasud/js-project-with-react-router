import { useState, useEffect } from "react";

const STORAGE_KEY = "js-project-with-react-router:todos";

const TodoLocalStorage = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);
  const addInput = (e) => {
    setInput(e.target.value);
  };
  const addItem = () => {
    if (!input.trim()) return;
    setItems([...items, input]);
    setInput("");
  };

  const deleteItem = (indexToDelete) => {
    setItems(
      items.filter(
        (item, indexInTheItemArray) => indexInTheItemArray !== indexToDelete,
      ),
    );
  };

  return (
    <div>
      <h1>Todo</h1>
      <input
        placeholder="Add your task..."
        value={input}
        onChange={(e) => addInput(e)}
      />
      <button onClick={() => addItem()}>Add</button>
      <div>My Todos</div>
      <ul>
        {items.map((item, index) => {
          return (
            <>
              <li key={index}>{item}</li>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoLocalStorage;
