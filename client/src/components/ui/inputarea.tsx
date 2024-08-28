import React, { InputHTMLAttributes } from 'react';

interface InputAreaProps extends InputHTMLAttributes<HTMLInputElement> {
  customWidth?: string;
  customHeight?: string;
}

const InputArea: React.FC<InputAreaProps> = ({
  customWidth = 'auto',
  customHeight = 'auto',
  ...props
}) => {
  return (
    <input
      className={`relative bg-neutral-100 text-gray-800 rounded transition-colors duration-300 
        focus:outline-none focus:ring-1 focus:ring-[#7e2ee7] hover:border-[#7e2ee7] 
        ${customWidth} ${customHeight} border-1.5 p-3`}
      {...props}
    />
  );
};

export default InputArea;