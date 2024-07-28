import React, { createContext, useState } from "react";
import Parent from "../UseContextHookComponents/Parent";

export const CounterContext = createContext(0);

const UseContextHook = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="text-center p-4">
      <CounterContext.Provider value={counter}>
        <p>UseContextHook</p>
        <p>{counter}</p>
        <button
          onClick={() => setCounter(counter + 1)}
          className="btn btn-warning rounded-0"
        >
          Click Me!
        </button>
        <p></p>
        <Parent />
      </CounterContext.Provider>
    </div>
  );
};

export default UseContextHook;
