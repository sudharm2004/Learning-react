import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpeg";

const Header = () => {
  return (
    <header className=" flex items-center justify-between bg-slate-900 text-white">
      <img src={logo} alt="Logo" className="w-52" />
      <ul className="flex space-x-3 p-5">
        <Link to="/">
          <li className="rounded-md border-2 border-white p-1 hover:bg-white hover:text-black">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="rounded-md border-2 border-white p-1 hover:bg-white hover:text-black">
            About us
          </li>
        </Link>
        <Link to="/instamart">
          <li className="rounded-md border-2 border-white p-1 hover:bg-white hover:text-black">
            Instamart
          </li>
        </Link>
        <li className="rounded-md border-2 border-white p-1 hover:bg-white hover:text-black">
          Contact us
        </li>
        <li className="rounded-md border-2 border-white p-1 hover:bg-white hover:text-black">
          Cart
        </li>
      </ul>
    </header>
  );
};

export default Header;
