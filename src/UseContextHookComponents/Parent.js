import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div className="d-flex justify-content-between">
      <p>Parent</p>
      <p>&rarr;</p>
      <Child />
    </div>
  );
};

export default Parent;
