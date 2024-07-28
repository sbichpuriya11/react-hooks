import React from "react";
import GrandChild from "./GrandChild";

const Child = () => {
  return (
    <div className="d-flex justify-content-between">
      <p>Child</p>
      <p>&rarr;</p>
      <GrandChild />
    </div>
  );
};

export default Child;
