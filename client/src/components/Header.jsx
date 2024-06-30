import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-red-500 text-white ">
      <div className="flex justify-around  p-3 mx-auto">
      <div className="">
        <Link to="/">
          <h1>BLOODROP</h1>
        </Link>
      </div>
      <div>
      <ul className="flex ml-2-3 gap-6">
          <Link to="/home">
            <li>HOME</li>
          </Link>
          <Link to="/about  ">
            {" "}
            <li>ABOUT</li>
          </Link>
          <Link to="/login">
            {" "}
            <li>SIGNIN</li>
          </Link>
          <Link to="/register">
            {" "}
            <li>SIGNUP</li>
          </Link>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Header;
