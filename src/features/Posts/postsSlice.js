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

export const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ postData, postId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/posts/edit/${postId}`,
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

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ postId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/posts/${postId}`, {
        headers: {
          authorization: TOKEN,
        },
      });
      return data.posts;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ postId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/posts/like/${postId}`,
        {},
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

export const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async ({ postId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
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

export const addComment = createAsyncThunk(
  "posts/addComment",
  async ({ postId, commentData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/comments/add/${postId}`,
        { commentData },
        {
          headers: {
            authorization: TOKEN,
          },
        }
      );
      return { postId, comments: data.comments };
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
    [editPost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [editPost.rejected]: (_, { payload }) => {
      console.log(payload);
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [deletePost.rejected]: (_, { payload }) => {
      console.log(payload);
    },
    [likePost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [likePost.rejected]: (_, { payload }) => {
      console.log(payload);
    },
    [dislikePost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [dislikePost.rejected]: (_, { payload }) => {
      console.log(payload);
    },
    [addComment.fulfilled]: (state, { payload }) => {
      const { postId, comments } = payload;
      const postIndex = state?.posts.findIndex((post) => post._id === postId);
      state.posts[postIndex].comments = comments;
    },
    [addComment.rejected]: (_, { payload }) => {
      console.log(payload);
    },
  },
});

export const postsReducer = postsSlice.reducer;
