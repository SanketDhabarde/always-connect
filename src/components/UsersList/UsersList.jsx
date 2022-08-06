import React from "react";
import User from "../User/User";
import "./UsersList.css";

function UsersList({ userList, title, toggleModal }) {
  return (
    <div className="card users-card p-1">
      <h4>{title}</h4>
      {userList?.map((user) => (
        <div key={user._id} onClick={toggleModal}>
          <User user={user} />
          <hr className="separator" />
        </div>
      ))}
    </div>
  );
}

export default UsersList;
