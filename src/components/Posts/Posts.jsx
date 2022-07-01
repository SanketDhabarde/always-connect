import React from "react";
import NewPost from "../NewPost/NewPost";
import "./Posts.css";

function Posts() {
  return (
    <div className="card posts-feed p-3">
      <NewPost />
      <div className="posts-listing"></div>
    </div>
  );
}

export default Posts;
