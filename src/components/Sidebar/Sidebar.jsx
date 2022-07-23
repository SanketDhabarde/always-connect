import React from "react";
import { useToggle } from "../../hooks";
import Modal from "../Modal/Modal";
import Nav from "../Nav/Nav";
import NewPost from "../NewPost/NewPost";
import "./Sidebar.css";

function Sidebar() {
  const [newPostModal, toggleNewPostModal] = useToggle();

  return (
    <div className="sidebar-container">
      <div className="card sidebar">
        <Nav link="/" linkName="Feed" icon={<i className="fas fa-home"></i>} />
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
          link="/profile"
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
      {newPostModal && (
        <Modal toggleModal={toggleNewPostModal}>
          <NewPost toggleModal={toggleNewPostModal} />
        </Modal>
      )}
    </div>
  );
}

export default Sidebar;
