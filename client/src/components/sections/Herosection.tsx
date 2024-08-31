"use client";
import React from "react";
import Image from "next/image";

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
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full flex justify-center items-center md:py-12">
            <div className="w-full max-w-[1168px] flex flex-col md:flex-row items-center justify-between bg-secondary-100 rounded-lg overflow-hidden object-cover h-full">
              {/* Text Section */}
              <div className=" w-1/2 marker:flex flex-col justify-center md:p-10 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-semibold tracking-wide leading-tight mb-4">
                  Start Adding Your Ads Today!
                </h2>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4
                font-sans font-normal"
                >
                  Ready to showcase your products or services to a wide
                  audience? Adding your ads to our platform is quick and easy!
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-8 font-sans font-normal">
                  By listing your items here, youll connect with eager buyers
                  and increase your visibility.
                </p>

                {/* Buttons Section */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                  
                  <div className=" rounded-lg">
                    <button className="w-full h-full bg-primary-100 text-white font-sans font-semibold text-base md:text-lg rounded-lg py-2 px-6 bg-purple-600 ">
                      Create an account
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-1/2 md:w-1/2">
                <Image
                  src="/images/banner.jpg"
                  alt="Banner Image"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover rounded-tr-none rounded-tl-none md:rounded-bl-none md:rounded-tr-lg"
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
