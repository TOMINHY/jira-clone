import React from "react";

const IconDelete = ({ className = "", onClick = () => {} }) => {
  return (
    <div
      className={`flex items-center justify-center w-10 h-10 rounded bg-red-600 text-white text-sm ${className}`}
      onClick={onClick}
    >
      <i className="fa-solid fa-trash"></i>
    </div>
  );
};

export default IconDelete;
