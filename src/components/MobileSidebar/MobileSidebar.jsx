import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthSlice } from "../../features";
import "./MobileSidebar.css";

function MobileSidebar() {
  const { user } = useAuthSlice();
  return (
    <div className="mobile-sidebar p-2">
      <NavLink to="/" className="center-div icon btn-link" title="Home">
        <i className="fas fa-home"></i>
      </NavLink>
      <NavLink
        to="/explore"
        className="center-div icon btn-link"
        title="Explore"
      >
        <i className="fas fa-hashtag"></i>
      </NavLink>
      <NavLink
        to="/bookmark"
        className="center-div icon btn-link"
        title="Bookmarks"
      >
        <i className="fas fa-bookmark"></i>
      </NavLink>
      <NavLink
        to={`/profile/${user.username}`}
        className="center-div icon btn-link"
        title="Profile"
      >
        <i className="fas fa-user"></i>
      </NavLink>
    </div>
  );
}

export default MobileSidebar;
