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
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659105639/ktspc9duwa7ei3emgru8.jpg",
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
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659105605/hzalfmyprdjhuxkzdydq.jpg",
        createdAt: new Date("May 12, 2022 20:10:05"),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "johndoe",
        text: "Cool",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
        createdAt: new Date("May 12, 2022 20:10:05"),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "adarshbalika",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659105639/ktspc9duwa7ei3emgru8.jpg",
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
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659105605/hzalfmyprdjhuxkzdydq.jpg",
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659105605/hzalfmyprdjhuxkzdydq.jpg",
        createdAt: new Date("February 11 2021 08:06:17"),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "adarshbalika",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659105639/ktspc9duwa7ei3emgru8.jpg",
        createdAt: new Date("February 11 2021 08:06:17"),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "johndoe",
        text: "Hilarious",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
        createdAt: new Date("May 12, 2022 20:10:05"),
        updatedAt: formatDate(),
      },
    ],
    createdAt: new Date("February 11 2021 08:06:17"),
    updatedAt: formatDate(),
  },
];
