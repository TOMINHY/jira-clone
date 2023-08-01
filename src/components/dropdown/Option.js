import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = (props) => {
  const { onClick } = props;
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      className="p-2 cursor-pointer transition-all bg-white max-h-[200px] overflow-y-auto "
      onClick={handleClick}
      name={props.name}
    >
      {props.children}
    </div>
  );
};

export default Option;
