import React from "react";
import { Outlet } from "react-router-dom";

const LoginLayout: React.FC = () => {
  return (
    <div className="bg-custom-bg flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-auto h-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginLayout;
