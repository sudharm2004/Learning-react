import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpeg";
import { useSelector } from "react-redux";

const Header = () => {
  const items = useSelector((store) => store.cart.totalItems);
  return (
    <header className=" flex  w-full min-w-full items-center justify-between bg-slate-900 p-2 text-white">
      <img data-testid="header-logo" src={logo} alt="Logo" className="w-52" />
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
        <Link to="/contact">
          <li className="rounded-md border-2 border-white p-1 hover:bg-white hover:text-black">
            Contact us
          </li>
        </Link>
        <Link to="/cart">
          <li
            data-testid="cart-header"
            className="rounded-md border-2 border-white p-1 hover:bg-white hover:text-black"
          >
            Cart - {items}
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
