import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FollowCard, Sidebar } from "../../components";
import { getUserProfile, Post } from "../../features";
import { getUserPosts, sortPosts } from "../../features/Posts/utils";
import "./Profile.css";

function Profile() {
  const { userProfile } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { profileImg, username, firstName, lastName } = userProfile;
  const userPosts = getUserPosts(posts, username);
  const sortedUserPosts = sortPosts(userPosts, "latest");
  const { username: userName } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(getUserProfile({ userName }));
        if (response.error) {
          console.log(response.error);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [userName]);

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
              <button className="btn btn-outline-primary">
                {user.username === username ? `Edit profile` : `Follow`}
              </button>
            </div>
            <div className="profile-name my-1">
              <h3>{`${firstName} ${lastName}`}</h3>
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
              <div className="posts-number">{sortedUserPosts.length} posts</div>
              <div className="follower-number hover-underline">0 follower</div>
              <div className="following-number hover-underline">
                0 following
              </div>
            </div>
          </div>
        </div>
        <div className="posts-listing">
          {sortedUserPosts.length > 0 ? (
            sortedUserPosts.map((post) => <Post post={post} key={post._id} />)
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
