import React from "react";
import { Navigate } from "react-router-dom";

// TODO: Replace với logic thật (ví dụ từ Redux hoặc LocalStorage)
const isAuthenticated = () => {
  return false; // thay thành true để test tạm
};

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
