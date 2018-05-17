import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/membertable">
          Table
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/membercards">
          Cards
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/tabpanel">
          Tabs
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/grid">
          Kendo Grid
        </NavLink>
      </li>
    </ul>
  );
}

module.exports = Nav;
