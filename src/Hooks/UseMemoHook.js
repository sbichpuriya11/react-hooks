import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [isClick, setIsClick] = useState(true);

  const handleCounter = () => {
    setCount(count + 1);
  };

  const waitTimer = (num) => {
    for (let i = 0; i < 10e8; i++) {}
    return num;
  };

  const value = useMemo(() => {
    return waitTimer(count);
  }, [count]);

  return (
    <div className="text-center p-4">
      <p>UseMemo Hook</p>
      <p>{value}</p>
      <button
        className="btn btn-warning rounded-0 mx-2"
        onClick={handleCounter}
      >
        Click Me!
      </button>
      <button
        className="btn btn-info rounded-0 mx-2"
        onClick={() => setIsClick(!isClick)}
      >
        {isClick ? <>Hide Me &#128065;</> : <>Show Me </>}
      </button>
    </div>
  );
};

export default UseMemoHook;
