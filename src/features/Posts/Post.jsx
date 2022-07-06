import React from "react";
import "./Post.css";

function Post({ post }) {
  const { content, username, firstName, lastName } = post;
  return (
    <div className="card post-card my-2 p-1">
      <div className="post-card-left">
        <div className="avatar avatar-sm m-1 profile-avatar">
          <img
            src="https://i.pravatar.cc/500"
            alt="avatar"
            className="img-responsive img-round"
          />
        </div>
      </div>
      <div className="post-card-right">
        <div className="post-header">
          <h4>{`${firstName} ${lastName}`}</h4>{" "}
          <small className="text-gray">@{username}</small>
        </div>
        <div className="post-content my-1">
          <p>{content}</p>
        </div>
        <div className="post-options my-2">
          <div className="icon center-div">
            <i className="far fa-heart"></i>
          </div>
          <div className="icon center-div">
            <i className="far fa-comment-alt"></i>
          </div>
          <div className="icon center-div">
            <i className="fas fa-share-alt"></i>
          </div>
          <div className="icon center-div">
            <i className="far fa-bookmark"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
