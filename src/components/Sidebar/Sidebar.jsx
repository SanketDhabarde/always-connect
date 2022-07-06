import React from "react";
import Nav from "../Nav/Nav";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="card sidebar">
        <Nav link="/" linkName="Feed" icon={<i className="fas fa-home"></i>} />
        <Nav
          link="/explore"
          linkName="Explore"
          icon={<i className="fas fa-compass"></i>}
        />
        <Nav
          link="/bookmark"
          linkName="Bookmark"
          icon={<i className="fas fa-bookmark"></i>}
        />
        <Nav
          link="/profile"
          linkName="Profile"
          icon={<i class="fas fa-user"></i>}
        />
      </div>
      <div className="new-post-btn my-2">
        <button className="btn btn-primary btn-create">Create new post</button>
      </div>
    </div>
  );
}

export default Sidebar;
