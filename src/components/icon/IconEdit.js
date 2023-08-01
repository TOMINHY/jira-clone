import React from "react";

const IconEdit = ({ className = "", onClick = () => {} }) => {
  return (
    <div
      className={`flex items-center justify-center w-10 h-10 rounded bg-blue-700 text-white text-sm ${className}`}
      onClick={onClick}
    >
      <i className="fa-solid fa-pen-to-square"></i>
    </div>
  );
};

export default IconEdit;
