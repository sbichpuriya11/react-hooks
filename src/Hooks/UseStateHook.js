import React, { useState } from "react";

const UseStateHook = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="text-center p-4">
      <p>UseState Hook</p>
      <p>{counter}</p>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-warning rounded-0"
      >
        Click Me!
      </button>
    </div>
  );
};

export default UseStateHook;
