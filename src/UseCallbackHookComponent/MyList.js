import React, { memo } from "react";

const MyList = ({ handleListItem, itemList }) => {
  console.log(`🚀 MyList Component called 🚀`);
  return (
    <div>
      <button
        className="btn btn-warning rounded-0 mx-2"
        onClick={handleListItem}
      >
        Add Item
      </button>
      <div className="d-flex mt-2 mx-auto">
        {itemList.map((item, index) => {
          return (
            <p className="m-2" key={`${item} ${index}`}>
              {item}
            </p>
          );
        })}
      </div>
      <small>
        <strong>Note:</strong> Open console to see the output
      </small>
    </div>
  );
};

export default memo(MyList);
