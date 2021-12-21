import React, { useEffect, useState } from "react";
import axios from "axios";
function Userlist() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchUsers = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setUser(res.data);
        })
        .catch((e) => setError(e));
    };
    fetchUsers();
  }, []);
  //   Search functionality
  let searched = user.filter(({ name }) => {
    return name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {searched.map((user) => {
        return (
          <div>
            <p>{user.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Userlist;
