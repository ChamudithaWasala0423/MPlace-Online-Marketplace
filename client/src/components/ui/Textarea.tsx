import React, { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  customWidth?: string;
  customHeight?: string;
}

const Textarea: React.FC<TextareaProps> = ({ customWidth, customHeight, ...props }) => {
  return (
    <textarea
    className={`relative bg-neutral-100 text-gray-800 rounded transition-colors duration-300 
        focus:outline-none focus:ring-2 focus:ring-[#7e2ee7] hover:border-[#7e2ee7] 
        ${customWidth} ${customHeight} w-2/4 h-full border-2 p-3`}
      /*style={{
        width: customWidth || '1123px',
        height: customHeight || '50px',
      }}*/
      {...props}
    />
  );
};

export default Textarea;