import React from "react";
import { logOut, useAuthSlice } from "../../features";
import { useToggle } from "../../hooks";
import Modal from "../Modal/Modal";
import Nav from "../Nav/Nav";
import NewPost from "../NewPost/NewPost";
import { useDispatch } from "react-redux";
import "./Sidebar.css";

function Sidebar() {
  const [newPostModal, toggleNewPostModal] = useToggle();
  const { user } = useAuthSlice();
  const dispatch = useDispatch();

  return (
    <div className="sidebar-container p-1">
      <div>
        <div className="card sidebar">
          <Nav
            link="/"
            linkName="Feed"
            icon={<i className="fas fa-home"></i>}
          />
          <Nav
            link="/explore"
            linkName="Explore"
            icon={<i className="fas fa-hashtag"></i>}
          />
          <Nav
            link="/bookmark"
            linkName="Bookmark"
            icon={<i className="fas fa-bookmark"></i>}
          />
          <Nav
            link={`/profile/${user.username}`}
            linkName="Profile"
            icon={<i className="fas fa-user"></i>}
          />
        </div>
        <div className="new-post-btn my-2">
          <button
            className="btn btn-primary btn-create"
            onClick={toggleNewPostModal}
          >
            Create new post
          </button>
        </div>
      </div>
      <div>
        <button
          className="btn btn-outline-danger w-100 m-0"
          onClick={() => dispatch(logOut())}
        >
          Logout <i className="fas fa-sign-out-alt mx-1"></i>
        </button>
      </div>
      {newPostModal && (
        <Modal toggleModal={toggleNewPostModal}>
          <NewPost toggleModal={toggleNewPostModal} />
        </Modal>
      )}
    </div>
  );
}

export default Sidebar;
