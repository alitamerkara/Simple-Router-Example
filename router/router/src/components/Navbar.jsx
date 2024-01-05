import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/history">History</NavLink>
      <NavLink to="/member">Member</NavLink>
    </nav>
  );
};

export default Navbar;
