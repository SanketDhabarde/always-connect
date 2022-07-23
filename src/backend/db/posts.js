import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Happiness can be found in the darkest of times if one only remembers to turn on the light",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarsh",
    lastName: "Balika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content: "God gives the strongest battles to his strongest soldiers.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    firstName: "Shubham",
    lastName: "Soni",

    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
