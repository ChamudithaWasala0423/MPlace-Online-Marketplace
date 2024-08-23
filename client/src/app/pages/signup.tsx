import React from 'react';
import Button from '@/components/button';
import Textarea from '@/components/textarea';
import LoginPage from './loginpage';
import Footer from '@/components/footer';

interface SignupProps {}

const Signup: React.FC<SignupProps> = () => {
  return (
    <div className="w-full  h-[1364px] flex-col bg-white">
      {/* Main Content */}
      <div className="flex flex-grow  h-[940px]">
        {/* Left Side with Image */}
        <div className="flex-shrink-0 w-1/2 h-[940px] relative">
          <img
            className="w-full  object-cover "
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
                  Name
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
               <div className="opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal mb-1">
                  Password
                </div>
              <Textarea
                className="h-[50px] w-[551px] bg-white rounded p-3"
               
              />
            </div>
            <div className="mt-6 w-full">
            <Button variant="login" title="Sign up" />
            </div>
           
            <div className="mt-6  flex justify-between items-center">
              <div className="text-left text-black/70 text-base font-normal font-poppins leading-normal">
                <span>Don't have an account?</span>
                <a href="./loginpage" className="text-[#7e2ee7] ml-1">Login</a>
              </div>
              
            </div>
            {/*<Button variant="secondary" title="Forgot Password "  />*/}

           
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

export default Signup;
