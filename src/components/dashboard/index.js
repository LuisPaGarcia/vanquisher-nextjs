import React, { useEffect, useContext, useState } from "react";
import useDocumentTitle from "utils/hooks/useDocumentTitle";
import useToggle from "utils/hooks/useToggle";
import { useFetchUser } from "utils/user";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import DashbordContext from "context";
import sidebarItems from "./sidebarConfig";
import Home from "./Home";
import Router from "./Router";
import { useRouter } from "next/router";

function Dashboard() {
  useDocumentTitle("Dashboard | Vanquisher");
  const [navBarMobileToggle, navBarMobileToggleSet] = useToggle(); // navbarMobile
  const [userDropdownToggle, userDropdownToggleSet] = useToggle(); // userDropdown
  const defaultItemSelected = sidebarItems.pages[0].text;
  const [menuSelection, menuSelectionSet] = useState(defaultItemSelected); // sideBarMenuSelection

  const { user, loading } = useFetchUser();
  const userImage = !loading && user && user.picture ? user.picture : null;
  const userName = !loading && user && user.name ? user.name : null;
  const dashboardContext = useContext(DashbordContext);
  const router = useRouter();
  const handleClickSidebarItems = (event) => {
    const id = event.target.id;
    menuSelectionSet(id);
    const path = sidebarItems.pages.find((item) => item.text === id).path;
    router.push(`/dashboard/?page=${path}`, undefined, { shallow: true });
  };

  useEffect(() => {
    console.log(dashboardContext);
    dashboardContext.fetch.data().then((data) => {
      console.log(data.data);
    });
  }, []);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div className="lg:hidden">
        <Transition
          show={navBarMobileToggle}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {(ref) => (
            <div className="fixed inset-0 flex z-40">
              <div ref={ref} className="fixed inset-0">
                <div
                  className="absolute inset-0 bg-gray-600 opacity-75"
                  aria-hidden="true"
                />
              </div>
              <Transition
                show={navBarMobileToggle}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                {(ref) => (
                  <div
                    ref={ref}
                    className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        onClick={navBarMobileToggleSet}
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      >
                        <span className="sr-only">Close sidebar</span>
                        {/* Heroicon name: outline/x */}
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex-shrink-0 flex items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                        alt="Easywire logo"
                      />
                    </div>
                    <nav
                      className="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto"
                      aria-label="Sidebar"
                    >
                      <div className="px-2 space-y-1">
                        {sidebarItems.pages.map((item) => (
                          <a
                            key={item.text}
                            id={item.text}
                            onClick={handleClickSidebarItems}
                            href="#"
                            className={`${
                              menuSelection === item.text
                                ? "bg-cyan-800 text-white"
                                : "text-cyan-100 hover:text-white hover:bg-cyan-600"
                            } group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md`}
                            aria-current="page"
                          >
                            {item.icon()}
                            {item.text}
                          </a>
                        ))}
                      </div>
                      <div className="mt-6 pt-6">
                        <div className="px-2 space-y-1">
                          <a
                            href="#"
                            className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                          >
                            {/* Heroicon name: outline/cog */}
                            <svg
                              className="mr-4 h-6 w-6 text-cyan-200 group-hover:text-cyan-200"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            Settings
                          </a>
                          <a
                            href="#"
                            className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                          >
                            {/* Heroicon name: outline/question-mark-circle */}
                            <svg
                              className="mr-4 h-6 w-6 text-cyan-300 group-hover:text-cyan-200"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            Help
                          </a>
                          <a
                            href="#"
                            className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                          >
                            {/* Heroicon name: outline/shield-check */}
                            <svg
                              className="mr-4 h-6 w-6 text-cyan-300 group-hover:text-cyan-200"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>
                            Privacy
                          </a>
                        </div>
                      </div>
                    </nav>
                  </div>
                )}
              </Transition>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          )}
        </Transition>
      </div>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                alt="Easywire logo"
              />
            </div>
            <nav
              className="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto"
              aria-label="Sidebar"
            >
              <div className="px-2 space-y-1">
                {sidebarItems.pages.map((item) => (
                  <a
                    href="#"
                    key={item.text}
                    aria-current={item.text}
                    id={item.text}
                    onClick={handleClickSidebarItems}
                    className={`${
                      menuSelection === item.text
                        ? "bg-cyan-800 text-white"
                        : "text-cyan-100 hover:text-white hover:bg-cyan-600"
                    } group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md`}
                  >
                    {item.icon()}
                    {item.text}
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-6">
                <div className="px-2 space-y-1">
                  <a
                    href="#"
                    className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                  >
                    {/* Heroicon name: outline/cog */}
                    <svg
                      className="mr-4 h-6 w-6 text-cyan-200"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Settings
                  </a>
                  <a
                    href="#"
                    className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                  >
                    {/* Heroicon name: outline/question-mark-circle */}
                    <svg
                      className="mr-4 h-6 w-6 text-cyan-200"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Help
                  </a>
                  <a
                    href="#"
                    className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                  >
                    {/* Heroicon name: outline/shield-check */}
                    <svg
                      className="mr-4 h-6 w-6 text-cyan-200"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Privacy
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-auto focus:outline-none" tabIndex={0}>
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
          <button
            onClick={navBarMobileToggleSet}
            className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            {/* Heroicon name: outline/menu-alt-1 */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          {/* Search bar */}
          <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <div className="flex-1 flex">
              <form className="w-full flex md:ml-0" action="#" method="GET">
                <label htmlFor="search_field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div
                    className="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                    aria-hidden="true"
                  >
                    {/* Heroicon name: solid/search */}
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="search_field"
                    name="search_field"
                    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                    placeholder="Search transactions"
                    type="search"
                  />
                </div>
              </form>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                <span className="sr-only">View notifications</span>
                {/* Heroicon name: outline/bell */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <div>
                  <button
                    className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50"
                    id="user-menu"
                    aria-haspopup="true"
                    onClick={userDropdownToggleSet}
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src={userImage}
                      alt={userName}
                    />
                    <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                      <span className="sr-only">Open user menu for </span>
                      {userName}
                    </span>
                    {/* Heroicon name: solid/chevron-down */}
                    <svg
                      className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <Transition
                  show={userDropdownToggle}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  {(ref) => (
                    <div
                      ref={ref}
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Settings
                      </a>
                      <Link href="/api/logout">
                        <a
                          // href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Logout
                        </a>
                      </Link>
                    </div>
                  )}
                </Transition>
              </div>
            </div>
          </div>
        </div>
        <Router>
          <Home page="home" userImage={userImage} userName={userName} />
          <h1>Hola</h1>
          <h1>Hola</h1>
        </Router>
      </div>
    </div>
  );
}

export default Dashboard;
