import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const { user } = useSelector((state) => state.auth);

  return (
    <header className="p-2">
      <div className="header-brand">
        <Link to="/" className="btn-link">
          AlwaysConnect
        </Link>
      </div>
      {user && (
        <div className="nav-right center-div">
          <Link to={`/profile/${user.username}`} className="avatar avatar-sm">
            <img
              src={user.profileImg}
              alt="avatar"
              className="img-responsive img-round"
            />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
