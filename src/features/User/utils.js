/**
 * @description Find if the user has authUser as follower
 * @param {Object} authUser
 * @param {Object} followUser
 * @returns {Boolean} if user is follower or not
 */
export const isFollower = (authUser, user) => {
  return user.followers?.some((user) => user._id === authUser._id);
};

/**
 * @description Find current user from list of allUser
 * @param {Array} users
 * @param {String} username
 * @returns {Object} current user from allUser
 */
export const getCurrentUser = (users, username) => {
  return users?.find((_user) => _user.username === username);
};
