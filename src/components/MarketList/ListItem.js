import React, { useState } from "react";
import noop from "utils/noop";

function ListItem({ picture, name, timeStamp, description }) {
  const [checked, checkedSet] = useState(false);

  const handleClickCheck = () => {
    checkedSet(!checked);
  };

  return (
    <li className="py-4" onClick={handleClickCheck}>
      <div className="flex space-x-3">
        <img className="h-6 w-6 rounded-full" src={picture} alt="" />
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">{name}</h3>
          </div>
          <p className="text-md text-gray-500 flex justify-between">
            {description}
          </p>
        </div>
        <input
          type="checkbox"
          className="form-checkbox h-7 w-7"
          onChange={noop}
          checked={checked}
        />
      </div>
    </li>
  );
}

export default ListItem;
