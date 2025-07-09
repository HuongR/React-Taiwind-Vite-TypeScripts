import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../features/auth/pages/Login";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Route ví dụ */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <div>Trang dashboard bảo vệ</div>
          </ProtectedRoute>
        }
      />

      {/* Not Found */}
      <Route path="*" element={<div className="text-center p-8">404 - Không tìm thấy trang</div>} />
    </Routes>
  );
};

export default AppRouter;
