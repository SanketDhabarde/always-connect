import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FollowCard, Modal, Sidebar, Spinner } from "../../components";
import {
  EditProfile,
  followUser,
  getUserProfile,
  Post,
  unFollowUser,
} from "../../features";
import { getUserPosts, sortPosts } from "../../features/Posts/utils";
import { isFollower } from "../../features/User/utils";
import { useTitle, useToggle } from "../../hooks";
import "./Profile.css";

function Profile() {
  const { userProfile, userProfileLoading } = useSelector(
    (state) => state.user
  );
  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [isEditModalVisible, toggleEditModal] = useToggle();
  const {
    _id,
    profileImg,
    username,
    firstName,
    lastName,
    profileLink,
    bio,
    profileBanner,
    followers,
    following,
  } = userProfile;
  const userPosts = getUserPosts(posts, username);
  const sortedUserPosts = sortPosts(userPosts, "latest");
  const { username: userName } = useParams();
  useTitle(`${userName}`);

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
  }, [userName, dispatch]);

  const userFollowerHandler = async () => {
    try {
      const response = isFollower(user, userProfile)
        ? await dispatch(unFollowUser({ followUserId: _id }))
        : await dispatch(followUser({ followUserId: _id }));
      if (response.error) {
        console.log(response.error);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container my-2">
      <Sidebar />
      <div className="card container-card single-post px-3">
        {userProfileLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="card w-100 profile-header">
              <div className="profile-banner">
                <img
                  src={profileBanner}
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
                  {user.username === username ? (
                    <button
                      className="btn btn-outline-primary"
                      onClick={toggleEditModal}
                    >
                      Edit profile
                    </button>
                  ) : isFollower(user, userProfile) ? (
                    <button
                      className="btn btn-outline-secondary"
                      onClick={userFollowerHandler}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-primary"
                      onClick={userFollowerHandler}
                    >
                      Follow
                    </button>
                  )}
                </div>
                <div className="profile-name my-1">
                  <h3>{`${firstName} ${lastName}`}</h3>
                  <small className="text-gray">@{username}</small>
                </div>
                <div className="profile-bio my-1">
                  <p>{bio}</p>
                </div>
                <div className="profile-bio-link my-1">
                  {profileLink && (
                    <>
                      <i className="fas fa-link text-gray"></i>
                      <a
                        href={profileLink}
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {profileLink}
                      </a>
                    </>
                  )}
                </div>
                <div className="profile-more-info my-2">
                  <div className="posts-number">
                    {sortedUserPosts.length} posts
                  </div>
                  <div className="follower-number hover-underline">
                    {followers?.length} followers
                  </div>
                  <div className="following-number hover-underline">
                    {following?.length} following
                  </div>
                </div>
              </div>
            </div>
            <div className="posts-listing">
              {sortedUserPosts.length > 0 ? (
                sortedUserPosts.map((post) => (
                  <Post post={post} key={post._id} />
                ))
              ) : (
                <p className="center-div my-2 text-gray">No posts yet</p>
              )}
            </div>
          </>
        )}
      </div>
      <FollowCard />
      {isEditModalVisible && (
        <Modal toggleModal={toggleEditModal} editModal>
          <EditProfile userProfile={user} toggleModal={toggleEditModal} />
        </Modal>
      )}
    </div>
  );
}

export default Profile;
