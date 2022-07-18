import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FollowCard, Sidebar } from "../../components";
import { Post } from "../../features";
import { useTitle } from "../../hooks";
import "./SinglePost.css";

function SinglePost() {
  const { posts } = useSelector((state) => state.posts);
  const { postId } = useParams();
  useTitle("Post");

  const selectedPost = posts.find((post) => post._id === postId);

  return (
    <div className="container">
      <Sidebar />
      <div className="card container-card single-post p-3">
        {selectedPost && <Post post={selectedPost} />}
      </div>
      <FollowCard />
    </div>
  );
}

export default SinglePost;
