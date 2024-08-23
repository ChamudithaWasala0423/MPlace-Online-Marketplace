import React from 'react';

interface BrandStatusProps {
  status: string;
}

const BrandStatus: React.FC<BrandStatusProps> = ({ status }) => {
  return (
    <div className="w-[120px] h-[37px] px-3 py-2 bg-[#7e2ee7]/0 rounded border border-black justify-center items-center gap-2 inline-flex">
      <div className="w-[13px] h-[12.93px] relative">
        {/* Optional: You can add an icon here */}
      </div>
      <div className="text-[#6b6969] text-sm font-normal font-['Poppins'] leading-[21px]">
        {status}
      </div>
    </div>
  );
};

export default BrandStatus;
