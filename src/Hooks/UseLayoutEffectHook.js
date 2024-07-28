import React, { useLayoutEffect, useState } from "react";

const UseLayoutEffectHook = () => {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    if (count === 0) setCount(5 + Math.random() * 50);
  }, [count]);

  return (
    <div className="text-center p-4">
      <p>UseLayout Hook</p>
      <p>{count}</p>
      <button className="btn btn-warning rounded-0" onClick={() => setCount(0)}>
        Click Me!
      </button>
    </div>
  );
};

export default UseLayoutEffectHook;
