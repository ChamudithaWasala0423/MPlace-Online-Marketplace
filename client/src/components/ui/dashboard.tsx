import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:w-[1161px] lg:h-[806px] bg-green-200 justify-center gap-6 lg:gap-[74px] p-4'>
      <div className='flex flex-col lg:w-[217px] w-full bg-red-300 gap-4 p-4'>
        <p className='font-sans text-base text-black'>Profile overview</p>
        <p className='font-sans text-base text-black'>Profile overview</p>
        <p className='font-sans text-base text-black'>Profile overview</p>
      </div>
      <div className='flex flex-col lg:w-[870px] w-full bg-blue-500 pt-[36px] pr-[72px] pb-[36px] pl-[72px]'>
        <div className='flex w-full h-full bg-slate-600'></div>
      </div>
    </div>
  );
};

export default Dashboard;
