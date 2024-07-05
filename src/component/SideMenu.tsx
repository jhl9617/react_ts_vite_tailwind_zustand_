import React from "react";
import { Link } from "react-router-dom";

const SideMenu: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white h-full p-4 space-y-4">
      <Link to="/usermanager" className="block hover:underline">
        User Manager
      </Link>
      <Link to="/login" className="block hover:underline">
        Login
      </Link>
    </div>
  );
};

export default SideMenu;
