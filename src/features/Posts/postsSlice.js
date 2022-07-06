import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
};

const TOKEN = localStorage.getItem("token");

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios("/api/posts");
      return data.posts;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ postData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "/api/posts",
        { postData },
        {
          headers: {
            authorization: TOKEN,
          },
        }
      );
      return data.posts;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [getPosts.rejected]: (_, { payload }) => {
      console.log(payload);
    },
    [createPost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [createPost.rejected]: (_, { payload }) => {
      console.log(payload);
    },
  },
});

export const postsReducer = postsSlice.reducer;