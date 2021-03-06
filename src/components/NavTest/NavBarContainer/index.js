import React from "react";
import { useFetchUser } from "utils/user";

function NavTest({ children }) {
  const { user, loading } = useFetchUser();
  console.log({ user, loading });
  return (
    <header className="lg:px-16 px-6 bg-gray-900  flex flex-wrap items-center lg:py-0 py-2">
      <div className="flex-1 flex justify-between items-center">
        <a href="/" className="text-white text-2xl py-3">
          Vanquisher
        </a>
      </div>

      <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
        <svg
          className="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            {children}
          </ul>
        </nav>
        <a
          href="/"
          className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor"
        >
          <img
            className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400"
            src={user && user.picture && !loading ? user.picture : null}
            alt={user && user.name && !loading ? user.name : null}
          />
        </a>
      </div>
    </header>
  );
}

export default NavTest;
