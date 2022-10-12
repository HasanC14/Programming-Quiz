import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header p-10">
      <div className="header-text">
        <p className="text-center md:text-6xl text-4xl font-bold text-white">
          Learn Programming with Fun Quiz
        </p>
        <p className="text-center md:text-4xl text-xl mt-6 text-white">
          Practice on 1000+ <span className="font-bold">Questions</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
