import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

const initialState = {
  allUser: [],
  userProfile: {},
  userProfileLoading: false,
  userProfileError: null,
};

const TOKEN = localStorage.getItem("token");

export const getAllUser = createAsyncThunk(
  "user/getAllUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios(`/api/users`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.respose.data);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async ({ userName: username }, { rejectWithValue }) => {
    try {
      const res = await axios(`/api/users/${username}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.respose.data);
    }
  }
);

export const editUserProfile = createAsyncThunk(
  "user/editUserProfile",
  async ({ userData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/users/edit`,
        { userData },
        {
          headers: {
            authorization: TOKEN,
          },
        }
      );
      return data?.user;
    } catch (error) {
      return rejectWithValue(error.respose.data);
    }
  }
);

export const followUser = createAsyncThunk(
  "user/followUser",
  async ({ followUserId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        {
          headers: {
            authorization: TOKEN,
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.respose.data);
    }
  }
);

export const unFollowUser = createAsyncThunk(
  "user/unFollowUser",
  async ({ followUserId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/users/unfollow/${followUserId}`,
        {},
        {
          headers: {
            authorization: TOKEN,
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.respose.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUser.fulfilled]: (state, { payload }) => {
      state.allUser = payload.users;
    },
    [getAllUser.rejected]: (_, { payload }) => {
      console.log(payload);
    },
    [getUserProfile.pending]: (state) => {
      state.userProfileLoading = true;
    },
    [getUserProfile.fulfilled]: (state, { payload }) => {
      state.userProfile = payload.user;
      state.userProfileLoading = false;
    },
    [getUserProfile.rejected]: (state, { payload }) => {
      state.userProfileLoading = false;
      state.userProfileError = payload;
    },
    [editUserProfile.pending]: (state) => {
      state.userProfileLoading = true;
    },
    [editUserProfile.fulfilled]: (state, { payload }) => {
      state.userProfile = payload;
      state.userProfileLoading = false;
    },
    [editUserProfile.rejected]: (state, { payload }) => {
      state.userProfileLoading = false;
      state.userProfileError = payload;
    },
    [followUser.fulfilled]: (state, { payload }) => {
      const { followUser, user } = payload;
      state.userProfile = followUser;
      state.allUser = state.allUser.map((_user) =>
        _user.username === user.username
          ? user
          : _user.username === followUser.username
          ? followUser
          : _user
      );
    },
    [followUser.rejected]: (state, { payload }) => {
      state.userProfileError = payload;
    },
    [unFollowUser.fulfilled]: (state, { payload }) => {
      const { followUser, user } = payload;
      state.userProfile = followUser;
      state.allUser = state.allUser.map((_user) =>
        _user.username === user.username
          ? user
          : _user.username === followUser.username
          ? followUser
          : _user
      );
    },
    [unFollowUser.rejected]: (state, { payload }) => {
      state.userProfileError = payload;
    },
  },
});

export const useUserSlice = () => useSelector((state) => state.user);
export const userReducer = userSlice.reducer;
