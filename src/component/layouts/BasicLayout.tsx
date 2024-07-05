import React from "react";
import SideMenu from "../SideMenu";
import AppBar from "../AppBar";
import { Outlet } from "react-router-dom";

const BasicLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <SideMenu />
      <div className="flex-1 flex flex-col">
        <AppBar />

        <div className="p-4 flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BasicLayout;
