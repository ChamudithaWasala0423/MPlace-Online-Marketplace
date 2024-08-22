"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Herosection = () => {
  return (
    <div>
      <section className="w-full relative flex flex-col items-center justify-center py-0 px-[72px] lg:px-[136px] box-border gap-0 text-left text-xl text-black font-title-16px-medium">
        <div className="self-stretch flex flex-col items-center justify-center text-center font-sans font-bold text-[32px] relative leading-normal">
          <p className="m-0  sm:text-[36px] lg:text-[48px]">
            Buy, Sell, and Succeed
          </p>
          <p className="m-0 sm:text-[36px] lg:text-[48px]">
            Your All-in-One Ad Solution
          </p>
        </div>
        <div className="w-full flex flex-row items-center justify-center py-0 px-4 box-border relative max-w-[664px] mt-[65px]">
          <div className="flex flex-row items-center justify-center w-full bg-slate-400 h-[68px]">
            {/* Add your Search Bar component here */}
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full flex justify-center items-center py-8 md:py-12">
            <div className="w-full max-w-[1168px] flex flex-col md:flex-row items-center justify-between bg-secondary-100 rounded-lg overflow-hidden shadow-lg">
              {/* Text Section */}
              <div className="flex flex-col justify-center p-6 md:p-10 text-center md:text-left md:w-1/2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide leading-tight mb-4">
                  Start Adding Your Ads Today!
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  Ready to showcase your products or services to a wide
                  audience? Adding your ads to our platform is quick and easy!
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-8">
                  By listing your items here, you'll connect with eager buyers
                  and increase your visibility.
                </p>

                {/* Buttons Section */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                  <div className="flex items-center justify-center text-secondary-900 cursor-pointer gap-2">
                    //add text button
                    <div>
                      <FaArrowRight className="w-6 h-6 md:w-8 md:h-8  " />
                    </div>
                  </div>
                  <div className="py-2 px-6 rounded-lg">//add button here</div>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full h-full object-cover md:w-1/2">
                <img
                  src="/images/banner.jpg"
                  alt="Banner Image"
                  className="w-full h-full object-fill rounded-tr-none rounded-tl-none md:rounded-bl-none md:rounded-tr-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
