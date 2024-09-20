import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarcontainer">
      <ul className="navbar">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/characters"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/episodes"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Episodes
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
