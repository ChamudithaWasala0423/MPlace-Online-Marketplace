import React from 'react';
import Image from 'next/image';

type CategorycardProps = { 
  category: string; 
  icon: string; 
}

const Categorycard = ({ category, icon }: CategorycardProps) => {
  return (
    <div className="w-[200px] h-[200px] rounded-corner bg-secondary-50 flex flex-col justify-center items-center gap-3 hover:bg-secondary-100 
                    sm:w-[115px] sm:h-[115px]">
      <Image 
        src={icon} 
        alt="icon" 
        width={100} 
        height={100} 
        className="sm:w-[50px] sm:h-[50px]"
      />
      <p className="text-black font-sans text-[20px] font-normal 
                   sm:text-[14px]">
        {category}
      </p>
    </div>
  );
}

export default Categorycard;
