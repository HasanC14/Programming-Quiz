import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header p-6">
      <div className="flex justify-between lg:ml-40 lg:mr-40">
        <div className="logo lg:text-4xl md:text-3xl sm:text-xl">
          Programming QUIZ
        </div>
        <div className="link lg:text-2xl md:text-xl sm:text-lg">
          <NavLink to={"/"} className="hover:text-white hover:font-bold">
            Home
          </NavLink>
          <NavLink
            to={"/statistics"}
            className="ml-5 hover:text-white hover:font-bold"
          >
            Statistics
          </NavLink>
          <NavLink
            to={"/blog"}
            className="ml-5 hover:text-white hover:font-bold"
          >
            Blog
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
