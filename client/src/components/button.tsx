import React from 'react';

type ButtonProps = {
  title: string;
  variant: 'primary' | 'small' | 'secondary' | 'login';
  customWidth?: string;
  customHeight?: string;
};

const Button: React.FC<ButtonProps> = ({ title, variant }) => {
  const baseStyles = 'flex items-center justify-center rounded-md gap-2';
  
  const variantStyles = {
    primary: 'w-[234px] h-[56px] px-12 py-4 bg-[#7E2EE7] hover:bg-[#A15CFE]',
    small: 'w-[192px] h-[44px] px-12 py-2 bg-[#7E2EE7] hover:bg-[#A15CFE]',
    secondary: 'w-[234px] h-[56px] px-12 py-4 border border-[#00000080] text-black hover:border-[#7D8184] hover:text-[#7D8184]',
    login: 'h-[56px] w-[551px] py-4 bg-[#7e2ee7] rounded justify-center items-center gap-2.5 inline-flex' // New 'login' variant styles
  };

  const textStyles = {
    primary: 'text-[#FAFAFA] text-base font-Poppins font-medium leading-6',
    small: 'text-[#FAFAFA] text-base font-Poppins font-medium leading-6',
    secondary: 'text-black text-base font-Poppins font-medium leading-6',
    login: 'text-[#f9f9f9] text-[19px] font-medium font-medium leading-6' // New 'login' text styles
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]}`}>
      <p className={`${textStyles[variant]} break-words`}>
        {title}
      </p>
    </div>
  );
};

export default Button;