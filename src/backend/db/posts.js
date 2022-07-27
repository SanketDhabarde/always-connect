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
    createdAt: new Date("May 12, 2022 20:10:05"),
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
        createdAt: new Date("May 12, 2022 20:10:05"),
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
        createdAt: new Date("May 12, 2022 20:10:05"),
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
          createdAt: new Date("February 11 2021 08:06:17"),
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
          createdAt: new Date("February 11 2021 08:06:17"),
          updatedAt: formatDate(),
        },
      },
    ],
    createdAt: new Date("February 11 2021 08:06:17"),
    updatedAt: formatDate(),
  },
];
