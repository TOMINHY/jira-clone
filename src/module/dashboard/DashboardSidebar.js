import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="w-[150px] bg-slate-900 full flex flex-col justify-start flex-shrink-0">
      <div className="text-right p-2 text-white hover:bg-blue-600 transition-all cursor-pointer text-xl">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="flex items-center gap-x-3 text-white p-3 cursor-pointer hover:bg-blue-600 transition-all">
        <span>
          <i className="fa-solid fa-plus"></i>
        </span>
        <NavLink to="/createtask">Create task</NavLink>
      </div>
      <div className="flex items-center gap-x-3 text-white p-3 cursor-pointer hover:bg-blue-600 transition-all">
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <span>Search</span>
      </div>
    </div>
  );
};

export default DashboardSidebar;
