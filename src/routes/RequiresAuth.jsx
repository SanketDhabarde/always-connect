import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthSlice } from "../features";

function RequiresAuth() {
  const { user } = useAuthSlice();
  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequiresAuth;
