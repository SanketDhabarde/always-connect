/**
 * @description Find if the user has authUser as follower
 * @param {Object} authUser
 * @param {Object} followUser
 * @returns {Boolean} if user is follower or not
 */
export const isFollower = (authUser, user) => {
  return user.followers?.some((user) => user?._id === authUser?._id);
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

/**
 * @description Find if the postId is exists in bookmarked posts
 * @param {Array} bookmarked
 * @param {String} postId
 * @returns {Boolean} true/false if post is bookmarked or not
 */
export const isBookmarked = (bookmarked, postId) => {
  return bookmarked?.some((post) => post._id === postId);
};
