import React from "react";
import NavItem from "./NavItem/index";
import NavBarContainer from "./NavBarContainer";
import Link from "next/link";

function NavTest() {
  return (
    <NavBarContainer>
      <NavItem>
        <Link
          href="/api/logout"
          className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 cursor-pointer text-white"
        >
          Logout
        </Link>
      </NavItem>
    </NavBarContainer>
  );
}

export default NavTest;
