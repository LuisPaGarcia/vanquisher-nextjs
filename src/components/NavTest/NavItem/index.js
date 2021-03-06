import React from "react";
import noop from "utils/noop";

function NavItem({ children, href = "#", onClick }) {
  return (
    <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 cursor-pointer text-white">
      {children}
    </li>
  );
}

export default NavItem;
