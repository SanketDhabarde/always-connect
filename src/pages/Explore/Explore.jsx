import React, { useEffect } from "react";
import { FollowCard, Sidebar } from "../../components";
import { getPosts, Post, usePostsSlice } from "../../features";
import { useDispatch } from "react-redux";

function Explore() {
  const { posts } = usePostsSlice();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="container my-2">
      <Sidebar />
      <div className="card container-card px-3">
        <div className="posts-listing">
          {posts?.map((post) => (
            <Post post={post} key={post._id} />
          ))}
        </div>
      </div>
      <FollowCard />
    </div>
  );
}

export default Explore;
