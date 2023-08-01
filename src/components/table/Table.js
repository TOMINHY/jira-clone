import React from "react";

const Table = ({ children }) => {
  return (
    <div className="overflow-x-auto bg-white">
      <table>{children}</table>
    </div>
  );
};

export default Table;
