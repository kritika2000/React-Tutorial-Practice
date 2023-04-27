import React, { useState } from "react";

function Box(props) {
  //   const [color, setColor] = useState(props.on ? "blue" : "white");
  const [state, setState] = useState({
    on: props.on,
  });
  const backgroundStyle = {
    backgroundColor: props.on ? "blue" : "white",
  };
  //   function toggleColor() {
  //     setState((prev) => ({
  //       ...prev,
  //       on: !prev.on,
  //     }));
  //   }
  return (
    <div
      className="box"
      style={backgroundStyle}
      onClick={() => props.toggleColor(props.id)}
    ></div>
  );
}

export default Box;
