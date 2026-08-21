import { useState, useEffect } from "react";

const AutoComplete = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSelect = (name) => {
    setInput(name);
    setData([]);
  };

  useEffect(() => {
    if (!input.trim()) {
      setData([]);
      return;
    }

    const timer = setTimeout(() => {
      const fetchUsers = async () => {
        try {
          setLoading(true);
          setError(null);
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
          );
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
          const userData = await response.json();
          const filtered = userData.filter((user) => {
            return user.name.toLowerCase().includes(input.toLowerCase());
          });
          setData(filtered);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchUsers();
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);
  return (
    <div>
      <h1>Auto Complete</h1>
      <div>
        <h2>Type your search</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <input value={input} onChange={(e) => handleInput(e)} />
        {!loading && !error && (
          <ul>
            {data.map((user) => {
              return (
                <li key={user.id} onClick={() => handleSelect(user.name)}>
                  {user.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
export default AutoComplete;
