import { useState, useEffect } from "react";
const TodoLocalStorage = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
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
