import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    inputRef.current.value = count;
    inputRef.current.style.textAlign = "center";
    inputRef.current.style.borderRadius = "2px";
    inputRef.current.style.border = "2px solid rgba(0,0,0,0.5)";
    inputRef.current.style.outline = "none";
  }, [count]);
  return (
    <div className="text-center p-4">
      <p>UseRef Hook</p>
      <input type="text" ref={inputRef} />
      <p></p>
      <button
        className="btn btn-warning rounded-0"
        onClick={() => setCount(count + 1)}
      >
        Click Me!
      </button>
    </div>
  );
};

export default UseRefHook;
