import React from "react";

const Field = ({ children, kind = "" }) => {
  if (kind === "full") {
    return <div className={`flex flex-col w-full mb-[30px]`}>{children}</div>;
  }
  return (
    <div
      className={`flex flex-col max-w-[350px] lg:max-w-[500px] w-full mb-[30px]`}
    >
      {children}
    </div>
  );
};

export default Field;
