import React, { useState } from "react";
import { createPost } from "../../features";
import { useDispatch, useSelector } from "react-redux";
import "./NewPost.css";

function NewPost() {
  const [postTxt, setPostTxt] = useState("");
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const createPostHandler = async () => {
    if (postTxt) {
      const postData = {
        content: postTxt,
      };
      const res = await dispatch(createPost({postData}));
      setPostTxt("");
      console.log(res);
    }
  };

  // console.log(posts);

  return (
    <div className="card posts-new p-1">
      <div className="avatar avatar-sm m-1 profile-avatar">
        <img
          src="https://i.pravatar.cc/500"
          alt="avatar"
          className="img-responsive img-round"
        />
      </div>
      <div className="posts-new-input">
        <textarea
          type="text"
          className="input-textbox p-1 input-post"
          value={postTxt}
          onChange={(event) => setPostTxt(event.target.value)}
          placeholder="Enter something..."
        ></textarea>
        <div className="posts-new-options">
          <div className="posts-new-option">
            <div className="icon center-div">
              <i className="fas fa-image"></i>
            </div>
            <div className="icon center-div">
              <i className="fas fa-smile"></i>
            </div>
          </div>
          <div className="create-posts">
            <button className="btn btn-primary" onClick={createPostHandler}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
