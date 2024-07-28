import React, { useContext } from "react";
import { CounterContext } from "../Hooks/UseContextHook";

const GrandChild = () => {
  const counter = useContext(CounterContext);
  return (
    <div>
      <p>GrandChild [{counter}]</p>
    </div>
  );
};

export default GrandChild;
