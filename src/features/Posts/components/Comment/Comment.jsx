import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useOnClickOutside, useToggle } from "../../../../hooks";
import { deleteComment, editComment } from "../../postsSlice";
import { getDate } from "../../utils";
import "./Comment.css";

function Comment({ comment, postId }) {
  const { _id, text, username, createdAt, profileImg } = comment;
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [newComment, setNewComment] = useState(text);
  const [isNewCommentVisible, toggleNewComment] = useToggle();
  const menuRef = useRef(null);
  useOnClickOutside(menuRef, () => setIsMenuVisible(false));

  const newCommentHandler = (event) => {
    setNewComment(event.target.value);
  };

  const editCommentHandler = (event) => {
    event.preventDefault();
    const payload = {
      postId,
      commentId: _id,
      commentData: {
        text: newComment,
      },
    };
    dispatch(editComment(payload));
    toggleNewComment();
  };

  const deleteCommentHandler = () => {
    const payload = {
      postId,
      commentId: _id,
    };
    dispatch(deleteComment(payload));
  };

  return (
    <div className="card post-card my-1 p-1 comment-card">
      <div className="post-card-left">
        <Link to={`/profile/${username}`}>
          <div className="avatar avatar-x-sm m-1 profile-avatar">
            <img
              src={profileImg}
              alt="avatar"
              className="img-responsive img-round"
            />
          </div>
        </Link>
      </div>
      <div className="post-card-right">
        <div className="post-header">
          <div className="user-name">
            <h4>{username}</h4>
            <small className="text-gray">{getDate(createdAt)}</small>
          </div>
          {username === user.username && (
            <div className="post-menu" ref={menuRef}>
              <div
                className="icon center-div"
                title="More"
                onClick={() => setIsMenuVisible((prevState) => !prevState)}
              >
                <i className="fas fa-ellipsis-h"></i>
              </div>
              {isMenuVisible && (
                <div
                  className="card post-menu-options p-1"
                  onClick={() => setIsMenuVisible(false)}
                >
                  <div
                    className="post-menu-option p-1"
                    onClick={toggleNewComment}
                  >
                    <i className="fas fa-edit"></i>
                    Edit
                  </div>
                  <hr className="separator" />
                  <div
                    className="post-menu-option p-1"
                    onClick={deleteCommentHandler}
                  >
                    <i className="fas fa-trash"></i>
                    Delete
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="post-content">
          {!isNewCommentVisible && <p>{text}</p>}

          {isNewCommentVisible && (
            <form onSubmit={editCommentHandler}>
              <div className="new-comment-input">
                <input
                  type="text"
                  value={newComment}
                  onChange={newCommentHandler}
                  className="input-textbox p-1 w-100"
                  placeholder="Enter your reply"
                />
                <div className="new-comment-options d-flex">
                  <div
                    className="icon center-div"
                    title="Cancel"
                    onClick={toggleNewComment}
                  >
                    <i className="far fa-times-circle"></i>
                  </div>
                  <div
                    className="icon center-div"
                    title="Update"
                    onClick={editCommentHandler}
                  >
                    <i
                      className={`far fa-check-circle ${
                        newComment.length <= 0 && "disabled-element"
                      }`}
                    ></i>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comment;
