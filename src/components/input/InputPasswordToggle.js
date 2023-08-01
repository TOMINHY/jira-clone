import React, { useState } from "react";
import Input from "./Input";
import IconEyeOpen from "components/icon/IconEyeOpen";
import IconEyeClose from "components/icon/IconEyeClose";

const InputPasswordToggle = ({ control }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  if (!control) return null;
  return (
    <Input
      name="password"
      type={togglePassword ? "text" : "password"}
      placeholder="Enter your password"
      control={control}
    >
      {togglePassword ? (
        <IconEyeOpen onClick={() => setTogglePassword(false)}></IconEyeOpen>
      ) : (
        <IconEyeClose onClick={() => setTogglePassword(true)}></IconEyeClose>
      )}
    </Input>
  );
};

export default InputPasswordToggle;
