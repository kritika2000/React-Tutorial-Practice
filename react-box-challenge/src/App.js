import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import boxesArray from "./boxes";
import Box from "./components/Box";

function App() {
  const [boxes, setBoxes] = useState(boxesArray);

  function toggleColor(id) {
    console.log(id);
    setBoxes((prev) => {
      return prev.map((box) => (box.id === id ? { ...box, on: !box.on } : box));
    });
  }

  return (
    <div className="App">
      {boxes.map((box) => (
        <Box key={box.id} id={box.id} on={box.on} toggleColor={toggleColor} />
      ))}
    </div>
  );
}

export default App;
