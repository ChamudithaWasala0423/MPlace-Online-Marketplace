import React from 'react';

type ButtonProps = {
  title: string;
  variant: 'primary' | 'small' | 'secondary' | 'login';
  customWidth?: string;
  customHeight?: string;
};

const Button: React.FC<ButtonProps> = ({ title, variant, customWidth, customHeight }) => {
  const baseStyles = 'flex items-center justify-center rounded-md gap-2';

  const variantStyles = {
    primary: 'w-full lg:w-[234px] h-[56px] px-12 py-4 bg-[#7E2EE7] hover:bg-[#A15CFE]',
    small: 'w-full lg:w-[192px] h-[44px] px-12 py-2 bg-[#7E2EE7] hover:bg-[#A15CFE]',
    secondary: 'w-full lg:w-[234px] h-[56px] px-12 py-4 border border-[#00000080] text-black hover:border-[#7D8184] hover:text-[#7D8184]',
    login: 'w-full lg:w-[200px] h-[56px] py-4 bg-[#7e2ee7] hover:bg-[#A15CFE] text-white',
    postAd: 'w-full lg:w-[200px] h-[56px] py-4 bg-[#F2994A] hover:bg-[#F2C94C] text-white'
  };

  const textStyles = {
    primary: 'text-[#FAFAFA] text-base font-Poppins font-medium leading-6',
    small: 'text-[#FAFAFA] text-base font-Poppins font-medium leading-6',
    secondary: 'text-black text-base font-Poppins font-medium leading-6',
    login: 'text-[#FAFAFA] text-base font-medium leading-6',
    postAd: 'text-[#FAFAFA] text-base font-medium leading-6'
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${customWidth || ''} ${customHeight || ''}`}
    >
      <p className={textStyles[variant]}>{title}</p>
    </div>
  );
};

export default Button;
