/**
 * @description Find if the user has authUser as follower
 * @param {Object} authUser
 * @param {Object} followUser
 * @returns {Boolean} if user is follower or not
 */
export const isFollower = (authUser, user) => {
  return user.followers?.some((user) => user._id === authUser._id);
};
