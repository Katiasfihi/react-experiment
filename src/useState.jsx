import React, { useState } from "react";

const Red = () => {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div>
      <h1 className={isRed ? "red" : ""}>change my color</h1>
      <button onClick={addOne}>Increment</button>
      <p>{count}</p>
    </div>
  );
};

export default Red;
