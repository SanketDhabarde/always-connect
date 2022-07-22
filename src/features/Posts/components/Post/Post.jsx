import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Modal, NewPost, User } from "../../../../components";
import { useOnClickOutside, useToggle } from "../../../../hooks";
import "./Post.css";
import { deletePost, dislikePost, likePost } from "../../postsSlice";

function Post({ post }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isEditPostModal, toggleEditPostModal] = useToggle();
  const [isLikedByModalVisible, toggleLikedByModal] = useToggle();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  useOnClickOutside(menuRef, () => setIsMenuVisible(false));
  const { _id, content, username, firstName, lastName, postImage, likes } =
    post;
  const { likeCount, likedBy } = likes;

  const toggleMenuOptions = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  const getUserLikedPost = (user, likedBy) => {
    return likedBy?.some((_user) => _user._id === user._id);
  };

  const isUserLikedPost = getUserLikedPost(user, likedBy);

  const likeHandler = async () => {
    try {
      const res = isUserLikedPost
        ? await dispatch(dislikePost({ postId: _id }))
        : await dispatch(likePost({ postId: _id }));
      if (res?.error) {
        console.log(res.error);
      }
    } catch (error) {
      console.error(error);
    }
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
              <div
                className="icon center-div"
                onClick={toggleMenuOptions}
                title="More"
              >
                <i className="fas fa-ellipsis-h"></i>
              </div>
              {isMenuVisible && (
                <div className="card post-menu-options p-1">
                  <div
                    className="post-menu-option p-1"
                    onClick={toggleEditPostModal}
                  >
                    <i className="fas fa-edit"></i>
                    Edit
                  </div>
                  <hr className="separator" />
                  <div
                    className="post-menu-option p-1"
                    onClick={() => dispatch(deletePost({ postId: _id }))}
                  >
                    <i className="fas fa-trash"></i>
                    Delete
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
        <Link to={`/posts/${_id}`} className="post-content my-1 btn-link">
          <p>{content}</p>
        </Link>
        {postImage && (
          <div className="post-image">
            <img src={postImage} alt="post" className="img-responsive" />
          </div>
        )}
        <div className="post-options my-2">
          <div className="post-option-likes">
            <div
              className="icon center-div"
              onClick={likeHandler}
              title="Likes"
            >
              {isUserLikedPost ? (
                <i className="fas fa-heart icon-liked"></i>
              ) : (
                <i className="far fa-heart"></i>
              )}
            </div>
            {likeCount > 0 && <span>{likeCount}</span>}
          </div>
          <Link
            to={`/posts/${_id}`}
            className="icon center-div btn-link"
            title="Comments"
          >
            <i className="far fa-comment-alt"></i>
          </Link>
          <div className="icon center-div" title="Share">
            <i className="fas fa-share-alt"></i>
          </div>
          <div className="icon center-div" title="Bookmark">
            <i className="far fa-bookmark"></i>
          </div>
        </div>
        {likeCount > 0 && (
          <div className="post-extra-info my-1 ">
            <p className="liked-by-user text-gray" onClick={toggleLikedByModal}>
              {likedBy[0]?.username}
              {likeCount > 2
                ? ` and ${likeCount - 1} others`
                : likeCount === 2
                ? ` and 1 other`
                : ""}{" "}
              liked
            </p>
            {isLikedByModalVisible && (
              <Modal toggleModal={toggleLikedByModal}>
                <div className="card likeby-card p-1">
                  <h4>Liked by</h4>
                  {likedBy?.map((likeBy) => (
                    <div className="likeby-users" key={likeBy._id}>
                      <User user={likeBy} />
                      <hr className="separator" />
                    </div>
                  ))}
                </div>
              </Modal>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
