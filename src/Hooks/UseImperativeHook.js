import React, { useRef, useState } from "react";
import Child from "../UseImperativeHookComponent/Child";

const UseImperativeHook = () => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  const handleCount = () => {
    ref.current.counterFunction();
    setCount(ref.current.value);
  };

  return (
    <div className="text-center p-4">
      <p>UseImperative Hook</p>
      <p>{count}</p>
      <button className="btn btn-warning rounded-0" onClick={handleCount}>
        Click Me!
      </button>
      <p></p>
      <Child ref={ref} />
    </div>
  );
};

export default UseImperativeHook;
