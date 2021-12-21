import React from "react";
import Hoc from "./Hoc"
function Userlist({data}) {
 
  return (
    <div>
     
      {data.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Hoc(Userlist,'users');
