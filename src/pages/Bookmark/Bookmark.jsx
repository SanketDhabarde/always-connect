import React from "react";
import { FollowCard, MobileSidebar, Sidebar, Spinner } from "../../components";
import { useDispatch } from "react-redux";
import { getBookMarkedPosts, Post, useUserSlice } from "../../features";
import { useTitle } from "../../hooks";
import { useEffect } from "react";

function Bookmark() {
  const { bookmarkedPosts, bookmarkedPostsLoading } = useUserSlice();
  const dispatch = useDispatch();
  useTitle("Bookmark");

  useEffect(() => {
    dispatch(getBookMarkedPosts());
  }, [dispatch]);

  return (
    <div className="container my-2">
      <Sidebar />
      <div className="card container-card px-3">
        {bookmarkedPostsLoading ? (
          <Spinner />
        ) : (
          <div className="posts-listing">
            {bookmarkedPosts.length > 0 ? (
              bookmarkedPosts?.map((post) => (
                <Post post={post} key={post._id} />
              ))
            ) : (
              <div className="center-div text-gray">
                You have no bookmarked posts
              </div>
            )}
          </div>
        )}
      </div>
      <FollowCard />
      <MobileSidebar />
    </div>
  );
}

export default Bookmark;
