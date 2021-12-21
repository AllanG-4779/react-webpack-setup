import React from "react";
import Hoc from "./Hoc";

function Todo({data}) {
  
  return (
    <div>
     
      {data.slice(0,10).map((todo) => {
        return (
          <div key={todo.id}>
            <p>{todo.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Hoc(Todo,"todos");
