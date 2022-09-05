import React from "react";
import { Link } from "react-router-dom";
import { useAuthSlice } from "../../features";
import { useToggle } from "../../hooks";
import Modal from "../Modal/Modal";
import NewPost from "../NewPost/NewPost";
import "./Navbar.css";

function Navbar() {
  const { user } = useAuthSlice();
  const [newPostModal, toggleNewPostModal] = useToggle();

  return (
    <header className="p-2">
      <div className="header-brand">
        <Link to="/" className="btn-link">
          AlwaysConnect
        </Link>
      </div>
      {user && (
        <div className="nav-right center-div">
          <div
            className="new-post-btn-icon my-2 icon"
            title="Create Post"
            onClick={toggleNewPostModal}
          >
            <i className="far fa-plus-square"></i>
          </div>
          <Link to={`/profile/${user.username}`} className="avatar avatar-sm">
            <img
              src={user.profileImg}
              alt="avatar"
              className="img-responsive img-round"
            />
          </Link>
        </div>
      )}
      {newPostModal && (
        <Modal toggleModal={toggleNewPostModal}>
          <NewPost toggleModal={toggleNewPostModal} />
        </Modal>
      )}
    </header>
  );
}

export default Navbar;
