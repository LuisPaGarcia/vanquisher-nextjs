import React from "react";

function MarketList({ children }) {
  return (
    <div className="container px-4">
      <ul className="divide-y divide-gray-200">{children}</ul>
    </div>
  );
}

export default MarketList;
