"use client"
import React, { useState } from 'react';

const Dashboard: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className='flex flex-col lg:flex-row lg:w-[1161px] lg:h-[806px] bg-green-200 justify-center gap-6 lg:gap-[74px] p-4'>
      {/* Sidebar */}
      <div className='flex flex-col lg:w-[217px] w-full bg-red-300 gap-4 p-4'>
        {/* Menu button for mobile view */}
        <button className='lg:hidden text-black text-2xl' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          &#9776;
        </button>

        {/* Sidebar items */}
        <div className={`lg:flex flex-col gap-4 ${isDropdownOpen ? 'block' : 'hidden'} lg:block`}>
          <p className='font-sans text-base text-black'>Profile overview</p>
          <div className='relative'>
            <button
              className='font-sans text-base text-black'
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Ad Management
            </button>
            {/* Dropdown */}
            <div className={`absolute bg-red-400 w-full top-full left-0 ${isDropdownOpen ? 'block' : 'hidden'}`}>
              <p className='font-sans text-base text-black p-2'>My Ads</p>
              <p className='font-sans text-base text-black p-2'>Drafts</p>
            </div>
          </div>
          <p className='font-sans text-base text-black'>Chat Notifications</p>
          <p className='font-sans text-base text-black'>Saved Items</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className='flex flex-col lg:w-[870px] w-full bg-blue-500 pt-[36px] pr-[72px] pb-[36px] pl-[72px]'>
        <div className='flex w-full h-full bg-slate-600'></div>
      </div>
    </div>
  );
};

export default Dashboard;
