import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-[1560px] flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Crypto Screener
          </span>
        </Link>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="text-2xl flex gap-3">
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg px-3 "
            >
              <option selected value="INR">
                INR
              </option>
              <option value="USD">USD</option>
            </select>

            <button className="block bg-blue-600 py-2 px-5 text-white rounded-lg">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
