import React, { useCallback, useState } from "react";
import MyList from "../UseCallbackHookComponent/MyList";

const UseCallbackHook = () => {
  const [counter, setCounter] = useState(0);
  const [itemList, setItemList] = useState([0]);
  const handleListItem = useCallback(() => {
    let updatedList = [...itemList, Math.floor(Math.random() * 10) + 0];
    setItemList(updatedList.slice(-10));
  }, [itemList]);

  return (
    <div className="text-center p-4">
      <p>UseCallback Hook</p>
      <p>{counter}</p>
      <div>
        <button
          className="btn btn-warning rounded-0 mx-2"
          onClick={() => setCounter(counter + 1)}
        >
          Click Me!
        </button>
        <p></p>
        <MyList handleListItem={handleListItem} itemList={itemList} />
      </div>
    </div>
  );
};

export default UseCallbackHook;
