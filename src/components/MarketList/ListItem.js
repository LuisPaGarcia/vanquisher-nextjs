import React from "react";

function MarketList({ picture, name, timeStamp, description }) {
  return (
    <li className="py-4">
      <div className="flex space-x-3">
        <img className="h-6 w-6 rounded-full" src={picture} alt="" />
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">{name}</h3>
            <p className="text-sm text-gray-500">1h</p>
          </div>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </li>
  );
}

export default MarketList;
