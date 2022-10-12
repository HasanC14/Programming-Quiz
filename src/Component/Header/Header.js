import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header p-10">
      <div className="header-text">
        <p className="text-center md:text-6xl text-4xl font-bold text-white">
          Learn Programming with Fun Quiz
        </p>
        <p className="text-center md:text-4xl text-xl mt-6 text-white md:ml-10 md:mr-10 lg:ml-40 lg:mr-40 m-0">
          Get ready to practice on <span className="font-bold">1000+</span>{" "}
          questions. These quizzes will help you focus, identify gaps in
          knowledge, and build confidence.So, what are you waiting for?
        </p>
        <p className="text-center md:text-6xl text-4xl font-bold text-white mt-5">
          Let's Start
        </p>
      </div>
    </div>
  );
};

export default Header;
