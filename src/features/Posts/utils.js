/**
 * @description give the formatted date
 * @param {string} date - input date in different format
 * @returns {string} formatted date
 */
export const getDate = (date) => {
  let newDate = new Date(date);
  newDate = String(newDate).split(" ");
  return `${newDate[1]} ${newDate[2]}`;
};

/**
 * @description Check if user liked the post
 * @param {object} user
 * @param {Array} likedBy
 * @returns {Boolean} user liked the posts or not
 */
export const isUserLikedPost = (user, likedBy) => {
  return likedBy?.some((_user) => _user._id === user._id);
};

/**
 * @description sort the posts on given option
 * @param {Array} posts
 * @param {String} sortBy
 * @returns {Array} sorted posts
 */
export const sortPosts = (posts, sortBy) => {
  switch (sortBy.toLowerCase()) {
    case "latest":
      return [...posts].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    case "oldest":
      return [...posts].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    case "trending":
      return [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);
    default:
      return posts;
  }
};

/**
 * @description get the users posts
 * @param {Array} posts
 * @param {String} username
 * @returns {Array} users post
 */
export const getUserPosts = (posts, username) => {
  return posts.filter((post) => post.username === username);
};

/**
 * @description get user's posts + user's following user posts
 * @param {Array} posts
 * @param {Object} user
 * @returns {Array} user feed posts
 */
export const getUserFeedPosts = (posts, user) => {
  return posts?.filter(
    (post) =>
      post.username === user?.username ||
      user?.following.some((_user) => _user.username === post.username)
  );
};
