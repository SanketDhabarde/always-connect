import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "8b17ab15-df9b-4e5a-b93e-c27c68169276",
    content:
      "Happiness can be found in the darkest of times if one only remembers to turn on the light",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
        {
          _id: "b293462c-1cff-45c3-917d-3bef86885900",
          username: "one_piece",
          firstName: "Monkey D.",
          lastName: "Luffy",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
        },
      ],
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
        _id: "b293462c-1cff-45c3-917d-3bef86885900",
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
        _id: "057c0b1e-84d1-44e3-b35a-382799476db1",
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
    _id: "0cbac77c-3c0e-463c-b29c-dd6276a75b3a",
    content:
      "Don't complain about the things you are not capable of. But show the world what you are capable of. because life is too short, make the most out of it.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
        {
          _id: "b293462c-1cff-45c3-917d-3bef86885900",
          username: "one_piece",
          firstName: "Monkey D.",
          lastName: "Luffy",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
        },
      ],
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
        _id: "057c0b1e-84d1-44e3-b35a-382799476db1",
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
    _id: "5ed9cc08-f5c5-458c-b26d-09a35b11887b",
    content: "God gives the strongest battles to his strongest soldiers.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "one_piece",
    firstName: "Monkey D.",
    lastName: "Luffy",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
    comments: [
      {
        _id: "b293462c-1cff-45c3-917d-3bef86885900",
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
        _id: "c34c7dc7-968a-4d63-b583-667c4b3bf514",
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
        _id: "057c0b1e-84d1-44e3-b35a-382799476db1",
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
    _id: "1ea12c9e-dfd6-4b92-9fef-0d9dd3cdf229",
    content:
      "Small aim is a crime. Have a great aim. – Dr. A. P. J. Abdul Kalam",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "one_piece",
    firstName: "Monkey D.",
    lastName: "Luffy",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
    comments: [
      {
        _id: "b293462c-1cff-45c3-917d-3bef86885900",
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
        _id: "c34c7dc7-968a-4d63-b583-667c4b3bf514",
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
        _id: "057c0b1e-84d1-44e3-b35a-382799476db1",
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
    _id: "2b71b267-531b-4c97-8dec-b3b4de6607ce",
    content:
      "Magic happens when you don't give up, even though you want to. The universe always falls in love with a stubborn heart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "b293462c-1cff-45c3-917d-3bef86885900",
          username: "one_piece",
          firstName: "Monkey D.",
          lastName: "Luffy",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
        },
        {
          _id: "c34c7dc7-968a-4d63-b583-667c4b3bf514",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659105639/ktspc9duwa7ei3emgru8.jpg",
        },
        {
          _id: "057c0b1e-84d1-44e3-b35a-382799476db1",
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "SanketDhabarde1",
    firstName: "Sanket",
    lastName: "Dhabarde",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
    comments: [
      {
        _id: "b293462c-1cff-45c3-917d-3bef86885900",
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
        _id: "057c0b1e-84d1-44e3-b35a-382799476db1",
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
    _id: "03adfdbc-62d0-4c44-b585-4ad4b3ff9d5b",
    content:
      "You guys need to enjoy and celebrate learning a lot more. Be genuinely happy that you're crossing milestones every week. Gratitude and happiness gives you a lot more energy to move mountains in life.- Tanay pratap",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "b293462c-1cff-45c3-917d-3bef86885900",
          username: "one_piece",
          firstName: "Monkey D.",
          lastName: "Luffy",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
        },
        {
          _id: "c34c7dc7-968a-4d63-b583-667c4b3bf514",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659105639/ktspc9duwa7ei3emgru8.jpg",
        },
        {
          _id: "057c0b1e-84d1-44e3-b35a-382799476db1",
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
        },
        {
          _id: "c30517bf-c371-4629-9379-e7c91eab9050",
          firstName: "Rachel",
          lastName: "Vila",
          username: "rachel_vila",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1662789116/racaavh0wmgyhcuzopip.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "SanketDhabarde1",
    firstName: "Sanket",
    lastName: "Dhabarde",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
    comments: [
      {
        _id: "b293462c-1cff-45c3-917d-3bef86885900",
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
        _id: "057c0b1e-84d1-44e3-b35a-382799476db1",
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
    _id: "03dsdbc-62d0-408s-b585-4ad4b3ff9d5b",
    content:
      "The struggle you're in today is developing the strength you need for tomorrow.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "b293462c-1cff-45c3-917d-3bef86885900",
          username: "one_piece",
          firstName: "Monkey D.",
          lastName: "Luffy",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "SanketDhabarde1",
    firstName: "Sanket",
    lastName: "Dhabarde",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
    comments: [],
    createdAt: new Date("August 18 2022 09:12:1"),
    updatedAt: formatDate(),
  },
  {
    _id: "23894aksjdhc-62d0-408s-b585-4ad4b3ff9d5b",
    content:
      "You can do it - and if you struggle that's even better: it means that you're learning more",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "b293462c-1cff-45c3-917d-3bef86885900",
          username: "one_piece",
          firstName: "Monkey D.",
          lastName: "Luffy",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "SanketDhabarde1",
    firstName: "Sanket",
    lastName: "Dhabarde",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
    comments: [],
    createdAt: new Date("August 19 2022 09:12:1"),
    updatedAt: formatDate(),
  },
  {
    _id: "df250b20-3523-43a1-ad98-563e44465124",
    content:
      "It’s not about whether it’s impossible or not, I’m doing it because I want to.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "one_piece",
    firstName: "Monkey D.",
    lastName: "Luffy",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
    comments: [
      {
        _id: "c34c7dc7-968a-4d63-b583-667c4b3bf514",
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
        _id: "057c0b1e-84d1-44e3-b35a-382799476db1",
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
  {
    _id: "df250b20-slkdj-a1-ad98-563e44465124",
    content: "A man should be resolutely proud... of the ships he created!",
    postImage:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1662791118/en3wxb6z6rv4lapmy2pn.jpg",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
        {
          _id: "c30517bf-c371-4629-9379-e7c91eab9050",
          firstName: "Rachel",
          lastName: "Vila",
          username: "rachel_vila",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1662789116/racaavh0wmgyhcuzopip.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "one_piece",
    firstName: "Monkey D.",
    lastName: "Luffy",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
    comments: [
      {
        _id: "c34c7dc7-968a-4d63-b583-667c4b3bf514",
        username: "adarshbalika",
        text: "Yes!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659105639/ktspc9duwa7ei3emgru8.jpg",
        createdAt: new Date("September 10 2022 08:06:17"),
        updatedAt: formatDate(),
      },
      {
        _id: "057c0b1e-84d1-44e3-b35a-382799476db1",
        username: "johndoe",
        text: "Totally agree",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
        createdAt: new Date("September 10, 2022 20:10:05"),
        updatedAt: formatDate(),
      },
    ],
    createdAt: new Date("September 10 2022 08:06:17"),
    updatedAt: formatDate(),
  },
  {
    _id: "df250b20-3523-43120-ad98-563e44465124",
    content:
      "If successful and unsuccessful people share the same goals, then the goal cannot be what differentiates winners from losers.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
    comments: [
      {
        _id: "c34c7dc7-968a-4d63-b583-667c4b3bf514",
        username: "adarshbalika",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659105639/ktspc9duwa7ei3emgru8.jpg",
        createdAt: new Date("August 15 2022 08:06:17"),
        updatedAt: formatDate(),
      },
    ],
    createdAt: new Date("August 15 2022 08:06:17"),
    updatedAt: formatDate(),
  },
  {
    _id: "df250b20-3523-43120-ad98-563ekse465124",
    content:
      "Programming in React can feel like magic, but once you learn how the magic works, you become a wizard. 🧙🏼‍♂️",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
    comments: [],
    createdAt: new Date("July 13 2022 08:06:17"),
    updatedAt: formatDate(),
  },
  {
    _id: "df250sad20-3523-43120-ad98-563ekse465124",
    content: " मन के हारे, हारे। मन के जिते, जिते।",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
    comments: [],
    createdAt: new Date("June 15 2022 08:06:17"),
    updatedAt: formatDate(),
  },
  {
    _id: "df250b20-35jkw3-43120-ad98-56se465124",
    content: "Life is tough, but so are you! If you never try, you never know",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
        {
          _id: "b293462c-1cff-45c3-917d-3bef86885900",
          username: "one_piece",
          firstName: "Monkey D.",
          lastName: "Luffy",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
    comments: [],
    createdAt: new Date("June 19 2022 08:06:17"),
    updatedAt: formatDate(),
  },
  {
    _id: "df250b20-35sdsw3-43120-ad98-56se465124",
    content:
      "Never let the fear of striking out keep you from playing the game, Keep calm and carry on.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
        {
          _id: "b293462c-1cff-45c3-917d-3bef86885900",
          username: "one_piece",
          firstName: "Monkey D.",
          lastName: "Luffy",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
    comments: [],
    createdAt: new Date("June 2 2022 08:06:17"),
    updatedAt: formatDate(),
  },
  {
    _id: "df250b20-35sdsw3-43120-ad98-5dk0se465124",
    content:
      " Life will never be perfect. It will never have everything you want. As a software engineer, you should know that a system will always have trade-offs. You need to decide what trade-offs you can live with and what are you optimizing your life for. -Tanay Pratap",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
    comments: [],
    createdAt: new Date("June 10 2022 08:06:17"),
    updatedAt: formatDate(),
  },
  {
    _id: "dfsw020b20-35sdsw3-43120-ad98-5dk0se465124",
    content: `Only the disciplined ones in life are free. If you are undisciplined, you are a slave to your moods and your passions.- Eliud Kipchoge`,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
    comments: [],
    createdAt: new Date("January 4 2022 08:06:17"),
    updatedAt: formatDate(),
  },
  {
    _id: "dfsw020b20-35sdsw3-43120-ad98-e465124",
    content: `"Discipline" will take you to places where "motivation" cannot!`,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
    comments: [],
    createdAt: new Date("June 22 2022 08:06:17"),
    updatedAt: formatDate(),
  },
  {
    _id: "dfsw020b20-35s3-43120-ad98-e465124",
    content: `Dare to dream, they might just come true someday.`,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
    comments: [],
    createdAt: new Date("August 3 2022 08:06:17"),
    updatedAt: formatDate(),
  },
  {
    _id: "dfsw020b20-35s3-4asd0-ad98-e465124",
    content: `Consistency is the key to success!
    Motivation won’t stay long. Discipline will!`,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
    comments: [],
    createdAt: new Date("August 13 2022 08:06:17"),
    updatedAt: formatDate(),
  },
  {
    _id: "df0b20-35s3-4asd0-ad98-e465124",
    content: `It is our choices that show what we truly are, far more than our abilities.`,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
        {
          _id: "b293462c-1cff-45c3-917d-3bef86885900",
          username: "one_piece",
          firstName: "Monkey D.",
          lastName: "Luffy",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
    comments: [],
    createdAt: new Date("July 30 2022 08:06:17"),
    updatedAt: formatDate(),
  },
  {
    _id: "df0b20-35s3-4fjds0-ad98-e465124",
    content: `Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.`,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
    comments: [],
    createdAt: new Date("July 1 2022 08:06:17"),
    updatedAt: formatDate(),
  },
  {
    _id: "df0b20-35s3-4fjds0-ad98-easkj124",
    content: `The illiterate of the 21st century, will not be those who cannot read and write, but those who cannot learn, unlearn and relearn.`,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
    comments: [],
    createdAt: new Date("June 3 2022 08:06:17"),
    updatedAt: formatDate(),
  },
  {
    _id: "df0b20-35s3-4fjds0-skjd234-j124",
    content: ` “There is freedom waiting for you, 
    On the breezes of the sky,
    And you ask "What if I fall?"
    Oh, but my darling,
    What if you fly?”― Erin Hanson`,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
    comments: [],
    createdAt: new Date("June 15 2022 08:06:17"),
    updatedAt: formatDate(),
  },
  {
    _id: "dsadd0-309-b20-35s3-4fjds0-skjd234-j124",
    content: `You'll never be good enough to do something until you do it. So just do it!`,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
    comments: [],
    createdAt: new Date("July 19 2022 08:06:17"),
    updatedAt: formatDate(),
  },
  {
    _id: "dsadd0-309-b20-35s3-4sjd34-j124",
    content: `"Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime”`,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
          username: "SanketDhabarde1",
          firstName: "Sanket",
          lastName: "Dhabarde",
          profileImg:
            "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
    comments: [],
    createdAt: new Date("August 17 2022 08:06:17"),
    updatedAt: formatDate(),
  },
];
