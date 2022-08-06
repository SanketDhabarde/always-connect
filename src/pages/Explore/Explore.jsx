import React from "react";
import { FollowCard, Sidebar } from "../../components";
import { Post, usePostsSlice } from "../../features";

function Explore() {
  const { posts } = usePostsSlice();
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
