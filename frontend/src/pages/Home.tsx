import React from "react";
import Header from "../components/layout/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-600">Chào mừng bạn đến trang Home</h1>
        <p className="mt-4 text-gray-600">Đây là một trang demo đang hoạt động.</p>
      </div>
    </>
  );
};

export default Home;