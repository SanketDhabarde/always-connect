import React, { useEffect } from "react";
import { FollowCard, MobileSidebar, Sidebar, Spinner } from "../../components";
import { getPosts, Post, usePostsSlice } from "../../features";
import { useDispatch } from "react-redux";
import { useTitle } from "../../hooks";
import { sortPosts } from "../../features/Posts/utils";

function Explore() {
  const { posts, postLoading } = usePostsSlice();
  const dispatch = useDispatch();
  useTitle("Explore");

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const sortedPosts = sortPosts(posts, "latest");

  return (
    <div className="container my-2">
      <Sidebar />
      <div className="card container-card px-3">
        {postLoading ? (
          <Spinner />
        ) : (
          <div className="posts-listing">
            {sortedPosts?.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
        )}
      </div>
      <FollowCard />
      <MobileSidebar/>
    </div>
  );
}

export default Explore;
