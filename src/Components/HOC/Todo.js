import React, { useEffect, useState } from "react";
import axios from "axios";
function Todo() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchTodos = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          setUser(res.data);
        })
        .catch((e) => setError(e));
    };
    fetchTodos();
  }, []);
  //   Search functionality
  let searched = user.filter(({ title }) => {
    return title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {searched.slice(0,10).map((todo) => {
        return (
          <div key={todo.id}>
            <p>{todo.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
