import "./styles.css";
import React, { useRef, useState } from "react";

export default function App() {
  function HOCRed(props) {
    return (
      <h2 style={{ backgroundColor: "red", width: 100 }}>
        Red
        <props.cmp />
      </h2>
    );
  }

  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>Update</button>
      </div>
    );
  }

  return (
    <div className="App">
      <HOCRed cmp={Counter} />
    </div>
  );
}
