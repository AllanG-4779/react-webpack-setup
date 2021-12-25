import "./App.css";
import Parent from "./Components/Parent";

import Counter2 from "./Components/Counter2";
import Counter4 from "./Components/Counter4";

function App() {
  return (
    <div className="App">
      <Parent
        value={2}
        render={(counter) => {
          return <Counter2 counter={counter} />;
        }}
      />
      <Parent
        value={4}
        render={(counter) => {
          return <Counter4 counter={counter} />;
        }}
      />
    </div>
  );
}

export default App;
