import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpeg";

const Header = () => {
  return (
    <header className="nav">
      <img src={logo} alt="Logo" className="nav-logo" />
      <ul className="nav-items">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About us</li>
        </Link>
        <Link to="/instamart">
          <li>instamart</li>
        </Link>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </header>
  );
};

export default Header;
