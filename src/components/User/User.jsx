import React from "react";
import { Link } from "react-router-dom";

function User({ user }) {
  const { username, firstName, lastName, profileImg } = user;
  return (
    <Link to={`/profile/${username}`} className="profile-info btn-link">
      <div className="avatar avatar-sm m-1 profile-avatar">
        <img
          src={profileImg}
          alt="avatar"
          className="img-responsive img-round"
        />
      </div>
      <div className="profile-name">
        <p>{`${firstName} ${lastName}`}</p>
        <small className="text-gray">@{username}</small>
      </div>
    </Link>
  );
}

export default User;
