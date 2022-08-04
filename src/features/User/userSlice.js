import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userProfile: {},
  userProfileLoading: false,
  userProfileError: null,
};

const TOKEN = localStorage.getItem("token");

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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
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
  },
});

export const userReducer = userSlice.reducer;
