import React, { useReducer } from "react";

const CounterReducer = (state = 0, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [count, dispatch] = useReducer(CounterReducer, 0);
  return (
    <div className="text-center p-4">
      <p>UseReducer Hook</p>
      <p>{count}</p>
      <div className="d-flex">
        <button
          className="btn btn-warning rounded-0 mx-2"
          onClick={() => dispatch("DECREMENT")}
        >
          &#8722;&nbsp;Decrement
        </button>
        <button
          className="btn btn-info rounded-0 mx-2"
          onClick={() => dispatch("INCREMENT")}
        >
          &#43;&nbsp;Increment
        </button>
      </div>
    </div>
  );
};

export default UseReducerHook;
