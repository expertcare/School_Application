import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // Use the function isAuthenticated to check if the user is logged in
  const authenticated = isAuthenticated();

  return authenticated ? (
    <Outlet /> // Renders child routes if authenticated
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
