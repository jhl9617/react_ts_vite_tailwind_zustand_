import React from "react";
import { Link } from "react-router-dom";

const AppBar: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-2xl">MyApp</div>
      <div className="space-x-4">
        <Link to="/usermanager" className="hover:underline">
          User Manager
        </Link>
        <Link to="/login" className="hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default AppBar;
