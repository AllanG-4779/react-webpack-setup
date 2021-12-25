import React, { useState } from "react";

const Parent = ({ value, ...props }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {props.render(counter)}
      <button onClick={() => setCounter((prev) => prev + value)}>
        Increment
      </button>
    </div>
  );
};

export default Parent;
