import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "../features";
import { Explore, Home, Profile, SinglePost } from "../pages";
import RequiresAuth from "./RequiresAuth";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RequiresAuth />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/posts/:postId" element={<SinglePost />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default AppRoutes;
