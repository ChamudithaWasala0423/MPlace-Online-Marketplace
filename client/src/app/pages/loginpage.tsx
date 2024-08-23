import React from 'react';
import Button from '@/components/button';
import Textarea from '@/components/textarea';
import SearchBar from '@/components/searchbar';
import Footer from '@/components/footer';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <div className="w-full h-[1364px] flex-col bg-white">
      {/* Main Content */}
      <div className="flex flex-grow ">
        {/* Left Side with Image */}
        <div className="flex-shrink-0 w-1/2 h-[940px]relative">
          <img
            className="w-full h-full object-cover "
            src="/loginpageimage.jpeg" // Make sure this image is in the public directory
            alt="Login Screen Background"
          />
        </div>

        {/* Right Side with Login Form */}
        <div className="flex-shrink-0 w-1/2 h-[940px] flex justify-center items-center bg-[#f3ebff]">
          <div className="w-[720px] p-8 bg-[#f3ebff]rounded-lg ">
            <div className="text-center text-black text-5xl font-semibold font-inter leading-tight mb-8">
              Welcome Back!
            </div>
            <div className="w-full flex flex-col gap-4">
            <div className="opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal mb-1">
                  Email or Phone Number
                </div>
             
              <Textarea
                className="h-[50px] w-[551px] bg-white rounded p-3"
             
              />
               <div className="opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal mb-1">
                  Email or Phone Number
                </div>
              <Textarea
                className="h-[50px] w-[551px] bg-white rounded p-3"
               
              />
            </div>
            <div className="mt-6 w-full">
            <Button variant="login" title="Log In" />
            </div>
           
            <div className="mt-6  flex justify-between items-center">
              <div className="text-left text-black/70 text-base font-normal font-poppins leading-normal">
                <span>Don't have an account?</span>
                <a href="/signup" className="text-[#7e2ee7] ml-1">Sign Up</a>
              </div>
              <a href="/forget-password" className="text-[#7e2ee7] text-base font-normal font-poppins leading-normal">
                Forgot Password
              </a>
            </div>

           
          </div>
        </div>
      </div>

      {/* Footer (Placeholder) */}
      <div className="w-full h-[100px] bg-gray-200 flex items-center justify-center">
       
          <Footer/>
        
      </div>
    </div>
  );
};

export default LoginPage;
