import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header-nav">
      <Link to='/home'><img src={logo} alt="" /></Link>
      <div>
        <Link to="/order">Order</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
