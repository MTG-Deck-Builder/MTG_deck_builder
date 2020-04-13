// Packages
import React from "react";
import { NavLink } from "react-router-dom";

// Modules
import "./navigation.scss";

const Navigation: React.FC = () => {
  return (
    <nav>
      <NavLink to="/" activeClassName="selected">
        Home
      </NavLink>
      <NavLink to="/dashboard" activeClassName="selected">
        Decks
      </NavLink>
    </nav>
  );
};

export default Navigation;
