import React from "react";
import { NavLink } from "react-router-dom";

const DashboardMain = () => {
  return (
    <div className="w-[250px] bg-[#F4F5F7] h-full] flex flex-col items-center flex-shrink-0">
      <div className="flex items-center justify-center gap-x-3 mt-[20px] mb-[60px] w-full">
        <NavLink to="/">
          <img
            src="/logo.png"
            alt="img-logo"
            className="w-14 h-14 p-2 rounded-full object-cover bg-gray-300"
          />
        </NavLink>
        <div className="flex flex-col gap-y-1">
          <a
            className="font-semibold"
            href="https://cyberlearn.vn/"
            target="_blank"
            rel="noreferrer"
          >
            CyberLearn.vn
          </a>
          <span className=" text-gray-500">Report bugs</span>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-y-1 w-full ">
        <div className="flex items-center gap-x-3 cursor-pointer hover:bg-gray-300 p-3">
          <span>
            <i className="fa-solid fa-credit-card"></i>
          </span>
          <span className="text-gray-500">CyberBoard</span>
        </div>
        <div className="flex items-center gap-x-3 cursor-pointer hover:bg-gray-300 p-3">
          <span>
            <i className="fa-solid fa-gear"></i>
          </span>
          <strong>Project management</strong>
        </div>
        <div className="flex items-center gap-x-3 cursor-pointer hover:bg-gray-300 p-3 relative">
          <span>
            <i className="fa-solid fa-gear"></i>
          </span>
          <NavLink to="/createproject" className="text-gray-500">
            Create project
          </NavLink>
          <span className="absolute inset-0 w-[90%] left-2/4 -translate-x-2/4 h-[2px] top-[120%] bg-gray-200"></span>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-y-1 w-full mt-[20px]">
        <div className="flex items-center gap-x-3 cursor-pointer hover:bg-gray-300 p-3">
          <span>
            <i className="fa-solid fa-truck"></i>
          </span>
          <span className="text-gray-500">Releases</span>
        </div>
        <div className="flex items-center gap-x-3 cursor-pointer hover:bg-gray-300 p-3">
          <span>
            <i className="fa-solid fa-bars-progress"></i>
          </span>
          <span className="text-gray-500">Issues and filters</span>
        </div>
        <div className="flex items-center gap-x-3 cursor-pointer hover:bg-gray-300 p-3">
          <span>
            <i className="fa-solid fa-file"></i>
          </span>
          <span className="text-gray-500">Pages</span>
        </div>
        <div className="flex items-center gap-x-3 cursor-pointer hover:bg-gray-300 p-3">
          <span>
            <i className="fa-solid fa-location-arrow"></i>
          </span>
          <span className="text-gray-500">Reports</span>
        </div>
        <div className="flex items-center gap-x-3 cursor-pointer hover:bg-gray-300 p-3">
          <span>
            <i className="fa-solid fa-box"></i>
          </span>
          <span className="text-gray-500">Components</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
