import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "johnDoe123",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659092168/h0mqs3wbiqm5wqmdpa9i.jpg",
    profileBanner:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659158279/xixyo07shtqhfuocbuac.webp",
    bio: "People usually treat me as random user. But I am exists",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshbalika123",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659105639/ktspc9duwa7ei3emgru8.jpg",
    profileBanner:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659158279/xixyo07shtqhfuocbuac.webp",
    bio: "I am from neog level 0, I exists because of Tanay bhaiya.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "shubhamsoni123",
    profileImg:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659105605/hzalfmyprdjhuxkzdydq.jpg",
    profileBanner:
      "https://res.cloudinary.com/dphfdaqls/image/upload/v1659158279/xixyo07shtqhfuocbuac.webp",
    bio: "Frontend Developer",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
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
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
