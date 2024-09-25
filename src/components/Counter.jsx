import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countClickHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={countClickHandler}>Click me</button>
    </div>
  );
};

export default Counter;
