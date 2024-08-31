import React from 'react';

import Image from 'next/image';
import Button from '../ui/button';
import Footer from '../ui/footer';
import InputArea from '../ui/Inputarea';


interface SignupProps {}

const Signup: React.FC<SignupProps> = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main Content */}
      <div className="flex flex-grow flex-col md:flex-row w-full">
        {/* Left Side with Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <Image
            className="w-full h-full object-cover md:object-contain"
            src="/loginpageimage.jpeg"
            alt="Signup Screen Background"
          />
        </div>

        {/* Right Side with Signup Form */}
        <div className="w-full md:w-1/2 flex justify-center items-center bg-[#f3ebff] p-4 md:p-8">
          <div className="w-full max-w-md bg-[#f3ebff] rounded-lg">
            <div className="text-center text-black text-3xl md:text-5xl font-semibold font-inter leading-tight mb-8">
              Welcome!
            </div>

            <div className="w-full flex flex-col gap-4">
              <div className="space-y-1">
                <div className="opacity-40 text-black text-sm md:text-base font-normal font-['Poppins'] leading-normal">
                  Name
                </div>
                <InputArea
                  className="h-12 w-full bg-white rounded p-3"
                />
              </div>
              <div className="space-y-1">
                <div className="opacity-40 text-black text-sm md:text-base font-normal font-['Poppins'] leading-normal">
                  Email
                </div>
                <InputArea
                  className="h-12 w-full bg-white rounded p-3"
                  type="email"
                />
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
              <div className="space-y-4">
                <div className='w-full'>
                  <Button variant="login" title="Sign Up" />
                </div>
                <div className='w-full'>
                  <button className="flex items-center justify-center w-full bg-white text-gray-700 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 h-[56px]">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_13183_10121)"><path d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z" fill="#3E82F1"/><path d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z" fill="#32A753"/><path d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z" fill="#F9BB00"/><path d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z" fill="#E74133"/></g><defs><clipPath id="clip0_13183_10121"><rect width="20" height="20" fill="white" transform="translate(0.5)"/></clipPath></defs>
                    </svg>
                    Sign in with Google
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
              <div className="text-center sm:text-left text-black/70 text-sm md:text-base font-normal font-poppins leading-normal mb-2 sm:mb-0">
                <span>Already have an account?</span>
                <a href="/login" className="text-[#7e2ee7] ml-1">Log In</a>
              </div>
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

export default Signup;