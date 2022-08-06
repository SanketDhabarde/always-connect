import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

const initialState = {
  user: null,
  authStatus: "idle",
  authError: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/login", {
        username,
        password,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ username, firstName, lastName, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/auth/signup`, {
        username,
        firstName,
        lastName,
        password,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.authStatus = "loading";
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { foundUser, encodedToken } = payload ?? {};
      state.authStatus = "success";
      state.user = foundUser;
      localStorage.setItem("token", encodedToken);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.authStatus = "failed";
      state.authError = payload.errors;
    },

    [signupUser.pending]: (state) => {
      state.authStatus = "loading";
    },
    [signupUser.fulfilled]: (state, { payload }) => {
      const { createdUser, encodedToken } = payload ?? {};
      state.authStatus = "success";
      state.user = createdUser;
      localStorage.setItem("token", encodedToken);
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.authStatus = "failed";
      state.authError = payload.errors;
    },
  },
});

export const { logOut } = authSlice.actions;
export const useAuthSlice = () => useSelector((state) => state.auth);
export const authReducer = authSlice.reducer;
