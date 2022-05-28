import React, { useState } from "react";

const NavBar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
            href="/"
          >
            <span className="text-orange-500">{`INSTITUT NOUVELLES TECHNOLOGIES`}</span>{" "}
            <br />
            {"yassine cherni".toUpperCase()}
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block  lg:hidden outline-none focus:outline-none"
            onClick={() => setToggleNavbar(!toggleNavbar)}
          >
            <i className="text-white fas fa-bars"></i>
          </button>
        </div>
        <div
          className={`lg:flex flex-grow items-center  bg-white lg:bg-transparent lg:shadow-none ${
            toggleNavbar ? "block" : "hidden"
          } `}
          id="example-collapse-navbar"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {/**    <!-- Icon 1 -->*/}

            <li className="flex items-center">
              <a
                className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://www.facebook.com/"
                target={`_blank`}
              >
                <i className="text-orange-500 fab fa-facebook text-lg leading-lg"></i>
                <span className="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>
            {/**    <!-- Icon 2 -->*/}

            <li className="flex items-center">
              <a
                className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://twitter.com/?lang=en"
                target={"_blank"}
              >
                <i className="text-orange-500 fab fa-twitter text-lg leading-lg"></i>
                <span className="lg:hidden inline-block ml-2">Tweet</span>
              </a>
            </li>
            {/**    <!-- Icon 3 -->*/}

            <li className="flex items-center">
              <a
                className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://www.linkedin.com/"
                target={"_blank"}
              >
                <i className="text-orange-500 fab fa-linkedin text-lg leading-lg"></i>
                <span className="lg:hidden inline-block ml-2">Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
