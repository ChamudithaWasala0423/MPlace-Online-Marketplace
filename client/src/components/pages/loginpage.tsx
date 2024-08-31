import React from "react";

import Image from "next/image";
import Button from "../ui/button";
import Footer from "../ui/footer";
import InputArea from "../ui/inputarea";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

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
          />
        </div>

        {/* Right Side with Login Form */}
        <div className="w-full md:w-1/2 flex justify-center items-center bg-[#f3ebff] p-4 md:p-8">
          <div className="w-full max-w-md bg-[#f3ebff] rounded-lg">
            <div className="text-center text-black text-3xl md:text-5xl font-semibold font-inter leading-tight mb-8">
              Welcome Back!
            </div>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4"
            >
              <div className="space-y-1">
                <div className="opacity-40 text-black text-sm md:text-base font-normal font-['Poppins'] leading-normal">
                  Email or Phone Number
                </div>
                <InputArea className="h-12 w-full bg-white rounded p-3" />
              </div>
              <div className="space-y-1">
                <div className="opacity-40 text-black text-sm md:text-base font-normal font-['Poppins'] leading-normal">
                  Password
                </div>
                <InputArea
                  className="h-12 w-full bg-white rounded p-3"
                  type="password"
                />
              </div>
              <div className="space-y-1">
                <div className="w-full">
                  <Button variant="login" title="Log In" />
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
