import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav({ link, icon, linkName }) {
  return (
    <NavLink to={link} className="nav m-1 p-1 border-s btn-link">
      <div className="link-icon">
        {icon}
      </div>
      <div className="link-name">{linkName
      }</div>
    </NavLink>
  );
}

export default Nav;
