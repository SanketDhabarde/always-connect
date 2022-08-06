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
        username: "one_piece",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
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
    ],
  },
  {
    _id: uuid(),
    content:
      "Don't complain about the things you are not capable of. But show the world what you are capable of. because life is too short, make the most out of it.",
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
    createdAt: new Date("January 12, 2022 20:10:05"),
    updatedAt: formatDate(),
    comments: [
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
        createdAt: new Date("January 12, 2022 20:10:05"),
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
    username: "one_piece",
    firstName: "Monkey D.",
    lastName: "Luffy",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
    comments: [
      {
        _id: uuid(),
        username: "one_piece",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
        createdAt: new Date("February 11 2022 08:06:17"),
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
        createdAt: new Date("February 11 2022 08:06:17"),
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
    createdAt: new Date("February 11 2022 08:06:17"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Small aim is a crime. Have a great aim. – Dr. A. P. J. Abdul Kalam",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "one_piece",
    firstName: "Monkey D.",
    lastName: "Luffy",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
    comments: [
      {
        _id: uuid(),
        username: "one_piece",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
        createdAt: new Date("February 11 2022 08:06:17"),
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
        createdAt: new Date("February 11 2022 08:06:17"),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "johndoe",
        text: "Sir",
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
    createdAt: new Date("February 11 2022 08:06:17"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Magic happens when you don't give up, even though you want to. The universe always falls in love with a stubborn heart.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "SanketDhabarde1",
    firstName: "Sanket",
    lastName: "Dhabarde",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
    comments: [
      {
        _id: uuid(),
        username: "one_piece",
        text: "Agree",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
        createdAt: new Date("February 13 2022 08:06:17"),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "johndoe",
        text: "Dattebayo",
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
    createdAt: new Date("February 13 2022 08:06:17"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "You guys need to enjoy and celebrate learning a lot more. Be genuinely happy that you're crossing milestones every week. Gratitude and happiness gives you a lot more energy to move mountains in life.- Tanay pratap",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "SanketDhabarde1",
    firstName: "Sanket",
    lastName: "Dhabarde",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
    comments: [
      {
        _id: uuid(),
        username: "one_piece",
        text: "Golden words",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
        createdAt: new Date("August 5 2022 09:12:17"),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "johndoe",
        text: "tanay bhaiya ♥",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
        createdAt: new Date("August 4 2022 10:12:17"),
        updatedAt: formatDate(),
      },
    ],
    createdAt: new Date("August 4 2022 09:12:1"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "It’s not about whether it’s impossible or not, I’m doing it because I want to.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "one_piece",
    firstName: "Monkey D.",
    lastName: "Luffy",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
    comments: [
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
        createdAt: new Date("March 11 2022 08:06:17"),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "johndoe",
        text: "Pirate king",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
        createdAt: new Date("March 12, 2022 20:10:05"),
        updatedAt: formatDate(),
      },
    ],
    createdAt: new Date("March 10 2022 08:06:17"),
    updatedAt: formatDate(),
  },
];
