import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/classCounter";

function App() {
  const [likes, setLikes] = useState(5);
  const [value, setValue] = useState('Text in the Input');
  
  

  return (
    <div className="App">
      <ClassCounter/>
    </div>
  );
}

export default App;
