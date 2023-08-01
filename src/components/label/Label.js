import React from "react";

const Label = ({ htmlFor = "", children, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      {...props}
      className="mb-2 font-medium text-sm cursor-pointer"
    >
      {children}
    </label>
  );
};

export default Label;
