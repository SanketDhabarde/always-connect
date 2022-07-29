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
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
