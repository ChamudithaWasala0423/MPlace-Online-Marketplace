"use client"
import React from 'react'

const Herosection = () => {
  return (
    <div>
         <section className="w-full relative flex flex-col items-center justify-center py-0 px-[72px] lg:px-[136px] box-border gap-0 text-left text-xl text-black font-title-16px-medium">
        <div className="self-stretch flex flex-col items-center justify-center text-center font-sans font-bold text-[32px] relative leading-normal">
          
          <p className="m-0  sm:text-[36px] lg:text-[48px]">Buy, Sell, and Succeed</p>
        <p className="m-0 sm:text-[36px] lg:text-[48px]">Your All-in-One Ad Solution</p>

        </div>
        <div className="w-full flex flex-row items-center justify-center py-0 px-4 box-border relative max-w-[664px] mt-[65px]">
          <div className="flex flex-row items-center justify-center w-full bg-slate-400 h-[68px]">
            {/* Add your Search Bar component here */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Herosection