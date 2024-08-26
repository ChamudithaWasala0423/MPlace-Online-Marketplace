import React from "react";

type ButtonProps = {
  title: string;
  variant: "primary" | "small" | "secondary" | "login";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  title,
  variant,
  onClick,
}: ButtonProps) => {
  const baseStyles = "flex items-center justify-center rounded-md gap-2";

  const variantStyles = {
    primary: "h-[56px] px-12 py-4 bg-[#7E2EE7] hover:bg-[#A15CFE] w-auto",
    small: "h-[44px] px-12 py-2 bg-[#7E2EE7] hover:bg-[#A15CFE] w-auto",
    secondary:
      "h-[56px] px-12 py-4 border border-[#00000080] text-black hover:border-[#7D8184] hover:text-[#7D8184] w-auto",
    login:
      "h-[56px] px-12 py-4 bg-[#7e2ee7] rounded justify-center items-center gap-2.5 inline-flex w-[100%]",
  };

  const textStyles = {
    primary: "text-[#FAFAFA] text-base font-Poppins font-medium leading-6",
    small: "text-[#FAFAFA] text-base font-Poppins font-medium leading-6",
    secondary: "text-black text-base font-Poppins font-medium leading-6",
    login: "text-[#f9f9f9] text-[19px] font-medium leading-6",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      <p className={`${textStyles[variant]} break-words text-center`}>
        {title}
      </p>
    </button>
  );
};

export default Button;
