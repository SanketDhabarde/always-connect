import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Modal, NewPost } from "../../components";
import { useOnClickOutside, useToggle } from "../../hooks";
import "./Post.css";

function Post({ post }) {
  const { content, username, firstName, lastName, postImage } = post;
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isEditPostModal, toggleEditPostModal] = useToggle();
  const menuRef = useRef(null);
  useOnClickOutside(menuRef, () => setIsMenuVisible(false));
  const { user } = useSelector((state) => state.auth);

  const toggleMenuOptions = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  return (
    <div className="card post-card my-2 p-1">
      <div className="post-card-left">
        <div className="avatar avatar-sm m-1 profile-avatar">
          <img
            src="https://i.pravatar.cc/500"
            alt="avatar"
            className="img-responsive img-round"
          />
        </div>
      </div>
      <div className="post-card-right">
        <div className="post-header">
          <div className="user-name">
            <h4>{`${firstName} ${lastName}`}</h4>{" "}
            <small className="text-gray">@{username}</small>
          </div>
          {username === user.username && (
            <div className="post-menu" ref={menuRef}>
              <div className="icon center-div" onClick={toggleMenuOptions}>
                <i className="fas fa-ellipsis-v"></i>
              </div>
              {isMenuVisible && (
                <div className="card post-menu-options p-1">
                  <div
                    className="post-menu-option p-1"
                    onClick={toggleEditPostModal}
                  >
                    Edit
                  </div>
                </div>
              )}
              {isEditPostModal && (
                <Modal toggleModal={toggleEditPostModal}>
                  <NewPost
                    toggleModal={toggleEditPostModal}
                    singlePost={post}
                  />
                </Modal>
              )}
            </div>
          )}
        </div>
        <div className="post-content my-1">
          <p>{content}</p>
        </div>
        {postImage && (
          <div className="post-image">
            <img src={postImage} alt="post" className="img-responsive" />
          </div>
        )}
        <div className="post-options my-2">
          <div className="icon center-div">
            <i className="far fa-heart"></i>
          </div>
          <div className="icon center-div">
            <i className="far fa-comment-alt"></i>
          </div>
          <div className="icon center-div">
            <i className="fas fa-share-alt"></i>
          </div>
          <div className="icon center-div">
            <i className="far fa-bookmark"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
