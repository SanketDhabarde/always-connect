import React from "react";

function User({ user }) {
  const { username, firstName, lastName } = user;
  return (
    <div className="profile-info">
      <div className="avatar avatar-sm m-1 profile-avatar">
        <img
          src="https://i.pravatar.cc/500"
          alt="avatar"
          className="img-responsive img-round"
        />
      </div>
      <div className="profile-name">
        <p>{`${firstName} ${lastName}`}</p>
        <small className="text-gray">@{username}</small>
      </div>
    </div>
  );
}

export default User;
