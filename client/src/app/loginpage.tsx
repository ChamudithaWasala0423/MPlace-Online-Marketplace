import React from 'react';
import Button from '@/components/ui/button';
import Textarea from '@/components/ui/textarea';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-white">
      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Left Side with Image */}
        <div className="flex-shrink-0 w-1/2 relative">
          <img
            className="w-full h-full object-cover mix-blend-lighten"
            src="/loginpageimage.jpeg" // Referencing image from the public directory
            alt="Login Screen Background"
          />
        </div>

        {/* Right Side with Login Form */}
        <div className="flex-shrink-0 w-1/2 flex justify-center items-center bg-[#f3ebff]">
          <div className="w-[720px] p-8 bg-white rounded-lg shadow-lg">
            <div className="text-center text-black text-5xl font-semibold font-inter leading-tight mb-8">
              Welcome Back!
            </div>
            <div className="w-full flex flex-col gap-4">
              <Textarea
                className="h-[50px] w-full bg-white rounded p-3"
                placeholder="Email or Phone Number"
              />
              <Textarea
                className="h-[50px] w-full bg-white rounded p-3"
                placeholder="Password"
              />
            </div>
            <div className="mt-6">
              <Button variant="primary" title="Log In" className="w-full" />
            </div>
            <div className="mt-4 text-center text-black/70 text-base font-normal font-poppins leading-normal">
              <span>Don't have an account?</span>

            </div>
            <div className="mt-8 flex flex-col items-center gap-2">
              <div className="text-black text-2xl font-bold font-inter leading-normal tracking-tight">
                or
              </div>
              <Button variant="secondary" title="Forgot Password" />
              <Button variant="secondary" title="Help" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer (Placeholder) */}
      <div className="w-full h-[100px] bg-gray-200 flex items-center justify-center">
        <p className="text-black/70 text-base font-normal font-poppins">
          Footer content goes here.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
