import "../styles/trial.scss";
import React from "react";
import Userlist from "./HOC/Userlist";
import Todo from "./HOC/Todo";
const App = () =>{
    return (
      <div className="section">
        <div className="" >
          <Userlist />
        </div>
        <div><Todo/></div>
      </div>
    );
}

export default App;
