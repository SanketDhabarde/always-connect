import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="p-2">
      <div className="header-brand">
        <Link to="/" className="btn-link">
          AlwaysConnect
        </Link>
      </div>

      <div className="nav-right center-div">
        <div className="avatar avatar-sm">
          <img
            src="https://i.pravatar.cc/500"
            alt="avatar"
            className="img-responsive img-round"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
