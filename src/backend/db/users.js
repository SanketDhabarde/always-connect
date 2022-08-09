import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "057c0b1e-84d1-44e3-b35a-382799476db1",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "johnDoe123",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
    profileBanner:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659158279/xixyo07shtqhfuocbuac.webp",
    bio: "People usually treat me as random user. But I am exists",
    followers: [],
    bookmarks: [],
    following: [
      {
        _id: "c34c7dc7-968a-4d63-b583-667c4b3bf514",
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659105639/ktspc9duwa7ei3emgru8.jpg",
      },
      {
        _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
        firstName: "Sanket",
        lastName: "Dhabarde",
        username: "SanketDhabarde1",
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "c34c7dc7-968a-4d63-b583-667c4b3bf514",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshbalika123",
    profileLink: "https://adarshbalika.netlify.app/",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659105639/ktspc9duwa7ei3emgru8.jpg",
    profileBanner:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659158279/xixyo07shtqhfuocbuac.webp",
    bio: "I am from neog level 0, I exists because of Tanay bhaiya.",
    followers: [
      {
        _id: "057c0b1e-84d1-44e3-b35a-382799476db1",
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
      },
    ],
    following: [
      {
        _id: "c30517bf-c371-4629-9379-e7c91eab9050",
        firstName: "Dan",
        lastName: "Abramov",
        username: "dan_abramov",
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659703122/zlbflx2ceqhhdcsq6m3d.jpg",
      },
    ],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "c30517bf-c371-4629-9379-e7c91eab9050",
    firstName: "Dan",
    lastName: "Abramov",
    username: "dan_abramov",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659703122/zlbflx2ceqhhdcsq6m3d.jpg",
    password: "danabromov123",
    profileLink: "https://overreacted.io/",
    profileBanner:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659158279/xixyo07shtqhfuocbuac.webp",
    bio: "I don't know anything else",
    followers: [
      {
        _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
        firstName: "Sanket",
        lastName: "Dhabarde",
        username: "SanketDhabarde1",
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
      },
      {
        _id: "c34c7dc7-968a-4d63-b583-667c4b3bf514",
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659105639/ktspc9duwa7ei3emgru8.jpg",
      },
    ],
    following: [],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "b293462c-1cff-45c3-917d-3bef86885900",
    firstName: "Monkey D.",
    lastName: "Luffy",
    username: "one_piece",
    password: "food123",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659708461/gdsypz2hgecgvq8cibvq.jpg",
    profileBanner:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659158279/xixyo07shtqhfuocbuac.webp",
    bio: "Future pirate king",
    followers: [
      {
        _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
        firstName: "Sanket",
        lastName: "Dhabarde",
        username: "SanketDhabarde1",
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
      },
    ],
    following: [],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "2bb62a88-501f-4dab-80e7-cdde72684cf0",
    firstName: "Sanket",
    lastName: "Dhabarde",
    username: "SanketDhabarde1",
    password: "sanket123",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659091879/hr0edyse7v3z4f8mlw7k.jpg",
    profileLink: "https://github.com/SanketDhabarde",
    profileBanner:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659158279/xixyo07shtqhfuocbuac.webp",
    bio: "Associate Software Engineer @clarivate | Frontend Developer |  @neogcamp'22",
    followers: [
      {
        _id: "057c0b1e-84d1-44e3-b35a-382799476db1",
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
      },
    ],
    bookmarks: [],
    following: [
      {
        _id: "c30517bf-c371-4629-9379-e7c91eab9050",
        firstName: "Dan",
        lastName: "Abramov",
        username: "dan_abramov",
        profileImg:
          "https://res.cloudinary.com/dphfdaqls/image/upload/v1659703122/zlbflx2ceqhhdcsq6m3d.jpg",
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
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
