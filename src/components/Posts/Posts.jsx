import React, { useEffect, useRef, useState } from "react";
import NewPost from "../NewPost/NewPost";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, Post } from "../../features";
import { useOnClickOutside } from "../../hooks";
import { sortPosts } from "../../features/Posts/utils";

const SORT_OPTIONS = [
  { _id: "1", icon: <i className="fas fa-arrow-up"></i>, title: "Latest" },
  { _id: "2", icon: <i className="fas fa-arrow-down"></i>, title: "Oldest" },
  { _id: "3", icon: <i className="fas fa-chart-line"></i>, title: "Trending" },
];

function Posts() {
  const { posts } = useSelector((state) => state.posts);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [sortBy, setSortBy] = useState("Latest");
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  useOnClickOutside(menuRef, () => setIsMenuVisible(false));

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const toggleMenuOptions = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  const sortedPosts = sortPosts(posts, sortBy);
  
  return (
    <div className="card container-card px-3">
      <NewPost />
      <div className="post-filters my-3">
        <h3>{sortBy} Posts</h3>

        <div className="post-menu posts-sort" ref={menuRef}>
          <div
            className="icon center-div"
            onClick={toggleMenuOptions}
            title="Sort posts"
          >
            <i className="fas fa-sort-amount-down"></i>
          </div>
          {isMenuVisible && (
            <div className="card post-menu-options p-1">
              {SORT_OPTIONS.map(({ _id, icon, title }) => (
                <div key={_id} onClick={toggleMenuOptions}>
                  <div
                    className={`post-menu-option p-1 post-menu-option-${
                      title === sortBy && "selected"
                    }`}
                    onClick={() => setSortBy(title)}
                  >
                    {icon}
                    {title}
                  </div>
                  {_id !== "3" && <hr className="separator" />}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="posts-listing">
        {sortedPosts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
