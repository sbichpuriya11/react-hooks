import React, { forwardRef, useImperativeHandle, useState } from "react";

const Child = (props, ref) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => ({
    counterFunction: () => {
      setCount(count + 1);
    },
    value: () => count,
  }));

  return <div>Child Component</div>;
};

export default forwardRef(Child);
