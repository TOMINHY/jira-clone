import React, { useEffect } from "react";
import AuthenticationPage from "./AuthenticationPage";
import { Field } from "components/field";
import { Input } from "components/input";
import { useForm } from "react-hook-form";
import { Button } from "components/button";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "redux/auth/auth-slice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
  });
  const handleLogin = async (values) => {
    if (values.email === "" || values.password === "") return;
    try {
      dispatch(authLogin(values));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user?.email) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <AuthenticationPage>
      <div className="flex items-center justify-start gap-x-5 min-h-screen">
        <div className="hidden lg:block h-[600px] w-2/4">
          <img
            src="https://plus.unsplash.com/premium_photo-1685214580428-7eae1a78e7bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
            alt="img-register"
            className="w-full h-full rounded object-cover"
          />
        </div>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex-1 flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl font-bold text-black mb-10">
            Login cyberbugs
          </h1>
          <Field>
            <Input
              control={control}
              name="email"
              type="email"
              placeholder="Enter your email"
              kind="icon"
            ></Input>
          </Field>
          <Field>
            <Input
              control={control}
              name="password"
              type="password"
              placeholder="Enter your passwod"
              kind="lock"
            ></Input>
          </Field>
          <div className="flex items-center justify-center gap-x-[100px]">
            <Button
              type="submit"
              className="bg-purple-500 w-[350px] lg:!w-[500px] text-white"
            >
              Login
            </Button>
          </div>
          <div className="flex items-center justify-center gap-x-5 mt-5">
            <div className="w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center cursor-pointer">
              <i className="fa-brands fa-facebook-f" />
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center cursor-pointer">
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </form>
      </div>
    </AuthenticationPage>
  );
};

export default LoginPage;
