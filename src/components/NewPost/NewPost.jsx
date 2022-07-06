import React from "react";
import "./NewPost.css";

function NewPost() {
  return (
    <div className="card posts-new p-1">
      <div class="avatar avatar-sm m-1 profile-avatar">
        <img
          src="https://i.pravatar.cc/500"
          alt="avatar"
          class="img-responsive img-round"
        />
      </div>
      <div className="posts-new-input">
        <textarea
          type="text"
          class="input-textbox p-1 input-post"
          placeholder="Enter something..."
        ></textarea>
        <div className="posts-new-options">
          <div className="posts-new-option">
            <div className="icon center-div">
              <i class="fas fa-image"></i>
            </div>
            <div className="icon center-div">
              <i class="fas fa-smile"></i>
            </div>
          </div>
          <div className="create-posts">
            <button className="btn btn-primary">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
