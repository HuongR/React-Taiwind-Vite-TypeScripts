import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captcha) {
      alert("Vui lòng xác minh bạn không phải robot");
      return;
    }
    // Xử lý đăng nhập ở đây (giả lập)
    alert(`Đăng nhập với tài khoản: ${username}`);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Đăng nhập
        </h2>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Tài khoản</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Nhập tài khoản"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Mật khẩu</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Nhập mật khẩu"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-gray-700">Mã xác minh (captcha)</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            required
            placeholder="Nhập mã xác minh"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;