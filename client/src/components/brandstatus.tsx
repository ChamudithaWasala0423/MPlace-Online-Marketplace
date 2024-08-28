import React, { useState } from 'react';

interface BrandStatusProps {
  initialStatus: string;
}

const BrandStatus: React.FC<BrandStatusProps> = ({ initialStatus }) => {
  const [status, setStatus] = useState(initialStatus);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  return (
    <div className="w-[120px] h-[37px] px-3 py-2 bg-[#7e2ee7]/0 rounded border border-black flex justify-center items-center gap-2">
      <select 
        value={status} 
        onChange={handleChange} 
        className="text-[#6b6969] text-sm font-normal font-['Poppins'] leading-[21px] bg-transparent outline-none">
        <option value="Brand new">Brand new</option>
        <option value="Handmade">Handmade</option>
      </select>
    </div>
  );
};

export default BrandStatus;
