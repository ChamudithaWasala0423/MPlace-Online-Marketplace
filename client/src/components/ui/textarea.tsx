import React, { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  customWidth?: string;
  customHeight?: string;
}

const Textarea: React.FC<TextareaProps> = ({ customWidth, customHeight, ...props }) => {
  return (
    <textarea
      className={`relative bg-neutral-100 rounded transition-colors duration-300 focus:outline-none 
                 hover:border-[#7e2ee7] ${customWidth} ${customHeight} w-2/4 h-full border border-2` }
      /*style={{
        width: customWidth || '1123px',
        height: customHeight || '50px',
      }}*/
      {...props}
    />
  );
};

export default Textarea;
