import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white">
      <div className="text-xl font-bold">My App</div>
      <nav>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition"
          >
            Đăng xuất
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition"
          >
            Đăng nhập
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;