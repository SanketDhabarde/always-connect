import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FollowCard, Sidebar } from "../../components";
import { Post } from "../../features";
import { getUserPosts } from "../../features/Posts/utils";
import "./Profile.css";

function Profile() {
  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);
  const { profileImg, username } = user;
  const userPosts = getUserPosts(posts, username);
  return (
    <div className="container my-2">
      <Sidebar />
      <div className="card container-card single-post px-3">
        <div className="card w-100 profile-header">
          <div className="profile-banner">
            <img
              src="https://res.cloudinary.com/dphfdaqls/image/upload/v1659158279/xixyo07shtqhfuocbuac.webp"
              alt="avatar"
              className="img-responsive"
            />
            <div className="profile-image">
              <div className="avatar avatar-md m-1 profile-avatar">
                <img
                  src={profileImg}
                  alt="avatar"
                  className="img-responsive img-round"
                />
              </div>
            </div>
          </div>
          <div className="profile-container px-2">
            <div className="profile-edit">
              <button className="btn btn-outline-primary">Edit profile</button>
            </div>
            <div className="profile-name my-1">
              <h3>Joan Doe</h3>
              <small className="text-gray">@{username}</small>
            </div>
            <div className="profile-bio my-1">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corrupti consequatur laboriosam, laborum magnam reprehenderit
                earum ratione a. A vitae quam non perspiciatis sed doloribus ex
                facere totam velit alias. Laboriosam.
              </p>
            </div>
            <div className="profile-bio-link my-1">
              <i className="fas fa-link text-gray"></i>
              <Link to="#" className="link">
                joandoe.com
              </Link>
            </div>
            <div className="profile-more-info my-2">
              <div className="posts-number">{userPosts.length} posts</div>
              <div className="follower-number hover-underline">0 follower</div>
              <div className="following-number hover-underline">
                0 following
              </div>
            </div>
          </div>
        </div>
        <div className="posts-listing">
          {userPosts.length > 0 ? (
            userPosts.map((post) => <Post post={post} key={post._id} />)
          ) : (
            <p className="center-div my-2 text-gray">No posts yet</p>
          )}
        </div>
      </div>
      <FollowCard />
    </div>
  );
}

export default Profile;
