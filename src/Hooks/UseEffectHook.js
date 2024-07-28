import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCounter] = useState(0);
  useEffect(() => {
    console.log("Count Value from UseEffect Hook::", count);
  }, [count]);
  return (
    <div className="text-center p-4">
      <p>UseEffect Hook</p>
      <small>
        <strong>Note:</strong> Open console to view the o/p
      </small>
      <p>{count}</p>
      <button
        onClick={() => setCounter(count + 1)}
        className="btn btn-warning rounded-0"
      >
        Click Me!
      </button>
    </div>
  );
};

export default UseEffectHook;
