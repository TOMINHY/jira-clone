import React from "react";
import AuthenticationPage from "./AuthenticationPage";
import { Field } from "components/field";
import { Label } from "components/label";
import { Input } from "components/input";
import { useForm } from "react-hook-form";
import InputPasswordToggle from "components/input/InputPasswordToggle";
import { Button } from "components/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authRegister } from "redux/auth/auth-slice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const RegisterPage = () => {
  const schema = yup.object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("This field is required"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Password must be 8 character"),
    phoneNumber: yup
      .string()
      .min(10, "your number is unvalid")
      .required("A phone number is required"),
    name: yup.string().required("This field is required").max(10),
  });
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = (values) => {
    if (!isValid) return;
    try {
      dispatch(authRegister(values));
      reset({});
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthenticationPage heading="Sign Up">
      <div className="flex items-center justify-start gap-x-5">
        <div className="hidden lg:block h-[600px] w-2/4">
          <img
            src="https://images.unsplash.com/photo-1607000975574-0b425df6975a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
            alt="img-register"
            className="w-full h-full rounded object-cover"
          />
        </div>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="flex-1 flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl font-bold text-black mb-10">Sign Up</h1>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input
              control={control}
              name="email"
              type="email"
              placeholder="Enter your email"
              error={errors}
            ></Input>
            {errors && (
              <span className="text-red-500 text-sm mt-3">
                {errors?.email?.message}
              </span>
            )}
          </Field>
          <Field>
            <Label htmlFor="password">Password</Label>
            <InputPasswordToggle
              control={control}
              name="password"
            ></InputPasswordToggle>
            {errors && (
              <span className="text-red-500 text-sm mt-3">
                {errors?.password?.message}
              </span>
            )}
          </Field>
          <Field>
            <Label htmlFor="phoneNumber">Phone number</Label>
            <Input
              control={control}
              name="phoneNumber"
              type="number"
              placeholder="Enter your phone"
            ></Input>
            {errors && (
              <span className="text-red-500 text-sm mt-3">
                {errors?.phoneNumber?.message}
              </span>
            )}
          </Field>
          <Field>
            <Label htmlFor="name">Enter your name</Label>
            <Input
              control={control}
              name="name"
              type="text"
              placeholder="Enter your name"
            ></Input>
            {errors && (
              <span className="text-red-500 text-sm mt-3">
                {errors?.name?.message}
              </span>
            )}
          </Field>
          <div className="flex items-center justify-center gap-x-[100px]">
            <Button
              type="button"
              onClick={() => navigate("/login")}
              className="bg-green-500 text-white"
            >
              Login
            </Button>
            <Button
              type="submit"
              className="bg-green-500 text-white"
              isLoading={isSubmitting}
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </AuthenticationPage>
  );
};

export default RegisterPage;
