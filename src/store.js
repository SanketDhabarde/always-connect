import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postsReducer, userReducer } from "./features";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    user: userReducer,
  },
});
