import React, { useEffect } from "react";
import NewPost from "../NewPost/NewPost";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, Post } from "../../features";

function Posts() {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  console.log(posts);
  return (
    <div className="card posts-feed p-3">
      <NewPost />
      <div className="post-filters my-1">
        <h3>Latest Posts</h3>
      </div>
      <div className="posts-listing">
        {posts.map((post) => (
          <Post post={post} key={post._id}/>
        ))}
      </div>
    </div>
  );
}

export default Posts;
