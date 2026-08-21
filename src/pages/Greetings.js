import { useState } from "react";
const Greetings = () => {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <h1>Greetings</h1>
      <div>
        Name:
        <input
          placeholder="Enter your name..."
          value={input}
          onChange={(e) => handleInput(e)}
        />
      </div>
      <div>Hello, {input}</div>
    </div>
  );
};

export default Greetings;
