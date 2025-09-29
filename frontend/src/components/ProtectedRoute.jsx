import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isSuperAdmin = localStorage.getItem("isSuperAdmin");

  if (isSuperAdmin === "true") {
    return children; // ✅ access allowed
  } else {
    return <Navigate to="/" replace />; // ❌ wapas home bhej do
  }
};

export default ProtectedRoute;