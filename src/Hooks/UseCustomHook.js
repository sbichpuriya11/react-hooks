import React, { useState } from "react";
import useCounterHook from "../UseCustomHookComponent/useCounterHook";

const UseCustomHook = () => {
  const [count, increment, decrement] = useCounterHook();
  return (
    <div className="text-center p-4">
      <p>UseCustom Hook</p>
      <p>{count}</p>
      <div className="d-flex justify-content-between">
        <button className="btn btn-info rounded-0 mx-1" onClick={decrement}>
          &#8722;&nbsp;Decrement
        </button>
        <button className="btn btn-warning rounded-0 mx-1" onClick={increment}>
          &#43;&nbsp;Increment
        </button>
      </div>
    </div>
  );
};

export default UseCustomHook;
