"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import InputArea from "@/components/ui/inputarea";
import Button from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter }  from 'next/router';


const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid emnail!")
    .required("Please enter your email"),
  password: Yup.string().required("Please Enter your password!").min(8),
});

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const [show, setShow] = useState(false);
  const [login, { isSuccess, isError, data, error }] = useLoginMutation();



  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      console.log(email, password);
      await login({ email, password });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Successfully!");

      
    }
    if (isError) {
      if (error && "data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, isError, error]);

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="min-h-screen flex flex-col bg-white w-full">
      {/* Main Content */}
      <div className="flex flex-grow flex-col md:flex-row w-full">
        {/* Left Side with Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <Image
            className="w-full h-full object-cover md:object-contain"
            src="/loginpageimage.jpeg"
            alt="Login Screen Background"
            width={800}
            height={800}
          />
        </div>

        {/* Right Side with Login Form */}
        <div className="w-full md:w-1/2 flex justify-center items-center bg-[#f3ebff] p-4 md:p-8">
          <div className="w-full max-w-md bg-[#f3ebff] rounded-lg">
            <div className="text-center text-black text-3xl md:text-5xl font-semibold font-inter leading-tight mb-8">
              Welcome Back!
            </div>
            <form
              className="w-full flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <div className="space-y-1">
                <div className="opacity-40 text-black text-sm md:text-base font-normal font-['Poppins'] leading-normal">
                  Email
                </div>
                <InputArea
                  className={`${
                    errors.email && touched.email && "border-red-500"
                  }h-12 w-full bg-white rounded p-3 text-black `}
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="login@email.com"
                />
                {errors.email && touched.email && (
                  <span className="text-red-500 pt-2 block">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="space-y-1">
                <div className="opacity-40 text-black text-sm md:text-base font-normal font-['Poppins'] leading-normal">
                  Password
                </div>
                <InputArea
                  className={`${
                    errors.password && touched.password && "border-red-600"
                  }h-12 w-full bg-white rounded p-3 text-black`}
                  type={show ? "text" : "password"} // Adjusted here
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="password!@%#$"
                />
                {!show ? (
                  <AiOutlineEyeInvisible
                    className="absolute bottom-3 right-2 z-1 cursor-pointer"
                    size={20}
                    onClick={() => setShow(true)}
                  />
                ) : (
                  <AiOutlineEye
                    className="absolute bottom-3 right-2 z-1 cursor-pointer"
                    size={20}
                    onClick={() => setShow(false)}
                  />
                )}
                {errors.password && touched.password && (
                  <span className="text-red-500 pt-2 block">
                    {errors.password}
                  </span>
                )}
              </div>
              <div className="space-y-1">
                <div className="w-full bg-purple-600 p-4 flex items-center justify-center rounded-md cursor-pointer">
                <input type="submit" value="Login" className="cursor-pointer" />
                </div>
              </div>
            </form>

            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
              <div className="text-center sm:text-left text-black/70 text-sm md:text-base font-normal font-poppins leading-normal mb-2 sm:mb-0">
                <span>Don&apos;t have an account?</span>
                <a href="/signup" className="text-[#7e2ee7] ml-1">
                  Sign Up
                </a>
              </div>
              <a
                href="/forget-password"
                className="text-[#7e2ee7] text-sm md:text-base font-normal font-poppins leading-normal"
              >
                Forgot Password
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-gray-200">
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
