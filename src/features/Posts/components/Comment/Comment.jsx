import React from "react";
import "./Comment.css";

function Comment({ comment }) {
  const { text, username } = comment;
  return (
    <div className="card post-card my-1 p-1 comment-card">
      <div className="post-card-left">
        <div className="avatar avatar-x-sm m-1 profile-avatar">
          <img
            src="https://i.pravatar.cc/500"
            alt="avatar"
            className="img-responsive img-round"
          />
        </div>
      </div>
      <div className="post-card-right">
        <div className="post-header">
          <div className="user-name">
            <h4>{username}</h4>
          </div>
        </div>
        <div className="post-content">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
