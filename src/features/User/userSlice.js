import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userProfile: {},
  userProfileLoading: false,
  userProfileError: null,
};

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
  },
});

export const userReducer = userSlice.reducer;
